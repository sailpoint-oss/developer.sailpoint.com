---
id: campaignactivated
title: Campaignactivated
pagination_label: Campaignactivated
sidebar_label: Campaignactivated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaignactivated', 'Campaignactivated'] 
slug: /tools/sdk/python/triggers/models/campaignactivated
tags: ['SDK', 'Software Development Kit', 'Campaignactivated', 'Campaignactivated']
---

# Campaignactivated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaignactivatedCampaign**](campaignactivated-campaign) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.campaignactivated import Campaignactivated

campaignactivated = Campaignactivated(
campaign=sailpoint.triggers.models.campaignactivated_campaign.campaignactivated_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-02-16T03:06:45.815Z', 
                    deadline = '2021-03-16T03:04:45.815Z', 
                    type = 'MANAGER', 
                    campaign_owner = sailpoint.triggers.models.campaignactivated_campaign_campaign_owner.campaignactivated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = 'ACTIVE', )
)

```
[[Back to top]](#) 

