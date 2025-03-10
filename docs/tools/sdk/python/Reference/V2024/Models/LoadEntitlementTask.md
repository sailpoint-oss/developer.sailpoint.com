---
id: v2024-load-entitlement-task
title: LoadEntitlementTask
pagination_label: LoadEntitlementTask
sidebar_label: LoadEntitlementTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadEntitlementTask', 'V2024LoadEntitlementTask'] 
slug: /tools/sdk/python/v2024/models/load-entitlement-task
tags: ['SDK', 'Software Development Kit', 'LoadEntitlementTask', 'V2024LoadEntitlementTask']
---

# LoadEntitlementTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the task this taskStatus represents | [optional] 
**type** | **str** | Type of task this task represents | [optional] 
**unique_name** | **str** | The name of the task | [optional] 
**description** | **str** | The description of the task | [optional] 
**launcher** | **str** | The user who initiated the task | [optional] 
**created** | **datetime** | The creation date of the task | [optional] 
**returns** | [**[]LoadEntitlementTaskReturnsInner**](load-entitlement-task-returns-inner) | Return values from the task | [optional] 
}

## Example

```python
from sailpoint.v2024.models.load_entitlement_task import LoadEntitlementTask

load_entitlement_task = LoadEntitlementTask(
id='ef38f94347e94562b5bb8424a56397d8',
type='QUARTZ',
unique_name='Cloud Group Aggregation',
description='Aggregate from the specified application',
launcher='John Doe',
created='2020-07-11T21:23:15Z',
returns=[{displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_CREATED, attributeName=groupsCreated}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_UPDATED, attributeName=groupsUpdated}, {displayLabel=TASK_OUT_ACCOUNT_GROUP_AGGREGATION_DELETED, attributeName=groupsDeleted}]
)

```
[[Back to top]](#) 

