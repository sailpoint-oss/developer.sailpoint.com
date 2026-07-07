---
id: roleminingidentitydistribution
title: Roleminingidentitydistribution
pagination_label: Roleminingidentitydistribution
sidebar_label: Roleminingidentitydistribution
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingidentitydistribution', 'Roleminingidentitydistribution'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingidentitydistribution
tags: ['SDK', 'Software Development Kit', 'Roleminingidentitydistribution', 'Roleminingidentitydistribution']
---

# Roleminingidentitydistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Id of the potential role | [optional] 
**distribution** | [**[]RoleminingidentitydistributionDistributionInner**](roleminingidentitydistribution-distribution-inner) |  | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingidentitydistribution import Roleminingidentitydistribution

roleminingidentitydistribution = Roleminingidentitydistribution(
attribute_name='department',
distribution=[
                    sailpoint.iai_role_mining.models.roleminingidentitydistribution_distribution_inner.roleminingidentitydistribution_distribution_inner(
                        attribute_value = 'NM Tier 3', 
                        count = 6, )
                    ]
)

```
[[Back to top]](#) 

