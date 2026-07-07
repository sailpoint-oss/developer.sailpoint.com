---
id: campaign2-all-of-search-campaign-info
title: Campaign2AllOfSearchCampaignInfo
pagination_label: Campaign2AllOfSearchCampaignInfo
sidebar_label: Campaign2AllOfSearchCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfSearchCampaignInfo', 'Campaign2AllOfSearchCampaignInfo'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSearchCampaignInfo', 'Campaign2AllOfSearchCampaignInfo']
---

# Campaign2AllOfSearchCampaignInfo

Must be set only if the campaign type is SEARCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'ACCESS' ] | The type of search campaign represented. | [required]
**description** | **str** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**reviewer** | [**Campaign2AllOfSearchCampaignInfoReviewer**](campaign2-all-of-search-campaign-info-reviewer) |  | [optional] 
**query** | **str** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**identity_ids** | **[]str** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**access_constraints** | [**[]Accessconstraint**](accessconstraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_search_campaign_info import Campaign2AllOfSearchCampaignInfo

campaign2_all_of_search_campaign_info = Campaign2AllOfSearchCampaignInfo(
type='ACCESS',
description='Search Campaign description',
reviewer=sailpoint.certification_campaigns.models.campaign_2_all_of_search_campaign_info_reviewer.campaign_2_allOf_searchCampaignInfo_reviewer(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
query='Search Campaign query description',
identity_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"],
access_constraints=[
                    sailpoint.certification_campaigns.models.access_constraint.Access Constraint(
                        type = 'ENTITLEMENT', 
                        ids = ["2c90ad2a70ace7d50170acf22ca90010"], 
                        operator = 'SELECTED', )
                    ]
)

```
[[Back to top]](#) 

