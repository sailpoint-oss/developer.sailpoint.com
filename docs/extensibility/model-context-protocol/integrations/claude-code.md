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

Claude Code connects to the SailPoint MCP servers through the `mcp-remote` helper, with OAuth 2.1 and PKCE. You do not need an authentication token. You add a Client ID to `~/.claude.json`, and `mcp-remote` runs the login and consent flow in your browser.

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
- A SailPoint Identity Security tenant with the MCP Access Requests feature enabled
- Permission to create an API client in SailPoint Identity Security, or a Client ID provided by your administrator
- Basic familiarity with command line operations

:::note
The global MCP URL is not available for FedRAMP tenants or tenants with data sovereignty requirements. Those environments should continue to use their tenant-specific URL.
:::

## Step 1: Create an API client in SailPoint Identity Security

Create an API client, as described in [Create an API client](../getting-started.mdx#step-1-create-an-api-client-in-sailpoint-identity-security). Use the redirect URL for Claude Code. Then copy the **Client ID**. You need it in the next step.

## Step 2: Add the SailPoint MCP Servers to `~/.claude.json`

Claude Code reads its MCP servers from the `~/.claude.json` file. The servers in the top-level `mcpServers` object are available in all of your projects.

1. Open `~/.claude.json` in a text editor.
2. Add the SailPoint servers to the top-level `mcpServers` object. If the object does not exist, add it:

    ```json
    {
      "mcpServers": {
        "sailpoint-access-requests": {
          "command": "npx",
          "args": [
            "-y",
            "mcp-remote@0.8.7",
            "https://mcp.sailpoint.com/latest/access-requests/mcp",
            "13509",
            "--static-oauth-client-info",
            "{\"client_id\": \"YOUR_CLIENT_ID\"}",
            "--static-oauth-client-metadata",
            "{\"scope\": \"sp:scopes:all\"}"
          ]
        },
        "sailpoint-identity-intelligence": {
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

3. Replace each `YOUR_CLIENT_ID` with the Client ID from Step 1. You can use the same Client ID for every server.
4. Save the file.

If you need only one server, delete the other one. For the URL and scope of each server, refer to [Servers](../getting-started.mdx#servers).

The `args` array contains these values:

- `"-y"`: lets `npx` install `mcp-remote` without a prompt.
- `"mcp-remote@0.8.7"`: the helper that runs the OAuth flow and connects Claude Code to the remote server.
- The server URL: the global URL of the server.
- `"13509"`: the local port that `mcp-remote` uses for the OAuth callback. This port must match the redirect URL from Step 1.
- `"--static-oauth-client-info"`: the Client ID from Step 1. `mcp-remote` uses this Client ID because the SailPoint MCP servers do not support Dynamic Client Registration.
- `"--static-oauth-client-metadata"`: the scope that `mcp-remote` requests for the server.

:::note
Claude Desktop does not read `~/.claude.json`. To use the SailPoint servers in Claude Desktop, add the same configuration to `claude_desktop_config.json`. For instructions, refer to [Claude Desktop](./claude-desktop.md).
:::

## Step 3: Authenticate and Verify the Connection

1. Start a new Claude Code session:

    ```bash
    claude
    ```

2. Enter the `/mcp` command. Claude Code shows the SailPoint servers in the list of MCP servers.
3. Select a SailPoint server to connect. `mcp-remote` opens a browser window for the OAuth flow.
4. Enter your tenant name.
5. Log in with your SailPoint Identity Security credentials. SSO is supported if it is configured for your tenant.
6. Approve the consent screen. The browser goes back to `http://localhost:13509/oauth/callback`, and Claude Code connects to the server.

Tokens refresh automatically, so you do not need to log in again during the session.

From the `/mcp` menu, you can see the tools of each server and their descriptions.

## **Try it out!**

In a Claude Code session, ask questions about your access. For example:

- “What can I request access to?”
- “What is the status of my access request?”
- “Cancel access request XYZ.”

For more information about the tools, refer to the [SailPoint MCP tool documentation](../available-tools.mdx).
