---
id: v2025-access-profile-details-account-selector
title: AccessProfileDetailsAccountSelector
pagination_label: AccessProfileDetailsAccountSelector
sidebar_label: AccessProfileDetailsAccountSelector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileDetailsAccountSelector', 'V2025AccessProfileDetailsAccountSelector'] 
slug: /tools/sdk/python/v2025/models/access-profile-details-account-selector
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetailsAccountSelector', 'V2025AccessProfileDetailsAccountSelector']
---

# AccessProfileDetailsAccountSelector

How to select account when there are multiple accounts for the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectors** | [**[]Selector**](selector) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_profile_details_account_selector import AccessProfileDetailsAccountSelector

access_profile_details_account_selector = AccessProfileDetailsAccountSelector(
selectors=[
                    sailpoint.v2025.models.selector.selector(
                        application_id = '2c91808874ff91550175097daaec161c"', 
                        account_match_config = sailpoint.v2025.models.selector_account_match_config.selector_accountMatchConfig(
                            match_expression = sailpoint.v2025.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                                match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                                and = True, ), ), )
                    ]
)

```
[[Back to top]](#) 

