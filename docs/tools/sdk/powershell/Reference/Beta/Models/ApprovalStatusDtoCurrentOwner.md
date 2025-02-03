---
id: beta-approval-status-dto-current-owner
title: ApprovalStatusDtoCurrentOwner
pagination_label: ApprovalStatusDtoCurrentOwner
sidebar_label: ApprovalStatusDtoCurrentOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalStatusDtoCurrentOwner', 'BetaApprovalStatusDtoCurrentOwner'] 
slug: /tools/sdk/powershell/beta/models/approval-status-dto-current-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDtoCurrentOwner', 'BetaApprovalStatusDtoCurrentOwner']
---


# ApprovalStatusDtoCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalStatusDtoCurrentOwner = Initialize-PSSailpoint.BetaApprovalStatusDtoCurrentOwner  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$ApprovalStatusDtoCurrentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

