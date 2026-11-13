# IdentityReference2

# IdentityReference2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the identity that is correlated with this account. | [required]
**Name** | **String** | The name of the identity that is correlated with this account. | [required]
**Alias** | **String** | The alias of the identity. | [required]
**Email** | **String** | The email of the identity. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityReference2 = Initialize-IdentityReference2  -Id ee769173319b41d19ccec6c235423237b `
 -Name john.doe `
 -Alias jdoe `
 -Email john.doe@email.com
```

- Convert the resource to JSON
```powershell
$IdentityReference2 | ConvertTo-JSON
```


[[Back to top]](#) 

