---
id: campaignended-campaign
title: CampaignendedCampaign
pagination_label: CampaignendedCampaign
sidebar_label: CampaignendedCampaign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignendedCampaign', 'CampaignendedCampaign'] 
slug: /tools/sdk/python/triggers/models/campaignended-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignendedCampaign', 'CampaignendedCampaign']
---

# CampaignendedCampaign

Details about the certification campaign that ended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID for the campaign. | [required]
**name** | **str** | The human friendly name of the campaign. | [required]
**description** | **str** | Extended description of the campaign. | [required]
**created** | **datetime** | The date and time the campaign was created. | [required]
**modified** | **datetime** | The date and time the campaign was last modified. | [optional] 
**deadline** | **datetime** | The date and time the campaign is due. | [required]
**type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH',    'ROLE_COMPOSITION' ] | The type of campaign. | [required]
**campaign_owner** | [**CampaignactivatedCampaignCampaignOwner**](campaignactivated-campaign-campaign-owner) |  | [required]
**status** |  **Enum** [  'COMPLETED' ] | The current status of the campaign. | [required]
}

## Example

```python
from sailpoint.triggers.models.campaignended_campaign import CampaignendedCampaign

campaignended_campaign = CampaignendedCampaign(
id='2c91808576f886190176f88cac5a0010',
name='Manager Access Campaign',
description='Audit access for all employees.',
created='2021-02-16T03:04:45.815Z',
modified='2021-03-16T03:06:45.815Z',
deadline='2021-03-16T03:04:45.815Z',
type='MANAGER',
campaign_owner=sailpoint.triggers.models.campaignactivated_campaign_campaign_owner.campaignactivated_campaign_campaignOwner(
                    id = '37f080867702c1910177031320c40n27', 
                    display_name = 'John Snow', 
                    email = 'john.snow@example.com', ),
status='COMPLETED'
)

```
[[Back to top]](#) 

