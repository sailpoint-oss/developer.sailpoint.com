---
id: lifecyclestatedeleted
title: Lifecyclestatedeleted
pagination_label: Lifecyclestatedeleted
sidebar_label: Lifecyclestatedeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lifecyclestatedeleted', 'Lifecyclestatedeleted'] 
slug: /tools/sdk/powershell/lifecyclestates/models/lifecyclestatedeleted
tags: ['SDK', 'Software Development Kit', 'Lifecyclestatedeleted', 'Lifecyclestatedeleted']
---


# Lifecyclestatedeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIFECYCLE_STATE",    "TASK_RESULT" ] | Deleted lifecycle state's DTO type. | [optional] 
**Id** | **String** | Deleted lifecycle state ID. | [optional] 
**Name** | **String** | Deleted lifecycle state's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lifecyclestatedeleted = Initialize-Lifecyclestatedeleted  -Type LIFECYCLE_STATE `
 -Id 12345 `
 -Name Contractor Lifecycle
```

- Convert the resource to JSON
```powershell
$Lifecyclestatedeleted | ConvertTo-JSON
```


[[Back to top]](#) 

