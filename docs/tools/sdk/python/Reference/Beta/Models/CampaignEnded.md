---
id: beta-campaign-ended
title: CampaignEnded
pagination_label: CampaignEnded
sidebar_label: CampaignEnded
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignEnded', 'BetaCampaignEnded'] 
slug: /tools/sdk/python/beta/models/campaign-ended
tags: ['SDK', 'Software Development Kit', 'CampaignEnded', 'BetaCampaignEnded']
---

# CampaignEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaignEndedCampaign**](campaign-ended-campaign) |  | [required]
}

## Example

```python
from sailpoint.beta.models.campaign_ended import CampaignEnded

campaign_ended = CampaignEnded(
campaign=sailpoint.beta.models.campaign_ended_campaign.CampaignEnded_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-03-16T03:06:45.815Z', 
                    deadline = '2021-03-16T03:04:45.815Z', 
                    type = MANAGER, 
                    campaign_owner = sailpoint.beta.models.campaign_activated_campaign_campaign_owner.CampaignActivated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = COMPLETED, )
)

```
[[Back to top]](#) 

