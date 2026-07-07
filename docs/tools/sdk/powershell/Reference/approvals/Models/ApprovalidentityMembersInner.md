---
id: approvalidentity-members-inner
title: ApprovalidentityMembersInner
pagination_label: ApprovalidentityMembersInner
sidebar_label: ApprovalidentityMembersInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalidentityMembersInner', 'ApprovalidentityMembersInner'] 
slug: /tools/sdk/powershell/approvals/models/approvalidentity-members-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalidentityMembersInner', 'ApprovalidentityMembersInner']
---


# ApprovalidentityMembersInner

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
$ApprovalidentityMembersInner = Initialize-ApprovalidentityMembersInner  -Email mail@mail.com `
 -Id 17e633e7d57e481569df76323169deb6a `
 -Name Bob Neil `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$ApprovalidentityMembersInner | ConvertTo-JSON
```


[[Back to top]](#) 

