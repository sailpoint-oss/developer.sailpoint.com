---
id: beta-launcher
title: Launcher
pagination_label: Launcher
sidebar_label: Launcher
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Launcher', 'BetaLauncher'] 
slug: /tools/sdk/python/beta/models/launcher
tags: ['SDK', 'Software Development Kit', 'Launcher', 'BetaLauncher']
---

# Launcher


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the Launcher | [required]
**created** | **datetime** | Date the Launcher was created | [required]
**modified** | **datetime** | Date the Launcher was last modified | [required]
**owner** | [**LauncherOwner**](launcher-owner) |  | [required]
**name** | **str** | Name of the Launcher, limited to 255 characters | [required]
**description** | **str** | Description of the Launcher, limited to 2000 characters | [required]
**type** |  **Enum** [  'INTERACTIVE_PROCESS' ] | Launcher type | [required]
**disabled** | **bool** | State of the Launcher | [required]
**reference** | [**LauncherReference**](launcher-reference) |  | [optional] 
**config** | **str** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [required]
}

## Example

```python
from sailpoint.beta.models.launcher import Launcher

launcher = Launcher(
id='1b630bed-0941-4792-a712-57a5868ca34d',
created='2024-04-16T20:07:30.601016489Z',
modified='2024-04-17T18:02:07.320143194Z',
owner=sailpoint.beta.models.launcher_owner.Launcher_owner(
                    type = 'IDENTITY', 
                    id = '123180847373330f0173c7e1756b6890', ),
name='Group Create',
description='Create a new Active Directory Group',
type='INTERACTIVE_PROCESS',
disabled=False,
reference=sailpoint.beta.models.launcher_reference.Launcher_reference(
                    type = 'WORKFLOW', 
                    id = '2fd6ff94-2081-4d29-acbc-83a0a2f744a5', ),
config='{"workflowId" : "6b42d9be-61b6-46af-827e-ea29ba8aa3d9"}'
)

```
[[Back to top]](#) 

