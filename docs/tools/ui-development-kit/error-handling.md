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

If any of your backend calls result in a server error or bad request you'll want to handle those errors.

## 400 bad request

If you provide an invalid filter or sorter, the list accounts endpoint will return a 400 error. This example awaits the response and does not exit the program when a 4xx level status is received. If a 4xx level status is received then the user will be redirected to an error page.

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

## 500 server issues

You can update the code block to handle more than just the 400 level statuses. You can see the highlighted code changes to handle any error response from the API call. You can send back an error to the user with the status, a detailed message, the details about the parameters used that caused the error, and the error response from the API.

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
