---
id: v2024-put-client-log-configuration-request
title: PutClientLogConfigurationRequest
pagination_label: PutClientLogConfigurationRequest
sidebar_label: PutClientLogConfigurationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutClientLogConfigurationRequest', 'V2024PutClientLogConfigurationRequest'] 
slug: /tools/sdk/python/v2024/models/put-client-log-configuration-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationRequest', 'V2024PutClientLogConfigurationRequest']
---

# PutClientLogConfigurationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**duration_minutes** | **int** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**root_level** | [**StandardLevel**](standard-level) |  | [required]
**log_levels** | [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 
**expiration** | **datetime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.put_client_log_configuration_request import PutClientLogConfigurationRequest

put_client_log_configuration_request = PutClientLogConfigurationRequest(
client_id='3a38a51992e8445ab51a549c0a70ee66',
duration_minutes=120,
root_level='INFO',
log_levels=INFO,
expiration='2024-11-06T01:31:08.013164Z'
)

```
[[Back to top]](#) 

