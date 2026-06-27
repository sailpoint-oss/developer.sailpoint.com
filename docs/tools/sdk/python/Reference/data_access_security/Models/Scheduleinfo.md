---
id: scheduleinfo
title: Scheduleinfo
pagination_label: Scheduleinfo
sidebar_label: Scheduleinfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scheduleinfo', 'Scheduleinfo'] 
slug: /tools/sdk/python/data-access-security/models/scheduleinfo
tags: ['SDK', 'Software Development Kit', 'Scheduleinfo', 'Scheduleinfo']
---

# Scheduleinfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_task_id** | **int** | The unique identifier for the scheduled task. | [optional] 
**schedule_task_name** | **str** | The display name of the scheduled task. | [optional] 
**task_type_name** | **str** | The type or category of the scheduled task. | [optional] 
**interval** | **int** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**schedule_type** | **str** | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [optional] 
**active** | **bool** | Indicates whether the scheduled task is currently active. | [optional] [default to False]
**start_time** | **int** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**end_time** | **int** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**days_of_week** | **[]str** | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [optional] 
**run_after_schedule_task_id** | **int** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**run_after_schedule_task_name** | **str** | The name of the scheduled task that must complete before this task runs. | [optional] 
**application_id** | **int** | The unique identifier of the application associated with the scheduled task. | [optional] 
**created_by_display_name** | **str** | The display name of the user who created the scheduled task. | [optional] 
**next_run** | **int** | The next scheduled run time for the task, represented as epoch seconds. | [optional] 
**last_run** | **int** | The last run time of the task, represented as epoch seconds. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.scheduleinfo import Scheduleinfo

scheduleinfo = Scheduleinfo(
schedule_task_id=1001,
schedule_task_name='Daily Data Sync',
task_type_name='DataSync',
interval=1440,
schedule_type='Daily',
active=True,
start_time=1762237200,
end_time=1762240800,
days_of_week=["Monday","Wednesday","Friday"],
run_after_schedule_task_id=1000,
run_after_schedule_task_name='Pre-Sync Task',
application_id=2001,
created_by_display_name='Jane Doe',
next_run=1762323600,
last_run=1762237200
)

```
[[Back to top]](#) 

