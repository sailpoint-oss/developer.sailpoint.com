---
id: beta-complete-campaign-options
title: CompleteCampaignOptions
pagination_label: CompleteCampaignOptions
sidebar_label: CompleteCampaignOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompleteCampaignOptions', 'BetaCompleteCampaignOptions'] 
slug: /tools/sdk/python/beta/models/complete-campaign-options
tags: ['SDK', 'Software Development Kit', 'CompleteCampaignOptions', 'BetaCompleteCampaignOptions']
---

# CompleteCampaignOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_complete_action** |  **Enum** [  'APPROVE',    'REVOKE' ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to 'APPROVE']
}

## Example

```python
from sailpoint.beta.models.complete_campaign_options import CompleteCampaignOptions

complete_campaign_options = CompleteCampaignOptions(
auto_complete_action='APPROVE'
)

```
[[Back to top]](#) 

