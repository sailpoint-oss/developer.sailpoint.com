# SodPolicyAllowedControlsInner

# SodPolicyAllowedControlsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'COMPENSATING_CONTROL' ] | Control reference type. | [optional] 
**id** | **str** | Control reference ID. | [optional] 
**name** | **str** | Control reference name. | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.sod_policy_allowed_controls_inner import SodPolicyAllowedControlsInner

sod_policy_allowed_controls_inner = SodPolicyAllowedControlsInner(
type='COMPENSATING_CONTROL',
id='2c9180a46faadee4016fb4e018',
name='Mitigating Control 1'
)

```
[[Back to top]](#) 

