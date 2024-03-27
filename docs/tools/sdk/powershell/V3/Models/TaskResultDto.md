---
id: task-result-dto
title: TaskResultDto
pagination_label: TaskResultDto
sidebar_label: TaskResultDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TaskResultDto'] 
slug: /tools/sdk/powershell/v3/models/task-result-dto
tags: ['SDK', 'Software Development Kit', 'TaskResultDto']
---


# TaskResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "TASK_RESULT" ] | Task result DTO type. | [optional] 
**Id** |  Pointer to **String** | Task result ID. | [optional] 
**Name** |  Pointer to **String** | Task result display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultDto = Initialize-PSSailpointTaskResultDto  -Type TASK_RESULT `
 -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Name null
```

- Convert the resource to JSON
```powershell
$TaskResultDto | ConvertTo-JSON
```


[[Back to top]](#) 

