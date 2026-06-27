---
id: v1-create-workflow-v1-request-v1
title: CreateWorkflowV1RequestV1
pagination_label: CreateWorkflowV1RequestV1
sidebar_label: CreateWorkflowV1RequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateWorkflowV1RequestV1', 'v1CreateWorkflowV1RequestV1']
slug: /tools/sdk/typescript/workflows/models/create-workflow-v1-request-v1
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowV1RequestV1', 'v1CreateWorkflowV1RequestV1']
---

# CreateWorkflowV1RequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the workflow | [default to undefined]
**owner** | **(optional)** `WorkflowbodyOwnerV1` |  | [default to undefined]
**description** | **(optional)** `string` | Description of what the workflow accomplishes | [default to undefined]
**definition** | **(optional)** `WorkflowdefinitionV1` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [default to false]
**trigger** | **(optional)** `WorkflowtriggerV1` |  | [default to undefined]

