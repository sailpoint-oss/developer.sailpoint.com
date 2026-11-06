# AccountItemRef

# AccountItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountUuid** | **String** | The uuid for the account on the source, available under the 'objectguid' attribute * Corresponds to the account's unique identifier as returned by accounts-selection or the accounts APIs. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source. | [optional] 
**NativeIdentity** | **String** | The 'distinguishedName' attribute for the account. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountItemRef = Initialize-AccountItemRef  -AccountUuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -NativeIdentity CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local
```

- Convert the resource to JSON
```powershell
$AccountItemRef | ConvertTo-JSON
```


[[Back to top]](#) 

