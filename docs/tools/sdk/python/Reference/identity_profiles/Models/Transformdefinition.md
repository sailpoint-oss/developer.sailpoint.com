---
id: transformdefinition
title: Transformdefinition
pagination_label: Transformdefinition
sidebar_label: Transformdefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Transformdefinition', 'Transformdefinition'] 
slug: /tools/sdk/python/identity-profiles/models/transformdefinition
tags: ['SDK', 'Software Development Kit', 'Transformdefinition', 'Transformdefinition']
---

# Transformdefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Transform definition type. | [optional] 
**attributes** | **map[string]object** | Arbitrary key-value pairs to store any metadata for the object | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.transformdefinition import Transformdefinition

transformdefinition = Transformdefinition(
type='accountAttribute',
attributes={"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}
)

```
[[Back to top]](#) 

