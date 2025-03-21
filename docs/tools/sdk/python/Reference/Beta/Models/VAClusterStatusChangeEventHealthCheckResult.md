---
id: beta-va-cluster-status-change-event-health-check-result
title: VAClusterStatusChangeEventHealthCheckResult
pagination_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_label: VAClusterStatusChangeEventHealthCheckResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VAClusterStatusChangeEventHealthCheckResult', 'BetaVAClusterStatusChangeEventHealthCheckResult'] 
slug: /tools/sdk/python/beta/models/va-cluster-status-change-event-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventHealthCheckResult', 'BetaVAClusterStatusChangeEventHealthCheckResult']
---

# VAClusterStatusChangeEventHealthCheckResult

Results of the most recent health check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Detailed message of the health check result.. | [required]
**result_type** | **str** | Health check result type. | [required]
**status** |  **Enum** [  'Succeeded',    'Failed' ] | Health check status. | [required]
}

## Example

```python
from sailpoint.beta.models.va_cluster_status_change_event_health_check_result import VAClusterStatusChangeEventHealthCheckResult

va_cluster_status_change_event_health_check_result = VAClusterStatusChangeEventHealthCheckResult(
message='Test Connection failed with exception. Error message - java.lang Exception',
result_type='SOURCE_STATE_ERROR_CLUSTER',
status='Succeeded'
)

```
[[Back to top]](#) 

