# JITActivationFrictionsResponse

# JITActivationFrictionsResponse

Friction state for an activation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_id** | **str** | Identifier of the activation. | [required]
**friction_state** | **JITActivationFrictionState** | Aggregate friction state of the activation. | [required]
**connection_id** | **str** | Identifier of the entitlement connection. | [required]
**activation_init_time** | **datetime** | Time the activation started. | [required]
**expiry_mins** | **str** | Minutes allowed to complete all frictions. | [required]
**frictions** | [**[]JITActivationFrictionResponse**](jit-activation-friction-response) | Friction steps for the activation. | [required]
\}

## Example

```python
from sailpoint.jit_activations.models.jit_activation_frictions_response import JITActivationFrictionsResponse

jit_activation_frictions_response = JITActivationFrictionsResponse(
activation_id='857fb802-1034-786a-151e-d3a56e4c5bd9',
friction_state='IN_PROGRESS',
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
activation_init_time='2026-05-08T18:33:52.029Z',
expiry_mins='5',
frictions=[
                    sailpoint.jit_activations.models.jit_activation_friction_response.JIT Activation Friction Response(
                        type = null, 
                        status = null, 
                        submitted_data = null, 
                        bypass_allowed = False, 
                        min_words = 5, )
                    ]
)

```
[[Back to top]](#) 

