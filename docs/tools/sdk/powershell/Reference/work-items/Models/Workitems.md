---
id: workitems
title: Workitems
pagination_label: Workitems
sidebar_label: Workitems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workitems', 'Workitems'] 
slug: /tools/sdk/powershell/workitems/models/workitems
tags: ['SDK', 'Software Development Kit', 'Workitems', 'Workitems']
---


# Workitems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the work item | [optional] 
**RequesterId** | **String** | ID of the requester | [optional] 
**RequesterDisplayName** | **String** | The displayname of the requester | [optional] 
**OwnerId** | **String** | The ID of the owner | [optional] 
**OwnerName** | **String** | The name of the owner | [optional] 
**Created** | **System.DateTime** | Time when the work item was created | [optional] 
**Modified** | **System.DateTime** | Time when the work item was last updated | [optional] 
**Description** | **String** | The description of the work item | [optional] 
**State** | [**Workitemstatemanualworkitems**](workitemstatemanualworkitems) |  | [optional] 
**Type** | [**Workitemtypemanualworkitems**](workitemtypemanualworkitems) |  | [optional] 
**RemediationItems** | [**[]Remediationitemdetails**](remediationitemdetails) | A list of remediation items | [optional] 
**ApprovalItems** | [**[]Approvalitemdetails**](approvalitemdetails) | A list of items that need to be approved | [optional] 
**Name** | **String** | The work item name | [optional] 
**Completed** | **System.DateTime** | The time at which the work item completed | [optional] 
**NumItems** | **Int32** | The number of items in the work item | [optional] 
**Form** | [**WorkitemsForm**](workitems-form) |  | [optional] 
**Errors** | **[]String** | An array of errors that ocurred during the work item | [optional] 

## Examples

- Prepare the resource
```powershell
$Workitems = Initialize-Workitems  -Id 2c9180835d2e5168015d32f890ca1581 `
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
 -Errors ["The work item ID that was specified was not found."]
```

- Convert the resource to JSON
```powershell
$Workitems | ConvertTo-JSON
```


[[Back to top]](#) 

