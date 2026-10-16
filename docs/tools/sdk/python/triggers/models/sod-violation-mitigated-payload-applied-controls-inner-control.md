# SODViolationMitigatedPayloadAppliedControlsInnerControl

# SODViolationMitigatedPayloadAppliedControlsInnerControl

Reference to the compensating control definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Control ID. | [optional] 
**type** |  **Enum** [  'COMPENSATING_CONTROL' ] | Control type (always **COMPENSATING_CONTROL** for this webhook). | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_mitigated_payload_applied_controls_inner_control import SODViolationMitigatedPayloadAppliedControlsInnerControl

sod_violation_mitigated_payload_applied_controls_inner_control = SODViolationMitigatedPayloadAppliedControlsInnerControl(
id='01ea1d945db14444a2356f71c22b3449',
type='COMPENSATING_CONTROL'
)

```
[[Back to top]](#) 

