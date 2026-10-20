---
id: angular-sdk-error-handling
title: Error handling with the Angular SDK
pagination_label: Error Handling
sidebar_label: Error Handling
sidebar_position: 8
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'error']
description: Learn how to handle errors in the Angular SDK.
slug: /tools/sdk/angular/error-handling
tags: ['SDK']
---

The SDK uses the Angular `HttpClient`. Any response outside the 2xx range arrives as an `HttpErrorResponse` on the error channel of the `Observable`. It does not throw, and it does not stop your application.

## Handle the error in the subscription

Pass an `error` callback to `subscribe()`. This is the simplest way to react to a failed request:

```typescript
import {HttpErrorResponse} from '@angular/common/http';

this.api.listTransformsV1({filters: 'id eq'}).subscribe({
  next: (transforms) => console.log(transforms),
  error: (error: HttpErrorResponse) => {
    console.log(error.status);
    console.log(error.error);
    console.log(error.error?.trackingId);
  },
});
```

`HttpErrorResponse` carries these fields:

| Field | Description |
| --- | --- |
| `status` | The HTTP status code, for example 400. |
| `error` | The parsed response body. An ISC error body holds `detailCode`, `trackingId`, `messages`, and `causes`. |
| `headers` | The response headers. |
| `url` | The URL of the failed request. |
| `message` | A summary string that Angular builds for logging. |

A `status` of `0` means that the request never reached the server. A network failure or a CORS rejection both produce that value.

## Recover and continue

Use the RxJS `catchError` operator to replace the error with a value. The stream then completes normally, and the `next` callback runs with your fallback value:

```typescript
import {catchError, of, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

this.api
  .listTransformsV1({filters: 'id eq'})
  .pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
        console.log('The filter is invalid. Continuing with an empty list.');
        return of([]);
      }
      return throwError(() => error);
    }),
  )
  .subscribe((transforms) => console.log(transforms.length));
```

The example recovers from a 400 response and re-raises every other error. Return `of([])` for every status code to make the request never fail.

## Read the error message from ISC

The ISC APIs return a structured body on an error. Read `error.error.messages` to get the text:

```typescript
error: (error: HttpErrorResponse) => {
  const messages = error.error?.messages ?? [];
  for (const message of messages) {
    console.log(message.text);
  }
},
```

`trackingId` identifies the failed request inside ISC. Include that value in a support case.

For retry behavior on a 401, a 429, or a 5xx response, refer to [Retries](./retries.md).
