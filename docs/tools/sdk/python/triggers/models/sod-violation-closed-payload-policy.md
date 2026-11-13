# SODViolationClosedPayloadPolicy

# SODViolationClosedPayloadPolicy

SOD policy associated with the violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Policy ID. | [optional] 
**type** |  **Enum** [  'SOD' ] | Policy type (always **SOD** for this webhook). | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_closed_payload_policy import SODViolationClosedPayloadPolicy

sod_violation_closed_payload_policy = SODViolationClosedPayloadPolicy(
id='01ea1d945db14444a2356f71c22b3449',
type='SOD'
)

```
[[Back to top]](#) 

