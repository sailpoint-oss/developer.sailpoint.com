---
id: v1-taskresultdetails-v1
title: TaskresultdetailsV1
pagination_label: TaskresultdetailsV1
sidebar_label: TaskresultdetailsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TaskresultdetailsV1', 'v1TaskresultdetailsV1']
slug: /tools/sdk/typescript/reports_data_extraction/models/taskresultdetails-v1
tags: ['SDK', 'Software Development Kit', 'TaskresultdetailsV1', 'v1TaskresultdetailsV1']
---

# TaskresultdetailsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the job or task underlying in the report processing. It could be a quartz task, QPOC or MENTOS jobs or a refresh/sync task. | [default to undefined]
**id** | **(optional)** `string` | Unique task definition identifier. | [default to undefined]
**reportType** | **(optional)** `string` | Use this property to define what report should be processed in the RDE service. | [default to undefined]
**description** | **(optional)** `string` | Description of the report purpose and/or contents. | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent task/report if exists. | [default to undefined]
**launcher** | **(optional)** `string` | Name of the report processing initiator. | [default to undefined]
**created** | **(optional)** `string` | Report creation date | [default to undefined]
**launched** | **(optional)** `string` | Report start date | [default to undefined]
**completed** | **(optional)** `string` | Report completion date | [default to undefined]
**completionStatus** | **(optional)** `string` | Report completion status. | [default to undefined]
**messages** | **(optional)** `Array<TaskresultdetailsMessagesInnerV1>` | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [default to undefined]
**returns** | **(optional)** `Array<TaskresultdetailsReturnsInnerV1>` | Task definition results, if necessary. | [default to undefined]
**attributes** | **(optional)** `object` | Extra attributes map(dictionary) needed for the report. | [default to undefined]
**progress** | **(optional)** `string` | Current report state. | [default to undefined]

