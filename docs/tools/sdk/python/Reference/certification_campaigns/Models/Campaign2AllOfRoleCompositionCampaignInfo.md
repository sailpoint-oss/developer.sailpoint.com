---
id: campaign2-all-of-role-composition-campaign-info
title: Campaign2AllOfRoleCompositionCampaignInfo
pagination_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfo', 'Campaign2AllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfo', 'Campaign2AllOfRoleCompositionCampaignInfo']
---

# Campaign2AllOfRoleCompositionCampaignInfo

Optional configuration options for role composition campaigns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewer_id** | **str** | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the \"reviewer\" object. | [optional] 
**reviewer** | [**Campaign2AllOfRoleCompositionCampaignInfoReviewer**](campaign2-all-of-role-composition-campaign-info-reviewer) |  | [optional] 
**role_ids** | **[]str** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**remediator_ref** | [**Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef**](campaign2-all-of-role-composition-campaign-info-remediator-ref) |  | [required]
**query** | **str** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**description** | **str** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_role_composition_campaign_info import Campaign2AllOfRoleCompositionCampaignInfo

campaign2_all_of_role_composition_campaign_info = Campaign2AllOfRoleCompositionCampaignInfo(
reviewer_id='2c91808568c529c60168cca6f90c1313',
reviewer=sailpoint.certification_campaigns.models.campaign_2_all_of_role_composition_campaign_info_reviewer.campaign_2_allOf_roleCompositionCampaignInfo_reviewer(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
role_ids=["2c90ad2a70ace7d50170acf22ca90010"],
remediator_ref=sailpoint.certification_campaigns.models.campaign_2_all_of_role_composition_campaign_info_remediator_ref.campaign_2_allOf_roleCompositionCampaignInfo_remediatorRef(
                    type = 'IDENTITY', 
                    id = '2c90ad2a70ace7d50170acf22ca90010', 
                    name = 'Role Admin', ),
query='Search Query',
description='Role Composition Description'
)

```
[[Back to top]](#) 

