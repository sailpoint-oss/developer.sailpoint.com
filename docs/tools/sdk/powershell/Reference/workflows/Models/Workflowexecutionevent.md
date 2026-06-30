---
id: workflowexecutionevent
title: Workflowexecutionevent
pagination_label: Workflowexecutionevent
sidebar_label: Workflowexecutionevent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowexecutionevent', 'Workflowexecutionevent'] 
slug: /tools/sdk/powershell/workflows/models/workflowexecutionevent
tags: ['SDK', 'Software Development Kit', 'Workflowexecutionevent', 'Workflowexecutionevent']
---


# Workflowexecutionevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WorkflowExecutionScheduled",    "WorkflowExecutionStarted",    "WorkflowExecutionCompleted",    "WorkflowExecutionFailed",    "WorkflowTaskScheduled",    "WorkflowTaskStarted",    "WorkflowTaskCompleted",    "WorkflowTaskFailed",    "ActivityTaskScheduled",    "ActivityTaskStarted",    "ActivityTaskCompleted",    "ActivityTaskFailed",    "StartChildWorkflowExecutionInitiated",    "ChildWorkflowExecutionStarted",    "ChildWorkflowExecutionCompleted",    "ChildWorkflowExecutionFailed" ] | The type of event | [optional] 
**Timestamp** | **System.DateTime** | The date-time when the event occurred | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Additional attributes associated with the event | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowexecutionevent = Initialize-Workflowexecutionevent  -Type WorkflowTaskScheduled `
 -Timestamp 2022-02-07T20:13:31.640618296Z `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$Workflowexecutionevent | ConvertTo-JSON
```


[[Back to top]](#) 

