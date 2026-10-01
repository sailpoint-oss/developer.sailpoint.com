# SedPatch

# SedPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **String** | desired operation | [optional] 
**Path** | **String** | field to be patched | [optional] 
**Value** | **AnyType** | value to replace with | [optional] 

## Examples

- Prepare the resource
```powershell
$SedPatch = Initialize-SedPatch  -Op replace `
 -Path status `
 -Value approved
```

- Convert the resource to JSON
```powershell
$SedPatch | ConvertTo-JSON
```


[[Back to top]](#) 

