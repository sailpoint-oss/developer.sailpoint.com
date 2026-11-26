# UpdateStreamStatusRequest

# UpdateStreamStatusRequest

Request body for POST /ssf/streams/status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | ID of the stream whose status to update. | [required]
**status** |  **Enum** [  'enabled',    'paused',    'disabled' ] | Desired stream status. | [required]
**reason** | **str** | Optional reason for the status change. | [optional] 
\}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.update_stream_status_request import UpdateStreamStatusRequest

update_stream_status_request = UpdateStreamStatusRequest(
stream_id='550e8400-e29b-41d4-a716-446655440000',
status='paused',
reason='manually paused'
)

```
[[Back to top]](#) 

