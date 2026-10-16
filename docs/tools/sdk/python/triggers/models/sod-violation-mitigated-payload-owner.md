# SODViolationMitigatedPayloadOwner

# SODViolationMitigatedPayloadOwner

Owner of the violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Owner ID. | [optional] 
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | DTO type of the owner reference. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_mitigated_payload_owner import SODViolationMitigatedPayloadOwner

sod_violation_mitigated_payload_owner = SODViolationMitigatedPayloadOwner(
id='2c918088837fe14901838062029a04bf',
type='IDENTITY'
)

```
[[Back to top]](#) 

