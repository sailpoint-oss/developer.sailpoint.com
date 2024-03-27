---
id: approval-status-dto-original-owner
title: ApprovalStatusDtoOriginalOwner
pagination_label: ApprovalStatusDtoOriginalOwner
sidebar_label: ApprovalStatusDtoOriginalOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ApprovalStatusDtoOriginalOwner'] 
slug: /tools/sdk/powershell/beta/models/approval-status-dto-original-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDtoOriginalOwner']
---


# ApprovalStatusDtoOriginalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of original approval owner&#39;s identity. | [optional] 
**Id** |  Pointer to **String** | ID of original approval owner&#39;s identity. | [optional] 
**Name** |  Pointer to **String** | Display name of original approval owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalStatusDtoOriginalOwner = Initialize-PSSailpointBetaApprovalStatusDtoOriginalOwner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ApprovalStatusDtoOriginalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

