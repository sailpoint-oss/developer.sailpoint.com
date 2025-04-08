---
id: v2024-campaign-all-of-search-campaign-info-reviewer
title: CampaignAllOfSearchCampaignInfoReviewer
pagination_label: CampaignAllOfSearchCampaignInfoReviewer
sidebar_label: CampaignAllOfSearchCampaignInfoReviewer
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfSearchCampaignInfoReviewer', 'V2024CampaignAllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/python/v2024/models/campaign-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSearchCampaignInfoReviewer', 'V2024CampaignAllOfSearchCampaignInfoReviewer']
---

# CampaignAllOfSearchCampaignInfoReviewer

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
from sailpoint.v2024.models.campaign_all_of_search_campaign_info_reviewer import CampaignAllOfSearchCampaignInfoReviewer

campaign_all_of_search_campaign_info_reviewer = CampaignAllOfSearchCampaignInfoReviewer(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

