---
id: cli-whoami
title: Whoami
pagination_label: CLI Whoami
sidebar_label: Whoami
sidebar_position: 12
sidebar_class_name: cli-whoami
keywords: ['cli', 'cli whoami', 'whoami', 'authentication', 'environment variables', 'pat', 'oauth']
description: Learn how to use the CLI to see how you are authenticated, which credentials are in use, and what your access token contains.
slug: /tools/cli/whoami
tags: ['CLI']
---

Learn how to use the SailPoint CLI to see how you're authenticated against SailPoint Identity Security in this guide.

The `whoami` command makes it easy to see how the CLI is logged in and which credentials it's using. It shows the following information:

- the active environment and the auth type (PAT or OAuth)
- where each setting comes from: an environment variable, a flag, the config file, the keychain, or a default
- any `SAIL_*` environment variables that are set
- what your current access token contains, such as the user, tenant, pod, scopes, and expiry
- for PAT authentication, the PAT's name, owner, created date, and expiry
- warnings about credentials that may not be the ones you meant to use

The `whoami` command never opens a browser. It uses your cached token, gets a new PAT token, or refreshes your OAuth token when that needs no prompt. Otherwise, it tells you that you're not logged in.

- [Show how you're logged in](#show-how-youre-logged-in)
- [Check which credentials are in use](#check-which-credentials-are-in-use)
- [Print the result as JSON](#print-the-result-as-json)

## Show how you're logged in

Run this command to see how you're logged in to the active environment:

```shell
sail whoami
```

Here is an example of the output:

```text
Configuration
  Environment:    acme  (config file)
  Auth type:      PAT  (config file)
  Base URL:       https://acme.api.identitynow.com  (config file)
  Client ID:      from keychain
  Client secret:  from keychain

Environment variables  none set

Token
  User:         jane.doe
  Identity ID:  2c9180857182305e0171993735622948
  Client ID:    ****8f2a
  Tenant:       acme
  Pod:          prd01-useast1
  Strong auth:  true
  Expires:      2026-11-20T01:14:37Z  (expires in 11h59m59s)
  Authorities:  sp:user, ORG_ADMIN
  Scopes:       encoded in the token: Bg==  (see the PAT's scopes below)

Personal access token
  Name:     ci-pipeline
  ID:       ****8f2a
  Owner:    jane.doe
  Scopes:   sp:scopes:all
  Created:  2026-09-01  (78 days ago)
  Expires:  2027-03-01
```

The output has these sections:

- **Configuration**: The active environment, auth type, and URLs. Each value shows where it came from in parentheses. For PAT authentication, it also shows whether the client ID and client secret came from environment variables or the keychain.
- **Environment variables**: Every `SAIL_*` environment variable that is set. These override your config file and keychain. Secrets are hidden, and client IDs only show their last four characters.
- **Token**: What your access token contains. The client ID only shows its last four characters.
- **Personal access token**: The PAT record from your tenant. This section only appears for PAT authentication.

Use the `--debug` flag to show full client IDs instead:

```shell
sail whoami --debug
```

The command also shows full client IDs when debug mode is on for the whole CLI. Run `sail set debug disable` to turn it off.

This command uses the [List personal access tokens endpoint](https://developer.sailpoint.com/docs/api/list-personal-access-tokens-v-1) to look up your PAT.

:::note
Access tokens carry their scopes in an encoded form, such as `Bg==`, which the CLI can't decode. For PAT authentication, the readable scopes are listed in the **Personal access token** section. For OAuth authentication, only the encoded value is available.
:::

Run this command to see how you're logged in to a different environment:

```shell
sail whoami --env {environment-name}
```

## Check which credentials are in use

Environment variables, such as `SAIL_CLIENT_ID` and `SAIL_CLIENT_SECRET`, override the credentials you saved with `sail set pat`. This is easy to miss, especially if the variables were set a long time ago in a shell profile or a CI/CD pipeline. The `whoami` command lists every `SAIL_*` variable that is set and prints warnings at the top of its output when something needs your attention.

For example, if environment variables hold old PAT credentials that are different from the ones you saved, the command shows:

```text
Warnings
  ! SAIL_CLIENT_ID is overriding the PAT client ID saved for environment "acme". If that's not intended, unset SAIL_CLIENT_ID.
  ! SAIL_CLIENT_SECRET is overriding the PAT client secret saved for environment "acme". If that's not intended, unset SAIL_CLIENT_SECRET.
  ! The keychain has a cached token for environment "acme" that was issued to a different PAT (****8f2a). Other sail commands will keep using that token instead of the configured credentials until it expires at 2026-11-20T01:14:36Z.
  ! Login failed with PAT credentials from environment variables. They may be out of date, revoked or for another tenant. Check or unset SAIL_CLIENT_ID and SAIL_CLIENT_SECRET.
```

The `whoami` command can show these warnings:

| Warning | What it means |
| --- | --- |
| `... is overriding the ... saved for environment` | An environment variable replaces a different value you saved for the environment. Unset the variable if you meant to use the saved value. |
| `The keychain has a cached token ... issued to a different PAT` | The CLI cached a token for another PAT. Other commands keep using that token until it expires, even though different credentials are configured now. |
| `Login failed with PAT credentials from environment variables` | The tenant rejected the PAT credentials from `SAIL_CLIENT_ID` and `SAIL_CLIENT_SECRET`. Check or unset them. |

When your PAT credentials come from environment variables, the command always logs in with them to check that they work. It doesn't cache that token, so it doesn't change the session that other commands use.

## Print the result as JSON

Use the `--json` flag to print the same information as JSON:

```shell
sail whoami --json
```
