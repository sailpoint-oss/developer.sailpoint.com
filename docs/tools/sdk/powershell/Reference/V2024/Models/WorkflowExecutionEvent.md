---
id: v2024-workflow-execution-event
title: WorkflowExecutionEvent
pagination_label: WorkflowExecutionEvent
sidebar_label: WorkflowExecutionEvent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowExecutionEvent', 'V2024WorkflowExecutionEvent'] 
slug: /tools/sdk/powershell/v2024/models/workflow-execution-event
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionEvent', 'V2024WorkflowExecutionEvent']
---


# WorkflowExecutionEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WorkflowExecutionScheduled",    "WorkflowExecutionStarted",    "WorkflowExecutionCompleted",    "WorkflowExecutionFailed",    "WorkflowTaskScheduled",    "WorkflowTaskStarted",    "WorkflowTaskCompleted",    "WorkflowTaskFailed",    "ActivityTaskScheduled",    "ActivityTaskStarted",    "ActivityTaskCompleted",    "ActivityTaskFailed",    "StartChildWorkflowExecutionInitiated",    "ChildWorkflowExecutionStarted",    "ChildWorkflowExecutionCompleted",    "ChildWorkflowExecutionFailed" ] | The type of event | [optional] 
**Timestamp** | **System.DateTime** | The date-time when the event occurred | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Additional attributes associated with the event | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowExecutionEvent = Initialize-PSSailpoint.V2024WorkflowExecutionEvent  -Type WorkflowTaskScheduled `
 -Timestamp 2022-02-07T20:13:31.640618296Z `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$WorkflowExecutionEvent | ConvertTo-JSON
```


[[Back to top]](#) 

