---
id: v2024-cancelled-request-details1
title: CancelledRequestDetails1
pagination_label: CancelledRequestDetails1
sidebar_label: CancelledRequestDetails1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CancelledRequestDetails1'] 
slug: /tools/sdk/powershell/v2024/models/cancelled-request-details1
tags: ['SDK', 'Software Development Kit', 'CancelledRequestDetails1']
---


# CancelledRequestDetails1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** |  Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$CancelledRequestDetails1 = Initialize-PSSailpoint.V2024CancelledRequestDetails1  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$CancelledRequestDetails1 | ConvertTo-JSON
```


[[Back to top]](#) 

