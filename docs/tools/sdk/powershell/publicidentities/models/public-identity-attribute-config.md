# PublicIdentityAttributeConfig

# PublicIdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Attribute / search field key (e.g. email, manager.displayName). | [required]
**Name** | **String** | Human-readable display name for the attribute. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentityAttributeConfig = Initialize-PublicIdentityAttributeConfig  -Key country `
 -Name Country
```

- Convert the resource to JSON
```powershell
$PublicIdentityAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

