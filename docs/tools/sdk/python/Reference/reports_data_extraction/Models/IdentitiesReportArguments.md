---
id: identities-report-arguments
title: IdentitiesReportArguments
pagination_label: IdentitiesReportArguments
sidebar_label: IdentitiesReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitiesReportArguments', 'IdentitiesReportArguments'] 
slug: /tools/sdk/python/reports-data-extraction/models/identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesReportArguments', 'IdentitiesReportArguments']
---

# IdentitiesReportArguments

Arguments for Identities report (IDENTITIES)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlated_only** | **bool** | Flag to specify if only correlated identities are included in report. | [optional] [default to False]
}

## Example

```python
from sailpoint.reports_data_extraction.models.identities_report_arguments import IdentitiesReportArguments

identities_report_arguments = IdentitiesReportArguments(
correlated_only=True
)

```
[[Back to top]](#) 

