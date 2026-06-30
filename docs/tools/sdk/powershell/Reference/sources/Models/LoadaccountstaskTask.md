---
id: loadaccountstask-task
title: LoadaccountstaskTask
pagination_label: LoadaccountstaskTask
sidebar_label: LoadaccountstaskTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadaccountstaskTask', 'LoadaccountstaskTask'] 
slug: /tools/sdk/powershell/sources/models/loadaccountstask-task
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTask', 'LoadaccountstaskTask']
---


# LoadaccountstaskTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | **String** | Type of task this task represents | [optional] 
**Name** | **String** | The name of the aggregation process | [optional] 
**Description** | **String** | The description of the task | [optional] 
**Launcher** | **String** | The user who initiated the task | [optional] 
**Created** | **System.DateTime** | The Task creation date | [optional] 
**Launched** | **System.DateTime** | The task start date | [optional] 
**Completed** | **System.DateTime** | The task completion date | [optional] 
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR" ] | Task completion status. | [optional] 
**ParentName** | **String** | Name of the parent task if exists. | [optional] 
**Messages** | [**[]LoadaccountstaskTaskMessagesInner**](loadaccountstask-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**Progress** | **String** | Current task state. | [optional] 
**Attributes** | [**LoadaccountstaskTaskAttributes**](loadaccountstask-task-attributes) |  | [optional] 
**Returns** | [**[]LoadaccountstaskTaskReturnsInner**](loadaccountstask-task-returns-inner) | Return values from the task | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadaccountstaskTask = Initialize-LoadaccountstaskTask  -Id ef38f94347e94562b5bb8424a56397d8 `
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
$LoadaccountstaskTask | ConvertTo-JSON
```


[[Back to top]](#) 

