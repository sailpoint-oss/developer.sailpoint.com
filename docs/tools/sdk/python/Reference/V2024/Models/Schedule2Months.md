---
id: v2024-schedule2-months
title: Schedule2Months
pagination_label: Schedule2Months
sidebar_label: Schedule2Months
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2Months', 'V2024Schedule2Months'] 
slug: /tools/sdk/python/v2024/models/schedule2-months
tags: ['SDK', 'Software Development Kit', 'Schedule2Months', 'V2024Schedule2Months']
---

# Schedule2Months


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application id | [optional] 
**account_match_config** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.schedule2_months import Schedule2Months

schedule2_months = Schedule2Months(
application_id='2c91808874ff91550175097daaec161c"',
account_match_config=sailpoint.v2024.models.selector_account_match_config.selector_accountMatchConfig(
                    match_expression = sailpoint.v2024.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                        match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                        and = True, ), )
)

```
[[Back to top]](#) 

