---
id: beta-non-employee-approval-item
title: NonEmployeeApprovalItem
pagination_label: NonEmployeeApprovalItem
sidebar_label: NonEmployeeApprovalItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalItem'] 
slug: /tools/sdk/powershell/beta/models/non-employee-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItem']
---


# NonEmployeeApprovalItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee approval item id | [optional] 
**Approver** |  Pointer to [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**AccountName** |  Pointer to **String** | Requested identity account name | [optional] 
**ApprovalStatus** |  Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**ApprovalOrder** |  Pointer to **Double** | Approval order | [optional] 
**Comment** |  Pointer to **String** | comment of approver | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 
**NonEmployeeRequest** |  Pointer to [**NonEmployeeRequestLite**](non-employee-request-lite) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalItem = Initialize-PSSailpoint.BetaNonEmployeeApprovalItem  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
 -Approver null `
 -AccountName test.account `
 -ApprovalStatus null `
 -ApprovalOrder 1 `
 -Comment true `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z `
 -NonEmployeeRequest null
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalItem | ConvertTo-JSON
```


[[Back to top]](#) 

