---
id: v2025-task-result-response
title: TaskResultResponse
pagination_label: TaskResultResponse
sidebar_label: TaskResultResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskResultResponse', 'V2025TaskResultResponse'] 
slug: /tools/sdk/powershell/v2025/models/task-result-response
tags: ['SDK', 'Software Development Kit', 'TaskResultResponse', 'V2025TaskResultResponse']
---


# TaskResultResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | the type of response reference | [optional] 
**Id** | **String** | the task ID | [optional] 
**Name** | **String** | the task name (not used in this endpoint, always null) | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultResponse = Initialize-PSSailpoint.V2025TaskResultResponse  -Type TASK_RESULT `
 -Id 78733556-9ea3-4f59-bf69-e5cd92b011b4 `
 -Name null
```

- Convert the resource to JSON
```powershell
$TaskResultResponse | ConvertTo-JSON
```


[[Back to top]](#) 

