---
id: v2025-manual-work-item-details-original-owner
title: ManualWorkItemDetailsOriginalOwner
pagination_label: ManualWorkItemDetailsOriginalOwner
sidebar_label: ManualWorkItemDetailsOriginalOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualWorkItemDetailsOriginalOwner', 'V2025ManualWorkItemDetailsOriginalOwner'] 
slug: /tools/sdk/powershell/v2025/models/manual-work-item-details-original-owner
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetailsOriginalOwner', 'V2025ManualWorkItemDetailsOriginalOwner']
---


# ManualWorkItemDetailsOriginalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of original work item owner's identity. | [optional] 
**Id** | **String** | ID of original work item owner's identity. | [optional] 
**Name** | **String** | Display name of original work item owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetailsOriginalOwner = Initialize-PSSailpoint.V2025ManualWorkItemDetailsOriginalOwner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ManualWorkItemDetailsOriginalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

