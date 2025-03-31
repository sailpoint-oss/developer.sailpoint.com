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
**operation** | [**Operation**](operation) |  | [optional] 
**var_property** | **str** | Specified key from the type of criteria. | [required]
**value** | **str** | Value for the specified key from the type of criteria. | [required]
**negate_result** | **bool** | If true, the filter will negate the result of the criteria. | [optional] [default to False]
**short_circuit** | **bool** | If true, the filter will short circuit the evaluation of the criteria. | [optional] [default to False]
**record_child_matches** | **bool** | If true, the filter will record child matches for the criteria. | [optional] [default to False]
**id** | **str** | The unique ID of the criteria. | [optional] 
**suppress_matched_items** | **bool** | If this value is true, then matched items will not only be excluded from the campaign, they will also not have archived certification items created.  Such items will not appear in the exclusion report.  | [optional] [default to False]
**children** | **[]object** | List of child criteria. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.campaign_filter_details_criteria_list_inner import CampaignFilterDetailsCriteriaListInner

campaign_filter_details_criteria_list_inner = CampaignFilterDetailsCriteriaListInner(
type='IDENTITY_ATTRIBUTE',
operation='EQUALS',
var_property='displayName',
value='Allie',
negate_result=False,
short_circuit=False,
record_child_matches=False,
id='5ec18cef39020d6fd7a60ad3970aba61',
suppress_matched_items=False,
children=[
                    None
                    ]
)

```
[[Back to top]](#) 

