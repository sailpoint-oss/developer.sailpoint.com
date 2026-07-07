---
id: clientlogconfigurationdurationminutes
title: Clientlogconfigurationdurationminutes
pagination_label: Clientlogconfigurationdurationminutes
sidebar_label: Clientlogconfigurationdurationminutes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Clientlogconfigurationdurationminutes', 'Clientlogconfigurationdurationminutes'] 
slug: /tools/sdk/python/managed-clusters/models/clientlogconfigurationdurationminutes
tags: ['SDK', 'Software Development Kit', 'Clientlogconfigurationdurationminutes', 'Clientlogconfigurationdurationminutes']
---

# Clientlogconfigurationdurationminutes

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**duration_minutes** | **int** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**root_level** | [**Standardlevel**](standardlevel) |  | [required]
**log_levels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.clientlogconfigurationdurationminutes import Clientlogconfigurationdurationminutes

clientlogconfigurationdurationminutes = Clientlogconfigurationdurationminutes(
client_id='3a38a51992e8445ab51a549c0a70ee66',
duration_minutes=120,
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

