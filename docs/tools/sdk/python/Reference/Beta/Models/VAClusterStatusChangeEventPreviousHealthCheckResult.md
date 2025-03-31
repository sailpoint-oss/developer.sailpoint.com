---
id: beta-va-cluster-status-change-event-previous-health-check-result
title: VAClusterStatusChangeEventPreviousHealthCheckResult
pagination_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VAClusterStatusChangeEventPreviousHealthCheckResult', 'BetaVAClusterStatusChangeEventPreviousHealthCheckResult'] 
slug: /tools/sdk/python/beta/models/va-cluster-status-change-event-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventPreviousHealthCheckResult', 'BetaVAClusterStatusChangeEventPreviousHealthCheckResult']
---

# VAClusterStatusChangeEventPreviousHealthCheckResult

Results of the last health check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Detailed message of the health check result. | [required]
**result_type** | **str** | Health check result type. | [required]
**status** |  **Enum** [  'Succeeded',    'Failed' ] | Health check status. | [required]
}

## Example

```python
from sailpoint.beta.models.va_cluster_status_change_event_previous_health_check_result import VAClusterStatusChangeEventPreviousHealthCheckResult

va_cluster_status_change_event_previous_health_check_result = VAClusterStatusChangeEventPreviousHealthCheckResult(
message='Test Connection failed with exception. Error message - java.lang Exception',
result_type='SOURCE_STATE_ERROR_CLUSTER',
status='Failed'
)

```
[[Back to top]](#) 

