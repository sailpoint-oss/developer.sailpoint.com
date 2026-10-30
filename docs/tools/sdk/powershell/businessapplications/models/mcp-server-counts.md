# MCPServerCounts

# MCPServerCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegistryEntries** | **Int64** | Total number of MCP servers in the tenant. | [optional] 
**Remote** | **Int64** | Number of MCP servers that have at least one remote endpoint. | [optional] 
**ConnectedAgentCount** | **Int64** | Number of distinct AI agents connected to at least one MCP server. An agent connected to several MCP servers is counted once, so this can be less than the sum of each server's `connectedAgentCount`. | [optional] 

## Examples

- Prepare the resource
```powershell
$MCPServerCounts = Initialize-MCPServerCounts  -RegistryEntries 12 `
 -Remote 4 `
 -ConnectedAgentCount 7
```

- Convert the resource to JSON
```powershell
$MCPServerCounts | ConvertTo-JSON
```


[[Back to top]](#) 

