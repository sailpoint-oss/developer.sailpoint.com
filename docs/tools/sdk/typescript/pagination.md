---
id: typescript-sdk-pagination
title: Paginate Results with The TypeScript SDK
pagination_label: Paginate Results
sidebar_label: Paginate Results
sidebar_position: 5
sidebar_class_name: typescriptsdk
keywords: ['tsc', 'typescript', 'sdk', 'paginate']
description: Learn how to use the TypeScript SDK to paginate results.
slug: /tools/sdk/typescript/paginate
tags: ['SDK']
---

By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to [Paginating Results](/api/standard-collection-parameters/#paginating-results).

Pagination is implemented with the SDK in the following code block on line 7:

```typescript showLineNumbers
import {Configuration, AccountsApi, Paginator} from 'sailpoint-api-client';

const getPaginatedAccounts = async () => {
  let apiConfig = new Configuration();
  let api = new AccountsApi(apiConfig);

  const val = await Paginator.paginate(
    api,
    api.listAccounts,
    {limit: 1000},
    250,
  );

  console.log(val);
};

getPaginatedAccounts();
```

Run this command to compile and run the code:

```bash
tsc src/index.ts && node src/index.js
```

The function takes a few parameters: the first is the API instance that you wish to call, created on line 5. The next parameter is the function in which you want to invoke the pagination against. The earlier example wants to list accounts, so it calls `api.listAccounts`.

The `limit` specifies the total number of results you can return, 1000. The following unlabeled number, 250, refers to the `increment`, the number of records per page. For example, changing the `limit` to 50 and the following "250" to 5 would change the request to return a total of 50 records, 5 at a time.

You can also provide an `offset` value to specify the record number to start the request on. For example, you can add `{offset: 11}` to start getting accounts from 11 instead of 0.

To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in [Paginating Results](/api/standard-collection-parameters/#paginating-results).
