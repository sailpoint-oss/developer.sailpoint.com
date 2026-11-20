# RoleMetadataBulkUpdateByIdRequest

# RoleMetadataBulkUpdateByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Roles** | **[]String** | Roles' Id to be updated | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByIdRequest = Initialize-RoleMetadataBulkUpdateByIdRequest  -Roles ["b1db89554cfa431cb8b9921ea38d9367"] `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByIdRequest | ConvertTo-JSON
```


[[Back to top]](#) 

