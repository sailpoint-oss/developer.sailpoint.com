---
id: beta-campaign-generated-campaign
title: CampaignGeneratedCampaign
pagination_label: CampaignGeneratedCampaign
sidebar_label: CampaignGeneratedCampaign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignGeneratedCampaign', 'BetaCampaignGeneratedCampaign'] 
slug: /tools/sdk/python/beta/models/campaign-generated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaign', 'BetaCampaignGeneratedCampaign']
---

# CampaignGeneratedCampaign

Details about the campaign that was generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign. | [required]
**name** | **str** | Human friendly name of the campaign. | [required]
**description** | **str** | Extended description of the campaign. | [required]
**created** | **datetime** | The date and time the campaign was created. | [required]
**modified** | **str** | The date and time the campaign was last modified. | [optional] 
**deadline** | **str** | The date and time when the campaign must be finished by. | [optional] 
**type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH',    'ROLE_COMPOSITION' ] | The type of campaign that was generated. | [required]
**campaign_owner** | [**CampaignGeneratedCampaignCampaignOwner**](campaign-generated-campaign-campaign-owner) |  | [required]
**status** |  **Enum** [  'STAGED',    'ACTIVATING',    'ACTIVE' ] | The current status of the campaign. | [required]
}

## Example

```python
from sailpoint.beta.models.campaign_generated_campaign import CampaignGeneratedCampaign

campaign_generated_campaign = CampaignGeneratedCampaign(
id='2c91808576f886190176f88cac5a0010',
name='Manager Access Campaign',
description='Audit access for all employees.',
created='2021-02-16T03:04:45.815Z',
modified='2021-02-17T03:04:45.815Z',
deadline='2021-02-18T03:04:45.815Z',
type=MANAGER,
campaign_owner=sailpoint.beta.models.campaign_generated_campaign_campaign_owner.CampaignGenerated_campaign_campaignOwner(
                    id = '37f080867702c1910177031320c40n27', 
                    display_name = 'John Snow', 
                    email = 'john.snow@example.com', ),
status=STAGED
)

```
[[Back to top]](#) 

