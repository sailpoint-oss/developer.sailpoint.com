---
id: v2024-campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignFilterDetailsCriteriaListInner', 'V2024CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/python/v2024/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner', 'V2024CampaignFilterDetailsCriteriaListInner']
---

# CampaignFilterDetailsCriteriaListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**CriteriaType**](criteria-type) |  | [required]
**operation** | [**Operation**](operation) |  | [required]
**var_property** | **str** | Specified key from the type of criteria. | [required]
**value** | **str** | Value for the specified key from the type of criteria. | [required]
}

## Example

```python
from sailpoint.v2024.models.campaign_filter_details_criteria_list_inner import CampaignFilterDetailsCriteriaListInner

campaign_filter_details_criteria_list_inner = CampaignFilterDetailsCriteriaListInner(
type='IDENTITY_ATTRIBUTE',
operation=,
var_property='displayName',
value='Allie'
)

```
[[Back to top]](#) 

