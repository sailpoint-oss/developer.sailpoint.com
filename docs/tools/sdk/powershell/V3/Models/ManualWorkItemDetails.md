---
id: manual-work-item-details
title: ManualWorkItemDetails
pagination_label: ManualWorkItemDetails
sidebar_label: ManualWorkItemDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManualWorkItemDetails'] 
slug: /tools/sdk/powershell/v3/models/manual-work-item-details
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails']
---


# ManualWorkItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** |  Pointer to **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** |  Pointer to [**ManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**CurrentOwner** |  Pointer to [**ManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time at which item was modified. | [optional] 
**Status** |  Pointer to [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**ForwardHistory** |  Pointer to [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetails = Initialize-PSSailpointManualWorkItemDetails  -Forwarded true `
 -OriginalOwner null `
 -CurrentOwner null `
 -Modified 2019-08-23T18:52:57.398Z `
 -Status null `
 -ForwardHistory null
```

- Convert the resource to JSON
```powershell
$ManualWorkItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 

