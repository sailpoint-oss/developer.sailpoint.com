---
id: beta-requested-item-status-cancelled-request-details
title: RequestedItemStatusCancelledRequestDetails
pagination_label: RequestedItemStatusCancelledRequestDetails
sidebar_label: RequestedItemStatusCancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/powershell/beta/models/requested-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusCancelledRequestDetails']
---


# RequestedItemStatusCancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** |  Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusCancelledRequestDetails = Initialize-PSSailpoint.BetaRequestedItemStatusCancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusCancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

