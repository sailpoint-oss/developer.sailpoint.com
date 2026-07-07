---
id: vaclusterstatuschangeevent-previous-health-check-result
title: VaclusterstatuschangeeventPreviousHealthCheckResult
pagination_label: VaclusterstatuschangeeventPreviousHealthCheckResult
sidebar_label: VaclusterstatuschangeeventPreviousHealthCheckResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VaclusterstatuschangeeventPreviousHealthCheckResult', 'VaclusterstatuschangeeventPreviousHealthCheckResult'] 
slug: /tools/sdk/python/triggers/models/vaclusterstatuschangeevent-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventPreviousHealthCheckResult', 'VaclusterstatuschangeeventPreviousHealthCheckResult']
---

# VaclusterstatuschangeeventPreviousHealthCheckResult

The results of the last health check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Detailed message of the result of the health check. | [required]
**result_type** | **str** | The type of the health check result. | [required]
**status** |  **Enum** [  'Succeeded',    'Failed' ] | The status of the health check. | [required]
}

## Example

```python
from sailpoint.triggers.models.vaclusterstatuschangeevent_previous_health_check_result import VaclusterstatuschangeeventPreviousHealthCheckResult

vaclusterstatuschangeevent_previous_health_check_result = VaclusterstatuschangeeventPreviousHealthCheckResult(
message='Test Connection failed with exception. Error message - java.lang Exception',
result_type='SOURCE_STATE_ERROR_CLUSTER',
status='Failed'
)

```
[[Back to top]](#) 

