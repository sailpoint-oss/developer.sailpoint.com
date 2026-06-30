---
id: campaigncompleteoptions
title: Campaigncompleteoptions
pagination_label: Campaigncompleteoptions
sidebar_label: Campaigncompleteoptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaigncompleteoptions', 'Campaigncompleteoptions'] 
slug: /tools/sdk/python/certification-campaigns/models/campaigncompleteoptions
tags: ['SDK', 'Software Development Kit', 'Campaigncompleteoptions', 'Campaigncompleteoptions']
---

# Campaigncompleteoptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_complete_action** |  **Enum** [  'APPROVE',    'REVOKE' ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to 'APPROVE']
}

## Example

```python
from sailpoint.certification_campaigns.models.campaigncompleteoptions import Campaigncompleteoptions

campaigncompleteoptions = Campaigncompleteoptions(
auto_complete_action='APPROVE'
)

```
[[Back to top]](#) 

