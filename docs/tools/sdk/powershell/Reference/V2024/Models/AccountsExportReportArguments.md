---
id: v2024-accounts-export-report-arguments
title: AccountsExportReportArguments
pagination_label: AccountsExportReportArguments
sidebar_label: AccountsExportReportArguments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsExportReportArguments', 'V2024AccountsExportReportArguments'] 
slug: /tools/sdk/powershell/v2024/models/accounts-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'AccountsExportReportArguments', 'V2024AccountsExportReportArguments']
---


# AccountsExportReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **String** | Source ID. | [required]
**SourceName** | **String** | Source name. | [required]

## Examples

- Prepare the resource
```powershell
$AccountsExportReportArguments = Initialize-V2024AccountsExportReportArguments  -Application 2c9180897eSourceIde781782f705b9 `
 -SourceName Active Directory
```

- Convert the resource to JSON
```powershell
$AccountsExportReportArguments | ConvertTo-JSON
```


[[Back to top]](#) 

