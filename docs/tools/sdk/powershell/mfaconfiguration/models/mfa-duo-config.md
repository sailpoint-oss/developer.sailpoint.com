# MfaDuoConfig

# MfaDuoConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | **String** | Mfa method name | [optional] 
**Enabled** | **Boolean** | If MFA method is enabled. | [optional] [default to $false]
**VarHost** | **String** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** | **String** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** | **String** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 
**ConfigProperties** | **map[string]AnyType** | A map with additional config properties for the given MFA method - duo-web. | [optional] 

## Examples

- Prepare the resource
```powershell
$MfaDuoConfig = Initialize-MfaDuoConfig  -MfaMethod duo-web `
 -Enabled true `
 -VarHost example.com `
 -AccessKey qw123Y3QlA5UqocYpdU3rEkzrK2D497y `
 -IdentityAttribute email `
 -ConfigProperties {"skey":"qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x","ikey":"Q123WE45R6TY7890ZXCV"}
```

- Convert the resource to JSON
```powershell
$MfaDuoConfig | ConvertTo-JSON
```


[[Back to top]](#) 

