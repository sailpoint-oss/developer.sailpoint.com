# EntitlementAttributeBulkUpdateFilterRequest

# EntitlementAttributeBulkUpdateFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]BulkUpdateAMMKeyValueInner**](bulk-update-amm-key-value-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAttributeBulkUpdateFilterRequest = Initialize-EntitlementAttributeBulkUpdateFilterRequest  -Filters id eq 2c9180867817ac4d017817c491119a20 `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAttributeBulkUpdateFilterRequest | ConvertTo-JSON
```


[[Back to top]](#) 

