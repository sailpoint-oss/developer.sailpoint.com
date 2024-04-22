---
id: work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkItems'] 
slug: /tools/sdk/powershell/v3/models/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems']
---


# WorkItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the work item | [optional] 
**RequesterId** |  Pointer to **String** | ID of the requester | [optional] 
**RequesterDisplayName** |  Pointer to **String** | The displayname of the requester | [optional] 
**OwnerId** |  Pointer to **String** | The ID of the owner | [optional] 
**OwnerName** |  Pointer to **String** | The name of the owner | [optional] 
**Created** |  Pointer to **System.DateTime** | Time when the work item was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time when the work item was last updated | [optional] 
**Description** |  Pointer to **String** | The description of the work item | [optional] 
**State** |  Pointer to [**WorkItemStateManualWorkItems**](work-item-state-manual-work-items) |  | [optional] 
**Type** |  Pointer to [**WorkItemTypeManualWorkItems**](work-item-type-manual-work-items) |  | [optional] 
**RemediationItems** |  Pointer to [**[]RemediationItemDetails**](remediation-item-details) | A list of remediation items | [optional] 
**ApprovalItems** |  Pointer to [**[]ApprovalItemDetails**](approval-item-details) | A list of items that need to be approved | [optional] 
**Name** |  Pointer to **String** | The work item name | [optional] 
**Completed** |  Pointer to **System.DateTime** | The time at which the work item completed | [optional] 
**NumItems** |  Pointer to **Int32** | The number of items in the work item | [optional] 
**Form** |  Pointer to [**WorkItemsForm**](work-items-form) |  | [optional] 
**Errors** |  Pointer to **[]String** | An array of errors that ocurred during the work item | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItems = Initialize-WorkItems  -Id 2c9180835d2e5168015d32f890ca1581 `
 -RequesterId 2c9180835d2e5168015d32f890ca1581 `
 -RequesterDisplayName John Smith `
 -OwnerId 2c9180835d2e5168015d32f890ca1581 `
 -OwnerName Jason Smith `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Description Create account on source 'AD' `
 -State null `
 -Type null `
 -RemediationItems null `
 -ApprovalItems null `
 -Name Account Create `
 -Completed 2018-10-19T13:49:37.385Z `
 -NumItems 19 `
 -Form null `
 -Errors [The work item ID that was specified was not found.]
```

- Convert the resource to JSON
```powershell
$WorkItems | ConvertTo-JSON
```


[[Back to top]](#) 

