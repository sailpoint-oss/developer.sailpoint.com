---
id: beta-fullcampaign-all-of-role-composition-campaign-info
title: FullcampaignAllOfRoleCompositionCampaignInfo
pagination_label: FullcampaignAllOfRoleCompositionCampaignInfo
sidebar_label: FullcampaignAllOfRoleCompositionCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FullcampaignAllOfRoleCompositionCampaignInfo', 'BetaFullcampaignAllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/python/beta/models/fullcampaign-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfRoleCompositionCampaignInfo', 'BetaFullcampaignAllOfRoleCompositionCampaignInfo']
---

# FullcampaignAllOfRoleCompositionCampaignInfo

Optional configuration options for role composition campaigns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewer** | [**FullcampaignAllOfSearchCampaignInfoReviewer**](fullcampaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**role_ids** | **[]str** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**remediator_ref** | [**FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef**](fullcampaign-all-of-role-composition-campaign-info-remediator-ref) |  | [required]
**query** | **str** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**description** | **str** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 
}

## Example

```python
from sailpoint.beta.models.fullcampaign_all_of_role_composition_campaign_info import FullcampaignAllOfRoleCompositionCampaignInfo

fullcampaign_all_of_role_composition_campaign_info = FullcampaignAllOfRoleCompositionCampaignInfo(
reviewer=sailpoint.beta.models.fullcampaign_all_of_search_campaign_info_reviewer.fullcampaign_allOf_searchCampaignInfo_reviewer(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
role_ids=[2c90ad2a70ace7d50170acf22ca90010],
remediator_ref=sailpoint.beta.models.fullcampaign_all_of_role_composition_campaign_info_remediator_ref.fullcampaign_allOf_roleCompositionCampaignInfo_remediatorRef(
                    type = 'IDENTITY', 
                    id = '2c90ad2a70ace7d50170acf22ca90010', 
                    name = 'Role Admin', ),
query='Search Query',
description='Role Composition Description'
)

```
[[Back to top]](#) 

