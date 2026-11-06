# EntitlementAttributeBulkUpdateIdsRequest

# EntitlementAttributeBulkUpdateIdsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | List of entitlement IDs to update. | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]BulkUpdateAMMKeyValueInner**](bulk-update-amm-key-value-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAttributeBulkUpdateIdsRequest = Initialize-EntitlementAttributeBulkUpdateIdsRequest  -Entitlements ["2c9180867817ac4d017817c491119a20","2c9180867817ac4d017817c491119a21"] `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAttributeBulkUpdateIdsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

