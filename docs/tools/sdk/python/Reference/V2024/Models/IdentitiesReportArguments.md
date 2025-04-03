---
id: v2024-identities-report-arguments
title: IdentitiesReportArguments
pagination_label: IdentitiesReportArguments
sidebar_label: IdentitiesReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitiesReportArguments', 'V2024IdentitiesReportArguments'] 
slug: /tools/sdk/python/v2024/models/identities-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesReportArguments', 'V2024IdentitiesReportArguments']
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
from sailpoint.v2024.models.identities_report_arguments import IdentitiesReportArguments

identities_report_arguments = IdentitiesReportArguments(
correlated_only=True
)

```
[[Back to top]](#) 

