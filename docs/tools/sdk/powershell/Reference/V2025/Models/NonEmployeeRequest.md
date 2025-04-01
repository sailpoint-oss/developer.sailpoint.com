---
id: v2025-non-employee-request
title: NonEmployeeRequest
pagination_label: NonEmployeeRequest
sidebar_label: NonEmployeeRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequest', 'V2025NonEmployeeRequest'] 
slug: /tools/sdk/powershell/v2025/models/non-employee-request
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequest', 'V2025NonEmployeeRequest']
---


# NonEmployeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee source id. | [optional] 
**SourceId** | **String** | Source Id associated with this non-employee source. | [optional] 
**Name** | **String** | Source name associated with this non-employee source. | [optional] 
**Description** | **String** | Source description associated with this non-employee source. | [optional] 
**AccountName** | **String** | Requested identity account name. | [optional] 
**FirstName** | **String** | Non-Employee's first name. | [optional] 
**LastName** | **String** | Non-Employee's last name. | [optional] 
**Email** | **String** | Non-Employee's email. | [optional] 
**Phone** | **String** | Non-Employee's phone. | [optional] 
**Manager** | **String** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**NonEmployeeSource** | [**NonEmployeeSourceLite**](non-employee-source-lite) |  | [optional] 
**VarData** | **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalItems** | [**[]NonEmployeeApprovalItemBase**](non-employee-approval-item-base) | List of approval item for the request | [optional] 
**ApprovalStatus** | [**ApprovalStatus**](approval-status) |  | [optional] 
**Comment** | **String** | Comment of requester | [optional] 
**CompletionDate** | **System.DateTime** | When the request was completely approved. | [optional] 
**StartDate** | **System.DateTime** | Non-Employee employment start date. | [optional] 
**EndDate** | **System.DateTime** | Non-Employee employment end date. | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequest = Initialize-PSSailpoint.V2025NonEmployeeRequest  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
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
 -VarData {description=Auditing} `
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

