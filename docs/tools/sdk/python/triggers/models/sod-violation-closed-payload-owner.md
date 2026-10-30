# SODViolationClosedPayloadOwner

# SODViolationClosedPayloadOwner

Owner of the violation (e.g. assigned identity).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Owner ID. | [optional] 
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Owner type. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.sod_violation_closed_payload_owner import SODViolationClosedPayloadOwner

sod_violation_closed_payload_owner = SODViolationClosedPayloadOwner(
id='2c918088837fe14901838062029a04bf',
type='IDENTITY'
)

```
[[Back to top]](#) 

