# JitActivationCallerMetadata

# JitActivationCallerMetadata

Caller-specific context for the request. Field names depend on the request origin. The properties below apply when the request origin is Slack. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Request origin type. Matches `requestOrigin` when both are sent. | [optional] 
**slack_user_id** | **str** | Slack user identifier of the caller. | [optional] 
**command_text** | **str** | Slack command text that produced this request. | [optional] 
**channel_id** | **str** | Slack channel identifier. | [optional] 
**thread_id** | **str** | Slack thread identifier of the message that produced this request. | [optional] 
**message_id** | **str** | Slack message identifier of the message that produced this request. | [optional] 
**workspace_id** | **str** | Slack workspace identifier. | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jit_activation_caller_metadata import JitActivationCallerMetadata

jit_activation_caller_metadata = JitActivationCallerMetadata(
type='slack',
slack_user_id='U123',
command_text='/jit activate',
channel_id='C456',
thread_id='1699887766.123456',
message_id='1699887770.654321',
workspace_id='T789'
)

```
[[Back to top]](#) 

