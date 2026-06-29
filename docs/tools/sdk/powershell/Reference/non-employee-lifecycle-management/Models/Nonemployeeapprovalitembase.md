---
id: nonemployeeapprovalitembase
title: Nonemployeeapprovalitembase
pagination_label: Nonemployeeapprovalitembase
sidebar_label: Nonemployeeapprovalitembase
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeeapprovalitembase', 'Nonemployeeapprovalitembase'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeeapprovalitembase
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalitembase', 'Nonemployeeapprovalitembase']
---


# Nonemployeeapprovalitembase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee approval item id | [optional] 
**Approver** | [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
**AccountName** | **String** | Requested identity account name | [optional] 
**ApprovalStatus** | [**Approvalstatus**](approvalstatus) |  | [optional] 
**ApprovalOrder** | **Double** | Approval order | [optional] 
**Comment** | **String** | comment of approver | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeeapprovalitembase = Initialize-Nonemployeeapprovalitembase  -Id 2c1e388b-1e55-4b0a-ab5c-897f1204159c `
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
$Nonemployeeapprovalitembase | ConvertTo-JSON
```


[[Back to top]](#) 

