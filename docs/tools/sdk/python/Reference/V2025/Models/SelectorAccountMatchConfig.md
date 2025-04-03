---
id: v2025-selector-account-match-config
title: SelectorAccountMatchConfig
pagination_label: SelectorAccountMatchConfig
sidebar_label: SelectorAccountMatchConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SelectorAccountMatchConfig', 'V2025SelectorAccountMatchConfig'] 
slug: /tools/sdk/python/v2025/models/selector-account-match-config
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfig', 'V2025SelectorAccountMatchConfig']
---

# SelectorAccountMatchConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_expression** | [**SelectorAccountMatchConfigMatchExpression**](selector-account-match-config-match-expression) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.selector_account_match_config import SelectorAccountMatchConfig

selector_account_match_config = SelectorAccountMatchConfig(
match_expression=sailpoint.v2025.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                    match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                    and = True, )
)

```
[[Back to top]](#) 

