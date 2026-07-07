---
id: campaignfilterdetails-criteria-list-inner
title: CampaignfilterdetailsCriteriaListInner
pagination_label: CampaignfilterdetailsCriteriaListInner
sidebar_label: CampaignfilterdetailsCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignfilterdetailsCriteriaListInner', 'CampaignfilterdetailsCriteriaListInner'] 
slug: /tools/sdk/python/certification-campaign-filters/models/campaignfilterdetails-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignfilterdetailsCriteriaListInner', 'CampaignfilterdetailsCriteriaListInner']
---

# CampaignfilterdetailsCriteriaListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Criteriatype**](criteriatype) |  | [required]
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
from sailpoint.certification_campaign_filters.models.campaignfilterdetails_criteria_list_inner import CampaignfilterdetailsCriteriaListInner

campaignfilterdetails_criteria_list_inner = CampaignfilterdetailsCriteriaListInner(
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

