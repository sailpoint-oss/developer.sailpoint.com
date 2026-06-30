---
id: nonemployeerequestsummary
title: Nonemployeerequestsummary
pagination_label: Nonemployeerequestsummary
sidebar_label: Nonemployeerequestsummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeerequestsummary', 'Nonemployeerequestsummary'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeerequestsummary
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestsummary', 'Nonemployeerequestsummary']
---


# Nonemployeerequestsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Int32** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Rejected** | **Int32** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Pending** | **Int32** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**NonEmployeeCount** | **Int32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeerequestsummary = Initialize-Nonemployeerequestsummary  -Approved 2 `
 -Rejected 2 `
 -Pending 2 `
 -NonEmployeeCount 2
```

- Convert the resource to JSON
```powershell
$Nonemployeerequestsummary | ConvertTo-JSON
```


[[Back to top]](#) 

