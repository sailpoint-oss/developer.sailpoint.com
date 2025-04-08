---
id: v2025-requested-item-status-cancelled-request-details
title: RequestedItemStatusCancelledRequestDetails
pagination_label: RequestedItemStatusCancelledRequestDetails
sidebar_label: RequestedItemStatusCancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusCancelledRequestDetails', 'V2025RequestedItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/powershell/v2025/models/requested-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusCancelledRequestDetails', 'V2025RequestedItemStatusCancelledRequestDetails']
---


# RequestedItemStatusCancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** | **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusCancelledRequestDetails = Initialize-PSSailpoint.V2025RequestedItemStatusCancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusCancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

