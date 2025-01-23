---
id: manual-work-item-details1
title: ManualWorkItemDetails1
pagination_label: ManualWorkItemDetails1
sidebar_label: ManualWorkItemDetails1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualWorkItemDetails1'] 
slug: /tools/sdk/powershell/v2024/models/manual-work-item-details1
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails1']
---


# ManualWorkItemDetails1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** |  Pointer to **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** |  Pointer to [**ManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**CurrentOwner** |  Pointer to [**ManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time at which item was modified. | [optional] 
**Status** |  Pointer to [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**ForwardHistory** |  Pointer to [**[]ApprovalForwardHistory1**](approval-forward-history1) | The history of approval forward action. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetails1 = Initialize-PSSailpoint.V2024ManualWorkItemDetails1  -Forwarded true `
 -OriginalOwner null `
 -CurrentOwner null `
 -Modified 2019-08-23T18:52:57.398Z `
 -Status null `
 -ForwardHistory null
```

- Convert the resource to JSON
```powershell
$ManualWorkItemDetails1 | ConvertTo-JSON
```


[[Back to top]](#) 

