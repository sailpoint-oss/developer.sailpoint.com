---
id: ui-plugins-limits
title: Limits and Supported Files
pagination_label: Limits and Supported Files
sidebar_label: Limits and Supported Files
sidebar_position: 5
sidebar_class_name: uiPluginsLimits
keywords: ['ui', 'plugins', 'ui-plugins', 'limits', 'quota', 'file size', 'file types', 'extensions', 'mime', 'upload', 'asset bundle']
description: Size and count limits for UI plugins, and the file types an asset bundle can contain.
slug: /ui-plugins/limits
tags: ['ui-plugins']
---

This page lists the limits that apply to UI plugins and the rules every uploaded asset bundle must follow.

## Plugin limits

| Limit | Value |
| --- | --- |
| Plugin instances per tenant | 20 |
| Files per asset bundle | 1,000 |
| Size of a single file | 10 MB (10,485,760 bytes) |
| Total size of an asset bundle | 100 MB (104,857,600 bytes) |

File and bundle sizes are measured on the uncompressed files.

## Supported file types

Every file in an asset bundle must have one of these extensions. The file's content type must also be one of the types listed for its extension. The CLI sets the content type from the extension, so you only need to think about content types if you upload through the API directly.

| Extension | Accepted content types |
| --- | --- |
| `.html`, `.htm` | `text/html` |
| `.js` | `text/javascript`, `application/javascript`, `application/x-javascript` |
| `.css` | `text/css` |
| `.json` | `application/json` |
| `.map` | `application/json` |
| `.png` | `image/png` |
| `.jpg`, `.jpeg` | `image/jpeg` |
| `.gif` | `image/gif` |
| `.svg` | `image/svg+xml` |
| `.webp` | `image/webp` |
| `.ico` | `image/x-icon`, `image/vnd.microsoft.icon`, `image/png` |
| `.woff` | `font/woff`, `application/font-woff` |
| `.woff2` | `font/woff2`, `application/font-woff2` |
| `.ttf` | `font/ttf`, `application/x-font-ttf` |
| `.eot` | `application/vnd.ms-fontobject` |
| `.txt` | `text/plain` |
| `.md` | `text/markdown`, `text/plain` |
| `.pdf` | `application/pdf` |
| `.wasm` | `application/wasm`, `application/octet-stream` |
| `.data` | `application/octet-stream` |
| `.js.metadata` | `application/octet-stream` |

Extensions are matched case-insensitively.

:::tip WebAssembly

To run `.wasm` files, the plugin must also add `'wasm-unsafe-eval'` to `script-src` in its [`contentSecurityPolicies`](/docs/ui-plugins/manifest#contentsecuritypolicies). A WebAssembly build may also include a `.data` file and a JSON file named `<name>.js.metadata`. Both are allowed.

:::

## Asset bundle rules

In addition to the limits and file types above, every asset bundle must follow these rules:

- **`index.html` at the root.** The bundle must contain an `index.html` file at the top level of the build output directory. This is the document SailPoint Identity Security loads.
- **Every file has an extension.** Files without an extension, such as `LICENSE` or `CHANGELOG`, are rejected. Rename them (for example, `LICENSE.txt`) or remove them from the build output.
- **Content matches the file type.** The contents of each file must match its file type. A file whose contents don't match its extension is rejected.
- **No empty files.** Every file must contain at least one byte.
- **Unique, relative paths.** Each path can appear only once. Paths can't be absolute or contain `..` segments.
- **Dotfiles are skipped.** Files whose name starts with a dot, such as `.DS_Store` or `.gitkeep`, are ignored and not uploaded. They don't count toward the file limit.

## Troubleshooting limit errors

If `sail ui-plugins create` fails because the tenant is full, you see this error:

```text
Tenant has reached the maximum of 20 plugin instances
```

Delete plugin instances you no longer need with `sail ui-plugins delete`, then try again.

If `sail ui-plugins upload` fails, the error message tells you which rule the bundle broke and, where it applies, which file.

| Error message | Fix |
| --- | --- |
| `Bundle must include index.html at the root` | Make sure `build.outDir` (or `--out-dir`) points at the directory that directly contains `index.html`. For the Angular starter this is `./dist/<alias>/browser`. |
| `File "<path>" exceeds the maximum individual file size of 10485760 bytes (10 MB)` | Reduce the file's size, for example by splitting large JavaScript chunks or compressing images and media. |
| `Asset bundle exceeds the maximum total size of 104857600 bytes (100 MB)` | Remove unused assets from the build output, or load large data from the SailPoint APIs at runtime instead of bundling it. |
| `Asset bundle exceeds the maximum of 1000 files` | Reduce the number of output files, for example by configuring your bundler to produce fewer chunks. |
| `Disallowed file type or content type for path: <path>` | The file's extension is not in [Supported file types](#supported-file-types), or the file has no extension. Rename or remove the file. |
| `File content does not match declared type for path: <path>` | The file's content doesn't match its extension. Check that the file isn't corrupt or misnamed (for example, a JPEG saved as `.png`). |
| `File is empty: <path>` | Remove the empty file or add content to it. |
| `Duplicate path in bundle: <path>` | Make sure each file in the build output has a unique path. |
