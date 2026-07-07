---
id: appaccessprofileselector-account-match-config-match-expression
title: AppaccessprofileselectorAccountMatchConfigMatchExpression
pagination_label: AppaccessprofileselectorAccountMatchConfigMatchExpression
sidebar_label: AppaccessprofileselectorAccountMatchConfigMatchExpression
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AppaccessprofileselectorAccountMatchConfigMatchExpression', 'AppaccessprofileselectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/python/apps/models/appaccessprofileselector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'AppaccessprofileselectorAccountMatchConfigMatchExpression', 'AppaccessprofileselectorAccountMatchConfigMatchExpression']
---

# AppaccessprofileselectorAccountMatchConfigMatchExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_terms** | [**[]Matchterm**](matchterm) |  | [optional] 
**var_and** | **bool** | If it is AND operators for match terms | [optional] [default to True]
}

## Example

```python
from sailpoint.apps.models.appaccessprofileselector_account_match_config_match_expression import AppaccessprofileselectorAccountMatchConfigMatchExpression

appaccessprofileselector_account_match_config_match_expression = AppaccessprofileselectorAccountMatchConfigMatchExpression(
match_terms=[{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}],
var_and=True
)

```
[[Back to top]](#) 

