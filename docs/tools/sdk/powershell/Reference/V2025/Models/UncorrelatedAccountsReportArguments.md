---
id: v2025-uncorrelated-accounts-report-arguments
title: UncorrelatedAccountsReportArguments
pagination_label: UncorrelatedAccountsReportArguments
sidebar_label: UncorrelatedAccountsReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UncorrelatedAccountsReportArguments', 'V2025UncorrelatedAccountsReportArguments'] 
slug: /tools/sdk/powershell/v2025/models/uncorrelated-accounts-report-arguments
tags: ['SDK', 'Software Development Kit', 'UncorrelatedAccountsReportArguments', 'V2025UncorrelatedAccountsReportArguments']
---


# UncorrelatedAccountsReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** | **[]String** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 

## Examples

- Prepare the resource
```powershell
$UncorrelatedAccountsReportArguments = Initialize-V2025UncorrelatedAccountsReportArguments  -SelectedFormats [CSV]
```

- Convert the resource to JSON
```powershell
$UncorrelatedAccountsReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

