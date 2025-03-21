---
id: beta-campaign-ended-campaign
title: CampaignEndedCampaign
pagination_label: CampaignEndedCampaign
sidebar_label: CampaignEndedCampaign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignEndedCampaign', 'BetaCampaignEndedCampaign'] 
slug: /tools/sdk/python/beta/models/campaign-ended-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignEndedCampaign', 'BetaCampaignEndedCampaign']
---

# CampaignEndedCampaign

Details about the certification campaign that ended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Campaign's unique ID for the campaign. | [required]
**name** | **str** | Campaign's unique ID. | [required]
**description** | **str** | Campaign's extended description. | [required]
**created** | **datetime** | Date and time when the campaign was created. | [required]
**modified** | **datetime** | Date and time when the campaign was last modified. | [optional] 
**deadline** | **datetime** | Date and time when the campaign is due. | [required]
**type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH',    'ROLE_COMPOSITION' ] | Campaign's type. | [required]
**campaign_owner** | [**CampaignActivatedCampaignCampaignOwner**](campaign-activated-campaign-campaign-owner) |  | [required]
**status** |  **Enum** [  'COMPLETED' ] | Campaign's current status. | [required]
}

## Example

```python
from sailpoint.beta.models.campaign_ended_campaign import CampaignEndedCampaign

campaign_ended_campaign = CampaignEndedCampaign(
id='2c91808576f886190176f88cac5a0010',
name='Manager Access Campaign',
description='Audit access for all employees.',
created='2021-02-16T03:04:45.815Z',
modified='2021-03-16T03:06:45.815Z',
deadline='2021-03-16T03:04:45.815Z',
type=MANAGER,
campaign_owner=sailpoint.beta.models.campaign_activated_campaign_campaign_owner.CampaignActivated_campaign_campaignOwner(
                    id = '37f080867702c1910177031320c40n27', 
                    display_name = 'Albert Albertson', 
                    email = 'albert.albertson@example.com', ),
status=COMPLETED
)

```
[[Back to top]](#) 

