---
id: beta-schedule1-months
title: Schedule1Months
pagination_label: Schedule1Months
sidebar_label: Schedule1Months
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule1Months', 'BetaSchedule1Months'] 
slug: /tools/sdk/python/beta/models/schedule1-months
tags: ['SDK', 'Software Development Kit', 'Schedule1Months', 'BetaSchedule1Months']
---

# Schedule1Months


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application id | [optional] 
**account_match_config** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.schedule1_months import Schedule1Months

schedule1_months = Schedule1Months(
application_id='2c91808874ff91550175097daaec161c"',
account_match_config=sailpoint.beta.models.selector_account_match_config.selector_accountMatchConfig(
                    match_expression = sailpoint.beta.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                        match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                        and = True, ), )
)

```
[[Back to top]](#) 

