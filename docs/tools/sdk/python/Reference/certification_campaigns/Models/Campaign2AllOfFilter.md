---
id: campaign2-all-of-filter
title: Campaign2AllOfFilter
pagination_label: Campaign2AllOfFilter
sidebar_label: Campaign2AllOfFilter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfFilter', 'Campaign2AllOfFilter'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-filter
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfFilter', 'Campaign2AllOfFilter']
---

# Campaign2AllOfFilter

Determines which items will be included in this campaign. The default campaign filter is used if this field is left blank.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of whatever type of filter is being used. | [optional] 
**type** |  **Enum** [  'CAMPAIGN_FILTER' ] | Type of the filter | [optional] 
**name** | **str** | Name of the filter | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_filter import Campaign2AllOfFilter

campaign2_all_of_filter = Campaign2AllOfFilter(
id='0fbe863c063c4c88a35fd7f17e8a3df5',
type='CAMPAIGN_FILTER',
name='Test Filter'
)

```
[[Back to top]](#) 

