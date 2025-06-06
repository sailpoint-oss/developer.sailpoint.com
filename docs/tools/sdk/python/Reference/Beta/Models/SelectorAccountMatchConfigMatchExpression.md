---
id: beta-selector-account-match-config-match-expression
title: SelectorAccountMatchConfigMatchExpression
pagination_label: SelectorAccountMatchConfigMatchExpression
sidebar_label: SelectorAccountMatchConfigMatchExpression
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SelectorAccountMatchConfigMatchExpression', 'BetaSelectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/python/beta/models/selector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfigMatchExpression', 'BetaSelectorAccountMatchConfigMatchExpression']
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
from sailpoint.beta.models.selector_account_match_config_match_expression import SelectorAccountMatchConfigMatchExpression

selector_account_match_config_match_expression = SelectorAccountMatchConfigMatchExpression(
match_terms=[{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}],
var_and=True
)

```
[[Back to top]](#) 

