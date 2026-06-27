---
id: attrsyncsource
title: Attrsyncsource
pagination_label: Attrsyncsource
sidebar_label: Attrsyncsource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attrsyncsource', 'Attrsyncsource'] 
slug: /tools/sdk/python/sources/models/attrsyncsource
tags: ['SDK', 'Software Development Kit', 'Attrsyncsource', 'Attrsyncsource']
---

# Attrsyncsource

Target source for attribute synchronization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | DTO type of target source for attribute synchronization. | [optional] 
**id** | **str** | ID of target source for attribute synchronization. | [optional] 
**name** | **str** | Human-readable name of target source for attribute synchronization. | [optional] 
}

## Example

```python
from sailpoint.sources.models.attrsyncsource import Attrsyncsource

attrsyncsource = Attrsyncsource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

