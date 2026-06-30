---
id: v1-account-activities
title: AccountActivities
pagination_label: AccountActivities
sidebar_label: AccountActivities
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountActivities', 'v1AccountActivities']
slug: /tools/sdk/typescript/account_activities/methods/account-activities
tags: ['SDK', 'Software Development Kit', 'AccountActivities', 'v1AccountActivities']
---

# AccountActivitiesV1Api
  Use this API to implement account activity tracking functionality.
With this functionality in place, users can track source account activity in Identity Security Cloud, which greatly improves traceability in the system. 

An account activity refers to a log of each action performed on a source account. This is useful for auditing the changes performed on an account throughout its life. 
In Identity Security Cloud&#39;s Search, users can search for account activities and select the activity&#39;s row to get an overview of the activity&#39;s account action and view its progress, its involved sources, and its most basic metadata, such as the identity requesting the option and the recipient. 

Account activity includes most actions Identity Security Cloud completes on source accounts. Users can search in Identity Security Cloud for the following account action types: 

- Access Request: These include any access requests the source account is involved in. 

- Account Attribute Updates: These include updates to a single attribute on an account on a source. 

- Account State Update: These include locking or unlocking actions on an account on a source. 

- Certification: These include actions removing an entitlement from an account on a source as a result of the entitlement&#39;s revocation during a certification.

- Cloud Automated &#x60;Lifecyclestate&#x60;: These include automated lifecycle state changes that result in a source account&#39;s correlated identity being assigned to a different lifecycle state. 
Identity Security Cloud replaces the &#x60;Lifecyclestate&#x60; variable with the name of the lifecycle state it has moved the account&#39;s identity to. 

- Identity Attribute Update: These include updates to a source account&#39;s correlated identity attributes as the result of a provisioning action. 
When you update an identity attribute that also updates an identity&#39;s lifecycle state, the cloud automated &#x60;Lifecyclestate&#x60; event also displays.
Account Activity does not include attribute updates that occur as a result of aggregation.

- Identity Refresh: These include correlated identity refreshes that occur for an account on a source whenever the account&#39;s correlated identity profile gets a new role or updates. 
These also include refreshes that occur whenever Identity Security Cloud assigns an application to the account&#39;s correlated identity based on the application&#39;s being assigned to All Users From Source or Specific Users From Source. 

- Lifecycle State Refresh: These include the actions that took place when a lifecycle state changed. This event only occurs after a cloud automated &#x60;Lifecyclestate&#x60; change or a lifecycle state change. 

- Lifecycle State Change: These include the account activities that result from an identity&#39;s manual assignment to a null lifecycle state.

- Password Change: These include password changes on sources.

Refer to [Account Activity](https://documentation.sailpoint.com/saas/help/search/index.html#account-activity) for more information about account activities.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-activity-v1**](#get-account-activity-v1) | **GET** `/account-activities/v1/{id}` | Get an account activity
[**list-account-activities-v1**](#list-account-activities-v1) | **GET** `/account-activities/v1` | List account activities


## get-account-activity-v1
Get an account activity
This gets a single account activity by its id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-activity-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account activity id |  [default to undefined]

### Return type

`AccountactivityV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountActivitiesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountActivitiesV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The account activity id
const result = await apiInstance.getAccountActivityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-account-activities-v1
List account activities
This gets a collection of account activities that satisfy the given query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-account-activities-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestedFor** | `string` | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
**requestedBy** | `string` | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | [optional] [default to undefined]
**regardingIdentity** | `string` | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** | [optional] [default to undefined]

### Return type

`Array<AccountactivityV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountActivitiesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountActivitiesV1Api(configuration);
const requestedFor: string = 2c91808568c529c60168cca6f90c1313; // The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
const requestedBy: string = 2c91808568c529c60168cca6f90c1313; // The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
const regardingIdentity: string = 2c91808568c529c60168cca6f90c1313; // The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = type eq "Identity Refresh"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional)
const sorters: string = created; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional)
const result = await apiInstance.listAccountActivitiesV1({  });
console.log(result);
```

[[Back to top]](#)

