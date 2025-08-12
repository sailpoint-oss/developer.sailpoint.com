---
id: v2025-approval-identity-members-inner
title: ApprovalIdentityMembersInner
pagination_label: ApprovalIdentityMembersInner
sidebar_label: ApprovalIdentityMembersInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalIdentityMembersInner', 'V2025ApprovalIdentityMembersInner'] 
slug: /tools/sdk/powershell/v2025/models/approval-identity-members-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentityMembersInner', 'V2025ApprovalIdentityMembersInner']
---


# ApprovalIdentityMembersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **String** | Email of the member. | [optional] 
**Id** | **String** | ID of the member. | [optional] 
**Name** | **String** | Name of the member. | [optional] 
**Type** | **String** | Type of the member. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalIdentityMembersInner = Initialize-V2025ApprovalIdentityMembersInner  -Email mail@mail.com `
 -Id 17e633e7d57e481569df76323169deb6a `
 -Name Bob Neil `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$ApprovalIdentityMembersInner | ConvertTo-JSON
```


[[Back to top]](#) 

