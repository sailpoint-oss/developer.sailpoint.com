---
id: angular-sdk-delete
title: Deleting resources with the Angular SDK
pagination_label: Delete a resource
sidebar_label: Delete a resource
sidebar_position: 4
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'delete']
description: Learn how to use the Angular SDK to delete resources.
slug: /tools/sdk/angular/delete
tags: ['SDK']
---

You can use the SDK to delete resources.

Here is an example component that finds the governance group created in [Create a resource](./creating-resources.md) by name and deletes it:

```typescript title="src/app/delete-group.component.ts"
import {Component, inject} from '@angular/core';
import {switchMap, throwError} from 'rxjs';
import {GovernanceGroupsService} from '@sailpoint/angular-sdk/governance_groups';

@Component({
  selector: 'app-delete-group',
  template: `<button (click)="deleteWorkgroup()">Delete group</button>`,
})
export class DeleteGroupComponent {
  private readonly groups = inject(GovernanceGroupsService);

  deleteWorkgroup(): void {
    this.groups
      .listWorkgroupsV1({filters: 'name eq "DB Access Governance Group"'})
      .pipe(
        switchMap((workgroups) => {
          const workgroup = workgroups[0];
          if (!workgroup?.id) {
            return throwError(() => new Error('Governance group was not found.'));
          }
          return this.groups.deleteWorkgroupV1({id: workgroup.id}, 'response');
        }),
      )
      .subscribe({
        next: (response) => console.log(response.status),
        error: (error) => console.error(error),
      });
  }
}
```

A delete endpoint returns no body, so the body is `null` on success. The example passes `'response'` as the second argument to read the status code instead.

The example logs a status of 204.
