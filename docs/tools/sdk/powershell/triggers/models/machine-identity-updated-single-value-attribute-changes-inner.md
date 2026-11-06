# MachineIdentityUpdatedSingleValueAttributeChangesInner

# MachineIdentityUpdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute that was changed. | [required]
**OldValue** | [**MachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue**](machine-identity-updated-single-value-attribute-changes-inner-old-value) |  | [required]
**NewValue** | [**MachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue**](machine-identity-updated-single-value-attribute-changes-inner-new-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityUpdatedSingleValueAttributeChangesInner = Initialize-MachineIdentityUpdatedSingleValueAttributeChangesInner  -Name displayName `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$MachineIdentityUpdatedSingleValueAttributeChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

