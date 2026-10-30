# HttpConfig

# HttpConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **String** | URL of the external/custom integration. | [required]
**HttpDispatchMode** | **HttpDispatchMode** |  | [required]
**HttpAuthenticationType** | **HttpAuthenticationType** |  | [optional] 
**BasicAuthConfig** | [**BasicAuthConfig**](basic-auth-config) |  | [optional] 
**BearerTokenAuthConfig** | [**BearerTokenAuthConfig**](bearer-token-auth-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$HttpConfig = Initialize-HttpConfig  -Url https://www.example.com `
 -HttpDispatchMode null `
 -HttpAuthenticationType null `
 -BasicAuthConfig null `
 -BearerTokenAuthConfig null
```

- Convert the resource to JSON
```powershell
$HttpConfig | ConvertTo-JSON
```


[[Back to top]](#) 

