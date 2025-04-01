---
id: v2025-access-request-identity-metrics
title: Access_Request_Identity_Metrics
pagination_label: Access_Request_Identity_Metrics
sidebar_label: Access_Request_Identity_Metrics
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Request_Identity_Metrics', 'V2025Access_Request_Identity_Metrics'] 
slug: /tools/sdk/python/v2025/methods/access-request-identity-metrics
tags: ['SDK', 'Software Development Kit', 'Access_Request_Identity_Metrics', 'V2025Access_Request_Identity_Metrics']
---

# sailpoint.v2025.AccessRequestIdentityMetricsApi
  Use this API to implement access request identity metrics functionality.
With this functionality in place, access request reviewers can see relevant details about the requested access item and associated source activity. 
This allows reviewers to see how many of the identities who share a manager with the access requester have this same type of access and how many of them have had activity in the related source. 
This additional context about whether the access has been granted before and how often it has been used can help those approving access requests make more informed decisions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-access-request-identity-metrics**](#get-access-request-identity-metrics) | **GET** `/access-request-identity-metrics/{identityId}/requested-objects/{requestedObjectId}/type/{type}` | Return access request identity metrics


## get-access-request-identity-metrics
Return access request identity metrics
Use this API to return information access metrics.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-access-request-identity-metrics)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Manager's identity ID.
Path   | requested_object_id | **str** | True  | Requested access item's ID.
Path   | type | **str** | True  | Requested access item's type.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Summary of the resource access and source activity for the direct reports of the provided manager. | object |  -  |
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
from sailpoint.v2025.api.access_request_identity_metrics_api import AccessRequestIdentityMetricsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = '7025c863-c270-4ba6-beea-edf3cb091573' # str | Manager's identity ID. # str | Manager's identity ID.
    requested_object_id = '2db501be-f0fb-4cc5-a695-334133c52891' # str | Requested access item's ID. # str | Requested access item's ID.
    type = 'ENTITLEMENT' # str | Requested access item's type. # str | Requested access item's type.

    try:
        # Return access request identity metrics
        
        results = AccessRequestIdentityMetricsApi(api_client).get_access_request_identity_metrics(identity_id=identity_id, requested_object_id=requested_object_id, type=type)
        # Below is a request that includes all optional parameters
        # results = AccessRequestIdentityMetricsApi(api_client).get_access_request_identity_metrics(identity_id, requested_object_id, type)
        print("The response of AccessRequestIdentityMetricsApi->get_access_request_identity_metrics:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestIdentityMetricsApi->get_access_request_identity_metrics: %s\n" % e)
```



[[Back to top]](#) 



