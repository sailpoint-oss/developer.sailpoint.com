# TriggerCampaignReportRequest

# TriggerCampaignReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **CampaignReportType** |  | [required]
**format** | **CampaignReportFormat** |  | [required]
**name** | **str** | The name of the report. The final name will include a timestamp and the appropriate extension based on the format value | [required]
\}

## Example

```python
from sailpoint.gov_certification.models.trigger_campaign_report_request import TriggerCampaignReportRequest

trigger_campaign_report_request = TriggerCampaignReportRequest(
type='REMEDIATION',
format='PDF',
name='My Campaign Report'
)

```
[[Back to top]](#) 

