---
id: updateschedulerequest
title: Updateschedulerequest
pagination_label: Updateschedulerequest
sidebar_label: Updateschedulerequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Updateschedulerequest', 'Updateschedulerequest'] 
slug: /tools/sdk/python/data-access-security/models/updateschedulerequest
tags: ['SDK', 'Software Development Kit', 'Updateschedulerequest', 'Updateschedulerequest']
---

# Updateschedulerequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_type_name** | **str** | The type or category of the scheduled task. | [optional] 
**schedule_type** | **str** | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [optional] 
**interval** | **int** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**schedule_task_name** | **str** | The display name of the scheduled task. | [optional] 
**start_time** | **int** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**end_time** | **int** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**days_of_week** | **[]str** | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [optional] 
**active** | **bool** | Indicates whether the scheduled task is currently active. | [optional] [default to False]
**run_after_schedule_task_id** | **int** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**application_id** | **int** | The unique identifier of the application associated with the scheduled task. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.updateschedulerequest import Updateschedulerequest

updateschedulerequest = Updateschedulerequest(
task_type_name='DataSync',
schedule_type='Daily',
interval=1440,
schedule_task_name='Daily Data Sync',
start_time=1762237200,
end_time=1762240800,
days_of_week=["Monday","Wednesday","Friday"],
active=True,
run_after_schedule_task_id=1000,
application_id=2001
)

```
[[Back to top]](#) 

