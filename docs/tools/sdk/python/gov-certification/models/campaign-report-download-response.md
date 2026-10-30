# CampaignReportDownloadResponse

# CampaignReportDownloadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign report. | [required]
**presigned_url** | **str** | A URL to download the campaign report | [required]
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_report_download_response import CampaignReportDownloadResponse

campaign_report_download_response = CampaignReportDownloadResponse(
id='e1aeb0b6-0021-4f40-8bc7-5c56533214b3',
presigned_url='https://secure-content.accessiq.sailpoint.com/someCampaignReport.pdf'
)

```
[[Back to top]](#) 

