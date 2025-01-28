---
id: v2024-cancelled-request-details
title: CancelledRequestDetails
pagination_label: CancelledRequestDetails
sidebar_label: CancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CancelledRequestDetails', 'V2024CancelledRequestDetails'] 
slug: /tools/sdk/powershell/v2024/models/cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'CancelledRequestDetails', 'V2024CancelledRequestDetails']
---


# CancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** |  Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$CancelledRequestDetails = Initialize-PSSailpoint.V2024CancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$CancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

