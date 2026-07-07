---
id: campaign2-all-of-search-campaign-info-reviewer
title: Campaign2AllOfSearchCampaignInfoReviewer
pagination_label: Campaign2AllOfSearchCampaignInfoReviewer
sidebar_label: Campaign2AllOfSearchCampaignInfoReviewer
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfSearchCampaignInfoReviewer', 'Campaign2AllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSearchCampaignInfoReviewer', 'Campaign2AllOfSearchCampaignInfoReviewer']
---

# Campaign2AllOfSearchCampaignInfoReviewer

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
from sailpoint.certification_campaigns.models.campaign2_all_of_search_campaign_info_reviewer import Campaign2AllOfSearchCampaignInfoReviewer

campaign2_all_of_search_campaign_info_reviewer = Campaign2AllOfSearchCampaignInfoReviewer(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

