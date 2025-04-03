---
id: v2024-campaign-generated-campaign-campaign-owner
title: CampaignGeneratedCampaignCampaignOwner
pagination_label: CampaignGeneratedCampaignCampaignOwner
sidebar_label: CampaignGeneratedCampaignCampaignOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignGeneratedCampaignCampaignOwner', 'V2024CampaignGeneratedCampaignCampaignOwner'] 
slug: /tools/sdk/python/v2024/models/campaign-generated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaignCampaignOwner', 'V2024CampaignGeneratedCampaignCampaignOwner']
---

# CampaignGeneratedCampaignCampaignOwner

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
from sailpoint.v2024.models.campaign_generated_campaign_campaign_owner import CampaignGeneratedCampaignCampaignOwner

campaign_generated_campaign_campaign_owner = CampaignGeneratedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='John Snow',
email='john.snow@example.com'
)

```
[[Back to top]](#) 

