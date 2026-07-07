---
id: basesettings
title: Basesettings
pagination_label: Basesettings
sidebar_label: Basesettings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Basesettings', 'Basesettings'] 
slug: /tools/sdk/python/data-access-security/models/basesettings
tags: ['SDK', 'Software Development Kit', 'Basesettings', 'Basesettings']
---

# Basesettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to False]
**cluster_id** | **str** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.basesettings import Basesettings

basesettings = Basesettings(
is_enabled=True,
cluster_id='cluster-001'
)

```
[[Back to top]](#) 

