# AccessProfileMetadataBulkUpdateByQueryRequest

# AccessProfileMetadataBulkUpdateByQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **SystemCollectionsHashtable** | The search query selecting the access profiles to update. | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [required]
**Values** | [**[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner**](access-profile-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$AccessProfileMetadataBulkUpdateByQueryRequest = Initialize-AccessProfileMetadataBulkUpdateByQueryRequest  -Query {"indices":["accessprofiles"],"queryType":"TEXT","textQuery":{"terms":["test123"],"fields":["id"],"matchAny":false,"contains":true},"includeNested":false} `
 -Operation REPLACE `
 -ReplaceScope ATTRIBUTE `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$AccessProfileMetadataBulkUpdateByQueryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

