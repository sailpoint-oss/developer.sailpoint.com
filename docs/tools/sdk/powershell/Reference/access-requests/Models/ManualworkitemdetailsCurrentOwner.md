---
id: manualworkitemdetails-current-owner
title: ManualworkitemdetailsCurrentOwner
pagination_label: ManualworkitemdetailsCurrentOwner
sidebar_label: ManualworkitemdetailsCurrentOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualworkitemdetailsCurrentOwner', 'ManualworkitemdetailsCurrentOwner'] 
slug: /tools/sdk/powershell/accessrequests/models/manualworkitemdetails-current-owner
tags: ['SDK', 'Software Development Kit', 'ManualworkitemdetailsCurrentOwner', 'ManualworkitemdetailsCurrentOwner']
---


# ManualworkitemdetailsCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of current work item owner's identity. | [optional] 
**Id** | **String** | ID of current work item owner's identity. | [optional] 
**Name** | **String** | Display name of current work item owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualworkitemdetailsCurrentOwner = Initialize-ManualworkitemdetailsCurrentOwner  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$ManualworkitemdetailsCurrentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

