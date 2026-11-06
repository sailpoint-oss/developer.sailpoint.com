# ValidateFilterOutputDto

# ValidateFilterOutputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValid** | **Boolean** | When this field is true, the filter expression is valid against the input. | [optional] [default to $false]
**IsValidJSONPath** | **Boolean** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to $false]
**IsPathExist** | **Boolean** | When this field is true, the filter expression is using an existing path. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ValidateFilterOutputDto = Initialize-ValidateFilterOutputDto  -IsValid true `
 -IsValidJSONPath true `
 -IsPathExist true
```

- Convert the resource to JSON
```powershell
$ValidateFilterOutputDto | ConvertTo-JSON
```


[[Back to top]](#) 

