---
id: v2025-uncorrelated-accounts-report-arguments
title: UncorrelatedAccountsReportArguments
pagination_label: UncorrelatedAccountsReportArguments
sidebar_label: UncorrelatedAccountsReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UncorrelatedAccountsReportArguments', 'V2025UncorrelatedAccountsReportArguments'] 
slug: /tools/sdk/python/v2025/models/uncorrelated-accounts-report-arguments
tags: ['SDK', 'Software Development Kit', 'UncorrelatedAccountsReportArguments', 'V2025UncorrelatedAccountsReportArguments']
---

# UncorrelatedAccountsReportArguments

Arguments for Uncorrelated Accounts report (UNCORRELATED_ACCOUNTS)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected_formats** | **[]str** | Output report file formats. These are formats for calling GET endpoint as query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.uncorrelated_accounts_report_arguments import UncorrelatedAccountsReportArguments

uncorrelated_accounts_report_arguments = UncorrelatedAccountsReportArguments(
selected_formats=[CSV]
)

```
[[Back to top]](#) 

