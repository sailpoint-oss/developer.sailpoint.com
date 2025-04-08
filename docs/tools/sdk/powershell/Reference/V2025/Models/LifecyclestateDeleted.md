---
id: v2025-lifecyclestate-deleted
title: LifecyclestateDeleted
pagination_label: LifecyclestateDeleted
sidebar_label: LifecyclestateDeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecyclestateDeleted', 'V2025LifecyclestateDeleted'] 
slug: /tools/sdk/powershell/v2025/models/lifecyclestate-deleted
tags: ['SDK', 'Software Development Kit', 'LifecyclestateDeleted', 'V2025LifecyclestateDeleted']
---


# LifecyclestateDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIFECYCLE_STATE",    "TASK_RESULT" ] | Deleted lifecycle state's DTO type. | [optional] 
**Id** | **String** | Deleted lifecycle state ID. | [optional] 
**Name** | **String** | Deleted lifecycle state's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecyclestateDeleted = Initialize-PSSailpoint.V2025LifecyclestateDeleted  -Type LIFECYCLE_STATE `
 -Id 12345 `
 -Name Contractor Lifecycle
```

- Convert the resource to JSON
```powershell
$LifecyclestateDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

