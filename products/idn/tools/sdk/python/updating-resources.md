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

Here is an example update WorkGroup script which will update the description for the Workgroup created in [Create a Resource](./creating-resources.md):

```python
import sailpoint
import sailpoint.v3
import sailpoint.beta
from sailpoint.beta.models.workgroup_dto import WorkgroupDto
from sailpoint.beta.models.usage_type import UsageType
from sailpoint.beta.models.owner_dto import OwnerDto
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.json_patch_operation_value import JsonPatchOperationValue
from sailpoint.configuration import Configuration

configuration = Configuration()

api_client = sailpoint.v3.ApiClient(configuration)
api_client_beta = sailpoint.beta.ApiClient(configuration)

identities_api_instance = sailpoint.v3.PublicIdentitiesApi(api_client)
workgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)

workgroup = workgroups_api_instance.list_workgroups(filters='name eq "DB Access Governance Group"')[0]

json_patch_operation = [JsonPatchOperation(op='replace', path='/description', value=JsonPatchOperationValue('This is an updated description for the workgroup.'))]

try:
    workgroupResponse = workgroups_api_instance.patch_workgroup(workgroup.id,json_patch_operation=json_patch_operation)
    print("The response of GovernanceGroupsApi->patch_workgroup:\n")
    print(workgroupResponse)
except Exception as e:
    print("Exception when calling GovernanceGroupsApi->patch_workgroup: %s\n" % e)
```

Run this command to run the code:

```bash
python sdk.go
```

The updated WorkGroup will be returned by the SDK:

```python
The response of GovernanceGroupsApi->patch_workgroup:

id='d287a1e2-81fc-474e-bc0c-155bd8ab0899' 
name='DB Access Governance Group' 
description='This is an updated description for the workgroup.' 
member_count=0 
connection_count=0
owner=OwnerDto(
    type='IDENTITY', 
    id='0003c25c365e492381d4e557b6159f9b', 
    name='Brian Mendoza')
```
