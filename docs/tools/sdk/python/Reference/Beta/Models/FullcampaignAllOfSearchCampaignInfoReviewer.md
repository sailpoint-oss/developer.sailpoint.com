---
id: beta-fullcampaign-all-of-search-campaign-info-reviewer
title: FullcampaignAllOfSearchCampaignInfoReviewer
pagination_label: FullcampaignAllOfSearchCampaignInfoReviewer
sidebar_label: FullcampaignAllOfSearchCampaignInfoReviewer
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FullcampaignAllOfSearchCampaignInfoReviewer', 'BetaFullcampaignAllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/python/beta/models/fullcampaign-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSearchCampaignInfoReviewer', 'BetaFullcampaignAllOfSearchCampaignInfoReviewer']
---

# FullcampaignAllOfSearchCampaignInfoReviewer

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
from sailpoint.beta.models.fullcampaign_all_of_search_campaign_info_reviewer import FullcampaignAllOfSearchCampaignInfoReviewer

fullcampaign_all_of_search_campaign_info_reviewer = FullcampaignAllOfSearchCampaignInfoReviewer(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

