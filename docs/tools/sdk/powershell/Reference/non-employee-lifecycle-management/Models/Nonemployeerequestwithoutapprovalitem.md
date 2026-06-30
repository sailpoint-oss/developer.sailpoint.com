---
id: nonemployeerequestwithoutapprovalitem
title: Nonemployeerequestwithoutapprovalitem
pagination_label: Nonemployeerequestwithoutapprovalitem
sidebar_label: Nonemployeerequestwithoutapprovalitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeerequestwithoutapprovalitem', 'Nonemployeerequestwithoutapprovalitem'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeerequestwithoutapprovalitem
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestwithoutapprovalitem', 'Nonemployeerequestwithoutapprovalitem']
---


# Nonemployeerequestwithoutapprovalitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee request id. | [optional] 
**Requester** | [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
**AccountName** | **String** | Requested identity account name. | [optional] 
**FirstName** | **String** | Non-Employee's first name. | [optional] 
**LastName** | **String** | Non-Employee's last name. | [optional] 
**Email** | **String** | Non-Employee's email. | [optional] 
**Phone** | **String** | Non-Employee's phone. | [optional] 
**Manager** | **String** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**NonEmployeeSource** | [**Nonemployeesourcelitewithschemaattributes**](nonemployeesourcelitewithschemaattributes) |  | [optional] 
**VarData** | **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalStatus** | [**Approvalstatus**](approvalstatus) |  | [optional] 
**Comment** | **String** | Comment of requester | [optional] 
**CompletionDate** | **System.DateTime** | When the request was completely approved. | [optional] 
**StartDate** | **System.DateTime** | Non-Employee employment start date. | [optional] 
**EndDate** | **System.DateTime** | Non-Employee employment end date. | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeerequestwithoutapprovalitem = Initialize-Nonemployeerequestwithoutapprovalitem  -Id ac110005-7156-1150-8171-5b292e3e0084 `
 -Requester null `
 -AccountName william.smith `
 -FirstName William `
 -LastName Smith `
 -Email william.smith@example.com `
 -Phone 5125555555 `
 -Manager jane.doe `
 -NonEmployeeSource null `
 -VarData {"description":"Auditing"} `
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
$Nonemployeerequestwithoutapprovalitem | ConvertTo-JSON
```


[[Back to top]](#) 

