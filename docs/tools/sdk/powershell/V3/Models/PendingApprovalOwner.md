---
id: pending-approval-owner
title: PendingApprovalOwner
pagination_label: PendingApprovalOwner
sidebar_label: PendingApprovalOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PendingApprovalOwner'] 
slug: /tools/sdk/powershell/v3/models/pending-approval-owner
tags: ['SDK', 'Software Development Kit', 'PendingApprovalOwner']
---


# PendingApprovalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Access item owner&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Access item owner&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | Access item owner&#39;s human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingApprovalOwner = Initialize-PSSailpointPendingApprovalOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$PendingApprovalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

