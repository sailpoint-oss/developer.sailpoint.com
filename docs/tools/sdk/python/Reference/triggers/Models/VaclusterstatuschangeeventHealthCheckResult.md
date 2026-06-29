---
id: vaclusterstatuschangeevent-health-check-result
title: VaclusterstatuschangeeventHealthCheckResult
pagination_label: VaclusterstatuschangeeventHealthCheckResult
sidebar_label: VaclusterstatuschangeeventHealthCheckResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VaclusterstatuschangeeventHealthCheckResult', 'VaclusterstatuschangeeventHealthCheckResult'] 
slug: /tools/sdk/python/triggers/models/vaclusterstatuschangeevent-health-check-result
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventHealthCheckResult', 'VaclusterstatuschangeeventHealthCheckResult']
---

# VaclusterstatuschangeeventHealthCheckResult

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
from sailpoint.triggers.models.vaclusterstatuschangeevent_health_check_result import VaclusterstatuschangeeventHealthCheckResult

vaclusterstatuschangeevent_health_check_result = VaclusterstatuschangeeventHealthCheckResult(
message='Test Connection failed with exception. Error message - java.lang Exception',
result_type='SOURCE_STATE_ERROR_CLUSTER',
status='Succeeded'
)

```
[[Back to top]](#) 

