---
id: angular-sdk-create
title: Creating resources with the Angular SDK
pagination_label: Create a resource
sidebar_label: Create a resource
sidebar_position: 2
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'create']
description: Learn how to use the Angular SDK to create new resources.
slug: /tools/sdk/angular/create
tags: ['SDK']
---

You can use the SDK to create new resources.

Here is an example component that creates a governance group. Copy it into your Angular project to try it out:

```typescript title="src/app/create-group.component.ts"
import {Component, inject} from '@angular/core';
import {switchMap} from 'rxjs';
import {
  GovernanceGroupsService,
  WorkgroupDto,
} from '@sailpoint/angular-sdk/governance_groups';
import {PublicIdentitiesService} from '@sailpoint/angular-sdk/public_identities';

@Component({
  selector: 'app-create-group',
  template: `<button (click)="createWorkgroup()">Create group</button>`,
})
export class CreateGroupComponent {
  private readonly identities = inject(PublicIdentitiesService);
  private readonly groups = inject(GovernanceGroupsService);

  createWorkgroup(): void {
    this.identities
      .getPublicIdentitiesV1({limit: 1})
      .pipe(
        switchMap((identities) => {
          const owner = identities[0];
          const workgroupDto: WorkgroupDto = {
            name: 'DB Access Governance Group',
            description: 'Description of the Governance Group',
            owner: {
              id: owner.id,
              type: 'IDENTITY',
              name: owner.name,
            },
          };
          return this.groups.createWorkgroupV1({workgroupDto});
        }),
      )
      .subscribe({
        next: (workgroup) => console.log(workgroup),
        error: (error) => console.error(error),
      });
  }
}
```

The example first calls `getPublicIdentitiesV1` to read one identity. A governance group needs an owner, and this identity becomes that owner.

`switchMap` chains the two calls. It takes the identity from the first response and starts the create request with it. Both calls run in one subscription, so one `error` handler covers both.

The SDK returns the new governance group:

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
