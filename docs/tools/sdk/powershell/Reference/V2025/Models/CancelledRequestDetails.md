---
id: v2025-cancelled-request-details
title: CancelledRequestDetails
pagination_label: CancelledRequestDetails
sidebar_label: CancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CancelledRequestDetails', 'V2025CancelledRequestDetails'] 
slug: /tools/sdk/powershell/v2025/models/cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'CancelledRequestDetails', 'V2025CancelledRequestDetails']
---


# CancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** | **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$CancelledRequestDetails = Initialize-PSSailpoint.V2025CancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$CancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

