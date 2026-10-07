# Entitlementmetadatabulkupdatebyidrequest

# Entitlementmetadatabulkupdatebyidrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | The IDs of the entitlements to update. | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the entitlement. | [optional] 
**Values** | [**[]EntitlementmetadatabulkupdatebyidrequestValuesInner**](entitlementmetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$Entitlementmetadatabulkupdatebyidrequest = Initialize-Entitlementmetadatabulkupdatebyidrequest  -Entitlements ["2c9180867817ac4d017817c491119a20","2c9180867817ac4d017817c491119a21"] `
 -Operation REPLACE `
 -ReplaceScope ATTRIBUTE `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$Entitlementmetadatabulkupdatebyidrequest | ConvertTo-JSON
```


[[Back to top]](#) 

