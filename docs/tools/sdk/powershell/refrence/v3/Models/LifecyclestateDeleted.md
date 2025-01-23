---
id: lifecyclestate-deleted
title: LifecyclestateDeleted
pagination_label: LifecyclestateDeleted
sidebar_label: LifecyclestateDeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LifecyclestateDeleted'] 
slug: /tools/sdk/powershell/v3/models/lifecyclestate-deleted
tags: ['SDK', 'Software Development Kit', 'LifecyclestateDeleted']
---


# LifecyclestateDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "LIFECYCLE_STATE" ] | Deleted lifecycle state's DTO type. | [optional] 
**Id** |  Pointer to **String** | Deleted lifecycle state ID. | [optional] 
**Name** |  Pointer to **String** | Deleted lifecycle state's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecyclestateDeleted = Initialize-PSSailpoint.V3LifecyclestateDeleted  -Type LIFECYCLE_STATE `
 -Id 12345 `
 -Name Contractor Lifecycle
```

- Convert the resource to JSON
```powershell
$LifecyclestateDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

