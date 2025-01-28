---
id: v2024-non-employee-request
title: NonEmployeeRequest
pagination_label: NonEmployeeRequest
sidebar_label: NonEmployeeRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequest'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-request
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequest']
---


# NonEmployeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee source id. | [optional] 
**SourceId** |  Pointer to **String** | Source Id associated with this non-employee source. | [optional] 
**Name** |  Pointer to **String** | Source name associated with this non-employee source. | [optional] 
**Description** |  Pointer to **String** | Source description associated with this non-employee source. | [optional] 
**AccountName** |  Pointer to **String** | Requested identity account name. | [optional] 
**FirstName** |  Pointer to **String** | Non-Employee's first name. | [optional] 
**LastName** |  Pointer to **String** | Non-Employee's last name. | [optional] 
**Email** |  Pointer to **String** | Non-Employee's email. | [optional] 
**Phone** |  Pointer to **String** | Non-Employee's phone. | [optional] 
**Manager** |  Pointer to **String** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**NonEmployeeSource** |  Pointer to [**NonEmployeeSourceLite**](non-employee-source-lite) |  | [optional] 
**VarData** |  Pointer to **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalItems** |  Pointer to [**[]NonEmployeeApprovalItemBase**](non-employee-approval-item-base) | List of approval item for the request | [optional] 
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
$NonEmployeeRequest = Initialize-PSSailpoint.V2024NonEmployeeRequest  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description `
 -AccountName william.smith `
 -FirstName William `
 -LastName Smith `
 -Email william.smith@example.com `
 -Phone 5125555555 `
 -Manager jane.doe `
 -NonEmployeeSource null `
 -VarData {description&#x3D;Auditing} `
 -ApprovalItems null `
 -ApprovalStatus null `
 -Comment approved `
 -CompletionDate 2020-03-24T11:11:41.139-05:00 `
 -StartDate 2020-03-24T00:00-05:00 `
 -EndDate 2021-03-25T00:00-05:00 `
 -Modified 2020-03-24T11:11:41.139-05:00 `
 -Created 2020-03-24T11:11:41.139-05:00
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

