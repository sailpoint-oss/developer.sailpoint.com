---
id: v2024-approval-item-details
title: ApprovalItemDetails
pagination_label: ApprovalItemDetails
sidebar_label: ApprovalItemDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalItemDetails', 'V2024ApprovalItemDetails'] 
slug: /tools/sdk/powershell/v2024/models/approval-item-details
tags: ['SDK', 'Software Development Kit', 'ApprovalItemDetails', 'V2024ApprovalItemDetails']
---


# ApprovalItemDetails

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
$ApprovalItemDetails = Initialize-V2024ApprovalItemDetails  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Account john.smith `
 -Application Active Directory `
 -Name emailAddress `
 -Operation update `
 -Value a@b.com `
 -State null
```

- Convert the resource to JSON
```powershell
$ApprovalItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 

