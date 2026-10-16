# AccessProfileListFilterDTO

# AccessProfileListFilterDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [optional] 
**AmmKeyValues** | [**[]AccessProfileListFilterDTOAmmKeyValuesInner**](access-profile-list-filter-dto-amm-key-values-inner) | The Access Model Metadata attributes and values used to filter the results. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileListFilterDTO = Initialize-AccessProfileListFilterDTO  -Filters requestable eq false `
 -AmmKeyValues [{"attribute":"iscFederalClassifications","values":["secret"]}]
```

- Convert the resource to JSON
```powershell
$AccessProfileListFilterDTO | ConvertTo-JSON
```


[[Back to top]](#) 

