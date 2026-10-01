# CampaignActivatedCampaignCampaignOwner

# CampaignActivatedCampaignCampaignOwner

Details of the identity that owns the campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity. | [required]
**display_name** | **str** | The human friendly name of the identity. | [required]
**email** | **str** | The primary email address of the identity. | [required]
\}

## Example

```python
from sailpoint.triggers.models.campaign_activated_campaign_campaign_owner import CampaignActivatedCampaignCampaignOwner

campaign_activated_campaign_campaign_owner = CampaignActivatedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='John Snow',
email='john.snow@example.com'
)

```
[[Back to top]](#) 

