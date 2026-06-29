---
id: nonemployeeapprovalsummary
title: Nonemployeeapprovalsummary
pagination_label: Nonemployeeapprovalsummary
sidebar_label: Nonemployeeapprovalsummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeeapprovalsummary', 'Nonemployeeapprovalsummary'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeeapprovalsummary
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalsummary', 'Nonemployeeapprovalsummary']
---


# Nonemployeeapprovalsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Int32** | The number of approved non-employee approval requests. | [optional] 
**Pending** | **Int32** | The number of pending non-employee approval requests. | [optional] 
**Rejected** | **Int32** | The number of rejected non-employee approval requests. | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeeapprovalsummary = Initialize-Nonemployeeapprovalsummary  -Approved 2 `
 -Pending 2 `
 -Rejected 2
```

- Convert the resource to JSON
```powershell
$Nonemployeeapprovalsummary | ConvertTo-JSON
```


[[Back to top]](#) 

