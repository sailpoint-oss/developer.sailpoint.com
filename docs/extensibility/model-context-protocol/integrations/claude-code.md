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

:::warning
Before configuring this integration, please confirm with your organization's administrator whether the integration is allowed with this AI provider. SailPoint does not bear any responsibility in this regard.
:::

## Prerequisites

Before you begin, ensure you have the following:

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) installed and configured on your system
- Node.js and npm installed (required for the `npx` command)
- Access credentials for your MCP server
- Basic familiarity with command line operations

## Step 1: Set Up Authentication

First, you'll need to configure your authentication token as an environment variable. This keeps your credentials secure and separate from your configuration.

### Setting the Environment Variable

**On macOS/Linux:**

```bash
export AUTH_TOKEN="your_actual_token_here"
```

**On Windows (Command Prompt):**

```cmd
set AUTH_TOKEN=your_actual_token_here
```

**On Windows (PowerShell):**

```powershell
$env:AUTH_TOKEN="your_actual_token_here"
```

:::tip
To make the environment variable persistent across sessions, add it to your shell profile (`.bashrc`, `.zshrc`, etc.) or system environment variables.
:::

## Step 2: Add the MCP Server to Claude Code

Once your authentication is configured, you can add the MCP server to Claude Code using the following command:

**Replace `[tenant]` with your tenant name.** For example:

- If your SailPoint URL is `https://acme.identitynow.com`, use `acme`
- Full URL would be: `https://acme.api.identitynow.com/v2025/access-requests/mcp`

```bash
claude mcp add-json sailpoint-mcp '{"type":"stdio","command":"npx","args":["mcp-remote@latest","https://[tenant].api.cloud.sailpoint.com/v2025/access-requests/mcp","--header","Authorization: Bearer ${AUTH_TOKEN}"]}'
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
    - `"https://[tenant].api.cloud.sailpoint.com/v2025/access-requests/mcp"` - Your MCP server endpoint
    - `"--debug"` - Enables debug logging for troubleshooting
    - `"--header"` - Specifies a custom header for authentication
    - `"Authorization: Bearer ${AUTH_TOKEN}"` - The authorization header using your environment variable

## Step 3: Verify the Connection

Here's an improved version of that snippet:

**Verifying the MCP Server Installation**

After adding the MCP server, verify the installation by starting a new Claude session:

```bash
claude
```

Once the session starts, use the MCP command to connect to your server:

```bash
/mcp
```

Claude will attempt to establish a connection to all configured MCP servers. Upon successful connection, you can:

- Browse the tools and their descriptions
- Verify that your `sailpoint-mcp` server appears in the configured servers list
- Test the server's functionality

If the connection is successful, you should see `sailpoint-mcp` listed among your active MCP servers, confirming that the setup was completed correctly.

## **Try it out!**

You can now ask Claude Code questions like "What can I request access to?” or “What is the status of my access request?” or “Cancel access request XYZ”

For more information about the tools, refer to the [SailPoint MCP tool documentation](../available-tools.mdx).
