---
id: v2024-campaign-report
title: CampaignReport
pagination_label: CampaignReport
sidebar_label: CampaignReport
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignReport', 'V2024CampaignReport'] 
slug: /tools/sdk/python/v2024/models/campaign-report
tags: ['SDK', 'Software Development Kit', 'CampaignReport', 'V2024CampaignReport']
---

# CampaignReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'REPORT_RESULT' ] | SOD policy violation report result DTO type. | [optional] 
**id** | **str** | SOD policy violation report result ID. | [optional] 
**name** | **str** | Human-readable name of the SOD policy violation report result. | [optional] 
**status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR',    'PENDING' ] | Status of a SOD policy violation report. | [optional] 
**report_type** | [**ReportType**](report-type) |  | [required]
**last_run_at** | **datetime** | The most recent date and time this report was run | [optional] [readonly] 
}

## Example

```python
from sailpoint.v2024.models.campaign_report import CampaignReport

campaign_report = CampaignReport(
type='REPORT_RESULT',
id='2c9180835d191a86015d28455b4b232a',
name='SOD Policy 1 Violation',
status='PENDING',
report_type='CAMPAIGN_COMPOSITION_REPORT',
last_run_at=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 

