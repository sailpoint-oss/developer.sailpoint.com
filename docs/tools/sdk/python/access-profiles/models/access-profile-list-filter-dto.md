# AccessProfileListFilterDTO

# AccessProfileListFilterDTO

Filter criteria and Access Model Metadata key/values used to select access profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [optional] 
**amm_key_values** | [**[]AccessProfileListFilterDTOAmmKeyValuesInner**](access-profile-list-filter-dto-amm-key-values-inner) | The Access Model Metadata attributes and values used to filter the results. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_list_filter_dto import AccessProfileListFilterDTO

access_profile_list_filter_dto = AccessProfileListFilterDTO(
filters='requestable eq false',
amm_key_values=[{"attribute":"iscFederalClassifications","values":["secret"]}]
)

```
[[Back to top]](#) 

