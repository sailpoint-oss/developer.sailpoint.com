---
id: reportdetails
title: Reportdetails
pagination_label: Reportdetails
sidebar_label: Reportdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reportdetails', 'Reportdetails'] 
slug: /tools/sdk/python/reports-data-extraction/models/reportdetails
tags: ['SDK', 'Software Development Kit', 'Reportdetails', 'Reportdetails']
---

# Reportdetails

Details about report to be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_type** |  **Enum** [  'ACCOUNTS',    'IDENTITIES_DETAILS',    'IDENTITIES',    'IDENTITY_PROFILE_IDENTITY_ERROR',    'ORPHAN_IDENTITIES',    'SEARCH_EXPORT',    'UNCORRELATED_ACCOUNTS' ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**arguments** | [**ReportdetailsArguments**](reportdetails-arguments) |  | [optional] 
}

## Example

```python
from sailpoint.reports_data_extraction.models.reportdetails import Reportdetails

reportdetails = Reportdetails(
report_type='ACCOUNTS',
arguments={"application":"2c9180897e7742b2017e781782f705b9","sourceName":"Active Directory"}
)

```
[[Back to top]](#) 

