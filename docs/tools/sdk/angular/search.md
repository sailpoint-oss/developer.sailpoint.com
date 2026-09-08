---
id: angular-sdk-search
title: Search with the Angular SDK
pagination_label: Search
sidebar_label: Search
sidebar_position: 6
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'search']
description: Learn how to use the Angular SDK to search.
slug: /tools/sdk/angular/search
tags: ['SDK']
---

`SearchService` calls the ISC [search endpoint](/docs/api/search-post-v-1). Copy this component into your Angular project to try it out:

```typescript title="src/app/search.component.ts"
import {Component, inject} from '@angular/core';
import {Paginator, PaginationParams} from 'sailpoint-angular-sdk';
import {
  Index,
  Search,
  SearchPostV1RequestParams,
  SearchService,
} from 'sailpoint-angular-sdk/search';

@Component({selector: 'app-search', template: ''})
export class SearchComponent {
  private readonly api = inject(SearchService);

  searchIdentities(): void {
    const search: Search = {
      indices: [Index.Identities],
      query: {
        query: '*',
      },
      sort: ['-name'],
    };

    Paginator.paginate<object, SearchPostV1RequestParams & PaginationParams>(
      (params) => this.api.searchPostV1(params),
      {search, limit: 1000},
      100,
    ).subscribe({
      next: (results) => {
        for (const result of results) {
          console.log((result as {name: string}).name);
        }
      },
      error: (error) => console.error(error),
    });
  }
}
```

This example returns 1000 identities in pages of 100, sorted in descending order by name. Change the `limit` and the increment to change how many records you get and how many arrive per page.

The two values you change most often are `indices` and `query`. Add `Index.Accessprofiles` to `indices` to search access profiles too. Change the query to `a*` to return every record whose name starts with the letter "a".

You can also change the sort order in the `sort` array. A leading `-` sorts in descending order.

`searchPostV1` returns an array of untyped objects, because each index returns a different shape. Cast each result to the shape you expect, as the example does with `result as {name: string}`.

## Count the results without reading them

`searchCountV1` returns the number of matching records in the `X-Total-Count` response header. The response body is empty, so pass `'response'` as the second argument to read the header:

```typescript
this.api.searchCountV1({search}, 'response').subscribe({
  next: (response) => console.log(response.headers.get('X-Total-Count')),
  error: (error) => console.error(error),
});
```
