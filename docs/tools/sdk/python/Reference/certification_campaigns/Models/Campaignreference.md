---
id: campaignreference
title: Campaignreference
pagination_label: Campaignreference
sidebar_label: Campaignreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaignreference', 'Campaignreference'] 
slug: /tools/sdk/python/certification-campaigns/models/campaignreference
tags: ['SDK', 'Software Development Kit', 'Campaignreference', 'Campaignreference']
---

# Campaignreference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign. | [required]
**name** | **str** | The name of the campaign. | [required]
**type** |  **Enum** [  'CAMPAIGN' ] | The type of object that is being referenced. | [required]
**campaign_type** |  **Enum** [  'MANAGER',    'SOURCE_OWNER',    'SEARCH',    'ROLE_COMPOSITION',    'MACHINE_ACCOUNT' ] | The type of the campaign. | [required]
**description** | **str** | The description of the campaign set by the admin who created it. | [required]
**correlated_status** |  **Enum** [  'CORRELATED',    'UNCORRELATED' ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [required]
**mandatory_comment_requirement** |  **Enum** [  'ALL_DECISIONS',    'REVOKE_ONLY_DECISIONS',    'NO_DECISIONS' ] | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [required]
}

## Example

```python
from sailpoint.certification_campaigns.models.campaignreference import Campaignreference

campaignreference = Campaignreference(
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

