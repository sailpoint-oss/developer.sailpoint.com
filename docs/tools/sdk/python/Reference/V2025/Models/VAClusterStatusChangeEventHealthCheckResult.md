---
id: v2025-va-cluster-status-change-event-health-check-result
title: VAClusterStatusChangeEventHealthCheckResult
pagination_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VAClusterStatusChangeEventHealthCheckResult', 'V2025VAClusterStatusChangeEventHealthCheckResult'] 
slug: /tools/sdk/python/v2025/models/va-cluster-status-change-event-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventHealthCheckResult', 'V2025VAClusterStatusChangeEventHealthCheckResult']
---

# VAClusterStatusChangeEventHealthCheckResult

The results of the most recent health check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Detailed message of the result of the health check. | [required]
**result_type** | **str** | The type of the health check result. | [required]
**status** |  **Enum** [  'Succeeded',    'Failed' ] | The status of the health check. | [required]
}

## Example

```python
from sailpoint.v2025.models.va_cluster_status_change_event_health_check_result import VAClusterStatusChangeEventHealthCheckResult

va_cluster_status_change_event_health_check_result = VAClusterStatusChangeEventHealthCheckResult(
message='Test Connection failed with exception. Error message - java.lang Exception',
result_type='SOURCE_STATE_ERROR_CLUSTER',
status=Succeeded
)

```
[[Back to top]](#) 

