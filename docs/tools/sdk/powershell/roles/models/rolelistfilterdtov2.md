# Rolelistfilterdtov2

# Rolelistfilterdtov2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [optional] [default to ""]
**AmmKeyValues** | [**[]Rolelistfilterdtov2AmmKeyValuesInner**](rolelistfilterdtov2-amm-key-values-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolelistfilterdtov2 = Initialize-Rolelistfilterdtov2  -Filters privilegeLevel.effective in ("HIGH","MEDIUM") `
 -AmmKeyValues [{"attribute":"iscFederalClassifications","values":["secret"]}]
```

- Convert the resource to JSON
```powershell
$Rolelistfilterdtov2 | ConvertTo-JSON
```


[[Back to top]](#) 

