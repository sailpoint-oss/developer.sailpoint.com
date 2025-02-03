---
id: v2024-uncorrelated-accounts-report-arguments
title: UncorrelatedAccountsReportArguments
pagination_label: UncorrelatedAccountsReportArguments
sidebar_label: UncorrelatedAccountsReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UncorrelatedAccountsReportArguments', 'V2024UncorrelatedAccountsReportArguments'] 
slug: /tools/sdk/powershell/v2024/models/uncorrelated-accounts-report-arguments
tags: ['SDK', 'Software Development Kit', 'UncorrelatedAccountsReportArguments', 'V2024UncorrelatedAccountsReportArguments']
---


# UncorrelatedAccountsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** |  Pointer to **[]String** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Examples

- Prepare the resource
```powershell
$UncorrelatedAccountsReportArguments = Initialize-PSSailpoint.V2024UncorrelatedAccountsReportArguments  -SelectedFormats [CSV]
```

- Convert the resource to JSON
```powershell
$UncorrelatedAccountsReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

