# Responseactionaccepted

# Responseactionaccepted

Acknowledgement returned when a response action is accepted for asynchronous processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Tracking handle and correlation id for the response action. | [required]
**status** |  **Enum** [  'SUBMITTED',    'IN_PROGRESS',    'COMPLETED',    'FAILED' ] | Aggregate status of the response action. SUBMITTED at creation (registered; no correlated workflow execution observed yet). | [required]
**status_url** | **str** | Relative URL to poll for the current status of the response action. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.responseactionaccepted import Responseactionaccepted

responseactionaccepted = Responseactionaccepted(
request_id='3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b',
status='SUBMITTED',
status_url='/intelligence/v1/response-actions/3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b/status'
)

```
[[Back to top]](#) 

