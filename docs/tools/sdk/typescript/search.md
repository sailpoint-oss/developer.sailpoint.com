---
id: typescript-sdk-search
title: Search with The TypeScript SDK
pagination_label: Search
sidebar_label: Search
sidebar_position: 6
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'search']
description: Learn how to use the TypeScript SDK to search.
slug: /tools/sdk/typescript/search
tags: ['SDK']
---

To try using the IDN [search functionality](/docs/api/v3/search-post) along with pagination, copy this code into your "index.ts" file:

```typescript
const search = async () => {
    let apiConfig = new Configuration()
    let api = new SearchApi(apiConfig)
    let search: Search = {
        indices: [
            "identities"
        ],
        query: {
            query: "*"
        },
        sort: ["-name"]
 }
    const val = await Paginator.paginateSearchApi(api, search, 100, 1000)

    for (const result of val.data) {
        const castedResult: IdentityDocument = result
        console.log(castedResult.name)
    }
    
}
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```

This example returns 1000 identities, 100 at a time, and sorts them in descending order by name. You can also change the search pagination by changing "100" and "1000", respectively.

The two main ways you can manipulate this example are to change the `indices` or the `query`. For example, if you add `"access profiles"` to the indices, the SDK will search access profiles too. If you change the query to "a*", the search will return all records starting with the letter "a".

You can also change the sorting logic in the brackets next to `sort`.
