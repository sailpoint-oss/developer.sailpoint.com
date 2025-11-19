---
id: v2025-campaign-all-of-filter
title: CampaignAllOfFilter
pagination_label: CampaignAllOfFilter
sidebar_label: CampaignAllOfFilter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfFilter', 'V2025CampaignAllOfFilter'] 
slug: /tools/sdk/python/v2025/models/campaign-all-of-filter
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfFilter', 'V2025CampaignAllOfFilter']
---

# CampaignAllOfFilter

Determines which items will be included in this campaign. The default campaign filter is used if this field is left blank.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of whatever type of filter is being used. | [optional] 
**type** |  **Enum** [  'CAMPAIGN_FILTER' ] | Type of the filter | [optional] 
**name** | **str** | Name of the filter | [optional] 
}

## Example

```python
from sailpoint.v2025.models.campaign_all_of_filter import CampaignAllOfFilter

campaign_all_of_filter = CampaignAllOfFilter(
id='0fbe863c063c4c88a35fd7f17e8a3df5',
type='CAMPAIGN_FILTER',
name='Test Filter'
)

```
[[Back to top]](#) 

