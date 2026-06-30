---
id: accountdeleteconfigdto
title: Accountdeleteconfigdto
pagination_label: Accountdeleteconfigdto
sidebar_label: Accountdeleteconfigdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountdeleteconfigdto', 'Accountdeleteconfigdto'] 
slug: /tools/sdk/powershell/sources/models/accountdeleteconfigdto
tags: ['SDK', 'Software Development Kit', 'Accountdeleteconfigdto', 'Accountdeleteconfigdto']
---


# Accountdeleteconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | **Boolean** | Specifies if an account deletion request requires approval. | [optional] [default to $false]
**ApprovalConfig** | [**Approvalconfig**](approvalconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountdeleteconfigdto = Initialize-Accountdeleteconfigdto  -ApprovalRequired true `
 -ApprovalConfig null
```

- Convert the resource to JSON
```powershell
$Accountdeleteconfigdto | ConvertTo-JSON
```


[[Back to top]](#) 

