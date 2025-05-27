---
id: beta-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalReference', 'BetaApprovalReference'] 
slug: /tools/sdk/powershell/beta/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'BetaApprovalReference']
---


# ApprovalReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the reference object | [optional] 
**Type** | **String** | What reference object does this ID correspond to | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalReference = Initialize-BetaApprovalReference  -Id 64012350-8fd9-4f6c-a170-1fe123683899 `
 -Type AccessRequestId
```

- Convert the resource to JSON
```powershell
$ApprovalReference | ConvertTo-JSON
```


[[Back to top]](#) 

