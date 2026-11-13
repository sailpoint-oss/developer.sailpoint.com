# MCPServer

# MCPServer

An MCP (Model Context Protocol) server discovered for the tenant and tracked as a Business Application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | MCP server ID. | [optional] 
**server_name** | **str** | MCP server name. | [optional] 
**sanctioned_status** | **SanctionedStatus** | Sanctioned status of the MCP server. MCP servers are currently always `UNKNOWN`. | [optional] 
**description** | **str** | MCP server description. | [optional] 
**version** | **str** | MCP server version. | [optional] 
**remotes** | **[]str** | Remote endpoints the MCP server can be reached at. | [optional] 
**packages** | [**[]MCPPackage**](mcp-package) | Packages the MCP server can be installed or launched from. | [optional] 
**connected_agent_count** | **int** | Number of AI agents connected to the MCP server. | [optional] 
**created** | **datetime** | Date and time the MCP server was created. | [optional] 
**modified** | **datetime** | Date and time the MCP server was last modified. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcp_server import MCPServer

mcp_server = MCPServer(
id='2ee5e239-e68c-4d69-93fb-6c7ce4576190',
server_name='io.github.github/github-mcp-server',
sanctioned_status='SANCTIONED',
description='Connects AI agents to GitHub repositories, issues, and pull requests.',
version='1.0.0',
remotes=["https://api.githubcopilot.com/mcp/"],
packages=[
                    sailpoint.business_applications.models.mcp_package.MCP Package(
                        registry_type = 'npm', 
                        identifier = '@modelcontextprotocol/server-github', 
                        command = 'npx', 
                        args = ["-y","@modelcontextprotocol/server-github"], )
                    ],
connected_agent_count=3,
created='2026-03-01T12:00Z',
modified='2026-03-15T08:30Z'
)

```
[[Back to top]](#) 

