---
id: v2024-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalReference', 'V2024ApprovalReference'] 
slug: /tools/sdk/powershell/v2024/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'V2024ApprovalReference']
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
$ApprovalReference = Initialize-V2024ApprovalReference  -Id 64012350-8fd9-4f6c-a170-1fe123683899 `
 -Type AccessRequestId
```

- Convert the resource to JSON
```powershell
$ApprovalReference | ConvertTo-JSON
```


[[Back to top]](#) 

