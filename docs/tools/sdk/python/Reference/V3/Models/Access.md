---
id: access
title: Access
pagination_label: Access
sidebar_label: Access
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access', 'Access'] 
slug: /tools/sdk/python/v3/models/access
tags: ['SDK', 'Software Development Kit', 'Access', 'Access']
---

# Access


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**type** | [**DtoType**](dto-type) |  | [optional] 
**description** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.access import Access

access = Access(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
type='IDENTITY',
description=''
)

```
[[Back to top]](#) 

