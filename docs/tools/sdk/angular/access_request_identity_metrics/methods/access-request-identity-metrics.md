# AccessRequestIdentityMetrics

# AccessRequestIdentityMetricsService
  Use this API to implement access request identity metrics functionality.
With this functionality in place, access request reviewers can see relevant details about the requested access item and associated source activity. 
This allows reviewers to see how many of the identities who share a manager with the access requester have this same type of access and how many of them have had activity in the related source. 
This additional context about whether the access has been granted before and how often it has been used can help those approving access requests make more informed decisions.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-access-request-identity-metrics-v1**](#get-access-request-identity-metrics-v1) | **GET** `/access-request-identity-metrics/v1/{identityId}/requested-objects/{requestedObjectId}/type/{type}` | Return access request identity metrics


## get-access-request-identity-metrics-v1
Return access request identity metrics
Use this API to return information access metrics.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-identity-metrics-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestIdentityMetricsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | Manager\&#39;s identity ID. |  [default to undefined]
**requestedObjectId** | `string` | Requested access item\&#39;s ID. |  [default to undefined]
**type** | `'ENTITLEMENT' | 'ROLE' | 'ACCESS_PROFILE'` | Requested access item\&#39;s type. |  [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestIdentityMetricsService } from '@sailpoint/angular-sdk/access_request_identity_metrics';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestIdentityMetricsService);

  getAccessRequestIdentityMetricsV1(): void {
    const identityId: string = ; // Manager\&#39;s identity ID.
    const requestedObjectId: string = ; // Requested access item\&#39;s ID.
    const type: string = ; // Requested access item\&#39;s type.
    this.api.getAccessRequestIdentityMetricsV1({ identityId: identityId, requestedObjectId: requestedObjectId, type: type }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

