---
id: v2025-selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Selector', 'V2025Selector'] 
slug: /tools/sdk/python/v2025/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector', 'V2025Selector']
---

# Selector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application id | [optional] 
**account_match_config** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.selector import Selector

selector = Selector(
application_id='2c91808874ff91550175097daaec161c"',
account_match_config=sailpoint.v2025.models.selector_account_match_config.selector_accountMatchConfig(
                    match_expression = sailpoint.v2025.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                        match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                        and = True, ), )
)

```
[[Back to top]](#) 

