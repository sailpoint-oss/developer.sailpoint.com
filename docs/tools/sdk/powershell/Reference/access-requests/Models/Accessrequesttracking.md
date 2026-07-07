---
id: accessrequesttracking
title: Accessrequesttracking
pagination_label: Accessrequesttracking
sidebar_label: Accessrequesttracking
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequesttracking', 'Accessrequesttracking'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequesttracking
tags: ['SDK', 'Software Development Kit', 'Accessrequesttracking', 'Accessrequesttracking']
---


# Accessrequesttracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **String** | The identity id in which the access request is for. | [optional] 
**RequestedItemsDetails** | [**[]Requesteditemdetails**](requesteditemdetails) | The details of the item requested. | [optional] 
**AttributesHash** | **Int32** | a hash representation of the access requested, useful for longer term tracking client side. | [optional] 
**AccessRequestIds** | **[]String** | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequesttracking = Initialize-Accessrequesttracking  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestedItemsDetails {
"type": "ENTITLEMENT", 
"id": "779c6fd7171540bba1184e5946112c28" 
 } `
 -AttributesHash -1928438224 `
 -AccessRequestIds ["5d3118c518a44ec7805450d53479ccdb"]
```

- Convert the resource to JSON
```powershell
$Accessrequesttracking | ConvertTo-JSON
```


[[Back to top]](#) 

