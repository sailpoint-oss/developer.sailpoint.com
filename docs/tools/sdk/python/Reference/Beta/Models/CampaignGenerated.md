---
id: beta-campaign-generated
title: CampaignGenerated
pagination_label: CampaignGenerated
sidebar_label: CampaignGenerated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignGenerated', 'BetaCampaignGenerated'] 
slug: /tools/sdk/python/beta/models/campaign-generated
tags: ['SDK', 'Software Development Kit', 'CampaignGenerated', 'BetaCampaignGenerated']
---

# CampaignGenerated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaignGeneratedCampaign**](campaign-generated-campaign) |  | [required]
}

## Example

```python
from sailpoint.beta.models.campaign_generated import CampaignGenerated

campaign_generated = CampaignGenerated(
campaign=sailpoint.beta.models.campaign_generated_campaign.CampaignGenerated_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-02-17T03:04:45.815Z', 
                    deadline = '2021-02-18T03:04:45.815Z', 
                    type = MANAGER, 
                    campaign_owner = sailpoint.beta.models.campaign_generated_campaign_campaign_owner.CampaignGenerated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = STAGED, )
)

```
[[Back to top]](#) 

