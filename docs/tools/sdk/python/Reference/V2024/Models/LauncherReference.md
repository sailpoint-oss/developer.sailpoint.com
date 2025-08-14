---
id: v2024-launcher-reference
title: LauncherReference
pagination_label: LauncherReference
sidebar_label: LauncherReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LauncherReference', 'V2024LauncherReference'] 
slug: /tools/sdk/python/v2024/models/launcher-reference
tags: ['SDK', 'Software Development Kit', 'LauncherReference', 'V2024LauncherReference']
---

# LauncherReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WORKFLOW' ] | Type of Launcher reference | [optional] 
**id** | **str** | ID of Launcher reference | [optional] 
}

## Example

```python
from sailpoint.v2024.models.launcher_reference import LauncherReference

launcher_reference = LauncherReference(
type='WORKFLOW',
id='2fd6ff94-2081-4d29-acbc-83a0a2f744a5'
)

```
[[Back to top]](#) 

