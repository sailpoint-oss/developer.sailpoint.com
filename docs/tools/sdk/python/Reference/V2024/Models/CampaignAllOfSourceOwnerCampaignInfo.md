---
id: v2024-campaign-all-of-source-owner-campaign-info
title: CampaignAllOfSourceOwnerCampaignInfo
pagination_label: CampaignAllOfSourceOwnerCampaignInfo
sidebar_label: CampaignAllOfSourceOwnerCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfSourceOwnerCampaignInfo', 'V2024CampaignAllOfSourceOwnerCampaignInfo'] 
slug: /tools/sdk/python/v2024/models/campaign-all-of-source-owner-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSourceOwnerCampaignInfo', 'V2024CampaignAllOfSourceOwnerCampaignInfo']
---

# CampaignAllOfSourceOwnerCampaignInfo

Must be set only if the campaign type is SOURCE_OWNER.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_ids** | **[]str** | The list of sources to be included in the campaign. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.campaign_all_of_source_owner_campaign_info import CampaignAllOfSourceOwnerCampaignInfo

campaign_all_of_source_owner_campaign_info = CampaignAllOfSourceOwnerCampaignInfo(
source_ids=[0fbe863c063c4c88a35fd7f17e8a3df5]
)

```
[[Back to top]](#) 

