---
id: v2025-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvals', 'V2025Approvals'] 
slug: /tools/sdk/python/v2025/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'V2025Approvals']
---

# sailpoint.v2025.ApprovalsApi
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/v2025/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-approval**](#get-approval) | **GET** `/generic-approvals/{id}` | Get an approval
[**get-approvals**](#get-approvals) | **GET** `/generic-approvals` | Get Approvals


## get-approval
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
Get an approval
Retrieve a single approval for a given approval ID. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approval)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the approval that is to be returned
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | ID of the approval that is to be returned # str | ID of the approval that is to be returned
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get an approval
        
        results = ApprovalsApi(api_client).get_approval(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approval(id, x_sail_point_experimental)
        print("The response of ApprovalsApi->get_approval:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approval: %s\n" % e)
```



[[Back to top]](#) 

## get-approvals
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
Get Approvals
Retrieve a list of approvals, which can be filtered by requester ID, status, or reference type. "Mine" query parameter can be used and it will return all approvals for the current approver. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals. 
Absence of all query parameters will will default to mine=true.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approvals)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | mine | **bool** |   (optional) | Returns the list of approvals for the current caller
  Query | requester_id | **str** |   (optional) | Returns the list of approvals for a given requester ID
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*

### Return type
[**List[Approval]**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Approvals | List[Approval] |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    mine = true # bool | Returns the list of approvals for the current caller (optional) # bool | Returns the list of approvals for the current caller (optional)
    requester_id = '17e633e7d57e481569df76323169deb6a' # str | Returns the list of approvals for a given requester ID (optional) # str | Returns the list of approvals for a given requester ID (optional)
    filters = 'filters=status eq PENDING' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional)

    try:
        # Get Approvals
        
        results = ApprovalsApi(api_client).get_approvals(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approvals(x_sail_point_experimental, mine, requester_id, filters)
        print("The response of ApprovalsApi->get_approvals:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approvals: %s\n" % e)
```



[[Back to top]](#) 



