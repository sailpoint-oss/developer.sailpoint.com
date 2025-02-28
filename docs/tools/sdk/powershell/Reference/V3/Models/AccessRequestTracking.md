---
id: access-request-tracking
title: AccessRequestTracking
pagination_label: AccessRequestTracking
sidebar_label: AccessRequestTracking
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestTracking', 'AccessRequestTracking'] 
slug: /tools/sdk/powershell/v3/models/access-request-tracking
tags: ['SDK', 'Software Development Kit', 'AccessRequestTracking', 'AccessRequestTracking']
---


# AccessRequestTracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **String** | The identity id in which the access request is for. | [optional] 
**RequestedItemsDetails** | [**[]RequestedItemDetails**](requested-item-details) | The details of the item requested. | [optional] 
**AttributesHash** | **String** | a hash representation of the access requested, useful for longer term tracking client side. | [optional] 
**AccessRequestIds** | **[]String** | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestTracking = Initialize-PSSailpoint.V3AccessRequestTracking  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestedItemsDetails {
"type": "ENTITLEMENT", 
"id": "779c6fd7171540bba1184e5946112c28" 
 } `
 -AttributesHash -1928438224 `
 -AccessRequestIds [5d3118c518a44ec7805450d53479ccdb]
```

- Convert the resource to JSON
```powershell
$AccessRequestTracking | ConvertTo-JSON
```


[[Back to top]](#) 

