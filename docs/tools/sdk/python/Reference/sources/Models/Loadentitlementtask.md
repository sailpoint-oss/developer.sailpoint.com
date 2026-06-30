---
id: loadentitlementtask
title: Loadentitlementtask
pagination_label: Loadentitlementtask
sidebar_label: Loadentitlementtask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Loadentitlementtask', 'Loadentitlementtask'] 
slug: /tools/sdk/python/sources/models/loadentitlementtask
tags: ['SDK', 'Software Development Kit', 'Loadentitlementtask', 'Loadentitlementtask']
---

# Loadentitlementtask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the task this taskStatus represents | [optional] 
**type** | **str** | Type of task this task represents | [optional] 
**unique_name** | **str** | The name of the task | [optional] 
**description** | **str** | The description of the task | [optional] 
**launcher** | **str** | The user who initiated the task | [optional] 
**created** | **datetime** | The creation date of the task | [optional] 
**returns** | [**[]LoadentitlementtaskReturnsInner**](loadentitlementtask-returns-inner) | Return values from the task | [optional] 
}

## Example

```python
from sailpoint.sources.models.loadentitlementtask import Loadentitlementtask

loadentitlementtask = Loadentitlementtask(
id='ef38f94347e94562b5bb8424a56397d8',
type='QUARTZ',
unique_name='Cloud Group Aggregation',
description='Aggregate from the specified application',
launcher='John Doe',
created='2020-07-11T21:23:15Z',
returns=[{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS","attributeName":"applications"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_TOTAL","attributeName":"total"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_CREATED","attributeName":"groupsCreated"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_UPDATED","attributeName":"groupsUpdated"},{"displayLabel":"TASK_OUT_ACCOUNT_GROUP_AGGREGATION_DELETED","attributeName":"groupsDeleted"}]
)

```
[[Back to top]](#) 

