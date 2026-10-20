---
id: angular-sdk-pagination
title: Paginate results with the Angular SDK
pagination_label: Paginate Results
sidebar_label: Paginate Results
sidebar_position: 5
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'paginate']
description: Learn how to use the Angular SDK to paginate results.
slug: /tools/sdk/angular/paginate
tags: ['SDK']
---

By default, a list request returns a maximum of 250 records. To return more, you must paginate. To learn more about pagination, refer to [Paginating Results](/docs/api/standard-collection-parameters/#paginating-results).

The `Paginator` class runs the paging loop for you. Import it from `@sailpoint/angular-sdk`.

## Collect every page into one array

`Paginator.paginate()` requests page after page and emits once with the complete result set:

```typescript title="src/app/accounts.component.ts" showLineNumbers
import {Component, inject} from '@angular/core';
import {Paginator} from '@sailpoint/angular-sdk';
import {AccountsService} from '@sailpoint/angular-sdk/accounts';

@Component({selector: 'app-accounts', template: ''})
export class AccountsComponent {
  private readonly accounts = inject(AccountsService);

  loadAccounts(): void {
    Paginator.paginate(
      (params) => this.accounts.listAccountsV1(params),
      {limit: 1000},
      250,
    ).subscribe({
      next: (allAccounts) => console.log(allAccounts.length),
      error: (error) => console.error(error),
    });
  }
}
```

`Paginator.paginate()` takes three arguments:

- A function that calls the list method. The paginator passes `limit` and `offset` into this function on every page.
- The base parameters. Here `limit` is the total cap across all pages. A `limit` of `0`, or no `limit` at all, returns every record.
- The increment, which is the number of records per page. The default is 250.

The example returns 1000 accounts in pages of 250. Change the `limit` to 50 and the increment to 5 to return 50 records in pages of 5.

You can add any other parameter that the endpoint accepts. This example returns every correlated account, sorted by name:

```typescript
Paginator.paginate(
  (params) => this.accounts.listAccountsV1(params),
  {filters: 'uncorrelated eq false', sorters: 'name'},
).subscribe((allAccounts) => console.log(allAccounts.length));
```

You can also pass an `offset` to start at a record other than the first one. For example, add `offset: 11` to start from record 11.

## Handle one page at a time

`Paginator.paginate()` holds every record in memory and emits once at the end. For a large result set, use `Paginator.paginatePages()` instead. It emits each page as the page arrives:

```typescript
Paginator.paginatePages(
  (params) => this.accounts.listAccountsV1(params),
  {},
  250,
).subscribe({
  next: (page) => console.log('received a page of', page.length),
  complete: () => console.log('all pages received'),
  error: (error) => console.error(error),
});
```

## Find out whether an endpoint supports pagination

Refer to the documentation for the endpoint. Any endpoint that supports pagination lists the optional query parameters detailed in [Paginating Results](/docs/api/standard-collection-parameters/#paginating-results).
