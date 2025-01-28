---
id: beta-task-result-response
title: TaskResultResponse
pagination_label: TaskResultResponse
sidebar_label: TaskResultResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskResultResponse', 'BetaTaskResultResponse'] 
slug: /tools/sdk/powershell/beta/models/task-result-response
tags: ['SDK', 'Software Development Kit', 'TaskResultResponse', 'BetaTaskResultResponse']
---


# TaskResultResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | the type of response reference | [optional] 
**Id** |  Pointer to **String** | the task ID | [optional] 
**Name** |  Pointer to **String** | the task name (not used in this endpoint, always null) | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultResponse = Initialize-PSSailpoint.BetaTaskResultResponse  -Type TASK_RESULT `
 -Id 78733556-9ea3-4f59-bf69-e5cd92b011b4 `
 -Name null
```

- Convert the resource to JSON
```powershell
$TaskResultResponse | ConvertTo-JSON
```


[[Back to top]](#) 

