---
id: manualworkitemdetails
title: Manualworkitemdetails
pagination_label: Manualworkitemdetails
sidebar_label: Manualworkitemdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Manualworkitemdetails', 'Manualworkitemdetails'] 
slug: /tools/sdk/powershell/accessrequests/models/manualworkitemdetails
tags: ['SDK', 'Software Development Kit', 'Manualworkitemdetails', 'Manualworkitemdetails']
---


# Manualworkitemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** | [**ManualworkitemdetailsOriginalOwner**](manualworkitemdetails-original-owner) |  | [optional] 
**CurrentOwner** | [**ManualworkitemdetailsCurrentOwner**](manualworkitemdetails-current-owner) |  | [optional] 
**Modified** | **System.DateTime** | Time at which item was modified. | [optional] 
**Status** | [**Manualworkitemstate**](manualworkitemstate) |  | [optional] 
**ForwardHistory** | [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 

## Examples

- Prepare the resource
```powershell
$Manualworkitemdetails = Initialize-Manualworkitemdetails  -Forwarded true `
 -OriginalOwner null `
 -CurrentOwner null `
 -Modified 2019-08-23T18:52:57.398Z `
 -Status null `
 -ForwardHistory null
```

- Convert the resource to JSON
```powershell
$Manualworkitemdetails | ConvertTo-JSON
```


[[Back to top]](#) 

