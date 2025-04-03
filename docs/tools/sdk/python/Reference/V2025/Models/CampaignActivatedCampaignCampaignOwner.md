---
id: v2025-campaign-activated-campaign-campaign-owner
title: CampaignActivatedCampaignCampaignOwner
pagination_label: CampaignActivatedCampaignCampaignOwner
sidebar_label: CampaignActivatedCampaignCampaignOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignActivatedCampaignCampaignOwner', 'V2025CampaignActivatedCampaignCampaignOwner'] 
slug: /tools/sdk/python/v2025/models/campaign-activated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaignCampaignOwner', 'V2025CampaignActivatedCampaignCampaignOwner']
---

# CampaignActivatedCampaignCampaignOwner

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
from sailpoint.v2025.models.campaign_activated_campaign_campaign_owner import CampaignActivatedCampaignCampaignOwner

campaign_activated_campaign_campaign_owner = CampaignActivatedCampaignCampaignOwner(
id='37f080867702c1910177031320c40n27',
display_name='John Snow',
email='john.snow@example.com'
)

```
[[Back to top]](#) 

