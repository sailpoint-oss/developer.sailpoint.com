---
id: beta-manual-work-item-details-current-owner
title: ManualWorkItemDetailsCurrentOwner
pagination_label: ManualWorkItemDetailsCurrentOwner
sidebar_label: ManualWorkItemDetailsCurrentOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualWorkItemDetailsCurrentOwner', 'BetaManualWorkItemDetailsCurrentOwner'] 
slug: /tools/sdk/powershell/beta/models/manual-work-item-details-current-owner
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetailsCurrentOwner', 'BetaManualWorkItemDetailsCurrentOwner']
---


# ManualWorkItemDetailsCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of current work item owner's identity. | [optional] 
**Id** | **String** | ID of current work item owner's identity. | [optional] 
**Name** | **String** | Display name of current work item owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetailsCurrentOwner = Initialize-BetaManualWorkItemDetailsCurrentOwner  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$ManualWorkItemDetailsCurrentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

