---
id: roleminingsessionscope
title: Roleminingsessionscope
pagination_label: Roleminingsessionscope
sidebar_label: Roleminingsessionscope
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingsessionscope', 'Roleminingsessionscope'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingsessionscope
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionscope', 'Roleminingsessionscope']
---

# Roleminingsessionscope


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_ids** | **[]str** | The list of identities for this role mining session. | [optional] 
**criteria** | **str** | The \"search\" criteria that produces the list of identities for this role mining session. | [optional] 
**attribute_filter_criteria** | **[]object** | The filter criteria for this role mining session. | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingsessionscope import Roleminingsessionscope

roleminingsessionscope = Roleminingsessionscope(
identity_ids=["2c918090761a5aac0176215c46a62d58","2c918090761a5aac01722015c46a62d42"],
criteria='source.name:DataScienceDataset',
attribute_filter_criteria={"displayName":{"untranslated":"Location: Miami"},"ariaLabel":{"untranslated":"Location: Miami"},"data":{"displayName":{"translateKey":"IDN.IDENTITY_ATTRIBUTES.LOCATION"},"name":"location","operator":"EQUALS","values":["Miami"]}}
)

```
[[Back to top]](#) 

