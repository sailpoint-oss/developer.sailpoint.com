---
id: approvalstatusdto-original-owner
title: ApprovalstatusdtoOriginalOwner
pagination_label: ApprovalstatusdtoOriginalOwner
sidebar_label: ApprovalstatusdtoOriginalOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalstatusdtoOriginalOwner', 'ApprovalstatusdtoOriginalOwner'] 
slug: /tools/sdk/powershell/accessrequests/models/approvalstatusdto-original-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalstatusdtoOriginalOwner', 'ApprovalstatusdtoOriginalOwner']
---


# ApprovalstatusdtoOriginalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of original approval owner's identity. | [optional] 
**Id** | **String** | ID of original approval owner's identity. | [optional] 
**Name** | **String** | Display name of original approval owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalstatusdtoOriginalOwner = Initialize-ApprovalstatusdtoOriginalOwner  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ApprovalstatusdtoOriginalOwner | ConvertTo-JSON
```


[[Back to top]](#) 

