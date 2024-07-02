---
id: manual-work-item-details-current-owner
title: ManualWorkItemDetailsCurrentOwner
pagination_label: ManualWorkItemDetailsCurrentOwner
sidebar_label: ManualWorkItemDetailsCurrentOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManualWorkItemDetailsCurrentOwner'] 
slug: /tools/sdk/powershell/beta/models/manual-work-item-details-current-owner
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetailsCurrentOwner']
---


# ManualWorkItemDetailsCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of current work item owner&#39;s identity. | [optional] 
**Id** |  Pointer to **String** | ID of current work item owner&#39;s identity. | [optional] 
**Name** |  Pointer to **String** | Display name of current work item owner. | [optional] 

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

