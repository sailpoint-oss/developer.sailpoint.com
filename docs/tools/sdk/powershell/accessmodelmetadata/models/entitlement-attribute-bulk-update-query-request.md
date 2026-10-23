# EntitlementAttributeBulkUpdateQueryRequest

# EntitlementAttributeBulkUpdateQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | [**Search**](search) |  | [optional] 
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]BulkUpdateAMMKeyValueInner**](bulk-update-amm-key-value-inner) | The metadata to be updated, including attribute and values. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAttributeBulkUpdateQueryRequest = Initialize-EntitlementAttributeBulkUpdateQueryRequest  -Query null `
 -Operation add `
 -ReplaceScope attribute `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAttributeBulkUpdateQueryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

