---
id: campaignended
title: Campaignended
pagination_label: Campaignended
sidebar_label: Campaignended
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaignended', 'Campaignended'] 
slug: /tools/sdk/python/triggers/models/campaignended
tags: ['SDK', 'Software Development Kit', 'Campaignended', 'Campaignended']
---

# Campaignended


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaignendedCampaign**](campaignended-campaign) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.campaignended import Campaignended

campaignended = Campaignended(
campaign=sailpoint.triggers.models.campaignended_campaign.campaignended_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-03-16T03:06:45.815Z', 
                    deadline = '2021-03-16T03:04:45.815Z', 
                    type = 'MANAGER', 
                    campaign_owner = sailpoint.triggers.models.campaignactivated_campaign_campaign_owner.campaignactivated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = 'COMPLETED', )
)

```
[[Back to top]](#) 

