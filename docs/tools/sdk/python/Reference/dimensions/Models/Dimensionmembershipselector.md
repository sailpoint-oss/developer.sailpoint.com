---
id: dimensionmembershipselector
title: Dimensionmembershipselector
pagination_label: Dimensionmembershipselector
sidebar_label: Dimensionmembershipselector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensionmembershipselector', 'Dimensionmembershipselector'] 
slug: /tools/sdk/python/dimensions/models/dimensionmembershipselector
tags: ['SDK', 'Software Development Kit', 'Dimensionmembershipselector', 'Dimensionmembershipselector']
---

# Dimensionmembershipselector

When present, specifies that the Dimension is to be granted to Identities which either satisfy specific criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dimensionmembershipselectortype**](dimensionmembershipselectortype) |  | [optional] 
**criteria** | [**Dimensioncriterialevel1**](dimensioncriterialevel1) |  | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.dimensionmembershipselector import Dimensionmembershipselector

dimensionmembershipselector = Dimensionmembershipselector(
type='STANDARD',
criteria=sailpoint.dimensions.models.dimensioncriterialevel1.dimensioncriterialevel1(
                    operation = 'EQUALS', 
                    key = sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                        type = 'IDENTITY', 
                        property = 'attribute.email', ), 
                    string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.dimensions.models.dimensioncriterialevel2.dimensioncriterialevel2(
                            string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], )
)

```
[[Back to top]](#) 

