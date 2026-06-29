---
id: requesteditemstatus-cancelled-request-details
title: RequesteditemstatusCancelledRequestDetails
pagination_label: RequesteditemstatusCancelledRequestDetails
sidebar_label: RequesteditemstatusCancelledRequestDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequesteditemstatusCancelledRequestDetails', 'RequesteditemstatusCancelledRequestDetails'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemstatus-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusCancelledRequestDetails', 'RequesteditemstatusCancelledRequestDetails']
---


# RequesteditemstatusCancelledRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | [**Ownerdto**](ownerdto) |  | [optional] 
**Modified** | **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequesteditemstatusCancelledRequestDetails = Initialize-RequesteditemstatusCancelledRequestDetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$RequesteditemstatusCancelledRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

