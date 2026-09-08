---
id: angular-sdk-retries
title: Retries with the Angular SDK
pagination_label: Retries
sidebar_label: Retries
sidebar_position: 7
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'retry']
description: Learn how to configure retries in the Angular SDK.
slug: /tools/sdk/angular/retries
tags: ['SDK']
---

The SDK interceptor retries a failed request for you. You do not add retry code to your components.

## What the interceptor retries

The interceptor handles three cases:

- **401 Unauthorized.** The interceptor discards the cached token, requests a new one, and sends the request again. It does this once per request.
- **429 Too Many Requests.** The interceptor waits and sends the request again.
- **5xx server errors.** The interceptor waits and sends the request again.

Every other status code goes straight to the `error` handler of your subscription.

## Configure the retries

Set `retries` and `retryDelay` in `provideSailPoint()`:

```typescript title="src/app/app.config.ts"
import {ApplicationConfig} from '@angular/core';
import {provideSailPoint} from 'sailpoint-angular-sdk';

export const appConfig: ApplicationConfig = {
  providers: [
    provideSailPoint({
      baseUrl: 'https://[tenant].api.identitynow.com',
      accessToken: 'eyJ...',
      retries: 4,
      retryDelay: 1000,
    }),
  ],
};
```

`retries` is the maximum number of retries for one request. The default is 3.

`retryDelay` is the base delay in milliseconds. The default is 1000.

The delay grows exponentially with each attempt. The formula is `retryDelay * 2 ^ attempt`, where the first retry has an attempt number of 0. With the default `retryDelay` of 1000, the SDK waits 1 second, then 2 seconds, then 4 seconds.

To turn retries off, set `retries` to `0`. The interceptor then passes every 429 and 5xx response straight to your `error` handler.

You can also change these values at runtime through `SailPointConfigService`:

```typescript
inject(SailPointConfigService).configure({retries: 6, retryDelay: 500});
```

## Retry from your own code

The interceptor does not retry a 4xx response other than 401. To retry one of those yourself, use the RxJS `retry` operator:

```typescript
import {retry} from 'rxjs';

this.api
  .listTransformsV1()
  .pipe(retry({count: 2, delay: 2000}))
  .subscribe({
    next: (result) => console.log(result),
    error: (error) => console.error(error),
  });
```
