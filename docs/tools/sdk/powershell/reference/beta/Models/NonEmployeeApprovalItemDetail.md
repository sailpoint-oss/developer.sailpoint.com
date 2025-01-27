---
id: beta-non-employee-approval-item-detail
title: NonEmployeeApprovalItemDetail
pagination_label: NonEmployeeApprovalItemDetail
sidebar_label: NonEmployeeApprovalItemDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalItemDetail'] 
slug: /tools/sdk/powershell/beta/models/non-employee-approval-item-detail
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemDetail']
---


# NonEmployeeApprovalItemDetail

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
**NonEmployeeRequest** |  Pointer to [**NonEmployeeRequestWithoutApprovalItem**](non-employee-request-without-approval-item) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalItemDetail = Initialize-PSSailpoint.BetaNonEmployeeApprovalItemDetail  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
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
$NonEmployeeApprovalItemDetail | ConvertTo-JSON
```


[[Back to top]](#) 

