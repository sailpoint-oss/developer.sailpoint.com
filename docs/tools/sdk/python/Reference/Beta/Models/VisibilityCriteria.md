---
id: beta-visibility-criteria
title: VisibilityCriteria
pagination_label: VisibilityCriteria
sidebar_label: VisibilityCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VisibilityCriteria', 'BetaVisibilityCriteria'] 
slug: /tools/sdk/python/beta/models/visibility-criteria
tags: ['SDK', 'Software Development Kit', 'VisibilityCriteria', 'BetaVisibilityCriteria']
---

# VisibilityCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**Expression**](expression) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.visibility_criteria import VisibilityCriteria

visibility_criteria = VisibilityCriteria(
expression=sailpoint.beta.models.expression.Expression(
                    operator = 'EQUALS', 
                    attribute = 'location', 
                    value = sailpoint.beta.models.value.Value(
                        type = 'STRING', ), 
                    children = [], )
)

```
[[Back to top]](#) 

