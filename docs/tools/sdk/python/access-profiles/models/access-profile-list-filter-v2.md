# AccessProfileListFilterV2

# AccessProfileListFilterV2

Filter criteria and Access Model Metadata key/values used to select access profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [optional] 
**amm_key_values** | [**[]AccessProfileListFilterDTOAmmKeyValuesInner**](access-profile-list-filter-dto-amm-key-values-inner) | The Access Model Metadata attributes and values used to filter the results. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_list_filter_v2 import AccessProfileListFilterV2

access_profile_list_filter_v2 = AccessProfileListFilterV2(
filters='privilegeLevel.effective eq "HIGH"',
amm_key_values=[{"attribute":"iscFederalClassifications","values":["secret"]}]
)

```
[[Back to top]](#) 

