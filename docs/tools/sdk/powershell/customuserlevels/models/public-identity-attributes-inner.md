# PublicIdentityAttributesInner

# PublicIdentityAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The attribute key | [optional] 
**Name** | **String** | Human-readable display name of the attribute | [optional] 
**Value** | **String** | The attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityAttributesInner = Initialize-PublicIdentityAttributesInner  -Key country `
 -Name Country `
 -Value US
```

- Convert the resource to JSON
```powershell
$PublicIdentityAttributesInner | ConvertTo-JSON
```


[[Back to top]](#) 

