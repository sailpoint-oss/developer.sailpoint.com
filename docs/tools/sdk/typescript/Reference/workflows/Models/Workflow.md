---
id: v1-workflow-v1
title: WorkflowV1
pagination_label: WorkflowV1
sidebar_label: WorkflowV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkflowV1', 'v1WorkflowV1']
slug: /tools/sdk/typescript/workflows/models/workflow-v1
tags: ['SDK', 'Software Development Kit', 'WorkflowV1', 'v1WorkflowV1']
---

# WorkflowV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the workflow | [default to undefined]
**owner** | **(optional)** `WorkflowbodyOwnerV1` |  | [default to undefined]
**description** | **(optional)** `string` | Description of what the workflow accomplishes | [default to undefined]
**definition** | **(optional)** `WorkflowdefinitionV1` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [default to false]
**trigger** | **(optional)** `WorkflowtriggerV1` |  | [default to undefined]
**id** | **(optional)** `string` | Workflow ID. This is a UUID generated upon creation. | [default to undefined]
**executionCount** | **(optional)** `number` | The number of times this workflow has been executed. | [default to undefined]
**failureCount** | **(optional)** `number` | The number of times this workflow has failed during execution. | [default to undefined]
**created** | **(optional)** `string` | The date and time the workflow was created. | [default to undefined]
**modified** | **(optional)** `string` | The date and time the workflow was modified. | [default to undefined]
**modifiedBy** | **(optional)** `WorkflowmodifiedbyV1` |  | [default to undefined]
**creator** | **(optional)** `WorkflowAllOfCreatorV1` |  | [default to undefined]

