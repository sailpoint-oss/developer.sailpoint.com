---
id: non-employee-approval-item-base
title: NonEmployeeApprovalItemBase
pagination_label: NonEmployeeApprovalItemBase
sidebar_label: NonEmployeeApprovalItemBase
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeApprovalItemBase'] 
slug: /tools/sdk/powershell/v3/models/non-employee-approval-item-base
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemBase']
---


# NonEmployeeApprovalItemBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee approval item id | [optional] 
**Approver** |  Pointer to [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 
**AccountName** |  Pointer to **String** | Requested identity account name | [optional] 
**ApprovalStatus** |  Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**ApprovalOrder** |  Pointer to **Double** | Approval order | [optional] 
**Comment** |  Pointer to **String** | comment of approver | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalItemBase = Initialize-PSSailpointNonEmployeeApprovalItemBase  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
 -Approver null `
 -AccountName test.account `
 -ApprovalStatus null `
 -ApprovalOrder 1 `
 -Comment I approve `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalItemBase | ConvertTo-JSON
```


[[Back to top]](#) 

