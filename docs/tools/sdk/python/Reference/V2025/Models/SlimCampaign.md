---
id: v2025-slim-campaign
title: SlimCampaign
pagination_label: SlimCampaign
sidebar_label: SlimCampaign
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SlimCampaign', 'V2025SlimCampaign'] 
slug: /tools/sdk/python/v2025/models/slim-campaign
tags: ['SDK', 'Software Development Kit', 'SlimCampaign', 'V2025SlimCampaign']
---

# SlimCampaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the campaign | [optional] [readonly] 
**name** | **str** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [required]
**description** | **str** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [required]
**deadline** | **datetime** | The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH',    'ROLE_COMPOSITION',    'MACHINE_ACCOUNT' ] | The type of campaign. Could be extended in the future. | [required]
**email_notification_enabled** | **bool** | Enables email notification for this campaign | [optional] [default to False]
**auto_revoke_allowed** | **bool** | Allows auto revoke for this campaign | [optional] [default to False]
**recommendations_enabled** | **bool** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to False]
**status** |  **Enum** [  'PENDING',    'STAGED',    'CANCELING',    'ACTIVATING',    'ACTIVE',    'COMPLETING',    'COMPLETED',    'ERROR',    'ARCHIVED' ] | The campaign's current status. | [optional] [readonly] 
**correlated_status** |  **Enum** [  'CORRELATED',    'UNCORRELATED' ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**created** | **datetime** | Created time of the campaign | [optional] [readonly] 
**total_certifications** | **int** | The total number of certifications in this campaign. | [optional] [readonly] 
**completed_certifications** | **int** | The number of completed certifications in this campaign. | [optional] [readonly] 
**alerts** | [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
}

## Example

```python
from sailpoint.v2025.models.slim_campaign import SlimCampaign

slim_campaign = SlimCampaign(
id='2c9079b270a266a60170a2779fcb0007',
name='Manager Campaign',
description='Everyone needs to be reviewed by their manager',
deadline='2020-03-15T10:00:01.456Z',
type='MANAGER',
email_notification_enabled=False,
auto_revoke_allowed=False,
recommendations_enabled=True,
status='ACTIVE',
correlated_status='CORRELATED',
created='2020-03-03T22:15:13.611Z',
total_certifications=100,
completed_certifications=10,
alerts=[
                    sailpoint.v2025.models.campaign_alert.Campaign Alert(
                        level = 'ERROR', 
                        localizations = [
                            sailpoint.v2025.models.error_message_dto.Error Message Dto(
                                locale = 'en-US', 
                                locale_origin = 'DEFAULT', 
                                text = 'The request was syntactically correct but its content is semantically invalid.', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

