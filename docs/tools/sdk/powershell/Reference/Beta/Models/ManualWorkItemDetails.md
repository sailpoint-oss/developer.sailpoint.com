---
id: beta-manual-work-item-details
title: ManualWorkItemDetails
pagination_label: ManualWorkItemDetails
sidebar_label: ManualWorkItemDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManualWorkItemDetails', 'BetaManualWorkItemDetails'] 
slug: /tools/sdk/powershell/beta/models/manual-work-item-details
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails', 'BetaManualWorkItemDetails']
---


# ManualWorkItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** | **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** | [**ManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**CurrentOwner** | [**ManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**Modified** | **System.DateTime** | Time at which item was modified. | [optional] 
**Status** | [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**ForwardHistory** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetails = Initialize-BetaManualWorkItemDetails  -Forwarded true `
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

