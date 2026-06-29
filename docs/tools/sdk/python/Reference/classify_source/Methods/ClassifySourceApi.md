---
id: classify-source
title: Classify_Source
pagination_label: Classify_Source
sidebar_label: Classify_Source
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Classify_Source', 'Classify_Source'] 
slug: /tools/sdk/python/classify-source/methods/classify-source
tags: ['SDK', 'Software Development Kit', 'Classify_Source', 'Classify_Source']
---

# sailpoint.classify_source.ClassifySourceApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source-v1**](#delete-classify-machine-account-from-source-v1) | **DELETE** `/sources/v1/{sourceId}/classify` | Cancel classify source&#39;s accounts process
[**get-classify-machine-account-from-source-status-v1**](#get-classify-machine-account-from-source-status-v1) | **GET** `/sources/v1/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source-v1**](#send-classify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/classify` | Classify source&#39;s all accounts


## delete-classify-machine-account-from-source-v1
Cancel classify source's accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-classify-machine-account-from-source-v1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetClassifyMachineAccountFromSourceStatusV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetClassifyMachineAccountFromSourceStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.classify_source.api.classify_source_api import ClassifySourceApi
from sailpoint.classify_source.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Cancel classify source's accounts process
        
        ClassifySourceApi(api_client).delete_classify_machine_account_from_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # ClassifySourceApi(api_client).delete_classify_machine_account_from_source_v1(source_id)
    except Exception as e:
        print("Exception when calling ClassifySourceApi->delete_classify_machine_account_from_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-classify-machine-account-from-source-status-v1
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-classify-machine-account-from-source-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
[**Sourceclassificationstatus**](../models/sourceclassificationstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Accounts Classification Status object. | Sourceclassificationstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetClassifyMachineAccountFromSourceStatusV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetClassifyMachineAccountFromSourceStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.classify_source.api.classify_source_api import ClassifySourceApi
from sailpoint.classify_source.api_client import ApiClient
from sailpoint.classify_source.models.sourceclassificationstatus import Sourceclassificationstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Source accounts classification status
        
        results = ClassifySourceApi(api_client).get_classify_machine_account_from_source_status_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = ClassifySourceApi(api_client).get_classify_machine_account_from_source_status_v1(source_id)
        print("The response of ClassifySourceApi->get_classify_machine_account_from_source_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ClassifySourceApi->get_classify_machine_account_from_source_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## send-classify-machine-account-from-source-v1
Classify source's all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-from-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.

### Return type
[**SendClassifyMachineAccountFromSourceV1200Response**](../models/send-classify-machine-account-from-source-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source&#39;s all accounts submitted for classification. | SendClassifyMachineAccountFromSourceV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetClassifyMachineAccountFromSourceStatusV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetClassifyMachineAccountFromSourceStatusV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.classify_source.api.classify_source_api import ClassifySourceApi
from sailpoint.classify_source.api_client import ApiClient
from sailpoint.classify_source.models.send_classify_machine_account_from_source_v1200_response import SendClassifyMachineAccountFromSourceV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Classify source's all accounts
        
        results = ClassifySourceApi(api_client).send_classify_machine_account_from_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = ClassifySourceApi(api_client).send_classify_machine_account_from_source_v1(source_id)
        print("The response of ClassifySourceApi->send_classify_machine_account_from_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ClassifySourceApi->send_classify_machine_account_from_source_v1: %s\n" % e)
```



[[Back to top]](#) 



