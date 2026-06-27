---
id: declassify-source
title: Declassify_Source
pagination_label: Declassify_Source
sidebar_label: Declassify_Source
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Declassify_Source', 'Declassify_Source'] 
slug: /tools/sdk/python/declassify-source/methods/declassify-source
tags: ['SDK', 'Software Development Kit', 'Declassify_Source', 'Declassify_Source']
---

# sailpoint.declassify_source.DeclassifySourceApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-declassify-machine-account-from-source-v1**](#send-declassify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/declassify` | Declassify source&#39;s all accounts


## send-declassify-machine-account-from-source-v1
Declassify source's all accounts
Use this API to declassify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-declassify-machine-account-from-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SendDeclassifyMachineAccountFromSourceV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SendDeclassifyMachineAccountFromSourceV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.declassify_source.api.declassify_source_api import DeclassifySourceApi
from sailpoint.declassify_source.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Declassify source's all accounts
        
        DeclassifySourceApi(api_client).send_declassify_machine_account_from_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # DeclassifySourceApi(api_client).send_declassify_machine_account_from_source_v1(source_id)
    except Exception as e:
        print("Exception when calling DeclassifySourceApi->send_declassify_machine_account_from_source_v1: %s\n" % e)
```



[[Back to top]](#) 



