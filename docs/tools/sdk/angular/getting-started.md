---
id: angular-sdk-getting-started
title: Getting started with the Angular SDK
pagination_label: Getting Started
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: angularsdk
keywords: ['angular', 'typescript', 'sdk', 'start']
description: Learn how to use the Angular SDK in this guide.
slug: /tools/sdk/angular/getting-started
tags: ['SDK']
---

Once your SDK is installed and configured, you can start calling the ISC APIs. To learn how to install and configure the Angular SDK, refer to [Installation and Configuration](./index.mdx).

This guide walks through some examples.

## How the SDK is organized

Every API resource is an injectable Angular service. Inject the service you need with the Angular `inject()` function, then call a method on it.

The SDK is organized by API resource rather than by API version, so there are no version namespaces to import. Each method name ends with the version of the endpoint it calls. For example, `listTransformsV1` calls the `v1` version of the List Transforms endpoint. This lets a single SDK reach every version of every endpoint without a separate version package.

Import services and models from the resource sub-path, for example `@sailpoint/angular-sdk/transforms`. Import the SDK utilities, such as `provideSailPoint`, `SailPointConfigService`, and `Paginator`, from `@sailpoint/angular-sdk`.

Every method takes one object of named parameters and returns an RxJS `Observable`. Subscribe to the `Observable` to send the request. Without a subscription, the SDK sends nothing.

## List transforms in your tenant

```typescript title="src/app/transforms.component.ts"
import {Component, OnInit, inject, signal} from '@angular/core';
import {TransformsService, TransformRead} from '@sailpoint/angular-sdk/transforms';

@Component({
  selector: 'app-transforms',
  template: `
    @for (transform of transforms(); track transform.id) {
      <div>{{ transform.name }}</div>
    }
  `,
})
export class TransformsComponent implements OnInit {
  private readonly api = inject(TransformsService);

  readonly transforms = signal<TransformRead[]>([]);

  ngOnInit(): void {
    this.api.listTransformsV1().subscribe({
      next: (result) => this.transforms.set(result),
      error: (error) => console.error(error),
    });
  }
}
```

The interceptor adds the base URL and the access token, so the component does not handle authentication.

## Use query parameters to filter the results

The same method accepts the standard collection parameters. This example returns no more than 10 transforms whose name starts with "Test":

```typescript
this.api
  .listTransformsV1({
    limit: 10,
    filters: 'name sw "Test"',
  })
  .subscribe({
    next: (result) => console.log(result),
    error: (error) => console.error(error),
  });
```

Refer to [List Transforms](https://developer.sailpoint.com/docs/api/list-transforms-v-1) for all of the query parameters that this endpoint supports.

## Read the response headers

Every method accepts `observe: 'response'` as its second argument. The `Observable` then emits the full `HttpResponse` instead of the response body. Use this form to read a header such as `X-Total-Count`:

```typescript
this.api.listTransformsV1({count: true}, 'response').subscribe({
  next: (response) => {
    console.log(response.headers.get('X-Total-Count'));
    console.log(response.body);
  },
  error: (error) => console.error(error),
});
```

## Cancel a request on destroy

An in-flight request holds a reference to your component. Pipe the request through the `takeUntilDestroyed()` operator. Angular then cancels the request as it destroys the component:

```typescript
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TransformsService} from '@sailpoint/angular-sdk/transforms';

@Component({selector: 'app-transforms', template: ''})
export class TransformsComponent {
  private readonly api = inject(TransformsService);
  private readonly destroyRef = inject(DestroyRef);

  load(): void {
    this.api
      .listTransformsV1()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => console.log(result));
  }
}
```

## Call an endpoint the SDK does not model

`GenericService` calls any endpoint by path. Use it for an endpoint that this version of the SDK does not model yet. The `path` parameter is the path without a leading slash:

```typescript
import {Component, inject} from '@angular/core';
import {GenericService} from '@sailpoint/angular-sdk';

@Component({selector: 'app-generic', template: ''})
export class GenericComponent {
  private readonly api = inject(GenericService);

  load(): void {
    this.api
      .genericGet({path: 'transforms/v1', limit: 10})
      .subscribe((result) => console.log(result));
  }
}
```

`GenericService` also provides `genericPost`, `genericPut`, `genericPatch`, and `genericDelete`. The write methods take a `requestBody` object.
