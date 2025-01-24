---
id: identities-details-report-arguments
title: IdentitiesDetailsReportArguments
pagination_label: IdentitiesDetailsReportArguments
sidebar_label: IdentitiesDetailsReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitiesDetailsReportArguments'] 
slug: /tools/sdk/powershell/v2024/models/identities-details-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesDetailsReportArguments']
---


# IdentitiesDetailsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelatedOnly** |  **Boolean** | Flag to specify if only correlated identities are included in report. | [required][default to $false]

## Examples

- Prepare the resource
```powershell
$IdentitiesDetailsReportArguments = Initialize-PSSailpoint.V2024IdentitiesDetailsReportArguments  -CorrelatedOnly true
```

- Convert the resource to JSON
```powershell
$IdentitiesDetailsReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

