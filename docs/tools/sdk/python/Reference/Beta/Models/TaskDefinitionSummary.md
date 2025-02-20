---
id: beta-task-definition-summary
title: TaskDefinitionSummary
pagination_label: TaskDefinitionSummary
sidebar_label: TaskDefinitionSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskDefinitionSummary', 'BetaTaskDefinitionSummary'] 
slug: /tools/sdk/python/beta/models/task-definition-summary
tags: ['SDK', 'Software Development Kit', 'TaskDefinitionSummary', 'BetaTaskDefinitionSummary']
---

# TaskDefinitionSummary

Definition of a type of task, used to invoke tasks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the TaskDefinition | [required]
**unique_name** | **str** | Name of the TaskDefinition | [required]
**description** | **str** | Description of the TaskDefinition | [required]
**parent_name** | **str** | Name of the parent of the TaskDefinition | [required]
**executor** | **str** | Executor of the TaskDefinition | [required]
**arguments** | **map[string]object** | Formal parameters of the TaskDefinition, without values | [required]
}

## Example

```python
from sailpoint.beta.models.task_definition_summary import TaskDefinitionSummary

task_definition_summary = TaskDefinitionSummary(
id='2c91808475b4334b0175e1dff64b63c5',
unique_name='Cloud Account Aggregation',
description='Aggregates from the specified application.',
parent_name='Cloud Account Aggregation',
executor='sailpoint.task.ServiceTaskExecutor',
arguments={ }
)

```
[[Back to top]](#) 

