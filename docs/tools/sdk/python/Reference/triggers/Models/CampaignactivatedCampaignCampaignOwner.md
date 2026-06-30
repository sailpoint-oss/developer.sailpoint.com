---
id: campaignactivated-campaign-campaign-owner
title: CampaignactivatedCampaignCampaignOwner
pagination_label: CampaignactivatedCampaignCampaignOwner
sidebar_label: CampaignactivatedCampaignCampaignOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignactivatedCampaignCampaignOwner', 'CampaignactivatedCampaignCampaignOwner'] 
slug: /tools/sdk/python/triggers/models/campaignactivated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignactivatedCampaignCampaignOwner', 'CampaignactivatedCampaignCampaignOwner']
---

# CampaignactivatedCampaignCampaignOwner

Details of the identity that owns the campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity. | [required]
**display_name** | **str** | The human friendly name of the identity. | [required]
**email** | **str** | The primary email address of the identity. | [required]
}

## Example

```python
from sailpoint.triggers.models.campaignactivated_campaign_campaign_owner import CampaignactivatedCampaignCampaignOwner

campaignactivated_campaign_campaign_owner = CampaignactivatedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='John Snow',
email='john.snow@example.com'
)

```
[[Back to top]](#) 

