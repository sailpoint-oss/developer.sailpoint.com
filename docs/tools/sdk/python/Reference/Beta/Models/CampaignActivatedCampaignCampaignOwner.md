---
id: beta-campaign-activated-campaign-campaign-owner
title: CampaignActivatedCampaignCampaignOwner
pagination_label: CampaignActivatedCampaignCampaignOwner
sidebar_label: CampaignActivatedCampaignCampaignOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignActivatedCampaignCampaignOwner', 'BetaCampaignActivatedCampaignCampaignOwner'] 
slug: /tools/sdk/python/beta/models/campaign-activated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaignCampaignOwner', 'BetaCampaignActivatedCampaignCampaignOwner']
---

# CampaignActivatedCampaignCampaignOwner

Details of the identity who owns the campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity's unique ID. | [required]
**display_name** | **str** | Identity's name. | [required]
**email** | **str** | Identity's primary email address. | [required]
}

## Example

```python
from sailpoint.beta.models.campaign_activated_campaign_campaign_owner import CampaignActivatedCampaignCampaignOwner

campaign_activated_campaign_campaign_owner = CampaignActivatedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='Albert Albertson',
email='albert.albertson@example.com'
)

```
[[Back to top]](#) 

