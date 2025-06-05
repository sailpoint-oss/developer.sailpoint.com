---
id: v2025-classify-source
title: Classify_Source
pagination_label: Classify_Source
sidebar_label: Classify_Source
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Classify_Source', 'V2025Classify_Source'] 
slug: /tools/sdk/python/v2025/methods/classify-source
tags: ['SDK', 'Software Development Kit', 'Classify_Source', 'V2025Classify_Source']
---

# sailpoint.v2025.ClassifySourceApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source**](#delete-classify-machine-account-from-source) | **DELETE** `/sources/{sourceId}/classify` | Cancel classify source&#39;s accounts process
[**get-classify-machine-account-from-source-status**](#get-classify-machine-account-from-source-status) | **GET** `/sources/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source**](#send-classify-machine-account-from-source) | **POST** `/sources/{sourceId}/classify` | Classify source&#39;s all accounts


## delete-classify-machine-account-from-source
Cancel classify source's accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-classify-machine-account-from-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

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
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.classify_source_api import ClassifySourceApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Cancel classify source's accounts process
        
        ClassifySourceApi(api_client).delete_classify_machine_account_from_source(id=id)
        # Below is a request that includes all optional parameters
        # ClassifySourceApi(api_client).delete_classify_machine_account_from_source(id)
    except Exception as e:
        print("Exception when calling ClassifySourceApi->delete_classify_machine_account_from_source: %s\n" % e)
```



[[Back to top]](#) 

## get-classify-machine-account-from-source-status
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-classify-machine-account-from-source-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
[**SourceClassificationStatus**](../models/source-classification-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source Accounts Classification Status object. | SourceClassificationStatus |  -  |
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
from sailpoint.v2025.api.classify_source_api import ClassifySourceApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_classification_status import SourceClassificationStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Source accounts classification status
        
        results = ClassifySourceApi(api_client).get_classify_machine_account_from_source_status(id=id)
        # Below is a request that includes all optional parameters
        # results = ClassifySourceApi(api_client).get_classify_machine_account_from_source_status(id)
        print("The response of ClassifySourceApi->get_classify_machine_account_from_source_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ClassifySourceApi->get_classify_machine_account_from_source_status: %s\n" % e)
```



[[Back to top]](#) 

## send-classify-machine-account-from-source
Classify source's all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-classify-machine-account-from-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.

### Return type
[**SendClassifyMachineAccountFromSource200Response**](../models/send-classify-machine-account-from-source200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Source&#39;s all accounts submitted for classification. | SendClassifyMachineAccountFromSource200Response |  -  |
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
from sailpoint.v2025.api.classify_source_api import ClassifySourceApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.send_classify_machine_account_from_source200_response import SendClassifyMachineAccountFromSource200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.

    try:
        # Classify source's all accounts
        
        results = ClassifySourceApi(api_client).send_classify_machine_account_from_source(id=id)
        # Below is a request that includes all optional parameters
        # results = ClassifySourceApi(api_client).send_classify_machine_account_from_source(id)
        print("The response of ClassifySourceApi->send_classify_machine_account_from_source:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ClassifySourceApi->send_classify_machine_account_from_source: %s\n" % e)
```



[[Back to top]](#) 



