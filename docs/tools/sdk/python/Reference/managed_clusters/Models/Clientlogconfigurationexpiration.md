---
id: clientlogconfigurationexpiration
title: Clientlogconfigurationexpiration
pagination_label: Clientlogconfigurationexpiration
sidebar_label: Clientlogconfigurationexpiration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Clientlogconfigurationexpiration', 'Clientlogconfigurationexpiration'] 
slug: /tools/sdk/python/managed-clusters/models/clientlogconfigurationexpiration
tags: ['SDK', 'Software Development Kit', 'Clientlogconfigurationexpiration', 'Clientlogconfigurationexpiration']
---

# Clientlogconfigurationexpiration

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**expiration** | **datetime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**root_level** | [**Standardlevel**](standardlevel) |  | [required]
**log_levels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.clientlogconfigurationexpiration import Clientlogconfigurationexpiration

clientlogconfigurationexpiration = Clientlogconfigurationexpiration(
client_id='3a38a51992e8445ab51a549c0a70ee66',
expiration='2024-11-06T01:31:08.013164Z',
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

