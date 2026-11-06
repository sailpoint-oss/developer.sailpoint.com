# AccessProfileReference

# AccessProfileReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the Access Profile | [optional] 
**Name** | **String** | Name of the Access Profile | [optional] 
**Description** | **String** | Information about the Access Profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileReference = Initialize-AccessProfileReference  -Id 2c91808a7190d06e01719938fcd20792 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database
```

- Convert the resource to JSON
```powershell
$AccessProfileReference | ConvertTo-JSON
```


[[Back to top]](#) 

