---
id: v2024-selector-account-match-config-match-expression
title: SelectorAccountMatchConfigMatchExpression
pagination_label: SelectorAccountMatchConfigMatchExpression
sidebar_label: SelectorAccountMatchConfigMatchExpression
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SelectorAccountMatchConfigMatchExpression', 'V2024SelectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/python/v2024/models/selector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfigMatchExpression', 'V2024SelectorAccountMatchConfigMatchExpression']
---

# SelectorAccountMatchConfigMatchExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_terms** | [**[]MatchTerm**](match-term) |  | [optional] 
**var_and** | **bool** | If it is AND operators for match terms | [optional] [default to True]
}

## Example

```python
from sailpoint.v2024.models.selector_account_match_config_match_expression import SelectorAccountMatchConfigMatchExpression

selector_account_match_config_match_expression = SelectorAccountMatchConfigMatchExpression(
match_terms=[{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}],
var_and=True
)

```
[[Back to top]](#) 

