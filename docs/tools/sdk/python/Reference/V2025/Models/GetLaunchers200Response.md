---
id: v2025-get-launchers200-response
title: GetLaunchers200Response
pagination_label: GetLaunchers200Response
sidebar_label: GetLaunchers200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetLaunchers200Response', 'V2025GetLaunchers200Response'] 
slug: /tools/sdk/python/v2025/models/get-launchers200-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchers200Response', 'V2025GetLaunchers200Response']
---

# GetLaunchers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **str** | Pagination marker | [optional] 
**items** | [**[]Launcher**](launcher) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.get_launchers200_response import GetLaunchers200Response

get_launchers200_response = GetLaunchers200Response(
next='',
items=[
                    sailpoint.v2025.models.launcher.Launcher(
                        id = '1b630bed-0941-4792-a712-57a5868ca34d', 
                        created = '2024-04-16T20:07:30.601016489Z', 
                        modified = '2024-04-17T18:02:07.320143194Z', 
                        owner = sailpoint.v2025.models.launcher_owner.Launcher_owner(
                            type = 'IDENTITY', 
                            id = '123180847373330f0173c7e1756b6890', ), 
                        name = 'Group Create', 
                        description = 'Create a new Active Directory Group', 
                        type = 'INTERACTIVE_PROCESS', 
                        disabled = False, 
                        reference = sailpoint.v2025.models.launcher_reference.Launcher_reference(
                            type = 'WORKFLOW', 
                            id = '2fd6ff94-2081-4d29-acbc-83a0a2f744a5', ), 
                        config = '{"workflowId" : "6b42d9be-61b6-46af-827e-ea29ba8aa3d9"}', )
                    ]
)

```
[[Back to top]](#) 

