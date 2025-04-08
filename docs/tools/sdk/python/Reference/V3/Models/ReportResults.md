---
id: report-results
title: ReportResults
pagination_label: ReportResults
sidebar_label: ReportResults
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReportResults', 'ReportResults'] 
slug: /tools/sdk/python/v3/models/report-results
tags: ['SDK', 'Software Development Kit', 'ReportResults', 'ReportResults']
---

# ReportResults

Details about report result or current state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_type** |  **Enum** [  'ACCOUNTS',    'IDENTITIES_DETAILS',    'IDENTITIES',    'IDENTITY_PROFILE_IDENTITY_ERROR',    'ORPHAN_IDENTITIES',    'SEARCH_EXPORT',    'UNCORRELATED_ACCOUNTS' ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**task_def_name** | **str** | Name of the task definition which is started to process requesting report. Usually the same as report name | [optional] 
**id** | **str** | Unique task definition identifier. | [optional] 
**created** | **datetime** | Report processing start date | [optional] 
**status** |  **Enum** [  'SUCCESS',    'FAILURE',    'WARNING',    'TERMINATED' ] | Report current state or result status. | [optional] 
**duration** | **int** | Report processing time in ms. | [optional] 
**rows** | **int** | Report size in rows. | [optional] 
**available_formats** | **[]str** | Output report file formats. This are formats for calling get endpoint as a query parameter 'fileFormat'.  In case report won't have this argument there will be ['CSV', 'PDF'] as default. | [optional] 
}

## Example

```python
from sailpoint.v3.models.report_results import ReportResults

report_results = ReportResults(
report_type='IDENTITIES_DETAILS',
task_def_name='Identities Details Report',
id='a248c16fe22222b2bd49615481311111',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
status='SUCCESS',
duration=342,
rows=37,
available_formats=[CSV]
)

```
[[Back to top]](#) 

