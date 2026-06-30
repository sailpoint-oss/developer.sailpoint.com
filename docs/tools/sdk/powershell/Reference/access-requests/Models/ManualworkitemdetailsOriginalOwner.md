---
id: manualworkitemdetails-original-owner
title: ManualworkitemdetailsOriginalOwner
pagination_label: ManualworkitemdetailsOriginalOwner
sidebar_label: ManualworkitemdetailsOriginalOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualworkitemdetailsOriginalOwner', 'ManualworkitemdetailsOriginalOwner'] 
slug: /tools/sdk/powershell/accessrequests/models/manualworkitemdetails-original-owner
tags: ['SDK', 'Software Development Kit', 'ManualworkitemdetailsOriginalOwner', 'ManualworkitemdetailsOriginalOwner']
---


# ManualworkitemdetailsOriginalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of original work item owner's identity. | [optional] 
**Id** | **String** | ID of original work item owner's identity. | [optional] 
**Name** | **String** | Display name of original work item owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualworkitemdetailsOriginalOwner = Initialize-ManualworkitemdetailsOriginalOwner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ManualworkitemdetailsOriginalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

