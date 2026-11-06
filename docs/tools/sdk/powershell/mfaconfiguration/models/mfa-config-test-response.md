# MfaConfigTestResponse

# MfaConfigTestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "FAILED" ] | The configuration test result. | [optional] [readonly] 
**VarError** | **String** | The error message to indicate the failure of configuration test. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$MfaConfigTestResponse = Initialize-MfaConfigTestResponse  -State SUCCESS `
 -VarError MFA Method is disabled.
```

- Convert the resource to JSON
```powershell
$MfaConfigTestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

