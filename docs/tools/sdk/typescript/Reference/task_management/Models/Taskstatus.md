---
id: v1-taskstatus-v1
title: TaskstatusV1
pagination_label: TaskstatusV1
sidebar_label: TaskstatusV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TaskstatusV1', 'v1TaskstatusV1']
slug: /tools/sdk/typescript/task_management/models/taskstatus-v1
tags: ['SDK', 'Software Development Kit', 'TaskstatusV1', 'v1TaskstatusV1']
---

# TaskstatusV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | System-generated unique ID of the task this TaskStatus represents | [default to undefined]
**type** | `string` | Type of task this TaskStatus represents | [default to undefined]
**uniqueName** | `string` | Name of the task this TaskStatus represents | [default to undefined]
**description** | `string` | Description of the task this TaskStatus represents | [default to undefined]
**parentName** | `string` | Name of the parent of the task this TaskStatus represents | [default to undefined]
**launcher** | `string` | Service to execute the task this TaskStatus represents | [default to undefined]
**target** | **(optional)** `TargetV1` |  | [default to undefined]
**created** | `string` | Creation date of the task this TaskStatus represents | [default to undefined]
**modified** | `string` | Last modification date of the task this TaskStatus represents | [default to undefined]
**launched** | `string` | Launch date of the task this TaskStatus represents | [default to undefined]
**completed** | `string` | Completion date of the task this TaskStatus represents | [default to undefined]
**completionStatus** | `string` | Completion status of the task this TaskStatus represents | [default to undefined]
**messages** | `Array<TaskstatusmessageV1>` | Messages associated with the task this TaskStatus represents | [default to undefined]
**returns** | `Array<TaskreturndetailsV1>` | Return values from the task this TaskStatus represents | [default to undefined]
**attributes** |  | Attributes of the task this TaskStatus represents | [default to undefined]
**progress** | `string` | Current progress of the task this TaskStatus represents | [default to undefined]
**percentComplete** | `number` | Current percentage completion of the task this TaskStatus represents | [default to undefined]
**taskDefinitionSummary** | **(optional)** `TaskdefinitionsummaryV1` |  | [default to undefined]

