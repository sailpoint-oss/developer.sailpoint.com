---
id: launcher-reference
title: LauncherReference
pagination_label: LauncherReference
sidebar_label: LauncherReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LauncherReference', 'LauncherReference'] 
slug: /tools/sdk/python/launchers/models/launcher-reference
tags: ['SDK', 'Software Development Kit', 'LauncherReference', 'LauncherReference']
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
from sailpoint.launchers.models.launcher_reference import LauncherReference

launcher_reference = LauncherReference(
type='WORKFLOW',
id='2fd6ff94-2081-4d29-acbc-83a0a2f744a5'
)

```
[[Back to top]](#) 

