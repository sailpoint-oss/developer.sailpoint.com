---
id: machine-account-classify
title: Machine_Account_Classify
pagination_label: Machine_Account_Classify
sidebar_label: Machine_Account_Classify
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Account_Classify', 'Machine_Account_Classify'] 
slug: /tools/sdk/python/machine-account-classify/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'Machine_Account_Classify', 'Machine_Account_Classify']
---

# sailpoint.machine_account_classify.MachineAccountClassifyApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account-v1**](#send-classify-machine-account-v1) | **POST** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
Classify single machine account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Account ID.
  Query | classification_mode | **str** |   (optional) (default to default) | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human.

### Return type
[**SendClassifyMachineAccountV1200Response**](../models/send-classify-machine-account-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account classified as Machine. | SendClassifyMachineAccountV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SendClassifyMachineAccountV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SendClassifyMachineAccountV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_classify.api.machine_account_classify_api import MachineAccountClassifyApi
from sailpoint.machine_account_classify.api_client import ApiClient
from sailpoint.machine_account_classify.models.send_classify_machine_account_v1200_response import SendClassifyMachineAccountV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Account ID. # str | Account ID.
    classification_mode = default # str | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to default) # str | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to default)

    try:
        # Classify single machine account
        
        results = MachineAccountClassifyApi(api_client).send_classify_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountClassifyApi(api_client).send_classify_machine_account_v1(id, classification_mode)
        print("The response of MachineAccountClassifyApi->send_classify_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountClassifyApi->send_classify_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 



