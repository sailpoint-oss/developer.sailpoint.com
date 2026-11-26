# RoleListFilterDTOAmmKeyValuesInner

# RoleListFilterDTOAmmKeyValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | attribute key of a metadata. | [optional] 
**values** | **[]str** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 
\}

## Example

```python
from sailpoint.roles.models.role_list_filter_dto_amm_key_values_inner import RoleListFilterDTOAmmKeyValuesInner

role_list_filter_dto_amm_key_values_inner = RoleListFilterDTOAmmKeyValuesInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

