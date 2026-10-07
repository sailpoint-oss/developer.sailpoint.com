# IdentityAttributeConfig

# IdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to $false]
**AttributeTransforms** | [**[]IdentityAttributeTransform**](identity-attribute-transform) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeConfig = Initialize-IdentityAttributeConfig  -Enabled true `
 -AttributeTransforms null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

