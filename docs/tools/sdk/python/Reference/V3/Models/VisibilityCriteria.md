---
id: visibility-criteria
title: VisibilityCriteria
pagination_label: VisibilityCriteria
sidebar_label: VisibilityCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VisibilityCriteria', 'VisibilityCriteria'] 
slug: /tools/sdk/python/v3/models/visibility-criteria
tags: ['SDK', 'Software Development Kit', 'VisibilityCriteria', 'VisibilityCriteria']
---

# VisibilityCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**Expression**](expression) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.visibility_criteria import VisibilityCriteria

visibility_criteria = VisibilityCriteria(
expression=sailpoint.v3.models.expression.Expression(
                    operator = 'EQUALS', 
                    attribute = 'location', 
                    value = sailpoint.v3.models.value.Value(
                        type = 'STRING', ), 
                    children = [], )
)

```
[[Back to top]](#) 

