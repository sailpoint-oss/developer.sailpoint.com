---
id: python-sdk-patch
title: Updating resources with The Python SDK
pagination_label: Update a resource
sidebar_label: Update a resource
sidebar_position: 3
sidebar_class_name: pythonsdk
keywords: ['python', 'sdk', 'update']
description: Learn how to use the Python SDK to update resources.
slug: /tools/sdk/python/update
tags: ['SDK']
---

You can use the SDK to update resources.

For example, you can run a script to update a work group, also known as a [governance group](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html). 

This example 'update WorkGroup' script updates the description for the work group created in [Create a Resource](./creating-resources.md). Copy it into your Python project to try it out: 

```python
from sailpoint import ApiClient, GovernanceGroupsApi
from sailpoint.governance_groups.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.governance_groups.models.jsonpatchoperation_value import JsonpatchoperationValue
from sailpoint.configuration import Configuration

configuration = Configuration()

api_client = ApiClient(configuration)

workgroups_api_instance = GovernanceGroupsApi(api_client)

workgroup = workgroups_api_instance.list_workgroups_v1(filters='name eq "DB Access Governance Group"')[0]

json_patch_operation = [Jsonpatchoperation(op='replace', path='/description', value=JsonpatchoperationValue('This is an updated description for the workgroup.'))]

try:
    workgroupResponse = workgroups_api_instance.patch_workgroup_v1(workgroup.id, jsonpatchoperation=json_patch_operation)
    print("The response of GovernanceGroupsApi->patch_workgroup_v1:\n")
    print(workgroupResponse)
except Exception as e:
    print("Exception when calling GovernanceGroupsApi->patch_workgroup_v1: %s\n" % e)
```

Run this command to run the code:

```bash
python sdk.py
```

The example uses a PATCH `replace` operation to update the value in the `/description` path to "This is an updated description for the workgroup."

The SDK will return the updated work group with its new description:

```python
The response of GovernanceGroupsApi->patch_workgroup_v1:

id='d287a1e2-81fc-474e-bc0c-155bd8ab0899' 
name='DB Access Governance Group' 
description='This is an updated description for the workgroup.' 
member_count=0 
connection_count=0
owner=WorkgroupdtoOwner(
    type='IDENTITY', 
    id='0003c25c365e492381d4e557b6159f9b', 
    name='Brian Mendoza')
```
