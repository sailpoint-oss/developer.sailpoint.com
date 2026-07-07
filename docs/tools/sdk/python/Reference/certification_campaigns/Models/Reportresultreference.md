---
id: reportresultreference
title: Reportresultreference
pagination_label: Reportresultreference
sidebar_label: Reportresultreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reportresultreference', 'Reportresultreference'] 
slug: /tools/sdk/python/certification-campaigns/models/reportresultreference
tags: ['SDK', 'Software Development Kit', 'Reportresultreference', 'Reportresultreference']
---

# Reportresultreference


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
from sailpoint.certification_campaigns.models.reportresultreference import Reportresultreference

reportresultreference = Reportresultreference(
type='REPORT_RESULT',
id='2c9180835d191a86015d28455b4b232a',
name='SOD Policy 1 Violation',
status='PENDING'
)

```
[[Back to top]](#) 

