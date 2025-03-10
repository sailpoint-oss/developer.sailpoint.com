---
id: beta-fullcampaign-all-of-source-owner-campaign-info
title: FullcampaignAllOfSourceOwnerCampaignInfo
pagination_label: FullcampaignAllOfSourceOwnerCampaignInfo
sidebar_label: FullcampaignAllOfSourceOwnerCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FullcampaignAllOfSourceOwnerCampaignInfo', 'BetaFullcampaignAllOfSourceOwnerCampaignInfo'] 
slug: /tools/sdk/python/beta/models/fullcampaign-all-of-source-owner-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSourceOwnerCampaignInfo', 'BetaFullcampaignAllOfSourceOwnerCampaignInfo']
---

# FullcampaignAllOfSourceOwnerCampaignInfo

Must be set only if the campaign type is SOURCE_OWNER.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_ids** | **[]str** | The list of sources to be included in the campaign. | [optional] 
}

## Example

```python
from sailpoint.beta.models.fullcampaign_all_of_source_owner_campaign_info import FullcampaignAllOfSourceOwnerCampaignInfo

fullcampaign_all_of_source_owner_campaign_info = FullcampaignAllOfSourceOwnerCampaignInfo(
source_ids=[0fbe863c063c4c88a35fd7f17e8a3df5]
)

```
[[Back to top]](#) 

