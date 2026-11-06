# ExportFormDefinitionsByTenantV1200ResponseInner

# ExportFormDefinitionsByTenantV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**Self** | [**ExportFormDefinitionsByTenantV1200ResponseInnerSelf**](export-form-definitions-by-tenant-v1200-response-inner-self) |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportFormDefinitionsByTenantV1200ResponseInner = Initialize-ExportFormDefinitionsByTenantV1200ResponseInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ExportFormDefinitionsByTenantV1200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

