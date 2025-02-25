---
id: v2024-match-term
title: MatchTerm
pagination_label: MatchTerm
sidebar_label: MatchTerm
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MatchTerm', 'V2024MatchTerm'] 
slug: /tools/sdk/python/v2024/models/match-term
tags: ['SDK', 'Software Development Kit', 'MatchTerm', 'V2024MatchTerm']
---

# MatchTerm


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
from sailpoint.v2024.models.match_term import MatchTerm

match_term = MatchTerm(
name='mail',
value='1234 Albany Dr',
op='eq',
container=True,
var_and=False,
children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]
)

```
[[Back to top]](#) 

