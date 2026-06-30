---
id: accessrequestpostapproval
title: Accessrequestpostapproval
pagination_label: Accessrequestpostapproval
sidebar_label: Accessrequestpostapproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestpostapproval', 'Accessrequestpostapproval'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestpostapproval
tags: ['SDK', 'Software Development Kit', 'Accessrequestpostapproval', 'Accessrequestpostapproval']
---


# Accessrequestpostapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | The unique ID of the access request. | [required]
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**RequestedItemsStatus** | [**[]AccessrequestpostapprovalRequestedItemsStatusInner**](accessrequestpostapproval-requested-items-status-inner) | Details on the outcome of each access item. | [required]
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accessrequestpostapproval = Initialize-Accessrequestpostapproval  -AccessRequestId 2c91808b6ef1d43e016efba0ce470904 `
 -RequestedFor null `
 -RequestedItemsStatus null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$Accessrequestpostapproval | ConvertTo-JSON
```


[[Back to top]](#) 

