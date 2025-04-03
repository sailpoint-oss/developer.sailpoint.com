---
id: v2025-client-log-configuration-expiration
title: ClientLogConfigurationExpiration
pagination_label: ClientLogConfigurationExpiration
sidebar_label: ClientLogConfigurationExpiration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ClientLogConfigurationExpiration', 'V2025ClientLogConfigurationExpiration'] 
slug: /tools/sdk/python/v2025/models/client-log-configuration-expiration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationExpiration', 'V2025ClientLogConfigurationExpiration']
---

# ClientLogConfigurationExpiration

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**expiration** | **datetime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**root_level** | [**StandardLevel**](standard-level) |  | [required]
**log_levels** | [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 
}

## Example

```python
from sailpoint.v2025.models.client_log_configuration_expiration import ClientLogConfigurationExpiration

client_log_configuration_expiration = ClientLogConfigurationExpiration(
client_id='3a38a51992e8445ab51a549c0a70ee66',
expiration='2024-11-06T01:31:08.013164Z',
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

