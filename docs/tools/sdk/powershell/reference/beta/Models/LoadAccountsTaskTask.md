---
id: beta-load-accounts-task-task
title: LoadAccountsTaskTask
pagination_label: LoadAccountsTaskTask
sidebar_label: LoadAccountsTaskTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTaskTask'] 
slug: /tools/sdk/powershell/beta/models/load-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTask']
---


# LoadAccountsTaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** |  Pointer to **String** | Type of task this task represents | [optional] 
**Name** |  Pointer to **String** | The name of the aggregation process | [optional] 
**Description** |  Pointer to **String** | The description of the task | [optional] 
**Launcher** |  Pointer to **String** | The user who initiated the task | [optional] 
**Created** |  Pointer to **System.DateTime** | The Task creation date | [optional] 
**Launched** |  Pointer to **System.DateTime** | The task start date | [optional] 
**Completed** |  Pointer to **System.DateTime** | The task completion date | [optional] 
**CompletionStatus** |  Pointer to  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR" ] | Task completion status. | [optional] 
**ParentName** |  Pointer to **String** | Name of the parent task if exists. | [optional] 
**Messages** |  Pointer to [**[]LoadAccountsTaskTaskMessagesInner**](load-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** |  Pointer to **String** | Current task state. | [optional] 
**Attributes** |  Pointer to [**LoadAccountsTaskTaskAttributes**](load-accounts-task-task-attributes) |  | [optional] 
**Returns** |  Pointer to [**[]LoadAccountsTaskTaskReturnsInner**](load-accounts-task-task-returns-inner) | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTaskTask = Initialize-PSSailpoint.BetaLoadAccountsTaskTask  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type QUARTZ `
 -Name Cloud Account Aggregation `
 -Description Aggregate from the specified application `
 -Launcher John Doe `
 -Created null `
 -Launched null `
 -Completed null `
 -CompletionStatus Success `
 -ParentName Audit Report `
 -Messages [] `
 -Progress Initializing... `
 -Attributes null `
 -Returns null
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTask | ConvertTo-JSON
```


[[Back to top]](#) 

