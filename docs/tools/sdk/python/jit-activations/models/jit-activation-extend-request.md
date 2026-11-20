# JitActivationExtendRequest

# JitActivationExtendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Entitlement connection identifier for the activation to extend. | [required]
**activation_period_extension_mins** | **int** | Number of minutes to extend the activation period. | [required]
**request_origin** | **str** | Origin of the request. | [optional] 
**meta_data** | [**JitActivationCallerMetadata**](jit-activation-caller-metadata) |  | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jit_activation_extend_request import JitActivationExtendRequest

jit_activation_extend_request = JitActivationExtendRequest(
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
activation_period_extension_mins=120,
request_origin='slack',
meta_data=sailpoint.jit_activations.models.jit_activation_caller_metadata.JIT Activation Caller Metadata(
                    type = 'slack', 
                    slack_user_id = 'U123', 
                    command_text = '/jit activate', 
                    channel_id = 'C456', 
                    thread_id = '1699887766.123456', 
                    message_id = '1699887770.654321', 
                    workspace_id = 'T789', )
)

```
[[Back to top]](#) 

