---
id: sessionconfiguration
title: Sessionconfiguration
pagination_label: Sessionconfiguration
sidebar_label: Sessionconfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sessionconfiguration', 'Sessionconfiguration'] 
slug: /tools/sdk/python/global-tenant-security-settings/models/sessionconfiguration
tags: ['SDK', 'Software Development Kit', 'Sessionconfiguration', 'Sessionconfiguration']
---

# Sessionconfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_idle_time** | **int** | The maximum time in minutes a session can be idle. | [optional] 
**remember_me** | **bool** | Denotes if 'remember me' is enabled. | [optional] [default to False]
**max_session_time** | **int** | The maximum allowable session time in minutes. | [optional] 
}

## Example

```python
from sailpoint.global_tenant_security_settings.models.sessionconfiguration import Sessionconfiguration

sessionconfiguration = Sessionconfiguration(
max_idle_time=15,
remember_me=True,
max_session_time=45
)

```
[[Back to top]](#) 

