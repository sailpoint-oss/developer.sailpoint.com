---
id: get-launchers-v1200-response
title: GetLaunchersV1200Response
pagination_label: GetLaunchersV1200Response
sidebar_label: GetLaunchersV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetLaunchersV1200Response', 'GetLaunchersV1200Response'] 
slug: /tools/sdk/python/launchers/models/get-launchers-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchersV1200Response', 'GetLaunchersV1200Response']
---

# GetLaunchersV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **str** | Pagination marker | [optional] 
**items** | [**[]Launcher**](launcher) |  | [optional] 
}

## Example

```python
from sailpoint.launchers.models.get_launchers_v1200_response import GetLaunchersV1200Response

get_launchers_v1200_response = GetLaunchersV1200Response(
next='',
items=[
                    sailpoint.launchers.models.launcher.Launcher(
                        id = '1b630bed-0941-4792-a712-57a5868ca34d', 
                        created = '2024-04-16T20:07:30.601016489Z', 
                        modified = '2024-04-17T18:02:07.320143194Z', 
                        owner = sailpoint.launchers.models.launcher_owner.launcher_owner(
                            type = 'IDENTITY', 
                            id = '123180847373330f0173c7e1756b6890', ), 
                        name = 'Group Create', 
                        description = 'Create a new Active Directory Group', 
                        type = 'INTERACTIVE_PROCESS', 
                        disabled = False, 
                        reference = sailpoint.launchers.models.launcher_reference.launcher_reference(
                            type = 'WORKFLOW', 
                            id = '2fd6ff94-2081-4d29-acbc-83a0a2f744a5', ), 
                        config = '{"workflowId" : "6b42d9be-61b6-46af-827e-ea29ba8aa3d9"}', )
                    ]
)

```
[[Back to top]](#) 

