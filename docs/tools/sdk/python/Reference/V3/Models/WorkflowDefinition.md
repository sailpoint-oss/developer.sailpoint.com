---
id: workflow-definition
title: WorkflowDefinition
pagination_label: WorkflowDefinition
sidebar_label: WorkflowDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowDefinition', 'WorkflowDefinition'] 
slug: /tools/sdk/python/v3/models/workflow-definition
tags: ['SDK', 'Software Development Kit', 'WorkflowDefinition', 'WorkflowDefinition']
---

# WorkflowDefinition

The map of steps that the workflow will execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **str** | The name of the starting step. | [optional] 
**steps** | **map[string]object** | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 
}

## Example

```python
from sailpoint.v3.models.workflow_definition import WorkflowDefinition

workflow_definition = WorkflowDefinition(
start='Send Email Test',
steps={Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=ACTION}, success={type=success}}
)

```
[[Back to top]](#) 

