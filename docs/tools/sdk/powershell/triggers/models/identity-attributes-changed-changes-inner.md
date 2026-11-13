# IdentityAttributesChangedChangesInner

# IdentityAttributesChangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the identity attribute that changed. | [required]
**OldValue** | [**IdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**NewValue** | [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedChangesInner = Initialize-IdentityAttributesChangedChangesInner  -Attribute department `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

