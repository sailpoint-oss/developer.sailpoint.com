# CampaignLatestReport

# CampaignLatestReport

Summary of the latest campaign report

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign report. | [optional] 
**name** | **str** | The human readable report name | [optional] 
**created** | **datetime** | The date the report was created. | [optional] 
**status** | **CampaignReportStatus** |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_latest_report import CampaignLatestReport

campaign_latest_report = CampaignLatestReport(
id='e1aeb0b6-0021-4f40-8bc7-5c56533214b3',
name='ABC Campaign - Sign Off Report 2024-10-16_13_18UTC.pdf',
created='2018-10-19T13:49:37.385Z',
status='IN_PROGRESS'
)

```
[[Back to top]](#) 

