# IdentityPreviewRequest

# IdentityPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The Identity id | [optional] 
**IdentityAttributeConfig** | [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewRequest = Initialize-IdentityPreviewRequest  -IdentityId null `
 -IdentityAttributeConfig null
```

- Convert the resource to JSON
```powershell
$IdentityPreviewRequest | ConvertTo-JSON
```


[[Back to top]](#) 

