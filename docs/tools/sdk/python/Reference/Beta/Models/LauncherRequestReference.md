---
id: beta-launcher-request-reference
title: LauncherRequestReference
pagination_label: LauncherRequestReference
sidebar_label: LauncherRequestReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LauncherRequestReference', 'BetaLauncherRequestReference'] 
slug: /tools/sdk/python/beta/models/launcher-request-reference
tags: ['SDK', 'Software Development Kit', 'LauncherRequestReference', 'BetaLauncherRequestReference']
---

# LauncherRequestReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WORKFLOW' ] | Type of Launcher reference | [required]
**id** | **str** | ID of Launcher reference | [required]
}

## Example

```python
from sailpoint.beta.models.launcher_request_reference import LauncherRequestReference

launcher_request_reference = LauncherRequestReference(
type='WORKFLOW',
id='2fd6ff94-2081-4d29-acbc-83a0a2f744a5'
)

```
[[Back to top]](#) 

