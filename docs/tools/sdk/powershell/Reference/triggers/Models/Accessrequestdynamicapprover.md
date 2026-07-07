---
id: accessrequestdynamicapprover
title: Accessrequestdynamicapprover
pagination_label: Accessrequestdynamicapprover
sidebar_label: Accessrequestdynamicapprover
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestdynamicapprover', 'Accessrequestdynamicapprover'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestdynamicapprover
tags: ['SDK', 'Software Development Kit', 'Accessrequestdynamicapprover', 'Accessrequestdynamicapprover']
---


# Accessrequestdynamicapprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [required]
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**RequestedItems** | [**[]AccessrequestdynamicapproverRequestedItemsInner**](accessrequestdynamicapprover-requested-items-inner) | The access items that are being requested. | [required]
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accessrequestdynamicapprover = Initialize-Accessrequestdynamicapprover  -AccessRequestId 4b4d982dddff4267ab12f0f1e72b5a6d `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$Accessrequestdynamicapprover | ConvertTo-JSON
```


[[Back to top]](#) 

