# SodViolationCheck

# SodViolationCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | The id of the original request | [required]
**Created** | **System.DateTime** | The date-time when this request was created. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$SodViolationCheck = Initialize-SodViolationCheck  -RequestId 089899f13a8f4da7824996191587bab9 `
 -Created 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$SodViolationCheck | ConvertTo-JSON
```


[[Back to top]](#) 

