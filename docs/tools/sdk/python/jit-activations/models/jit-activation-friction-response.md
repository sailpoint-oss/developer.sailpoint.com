# JITActivationFrictionResponse

# JITActivationFrictionResponse

One friction step on an activation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **JITActivationFrictionType** | Kind of friction step. | [required]
**status** | **JITActivationFrictionStatus** | Lifecycle of this friction step. | [required]
**submitted_data** | [**FrictionSubmittedData**](friction-submitted-data) | Data submitted for this friction step. | [required]
**bypass_allowed** | **bool** | Whether this step may be bypassed. | [required]
**min_words** | **int** | Minimum word count for a justification step. | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jit_activation_friction_response import JITActivationFrictionResponse

jit_activation_friction_response = JITActivationFrictionResponse(
type='JUSTIFICATION',
status='ACTIVE',
submitted_data=sailpoint.jit_activations.models.friction_submitted_data.Friction Submitted Data(
                    justification = 'Current P1 requires activation to mitigate', 
                    bypass = False, 
                    ticket_id = 'SN-123', 
                    is_valid_ticket = True, 
                    attempts = 1, 
                    reauth_successful = True, 
                    reauth_date = '2026-05-08T18:40:00.000Z', 
                    integration_disabled = False, ),
bypass_allowed=False,
min_words=5
)

```
[[Back to top]](#) 

