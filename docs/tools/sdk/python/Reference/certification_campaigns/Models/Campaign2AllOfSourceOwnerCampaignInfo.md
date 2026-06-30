---
id: campaign2-all-of-source-owner-campaign-info
title: Campaign2AllOfSourceOwnerCampaignInfo
pagination_label: Campaign2AllOfSourceOwnerCampaignInfo
sidebar_label: Campaign2AllOfSourceOwnerCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfSourceOwnerCampaignInfo', 'Campaign2AllOfSourceOwnerCampaignInfo'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-source-owner-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSourceOwnerCampaignInfo', 'Campaign2AllOfSourceOwnerCampaignInfo']
---

# Campaign2AllOfSourceOwnerCampaignInfo

Must be set only if the campaign type is SOURCE_OWNER.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_ids** | **[]str** | The list of sources to be included in the campaign. | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_source_owner_campaign_info import Campaign2AllOfSourceOwnerCampaignInfo

campaign2_all_of_source_owner_campaign_info = Campaign2AllOfSourceOwnerCampaignInfo(
source_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"]
)

```
[[Back to top]](#) 

