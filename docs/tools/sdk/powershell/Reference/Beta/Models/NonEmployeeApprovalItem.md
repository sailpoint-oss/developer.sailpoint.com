---
id: beta-non-employee-approval-item
title: NonEmployeeApprovalItem
pagination_label: NonEmployeeApprovalItem
sidebar_label: NonEmployeeApprovalItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalItem', 'BetaNonEmployeeApprovalItem'] 
slug: /tools/sdk/powershell/beta/models/non-employee-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItem', 'BetaNonEmployeeApprovalItem']
---


# NonEmployeeApprovalItem

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
**NonEmployeeRequest** | [**NonEmployeeRequestLite**](non-employee-request-lite) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalItem = Initialize-BetaNonEmployeeApprovalItem  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
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

