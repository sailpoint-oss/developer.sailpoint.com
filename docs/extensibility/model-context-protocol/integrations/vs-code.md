---
id: vs-code-setup
title: Set Up MCP with Visual Studio Code
pagination_label: VS Code
sidebar_label: VS Code
sidebar_position: 3
sidebar_class_name: vs-code
keywords: ['mcp', 'editor', 'setup']
description: Step-by-step guide to integrate the SailPoint MCP Server with Visual Studio Code
slug: /extensibility/mcp/integrations/vs-code
tags: ['MCP', 'VS Code']
---

This guide shows you how to connect Visual Studio Code to the SailPoint Model Context Protocol (MCP) servers with the `mcp.json` configuration file.

VS Code connects to the SailPoint MCP servers through the `mcp-remote` helper, with OAuth 2.1 and PKCE. You do not need an authentication token. You add a Client ID to `mcp.json`, and `mcp-remote` runs the login and consent flow in your browser.

:::warning
Before configuring this integration, please confirm with your organization's administrator whether the integration is allowed with this AI provider. SailPoint does not bear any responsibility in this regard.
:::

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) (v1.101+) installed
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) extension installed and enabled
- Node.js and npm installed (required for the `npx` command)
- A SailPoint Identity Security tenant with the MCP Access Requests feature enabled
- Permission to create an API client in SailPoint Identity Security, or a Client ID provided by your administrator

:::note
The global MCP URL is not available for FedRAMP tenants or tenants with data sovereignty requirements. Those environments must use their tenant-specific URL.
:::

## Step 1: Create an API client in SailPoint Identity Security

Create an API client, as described in [Create an API client](../getting-started.mdx#step-1-create-an-api-client-in-sailpoint-identity-security). Use the redirect URL for VS Code. Then copy the **Client ID**. You need it in Step 3.

## Step 2: Enable MCP Support in VS Code

Before configuring the server, make sure MCP support is enabled in your VS Code settings:

1. Open the Command Palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux).
2. Search for and select `Preferences: Open Settings (JSON)`.
3. Add the following line to your settings if it is not already present:

```json
"chat.mcp.discovery.enabled": true
```

This setting allows VS Code to discover and connect to MCP servers defined in your `mcp.json` file.

## Step 3: Add the SailPoint MCP Servers to `mcp.json`

1. Open the Command Palette (`Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows/Linux).
2. Search for and select `MCP: Open User Configuration`.
3. Add the SailPoint servers to the `servers` object in `mcp.json`. If the object does not exist, add it:

    ```json
    {
      "servers": {
        "sailpoint-access-requests": {
          "type": "stdio",
          "command": "npx",
          "args": [
            "-y",
            "mcp-remote@0.8.7",
            "https://mcp.sailpoint.com/latest/access-requests/mcp",
            "13509",
            "--static-oauth-client-info",
            "{\"client_id\": \"YOUR_CLIENT_ID\"}",
            "--static-oauth-client-metadata",
            "{\"scope\": \"idn:access-request:manage\"}"
          ]
        },
        "sailpoint-identity-intelligence": {
          "type": "stdio",
          "command": "npx",
          "args": [
            "-y",
            "mcp-remote@0.8.7",
            "https://mcp.sailpoint.com/latest/intelligence/mcp",
            "13509",
            "--static-oauth-client-info",
            "{\"client_id\": \"YOUR_CLIENT_ID\"}",
            "--static-oauth-client-metadata",
            "{\"scope\": \"sp:identity-sec-intel:read\"}"
          ]
        }
      }
    }
    ```

4. Replace each `YOUR_CLIENT_ID` with the Client ID from Step 1. You can use the same Client ID for every server.
5. Save the file.

If you need only one server, delete the other one. For the URL and scope of each server, refer to [Servers](../getting-started.mdx#servers). For a description of each value in `args`, refer to [Claude Code](./claude-code.md#step-2-add-the-sailpoint-mcp-servers-to-claudejson).

:::note If VS Code cannot find npx
VS Code does not always load the `PATH` from your shell. For example, this occurs if you installed Node.js with nvm. If the server does not start, make these changes to each SailPoint server:

1. Find the full path to `npx`. On macOS or Linux, run `which npx`. On Windows, run `where npx`.
2. Set `command` to that full path.
3. Add an `env` object that puts the folder of that path first in `PATH`. For example:

    ```json
    "command": "/Users/you/.nvm/versions/node/v22.0.0/bin/npx",
    "env": {
      "PATH": "/Users/you/.nvm/versions/node/v22.0.0/bin:/usr/bin:/bin"
    }
    ```

`npx` starts `node` from the `PATH`, so the full path to `npx` alone is not enough.
:::

## Step 4: Connect and authenticate

1. Open the Command Palette.
2. Search for and select `MCP: Open User Configuration`.
3. Select `Start` above the configuration of a SailPoint server, for example `sailpoint-access-requests`.
4. `mcp-remote` opens a browser window for the OAuth flow. Enter your tenant name.
5. Log in with your SailPoint Identity Security credentials. SSO is supported if it is configured for your tenant.
6. Approve the consent screen. The browser goes back to `http://localhost:13509/oauth/callback`, and VS Code connects to the server.

Tokens refresh automatically, so you do not need to log in again during the session.

## Step 5: Verify the Connection

1. Open the Command Palette.
2. Search for and select `MCP: Show Installed Servers`.
3. Make sure that the SailPoint servers show in the list and are running.

## **Try it out!**

In a new VS Code chat, ask questions about your access. For example:

- “What can I request access to?”
- “What is the status of my access request?”
- “Cancel access request XYZ.”

For more information about the tools, refer to the [SailPoint MCP tool documentation](../available-tools.mdx).
