---
id: v1-account-deletion-requests
title: AccountDeletionRequests
pagination_label: AccountDeletionRequests
sidebar_label: AccountDeletionRequests
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountDeletionRequests', 'v1AccountDeletionRequests']
slug: /tools/sdk/typescript/account_deletion_requests/methods/account-deletion-requests
tags: ['SDK', 'Software Development Kit', 'AccountDeletionRequests', 'v1AccountDeletionRequests']
---

# AccountDeletionRequestsV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-account-request-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accountId** | `string` | Account ID. |  [default to undefined]
**accountdeleterequestinputV1** | `AccountdeleterequestinputV1` |  | [optional]

### Return type

`AccountrequestasyncresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountDeletionRequestsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountDeletionRequestsV1Api(configuration);
const accountId: string = ef38f94347e94562b5bb8424a56498d8; // Account ID.
const accountdeleterequestinputV1: AccountdeleterequestinputV1 = {"comments":"I requested this account deletion."}; //  (optional)
const result = await apiInstance.deleteAccountRequestV1({ accountId: accountId });
console.log(result);
```

[[Back to top]](#)

## get-account-deletion-requests-v1
List of Account Deletion Requests
Retrieves a paginated list of account deletion requests filtered by the provided query parameters. When the "mine" parameter is set to true, the response includes only those deletion requests that were initiated by the currently authenticated user. If "mine" is false or not specified, the endpoint returns all account deletion requests associated with the current tenant, regardless of the initiator. This allows both users and administrators to view relevant deletion requests based on their access level and intent.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-deletion-requests-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**mine** | `boolean` | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. | [optional] [default to false]

### Return type

`Array<AccountactionrequestdtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountDeletionRequestsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountDeletionRequestsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const mine: boolean = true; // Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional)
const result = await apiInstance.getAccountDeletionRequestsV1({  });
console.log(result);
```

[[Back to top]](#)

