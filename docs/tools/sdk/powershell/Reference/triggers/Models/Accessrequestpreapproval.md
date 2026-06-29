---
id: accessrequestpreapproval
title: Accessrequestpreapproval
pagination_label: Accessrequestpreapproval
sidebar_label: Accessrequestpreapproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestpreapproval', 'Accessrequestpreapproval'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestpreapproval
tags: ['SDK', 'Software Development Kit', 'Accessrequestpreapproval', 'Accessrequestpreapproval']
---


# Accessrequestpreapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | The unique ID of the access request. | [required]
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**RequestedItems** | [**[]AccessrequestpreapprovalRequestedItemsInner**](accessrequestpreapproval-requested-items-inner) | Details of the access items being requested. | [required]
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accessrequestpreapproval = Initialize-Accessrequestpreapproval  -AccessRequestId 2c91808b6ef1d43e016efba0ce470904 `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$Accessrequestpreapproval | ConvertTo-JSON
```


[[Back to top]](#) 

