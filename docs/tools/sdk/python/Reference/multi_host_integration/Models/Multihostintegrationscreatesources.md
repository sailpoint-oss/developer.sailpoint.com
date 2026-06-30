---
id: multihostintegrationscreatesources
title: Multihostintegrationscreatesources
pagination_label: Multihostintegrationscreatesources
sidebar_label: Multihostintegrationscreatesources
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Multihostintegrationscreatesources', 'Multihostintegrationscreatesources'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrationscreatesources
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationscreatesources', 'Multihostintegrationscreatesources']
---

# Multihostintegrationscreatesources

This represents sources to be created of same type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Source's human-readable name. | [required]
**description** | **str** | Source's human-readable description. | [optional] 
**connector_attributes** | **map[string]object** | Connector specific configuration. This configuration will differ from type to type. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrationscreatesources import Multihostintegrationscreatesources

multihostintegrationscreatesources = Multihostintegrationscreatesources(
name='My Source',
description='This is the corporate directory.',
connector_attributes={"authType":"SQLAuthentication","url":"jdbc:sqlserver://178.18.41.118:1433","user":"username","driverClass":"com.microsoft.sqlserver.jdbc.SQLServerDriver","maxSourcesPerAggGroup":10,"maxAllowedSources":300}
)

```
[[Back to top]](#) 

