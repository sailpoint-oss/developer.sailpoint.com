---
id: dataclassificationsettings
title: Dataclassificationsettings
pagination_label: Dataclassificationsettings
sidebar_label: Dataclassificationsettings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dataclassificationsettings', 'Dataclassificationsettings'] 
slug: /tools/sdk/python/data-access-security/models/dataclassificationsettings
tags: ['SDK', 'Software Development Kit', 'Dataclassificationsettings', 'Dataclassificationsettings']
---

# Dataclassificationsettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to False]
**cluster_id** | **str** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.dataclassificationsettings import Dataclassificationsettings

dataclassificationsettings = Dataclassificationsettings(
is_enabled=True,
cluster_id='cluster-001'
)

```
[[Back to top]](#) 

