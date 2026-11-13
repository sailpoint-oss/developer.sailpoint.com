# MCPConnectedAgentOwners

# MCPConnectedAgentOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | [**BaseReferenceDto**](base-reference-dto) | Primary owner. | [optional] 
**SecondaryIdentities** | [**[]BaseReferenceDto**](base-reference-dto) | Secondary owners. | [optional] 

## Examples

- Prepare the resource
```powershell
$MCPConnectedAgentOwners = Initialize-MCPConnectedAgentOwners  -PrimaryIdentity null `
 -SecondaryIdentities null
```

- Convert the resource to JSON
```powershell
$MCPConnectedAgentOwners | ConvertTo-JSON
```


[[Back to top]](#) 

