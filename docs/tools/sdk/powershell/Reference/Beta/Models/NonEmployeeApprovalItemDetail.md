---
id: beta-non-employee-approval-item-detail
title: NonEmployeeApprovalItemDetail
pagination_label: NonEmployeeApprovalItemDetail
sidebar_label: NonEmployeeApprovalItemDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeApprovalItemDetail', 'BetaNonEmployeeApprovalItemDetail'] 
slug: /tools/sdk/powershell/beta/models/non-employee-approval-item-detail
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemDetail', 'BetaNonEmployeeApprovalItemDetail']
---


# NonEmployeeApprovalItemDetail

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
**NonEmployeeRequest** | [**NonEmployeeRequestWithoutApprovalItem**](non-employee-request-without-approval-item) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalItemDetail = Initialize-BetaNonEmployeeApprovalItemDetail  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
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

