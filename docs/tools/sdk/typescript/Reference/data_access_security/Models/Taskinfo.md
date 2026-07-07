---
id: v1-taskinfo-v1
title: TaskinfoV1
pagination_label: TaskinfoV1
sidebar_label: TaskinfoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TaskinfoV1', 'v1TaskinfoV1']
slug: /tools/sdk/typescript/data_access_security/models/taskinfo-v1
tags: ['SDK', 'Software Development Kit', 'TaskinfoV1', 'v1TaskinfoV1']
---

# TaskinfoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **(optional)** `number` | The unique identifier for the task. | [default to undefined]
**taskTypeName** | **(optional)** `string` | The type or category of the task. | [default to undefined]
**startTime** | **(optional)** `number` | The start time of the task, represented as epoch seconds. | [default to undefined]
**endTime** | **(optional)** `number` | The end time of the task, represented as epoch seconds. | [default to undefined]
**taskName** | **(optional)** `string` | The display name of the task. | [default to undefined]
**createdByDisplayName** | **(optional)** `string` | The display name of the user who created the task. | [default to undefined]
**progress** | **(optional)** `number` | The progress of the task, typically represented as a percentage (0-100). | [default to undefined]
**status** | **(optional)** `string` | The current status of the task (e.g., \"Running\", \"Completed\", \"Failed\"). | [default to undefined]
**details** | **(optional)** `string` | Additional details or information about the task. | [default to undefined]
**scheduleTaskId** | **(optional)** `number` | The unique identifier of the associated scheduled task, if applicable. | [default to undefined]

