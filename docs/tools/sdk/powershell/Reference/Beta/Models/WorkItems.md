---
id: beta-work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItems', 'BetaWorkItems'] 
slug: /tools/sdk/powershell/beta/models/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'BetaWorkItems']
---


# WorkItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the work item | [optional] 
**RequesterId** | **String** | ID of the requester | [optional] 
**RequesterDisplayName** | **String** | The displayname of the requester | [optional] 
**OwnerId** | **String** | The ID of the owner | [optional] 
**OwnerName** | **String** | The name of the owner | [optional] 
**Created** | **System.DateTime** |  | [optional] 
**Modified** | **System.DateTime** |  | [optional] 
**Description** | **String** | The description of the work item | [optional] 
**State** | [**WorkItemState**](work-item-state) |  | [optional] 
**Type** | [**WorkItemType**](work-item-type) |  | [optional] 
**RemediationItems** | [**[]RemediationItemDetails**](remediation-item-details) |  | [optional] 
**ApprovalItems** | [**[]ApprovalItemDetails**](approval-item-details) |  | [optional] 
**Name** | **String** | The work item name | [optional] 
**Completed** | **System.DateTime** |  | [optional] 
**NumItems** | **Int32** | The number of items in the work item | [optional] 
**Errors** | **[]String** |  | [optional] 
**Form** | [**FormDetails**](form-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItems = Initialize-PSSailpoint.BetaWorkItems  -Id 2c9180835d2e5168015d32f890ca1581 `
 -RequesterId 2c9180835d2e5168015d32f890ca1581 `
 -RequesterDisplayName John Smith `
 -OwnerId 2c9180835d2e5168015d32f890ca1581 `
 -OwnerName Jason Smith `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Description Create account on source &#39;AD&#39; `
 -State null `
 -Type null `
 -RemediationItems null `
 -ApprovalItems null `
 -Name Account Create `
 -Completed 2018-10-19T13:49:37.385Z `
 -NumItems 19 `
 -Errors [The work item ID that was specified was not found.] `
 -Form null
```

- Convert the resource to JSON
```powershell
$WorkItems | ConvertTo-JSON
```


[[Back to top]](#) 

