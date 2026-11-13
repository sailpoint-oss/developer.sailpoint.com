# JITActivationFrictionPatchRequest

# JITActivationFrictionPatchRequest

Submission for the current friction step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **JITActivationFrictionType** | Kind of friction step being submitted. | [required]
**submitted_data** | [**FrictionSubmittedData**](friction-submitted-data) | Data submitted for this friction step. Omit when bypassing a step that allows bypass. | [optional] 
**bypass** | **bool** | Whether to bypass this friction step. | [optional] [default to False]
\}

## Example

```python
from sailpoint.jit_activations.models.jit_activation_friction_patch_request import JITActivationFrictionPatchRequest

jit_activation_friction_patch_request = JITActivationFrictionPatchRequest(
type='JUSTIFICATION',
submitted_data=sailpoint.jit_activations.models.friction_submitted_data.Friction Submitted Data(
                    justification = 'Current P1 requires activation to mitigate', 
                    bypass = False, 
                    ticket_id = 'SN-123', 
                    is_valid_ticket = True, 
                    attempts = 1, 
                    reauth_successful = True, 
                    reauth_date = '2026-05-08T18:40:00.000Z', 
                    integration_disabled = False, ),
bypass=False
)

```
[[Back to top]](#) 

