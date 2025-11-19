---
id: v2025-activate-campaign-options
title: ActivateCampaignOptions
pagination_label: ActivateCampaignOptions
sidebar_label: ActivateCampaignOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ActivateCampaignOptions', 'V2025ActivateCampaignOptions'] 
slug: /tools/sdk/python/v2025/models/activate-campaign-options
tags: ['SDK', 'Software Development Kit', 'ActivateCampaignOptions', 'V2025ActivateCampaignOptions']
---

# ActivateCampaignOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_zone** | **str** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to 'Z']
}

## Example

```python
from sailpoint.v2025.models.activate_campaign_options import ActivateCampaignOptions

activate_campaign_options = ActivateCampaignOptions(
time_zone='Z'
)

```
[[Back to top]](#) 

