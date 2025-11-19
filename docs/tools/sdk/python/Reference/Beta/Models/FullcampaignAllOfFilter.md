---
id: beta-fullcampaign-all-of-filter
title: FullcampaignAllOfFilter
pagination_label: FullcampaignAllOfFilter
sidebar_label: FullcampaignAllOfFilter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FullcampaignAllOfFilter', 'BetaFullcampaignAllOfFilter'] 
slug: /tools/sdk/python/beta/models/fullcampaign-all-of-filter
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfFilter', 'BetaFullcampaignAllOfFilter']
---

# FullcampaignAllOfFilter

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
from sailpoint.beta.models.fullcampaign_all_of_filter import FullcampaignAllOfFilter

fullcampaign_all_of_filter = FullcampaignAllOfFilter(
id='0fbe863c063c4c88a35fd7f17e8a3df5',
type='CAMPAIGN_FILTER',
name='Test Filter'
)

```
[[Back to top]](#) 

