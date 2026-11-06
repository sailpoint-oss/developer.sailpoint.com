# Machine_Account_Creation_Request

# sailpoint.machine_account_creation_request.MachineAccountCreationRequestApi
  Use this API to submit and retrieve machine account creation requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-request-v1**](#create-machine-account-request-v1) | **POST** `/account-requests/v1/machine-account-create` | Submit Machine Account Creation Request
[**create-machine-account-request-v2**](#create-machine-account-request-v2) | **POST** `/account-requests/v2/machine-account-create` | Submit Machine Account Creation Request
[**create-machine-account-v2**](#create-machine-account-v2) | **POST** `/machine-accounts/v2/machine-account-create` | Create Machine Account V2
[**get-create-machine-account-request-v1**](#get-create-machine-account-request-v1) | **GET** `/account-requests/v1/machine-account-create/{accountRequestId}` | Get Machine Account Creation Request
[**get-machine-account-create-access-info-v1**](#get-machine-account-create-access-info-v1) | **GET** `/source-subtypes/v1/machine-account-create-access` | Machine Account Create Access


## create-machine-account-request-v1
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
Submit Machine Account Creation Request
Initiates machine account creation request for the specified subtype.
This method validates the input data, processes the machine account creation request,
and generates an asynchronous result containing a tracking ID. 

>**NOTE: You can only request a machine accounts on subtype for which you have a create machine account entitlement provisioned.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_create_request_input | [**MachineAccountCreateRequestInput**](../models/machine-account-create-request-input) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccountRequestAsyncResult**](../models/account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Machine account creation request result. | AccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateMachineAccountRequestV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateMachineAccountRequestV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_creation_request.api.machine_account_creation_request_api import MachineAccountCreationRequestApi
from sailpoint.machine_account_creation_request.api_client import ApiClient
from sailpoint.machine_account_creation_request.models.account_request_async_result import AccountRequestAsyncResult
from sailpoint.machine_account_creation_request.models.machine_account_create_request_input import MachineAccountCreateRequestInput
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_create_request_input = '''{
          "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
          "environment" : "Dev",
          "description" : "Requesting machine account for tracking the inventory.",
          "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
          "userInput" : {
            "target" : "AD Source",
            "description" : "Inventory tracking"
          },
          "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
        }''' # MachineAccountCreateRequestInput | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Submit Machine Account Creation Request
        new_machine_account_create_request_input = MachineAccountCreateRequestInput.from_json(machine_account_create_request_input)
        results = MachineAccountCreationRequestApi(api_client).create_machine_account_request_v1(machine_account_create_request_input=new_machine_account_create_request_input)
        # Below is a request that includes all optional parameters
        # results = MachineAccountCreationRequestApi(api_client).create_machine_account_request_v1(new_machine_account_create_request_input, x_sail_point_experimental)
        print("The response of MachineAccountCreationRequestApi->create_machine_account_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountCreationRequestApi->create_machine_account_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-machine-account-request-v2
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
Submit Machine Account Creation Request
Submits a machine account creation request on the account-requests API.
This operation accepts the same request and runs the same creation process as [Create Machine Account](https://developer.sailpoint.com/docs/api/create-machine-account-v-2). Use this operation when the integration already calls the account-requests APIs. New integrations should call [Create Machine Account](https://developer.sailpoint.com/docs/api/create-machine-account-v-2).

This method validates the input data, processes the machine account creation request, and returns an asynchronous result containing a tracking ID.

Compared with v1, this version:
- Accepts a `sourceId` so you can choose the source to create the account on. When subtypes can be configured per source for the tenant, `sourceId` is required and the subtype must be available on that source.
- Accepts `entitlements`, which lets you add a comment, start date, and remove date to each requested entitlement.
- Supports subtypes that are not tied to a single source. Version 1 rejects those subtypes.

There is no v2 status endpoint. Use the returned `accountRequestId` with [Get Machine Account Creation Request](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1) to track the request.

This API returns `403` when machine identity creation is not included in the tenant's plan. When machine account creation is not enabled for the tenant, this API returns `404`.

>**NOTE: You can only request a machine account on a subtype for which you have a create machine account entitlement provisioned. Otherwise, this API returns `403`.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_create_request_input_v2 | [**MachineAccountCreateRequestInputV2**](../models/machine-account-create-request-input-v2) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccountRequestAsyncResult**](../models/account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Machine account creation request result. | AccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateMachineAccountRequestV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateMachineAccountRequestV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_creation_request.api.machine_account_creation_request_api import MachineAccountCreationRequestApi
from sailpoint.machine_account_creation_request.api_client import ApiClient
from sailpoint.machine_account_creation_request.models.account_request_async_result import AccountRequestAsyncResult
from sailpoint.machine_account_creation_request.models.machine_account_create_request_input_v2 import MachineAccountCreateRequestInputV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_create_request_input_v2 = '''{
          "sourceId" : "2c9180835d191a86015d28455b4a2329",
          "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "entitlements" : [ {
            "id" : "2c91808a7624751a01762f19d67c220e",
            "comment" : "Needed to read the inventory share.",
            "startDate" : "2026-11-01T00:00:00Z",
            "removeDate" : "2027-11-01T00:00:00Z"
          } ],
          "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
          "environment" : "Dev",
          "description" : "Requesting machine account for tracking the inventory.",
          "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
          "userInput" : {
            "target" : "AD Source",
            "description" : "Inventory tracking"
          },
          "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
        }''' # MachineAccountCreateRequestInputV2 | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Submit Machine Account Creation Request
        new_machine_account_create_request_input_v2 = MachineAccountCreateRequestInputV2.from_json(machine_account_create_request_input_v2)
        results = MachineAccountCreationRequestApi(api_client).create_machine_account_request_v2(machine_account_create_request_input_v2=new_machine_account_create_request_input_v2)
        # Below is a request that includes all optional parameters
        # results = MachineAccountCreationRequestApi(api_client).create_machine_account_request_v2(new_machine_account_create_request_input_v2, x_sail_point_experimental)
        print("The response of MachineAccountCreationRequestApi->create_machine_account_request_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountCreationRequestApi->create_machine_account_request_v2: %s\n" % e)
```



[[Back to top]](#) 

## create-machine-account-v2
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
Create Machine Account V2
Submits a machine account creation request. New integrations should use this operation.
This operation accepts the same request and runs the same creation process as [Submit Machine Account Creation Request](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-2). That operation stays on the account-requests API for integrations that already call it. When version 1 cannot create the account because the subtype is not tied to a single source, the error directs the caller here.
This method validates the input data, processes the machine account creation request, and returns an asynchronous result containing a tracking ID.

Compared with v1, this version:
- Accepts a `sourceId` so you can choose the source to create the account on. When subtypes can be configured per source for the tenant, `sourceId` is required and the subtype must be available on that source.
- Accepts `entitlements`, which lets you add a comment, start date, and remove date to each requested entitlement.
- Supports subtypes that are not tied to a single source. Version 1 rejects those subtypes.

There is no v2 status endpoint. Use the returned `accountRequestId` with [Get Machine Account Creation Request](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1) to track the request.

This API returns `403` when machine identity creation is not included in the tenant's plan. When machine account creation is not enabled for the tenant, this API returns `404`.

>**NOTE: You can only request a machine account on a subtype for which you have a create machine account entitlement provisioned. Otherwise, this API returns `403`.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_create_request_input_v2 | [**MachineAccountCreateRequestInputV2**](../models/machine-account-create-request-input-v2) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccountRequestAsyncResult**](../models/account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Machine account creation request result. | AccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateMachineAccountRequestV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateMachineAccountRequestV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_creation_request.api.machine_account_creation_request_api import MachineAccountCreationRequestApi
from sailpoint.machine_account_creation_request.api_client import ApiClient
from sailpoint.machine_account_creation_request.models.account_request_async_result import AccountRequestAsyncResult
from sailpoint.machine_account_creation_request.models.machine_account_create_request_input_v2 import MachineAccountCreateRequestInputV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_create_request_input_v2 = '''{
          "sourceId" : "2c9180835d191a86015d28455b4a2329",
          "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "entitlements" : [ {
            "id" : "2c91808a7624751a01762f19d67c220e",
            "comment" : "Needed to read the inventory share.",
            "startDate" : "2026-11-01T00:00:00Z",
            "removeDate" : "2027-11-01T00:00:00Z"
          } ],
          "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
          "environment" : "Dev",
          "description" : "Requesting machine account for tracking the inventory.",
          "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
          "userInput" : {
            "target" : "AD Source",
            "description" : "Inventory tracking"
          },
          "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
        }''' # MachineAccountCreateRequestInputV2 | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create Machine Account V2
        new_machine_account_create_request_input_v2 = MachineAccountCreateRequestInputV2.from_json(machine_account_create_request_input_v2)
        results = MachineAccountCreationRequestApi(api_client).create_machine_account_v2(machine_account_create_request_input_v2=new_machine_account_create_request_input_v2)
        # Below is a request that includes all optional parameters
        # results = MachineAccountCreationRequestApi(api_client).create_machine_account_v2(new_machine_account_create_request_input_v2, x_sail_point_experimental)
        print("The response of MachineAccountCreationRequestApi->create_machine_account_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountCreationRequestApi->create_machine_account_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-create-machine-account-request-v1
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
Get Machine Account Creation Request
Retrieves a account request details for machine account creation. This allows the user to view all details for given account request.

[API Spec](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | account_request_id | **str** | True  | Account Request ID

### Return type
[**AccountRequestDetailsDto**](../models/account-request-details-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Account Request Details object | AccountRequestDetailsDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateMachineAccountRequestV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateMachineAccountRequestV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_creation_request.api.machine_account_creation_request_api import MachineAccountCreationRequestApi
from sailpoint.machine_account_creation_request.api_client import ApiClient
from sailpoint.machine_account_creation_request.models.account_request_details_dto import AccountRequestDetailsDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    account_request_id = 'gt38f94347e94562b5bb8424a56498d8' # str | Account Request ID # str | Account Request ID

    try:
        # Get Machine Account Creation Request
        
        results = MachineAccountCreationRequestApi(api_client).get_create_machine_account_request_v1(x_sail_point_experimental=x_sail_point_experimental, account_request_id=account_request_id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountCreationRequestApi(api_client).get_create_machine_account_request_v1(x_sail_point_experimental, account_request_id)
        print("The response of MachineAccountCreationRequestApi->get_create_machine_account_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountCreationRequestApi->get_create_machine_account_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-create-access-info-v1
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
Machine Account Create Access
This endpoint retrieves the list of sources and subtypes for which logged in user has the entitlement to create a machine account.
The response includes a list of object detailing the source, subtype and entitlement details which enables the clients to understand if they can submit the request to create a machine account for the given subtype.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-create-access-info-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | offset | **int** |   (optional) (default to 0) | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0.
  Query | limit | **int** |   (optional) (default to 250) | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used.

### Return type
[**List[MachineAccountCreateAccessDto]**](../models/machine-account-create-access-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of source and the subtypes. | List[MachineAccountCreateAccessDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateMachineAccountRequestV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateMachineAccountRequestV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_creation_request.api.machine_account_creation_request_api import MachineAccountCreationRequestApi
from sailpoint.machine_account_creation_request.api_client import ApiClient
from sailpoint.machine_account_creation_request.models.machine_account_create_access_dto import MachineAccountCreateAccessDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    offset = 0 # int | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0) # int | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional) (default to 0)
    limit = 250 # int | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250) # int | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional) (default to 250)

    try:
        # Machine Account Create Access
        
        results = MachineAccountCreationRequestApi(api_client).get_machine_account_create_access_info_v1(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineAccountCreationRequestApi(api_client).get_machine_account_create_access_info_v1(x_sail_point_experimental, offset, limit)
        print("The response of MachineAccountCreationRequestApi->get_machine_account_create_access_info_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountCreationRequestApi->get_machine_account_create_access_info_v1: %s\n" % e)
```



[[Back to top]](#) 



