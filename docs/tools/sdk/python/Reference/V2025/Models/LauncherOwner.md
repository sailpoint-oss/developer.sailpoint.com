---
id: v2025-launcher-owner
title: LauncherOwner
pagination_label: LauncherOwner
sidebar_label: LauncherOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LauncherOwner', 'V2025LauncherOwner'] 
slug: /tools/sdk/python/v2025/models/launcher-owner
tags: ['SDK', 'Software Development Kit', 'LauncherOwner', 'V2025LauncherOwner']
---

# LauncherOwner

Owner of the Launcher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Owner type | [required]
**id** | **str** | Owner ID | [required]
}

## Example

```python
from sailpoint.v2025.models.launcher_owner import LauncherOwner

launcher_owner = LauncherOwner(
type='IDENTITY',
id='123180847373330f0173c7e1756b6890'
)

```
[[Back to top]](#) 

