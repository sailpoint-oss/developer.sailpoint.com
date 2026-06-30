---
id: taskresultdto
title: Taskresultdto
pagination_label: Taskresultdto
sidebar_label: Taskresultdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taskresultdto', 'Taskresultdto'] 
slug: /tools/sdk/powershell/dimensions/models/taskresultdto
tags: ['SDK', 'Software Development Kit', 'Taskresultdto', 'Taskresultdto']
---


# Taskresultdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "TASK_RESULT" ] | Task result DTO type. | [optional] 
**Id** | **String** | Task result ID. | [optional] 
**Name** | **String** | Task result display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Taskresultdto = Initialize-Taskresultdto  -Type TASK_RESULT `
 -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Name null
```

- Convert the resource to JSON
```powershell
$Taskresultdto | ConvertTo-JSON
```


[[Back to top]](#) 

