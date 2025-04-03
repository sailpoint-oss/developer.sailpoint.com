---
id: v2024-target
title: Target
pagination_label: Target
sidebar_label: Target
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Target', 'V2024Target'] 
slug: /tools/sdk/python/v2024/models/target
tags: ['SDK', 'Software Development Kit', 'Target', 'V2024Target']
---

# Target


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Target ID | [optional] 
**type** |  **Enum** [  'APPLICATION',    'IDENTITY' ] | Target type | [optional] 
**name** | **str** | Target name | [optional] 
}

## Example

```python
from sailpoint.v2024.models.target import Target

target = Target(
id='c6dc37bf508149b28ce5b7d90ca4bbf9',
type='APPLICATION',
name='Active Directory [source]'
)

```
[[Back to top]](#) 

