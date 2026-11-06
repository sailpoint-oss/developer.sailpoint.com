# RoleMetadataBulkUpdateByIdRequestValuesInner

# RoleMetadataBulkUpdateByIdRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | the key of metadata attribute | [required]
**Values** | **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByIdRequestValuesInner = Initialize-RoleMetadataBulkUpdateByIdRequestValuesInner  -Attribute iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByIdRequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

