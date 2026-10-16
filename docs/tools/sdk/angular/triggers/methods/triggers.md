# Triggers

# TriggersService
  Event Triggers provide real-time updates to changes in Identity Security Cloud so you can take action as soon as an event occurs, rather than poll an API endpoint for updates. Identity Security Cloud provides a user interface within the admin console to create and manage trigger subscriptions.  These endpoints allow for programatically creating and managing trigger subscriptions.

There are two types of event triggers:
  * &#x60;FIRE_AND_FORGET&#x60;: This trigger type will send a payload to each subscriber without needing a response.  Each trigger of this type has a limit of **50 subscriptions**.
  * &#x60;REQUEST_RESPONSE&#x60;: This trigger type will send a payload to a subscriber and expect a response back.  Each trigger of this type may only have **one subscription**.

## Available Event Triggers
Production ready event triggers that are available in all tenants.

| Name | ID | Type | Trigger condition |
|-|-|-|-|
| [Access Request Dynamic Approval](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/) | idn:access-request-dynamic-approver | REQUEST_RESPONSE |After an access request is submitted. Expects the subscriber to respond with the ID of an identity or workgroup to add to the approval workflow. |
| [Access Request Decision](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/) | idn:access-request-post-approval | FIRE_AND_FORGET | After an access request is approved. |
| [Access Request Submitted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/) | idn:access-request-pre-approval | REQUEST_RESPONSE | After an access request is submitted. Expects the subscriber to respond with an approval decision. |
| [Account Aggregation Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed/) | idn:account-aggregation-completed | FIRE_AND_FORGET | After an account aggregation completed, terminated, failed. |
| Account Attributes Changed | idn:account-attributes-changed | FIRE_AND_FORGET | After an account aggregation, and one or more account attributes have changed. |
| Account Correlated | idn:account-correlated | FIRE_AND_FORGET | After an account is added to an identity. |
| Accounts Collected for Aggregation |  idn:aggregation-accounts-collected | FIRE_AND_FORGET | New, changed, and deleted accounts have been gathered during an aggregation and are being processed. |
| Campaign Activated | idn:campaign-activated | FIRE_AND_FORGET | After a campaign is activated. |
| Campaign Ended | idn:campaign-ended | FIRE_AND_FORGET | After a campaign ends. |
| Campaign Generated | idn:campaign-generated | FIRE_AND_FORGET | After a campaign finishes generating. |
| Certification Signed Off | idn:certification-signed-off | FIRE_AND_FORGET | After a certification is signed off by its reviewer. |
| [Identity Attributes Changed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed/) | idn:identity-attributes-changed | FIRE_AND_FORGET | After One or more identity attributes changed. |
| [Identity Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-created/) | idn:identity-created | FIRE_AND_FORGET | After an identity is created. |
| [Provisioning Action Completed](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed/) |  idn:post-provisioning | FIRE_AND_FORGET | After a provisioning action completed on a source. |
| [Scheduled Search](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/scheduled-search/) |  idn:saved-search-complete | FIRE_AND_FORGET | After a scheduled search completed. |
| [Source Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-created/) | idn:source-created | FIRE_AND_FORGET | After a source is created. |
| [Source Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-deleted/) | idn:source-deleted | FIRE_AND_FORGET | After a source is deleted. |
| [Source Updated](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-updated/) | idn:source-updated | FIRE_AND_FORGET | After configuration changes have been made to a source. |
| [VA Cluster Status Change](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/va-cluster-status-change/) | idn:va-cluster-status-change | FIRE_AND_FORGET | After the status of a VA cluster has changed. |
Access request pre-approval and dynamic approver trigger inputs may include a &#x60;form&#x60; object on each entry in &#x60;requestedItems&#x60; when that item has associated form data. The post-approval trigger includes &#x60;form&#x60; on each entry in &#x60;requestedItemsStatus&#x60;.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-trigger-invocation-v1**](#complete-trigger-invocation-v1) | **POST** `/trigger-invocations/v1/{id}/complete` | Complete trigger invocation
[**create-subscription-v1**](#create-subscription-v1) | **POST** `/trigger-subscriptions/v1` | Create a subscription
[**delete-subscription-v1**](#delete-subscription-v1) | **DELETE** `/trigger-subscriptions/v1/{id}` | Delete a subscription
[**list-subscriptions-v1**](#list-subscriptions-v1) | **GET** `/trigger-subscriptions/v1` | List subscriptions
[**list-trigger-invocation-status-v1**](#list-trigger-invocation-status-v1) | **GET** `/trigger-invocations/v1/status` | List latest invocation statuses
[**list-triggers-v1**](#list-triggers-v1) | **GET** `/triggers/v1` | List triggers
[**patch-subscription-v1**](#patch-subscription-v1) | **PATCH** `/trigger-subscriptions/v1/{id}` | Patch a subscription
[**start-test-trigger-invocation-v1**](#start-test-trigger-invocation-v1) | **POST** `/trigger-invocations/v1/test` | Start a test invocation
[**test-subscription-filter-v1**](#test-subscription-filter-v1) | **POST** `/trigger-subscriptions/v1/validate-filter` | Validate a subscription filter
[**update-subscription-v1**](#update-subscription-v1) | **PUT** `/trigger-subscriptions/v1/{id}` | Update a subscription


## complete-trigger-invocation-v1
Complete trigger invocation
Completes an invocation to a REQUEST_RESPONSE type trigger.

[API Spec](https://developer.sailpoint.com/docs/api/complete-trigger-invocation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CompleteTriggerInvocationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the invocation to complete. |  [default to undefined]
**completeInvocation** | `CompleteInvocation` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';
import { CompleteInvocation } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  completeTriggerInvocationV1(): void {
    const id: string = ; // The ID of the invocation to complete.
    const completeInvocation: CompleteInvocation = ; // 
    this.api.completeTriggerInvocationV1({ id: id, completeInvocation: completeInvocation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-subscription-v1
Create a subscription
This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required:
* HTTP subscriptions require httpConfig
* EventBridge subscriptions require eventBridgeConfig

[API Spec](https://developer.sailpoint.com/docs/api/create-subscription-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSubscriptionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subscriptionPostRequest** | `SubscriptionPostRequest` |  | 

### Return type

`Observable<Subscription>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';
import { SubscriptionPostRequest } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  createSubscriptionV1(): void {
    const subscriptionPostRequest: SubscriptionPostRequest = ; // 
    this.api.createSubscriptionV1({ subscriptionPostRequest: subscriptionPostRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-subscription-v1
Delete a subscription
Deletes an existing subscription to a trigger.

[API Spec](https://developer.sailpoint.com/docs/api/delete-subscription-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteSubscriptionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Subscription ID |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  deleteSubscriptionV1(): void {
    const id: string = ; // Subscription ID
    this.api.deleteSubscriptionV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-subscriptions-v1
List subscriptions
Gets a list of all trigger subscriptions.

[API Spec](https://developer.sailpoint.com/docs/api/list-subscriptions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSubscriptionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** | [optional] [default to undefined]

### Return type

`Observable<Array<Subscription>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  listSubscriptionsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional)
    this.api.listSubscriptionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-trigger-invocation-status-v1
List latest invocation statuses
Gets a list of latest invocation statuses.
Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours.
This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.

[API Spec](https://developer.sailpoint.com/docs/api/list-trigger-invocation-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListTriggerInvocationStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** | [optional] [default to undefined]

### Return type

`Observable<Array<InvocationStatus>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  listTriggerInvocationStatusV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional)
    this.api.listTriggerInvocationStatusV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-triggers-v1
List triggers
Gets a list of triggers that are available in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-triggers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListTriggersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** | [optional] [default to undefined]

### Return type

`Observable<Array<Trigger>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  listTriggersV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional)
    this.api.listTriggersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-subscription-v1
Patch a subscription
This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:

**name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**

[API Spec](https://developer.sailpoint.com/docs/api/patch-subscription-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchSubscriptionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Subscription to patch |  [default to undefined]
**subscriptionPatchRequestInner** | `Array<SubscriptionPatchRequestInner>` |  | 

### Return type

`Observable<Subscription>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';
import { SubscriptionPatchRequestInner } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  patchSubscriptionV1(): void {
    const id: string = ; // ID of the Subscription to patch
    const subscriptionPatchRequestInner: Array<SubscriptionPatchRequestInner> = ; // 
    this.api.patchSubscriptionV1({ id: id, subscriptionPatchRequestInner: subscriptionPatchRequestInner }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-test-trigger-invocation-v1
Start a test invocation
Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.

[API Spec](https://developer.sailpoint.com/docs/api/start-test-trigger-invocation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartTestTriggerInvocationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**testInvocation** | `TestInvocation` |  | 

### Return type

`Observable<Array<Invocation>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';
import { TestInvocation } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  startTestTriggerInvocationV1(): void {
    const testInvocation: TestInvocation = ; // 
    this.api.startTestTriggerInvocationV1({ testInvocation: testInvocation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-subscription-filter-v1
Validate a subscription filter
Validates a JSONPath filter expression against a provided mock input.
Request requires a security scope of: 

[API Spec](https://developer.sailpoint.com/docs/api/test-subscription-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestSubscriptionFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**validateFilterInputDto** | `ValidateFilterInputDto` |  | 

### Return type

`Observable<ValidateFilterOutputDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';
import { ValidateFilterInputDto } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  testSubscriptionFilterV1(): void {
    const validateFilterInputDto: ValidateFilterInputDto = ; // 
    this.api.testSubscriptionFilterV1({ validateFilterInputDto: validateFilterInputDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-subscription-v1
Update a subscription
This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing
  Subscription is completely replaced. The following fields are immutable:


  * id

  * triggerId


  Attempts to modify these fields result in 400.

[API Spec](https://developer.sailpoint.com/docs/api/update-subscription-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateSubscriptionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Subscription ID |  [default to undefined]
**subscriptionPutRequest** | `SubscriptionPutRequest` |  | 

### Return type

`Observable<Subscription>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TriggersService } from '@sailpoint/angular-sdk/triggers';
import { SubscriptionPutRequest } from '@sailpoint/angular-sdk/triggers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TriggersService);

  updateSubscriptionV1(): void {
    const id: string = ; // Subscription ID
    const subscriptionPutRequest: SubscriptionPutRequest = ; // 
    this.api.updateSubscriptionV1({ id: id, subscriptionPutRequest: subscriptionPutRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

