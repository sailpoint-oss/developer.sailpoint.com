---
id: v2024-schedule2-days
title: Schedule2Days
pagination_label: Schedule2Days
sidebar_label: Schedule2Days
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2Days', 'V2024Schedule2Days'] 
slug: /tools/sdk/python/v2024/models/schedule2-days
tags: ['SDK', 'Software Development Kit', 'Schedule2Days', 'V2024Schedule2Days']
---

# Schedule2Days


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application id | [optional] 
**account_match_config** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.schedule2_days import Schedule2Days

schedule2_days = Schedule2Days(
application_id='2c91808874ff91550175097daaec161c"',
account_match_config=sailpoint.v2024.models.selector_account_match_config.selector_accountMatchConfig(
                    match_expression = sailpoint.v2024.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                        match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                        and = True, ), )
)

```
[[Back to top]](#) 

