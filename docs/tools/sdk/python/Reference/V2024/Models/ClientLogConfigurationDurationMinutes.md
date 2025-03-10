---
id: v2024-client-log-configuration-duration-minutes
title: ClientLogConfigurationDurationMinutes
pagination_label: ClientLogConfigurationDurationMinutes
sidebar_label: ClientLogConfigurationDurationMinutes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClientLogConfigurationDurationMinutes', 'V2024ClientLogConfigurationDurationMinutes'] 
slug: /tools/sdk/python/v2024/models/client-log-configuration-duration-minutes
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationDurationMinutes', 'V2024ClientLogConfigurationDurationMinutes']
---

# ClientLogConfigurationDurationMinutes

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**duration_minutes** | **int** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**root_level** | [**StandardLevel**](standard-level) |  | [required]
**log_levels** | [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 
}

## Example

```python
from sailpoint.v2024.models.client_log_configuration_duration_minutes import ClientLogConfigurationDurationMinutes

client_log_configuration_duration_minutes = ClientLogConfigurationDurationMinutes(
client_id='3a38a51992e8445ab51a549c0a70ee66',
duration_minutes=120,
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

