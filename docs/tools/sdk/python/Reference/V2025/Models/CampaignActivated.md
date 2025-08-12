---
id: v2025-campaign-activated
title: CampaignActivated
pagination_label: CampaignActivated
sidebar_label: CampaignActivated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignActivated', 'V2025CampaignActivated'] 
slug: /tools/sdk/python/v2025/models/campaign-activated
tags: ['SDK', 'Software Development Kit', 'CampaignActivated', 'V2025CampaignActivated']
---

# CampaignActivated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaignActivatedCampaign**](campaign-activated-campaign) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.campaign_activated import CampaignActivated

campaign_activated = CampaignActivated(
campaign=sailpoint.v2025.models.campaign_activated_campaign.CampaignActivated_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-02-16T03:06:45.815Z', 
                    deadline = '2021-03-16T03:04:45.815Z', 
                    type = MANAGER, 
                    campaign_owner = sailpoint.v2025.models.campaign_activated_campaign_campaign_owner.CampaignActivated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = ACTIVE, )
)

```
[[Back to top]](#) 

