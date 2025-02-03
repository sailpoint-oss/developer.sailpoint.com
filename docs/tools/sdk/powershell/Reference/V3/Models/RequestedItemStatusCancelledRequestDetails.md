---
id: requested-item-status-cancelled-request-details
title: RequestedItemStatusCancelledRequestDetails
pagination_label: RequestedItemStatusCancelledRequestDetails
sidebar_label: RequestedItemStatusCancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusCancelledRequestDetails', 'RequestedItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/powershell/v3/models/requested-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusCancelledRequestDetails', 'RequestedItemStatusCancelledRequestDetails']
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
$RequestedItemStatusCancelledRequestDetails = Initialize-PSSailpoint.V3RequestedItemStatusCancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusCancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

