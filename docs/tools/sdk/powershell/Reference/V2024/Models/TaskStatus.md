---
id: v2024-task-status
title: TaskStatus
pagination_label: TaskStatus
sidebar_label: TaskStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskStatus', 'V2024TaskStatus'] 
slug: /tools/sdk/powershell/v2024/models/task-status
tags: ['SDK', 'Software Development Kit', 'TaskStatus', 'V2024TaskStatus']
---


# TaskStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the task this TaskStatus represents | [required]
**Type** |  **Enum** [  "QUARTZ",    "QPOC",    "QUEUED_TASK" ] | Type of task this TaskStatus represents | [required]
**UniqueName** | **String** | Name of the task this TaskStatus represents | [required]
**Description** | **String** | Description of the task this TaskStatus represents | [required]
**ParentName** | **String** | Name of the parent of the task this TaskStatus represents | [required]
**Launcher** | **String** | Service to execute the task this TaskStatus represents | [required]
**Target** | [**Target**](target) |  | [optional] 
**Created** | **System.DateTime** | Creation date of the task this TaskStatus represents | [required]
**Modified** | **System.DateTime** | Last modification date of the task this TaskStatus represents | [required]
**Launched** | **System.DateTime** | Launch date of the task this TaskStatus represents | [required]
**Completed** | **System.DateTime** | Completion date of the task this TaskStatus represents | [required]
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMPERROR" ] | Completion status of the task this TaskStatus represents | [required]
**Messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the task this TaskStatus represents | [required]
**Returns** | [**[]TaskReturnDetails**](task-return-details) | Return values from the task this TaskStatus represents | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes of the task this TaskStatus represents | [required]
**Progress** | **String** | Current progress of the task this TaskStatus represents | [required]
**PercentComplete** | **Int32** | Current percentage completion of the task this TaskStatus represents | [required]
**TaskDefinitionSummary** | [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskStatus = Initialize-PSSailpoint.V2024TaskStatus  -Id id12345 `
 -Type QUARTZ `
 -UniqueName Big Task `
 -Description A Really Big Task `
 -ParentName Parent Task `
 -Launcher sweep `
 -Target null `
 -Created 2020-07-11T21:23:15Z `
 -Modified 2020-07-11T21:23:15Z `
 -Launched 2020-07-11T21:23:15Z `
 -Completed 2020-07-11T21:23:15Z `
 -CompletionStatus SUCCESS `
 -Messages null `
 -Returns null `
 -Attributes {identityCount&#x3D;0} `
 -Progress Started `
 -PercentComplete 100 `
 -TaskDefinitionSummary null
```

- Convert the resource to JSON
```powershell
$TaskStatus | ConvertTo-JSON
```


[[Back to top]](#) 

