---
id: v2024-task-result-simplified
title: TaskResultSimplified
pagination_label: TaskResultSimplified
sidebar_label: TaskResultSimplified
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskResultSimplified', 'V2024TaskResultSimplified'] 
slug: /tools/sdk/powershell/v2024/models/task-result-simplified
tags: ['SDK', 'Software Development Kit', 'TaskResultSimplified', 'V2024TaskResultSimplified']
---


# TaskResultSimplified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Task identifier | [optional] 
**Name** |  Pointer to **String** | Task name | [optional] 
**Description** |  Pointer to **String** | Task description | [optional] 
**Launcher** |  Pointer to **String** | User or process who launched the task | [optional] 
**Completed** |  Pointer to **System.DateTime** | Date time of completion | [optional] 
**Launched** |  Pointer to **System.DateTime** | Date time when the task was launched | [optional] 
**CompletionStatus** |  Pointer to  **Enum** [  "Success",    "Warning",    "Error",    "Terminated",    "TempError" ] | Task result status | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultSimplified = Initialize-PSSailpoint.V2024TaskResultSimplified  -Id ff8081814d977c21014da056804a0af3 `
 -Name Background Object Terminator c8f030f2-b1a6-4e33-99e8-6935bc18735d `
 -Description Generic task for terminating data in the overlay, used by the TerminationService. `
 -Launcher support `
 -Completed null `
 -Launched null `
 -CompletionStatus Success
```

- Convert the resource to JSON
```powershell
$TaskResultSimplified | ConvertTo-JSON
```


[[Back to top]](#) 

