# MCPPackage

# MCPPackage

A package an MCP server can be installed or launched from. Every property is always present in the response and is `null` when the registry does not supply it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registry_type** | **str** | Package registry that hosts the package. | [optional] 
**identifier** | **str** | Package identifier within the registry. | [optional] 
**command** | **str** | Command used to launch the package. | [optional] 
**args** | **[]str** | Arguments passed to the launch command, in the order they are applied. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcp_package import MCPPackage

mcp_package = MCPPackage(
registry_type='npm',
identifier='@modelcontextprotocol/server-github',
command='npx',
args=["-y","@modelcontextprotocol/server-github"]
)

```
[[Back to top]](#) 

