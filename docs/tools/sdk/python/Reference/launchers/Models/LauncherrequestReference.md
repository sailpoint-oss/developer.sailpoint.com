---
id: launcherrequest-reference
title: LauncherrequestReference
pagination_label: LauncherrequestReference
sidebar_label: LauncherrequestReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LauncherrequestReference', 'LauncherrequestReference'] 
slug: /tools/sdk/python/launchers/models/launcherrequest-reference
tags: ['SDK', 'Software Development Kit', 'LauncherrequestReference', 'LauncherrequestReference']
---

# LauncherrequestReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WORKFLOW' ] | Type of Launcher reference | [required]
**id** | **str** | ID of Launcher reference | [required]
}

## Example

```python
from sailpoint.launchers.models.launcherrequest_reference import LauncherrequestReference

launcherrequest_reference = LauncherrequestReference(
type='WORKFLOW',
id='2fd6ff94-2081-4d29-acbc-83a0a2f744a5'
)

```
[[Back to top]](#) 

