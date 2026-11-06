# SessionConfiguration

# SessionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** | **Int32** | The maximum time in minutes a session can be idle. | [optional] 
**RememberMe** | **Boolean** | Denotes if 'remember me' is enabled. | [optional] [default to $false]
**MaxSessionTime** | **Int32** | The maximum allowable session time in minutes. | [optional] 

## Examples

- Prepare the resource
```powershell
$SessionConfiguration = Initialize-SessionConfiguration  -MaxIdleTime 15 `
 -RememberMe true `
 -MaxSessionTime 45
```

- Convert the resource to JSON
```powershell
$SessionConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

