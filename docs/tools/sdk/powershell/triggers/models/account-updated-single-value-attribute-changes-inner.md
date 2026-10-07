# AccountUpdatedSingleValueAttributeChangesInner

# AccountUpdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute that was changed. | [required]
**OldValue** | [**AccountUpdatedSingleValueAttributeChangesInnerOldValue**](account-updated-single-value-attribute-changes-inner-old-value) |  | [required]
**NewValue** | [**AccountUpdatedSingleValueAttributeChangesInnerNewValue**](account-updated-single-value-attribute-changes-inner-new-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountUpdatedSingleValueAttributeChangesInner = Initialize-AccountUpdatedSingleValueAttributeChangesInner  -Name displayName `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$AccountUpdatedSingleValueAttributeChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

