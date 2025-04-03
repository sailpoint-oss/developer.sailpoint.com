---
id: v2025-identities-details-report-arguments
title: IdentitiesDetailsReportArguments
pagination_label: IdentitiesDetailsReportArguments
sidebar_label: IdentitiesDetailsReportArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitiesDetailsReportArguments', 'V2025IdentitiesDetailsReportArguments'] 
slug: /tools/sdk/python/v2025/models/identities-details-report-arguments
tags: ['SDK', 'Software Development Kit', 'IdentitiesDetailsReportArguments', 'V2025IdentitiesDetailsReportArguments']
---

# IdentitiesDetailsReportArguments

Arguments for Identities Details report (IDENTITIES_DETAILS)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlated_only** | **bool** | Flag to specify if only correlated identities are included in report. | [required][default to False]
}

## Example

```python
from sailpoint.v2025.models.identities_details_report_arguments import IdentitiesDetailsReportArguments

identities_details_report_arguments = IdentitiesDetailsReportArguments(
correlated_only=True
)

```
[[Back to top]](#) 

