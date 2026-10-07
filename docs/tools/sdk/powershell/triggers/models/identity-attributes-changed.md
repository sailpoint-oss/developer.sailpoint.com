# IdentityAttributesChanged

# IdentityAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityAttributesChangedIdentity**](identity-attributes-changed-identity) |  | [required]
**Changes** | [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | A list of one or more identity attributes that changed on the identity. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChanged = Initialize-IdentityAttributesChanged  -Identity null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

