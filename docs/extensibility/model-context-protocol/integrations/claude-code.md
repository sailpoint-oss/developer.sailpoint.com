---
id: claude-code-setup
title: Set Up MCP with Claude Code
pagination_label: Claude Code
sidebar_label: Claude Code
sidebar_position: 2
sidebar_class_name: claude-code
keywords: ['mcp', 'claude code', 'terminal', 'cli', 'setup']
description: Step-by-step guide to integrate your MCP Server with Claude Code for terminal-based development workflows
slug: /extensibility/mcp/integrations/claude-code
tags: ['MCP', 'Claude Code', 'CLI']
---

This guide will walk you through the process of connecting the SailPoint MCP server using Claude Code.

Claude Code connects to the SailPoint MCP Server using OAuth 2.1 with PKCE by way of the `mcp-remote` helper, so you no longer need to generate or paste in a long-lived authentication token. Instead, you supply a Client ID and Claude Code handles the login and consent flow for you in the browser.

:::warning
Before configuring this integration, please confirm with your organization's administrator whether the integration is allowed with this AI provider. SailPoint does not bear any responsibility in this regard.
:::

:::note
Claude Code's built-in remote MCP OAuth (`claude mcp add --transport http`) currently requires Dynamic Client Registration, which the SailPoint MCP Server does not support. This guide uses `mcp-remote` with a pre-registered Client ID instead.
:::

## Prerequisites

Before you begin, ensure you have the following:

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) installed and configured on your system
- Node.js and npm installed (required for the `npx` command)
- An ISC tenant with the MCP Access Requests feature enabled
- Permission to create an API client in ISC, or a Client ID provided by your administrator
- Basic familiarity with command line operations

:::note
The global MCP URL is not available for FedRAMP tenants or tenants with data sovereignty requirements. Those environments should continue to use their tenant-specific URL.
:::

## Step 1: Create an API client in ISC

In ISC, go to **Admin > Security Settings > API Management** and create a new API client:

1. Set the client type to **Public**.
2. Enable the **Authorization Code** and **Refresh Token** grant types.
3. Set the **Redirect URL** to `http://localhost:3334/oauth/callback`.
4. Set the **Scope** to `sp:scopes:all`.

Save the client and copy the **Client ID** — you will need it in the next step.

:::note
`3334` is the default local port `mcp-remote` uses for the OAuth callback. If that port is already in use, `mcp-remote` will pick a random port and authentication can fail with a redirect URI mismatch. To keep the redirect URL stable, pass a fixed port as an argument after the URL (as shown below) and register the matching `http://localhost:<port>/oauth/callback` URL on the API client.
:::

## Step 2: Add the MCP Server to Claude Code

Add the server with the command below. It uses the global MCP URL, which works for all tenants without any tenant-specific changes.

**Replace `your-client-id` with the Client ID from Step 1.**

```bash
claude mcp add-json sailpoint-mcp '{"type":"stdio","command":"npx","args":["mcp-remote@latest","https://mcp.sailpoint.com/latest/access-requests/mcp","3334","--static-oauth-client-info","{\"client_id\":\"your-client-id\"}"]}'
```

### Using the --scope Flag

The `--scope` flag is an optional parameter that controls which projects or directories have access to your MCP server. For detailed information about MCP installation scopes and when to use them, see the [MCP Installation Scopes documentation](https://docs.anthropic.com/en/docs/claude-code/mcp#mcp-installation-scopes).

### Command Breakdown

Let's break down the base command:

- `claude mcp add-json` - The Claude Code command to add an MCP server using JSON configuration
- `sailpoint-mcp` - A custom name for your MCP server connection (you can choose any name)
- `--scope <path>` - (Optional) Limits the server to specific project directories
- The JSON configuration object contains:
  - `"type": "stdio"` - Specifies the connection type as standard input/output
  - `"command": "npx"` - Uses npx to run the MCP remote package
  - `"args": [...]` - Array of arguments passed to the npx command:
    - `"mcp-remote@latest"` - The MCP remote package (always uses latest version)
    - `"https://mcp.sailpoint.com/latest/access-requests/mcp"` - The global MCP server endpoint
    - `"3334"` - The local port `mcp-remote` listens on for the OAuth callback (must match the redirect URL registered in Step 1)
    - `"--static-oauth-client-info"` - Tells `mcp-remote` to use your pre-registered Client ID instead of dynamic client registration
    - `"{\"client_id\":\"your-client-id\"}"` - The pre-registered Client ID from Step 1

## Step 3: Authenticate and Verify the Connection

After adding the MCP server, start a new Claude session:

```bash
claude
```

Once the session starts, use the MCP command to connect to your server:

```bash
/mcp
```

On first connect, `mcp-remote` opens a browser window to complete the OAuth flow:

1. Log in with your ISC credentials (SSO is supported if it is configured for your tenant).
2. Approve the consent screen.
3. You are connected — tokens refresh automatically, so you will not need to re-enter your credentials mid-session.

If the connection is successful, you should see `sailpoint-mcp` listed among your active MCP servers, confirming that the setup was completed correctly. From the `/mcp` menu you can:

- Browse the tools and their descriptions
- Verify that your `sailpoint-mcp` server appears in the configured servers list
- Test the server's functionality

## **Try it out!**

You can now ask Claude Code questions like "What can I request access to?” or “What is the status of my access request?” or “Cancel access request XYZ”

For more information about the tools, refer to the [SailPoint MCP tool documentation](../available-tools.mdx).
