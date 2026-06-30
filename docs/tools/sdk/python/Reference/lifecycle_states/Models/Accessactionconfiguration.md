---
id: accessactionconfiguration
title: Accessactionconfiguration
pagination_label: Accessactionconfiguration
sidebar_label: Accessactionconfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessactionconfiguration', 'Accessactionconfiguration'] 
slug: /tools/sdk/python/lifecycle-states/models/accessactionconfiguration
tags: ['SDK', 'Software Development Kit', 'Accessactionconfiguration', 'Accessactionconfiguration']
---

# Accessactionconfiguration

This is used for access configuration for a lifecycle state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_all_access_enabled** | **bool** | If true, then all accesses are marked for removal. | [optional] [default to False]
}

## Example

```python
from sailpoint.lifecycle_states.models.accessactionconfiguration import Accessactionconfiguration

accessactionconfiguration = Accessactionconfiguration(
remove_all_access_enabled=True
)

```
[[Back to top]](#) 

