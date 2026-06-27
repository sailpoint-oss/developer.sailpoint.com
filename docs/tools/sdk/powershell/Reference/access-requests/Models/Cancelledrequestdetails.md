---
id: cancelledrequestdetails
title: Cancelledrequestdetails
pagination_label: Cancelledrequestdetails
sidebar_label: Cancelledrequestdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Cancelledrequestdetails', 'Cancelledrequestdetails'] 
slug: /tools/sdk/powershell/accessrequests/models/cancelledrequestdetails
tags: ['SDK', 'Software Development Kit', 'Cancelledrequestdetails', 'Cancelledrequestdetails']
---


# Cancelledrequestdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment made by the owner when cancelling the associated request. | [optional] 
**Owner** | [**Ownerdto**](ownerdto) |  | [optional] 
**Modified** | **System.DateTime** | Date comment was added by the owner when cancelling the associated request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Cancelledrequestdetails = Initialize-Cancelledrequestdetails  -Comment This request must be cancelled. `
 -Owner null `
 -Modified 2019-12-20T09:17:12.192Z
```

- Convert the resource to JSON
```powershell
$Cancelledrequestdetails | ConvertTo-JSON
```


[[Back to top]](#) 

