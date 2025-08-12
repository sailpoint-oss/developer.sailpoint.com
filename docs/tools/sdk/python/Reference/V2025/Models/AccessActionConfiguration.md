---
id: v2025-access-action-configuration
title: AccessActionConfiguration
pagination_label: AccessActionConfiguration
sidebar_label: AccessActionConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessActionConfiguration', 'V2025AccessActionConfiguration'] 
slug: /tools/sdk/python/v2025/models/access-action-configuration
tags: ['SDK', 'Software Development Kit', 'AccessActionConfiguration', 'V2025AccessActionConfiguration']
---

# AccessActionConfiguration

This is used for access configuration for a lifecycle state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_all_access_enabled** | **bool** | If true, then all accesses are marked for removal. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.access_action_configuration import AccessActionConfiguration

access_action_configuration = AccessActionConfiguration(
remove_all_access_enabled=True
)

```
[[Back to top]](#) 

