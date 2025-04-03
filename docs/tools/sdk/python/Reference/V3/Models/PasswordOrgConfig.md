---
id: password-org-config
title: PasswordOrgConfig
pagination_label: PasswordOrgConfig
sidebar_label: PasswordOrgConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordOrgConfig', 'PasswordOrgConfig'] 
slug: /tools/sdk/python/v3/models/password-org-config
tags: ['SDK', 'Software Development Kit', 'PasswordOrgConfig', 'PasswordOrgConfig']
---

# PasswordOrgConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_instructions_enabled** | **bool** | Indicator whether custom password instructions feature is enabled. The default value is false. | [optional] [default to False]
**digit_token_enabled** | **bool** | Indicator whether \"digit token\" feature is enabled. The default value is false. | [optional] [default to False]
**digit_token_duration_minutes** | **int** | The duration of \"digit token\" in minutes. The default value is 5. | [optional] [default to 5]
**digit_token_length** | **int** | The length of \"digit token\". The default value is 6. | [optional] [default to 6]
}

## Example

```python
from sailpoint.v3.models.password_org_config import PasswordOrgConfig

password_org_config = PasswordOrgConfig(
custom_instructions_enabled=True,
digit_token_enabled=True,
digit_token_duration_minutes=10,
digit_token_length=9
)

```
[[Back to top]](#) 

