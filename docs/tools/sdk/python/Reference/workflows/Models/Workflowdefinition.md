---
id: workflowdefinition
title: Workflowdefinition
pagination_label: Workflowdefinition
sidebar_label: Workflowdefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowdefinition', 'Workflowdefinition'] 
slug: /tools/sdk/python/workflows/models/workflowdefinition
tags: ['SDK', 'Software Development Kit', 'Workflowdefinition', 'Workflowdefinition']
---

# Workflowdefinition

The map of steps that the workflow will execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **str** | The name of the starting step. | [optional] 
**steps** | **map[string]object** | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowdefinition import Workflowdefinition

workflowdefinition = Workflowdefinition(
start='Send Email Test',
steps={"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"ACTION"},"success":{"type":"success"}}
)

```
[[Back to top]](#) 

