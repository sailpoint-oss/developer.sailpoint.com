---
id: campaign-complete-options
title: CampaignCompleteOptions
pagination_label: CampaignCompleteOptions
sidebar_label: CampaignCompleteOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignCompleteOptions', 'CampaignCompleteOptions'] 
slug: /tools/sdk/python/v3/models/campaign-complete-options
tags: ['SDK', 'Software Development Kit', 'CampaignCompleteOptions', 'CampaignCompleteOptions']
---

# CampaignCompleteOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_complete_action** |  **Enum** [  'APPROVE',    'REVOKE' ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to 'APPROVE']
}

## Example

```python
from sailpoint.v3.models.campaign_complete_options import CampaignCompleteOptions

campaign_complete_options = CampaignCompleteOptions(
auto_complete_action='APPROVE'
)

```
[[Back to top]](#) 

