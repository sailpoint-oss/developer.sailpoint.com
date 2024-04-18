---
id: udk-error-handling
title: Error Handling
pagination_label: UDK
sidebar_label: Error Handling
sidebar_position: 3
sidebar_class_name: rudk
keywords: ['UI', 'development', 'kit', 'error', 'handling']
description: Error handling in your custom user interfaces
slug: /tools/ui-development-kit/error-handling
tags: ['UI', 'Error']
---

Ideally, everything in your custom UIs will work smoothly, but you will likely encounter errors at some point when you're implementing a page. If you provide an invalid filter or sorter, the list accounts endpoint will return a 400 error, for example. You can handle this error by adding a `try catch` block to the server side of the accounts list page.

If any of your backend calls result in a server error or bad request, you also want to handle those errors.

Read this guide to learn how to use the UI Development Kit to handle errors.

## 400 Bad Request

If you provide an invalid filter or sorter, the [List Accounts Endpoint](https://developer.sailpoint.com/docs/api/v3/list-accounts) returns a 400 error. This example awaits the response and doesn't exit the program when a 4xx level status is received. If a 4xx level status is received, the user is redirected to an error page.

Refer to this code block to learn how to implement error handling for invalid filters or sorters:

```typescript
import {createConfiguration} from '$lib/sailpoint/sdk.js';
import {getFilters, getLimit, getPage, getSorters} from '$lib/Utils.js';
import {error} from '@sveltejs/kit';
import {AccountsApi} from 'sailpoint-api-client';

export const load = async ({url, locals}) => {
  const config = createConfiguration(
    locals.session!.baseUrl,
    locals.idnSession!.access_token,
  );
  const api = new AccountsApi(config);

  const page = getPage(url);
  const limit = getLimit(url);
  const sorters = getSorters(url);
  const filters = getFilters(url);

  const reportResp = await api.listAccounts(
    {
      count: true,
      sorters: sorters,
      filters: filters,
      limit: Number(limit),
      offset: Number(page) * Number(limit),
    },
    {
      validateStatus: function (status) {
        return status < 500;
      },
    },
  );

  if (reportResp.status !== 200) {
    error(400, {
      message:
        'an error occurred while fetching accounts. Please examine your filters and and sorters and try again.',
      context: {params: {page, limit, filters, sorters}},
      urls: [
        'https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results',
      ],
      errData: reportResp.data,
    });
  }

  const totalCount = reportResp.headers['x-total-count'];
  const accountData = reportResp.data;

  return {accountData, totalCount, params: {page, limit, sorters, filters}};
};
```

## 500 Server Issues

You can update the code block to handle more than just the 400 level statuses. You can see the highlighted code changes to handle any error response from the API call. You can send back an error to the user with the status, a detailed message, the details about the parameters used that caused the error, and the error response from the API.

Refer to this code block to learn how to implement error handling for other non-400 errors:

```typescript
import {createConfiguration} from '$lib/sailpoint/sdk.js';
import {getFilters, getLimit, getPage, getSorters} from '$lib/Utils.js';
import {error} from '@sveltejs/kit';
import {AccountsApi} from 'sailpoint-api-client';

export const load = async ({url, locals}) => {
  const config = createConfiguration(
    locals.session!.baseUrl,
    locals.idnSession!.access_token,
  );
  const api = new AccountsApi(config);

  const page = getPage(url);
  const limit = getLimit(url);
  const sorters = getSorters(url);
  const filters = getFilters(url);

  const reportResp = await api.listAccounts(
    {
      count: true,
      sorters: sorters,
      filters: filters,
      limit: Number(limit),
      offset: Number(page) * Number(limit),
    },
    {
      validateStatus: function (status) {
        // highlight-next-line
        return status < 550;
      },
    },
  );

  if (reportResp.status !== 200) {
    // highlight-next-line
    error(reportResp.status, {
      message:
        'an error occurred while fetching accounts. Please examine your filters and and sorters and try again.',
      context: {params: {page, limit, filters, sorters}},
      urls: [
        'https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results',
      ],
      errData: reportResp.data,
    });
  }

  const totalCount = reportResp.headers['x-total-count'];
  const accountData = reportResp.data;

  return {accountData, totalCount, params: {page, limit, sorters, filters}};
};
```

## Discuss

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions.

To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/c/identity-security-cloud/6).
