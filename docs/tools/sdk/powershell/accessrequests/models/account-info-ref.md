# AccountInfoRef

# AccountInfoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **String** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**NativeIdentity** | **String** | The 'distinguishedName' attribute for the account | [optional] 
**Type** | **DtoType** |  | [optional] 
**Id** | **String** | The account id | [optional] 
**Name** | **String** | The account display name | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountInfoRef = Initialize-AccountInfoRef  -Uuid {fab7119e-004f-4822-9c33-b8d570d6c6a6} `
 -NativeIdentity CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local `
 -Type null `
 -Id f19d168c27374fd1aff3b483573f997f `
 -Name UserAccount.761a2248b
```

- Convert the resource to JSON
```powershell
$AccountInfoRef | ConvertTo-JSON
```


[[Back to top]](#) 

