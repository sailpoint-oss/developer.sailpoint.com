---
id: lockoutconfiguration
title: Lockoutconfiguration
pagination_label: Lockoutconfiguration
sidebar_label: Lockoutconfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Lockoutconfiguration', 'Lockoutconfiguration'] 
slug: /tools/sdk/python/global-tenant-security-settings/models/lockoutconfiguration
tags: ['SDK', 'Software Development Kit', 'Lockoutconfiguration', 'Lockoutconfiguration']
---

# Lockoutconfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_attempts** | **int** | The maximum attempts allowed before lockout occurs. | [optional] 
**lockout_duration** | **int** | The total time in minutes a user will be locked out. | [optional] 
**lockout_window** | **int** | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [optional] 
}

## Example

```python
from sailpoint.global_tenant_security_settings.models.lockoutconfiguration import Lockoutconfiguration

lockoutconfiguration = Lockoutconfiguration(
maximum_attempts=5,
lockout_duration=15,
lockout_window=5
)

```
[[Back to top]](#) 

