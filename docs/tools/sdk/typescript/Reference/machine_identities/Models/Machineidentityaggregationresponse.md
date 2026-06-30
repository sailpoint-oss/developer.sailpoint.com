---
id: v1-machineidentityaggregationresponse-v1
title: MachineidentityaggregationresponseV1
pagination_label: MachineidentityaggregationresponseV1
sidebar_label: MachineidentityaggregationresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineidentityaggregationresponseV1', 'v1MachineidentityaggregationresponseV1']
slug: /tools/sdk/typescript/machine_identities/models/machineidentityaggregationresponse-v1
tags: ['SDK', 'Software Development Kit', 'MachineidentityaggregationresponseV1', 'v1MachineidentityaggregationresponseV1']
---

# MachineidentityaggregationresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [default to undefined]
**type** | **(optional)** `string` | Type of task for aggregation | [default to undefined]
**uniqueName** | **(optional)** `string` | Name of the task for aggregation | [default to undefined]
**description** | **(optional)** `string` | Description of the aggregation | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent of the task for aggregation | [default to undefined]
**launcher** | **(optional)** `string` | Service to execute the aggregation | [default to undefined]
**target** | **(optional)** `MachineidentityaggregationresponseTargetV1` |  | [default to undefined]
**created** | **(optional)** `string` | Creation date of the aggregation | [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the aggregation | [default to undefined]
**launched** | **(optional)** `string` | Launch date of the aggregation | [default to undefined]
**completed** | **(optional)** `string` | Completion date of the aggregation | [default to undefined]
**taskDefinitionSummary** | **(optional)** `TaskdefinitionsummaryV1` |  | [default to undefined]
**completionStatus** | **(optional)** `string` | Completion status of the aggregation | [default to undefined]
**messages** | **(optional)** `Array<TaskstatusmessageV1>` | Messages associated with the aggregation | [default to undefined]
**returns** | **(optional)** `Array<TaskreturndetailsV1>` | Return values associated with the aggregation | [default to undefined]
**attributes** | **(optional)**  | Attributes of the aggregation | [default to undefined]
**progress** | **(optional)** `string` | Current progress of aggregation | [default to undefined]
**percentComplete** | **(optional)** `number` | Current percentage completion of aggregation | [default to undefined]

