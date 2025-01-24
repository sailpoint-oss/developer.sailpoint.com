---
id: access-request-admin-item-status-cancelled-request-details
title: AccessRequestAdminItemStatusCancelledRequestDetails
pagination_label: AccessRequestAdminItemStatusCancelledRequestDetails
sidebar_label: AccessRequestAdminItemStatusCancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestAdminItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/powershell/v2024/models/access-request-admin-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatusCancelledRequestDetails']
---


# AccessRequestAdminItemStatusCancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** |  Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestAdminItemStatusCancelledRequestDetails = Initialize-PSSailpoint.V2024AccessRequestAdminItemStatusCancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$AccessRequestAdminItemStatusCancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

