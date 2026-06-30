---
id: appaccessprofileselector-account-match-config
title: AppaccessprofileselectorAccountMatchConfig
pagination_label: AppaccessprofileselectorAccountMatchConfig
sidebar_label: AppaccessprofileselectorAccountMatchConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AppaccessprofileselectorAccountMatchConfig', 'AppaccessprofileselectorAccountMatchConfig'] 
slug: /tools/sdk/python/apps/models/appaccessprofileselector-account-match-config
tags: ['SDK', 'Software Development Kit', 'AppaccessprofileselectorAccountMatchConfig', 'AppaccessprofileselectorAccountMatchConfig']
---

# AppaccessprofileselectorAccountMatchConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_expression** | [**AppaccessprofileselectorAccountMatchConfigMatchExpression**](appaccessprofileselector-account-match-config-match-expression) |  | [optional] 
}

## Example

```python
from sailpoint.apps.models.appaccessprofileselector_account_match_config import AppaccessprofileselectorAccountMatchConfig

appaccessprofileselector_account_match_config = AppaccessprofileselectorAccountMatchConfig(
match_expression=sailpoint.apps.models.appaccessprofileselector_account_match_config_match_expression.appaccessprofileselector_accountMatchConfig_matchExpression(
                    match_terms = [{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}], 
                    and = True, )
)

```
[[Back to top]](#) 

