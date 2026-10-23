# AccountDeletionRequests

# AccountDeletionRequestsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-account-request-v1**](#delete-account-request-v1) | **POST** `/account-requests/v1/account/{accountId}/delete` | Delete account
[**get-account-deletion-requests-v1**](#get-account-deletion-requests-v1) | **GET** `/account-requests/v1/deletion` | List of Account Deletion Requests


## delete-account-request-v1
Delete account
Initiates an account deletion request for the specified account.
This method validates the input data, processes the deletion request,
and generates an asynchronous result containing a tracking ID. 
>**NOTE: You can only delete accounts from sources of the "Connected" type. which supports account deletion**

[API Spec](https://developer.sailpoint.com/docs/api/delete-account-request-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteAccountRequestV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accountId** | `string` | Account ID. |  [default to undefined]
**accountDeleteRequestInput** | `AccountDeleteRequestInput` |  | [optional]

### Return type

`Observable<AccountRequestAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountDeletionRequestsService } from '@sailpoint/angular-sdk/account_deletion_requests';
import { AccountDeleteRequestInput } from '@sailpoint/angular-sdk/account_deletion_requests';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountDeletionRequestsService);

  deleteAccountRequestV1(): void {
    const accountId: string = ; // Account ID.
    const accountDeleteRequestInput: AccountDeleteRequestInput = ; //  (optional)
    this.api.deleteAccountRequestV1({ accountId: accountId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-account-deletion-requests-v1
List of Account Deletion Requests
Retrieves a paginated list of account deletion requests filtered by the provided query parameters. When the "mine" parameter is set to true, the response includes only those deletion requests that were initiated by the currently authenticated user. If "mine" is false or not specified, the endpoint returns all account deletion requests associated with the current tenant, regardless of the initiator. This allows both users and administrators to view relevant deletion requests based on their access level and intent.

[API Spec](https://developer.sailpoint.com/docs/api/get-account-deletion-requests-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccountDeletionRequestsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**mine** | `boolean` | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. | [optional] [default to false]

### Return type

`Observable<Array<AccountActionRequestDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountDeletionRequestsService } from '@sailpoint/angular-sdk/account_deletion_requests';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountDeletionRequestsService);

  getAccountDeletionRequestsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const mine: boolean = ; // Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional)
    this.api.getAccountDeletionRequestsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

