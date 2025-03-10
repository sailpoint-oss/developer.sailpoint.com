---
id: campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignFilterDetailsCriteriaListInner', 'CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/python/v3/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner', 'CampaignFilterDetailsCriteriaListInner']
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
from sailpoint.v3.models.campaign_filter_details_criteria_list_inner import CampaignFilterDetailsCriteriaListInner

campaign_filter_details_criteria_list_inner = CampaignFilterDetailsCriteriaListInner(
type='IDENTITY_ATTRIBUTE',
operation=,
var_property='displayName',
value='Allie'
)

```
[[Back to top]](#) 

