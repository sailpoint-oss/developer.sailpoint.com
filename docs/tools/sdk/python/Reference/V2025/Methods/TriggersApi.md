---
id: v2025-triggers
title: Triggers
pagination_label: Triggers
sidebar_label: Triggers
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Triggers', 'V2025Triggers'] 
slug: /tools/sdk/python/v2025/methods/triggers
tags: ['SDK', 'Software Development Kit', 'Triggers', 'V2025Triggers']
---

# sailpoint.v2025.TriggersApi
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
| Account Uncorrelated | idn:account-uncorrelated | FIRE_AND_FORGET | After an account is removed from an identity. |
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

## Early Access Event Triggers
Triggers that are in-development and not ready for production use.  Please contact support to enable these triggers in your tenant.

| Name | ID | Type | Trigger condition |
|-|-|-|-|
| [Identity Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-deleted/) | idn:identity-deleted | FIRE_AND_FORGET | After an identity is deleted. |
| [Source Account Created](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-created/) | idn:source-account-created | FIRE_AND_FORGET | After a source account is created. |
| [Source Account Deleted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-deleted/) | idn:source-account-deleted | FIRE_AND_FORGET | After a source account is deleted. |
| [Source Account Updated](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-updated/) | idn:source-account-updated | FIRE_AND_FORGET | After a source account is changed. |
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete-trigger-invocation**](#complete-trigger-invocation) | **POST** `/trigger-invocations/{id}/complete` | Complete Trigger Invocation
[**create-subscription**](#create-subscription) | **POST** `/trigger-subscriptions` | Create a Subscription
[**delete-subscription**](#delete-subscription) | **DELETE** `/trigger-subscriptions/{id}` | Delete a Subscription
[**list-subscriptions**](#list-subscriptions) | **GET** `/trigger-subscriptions` | List Subscriptions
[**list-trigger-invocation-status**](#list-trigger-invocation-status) | **GET** `/trigger-invocations/status` | List Latest Invocation Statuses
[**list-triggers**](#list-triggers) | **GET** `/triggers` | List Triggers
[**patch-subscription**](#patch-subscription) | **PATCH** `/trigger-subscriptions/{id}` | Patch a Subscription
[**start-test-trigger-invocation**](#start-test-trigger-invocation) | **POST** `/trigger-invocations/test` | Start a Test Invocation
[**test-subscription-filter**](#test-subscription-filter) | **POST** `/trigger-subscriptions/validate-filter` | Validate a Subscription Filter
[**update-subscription**](#update-subscription) | **PUT** `/trigger-subscriptions/{id}` | Update a Subscription


## complete-trigger-invocation
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Complete Trigger Invocation
Completes an invocation to a REQUEST_RESPONSE type trigger.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/complete-trigger-invocation)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the invocation to complete.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | complete_invocation | [**CompleteInvocation**](../models/complete-invocation) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.complete_invocation import CompleteInvocation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | The ID of the invocation to complete. # str | The ID of the invocation to complete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    complete_invocation = '''{
          "output" : {
            "approved" : false
          },
          "secret" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "error" : "Access request is denied."
        }''' # CompleteInvocation | 

    try:
        # Complete Trigger Invocation
        new_complete_invocation = CompleteInvocation.from_json(complete_invocation)
        TriggersApi(api_client).complete_trigger_invocation(id=id, x_sail_point_experimental=x_sail_point_experimental, complete_invocation=new_complete_invocation)
        # Below is a request that includes all optional parameters
        # TriggersApi(api_client).complete_trigger_invocation(id, x_sail_point_experimental, new_complete_invocation)
    except Exception as e:
        print("Exception when calling TriggersApi->complete_trigger_invocation: %s\n" % e)
```



[[Back to top]](#) 

## create-subscription
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create a Subscription
This API creates a new subscription to a trigger and defines trigger invocation details. The type of subscription determines which config object is required:
* HTTP subscriptions require httpConfig
* EventBridge subscriptions require eventBridgeConfig

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-subscription)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | subscription_post_request | [**SubscriptionPostRequest**](../models/subscription-post-request) | True  | 

### Return type
[**Subscription**](../models/subscription)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | New subscription to a trigger. The trigger can now be invoked by the method defined in the subscription. | Subscription |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.subscription import Subscription
from sailpoint.v2025.models.subscription_post_request import SubscriptionPostRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    subscription_post_request = '''{
          "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
          "httpConfig" : {
            "bearerTokenAuthConfig" : {
              "bearerToken" : "bearerToken"
            },
            "httpAuthenticationType" : "BASIC_AUTH",
            "httpDispatchMode" : "SYNC",
            "basicAuthConfig" : {
              "password" : "password",
              "userName" : "user@example.com"
            },
            "url" : "https://www.example.com"
          },
          "triggerId" : "idn:access-requested",
          "name" : "Access request subscription",
          "description" : "Access requested to site xyz",
          "eventBridgeConfig" : {
            "awsRegion" : "us-west-1",
            "awsAccount" : "123456789012"
          },
          "responseDeadline" : "PT1H",
          "type" : "HTTP",
          "enabled" : true
        }''' # SubscriptionPostRequest | 

    try:
        # Create a Subscription
        new_subscription_post_request = SubscriptionPostRequest.from_json(subscription_post_request)
        results = TriggersApi(api_client).create_subscription(x_sail_point_experimental=x_sail_point_experimental, subscription_post_request=new_subscription_post_request)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).create_subscription(x_sail_point_experimental, new_subscription_post_request)
        print("The response of TriggersApi->create_subscription:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->create_subscription: %s\n" % e)
```



[[Back to top]](#) 

## delete-subscription
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete a Subscription
Deletes an existing subscription to a trigger.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-subscription)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Subscription ID
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | Subscription ID # str | Subscription ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete a Subscription
        
        TriggersApi(api_client).delete_subscription(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # TriggersApi(api_client).delete_subscription(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling TriggersApi->delete_subscription: %s\n" % e)
```



[[Back to top]](#) 

## list-subscriptions
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Subscriptions
Gets a list of all trigger subscriptions.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-subscriptions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName**

### Return type
[**List[Subscription]**](../models/subscription)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of subscriptions. | List[Subscription] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.subscription import Subscription
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"12cff757-c0c0-413b-8ad7-2a47956d1e89\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **triggerId**: *eq*  **type**: *eq, le* (optional)
    sorters = 'triggerName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, triggerName** (optional)

    try:
        # List Subscriptions
        
        results = TriggersApi(api_client).list_subscriptions(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).list_subscriptions(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of TriggersApi->list_subscriptions:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->list_subscriptions: %s\n" % e)
```



[[Back to top]](#) 

## list-trigger-invocation-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Latest Invocation Statuses
Gets a list of latest invocation statuses.
Statuses of successful invocations are available for up to 24 hours. Statuses of failed invocations are available for up to 48 hours.
This endpoint may only fetch up to 2000 invocations, and should not be treated as a representation of the full history of invocations.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-trigger-invocation-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed**

### Return type
[**List[InvocationStatus]**](../models/invocation-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of latest invocation statuses. | List[InvocationStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.invocation_status import InvocationStatus
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'triggerId eq \"idn:access-request-dynamic-approver\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **triggerId**: *eq*  **subscriptionId**: *eq* (optional)
    sorters = 'created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **triggerId, subscriptionName, created, completed** (optional)

    try:
        # List Latest Invocation Statuses
        
        results = TriggersApi(api_client).list_trigger_invocation_status(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).list_trigger_invocation_status(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of TriggersApi->list_trigger_invocation_status:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->list_trigger_invocation_status: %s\n" % e)
```



[[Back to top]](#) 

## list-triggers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Triggers
Gets a list of triggers that are available in the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-triggers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name**

### Return type
[**List[Trigger]**](../models/trigger)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of triggers. | List[Trigger] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.trigger import Trigger
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"idn:access-request-post-approval\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ge, le* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name** (optional)

    try:
        # List Triggers
        
        results = TriggersApi(api_client).list_triggers(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).list_triggers(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of TriggersApi->list_triggers:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->list_triggers: %s\n" % e)
```



[[Back to top]](#) 

## patch-subscription
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Patch a Subscription
This API updates a trigger subscription in IdentityNow, using a set of instructions to modify a subscription partially. The following fields are patchable:

**name**, **description**, **enabled**, **type**, **filter**, **responseDeadline**, **httpConfig**, **eventBridgeConfig**, **workflowConfig**

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-subscription)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Subscription to patch
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | subscription_patch_request_inner | [**[]SubscriptionPatchRequestInner**](../models/subscription-patch-request-inner) | True  | 

### Return type
[**Subscription**](../models/subscription)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated subscription. | Subscription |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.subscription import Subscription
from sailpoint.v2025.models.subscription_patch_request_inner import SubscriptionPatchRequestInner
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | ID of the Subscription to patch # str | ID of the Subscription to patch
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    subscription_patch_request_inner = '''[sailpoint.v2025.SubscriptionPatchRequestInner()]''' # List[SubscriptionPatchRequestInner] | 

    try:
        # Patch a Subscription
        new_subscription_patch_request_inner = SubscriptionPatchRequestInner.from_json(subscription_patch_request_inner)
        results = TriggersApi(api_client).patch_subscription(id=id, x_sail_point_experimental=x_sail_point_experimental, subscription_patch_request_inner=new_subscription_patch_request_inner)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).patch_subscription(id, x_sail_point_experimental, new_subscription_patch_request_inner)
        print("The response of TriggersApi->patch_subscription:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->patch_subscription: %s\n" % e)
```



[[Back to top]](#) 

## start-test-trigger-invocation
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Start a Test Invocation
Initiate a test event for all subscribers of the specified event trigger.  If there are no subscribers to the specified trigger in the tenant, then no test event will be sent.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-test-trigger-invocation)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | test_invocation | [**TestInvocation**](../models/test-invocation) | True  | 

### Return type
[**List[Invocation]**](../models/invocation)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Test trigger invocations that have been started for specified subscription(s). | List[Invocation] |  -  |
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.invocation import Invocation
from sailpoint.v2025.models.test_invocation import TestInvocation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    test_invocation = '''{
          "input" : {
            "identityId" : "201327fda1c44704ac01181e963d463c"
          },
          "subscriptionIds" : [ "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" ],
          "triggerId" : "idn:access-request-post-approval",
          "contentJson" : {
            "workflowId" : 1234
          }
        }''' # TestInvocation | 

    try:
        # Start a Test Invocation
        new_test_invocation = TestInvocation.from_json(test_invocation)
        results = TriggersApi(api_client).start_test_trigger_invocation(x_sail_point_experimental=x_sail_point_experimental, test_invocation=new_test_invocation)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).start_test_trigger_invocation(x_sail_point_experimental, new_test_invocation)
        print("The response of TriggersApi->start_test_trigger_invocation:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->start_test_trigger_invocation: %s\n" % e)
```



[[Back to top]](#) 

## test-subscription-filter
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Validate a Subscription Filter
Validates a JSONPath filter expression against a provided mock input.
Request requires a security scope of: 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-subscription-filter)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | validate_filter_input_dto | [**ValidateFilterInputDto**](../models/validate-filter-input-dto) | True  | 

### Return type
[**ValidateFilterOutputDto**](../models/validate-filter-output-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Boolean whether specified filter expression is valid against the input. | ValidateFilterOutputDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.validate_filter_input_dto import ValidateFilterInputDto
from sailpoint.v2025.models.validate_filter_output_dto import ValidateFilterOutputDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    validate_filter_input_dto = '''{
          "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
          "input" : {
            "identityId" : "201327fda1c44704ac01181e963d463c"
          }
        }''' # ValidateFilterInputDto | 

    try:
        # Validate a Subscription Filter
        new_validate_filter_input_dto = ValidateFilterInputDto.from_json(validate_filter_input_dto)
        results = TriggersApi(api_client).test_subscription_filter(x_sail_point_experimental=x_sail_point_experimental, validate_filter_input_dto=new_validate_filter_input_dto)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).test_subscription_filter(x_sail_point_experimental, new_validate_filter_input_dto)
        print("The response of TriggersApi->test_subscription_filter:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->test_subscription_filter: %s\n" % e)
```



[[Back to top]](#) 

## update-subscription
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update a Subscription
This API updates a trigger subscription in IdentityNow, using a full object representation. In other words, the existing
  Subscription is completely replaced. The following fields are immutable:


  * id

  * triggerId


  Attempts to modify these fields result in 400.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-subscription)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Subscription ID
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | subscription_put_request | [**SubscriptionPutRequest**](../models/subscription-put-request) | True  | 

### Return type
[**Subscription**](../models/subscription)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated subscription. | Subscription |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.triggers_api import TriggersApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.subscription import Subscription
from sailpoint.v2025.models.subscription_put_request import SubscriptionPutRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | Subscription ID # str | Subscription ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    subscription_put_request = '''{
          "filter" : "$[?($.identityId == \"201327fda1c44704ac01181e963d463c\")]",
          "httpConfig" : {
            "bearerTokenAuthConfig" : {
              "bearerToken" : "bearerToken"
            },
            "httpAuthenticationType" : "BASIC_AUTH",
            "httpDispatchMode" : "SYNC",
            "basicAuthConfig" : {
              "password" : "password",
              "userName" : "user@example.com"
            },
            "url" : "https://www.example.com"
          },
          "name" : "Access request subscription",
          "description" : "Access requested to site xyz",
          "eventBridgeConfig" : {
            "awsRegion" : "us-west-1",
            "awsAccount" : "123456789012"
          },
          "responseDeadline" : "PT1H",
          "type" : "HTTP",
          "enabled" : true
        }''' # SubscriptionPutRequest | 

    try:
        # Update a Subscription
        new_subscription_put_request = SubscriptionPutRequest.from_json(subscription_put_request)
        results = TriggersApi(api_client).update_subscription(id=id, x_sail_point_experimental=x_sail_point_experimental, subscription_put_request=new_subscription_put_request)
        # Below is a request that includes all optional parameters
        # results = TriggersApi(api_client).update_subscription(id, x_sail_point_experimental, new_subscription_put_request)
        print("The response of TriggersApi->update_subscription:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TriggersApi->update_subscription: %s\n" % e)
```



[[Back to top]](#) 



