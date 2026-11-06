# JITConfiguration

# JITConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | The indicator for just-in-time provisioning enabled | [optional] [default to $false]
**SourceId** | **String** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**SourceAttributeMappings** | **map[string]String** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 

## Examples

- Prepare the resource
```powershell
$JITConfiguration = Initialize-JITConfiguration  -Enabled false `
 -SourceId 2c9180857377ed2901739c12a2da5ac8 `
 -SourceAttributeMappings {"firstName":"okta.firstName","lastName":"okta.lastName","email":"okta.email"}
```

- Convert the resource to JSON
```powershell
$JITConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

