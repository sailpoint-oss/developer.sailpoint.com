---
id: v2024-approval-status-dto-original-owner
title: ApprovalStatusDtoOriginalOwner
pagination_label: ApprovalStatusDtoOriginalOwner
sidebar_label: ApprovalStatusDtoOriginalOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalStatusDtoOriginalOwner', 'V2024ApprovalStatusDtoOriginalOwner'] 
slug: /tools/sdk/powershell/v2024/models/approval-status-dto-original-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDtoOriginalOwner', 'V2024ApprovalStatusDtoOriginalOwner']
---


# ApprovalStatusDtoOriginalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of original approval owner's identity. | [optional] 
**Id** | **String** | ID of original approval owner's identity. | [optional] 
**Name** | **String** | Display name of original approval owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalStatusDtoOriginalOwner = Initialize-PSSailpoint.V2024ApprovalStatusDtoOriginalOwner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ApprovalStatusDtoOriginalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

