---
id: ui-plugins-manifest
title: The sp-ui-plugin.json Manifest
pagination_label: Plugin Manifest
sidebar_label: Plugin Manifest
sidebar_position: 4
sidebar_class_name: uiPluginsManifest
keywords: ['ui', 'plugins', 'ui-plugins', 'manifest', 'sp-ui-plugin.json', 'csp', 'content security policy', 'permissions-policy', 'iframe', 'allow', 'sandbox', 'slots', 'scopes']
description: Reference for every field in the sp-ui-plugin.json manifest, including the plugin's security policies.
slug: /ui-plugins/manifest
tags: ['ui-plugins']
---

Every plugin workspace contains an `sp-ui-plugin.json` file at its root. It describes the plugin to SailPoint Identity Security and tells the CLI where to find your build output. `sail ui-plugins init` generates it, and every other `sail ui-plugins` command reads it.

## File structure

The file has three top-level fields:

- `version` — the config schema version.
- `manifest` — the plugin definition sent to SailPoint Identity Security when you run `create` or `push-manifest`.
- `build` — local CLI configuration. It is never sent to SailPoint Identity Security.

```json
{
    "version": 1,
    "manifest": {
        "alias": "my-plugin",
        "name": { "en": "My Plugin", "fr": "Mon plugin" },
        "description": { "en": "My Plugin", "fr": "Mon plugin" },
        "apiScopes": ["idn:identity:read", "sp:search:read"],
        "contentSecurityPolicies": {},
        "permissionPolicy": {},
        "iframeAllow": {},
        "iframeSandbox": [],
        "slots": [{ "slotId": "full-page" }]
    },
    "build": {
        "outDir": "./dist/my-plugin/browser",
        "port": 4200
    }
}
```

The CLI rejects any field that is not documented on this page. Run `sail ui-plugins validate-manifest` to check the file's structure without contacting your tenant. SailPoint Identity Security validates the values of every field, including the security policies, when you run `create` or `push-manifest`.

## Field summary

| Field | Required | Type | Description |
| --- | --- | --- | --- |
| `version` | Yes | number | Config schema version. Must be `1`. |
| [`manifest.alias`](#alias) | Yes | string | Tenant-unique key for the plugin. |
| [`manifest.name`](#name-and-description) | Yes | locale map | Localized display name. |
| [`manifest.description`](#name-and-description) | Yes | locale map | Localized description. |
| [`manifest.apiScopes`](#apiscopes) | No | string array | API scopes the plugin's access token is granted. |
| [`manifest.state`](#state) | No | string | `ENABLED` or `DISABLED`. Defaults to `ENABLED`. |
| [`manifest.slots`](#slots) | Yes | object array | Where the plugin appears in the UI. |
| [`manifest.contentSecurityPolicies`](#contentsecuritypolicies) | Yes | directive map | Content Security Policy additions. Use `{}` for none. |
| [`manifest.permissionPolicy`](#permissionpolicy-and-iframeallow) | Yes | directive map | Browser features the plugin document allows. Use `{}` for none. |
| [`manifest.iframeAllow`](#permissionpolicy-and-iframeallow) | Yes | directive map | Browser features delegated to the plugin iframe. Use `{}` for none. |
| [`manifest.iframeSandbox`](#iframesandbox) | No | string array | Additional iframe sandbox permissions. |
| [`build.outDir`](#build) | No | string | Build output directory that `upload` deploys from. |
| [`build.port`](#build) | No | number | Local dev server port that `link` registers. |

## manifest

### alias

The alias may contain only letters, numbers, and dashes. It can't start or end with a dash or contain consecutive dashes. `init` checks that the alias is available in your tenant before scaffolding.

### name and description

Localized strings, written as a map of locale to text. Each map needs at least one entry, and each value must be non-empty.

```json
"name": { "en": "Access Requests", "fr": "Demandes d'accès" },
"description": { "en": "Request access for yourself or your team." }
```

SailPoint Identity Security uses the name wherever it lists the plugin, such as the **Plugin** list when you add the plugin to the nav bar.

### apiScopes

The API scopes granted to the access token that SailPoint Identity Security issues to the plugin. Request only the scopes the plugin needs. A plugin can request up to 20 scopes.

```json
"apiScopes": ["idn:identity:read", "sp:search:read"]
```

### state

Whether the plugin is available to users. Set it to `ENABLED` or `DISABLED`. If you omit it, the plugin is `ENABLED`.

### slots

The places in the SailPoint Identity Security UI where the plugin appears. A plugin must declare at least one slot and can declare up to 10.

| Field | Required | Description |
| --- | --- | --- |
| `slotId` | Yes | The slot the plugin occupies. Use `full-page`. |
| `requiredCapabilities` | No | The plugin is shown only to users who have **all** of these capabilities. Up to 10 values. |
| `restrictToUsers` | No | The plugin is shown only to these identities. Up to 10 identity IDs, each a 32-character hexadecimal string. |

The `full-page` slot renders the plugin as its own page at `https://<tenant>/ui/plugin/<plugin-instance-id>`. To give users a way to reach it, [add the plugin to the nav bar](/docs/ui-plugins/create-a-plugin-instance#step-7-add-the-plugin-to-the-nav-bar).

```json
"slots": [
    {
        "slotId": "full-page",
        "requiredCapabilities": ["ORG_ADMIN"]
    }
]
```

:::tip Restrict a plugin while you develop it

Instead of editing `restrictToUsers` by hand, pass `--private` to `create` or `push-manifest` to restrict the plugin to your own identity on every slot, or `--restrict-to-users <id,id>` to restrict it to specific identities. Both flags replace any `restrictToUsers` values in the file.

:::

## Security policies

A plugin runs inside a sandboxed iframe with a restrictive security baseline. By default, the plugin can load scripts, styles, images, and fonts from its own bundle and call the SailPoint APIs its `apiScopes` grant — and nothing else. The four policy fields below let the plugin opt into specific additional capabilities.

Every policy field is deny-by-default: an empty value grants nothing, and SailPoint Identity Security rejects any directive or value that is not listed in this section.

### contentSecurityPolicies

Additions to the plugin document's [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP). The field is a map of directive name to an array of values. Use `{}` if the plugin needs no additions.

| Directive | Allowed value | Effect |
| --- | --- | --- |
| `script-src` | `'wasm-unsafe-eval'` | Lets the plugin compile and run WebAssembly. Required to load `.wasm` files. This does not allow `eval()` or `new Function()`. |
| `style-src` | `'unsafe-inline'` | Allows inline `<style>` elements and `style` attributes. |

```json
"contentSecurityPolicies": {
    "script-src": ["'wasm-unsafe-eval'"]
}
```

Values must include the single quotes, exactly as shown.

### permissionPolicy and iframeAllow

These two fields work together to give the plugin access to powerful browser features such as the clipboard or camera. Browsers check two layers before allowing a feature inside an iframe:

- `iframeAllow` sets the iframe's [`allow` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#allow), which delegates the feature from SailPoint Identity Security to the plugin frame.
- `permissionPolicy` sets the plugin document's [`Permissions-Policy` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy), which allows the plugin document to use the feature.

**To use a feature, declare it in both fields.** If you declare it in only one, the browser blocks it. Every browser feature you don't declare is denied.

Both fields are maps of feature name to an array containing exactly one value. The value differs between the two fields:

| Feature | `permissionPolicy` value | `iframeAllow` value | Enables |
| --- | --- | --- | --- |
| `clipboard-read` | `'self'` | `'src'` | Reading the clipboard with the Clipboard API |
| `clipboard-write` | `'self'` | `'src'` | Writing to the clipboard with the Clipboard API |
| `camera` | `'self'` | `'src'` | Video input devices |
| `microphone` | `'self'` | `'src'` | Audio input devices |
| `geolocation` | `'self'` | `'src'` | The Geolocation API |
| `fullscreen` | `'self'` | `'src'` | `Element.requestFullscreen()` |
| `accelerometer` | `'self'` | `'src'` | The Accelerometer sensor |
| `gyroscope` | `'self'` | `'src'` | The Gyroscope sensor |
| `magnetometer` | `'self'` | `'src'` | The Magnetometer sensor |

For example, a plugin that offers a **Copy** button needs `clipboard-write` in both fields:

```json
"permissionPolicy": {
    "clipboard-write": ["'self'"]
},
"iframeAllow": {
    "clipboard-write": ["'src'"]
}
```

Use `{}` for both fields if the plugin needs none of these features. Selecting and copying text with the keyboard or context menu works without either field. You only need `clipboard-write` to write to the clipboard from script.

### iframeSandbox

Additional permissions for the plugin iframe's [`sandbox` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox). The field is an array of sandbox tokens. If you omit it or leave it empty, the plugin gets none of these permissions.

| Token | Enables |
| --- | --- |
| `allow-popups` | Opening new windows or tabs, for example with `window.open()` or a link with `target="_blank"`. |
| `allow-popups-to-escape-sandbox` | Lets windows opened by the plugin load without the plugin's sandbox restrictions. Add this with `allow-popups` when the plugin opens external websites, which often don't work inside a sandbox. |
| `allow-downloads` | Downloading files, for example with a link that has the `download` attribute. |
| `allow-modals` | Native dialogs: `alert()`, `confirm()`, `prompt()`, and `print()`. |
| `allow-top-navigation` | Navigating the top-level SailPoint Identity Security window away from the plugin page. |

Tokens are case-sensitive.

```json
"iframeSandbox": ["allow-popups", "allow-popups-to-escape-sandbox", "allow-downloads"]
```

### Applying policy changes

To change a deployed plugin's policies, edit `sp-ui-plugin.json` and run `sail ui-plugins push-manifest`. The new policies apply to the plugin's active asset bundle; you don't need to upload the assets again.

Your local dev server applies the same policies. In the Angular starter, `create` and `link` write the plugin's `Content-Security-Policy` and `Permissions-Policy` headers into `angular.json`. After a policy change, run `push-manifest`, run `link` again to refresh those headers, then restart your dev server.

## build

Local CLI configuration. The CLI strips this section before sending anything to SailPoint Identity Security.

| Field | Description |
| --- | --- |
| `outDir` | Directory containing your compiled assets. `upload` deploys the contents of this directory. The `--out-dir` flag overrides it. |
| `port` | Port your local dev server listens on. `link` registers this port. The `--port` flag overrides it. Defaults to `4200`. |
