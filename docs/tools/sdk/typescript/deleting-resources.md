---
id: typescript-sdk-delete
title: Deleting resources with The TypeScript SDK
pagination_label: Delete a resource
sidebar_label: Delete a resource
sidebar_position: 4
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'delete']
description: Learn how to use the TypeScript SDK to delete resources.
slug: /tools/sdk/typescript/delete
tags: ['SDK']
---

You can use the SDK to delete resources.

Here is an example script that searches for the Workgroup created in [Create a resource](./creating-resources.md) by name and calls the delete method to remove it from your environment.

```typescript
import {Configuration, GovernanceGroupsBetaApi, GovernanceGroupsBetaApiCreateWorkgroupRequest, GovernanceGroupsBetaApiPatchWorkgroupRequest, PublicIdentitiesApi} from "sailpoint-api-client"

const deleteWorkgroup = async () => {
    let apiConfig = new Configuration()
    let api = new GovernanceGroupsBetaApi(apiConfig)

    let workgroup = (await api.listWorkgroups({filters: 'name eq "DB Access Governance Group"'})).data[0]

    if (workgroup.id !== undefined) {
        let deletionStatus = (await api.deleteWorkgroup({id: workgroup.id})).status
        console.log(deletionStatus)
    } else {
        console.log("Workgroup was not found, id is missing for delete request.")
    }
}

deleteWorkgroup()
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```

The deletionStatus is returned by the SDK with a value of 204.
