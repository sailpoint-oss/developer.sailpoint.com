---
id: campaign-reference
title: CampaignReference
pagination_label: CampaignReference
sidebar_label: CampaignReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignReference', 'CampaignReference'] 
slug: /tools/sdk/python/v3/models/campaign-reference
tags: ['SDK', 'Software Development Kit', 'CampaignReference', 'CampaignReference']
---

# CampaignReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign. | [required]
**name** | **str** | The name of the campaign. | [required]
**type** |  **Enum** [  'CAMPAIGN' ] | The type of object that is being referenced. | [required]
**campaign_type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH' ] | The type of the campaign. | [required]
**description** | **str** | The description of the campaign set by the admin who created it. | [required]
**correlated_status** |  **Enum** [  'CORRELATED',    'UNCORRELATED' ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [required]
**mandatory_comment_requirement** |  **Enum** [  'ALL_DECISIONS',    'REVOKE_ONLY_DECISIONS',    'NO_DECISIONS' ] | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [required]
}

## Example

```python
from sailpoint.v3.models.campaign_reference import CampaignReference

campaign_reference = CampaignReference(
id='ef38f94347e94562b5bb8424a56397d8',
name='Campaign Name',
type='CAMPAIGN',
campaign_type='MANAGER',
description='A description of the campaign',
correlated_status='CORRELATED',
mandatory_comment_requirement='NO_DECISIONS'
)

```
[[Back to top]](#) 

