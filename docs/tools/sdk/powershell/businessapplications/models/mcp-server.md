# MCPServer

# MCPServer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | MCP server ID. | [optional] 
**ServerName** | **String** | MCP server name. | [optional] 
**SanctionedStatus** | **SanctionedStatus** | Sanctioned status of the MCP server. MCP servers are currently always `UNKNOWN`. | [optional] 
**Description** | **String** | MCP server description. | [optional] 
**Version** | **String** | MCP server version. | [optional] 
**Remotes** | **[]String** | Remote endpoints the MCP server can be reached at. | [optional] 
**Packages** | [**[]MCPPackage**](mcp-package) | Packages the MCP server can be installed or launched from. | [optional] 
**ConnectedAgentCount** | **Int64** | Number of AI agents connected to the MCP server. | [optional] 
**Created** | **System.DateTime** | Date and time the MCP server was created. | [optional] 
**Modified** | **System.DateTime** | Date and time the MCP server was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$MCPServer = Initialize-MCPServer  -Id 2ee5e239-e68c-4d69-93fb-6c7ce4576190 `
 -ServerName io.github.github/github-mcp-server `
 -SanctionedStatus null `
 -Description Connects AI agents to GitHub repositories, issues, and pull requests. `
 -Version 1.0.0 `
 -Remotes ["https://api.githubcopilot.com/mcp/"] `
 -Packages null `
 -ConnectedAgentCount 3 `
 -Created 2026-03-01T12:00Z `
 -Modified 2026-03-15T08:30Z
```

- Convert the resource to JSON
```powershell
$MCPServer | ConvertTo-JSON
```


[[Back to top]](#) 

