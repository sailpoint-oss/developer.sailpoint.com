---
id: v1-scheduleinfo-v1
title: ScheduleinfoV1
pagination_label: ScheduleinfoV1
sidebar_label: ScheduleinfoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduleinfoV1', 'v1ScheduleinfoV1']
slug: /tools/sdk/typescript/data_access_security/models/scheduleinfo-v1
tags: ['SDK', 'Software Development Kit', 'ScheduleinfoV1', 'v1ScheduleinfoV1']
---

# ScheduleinfoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleTaskId** | **(optional)** `number` | The unique identifier for the scheduled task. | [default to undefined]
**scheduleTaskName** | **(optional)** `string` | The display name of the scheduled task. | [default to undefined]
**taskTypeName** | **(optional)** `string` | The type or category of the scheduled task. | [default to undefined]
**interval** | **(optional)** `number` | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [default to undefined]
**scheduleType** | **(optional)** `string` | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [default to undefined]
**active** | **(optional)** `boolean` | Indicates whether the scheduled task is currently active. | [default to false]
**startTime** | **(optional)** `number` | The start time for the scheduled task, represented as epoch seconds. | [default to undefined]
**endTime** | **(optional)** `number` | The end time for the scheduled task, represented as epoch seconds. | [default to undefined]
**daysOfWeek** | **(optional)** `Array<string>` | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [default to undefined]
**runAfterScheduleTaskId** | **(optional)** `number` | The ID of another scheduled task that triggers this scheduled task upon its completion. | [default to undefined]
**runAfterScheduleTaskName** | **(optional)** `string` | The name of the scheduled task that must complete before this task runs. | [default to undefined]
**applicationId** | **(optional)** `number` | The unique identifier of the application associated with the scheduled task. | [default to undefined]
**createdByDisplayName** | **(optional)** `string` | The display name of the user who created the scheduled task. | [default to undefined]
**nextRun** | **(optional)** `number` | The next scheduled run time for the task, represented as epoch seconds. | [default to undefined]
**lastRun** | **(optional)** `number` | The last run time of the task, represented as epoch seconds. | [default to undefined]

