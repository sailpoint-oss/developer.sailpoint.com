---
id: typescript-sdk-patch
title: Updating resources with The TypeScript SDK
pagination_label: Update a resource
sidebar_label: Update a resource
sidebar_position: 3
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'update']
description: Learn how to use the TypeScript SDK to update resources.
slug: /tools/sdk/typescript/update
tags: ['SDK']
---

You can use the SDK to update resources.

Here is an example update WorkGroup script which will update the description for the Workgroup created in [Create a Resource](./creating-resources.md):

```typescript
import {Configuration, GovernanceGroupsBetaApi, GovernanceGroupsBetaApiCreateWorkgroupRequest, GovernanceGroupsBetaApiPatchWorkgroupRequest, PublicIdentitiesApi} from "sailpoint-api-client"

const updateWorkGroup = async () => {
    let apiConfig = new Configuration()
    let api = new GovernanceGroupsBetaApi(apiConfig)

    let workgroup = (await api.listWorkgroups({filters: 'name eq "DB Access Governance Group"'})).data[0]

    if (workgroup.id !== undefined) {
        let updatedWorkgroup: GovernanceGroupsBetaApiPatchWorkgroupRequest = {
            id: workgroup.id,
            jsonPatchOperationBeta: [{
                op: "replace",
                path: "/description",
                value: "This is an updated description for the workgroup."
            }]
        }
        let val = await api.patchWorkgroup(updatedWorkgroup)
        console.log(val.data)
    } else {
        console.log("Workgroup was not found, id is missing for patch request.")
    }
}

updateWorkGroup()
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```

The updated WorkGroup will be returned by the SDK:

```typescript
{
  description: 'This is an updated description for the workgroup.',
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
  created: '2023-12-01T18:14:06Z',
  modified: '2023-12-01T18:14:06Z'
}
```
