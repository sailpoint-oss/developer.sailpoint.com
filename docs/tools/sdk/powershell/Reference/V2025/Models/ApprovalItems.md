---
id: v2025-approval-items
title: ApprovalItems
pagination_label: ApprovalItems
sidebar_label: ApprovalItems
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalItems', 'V2025ApprovalItems'] 
slug: /tools/sdk/powershell/v2025/models/approval-items
tags: ['SDK', 'Software Development Kit', 'ApprovalItems', 'V2025ApprovalItems']
---


# ApprovalItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval item's ID | [optional] 
**Account** | **String** | The account referenced by the approval item | [optional] 
**Application** | **String** | The name of the application/source | [optional] 
**Name** | **String** | The attribute's name | [optional] 
**Operation** | **String** | The attribute's operation | [optional] 
**Value** | **String** | The attribute's value | [optional] 
**State** | [**WorkItemState**](work-item-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalItems = Initialize-V2025ApprovalItems  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Account john.smith `
 -Application Active Directory `
 -Name emailAddress `
 -Operation update `
 -Value a@b.com `
 -State null
```

- Convert the resource to JSON
```powershell
$ApprovalItems | ConvertTo-JSON
```


[[Back to top]](#) 

