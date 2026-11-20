# PasswordInfoQueryDTO

# PasswordInfoQueryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **String** | The login name of the user | [optional] 
**SourceName** | **String** | The display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordInfoQueryDTO = Initialize-PasswordInfoQueryDTO  -UserName Abby.Smith `
 -SourceName My-AD
```

- Convert the resource to JSON
```powershell
$PasswordInfoQueryDTO | ConvertTo-JSON
```


[[Back to top]](#) 

