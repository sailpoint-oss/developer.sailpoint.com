# Machine_Account_Classify

# sailpoint.machine_account_classify.MachineAccountClassifyApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account-v1**](#send-classify-machine-account-v1) | **POST** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
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
Classify single machine account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Account ID.
  Query | classification_mode | **str** |   (optional) (default to default) | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SendClassifyMachineAccountV1200Response**](../models/send-classify-machine-account-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account classified as Machine. | SendClassifyMachineAccountV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SendClassifyMachineAccountV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SendClassifyMachineAccountV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

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

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Account ID. # str | Account ID.
    classification_mode = default # str | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to default) # str | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to default)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Classify single machine account
        
        results = MachineAccountClassifyApi(api_client).send_classify_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountClassifyApi(api_client).send_classify_machine_account_v1(id, classification_mode, x_sail_point_experimental)
        print("The response of MachineAccountClassifyApi->send_classify_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountClassifyApi->send_classify_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 



