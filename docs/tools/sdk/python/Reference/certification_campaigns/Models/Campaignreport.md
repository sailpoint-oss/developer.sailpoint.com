---
id: campaignreport
title: Campaignreport
pagination_label: Campaignreport
sidebar_label: Campaignreport
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaignreport', 'Campaignreport'] 
slug: /tools/sdk/python/certification-campaigns/models/campaignreport
tags: ['SDK', 'Software Development Kit', 'Campaignreport', 'Campaignreport']
---

# Campaignreport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'REPORT_RESULT' ] | SOD policy violation report result DTO type. | [optional] 
**id** | **str** | SOD policy violation report result ID. | [optional] 
**name** | **str** | Human-readable name of the SOD policy violation report result. | [optional] 
**status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR',    'PENDING' ] | Status of a SOD policy violation report. | [optional] 
**report_type** | [**Reporttype**](reporttype) |  | [required]
**last_run_at** | **datetime** | The most recent date and time this report was run | [optional] [readonly] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaignreport import Campaignreport

campaignreport = Campaignreport(
type='REPORT_RESULT',
id='2c9180835d191a86015d28455b4b232a',
name='SOD Policy 1 Violation',
status='PENDING',
report_type='CAMPAIGN_COMPOSITION_REPORT',
last_run_at=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 

