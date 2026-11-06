# AccessProfileListFilterV2

# AccessProfileListFilterV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [optional] 
**AmmKeyValues** | [**[]AccessProfileListFilterDTOAmmKeyValuesInner**](access-profile-list-filter-dto-amm-key-values-inner) | The Access Model Metadata attributes and values used to filter the results. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileListFilterV2 = Initialize-AccessProfileListFilterV2  -Filters privilegeLevel.effective eq "HIGH" `
 -AmmKeyValues [{"attribute":"iscFederalClassifications","values":["secret"]}]
```

- Convert the resource to JSON
```powershell
$AccessProfileListFilterV2 | ConvertTo-JSON
```


[[Back to top]](#) 

