# FormElementPreviewRequest

# FormElementPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataSource** | [**FormElementDynamicDataSource**](form-element-dynamic-data-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementPreviewRequest = Initialize-FormElementPreviewRequest  -DataSource null
```

- Convert the resource to JSON
```powershell
$FormElementPreviewRequest | ConvertTo-JSON
```


[[Back to top]](#) 

