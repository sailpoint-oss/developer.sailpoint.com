---
id: v2024-accounts-export-report-arguments
title: AccountsExportReportArguments
pagination_label: AccountsExportReportArguments
sidebar_label: AccountsExportReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountsExportReportArguments', 'V2024AccountsExportReportArguments'] 
slug: /tools/sdk/python/v2024/models/accounts-export-report-arguments
tags: ['SDK', 'Software Development Kit', 'AccountsExportReportArguments', 'V2024AccountsExportReportArguments']
---

# AccountsExportReportArguments

Arguments for Account Export report (ACCOUNTS)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **str** | Source ID. | [required]
**source_name** | **str** | Source name. | [required]
}

## Example

```python
from sailpoint.v2024.models.accounts_export_report_arguments import AccountsExportReportArguments

accounts_export_report_arguments = AccountsExportReportArguments(
application='2c9180897eSourceIde781782f705b9',
source_name='Active Directory'
)

```
[[Back to top]](#) 

