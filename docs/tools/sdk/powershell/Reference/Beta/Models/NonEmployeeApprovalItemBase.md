---
id: beta-non-employee-approval-item-base
title: NonEmployeeApprovalItemBase
pagination_label: NonEmployeeApprovalItemBase
sidebar_label: NonEmployeeApprovalItemBase
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalItemBase', 'BetaNonEmployeeApprovalItemBase'] 
slug: /tools/sdk/powershell/beta/models/non-employee-approval-item-base
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemBase', 'BetaNonEmployeeApprovalItemBase']
---


# NonEmployeeApprovalItemBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee approval item id | [optional] 
**Approver** | [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**AccountName** | **String** | Requested identity account name | [optional] 
**ApprovalStatus** | [**ApprovalStatus**](approval-status) |  | [optional] 
**ApprovalOrder** | **Double** | Approval order | [optional] 
**Comment** | **String** | comment of approver | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalItemBase = Initialize-BetaNonEmployeeApprovalItemBase  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
 -Approver null `
 -AccountName test.account `
 -ApprovalStatus null `
 -ApprovalOrder 1 `
 -Comment true `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalItemBase | ConvertTo-JSON
```


[[Back to top]](#) 

