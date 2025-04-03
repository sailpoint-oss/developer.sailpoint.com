---
id: report-result-reference
title: ReportResultReference
pagination_label: ReportResultReference
sidebar_label: ReportResultReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReportResultReference', 'ReportResultReference'] 
slug: /tools/sdk/python/v3/models/report-result-reference
tags: ['SDK', 'Software Development Kit', 'ReportResultReference', 'ReportResultReference']
---

# ReportResultReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'REPORT_RESULT' ] | SOD policy violation report result DTO type. | [optional] 
**id** | **str** | SOD policy violation report result ID. | [optional] 
**name** | **str** | Human-readable name of the SOD policy violation report result. | [optional] 
**status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR',    'PENDING' ] | Status of a SOD policy violation report. | [optional] 
}

## Example

```python
from sailpoint.v3.models.report_result_reference import ReportResultReference

report_result_reference = ReportResultReference(
type='REPORT_RESULT',
id='2c9180835d191a86015d28455b4b232a',
name='SOD Policy 1 Violation',
status='PENDING'
)

```
[[Back to top]](#) 

