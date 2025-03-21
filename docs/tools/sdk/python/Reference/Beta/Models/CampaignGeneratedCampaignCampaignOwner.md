---
id: beta-campaign-generated-campaign-campaign-owner
title: CampaignGeneratedCampaignCampaignOwner
pagination_label: CampaignGeneratedCampaignCampaignOwner
sidebar_label: CampaignGeneratedCampaignCampaignOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignGeneratedCampaignCampaignOwner', 'BetaCampaignGeneratedCampaignCampaignOwner'] 
slug: /tools/sdk/python/beta/models/campaign-generated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaignCampaignOwner', 'BetaCampaignGeneratedCampaignCampaignOwner']
---

# CampaignGeneratedCampaignCampaignOwner

Identity who owns the campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity's unique ID. | [required]
**display_name** | **str** | Identity's name. | [required]
**email** | **str** | Identity's primary email address. | [required]
}

## Example

```python
from sailpoint.beta.models.campaign_generated_campaign_campaign_owner import CampaignGeneratedCampaignCampaignOwner

campaign_generated_campaign_campaign_owner = CampaignGeneratedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='Albert Albertson',
email='albert.albertson@example.com'
)

```
[[Back to top]](#) 

