---
id: taskresultsimplified
title: Taskresultsimplified
pagination_label: Taskresultsimplified
sidebar_label: Taskresultsimplified
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskresultsimplified', 'Taskresultsimplified'] 
slug: /tools/sdk/python/identity-profiles/models/taskresultsimplified
tags: ['SDK', 'Software Development Kit', 'Taskresultsimplified', 'Taskresultsimplified']
---

# Taskresultsimplified


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Task identifier | [optional] 
**name** | **str** | Task name | [optional] 
**description** | **str** | Task description | [optional] 
**launcher** | **str** | User or process who launched the task | [optional] 
**completed** | **datetime** | Date time of completion | [optional] 
**launched** | **datetime** | Date time when the task was launched | [optional] 
**completion_status** |  **Enum** [  'Success',    'Warning',    'Error',    'Terminated',    'TempError' ] | Task result status | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.taskresultsimplified import Taskresultsimplified

taskresultsimplified = Taskresultsimplified(
id='ff8081814d977c21014da056804a0af3',
name='Background Object Terminator c8f030f2-b1a6-4e33-99e8-6935bc18735d',
description='Generic task for terminating data in the overlay, used by the TerminationService.',
launcher='support',
completed=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
launched=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completion_status='Success'
)

```
[[Back to top]](#) 

