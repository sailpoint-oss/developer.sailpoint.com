# AccessProfileListFilterDTOAmmKeyValuesInner

# AccessProfileListFilterDTOAmmKeyValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The technical name of the metadata attribute. A blank or missing value is rejected with a 400 error. | [optional] 
**values** | **[]str** | The attribute values used to filter access profiles. If the list is empty, results are filtered by attribute key only. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_list_filter_dto_amm_key_values_inner import AccessProfileListFilterDTOAmmKeyValuesInner

access_profile_list_filter_dto_amm_key_values_inner = AccessProfileListFilterDTOAmmKeyValuesInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

