---
id: beta-non-employee-request-summary
title: NonEmployeeRequestSummary
pagination_label: NonEmployeeRequestSummary
sidebar_label: NonEmployeeRequestSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequestSummary', 'BetaNonEmployeeRequestSummary'] 
slug: /tools/sdk/powershell/beta/models/non-employee-request-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestSummary', 'BetaNonEmployeeRequestSummary']
---


# NonEmployeeRequestSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** |  Pointer to **Decimal** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Rejected** |  Pointer to **Decimal** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**Pending** |  Pointer to **Decimal** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**NonEmployeeCount** |  Pointer to **Decimal** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestSummary = Initialize-PSSailpoint.BetaNonEmployeeRequestSummary  -Approved null `
 -Rejected null `
 -Pending null `
 -NonEmployeeCount null
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestSummary | ConvertTo-JSON
```


[[Back to top]](#) 

