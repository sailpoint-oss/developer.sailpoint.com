---
id: approvalname
title: Approvalname
pagination_label: Approvalname
sidebar_label: Approvalname
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalname', 'Approvalname'] 
slug: /tools/sdk/powershell/approvals/models/approvalname
tags: ['SDK', 'Software Development Kit', 'Approvalname', 'Approvalname']
---


# Approvalname

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Name of the approval | [optional] 
**Locale** | **String** | What locale the name of the approval is using | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalname = Initialize-Approvalname  -Value Audit DB Access `
 -Locale en_US
```

- Convert the resource to JSON
```powershell
$Approvalname | ConvertTo-JSON
```


[[Back to top]](#) 

