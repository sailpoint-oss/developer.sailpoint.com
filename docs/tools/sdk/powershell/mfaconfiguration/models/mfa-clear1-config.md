# MfaClear1Config

# MfaClear1Config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | **String** | Mfa method name | [required]
**Enabled** | **Boolean** | If MFA method is enabled. | [optional] [default to $false]
**ApiKey** | **String** | The API key for authenticating requests to the CLEAR1 provider. This field is always required, regardless of whether the MFA method is enabled. This value is masked in responses. | [required]
**KnownUserKeyFlowConfig** | [**Mfaclear1knownuserkeyflowconfig**](mfaclear1knownuserkeyflowconfig) |  | [optional] 
**EstablishedIdentityFlowConfig** | [**Mfaclear1establishedidentityflowconfig**](mfaclear1establishedidentityflowconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MfaClear1Config = Initialize-MfaClear1Config  -MfaMethod clear1 `
 -Enabled true `
 -ApiKey sk123Y3QlA5UqocYpdU3rEkzrK2D497O `
 -KnownUserKeyFlowConfig null `
 -EstablishedIdentityFlowConfig null
```

- Convert the resource to JSON
```powershell
$MfaClear1Config | ConvertTo-JSON
```


[[Back to top]](#) 

