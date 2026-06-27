---
id: approvalcomment3
title: Approvalcomment3
pagination_label: Approvalcomment3
sidebar_label: Approvalcomment3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalcomment3', 'Approvalcomment3'] 
slug: /tools/sdk/powershell/approvals/models/approvalcomment3
tags: ['SDK', 'Software Development Kit', 'Approvalcomment3', 'Approvalcomment3']
---


# Approvalcomment3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**Comment** | **String** | Comment to be left on an approval | [optional] 
**CreatedDate** | **String** | Date the comment was created | [optional] 
**CommentId** | **String** | ID of the comment | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalcomment3 = Initialize-Approvalcomment3  -Author null `
 -Comment Looks good `
 -CreatedDate 2023-04-12T23:20:50.52Z `
 -CommentId 38453251-6be2-5f8f-df93-5ce19e295837
```

- Convert the resource to JSON
```powershell
$Approvalcomment3 | ConvertTo-JSON
```


[[Back to top]](#) 

