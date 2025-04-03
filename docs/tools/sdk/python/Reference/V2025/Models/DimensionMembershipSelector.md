---
id: v2025-dimension-membership-selector
title: DimensionMembershipSelector
pagination_label: DimensionMembershipSelector
sidebar_label: DimensionMembershipSelector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DimensionMembershipSelector', 'V2025DimensionMembershipSelector'] 
slug: /tools/sdk/python/v2025/models/dimension-membership-selector
tags: ['SDK', 'Software Development Kit', 'DimensionMembershipSelector', 'V2025DimensionMembershipSelector']
---

# DimensionMembershipSelector

When present, specifies that the Dimension is to be granted to Identities which either satisfy specific criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DimensionMembershipSelectorType**](dimension-membership-selector-type) |  | [optional] 
**criteria** | [**DimensionCriteriaLevel1**](dimension-criteria-level1) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.dimension_membership_selector import DimensionMembershipSelector

dimension_membership_selector = DimensionMembershipSelector(
type='STANDARD',
criteria=sailpoint.v2025.models.dimension_criteria_level1.DimensionCriteriaLevel1(
                    operation = 'EQUALS', 
                    key = sailpoint.v2025.models.dimension_criteria_key.DimensionCriteriaKey(
                        type = 'IDENTITY', 
                        property = 'attribute.email', ), 
                    string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.v2025.models.dimension_criteria_level2.DimensionCriteriaLevel2(
                            string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], )
)

```
[[Back to top]](#) 

