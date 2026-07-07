---
id: activatecampaignoptions
title: Activatecampaignoptions
pagination_label: Activatecampaignoptions
sidebar_label: Activatecampaignoptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Activatecampaignoptions', 'Activatecampaignoptions'] 
slug: /tools/sdk/python/certification-campaigns/models/activatecampaignoptions
tags: ['SDK', 'Software Development Kit', 'Activatecampaignoptions', 'Activatecampaignoptions']
---

# Activatecampaignoptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_zone** | **str** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to 'Z']
}

## Example

```python
from sailpoint.certification_campaigns.models.activatecampaignoptions import Activatecampaignoptions

activatecampaignoptions = Activatecampaignoptions(
time_zone='Z'
)

```
[[Back to top]](#) 

