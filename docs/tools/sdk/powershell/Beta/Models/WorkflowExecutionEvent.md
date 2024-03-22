---
id: workflow-execution-event
title: WorkflowExecutionEvent
pagination_label: WorkflowExecutionEvent
sidebar_label: WorkflowExecutionEvent
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowExecutionEvent'] 
slug: /tools/sdk/powershell/beta/models/workflow-execution-event
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionEvent']
---


# WorkflowExecutionEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "WorkflowExecutionScheduled",    "WorkflowExecutionStarted",    "WorkflowExecutionCompleted",    "WorkflowExecutionFailed",    "WorkflowTaskScheduled",    "WorkflowTaskStarted",    "WorkflowTaskCompleted",    "WorkflowTaskFailed",    "ActivityTaskScheduled",    "ActivityTaskStarted",    "ActivityTaskCompleted",    "ActivityTaskFailed" ] | The type of event | [optional] 
**Timestamp** |  Pointer to **System.DateTime** | The date-time when the event occurred | [optional] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Additional attributes associated with the event | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowExecutionEvent = Initialize-PSSailpointBetaWorkflowExecutionEvent  -Type WorkflowTaskScheduled `
 -Timestamp 2022-02-07T20:13:31.640618296Z `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$WorkflowExecutionEvent | ConvertTo-JSON
```


[[Back to top]](#) 

