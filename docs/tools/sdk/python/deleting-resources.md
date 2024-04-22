---
id: python-sdk-delete
title: Deleting resources with The Python SDK
pagination_label: Delete a resource
sidebar_label: Delete a resource
sidebar_position: 4
sidebar_class_name: pythonsdk
keywords: ['python', 'sdk', 'delete']
description: Learn how to use the Python SDK to delete resources.
slug: /tools/sdk/python/delete
tags: ['SDK']
---

You can use the SDK to delete resources.

For example, you can run a script that searches by name for a created work group, also known as a [governance group](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html), and calls the delete method to remove it from your environment. 

This script searches by name for the work group created in the example in [Creating resources](./creating-resources.md) and calls the delete method to remove it from your environment. Copy the script into your Python project to try it out: 

```python
import sailpoint
import sailpoint.beta
from sailpoint.beta.models.workgroup_dto import WorkgroupDto
from sailpoint.beta.models.usage_type import UsageType
from sailpoint.beta.models.owner_dto import OwnerDto
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.beta.models.json_patch_operation_value import JsonPatchOperationValue
from sailpoint.configuration import Configuration

configuration = Configuration()

api_client_beta = sailpoint.beta.ApiClient(configuration)

workgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)

workgroup = workgroups_api_instance.list_workgroups(filters='name eq "DB Access Governance Group"')[0]


try:
    workgroupResponse = workgroups_api_instance.delete_workgroup_with_http_info(workgroup.id)
    print("The response of GovernanceGroupsApi->delete_workgroup:\n")
    print(workgroupResponse)
except Exception as e:
    print("Exception when calling GovernanceGroupsApi->delete_workgroup: %s\n" % e)
```

Run this command to run the code:

```bash
python sdk.py
```

The SDK returns the `deletionStatus` with a value of 204.

```python
The response of GovernanceGroupsApi->patch_workgroup:

status_code=204 
headers={'Date': 'Wed, 31 Jan 2024 18:37:33 GMT', 'Connection': 'keep-alive', 'Server': 'nginx', 'Vary': 'Access-Control-Request-Headers', 'Cache-Control': 'no-cache, no-store, must-revalidate', 'SLPT-Request-ID': 'acdbe637fc044befbfe0ce16ad2224ad', 'Access-Control-Expose-Headers': 'Retry-After,Connection,SLPT-Request-ID,Date,X-Zuul-ServiceId', 'X-Robots-Tag': 'noindex'} 
data=None 
raw_data=b''s
```
