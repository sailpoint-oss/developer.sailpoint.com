---
id: typedreference
title: Typedreference
pagination_label: Typedreference
sidebar_label: Typedreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Typedreference', 'Typedreference'] 
slug: /tools/sdk/python/scheduled-search/models/typedreference
tags: ['SDK', 'Software Development Kit', 'Typedreference', 'Typedreference']
---

# Typedreference

A typed reference to the object. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [required]
**id** | **str** | The id of the object.  | [required]
}

## Example

```python
from sailpoint.scheduled_search.models.typedreference import Typedreference

typedreference = Typedreference(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313'
)

```
[[Back to top]](#) 

