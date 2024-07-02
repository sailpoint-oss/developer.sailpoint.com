---
id: approval-description
title: ApprovalDescription
pagination_label: ApprovalDescription
sidebar_label: ApprovalDescription
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ApprovalDescription'] 
slug: /tools/sdk/powershell/beta/models/approval-description
tags: ['SDK', 'Software Development Kit', 'ApprovalDescription']
---


# ApprovalDescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** |  Pointer to **String** | The description of what the approval is asking for | [optional] 
**Locale** |  Pointer to **String** | What locale the description of the approval is using | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalDescription = Initialize-BetaApprovalDescription  -Value This access allows viewing and editing of workflow resource `
 -Locale en_US
```

- Convert the resource to JSON
```powershell
$ApprovalDescription | ConvertTo-JSON
```


[[Back to top]](#) 

