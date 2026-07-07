---
id: put-client-log-configuration-v1-request
title: PutClientLogConfigurationV1Request
pagination_label: PutClientLogConfigurationV1Request
sidebar_label: PutClientLogConfigurationV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutClientLogConfigurationV1Request', 'PutClientLogConfigurationV1Request'] 
slug: /tools/sdk/python/managed-clusters/models/put-client-log-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationV1Request', 'PutClientLogConfigurationV1Request']
---

# PutClientLogConfigurationV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**duration_minutes** | **int** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**root_level** | [**Standardlevel**](standardlevel) |  | [required]
**log_levels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 
**expiration** | **datetime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.put_client_log_configuration_v1_request import PutClientLogConfigurationV1Request

put_client_log_configuration_v1_request = PutClientLogConfigurationV1Request(
client_id='3a38a51992e8445ab51a549c0a70ee66',
duration_minutes=120,
root_level='INFO',
log_levels=INFO,
expiration='2024-11-06T01:31:08.013164Z'
)

```
[[Back to top]](#) 

