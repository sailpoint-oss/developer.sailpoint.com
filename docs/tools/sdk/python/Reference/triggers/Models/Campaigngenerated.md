---
id: campaigngenerated
title: Campaigngenerated
pagination_label: Campaigngenerated
sidebar_label: Campaigngenerated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaigngenerated', 'Campaigngenerated'] 
slug: /tools/sdk/python/triggers/models/campaigngenerated
tags: ['SDK', 'Software Development Kit', 'Campaigngenerated', 'Campaigngenerated']
---

# Campaigngenerated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaigngeneratedCampaign**](campaigngenerated-campaign) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.campaigngenerated import Campaigngenerated

campaigngenerated = Campaigngenerated(
campaign=sailpoint.triggers.models.campaigngenerated_campaign.campaigngenerated_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-02-17T03:04:45.815Z', 
                    deadline = '2021-02-18T03:04:45.815Z', 
                    type = 'MANAGER', 
                    campaign_owner = sailpoint.triggers.models.campaigngenerated_campaign_campaign_owner.campaigngenerated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = 'STAGED', )
)

```
[[Back to top]](#) 

