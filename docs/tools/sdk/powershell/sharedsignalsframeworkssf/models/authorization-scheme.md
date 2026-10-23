# AuthorizationScheme

# AuthorizationScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecUrn** | **String** | URN describing the authorization specification. OAuth 2.0: `urn:ietf:rfc:6749`; Bearer token: `urn:ietf:rfc:6750`.  | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthorizationScheme = Initialize-AuthorizationScheme  -SpecUrn urn:ietf:rfc:6749
```

- Convert the resource to JSON
```powershell
$AuthorizationScheme | ConvertTo-JSON
```


[[Back to top]](#) 

