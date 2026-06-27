---
id: vaclusterstatuschangeevent
title: Vaclusterstatuschangeevent
pagination_label: Vaclusterstatuschangeevent
sidebar_label: Vaclusterstatuschangeevent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Vaclusterstatuschangeevent', 'Vaclusterstatuschangeevent'] 
slug: /tools/sdk/python/triggers/models/vaclusterstatuschangeevent
tags: ['SDK', 'Software Development Kit', 'Vaclusterstatuschangeevent', 'Vaclusterstatuschangeevent']
---

# Vaclusterstatuschangeevent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The date and time the status change occurred. | [required]
**type** |  **Enum** [  'SOURCE',    'CLUSTER' ] | The type of the object that initiated this event. | [required]
**application** | [**VaclusterstatuschangeeventApplication**](vaclusterstatuschangeevent-application) |  | [required]
**health_check_result** | [**VaclusterstatuschangeeventHealthCheckResult**](vaclusterstatuschangeevent-health-check-result) |  | [required]
**previous_health_check_result** | [**VaclusterstatuschangeeventPreviousHealthCheckResult**](vaclusterstatuschangeevent-previous-health-check-result) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.vaclusterstatuschangeevent import Vaclusterstatuschangeevent

vaclusterstatuschangeevent = Vaclusterstatuschangeevent(
created='2020-06-29T22:01:50.474Z',
type='CLUSTER',
application=sailpoint.triggers.models.vaclusterstatuschangeevent_application.vaclusterstatuschangeevent_application(
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Production VA Cluster', 
                    attributes = { }, ),
health_check_result=sailpoint.triggers.models.vaclusterstatuschangeevent_health_check_result.vaclusterstatuschangeevent_healthCheckResult(
                    message = 'Test Connection failed with exception. Error message - java.lang Exception', 
                    result_type = 'SOURCE_STATE_ERROR_CLUSTER', 
                    status = 'Succeeded', ),
previous_health_check_result=sailpoint.triggers.models.vaclusterstatuschangeevent_previous_health_check_result.vaclusterstatuschangeevent_previousHealthCheckResult(
                    message = 'Test Connection failed with exception. Error message - java.lang Exception', 
                    result_type = 'SOURCE_STATE_ERROR_CLUSTER', 
                    status = 'Failed', )
)

```
[[Back to top]](#) 

