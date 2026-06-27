---
id: bulkrejectrequestdto
title: Bulkrejectrequestdto
pagination_label: Bulkrejectrequestdto
sidebar_label: Bulkrejectrequestdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkrejectrequestdto', 'Bulkrejectrequestdto'] 
slug: /tools/sdk/powershell/approvals/models/bulkrejectrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkrejectrequestdto', 'Bulkrejectrequestdto']
---


# Bulkrejectrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | Array of Approval IDs to be bulk rejected | [optional] 
**Comment** | **String** | Optional comment to include with the bulk reject request | [optional] 

## Examples

- Prepare the resource
```powershell
$Bulkrejectrequestdto = Initialize-Bulkrejectrequestdto  -ApprovalIds ["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"] `
 -Comment Bulk reject by admin
```

- Convert the resource to JSON
```powershell
$Bulkrejectrequestdto | ConvertTo-JSON
```


[[Back to top]](#) 

