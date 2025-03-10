---
id: beta-campaign-reports-config
title: CampaignReportsConfig
pagination_label: CampaignReportsConfig
sidebar_label: CampaignReportsConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignReportsConfig', 'BetaCampaignReportsConfig'] 
slug: /tools/sdk/python/beta/models/campaign-reports-config
tags: ['SDK', 'Software Development Kit', 'CampaignReportsConfig', 'BetaCampaignReportsConfig']
---

# CampaignReportsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attribute_columns** | **[]str** | list of identity attribute columns | [optional] 
}

## Example

```python
from sailpoint.beta.models.campaign_reports_config import CampaignReportsConfig

campaign_reports_config = CampaignReportsConfig(
identity_attribute_columns=[firstname, lastname]
)

```
[[Back to top]](#) 

