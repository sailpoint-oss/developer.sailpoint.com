# Deleting resources with The TypeScript SDK

You can use the SDK to delete resources.

Here is an example script that searches for the Workgroup created in [Create a resource](./creating-resources.md) by name and calls the delete method to remove it from your environment.

```typescript
import {
  Configuration,
  GovernanceGroupsApi,
  PublicIdentitiesApi,
} from 'sailpoint-api-client';

const deleteWorkgroup = async () => {
  let apiConfig = new Configuration();
  let api = new GovernanceGroupsApi(apiConfig);

  let workgroup = (
    await api.listWorkgroupsV1({filters: 'name eq "DB Access Governance Group"'})
  ).data[0];

  if (workgroup.id !== undefined) {
    let deletionStatus = (await api.deleteWorkgroupV1({id: workgroup.id})).status;
    console.log(deletionStatus);
  } else {
    console.log('Workgroup was not found, id is missing for delete request.');
  }
};

deleteWorkgroup();
```

Run this command to run the code:

```bash
bun src/index.ts
```

The deletionStatus is returned by the SDK with a value of 204.
