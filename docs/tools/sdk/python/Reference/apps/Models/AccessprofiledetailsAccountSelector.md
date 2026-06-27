---
id: accessprofiledetails-account-selector
title: AccessprofiledetailsAccountSelector
pagination_label: AccessprofiledetailsAccountSelector
sidebar_label: AccessprofiledetailsAccountSelector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessprofiledetailsAccountSelector', 'AccessprofiledetailsAccountSelector'] 
slug: /tools/sdk/python/apps/models/accessprofiledetails-account-selector
tags: ['SDK', 'Software Development Kit', 'AccessprofiledetailsAccountSelector', 'AccessprofiledetailsAccountSelector']
---

# AccessprofiledetailsAccountSelector

How to select account when there are multiple accounts for the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectors** | [**[]Appaccessprofileselector**](appaccessprofileselector) |  | [optional] 
}

## Example

```python
from sailpoint.apps.models.accessprofiledetails_account_selector import AccessprofiledetailsAccountSelector

accessprofiledetails_account_selector = AccessprofiledetailsAccountSelector(
selectors=[
                    sailpoint.apps.models.appaccessprofileselector.appaccessprofileselector(
                        application_id = '2c91808874ff91550175097daaec161c"', 
                        account_match_config = sailpoint.apps.models.appaccessprofileselector_account_match_config.appaccessprofileselector_accountMatchConfig(
                            match_expression = sailpoint.apps.models.appaccessprofileselector_account_match_config_match_expression.appaccessprofileselector_accountMatchConfig_matchExpression(
                                match_terms = [{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}], 
                                and = True, ), ), )
                    ]
)

```
[[Back to top]](#) 

