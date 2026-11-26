# DocumentFields

# DocumentFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pod** | **String** | Name of the pod. | [optional] 
**Org** | **String** | Name of the tenant. | [optional] 
**Type** | **DocumentType** |  | [optional] 
**Type** | **DocumentType** |  | [optional] 
**Index** | **String** | Internal metadata field. This field is for SailPoint internal use only and is subject to change without notice. Do not rely on it in your integrations. | [optional] 

## Examples

- Prepare the resource
```powershell
$DocumentFields = Initialize-DocumentFields  -Pod pod01-useast1 `
 -Org org-name `
 -Type null `
 -Type null `
 -Index 44
```

- Convert the resource to JSON
```powershell
$DocumentFields | ConvertTo-JSON
```


[[Back to top]](#) 

