# AccountAggregations

# AccountAggregationsService
  Use this API to implement account aggregation progress tracking functionality.
With this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details.

An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud.

Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.
To view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.
In Account Aggregation, administrators can view the account aggregations&#39; statuses and details in the Account Activity Log.

Refer to [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) for more information about account aggregations.

If you are looking for the endpoint for account aggregations in a source, [click here](https://developer.sailpoint.com/docs/api/import-accounts-v-1)
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-aggregation-status-v1**](#get-account-aggregation-status-v1) | **GET** `/account-aggregations/v1/{id}/status` | In-progress account aggregation status


## get-account-aggregation-status-v1
In-progress account aggregation status
This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.

Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.

Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.

*Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.*
required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-account-aggregation-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccountAggregationStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account aggregation id |  [default to undefined]

### Return type

`Observable<AccountAggregationStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountAggregationsService } from '@sailpoint/angular-sdk/account_aggregations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountAggregationsService);

  getAccountAggregationStatusV1(): void {
    const id: string = ; // The account aggregation id
    this.api.getAccountAggregationStatusV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

