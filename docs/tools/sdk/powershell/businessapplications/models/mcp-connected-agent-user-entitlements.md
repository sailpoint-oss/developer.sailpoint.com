# MCPConnectedAgentUserEntitlements

# MCPConnectedAgentUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | Source ID of the entitlement. | [optional] 
**EntitlementId** | **String** | Entitlement ID. | [optional] 
**DisplayName** | **String** | Entitlement display name. | [optional] 
**Source** | [**BaseReferenceDto**](base-reference-dto) | Source of the entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$MCPConnectedAgentUserEntitlements = Initialize-MCPConnectedAgentUserEntitlements  -SourceId 5898b7c1-620c-49c6-cccc-cbf81eb4bddd `
 -EntitlementId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -DisplayName Entitlement Name `
 -Source null
```

- Convert the resource to JSON
```powershell
$MCPConnectedAgentUserEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

