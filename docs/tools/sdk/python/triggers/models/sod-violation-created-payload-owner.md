# SODViolationCreatedPayloadOwner

# SODViolationCreatedPayloadOwner

Owner of the violation (e.g. assigned identity).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Owner ID. | [optional] 
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | DTO type of the owner reference. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_created_payload_owner import SODViolationCreatedPayloadOwner

sod_violation_created_payload_owner = SODViolationCreatedPayloadOwner(
id='2c918088837fe14901838062029a04bf',
type='IDENTITY'
)

```
[[Back to top]](#) 

