# MCPServerCounts

# MCPServerCounts

Tenant-wide MCP server totals. All values are `0` when the tenant has no MCP servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registry_entries** | **int** | Total number of MCP servers in the tenant. | [optional] 
**remote** | **int** | Number of MCP servers that have at least one remote endpoint. | [optional] 
**connected_agent_count** | **int** | Number of distinct AI agents connected to at least one MCP server. An agent connected to several MCP servers is counted once, so this can be less than the sum of each server's `connectedAgentCount`. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcp_server_counts import MCPServerCounts

mcp_server_counts = MCPServerCounts(
registry_entries=12,
remote=4,
connected_agent_count=7
)

```
[[Back to top]](#) 

