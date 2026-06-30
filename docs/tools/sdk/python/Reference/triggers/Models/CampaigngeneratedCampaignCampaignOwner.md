---
id: campaigngenerated-campaign-campaign-owner
title: CampaigngeneratedCampaignCampaignOwner
pagination_label: CampaigngeneratedCampaignCampaignOwner
sidebar_label: CampaigngeneratedCampaignCampaignOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaigngeneratedCampaignCampaignOwner', 'CampaigngeneratedCampaignCampaignOwner'] 
slug: /tools/sdk/python/triggers/models/campaigngenerated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaigngeneratedCampaignCampaignOwner', 'CampaigngeneratedCampaignCampaignOwner']
---

# CampaigngeneratedCampaignCampaignOwner

The identity that owns the campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity. | [required]
**display_name** | **str** | The display name of the identity. | [required]
**email** | **str** | The primary email address of the identity. | [required]
}

## Example

```python
from sailpoint.triggers.models.campaigngenerated_campaign_campaign_owner import CampaigngeneratedCampaignCampaignOwner

campaigngenerated_campaign_campaign_owner = CampaigngeneratedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='John Snow',
email='john.snow@example.com'
)

```
[[Back to top]](#) 

