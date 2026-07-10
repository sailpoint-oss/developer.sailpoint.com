---
id: python-sdk-create
title: Creating resources with The Python SDK
pagination_label: Create a resource
sidebar_label: Create a resource
sidebar_position: 2
sidebar_class_name: pythonsdk
keywords: ['python', 'sdk', 'create']
description: Learn how to use the Python SDK to create new resources.
slug: /tools/sdk/python/create
tags: ['SDK']
---

You can use the SDK to create new resources.

For example, you can run a script to create a work group, also known as a [governance group](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html). 

Copy this 'create WorkGroup' script into your Python project to try it out:

```python showLineNumbers
from sailpoint import ApiClient, PublicIdentitiesApi, GovernanceGroupsApi
from sailpoint.governance_groups.models.workgroupdto import Workgroupdto
from sailpoint.governance_groups.models.workgroupdto_owner import WorkgroupdtoOwner
from sailpoint.configuration import Configuration

configuration = Configuration()

api_client = ApiClient(configuration)

identities_api_instance = PublicIdentitiesApi(api_client)
workgroups_api_instance = GovernanceGroupsApi(api_client)

identity = identities_api_instance.get_public_identities_v1(limit=1)[0]

workgroup = Workgroupdto(name='DB Access Governance Group', 
                         description='Description of the Governance Group', 
                         owner=WorkgroupdtoOwner(id=identity.id, 
                                                 name=identity.name, 
                                                 type='IDENTITY'))


try:
    workgroupResponse = workgroups_api_instance.create_workgroup_v1(workgroup)
    print("The response of GovernanceGroupsApi->create_workgroup_v1:\n")
    print(workgroupResponse)
except Exception as e:
    print("Exception when calling GovernanceGroupsApi->create_workgroup_v1: %s\n" % e)
```

Run this command to run the code:

```bash
python sdk.py
```

The example uses the `get_public_identities_v1` method from the `PublicIdentitiesApi` to pull an identity needed to be the owner of the work group.

The `create_workgroup_v1` request is initialized on lines 14-18, using the identity's `name` and `id` in the owner object.

The SDK will return the created work group:

```bash
id='d287a1e2-81fc-474e-bc0c-155bd8ab0899' 
name='DB Access Governance Group' 
description='Description of the Governance Group' 
member_count=0 
connection_count=0
owner=WorkgroupdtoOwner(type='IDENTITY', 
                        id='0003c25c365e492381d4e557b6159f9b', 
                        name='Brian Mendoza')
```
