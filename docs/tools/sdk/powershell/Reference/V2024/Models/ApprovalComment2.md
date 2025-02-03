---
id: v2024-approval-comment2
title: ApprovalComment2
pagination_label: ApprovalComment2
sidebar_label: ApprovalComment2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalComment2', 'V2024ApprovalComment2'] 
slug: /tools/sdk/powershell/v2024/models/approval-comment2
tags: ['SDK', 'Software Development Kit', 'ApprovalComment2', 'V2024ApprovalComment2']
---


# ApprovalComment2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | The comment text | [optional] 
**Commenter** | **String** | The name of the commenter | [optional] 
**Date** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalComment2 = Initialize-PSSailpoint.V2024ApprovalComment2  -Comment This request was autoapproved by our automated ETS subscriber. `
 -Commenter Automated AR Approval `
 -Date 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$ApprovalComment2 | ConvertTo-JSON
```


[[Back to top]](#) 

