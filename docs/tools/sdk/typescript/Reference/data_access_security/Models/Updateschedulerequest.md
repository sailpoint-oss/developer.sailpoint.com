---
id: v1-updateschedulerequest-v1
title: UpdateschedulerequestV1
pagination_label: UpdateschedulerequestV1
sidebar_label: UpdateschedulerequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UpdateschedulerequestV1', 'v1UpdateschedulerequestV1']
slug: /tools/sdk/typescript/data_access_security/models/updateschedulerequest-v1
tags: ['SDK', 'Software Development Kit', 'UpdateschedulerequestV1', 'v1UpdateschedulerequestV1']
---

# UpdateschedulerequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskTypeName** | **(optional)** `string` | The type or category of the scheduled task. | [default to undefined]
**scheduleType** | **(optional)** `string` | The scheduling type, such as \"Daily\", \"Weekly\", or \"Manual\" etc. | [default to undefined]
**interval** | **(optional)** `number` | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [default to undefined]
**scheduleTaskName** | **(optional)** `string` | The display name of the scheduled task. | [default to undefined]
**startTime** | **(optional)** `number` | The start time for the scheduled task, represented as epoch seconds. | [default to undefined]
**endTime** | **(optional)** `number` | The end time for the scheduled task, represented as epoch seconds. | [default to undefined]
**daysOfWeek** | **(optional)** `Array<string>` | A list of days of the week when the task should run (e.g., \"Monday\", \"Wednesday\"). | [default to undefined]
**active** | **(optional)** `boolean` | Indicates whether the scheduled task is currently active. | [default to false]
**runAfterScheduleTaskId** | **(optional)** `number` | The ID of another scheduled task that triggers this scheduled task upon its completion. | [default to undefined]
**applicationId** | **(optional)** `number` | The unique identifier of the application associated with the scheduled task. | [default to undefined]

