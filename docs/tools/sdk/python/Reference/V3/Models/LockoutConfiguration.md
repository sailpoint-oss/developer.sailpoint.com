---
id: lockout-configuration
title: LockoutConfiguration
pagination_label: LockoutConfiguration
sidebar_label: LockoutConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LockoutConfiguration', 'LockoutConfiguration'] 
slug: /tools/sdk/python/v3/models/lockout-configuration
tags: ['SDK', 'Software Development Kit', 'LockoutConfiguration', 'LockoutConfiguration']
---

# LockoutConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_attempts** | **int** | The maximum attempts allowed before lockout occurs. | [optional] 
**lockout_duration** | **int** | The total time in minutes a user will be locked out. | [optional] 
**lockout_window** | **int** | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [optional] 
}

## Example

```python
from sailpoint.v3.models.lockout_configuration import LockoutConfiguration

lockout_configuration = LockoutConfiguration(
maximum_attempts=5,
lockout_duration=15,
lockout_window=5
)

```
[[Back to top]](#) 

