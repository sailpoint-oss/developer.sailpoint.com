---
id: v2025-approval-comment1
title: ApprovalComment1
pagination_label: ApprovalComment1
sidebar_label: ApprovalComment1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalComment1', 'V2025ApprovalComment1'] 
slug: /tools/sdk/powershell/v2025/models/approval-comment1
tags: ['SDK', 'Software Development Kit', 'ApprovalComment1', 'V2025ApprovalComment1']
---


# ApprovalComment1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Comment** | **String** | Comment to be left on an approval | [optional] 
**CreatedDate** | **String** | Date the comment was created | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalComment1 = Initialize-PSSailpoint.V2025ApprovalComment1  -Author null `
 -Comment Looks good `
 -CreatedDate 2023-04-12T23:20:50.52Z
```

- Convert the resource to JSON
```powershell
$ApprovalComment1 | ConvertTo-JSON
```


[[Back to top]](#) 

