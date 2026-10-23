# FrictionSubmittedData

# FrictionSubmittedData

Data submitted for a friction step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification** | **str** | Justification text. | [optional] 
**bypass** | **bool** | Whether this step was bypassed. | [optional] [default to False]
**ticket_id** | **str** | Ticketing system identifier. | [optional] 
**is_valid_ticket** | **bool** | Whether the ticket is valid. Set by the server. | [optional] [readonly] [default to False]
**attempts** | **int** | Count of failed submissions for this step. The server sets this value and ignores it on PATCH. | [optional] [readonly] 
**reauth_successful** | **bool** | Whether reauthentication succeeded. | [optional] [default to False]
**reauth_date** | **str** | Time of reauthentication. | [optional] 
**integration_disabled** | **bool** | Whether the ticketing integration is disabled. Set by the server. | [optional] [readonly] [default to False]
\}

## Example

```python
from sailpoint.jit_activations.models.friction_submitted_data import FrictionSubmittedData

friction_submitted_data = FrictionSubmittedData(
justification='Current P1 requires activation to mitigate',
bypass=False,
ticket_id='SN-123',
is_valid_ticket=True,
attempts=1,
reauth_successful=True,
reauth_date='2026-05-08T18:40:00.000Z',
integration_disabled=False
)

```
[[Back to top]](#) 

