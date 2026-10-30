# Reference

# Reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reference = Initialize-Reference  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe
```

- Convert the resource to JSON
```powershell
$Reference | ConvertTo-JSON
```


[[Back to top]](#) 

