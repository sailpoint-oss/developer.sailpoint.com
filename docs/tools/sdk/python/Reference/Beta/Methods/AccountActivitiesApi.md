---
id: beta-account-activities
title: Account_Activities
pagination_label: Account_Activities
sidebar_label: Account_Activities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Account_Activities', 'BetaAccount_Activities'] 
slug: /tools/sdk/python/beta/methods/account-activities
tags: ['SDK', 'Software Development Kit', 'Account_Activities', 'BetaAccount_Activities']
---

# sailpoint.beta.AccountActivitiesApi
  Use this API to implement account activity tracking functionality.
With this functionality in place, users can track source account activity in Identity Security Cloud, which greatly improves traceability in the system.

An account activity refers to a log of each action performed on a source account. This is useful for auditing the changes that occur on an account throughout its life.
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-activity**](#get-account-activity) | **GET** `/account-activities/{id}` | Get Account Activity
[**list-account-activities**](#list-account-activities) | **GET** `/account-activities` | List Account Activities


## get-account-activity
Get Account Activity
This gets a single account activity by its id.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-account-activity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The account activity id

### Return type
[**CancelableAccountActivity**](../models/cancelable-account-activity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An account activity object | CancelableAccountActivity |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.account_activities_api import AccountActivitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.cancelable_account_activity import CancelableAccountActivity
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The account activity id # str | The account activity id

    try:
        # Get Account Activity
        
        results = AccountActivitiesApi(api_client).get_account_activity(id=id)
        # Below is a request that includes all optional parameters
        # results = AccountActivitiesApi(api_client).get_account_activity(id)
        print("The response of AccountActivitiesApi->get_account_activity:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AccountActivitiesApi->get_account_activity: %s\n" % e)
```



[[Back to top]](#) 

## list-account-activities
List Account Activities
This gets a collection of account activities that satisfy the given query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-account-activities)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requested_for | **str** |   (optional) | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | requested_by | **str** |   (optional) | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | regarding_identity | **str** |   (optional) | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | type | **str** |   (optional) | The type of account activity.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified**

### Return type
[**List[CancelableAccountActivity]**](../models/cancelable-account-activity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of account activities | List[CancelableAccountActivity] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.account_activities_api import AccountActivitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.cancelable_account_activity import CancelableAccountActivity
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = 'requested_for_example' # str | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requested_by = 'requested_by_example' # str | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regarding_identity = 'regarding_identity_example' # str | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # str | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    type = 'type_example' # str | The type of account activity. (optional) # str | The type of account activity. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'filters_example' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional)
    sorters = 'sorters_example' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional)

    try:
        # List Account Activities
        
        results = AccountActivitiesApi(api_client).list_account_activities()
        # Below is a request that includes all optional parameters
        # results = AccountActivitiesApi(api_client).list_account_activities(requested_for, requested_by, regarding_identity, type, limit, offset, count, filters, sorters)
        print("The response of AccountActivitiesApi->list_account_activities:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling AccountActivitiesApi->list_account_activities: %s\n" % e)
```



[[Back to top]](#) 



