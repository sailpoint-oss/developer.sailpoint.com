# RoleMetadataBulkUpdateByFilterRequestValuesInner

# RoleMetadataBulkUpdateByFilterRequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | **String** | the key of metadata attribute | [optional] 
**Values** | **[]String** | the values of attribute to be updated | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByFilterRequestValuesInner = Initialize-RoleMetadataBulkUpdateByFilterRequestValuesInner  -AttributeKey iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByFilterRequestValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

