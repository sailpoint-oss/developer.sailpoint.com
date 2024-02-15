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

Here is an example create workgroup script from the beta APIs you can copy into your python project to try it out:

```python showLineNumbers
import sailpoint
import sailpoint.v3
import sailpoint.beta
from sailpoint.beta.models.workgroup_dto import WorkgroupDto
from sailpoint.beta.models.owner_dto import OwnerDto
from sailpoint.configuration import Configuration

configuration = Configuration()

api_client = sailpoint.v3.ApiClient(configuration)
api_client_beta = sailpoint.beta.ApiClient(configuration)

identities_api_instance = sailpoint.v3.PublicIdentitiesApi(api_client)
workgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)

identity = identities_api_instance.get_public_identities(limit=1)[0]

workgroup = WorkgroupDto(name='DB Access Governance Group', 
                         description='Description of the Governance Group', 
                         owner=OwnerDto(id=identity.id, 
                                        name=identity.name, 
                                        type='IDENTITY'))


try:
    workgroupResponse = workgroups_api_instance.create_workgroup(workgroup)
    print("The response of GovernanceGroupsApi->create_workgroup:\n")
    print(workgroupResponse)
except Exception as e:
    print("Exception when calling GovernanceGroupsApi->create_workgroup: %s\n" % e)
```

Run this command to run the code:

```bash
python sdk.py
```

The example uses the `getPublicIdentities` method from the `PublicIdentitiesApi` to pull an identity needed to be the owner of the Workgroup.

The create workgroup request is initialized on lines 18-22 using the identity's name and id in the owner object.

The WorkGroup will be returned by the SDK:

```bash
id='d287a1e2-81fc-474e-bc0c-155bd8ab0899' 
name='DB Access Governance Group' 
description='Description of the Governance Group' 
member_count=0 
connection_count=0
owner=OwnerDto(type='IDENTITY', 
               id='0003c25c365e492381d4e557b6159f9b', 
               name='Brian Mendoza')
```
