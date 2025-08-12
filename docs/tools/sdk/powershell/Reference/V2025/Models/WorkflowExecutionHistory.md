---
id: v2025-workflow-execution-history
title: WorkflowExecutionHistory
pagination_label: WorkflowExecutionHistory
sidebar_label: WorkflowExecutionHistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowExecutionHistory', 'V2025WorkflowExecutionHistory'] 
slug: /tools/sdk/powershell/v2025/models/workflow-execution-history
tags: ['SDK', 'Software Development Kit', 'WorkflowExecutionHistory', 'V2025WorkflowExecutionHistory']
---


# WorkflowExecutionHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Definition** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The workflow definition for the workflow execution | [optional] 
**History** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of workflow execution events for the given workflow execution | [optional] 
**Trigger** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The trigger that initiated the workflow execution | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowExecutionHistory = Initialize-V2025WorkflowExecutionHistory  -Definition null `
 -History null `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$WorkflowExecutionHistory | ConvertTo-JSON
```


[[Back to top]](#) 

