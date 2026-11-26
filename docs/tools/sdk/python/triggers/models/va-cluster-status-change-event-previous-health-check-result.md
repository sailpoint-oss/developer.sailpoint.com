# VAClusterStatusChangeEventPreviousHealthCheckResult

# VAClusterStatusChangeEventPreviousHealthCheckResult

The results of the last health check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Detailed message of the result of the health check. | [required]
**result_type** | **str** | The type of the health check result. | [required]
**status** |  **Enum** [  'Succeeded',    'Failed' ] | The status of the health check. | [required]
\}

## Example

```python
from sailpoint.triggers.models.va_cluster_status_change_event_previous_health_check_result import VAClusterStatusChangeEventPreviousHealthCheckResult

va_cluster_status_change_event_previous_health_check_result = VAClusterStatusChangeEventPreviousHealthCheckResult(
message='Test Connection failed with exception. Error message - java.lang Exception',
result_type='SOURCE_STATE_ERROR_CLUSTER',
status='Failed'
)

```
[[Back to top]](#) 

