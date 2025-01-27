---
id: non-employee-request-without-approval-item
title: NonEmployeeRequestWithoutApprovalItem
pagination_label: NonEmployeeRequestWithoutApprovalItem
sidebar_label: NonEmployeeRequestWithoutApprovalItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequestWithoutApprovalItem'] 
slug: /tools/sdk/powershell/beta/models/non-employee-request-without-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestWithoutApprovalItem']
---


# NonEmployeeRequestWithoutApprovalItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee request id. | [optional] 
**Requester** |  Pointer to [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**AccountName** |  Pointer to **String** | Requested identity account name. | [optional] 
**FirstName** |  Pointer to **String** | Non-Employee's first name. | [optional] 
**LastName** |  Pointer to **String** | Non-Employee's last name. | [optional] 
**Email** |  Pointer to **String** | Non-Employee's email. | [optional] 
**Phone** |  Pointer to **String** | Non-Employee's phone. | [optional] 
**Manager** |  Pointer to **String** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**NonEmployeeSource** |  Pointer to [**NonEmployeeSourceLiteWithSchemaAttributes**](non-employee-source-lite-with-schema-attributes) |  | [optional] 
**VarData** |  Pointer to **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalStatus** |  Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**Comment** |  Pointer to **String** | Comment of requester | [optional] 
**CompletionDate** |  Pointer to **System.DateTime** | When the request was completely approved. | [optional] 
**StartDate** |  Pointer to **System.DateTime** | Non-Employee employment start date. | [optional] 
**EndDate** |  Pointer to **System.DateTime** | Non-Employee employment end date. | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestWithoutApprovalItem = Initialize-PSSailpoint.BetaNonEmployeeRequestWithoutApprovalItem  -Id ac10e21c-931c-1ef2-8193-1c51e7ff0003 `
 -Requester null `
 -AccountName william.smith `
 -FirstName William `
 -LastName Smith `
 -Email william.smith@example.com `
 -Phone 5125555555 `
 -Manager jane.doe `
 -NonEmployeeSource null `
 -VarData {description&#x3D;Auditing} `
 -ApprovalStatus null `
 -Comment approved `
 -CompletionDate 2020-03-24T11:11:41.139-05:00 `
 -StartDate Mon Mar 23 20:00:00 EDT 2020 `
 -EndDate Wed Mar 24 20:00:00 EDT 2021 `
 -Modified 2020-03-24T11:11:41.139-05:00 `
 -Created 2020-03-24T11:11:41.139-05:00
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestWithoutApprovalItem | ConvertTo-JSON
```


[[Back to top]](#) 

