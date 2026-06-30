---
id: matchterm
title: Matchterm
pagination_label: Matchterm
sidebar_label: Matchterm
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Matchterm', 'Matchterm'] 
slug: /tools/sdk/python/apps/models/matchterm
tags: ['SDK', 'Software Development Kit', 'Matchterm', 'Matchterm']
---

# Matchterm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The attribute name | [optional] 
**value** | **str** | The attribute value | [optional] 
**op** | **str** | The operator between name and value | [optional] 
**container** | **bool** | If it is a container or a real match term | [optional] [default to False]
**var_and** | **bool** | If it is AND logical operator for the children match terms | [optional] [default to False]
**children** | **[]Dict[str, object]** | The children under this match term | [optional] 
}

## Example

```python
from sailpoint.apps.models.matchterm import Matchterm

matchterm = Matchterm(
name='mail',
value='1234 Albany Dr',
op='eq',
container=True,
var_and=False,
children=[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]
)

```
[[Back to top]](#) 

