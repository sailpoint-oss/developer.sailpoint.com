---
id: approvalitemdetails
title: Approvalitemdetails
pagination_label: Approvalitemdetails
sidebar_label: Approvalitemdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalitemdetails', 'Approvalitemdetails'] 
slug: /tools/sdk/powershell/workitems/models/approvalitemdetails
tags: ['SDK', 'Software Development Kit', 'Approvalitemdetails', 'Approvalitemdetails']
---


# Approvalitemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval item's ID | [optional] 
**Account** | **String** | The account referenced by the approval item | [optional] 
**Application** | **String** | The name of the application/source | [optional] 
**Name** | **String** | The attribute's name | [optional] 
**Operation** | **String** | The attribute's operation | [optional] 
**Value** | **String** | The attribute's value | [optional] 
**State** | [**Workitemstate**](workitemstate) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalitemdetails = Initialize-Approvalitemdetails  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Account john.smith `
 -Application Active Directory `
 -Name emailAddress `
 -Operation update `
 -Value a@b.com `
 -State null
```

- Convert the resource to JSON
```powershell
$Approvalitemdetails | ConvertTo-JSON
```


[[Back to top]](#) 

