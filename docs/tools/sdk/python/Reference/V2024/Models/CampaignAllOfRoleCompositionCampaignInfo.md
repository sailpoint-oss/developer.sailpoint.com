---
id: v2024-campaign-all-of-role-composition-campaign-info
title: CampaignAllOfRoleCompositionCampaignInfo
pagination_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfo', 'V2024CampaignAllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/python/v2024/models/campaign-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfo', 'V2024CampaignAllOfRoleCompositionCampaignInfo']
---

# CampaignAllOfRoleCompositionCampaignInfo

Optional configuration options for role composition campaigns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewer** | [**CampaignAllOfSearchCampaignInfoReviewer**](campaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**role_ids** | **[]str** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**remediator_ref** | [**CampaignAllOfRoleCompositionCampaignInfoRemediatorRef**](campaign-all-of-role-composition-campaign-info-remediator-ref) |  | [required]
**query** | **str** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**description** | **str** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.campaign_all_of_role_composition_campaign_info import CampaignAllOfRoleCompositionCampaignInfo

campaign_all_of_role_composition_campaign_info = CampaignAllOfRoleCompositionCampaignInfo(
reviewer=sailpoint.v2024.models.campaign_all_of_search_campaign_info_reviewer.Campaign_allOf_searchCampaignInfo_reviewer(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
role_ids=[2c90ad2a70ace7d50170acf22ca90010],
remediator_ref=sailpoint.v2024.models.campaign_all_of_role_composition_campaign_info_remediator_ref.Campaign_allOf_roleCompositionCampaignInfo_remediatorRef(
                    type = 'IDENTITY', 
                    id = '2c90ad2a70ace7d50170acf22ca90010', 
                    name = 'Role Admin', ),
query='Search Query',
description='Role Composition Description'
)

```
[[Back to top]](#) 

