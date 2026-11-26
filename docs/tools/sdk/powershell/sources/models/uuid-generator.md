# UUIDGenerator

# UUIDGenerator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$UUIDGenerator = Initialize-UUIDGenerator  -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$UUIDGenerator | ConvertTo-JSON
```


[[Back to top]](#) 

