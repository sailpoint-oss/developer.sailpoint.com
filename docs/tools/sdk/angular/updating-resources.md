---
id: angular-sdk-patch
title: Updating resources with the Angular SDK
pagination_label: Update a resource
sidebar_label: Update a resource
sidebar_position: 3
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'update']
description: Learn how to use the Angular SDK to update resources.
slug: /tools/sdk/angular/update
tags: ['SDK']
---

You can use the SDK to update resources.

Here is an example component that updates the description of the governance group created in [Create a resource](./creating-resources.md):

```typescript title="src/app/update-group.component.ts"
import {Component, inject} from '@angular/core';
import {switchMap, throwError} from 'rxjs';
import {
  GovernanceGroupsService,
  JsonPatchOperationOpEnum,
} from 'sailpoint-angular-sdk/governance_groups';

@Component({
  selector: 'app-update-group',
  template: `<button (click)="updateWorkgroup()">Update group</button>`,
})
export class UpdateGroupComponent {
  private readonly groups = inject(GovernanceGroupsService);

  updateWorkgroup(): void {
    this.groups
      .listWorkgroupsV1({filters: 'name eq "DB Access Governance Group"'})
      .pipe(
        switchMap((workgroups) => {
          const workgroup = workgroups[0];
          if (!workgroup?.id) {
            return throwError(() => new Error('Governance group was not found.'));
          }
          return this.groups.patchWorkgroupV1({
            id: workgroup.id,
            jsonPatchOperation: [
              {
                op: JsonPatchOperationOpEnum.Replace,
                path: '/description',
                value: 'This is an updated description for the group.',
              },
            ],
          });
        }),
      )
      .subscribe({
        next: (workgroup) => console.log(workgroup),
        error: (error) => console.error(error),
      });
  }
}
```

The example first calls `listWorkgroupsV1` with a filter on the name, because a patch request needs the ID of the group.

When no group matches the filter, `listWorkgroupsV1` returns an empty array. The example checks for that case and raises an error instead of sending a patch request without an ID.

The `jsonPatchOperation` array holds one JSON Patch operation for each field you change. To learn more about the patch format, refer to [Patch Requests](/docs/api/patch-requests).

The SDK returns the updated governance group:

```typescript
{
  description: 'This is an updated description for the group.',
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
