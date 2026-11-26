# SodPolicyDto2

# SodPolicyDto2

SOD policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOD_POLICY' ] | SOD policy DTO type. | [optional] 
**id** | **str** | SOD policy ID. | [optional] 
**name** | **str** | SOD policy display name. | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.sod_policy_dto2 import SodPolicyDto2

sod_policy_dto2 = SodPolicyDto2(
type='SOD_POLICY',
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='Business SOD Policy'
)

```
[[Back to top]](#) 

