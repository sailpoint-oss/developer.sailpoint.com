---
id: pendingapproval-owner
title: PendingapprovalOwner
pagination_label: PendingapprovalOwner
sidebar_label: PendingapprovalOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PendingapprovalOwner', 'PendingapprovalOwner'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/pendingapproval-owner
tags: ['SDK', 'Software Development Kit', 'PendingapprovalOwner', 'PendingapprovalOwner']
---


# PendingapprovalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Access item owner's DTO type. | [optional] 
**Id** | **String** | Access item owner's identity ID. | [optional] 
**Name** | **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingapprovalOwner = Initialize-PendingapprovalOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$PendingapprovalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

