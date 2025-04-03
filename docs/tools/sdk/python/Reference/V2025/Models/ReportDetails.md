---
id: v2025-report-details
title: ReportDetails
pagination_label: ReportDetails
sidebar_label: ReportDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReportDetails', 'V2025ReportDetails'] 
slug: /tools/sdk/python/v2025/models/report-details
tags: ['SDK', 'Software Development Kit', 'ReportDetails', 'V2025ReportDetails']
---

# ReportDetails

Details about report to be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_type** |  **Enum** [  'ACCOUNTS',    'IDENTITIES_DETAILS',    'IDENTITIES',    'IDENTITY_PROFILE_IDENTITY_ERROR',    'ORPHAN_IDENTITIES',    'SEARCH_EXPORT',    'UNCORRELATED_ACCOUNTS' ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**arguments** | [**ReportDetailsArguments**](report-details-arguments) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.report_details import ReportDetails

report_details = ReportDetails(
report_type='ACCOUNTS',
arguments={application=2c9180897e7742b2017e781782f705b9, sourceName=Active Directory}
)

```
[[Back to top]](#) 

