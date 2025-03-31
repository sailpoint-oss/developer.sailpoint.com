---
id: beta-client-log-configuration
title: ClientLogConfiguration
pagination_label: ClientLogConfiguration
sidebar_label: ClientLogConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClientLogConfiguration', 'BetaClientLogConfiguration'] 
slug: /tools/sdk/python/beta/models/client-log-configuration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfiguration', 'BetaClientLogConfiguration']
---

# ClientLogConfiguration

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**duration_minutes** | **int** | Duration in minutes for log configuration to remain in effect before resetting to defaults | [required]
**expiration** | **datetime** | Expiration date-time of the log configuration request | [optional] 
**root_level** | [**StandardLevel**](standard-level) |  | [required]
**log_levels** | [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 
}

## Example

```python
from sailpoint.beta.models.client_log_configuration import ClientLogConfiguration

client_log_configuration = ClientLogConfiguration(
client_id='aClientId',
duration_minutes=120,
expiration='2020-12-15T19:13:36.079Z',
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

