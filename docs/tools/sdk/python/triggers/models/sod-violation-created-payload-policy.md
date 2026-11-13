# SODViolationCreatedPayloadPolicy

# SODViolationCreatedPayloadPolicy

SOD policy associated with the violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Policy ID. | [optional] 
**type** |  **Enum** [  'SOD' ] | Policy type (always **SOD** for this webhook). | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_created_payload_policy import SODViolationCreatedPayloadPolicy

sod_violation_created_payload_policy = SODViolationCreatedPayloadPolicy(
id='01ea1d94-5db1-4444-a235-6f71c22b3449',
type='SOD'
)

```
[[Back to top]](#) 

