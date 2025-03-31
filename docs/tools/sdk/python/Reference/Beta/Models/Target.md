---
id: beta-target
title: Target
pagination_label: Target
sidebar_label: Target
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Target', 'BetaTarget'] 
slug: /tools/sdk/python/beta/models/target
tags: ['SDK', 'Software Development Kit', 'Target', 'BetaTarget']
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
from sailpoint.beta.models.target import Target

target = Target(
id='c6dc37bf508149b28ce5b7d90ca4bbf9',
type='APPLICATION',
name='Active Directory [source]'
)

```
[[Back to top]](#) 

