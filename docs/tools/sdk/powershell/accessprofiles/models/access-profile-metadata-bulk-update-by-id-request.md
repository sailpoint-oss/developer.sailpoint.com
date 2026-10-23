# AccessProfileMetadataBulkUpdateByIdRequest

# AccessProfileMetadataBulkUpdateByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfiles** | **[]String** | The IDs of the access profiles to update. | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [required]
**Values** | [**[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner**](access-profile-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$AccessProfileMetadataBulkUpdateByIdRequest = Initialize-AccessProfileMetadataBulkUpdateByIdRequest  -AccessProfiles ["b1db89554cfa431cb8b9921ea38d9367"] `
 -Operation REPLACE `
 -ReplaceScope ATTRIBUTE `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$AccessProfileMetadataBulkUpdateByIdRequest | ConvertTo-JSON
```


[[Back to top]](#) 

