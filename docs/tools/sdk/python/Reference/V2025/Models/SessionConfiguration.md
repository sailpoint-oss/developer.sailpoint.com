---
id: v2025-session-configuration
title: SessionConfiguration
pagination_label: SessionConfiguration
sidebar_label: SessionConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SessionConfiguration', 'V2025SessionConfiguration'] 
slug: /tools/sdk/python/v2025/models/session-configuration
tags: ['SDK', 'Software Development Kit', 'SessionConfiguration', 'V2025SessionConfiguration']
---

# SessionConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_idle_time** | **int** | The maximum time in minutes a session can be idle. | [optional] 
**remember_me** | **bool** | Denotes if 'remember me' is enabled. | [optional] [default to False]
**max_session_time** | **int** | The maximum allowable session time in minutes. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.session_configuration import SessionConfiguration

session_configuration = SessionConfiguration(
max_idle_time=15,
remember_me=True,
max_session_time=45
)

```
[[Back to top]](#) 

