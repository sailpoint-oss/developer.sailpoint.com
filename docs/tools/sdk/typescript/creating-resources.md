---
id: typescript-sdk-create
title: Creating resources with The TypeScript SDK
pagination_label: Create a resource
sidebar_label: Create a resource
sidebar_position: 2
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'create']
description: Learn how to use the TypeScript SDK to create new resources.
slug: /tools/sdk/typescript/create
tags: ['SDK']
---

You can use the SDK to create new resources.

Here is an example create workgroup script you can copy into your typescript project to try it out:

```typescript showLineNumbers
import {
  Configuration,
  GovernanceGroupsApi,
  PublicIdentitiesApi,
} from 'sailpoint-api-client';
import {GovernanceGroupsApiCreateWorkgroupV1Request} from 'sailpoint-api-client/dist/governance_groups/api';

const createWorkGroup = async () => {
  let apiConfig = new Configuration();
  let identitiesApi = new PublicIdentitiesApi(apiConfig);

  let identity = (await identitiesApi.getPublicIdentitiesV1({limit: 1})).data[0];

  let api = new GovernanceGroupsApi(apiConfig);
  let workgroup: GovernanceGroupsApiCreateWorkgroupV1Request = {
    workgroupdto: {
      name: 'DB Access Governance Group',
      description: 'Description of the Governance Group',
      owner: {
        id: identity.id,
        type: 'IDENTITY',
        name: identity.name,
      },
    },
  };

  let val = await api.createWorkgroupV1(workgroup);
  console.log(val.data);
};

createWorkGroup();
```

Run this command to run the code:

```bash
bun src/index.ts
```

The example uses the `getPublicIdentitiesV1` method from the `PublicIdentitiesApi` to pull an identity needed to be the owner of the Workgroup.

The create workgroup request is initialized on lines 15-25 using the identity's name and id in the owner object.

The WorkGroup will be returned by the SDK:

```typescript
{
  description: 'Description of the Governance Group',
  owner: {
    displayName: 'Brian Mendoza',
    emailAddress: null,
    type: 'IDENTITY',
    id: '0003c25c365e492381d4e557b6159f9b',
    name: 'Brian Mendoza'
  },
  memberCount: 0,
  connectionCount: 0,
  id: '541ded73-d4b4-41d6-a10c-8085c02815bb',
  name: 'DB Access Governance Group',
  created: null,
  modified: null
}
```
