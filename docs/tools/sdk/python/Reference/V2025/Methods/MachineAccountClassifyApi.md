---
id: v2025-machine-account-classify
title: Machine_Account_Classify
pagination_label: Machine_Account_Classify
sidebar_label: Machine_Account_Classify
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Account_Classify', 'V2025Machine_Account_Classify'] 
slug: /tools/sdk/python/v2025/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'Machine_Account_Classify', 'V2025Machine_Account_Classify']
---

# sailpoint.v2025.MachineAccountClassifyApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account**](#send-classify-machine-account) | **POST** `/accounts/{id}/classify` | Classify a Single Machine Account


## send-classify-machine-account
Classify a Single Machine Account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-classify-machine-account)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Account ID.
  Query | classification_mode | **str** |   (optional) (default to default) | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human.

### Return type
[**SendClassifyMachineAccount200Response**](../models/send-classify-machine-account200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account classified as Machine. | SendClassifyMachineAccount200Response |  -  |
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
from sailpoint.v2025.api.machine_account_classify_api import MachineAccountClassifyApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.send_classify_machine_account200_response import SendClassifyMachineAccount200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Account ID. # str | Account ID.
    classification_mode = default # str | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to default) # str | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to default)

    try:
        # Classify a Single Machine Account
        
        results = MachineAccountClassifyApi(api_client).send_classify_machine_account(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountClassifyApi(api_client).send_classify_machine_account(id, classification_mode)
        print("The response of MachineAccountClassifyApi->send_classify_machine_account:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountClassifyApi->send_classify_machine_account: %s\n" % e)
```



[[Back to top]](#) 



