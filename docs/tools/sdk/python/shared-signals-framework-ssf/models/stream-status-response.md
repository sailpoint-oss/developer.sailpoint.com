# StreamStatusResponse

# StreamStatusResponse

Stream status returned by GET/POST /ssf/streams/status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | Stream identifier. | [optional] 
**status** |  **Enum** [  'enabled',    'paused',    'disabled' ] | Operational status of the stream (enabled, paused, or disabled). | [optional] 
**reason** | **str** | Optional reason for the current status (e.g. set when status is updated). | [optional] 
\}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.stream_status_response import StreamStatusResponse

stream_status_response = StreamStatusResponse(
stream_id='550e8400-e29b-41d4-a716-446655440000',
status='enabled',
reason=''
)

```
[[Back to top]](#) 

