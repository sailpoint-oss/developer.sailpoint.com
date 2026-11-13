# Rolelistfilterdtov2AmmKeyValuesInner

# Rolelistfilterdtov2AmmKeyValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | attribute key of a metadata. A blank value is rejected with a 400 error. | [required]
**values** | **[]str** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] [default to []]
\}

## Example

```python
from sailpoint.roles.models.rolelistfilterdtov2_amm_key_values_inner import Rolelistfilterdtov2AmmKeyValuesInner

rolelistfilterdtov2_amm_key_values_inner = Rolelistfilterdtov2AmmKeyValuesInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

