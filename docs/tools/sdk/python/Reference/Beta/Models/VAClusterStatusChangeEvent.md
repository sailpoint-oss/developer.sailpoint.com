---
id: beta-va-cluster-status-change-event
title: VAClusterStatusChangeEvent
pagination_label: VAClusterStatusChangeEvent
sidebar_label: VAClusterStatusChangeEvent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VAClusterStatusChangeEvent', 'BetaVAClusterStatusChangeEvent'] 
slug: /tools/sdk/python/beta/models/va-cluster-status-change-event
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEvent', 'BetaVAClusterStatusChangeEvent']
---

# VAClusterStatusChangeEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The date and time the status change occurred. | [required]
**type** |  **Enum** [  'SOURCE',    'CLUSTER' ] | The type of the object that initiated this event. | [required]
**application** | [**VAClusterStatusChangeEventApplication**](va-cluster-status-change-event-application) |  | [required]
**health_check_result** | [**VAClusterStatusChangeEventHealthCheckResult**](va-cluster-status-change-event-health-check-result) |  | [required]
**previous_health_check_result** | [**VAClusterStatusChangeEventPreviousHealthCheckResult**](va-cluster-status-change-event-previous-health-check-result) |  | [required]
}

## Example

```python
from sailpoint.beta.models.va_cluster_status_change_event import VAClusterStatusChangeEvent

va_cluster_status_change_event = VAClusterStatusChangeEvent(
created='2020-06-29T22:01:50.474Z',
type=CLUSTER,
application=sailpoint.beta.models.va_cluster_status_change_event_application.VAClusterStatusChangeEvent_application(
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Production VA Cluster', 
                    attributes = { }, ),
health_check_result=sailpoint.beta.models.va_cluster_status_change_event_health_check_result.VAClusterStatusChangeEvent_healthCheckResult(
                    message = 'Test Connection failed with exception. Error message - java.lang Exception', 
                    result_type = 'SOURCE_STATE_ERROR_CLUSTER', 
                    status = Succeeded, ),
previous_health_check_result=sailpoint.beta.models.va_cluster_status_change_event_previous_health_check_result.VAClusterStatusChangeEvent_previousHealthCheckResult(
                    message = 'Test Connection failed with exception. Error message - java.lang Exception', 
                    result_type = 'SOURCE_STATE_ERROR_CLUSTER', 
                    status = Failed, )
)

```
[[Back to top]](#) 

