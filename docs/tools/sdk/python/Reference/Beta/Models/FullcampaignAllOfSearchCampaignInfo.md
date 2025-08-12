---
id: beta-fullcampaign-all-of-search-campaign-info
title: FullcampaignAllOfSearchCampaignInfo
pagination_label: FullcampaignAllOfSearchCampaignInfo
sidebar_label: FullcampaignAllOfSearchCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FullcampaignAllOfSearchCampaignInfo', 'BetaFullcampaignAllOfSearchCampaignInfo'] 
slug: /tools/sdk/python/beta/models/fullcampaign-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSearchCampaignInfo', 'BetaFullcampaignAllOfSearchCampaignInfo']
---

# FullcampaignAllOfSearchCampaignInfo

Must be set only if the campaign type is SEARCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'ACCESS' ] | The type of search campaign represented. | [required]
**description** | **str** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**reviewer** | [**FullcampaignAllOfSearchCampaignInfoReviewer**](fullcampaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**query** | **str** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**identity_ids** | **[]str** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**access_constraints** | [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 
}

## Example

```python
from sailpoint.beta.models.fullcampaign_all_of_search_campaign_info import FullcampaignAllOfSearchCampaignInfo

fullcampaign_all_of_search_campaign_info = FullcampaignAllOfSearchCampaignInfo(
type='ACCESS',
description='Search Campaign description',
reviewer=sailpoint.beta.models.fullcampaign_all_of_search_campaign_info_reviewer.fullcampaign_allOf_searchCampaignInfo_reviewer(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
query='Search Campaign query description',
identity_ids=[0fbe863c063c4c88a35fd7f17e8a3df5],
access_constraints=[
                    sailpoint.beta.models.access_constraint.Access Constraint(
                        type = 'ENTITLEMENT', 
                        ids = [2c90ad2a70ace7d50170acf22ca90010], 
                        operator = 'SELECTED', )
                    ]
)

```
[[Back to top]](#) 

