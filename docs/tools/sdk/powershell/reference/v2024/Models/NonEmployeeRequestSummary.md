---
id: non-employee-request-summary
title: NonEmployeeRequestSummary
pagination_label: NonEmployeeRequestSummary
sidebar_label: NonEmployeeRequestSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequestSummary'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-request-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestSummary']
---


# NonEmployeeRequestSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** |  Pointer to **Int32** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Rejected** |  Pointer to **Int32** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Pending** |  Pointer to **Int32** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**NonEmployeeCount** |  Pointer to **Int32** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestSummary = Initialize-PSSailpoint.V2024NonEmployeeRequestSummary  -Approved 2 `
 -Rejected 2 `
 -Pending 2 `
 -NonEmployeeCount 2
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestSummary | ConvertTo-JSON
```


[[Back to top]](#) 

