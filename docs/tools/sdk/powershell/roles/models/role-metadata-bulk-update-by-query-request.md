# RoleMetadataBulkUpdateByQueryRequest

# RoleMetadataBulkUpdateByQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **SystemCollectionsHashtable** | query the identities to be updated | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RoleMetadataBulkUpdateByQueryRequestValuesInner**](role-metadata-bulk-update-by-query-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$RoleMetadataBulkUpdateByQueryRequest = Initialize-RoleMetadataBulkUpdateByQueryRequest  -Query {"query\"":{"indices":["roles"],"queryType":"TEXT","textQuery":{"terms":["test123"],"fields":["id"],"matchAny":false,"contains":true},"includeNested":false}} `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values null
```

- Convert the resource to JSON
```powershell
$RoleMetadataBulkUpdateByQueryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

