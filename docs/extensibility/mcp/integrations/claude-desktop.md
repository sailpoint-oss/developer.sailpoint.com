# Set Up MCP with Claude Desktop

This guide shows you how to connect Claude Desktop to the SailPoint MCP servers.

Claude Desktop connects to the SailPoint MCP servers through the `mcp-remote` helper, with OAuth 2.1 and PKCE. You do not need an authentication token. You add a Client ID to the `claude_desktop_config.json` file, and `mcp-remote` runs the login and consent flow in your browser.

:::warning
Before configuring this integration, please confirm with your organization's administrator whether the integration is allowed with this AI provider. SailPoint does not bear any responsibility in this regard.
:::

## Prerequisites

Before you begin, make sure that you have the following:

- [Claude Desktop](https://claude.ai/download) installed and configured on your system
- Node.js and npm installed (required for the `npx` command)
- A SailPoint Identity Security tenant with the MCP Access Requests feature enabled
- Permission to create an API client in SailPoint Identity Security, or a Client ID provided by your administrator

:::note
The global MCP URL is not available for FedRAMP tenants or tenants with data sovereignty requirements. Those environments must use their tenant-specific URL.
:::

## Step 1: Create an API client in SailPoint Identity Security

Create an API client, as described in [Create an API client](../getting-started.mdx#step-1-create-an-api-client-in-sailpoint-identity-security). Use the redirect URL for Claude Desktop. Then copy the **Client ID**. You need it in the next step.

## Step 2: Add the SailPoint MCP Servers to `claude_desktop_config.json`

Claude Desktop reads its local MCP servers from the `claude_desktop_config.json` file.

1. In Claude Desktop, select your name in the bottom-left corner, then select **Settings**.
2. Select **Developer**.
3. Select **Edit Config** to find `claude_desktop_config.json`, then open the file in a text editor.
4. Add the SailPoint servers to the top-level `mcpServers` object. If the object does not exist, add it. Keep the other settings in the file:

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
            "{\"scope\": \"idn:access-request:manage\"}"
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

5. Replace each `YOUR_CLIENT_ID` with the Client ID from Step 1. You can use the same Client ID for every server.
6. Save the file.

If you need only one server, delete the other one. For the URL and scope of each server, refer to [Servers](../getting-started.mdx#servers). For a description of each value in `args`, refer to [Claude Code](./claude-code.md#step-2-add-the-sailpoint-mcp-servers-to-claudejson).

## Step 3: Connect and authenticate

1. Restart Claude Desktop.
2. In a new chat, select the **+** icon, then hover over **Connectors**. The SailPoint servers show in the list.
3. Connect to a SailPoint server. `mcp-remote` opens a browser window for the OAuth flow.
4. Enter your tenant name.
5. Log in with your SailPoint Identity Security credentials. SSO is supported if it is configured for your tenant.
6. Approve the consent screen. The browser goes back to `http://localhost:13509/oauth/callback`, and Claude Desktop connects to the server.

Tokens refresh automatically, so you do not need to log in again during the session.

## **Check for MCP tools**

1. In a new chat, select the **+** icon.
2. Hover over **Connectors**. The SailPoint servers show in the list.
3. Make sure that the SailPoint servers are connected and turned on.

## **Try it out!**

Ask Claude questions about your access. For example:

- “What can I request access to?”
- “What is the status of my access request?”
- “Cancel access request XYZ.”

For more information about the tools, refer to the [SailPoint MCP tool documentation](../available-tools.mdx).
