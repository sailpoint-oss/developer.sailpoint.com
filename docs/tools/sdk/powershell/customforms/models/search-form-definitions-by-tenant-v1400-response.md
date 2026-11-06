# SearchFormDefinitionsByTenantV1400Response

# SearchFormDefinitionsByTenantV1400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** |  | [optional] 
**Messages** | [**[]ErrorMessage**](error-message) |  | [optional] 
**StatusCode** | **Int64** |  | [optional] 
**TrackingId** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchFormDefinitionsByTenantV1400Response = Initialize-SearchFormDefinitionsByTenantV1400Response  -DetailCode null `
 -Messages null `
 -StatusCode null `
 -TrackingId null
```

- Convert the resource to JSON
```powershell
$SearchFormDefinitionsByTenantV1400Response | ConvertTo-JSON
```


[[Back to top]](#) 

