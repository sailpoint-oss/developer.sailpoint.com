---
id: v1-workflowlibraryoperator-v1
title: WorkflowlibraryoperatorV1
pagination_label: WorkflowlibraryoperatorV1
sidebar_label: WorkflowlibraryoperatorV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'WorkflowlibraryoperatorV1', 'v1WorkflowlibraryoperatorV1']
slug: /tools/sdk/typescript/workflows/models/workflowlibraryoperator-v1
tags: ['SDK', 'Software Development Kit', 'WorkflowlibraryoperatorV1', 'v1WorkflowlibraryoperatorV1']
---

# WorkflowlibraryoperatorV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Operator ID. | [default to undefined]
**name** | **(optional)** `string` | Operator friendly name | [default to undefined]
**type** | **(optional)** `string` | Operator type | [default to undefined]
**description** | **(optional)** `string` | Description of the operator | [default to undefined]
**isDynamicSchema** | **(optional)** `boolean` | Determines whether the dynamic output schema is returned in place of the action\'s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [default to undefined]
**deprecated** | **(optional)** `boolean` |  | [default to undefined]
**deprecatedBy** | **(optional)** `string` |  | [default to undefined]
**isSimulationEnabled** | **(optional)** `boolean` |  | [default to undefined]
**formFields** | **(optional)** `Array<WorkflowlibraryformfieldsV1>` | One or more inputs that the operator accepts | [default to undefined]

