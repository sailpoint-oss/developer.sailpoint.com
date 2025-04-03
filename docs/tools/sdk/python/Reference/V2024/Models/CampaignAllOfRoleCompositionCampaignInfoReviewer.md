---
id: v2024-campaign-all-of-role-composition-campaign-info-reviewer
title: CampaignAllOfRoleCompositionCampaignInfoReviewer
pagination_label: CampaignAllOfRoleCompositionCampaignInfoReviewer
sidebar_label: CampaignAllOfRoleCompositionCampaignInfoReviewer
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfoReviewer', 'V2024CampaignAllOfRoleCompositionCampaignInfoReviewer'] 
slug: /tools/sdk/python/v2024/models/campaign-all-of-role-composition-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfoReviewer', 'V2024CampaignAllOfRoleCompositionCampaignInfoReviewer']
---

# CampaignAllOfRoleCompositionCampaignInfoReviewer

If specified, this identity or governance group will be the reviewer for all certifications in this campaign. The allowed DTO types are IDENTITY and GOVERNANCE_GROUP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | The reviewer's DTO type. | [optional] 
**id** | **str** | The reviewer's ID. | [optional] 
**name** | **str** | The reviewer's name. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.campaign_all_of_role_composition_campaign_info_reviewer import CampaignAllOfRoleCompositionCampaignInfoReviewer

campaign_all_of_role_composition_campaign_info_reviewer = CampaignAllOfRoleCompositionCampaignInfoReviewer(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

