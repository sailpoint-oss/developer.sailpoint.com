# Machine_Accounts

# sailpoint.machine_accounts.MachineAccountsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-subtype-v1**](#create-machine-account-subtype-v1) | **POST** `/sources/v1/{sourceId}/subtypes` | Create subtype
[**delete-machine-account-async-v1**](#delete-machine-account-async-v1) | **POST** `/machine-accounts/v1/{id}/remove` | Remove machine account
[**delete-machine-account-subtype-by-technical-name-v1**](#delete-machine-account-subtype-by-technical-name-v1) | **DELETE** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Delete subtype
[**delete-machine-account-v1**](#delete-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/delete` | Delete machine account
[**disable-machine-account-v1**](#disable-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/disable` | Disable machine account
[**disable-machine-accounts-in-bulk-v1**](#disable-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-disable` | Disable machine accounts in bulk
[**enable-machine-account-v1**](#enable-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/enable` | Enable machine account
[**enable-machine-accounts-in-bulk-v1**](#enable-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-enable` | Enable machine accounts in bulk
[**get-machine-account-entitlements-v1**](#get-machine-account-entitlements-v1) | **GET** `/machine-accounts/v1/{id}/entitlements` | List machine account entitlements
[**get-machine-account-subtype-by-id-v1**](#get-machine-account-subtype-by-id-v1) | **GET** `/sources/v1/subtypes/{subtypeId}` | Retrieve subtype by subtype id
[**get-machine-account-subtype-by-technical-name-v1**](#get-machine-account-subtype-by-technical-name-v1) | **GET** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Retrieve subtype by source and technicalName
[**get-machine-account-v1**](#get-machine-account-v1) | **GET** `/machine-accounts/v1/{id}` | Get machine account details
[**get-machine-account-v2**](#get-machine-account-v2) | **GET** `/machine-accounts/v2/{id}` | Get machine account details
[**get-machine-accounts-summary-v1**](#get-machine-accounts-summary-v1) | **GET** `/machine-accounts/v1/machine-accounts-summary` | Get machine account candidate summary
[**list-machine-account-machine-identities-v1**](#list-machine-account-machine-identities-v1) | **GET** `/machine-accounts/v1/{id}/machine-identities` | List linked machine identities
[**list-machine-account-subtypes-v1**](#list-machine-account-subtypes-v1) | **GET** `/sources/v1/{sourceId}/subtypes` | Retrieve all subtypes by source
[**list-machine-accounts-v1**](#list-machine-accounts-v1) | **GET** `/machine-accounts/v1` | List machine accounts
[**list-machine-accounts-v2**](#list-machine-accounts-v2) | **GET** `/machine-accounts/v2` | List machine accounts
[**patch-machine-account-subtype-by-technical-name-v1**](#patch-machine-account-subtype-by-technical-name-v1) | **PATCH** `/sources/v1/{sourceId}/subtypes/{technicalName}` | Patch subtype
[**reload-machine-account-v1**](#reload-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/reload` | Reload machine account
[**reload-machine-accounts-in-bulk-async-v1**](#reload-machine-accounts-in-bulk-async-v1) | **POST** `/machine-accounts/v1/bulk-reload-async` | Bulk reload machine accounts asynchronously
[**reload-machine-accounts-in-bulk-v1**](#reload-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-reload` | Reload machine accounts in bulk
[**unlock-machine-account-v1**](#unlock-machine-account-v1) | **POST** `/machine-accounts/v1/{id}/unlock` | Unlock machine account
[**update-machine-account-v1**](#update-machine-account-v1) | **PATCH** `/machine-accounts/v1/{id}` | Update machine account details
[**update-machine-account-v2**](#update-machine-account-v2) | **PATCH** `/machine-accounts/v2/{id}` | Update machine account details
[**update-machine-accounts-in-bulk-v1**](#update-machine-accounts-in-bulk-v1) | **POST** `/machine-accounts/v1/bulk-update` | Update machine accounts in bulk


## create-machine-account-subtype-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Create subtype
Create a new machine account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-subtype-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
 Body  | create_machine_account_subtype_v1_request | [**CreateMachineAccountSubtypeV1Request**](../models/create-machine-account-subtype-v1-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created machine account subtype. | SourceSubtype |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.create_machine_account_subtype_v1_request import CreateMachineAccountSubtypeV1Request
from sailpoint.machine_accounts.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    create_machine_account_subtype_v1_request = '''{"technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}''' # CreateMachineAccountSubtypeV1Request | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create subtype
        new_create_machine_account_subtype_v1_request = CreateMachineAccountSubtypeV1Request.from_json(create_machine_account_subtype_v1_request)
        results = MachineAccountsApi(api_client).create_machine_account_subtype_v1(source_id=source_id, create_machine_account_subtype_v1_request=new_create_machine_account_subtype_v1_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).create_machine_account_subtype_v1(source_id, new_create_machine_account_subtype_v1_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->create_machine_account_subtype_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->create_machine_account_subtype_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-async-v1
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
Remove machine account
Use this API to remove a machine account from SailPoint Identity Security. The source account is left unchanged, and a removed machine account can be re-created during the next aggregation. The response returns the task ID.

This endpoint is intended for:

* Removing machine accounts that no longer exist on the source.

* Removing machine accounts that will not be aggregated after a source configuration change.

* Forcing machine accounts to be re-created on the next aggregation so account processing can run again.

A caller who owns the machine account can remove it. Other callers need the **idn:mis-account:remove** right.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-async-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountsAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_accounts_async_result import MachineAccountsAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Remove machine account
        
        results = MachineAccountsApi(api_client).delete_machine_account_async_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).delete_machine_account_async_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->delete_machine_account_async_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->delete_machine_account_async_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-subtype-by-technical-name-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Delete subtype
Delete a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-by-technical-name-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
Path   | technical_name | **str** | True  | The technical name of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Subtype deleted successfully. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    technical_name = 'foo' # str | The technical name of the subtype. # str | The technical name of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete subtype
        
        MachineAccountsApi(api_client).delete_machine_account_subtype_by_technical_name_v1(source_id=source_id, technical_name=technical_name)
        # Below is a request that includes all optional parameters
        # MachineAccountsApi(api_client).delete_machine_account_subtype_by_technical_name_v1(source_id, technical_name, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineAccountsApi->delete_machine_account_subtype_by_technical_name_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-v1
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
Delete machine account
Use this API to submit a request to delete a machine account from its source. Depending on the tenant's account deletion approval settings, the request can need approval before the account is deleted. The response returns the ID of the account request.

The machine account must be linked to a machine identity; otherwise this API returns `404`. Machine accounts aggregated from a dataset can be rejected with `400`.

A caller who owns the machine account can delete it. Other callers need the **idn:mis-account:delete** right.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
 Body  | machine_account_delete_request | [**MachineAccountDeleteRequest**](../models/machine-account-delete-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | The deletion request was accepted. | MachineAccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_delete_request import MachineAccountDeleteRequest
from sailpoint.machine_accounts.models.machine_account_request_async_result import MachineAccountRequestAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    machine_account_delete_request = '''{
          "comments" : "This machine account is no longer used."
        }''' # MachineAccountDeleteRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete machine account
        new_machine_account_delete_request = MachineAccountDeleteRequest.from_json(machine_account_delete_request)
        results = MachineAccountsApi(api_client).delete_machine_account_v1(id=id, machine_account_delete_request=new_machine_account_delete_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).delete_machine_account_v1(id, new_machine_account_delete_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->delete_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->delete_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## disable-machine-account-v1
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
Disable machine account
This API submits a task to disable a machine account and returns the task ID.

A caller who owns the machine account can disable it. Other callers need the **idn:mis-account:disable** right.


[API Spec](https://developer.sailpoint.com/docs/api/disable-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountsAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_accounts_async_result import MachineAccountsAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Disable machine account
        
        results = MachineAccountsApi(api_client).disable_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).disable_machine_account_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->disable_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->disable_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## disable-machine-accounts-in-bulk-v1
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
Disable machine accounts in bulk
Use this API to submit one task that disables up to 100 machine accounts, and get the task ID. Machine accounts that are already disabled or that can't be disabled are skipped. When none of the machine accounts can be disabled, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can disable them. Other callers need the **idn:mis-account:disable** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/disable-machine-accounts-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_bulk_request | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_bulk_request import MachineAccountBulkRequest
from sailpoint.machine_accounts.models.machine_account_request_async_result import MachineAccountRequestAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_bulk_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }''' # MachineAccountBulkRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Disable machine accounts in bulk
        new_machine_account_bulk_request = MachineAccountBulkRequest.from_json(machine_account_bulk_request)
        results = MachineAccountsApi(api_client).disable_machine_accounts_in_bulk_v1(machine_account_bulk_request=new_machine_account_bulk_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).disable_machine_accounts_in_bulk_v1(new_machine_account_bulk_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->disable_machine_accounts_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->disable_machine_accounts_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## enable-machine-account-v1
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
Enable machine account
This API submits a task to enable a machine account and returns the task ID.

A caller who owns the machine account can enable it. Other callers need the **idn:mis-account:enable** right.


[API Spec](https://developer.sailpoint.com/docs/api/enable-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountsAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_accounts_async_result import MachineAccountsAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Enable machine account
        
        results = MachineAccountsApi(api_client).enable_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).enable_machine_account_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->enable_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->enable_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## enable-machine-accounts-in-bulk-v1
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
Enable machine accounts in bulk
Use this API to submit one task that enables up to 100 machine accounts, and get the task ID. Machine accounts that are already enabled or that can't be enabled are skipped. When none of the machine accounts can be enabled, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can enable them. Other callers need the **idn:mis-account:enable** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/enable-machine-accounts-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_bulk_request | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_bulk_request import MachineAccountBulkRequest
from sailpoint.machine_accounts.models.machine_account_request_async_result import MachineAccountRequestAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_bulk_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }''' # MachineAccountBulkRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Enable machine accounts in bulk
        new_machine_account_bulk_request = MachineAccountBulkRequest.from_json(machine_account_bulk_request)
        results = MachineAccountsApi(api_client).enable_machine_accounts_in_bulk_v1(machine_account_bulk_request=new_machine_account_bulk_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).enable_machine_accounts_in_bulk_v1(new_machine_account_bulk_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->enable_machine_accounts_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->enable_machine_accounts_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-entitlements-v1
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
List machine account entitlements
Use this API to list the entitlements held by a machine account. Use `limit` and `offset` to page through the results.

This API requires the **idn:mis-account:read** right. Owning the machine account is not enough.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-entitlements-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccountEntitlement]**](../models/machine-account-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of the machine account&#39;s entitlements. | List[MachineAccountEntitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_entitlement import MachineAccountEntitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine account entitlements
        
        results = MachineAccountsApi(api_client).get_machine_account_entitlements_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_entitlements_v1(id, limit, offset, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_entitlements_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-subtype-by-id-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Retrieve subtype by subtype id
Get a machine account subtype by its unique ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-by-id-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the machine account subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account subtype object. | SourceSubtype |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the machine account subtype. # str | The ID of the machine account subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieve subtype by subtype id
        
        results = MachineAccountsApi(api_client).get_machine_account_subtype_by_id_v1(subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_subtype_by_id_v1(subtype_id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_subtype_by_id_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_subtype_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-subtype-by-technical-name-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Retrieve subtype by source and technicalName
Get a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-by-technical-name-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
Path   | technical_name | **str** | True  | The technical name of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account subtype object. | SourceSubtype |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    technical_name = 'foo' # str | The technical name of the subtype. # str | The technical name of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieve subtype by source and technicalName
        
        results = MachineAccountsApi(api_client).get_machine_account_subtype_by_technical_name_v1(source_id=source_id, technical_name=technical_name)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_subtype_by_technical_name_v1(source_id, technical_name, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_subtype_by_technical_name_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_subtype_by_technical_name_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-v1
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
Get machine account details
Use this API to return the details for a single machine account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccount**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine Account object. | MachineAccount |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get machine account details
        
        results = MachineAccountsApi(api_client).get_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-v2
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
Get machine account details
Use this API to get the details of a machine account, including all of its linked machine identities.

A caller who owns the machine account can get it. Other callers need the **idn:mis-account:read** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountV2**](../models/machine-account-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account object. | MachineAccountV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_v2 import MachineAccountV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get machine account details
        
        results = MachineAccountsApi(api_client).get_machine_account_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_v2(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-accounts-summary-v1
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
Get machine account candidate summary
Use this API to count the machine account candidates that are not yet linked to a machine identity, grouped by the classification method that found them. Candidates that are correlated to a human identity are counted in `human`; candidates that are not correlated to any identity are counted in `uncorrelated`.

This API requires the **idn:mis-account-list:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-accounts-summary-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns `400`.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountsSummary**](../models/machine-accounts-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account candidate counts. | MachineAccountsSummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_accounts_summary import MachineAccountsSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'source.id eq \"8d3e0094e99445de98eef6c75e25jc04\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns `400`. (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source.id**: *eq, in*  Filtering on any other field returns `400`. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get machine account candidate summary
        
        results = MachineAccountsApi(api_client).get_machine_accounts_summary_v1()
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_accounts_summary_v1(filters, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_accounts_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_accounts_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-account-machine-identities-v1
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
List linked machine identities
Use this API to list the machine identities that are linked to a machine account through source resource links. The response is an empty list when no machine identities are linked.

This API returns `400` when the machine account has no native identity or source.

A caller who owns the machine account can list its machine identities. Other callers need the **idn:mis-account:read** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-machine-identities-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccountLinkedMachineIdentity]**](../models/machine-account-linked-machine-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine identities linked to the machine account. | List[MachineAccountLinkedMachineIdentity] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_linked_machine_identity import MachineAccountLinkedMachineIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List linked machine identities
        
        results = MachineAccountsApi(api_client).list_machine_account_machine_identities_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).list_machine_account_machine_identities_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->list_machine_account_machine_identities_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->list_machine_account_machine_identities_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-account-subtypes-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Retrieve all subtypes by source
Get all machine account subtypes for a given source.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-subtypes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[SourceSubtype]**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine account subtypes. | List[SourceSubtype] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    filters = 'displayName eq \"sail\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional)
    sorters = 'displayName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Retrieve all subtypes by source
        
        results = MachineAccountsApi(api_client).list_machine_account_subtypes_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).list_machine_account_subtypes_v1(source_id, filters, sorters, x_sail_point_experimental, count, limit, offset)
        print("The response of MachineAccountsApi->list_machine_account_subtypes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->list_machine_account_subtypes_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-accounts-v1
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
List machine accounts
This returns a list of machine accounts.  

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-accounts-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccount]**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine account objects | List[MachineAccount] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'hasEntitlements eq true' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine accounts
        
        results = MachineAccountsApi(api_client).list_machine_accounts_v1()
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).list_machine_accounts_v1(limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of MachineAccountsApi->list_machine_accounts_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->list_machine_accounts_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-accounts-v2
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
List machine accounts
Use this API to get a list of machine accounts. By default, the list includes machine accounts that are linked to a machine identity or to a source resource.

When the whole filter is a single comparison on `machineIdentity.id` or `machineIdentity.name`, the list also includes machine accounts linked to the matching machine identities through source resource links.

A caller without the **idn:mis-account-list:read** right can call this API only when every returned machine account is one they own; otherwise this API returns `403`. Use `ownerIdentity=self` to list only the caller's own machine accounts.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-accounts-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | owner_identity | **str** |   (optional) | Return only machine accounts whose owner identity is this identity ID. Use `self` for the caller's own identity. This parameter can't be combined with a filter on `ownerIdentity.id`; that combination returns `400`.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use `me` as the value of `ownerIdentity.id` to match the caller's own identity.  The `owners.*` fields are available only when expanded machine account ownership is enabled for the tenant. The `risk.severity`, `permissionLevel` and `lastUsedAt` fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns `400`.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for `filters` apply to the `owners.*`, `risk.severity`, `permissionLevel` and `lastUsedAt` fields. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccountV2]**](../models/machine-account-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine accounts. | List[MachineAccountV2] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_v2 import MachineAccountV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    owner_identity = 'self' # str | Return only machine accounts whose owner identity is this identity ID. Use `self` for the caller's own identity. This parameter can't be combined with a filter on `ownerIdentity.id`; that combination returns `400`. (optional) # str | Return only machine accounts whose owner identity is this identity ID. Use `self` for the caller's own identity. This parameter can't be combined with a filter on `ownerIdentity.id`; that combination returns `400`. (optional)
    filters = 'machineIdentity.id eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use `me` as the value of `ownerIdentity.id` to match the caller's own identity.  The `owners.*` fields are available only when expanded machine account ownership is enabled for the tenant. The `risk.severity`, `permissionLevel` and `lastUsedAt` fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns `400`. (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **connectorAttributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **datasetId**: *eq, in*  **resource.id**: *eq, in*  **type**: *eq, in*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  Use `me` as the value of `ownerIdentity.id` to match the caller's own identity.  The `owners.*` fields are available only when expanded machine account ownership is enabled for the tenant. The `risk.severity`, `permissionLevel` and `lastUsedAt` fields are available only when machine account risk enrichment is enabled for the tenant. Filtering on an unavailable field returns `400`. (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for `filters` apply to the `owners.*`, `risk.severity`, `permissionLevel` and `lastUsedAt` fields. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, ownerIdentity, ownerIdentity.id, ownerIdentity.name, owners.primary.id, owners.primary.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.governanceGroup.id, owners.governanceGroup.name, manuallyCorrelated, enabled, locked, hasEntitlements, attributes, connectorAttributes, source.id, source.name, datasetId, resource.id, type, created, modified, risk.severity, permissionLevel, lastUsedAt**  The same availability rules as for `filters` apply to the `owners.*`, `risk.severity`, `permissionLevel` and `lastUsedAt` fields. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine accounts
        
        results = MachineAccountsApi(api_client).list_machine_accounts_v2()
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).list_machine_accounts_v2(limit, offset, count, owner_identity, filters, sorters, x_sail_point_experimental)
        print("The response of MachineAccountsApi->list_machine_accounts_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->list_machine_accounts_v2: %s\n" % e)
```



[[Back to top]](#) 

## patch-machine-account-subtype-by-technical-name-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Patch subtype
Update fields of a machine account subtype by source ID and technical name.
Patchable fields include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-by-technical-name-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
Path   | technical_name | **str** | True  | The technical name of the subtype.
 Body  | request_body | **[]object** | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated machine account subtype. | SourceSubtype |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    technical_name = 'foo' # str | The technical name of the subtype. # str | The technical name of the subtype.
    request_body = '''[{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]''' # List[object] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch subtype
        new_request_body = RequestBody.from_json(request_body)
        results = MachineAccountsApi(api_client).patch_machine_account_subtype_by_technical_name_v1(source_id=source_id, technical_name=technical_name, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).patch_machine_account_subtype_by_technical_name_v1(source_id, technical_name, new_request_body, x_sail_point_experimental)
        print("The response of MachineAccountsApi->patch_machine_account_subtype_by_technical_name_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->patch_machine_account_subtype_by_technical_name_v1: %s\n" % e)
```



[[Back to top]](#) 

## reload-machine-account-v1
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
Reload machine account
This API asynchronously reloads the machine account directly from the connector and performs a one-time aggregation. It returns the task ID.

A caller who owns the machine account can reload it. Other callers need the **idn:mis-account:reload** right.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountsAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_accounts_async_result import MachineAccountsAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Reload machine account
        
        results = MachineAccountsApi(api_client).reload_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).reload_machine_account_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->reload_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->reload_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## reload-machine-accounts-in-bulk-async-v1
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
Bulk reload machine accounts asynchronously
Use this API to submit one task that reloads up to 100 machine accounts from their sources, and get the task ID. Machine accounts that can't be reloaded are skipped. When none of the machine accounts can be reloaded, the task completes with an error.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can reload them. Other callers need the **idn:mis-account:reload** right. For a caller without the right, machine accounts they do not own are skipped.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-accounts-in-bulk-async-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_bulk_request | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountRequestAsyncResult**](../models/machine-account-request-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountRequestAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_bulk_request import MachineAccountBulkRequest
from sailpoint.machine_accounts.models.machine_account_request_async_result import MachineAccountRequestAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_bulk_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }''' # MachineAccountBulkRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Bulk reload machine accounts asynchronously
        new_machine_account_bulk_request = MachineAccountBulkRequest.from_json(machine_account_bulk_request)
        results = MachineAccountsApi(api_client).reload_machine_accounts_in_bulk_async_v1(machine_account_bulk_request=new_machine_account_bulk_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).reload_machine_accounts_in_bulk_async_v1(new_machine_account_bulk_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->reload_machine_accounts_in_bulk_async_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->reload_machine_accounts_in_bulk_async_v1: %s\n" % e)
```



[[Back to top]](#) 

## reload-machine-accounts-in-bulk-v1
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
Reload machine accounts in bulk
Use this API to reload up to 100 machine accounts from their sources. The response has one result per requested machine account, in no particular order. Each result has its own HTTP-style `status`: `200` when the reload was queued, or an error status such as `400`, `404` or `500`.

To track the whole reload with a single task instead, use the asynchronous bulk reload API.

The request fails with `400` when `ids` is empty or has more than 100 entries.

A caller who owns the machine accounts can reload them. Other callers need the **idn:mis-account:reload** right. For a caller without the right, machine accounts they do not own get a result with status `404`.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/reload-machine-accounts-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_bulk_request | [**MachineAccountBulkRequest**](../models/machine-account-bulk-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccountBulkResult]**](../models/machine-account-bulk-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | One result per requested machine account. | List[MachineAccountBulkResult] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_bulk_request import MachineAccountBulkRequest
from sailpoint.machine_accounts.models.machine_account_bulk_result import MachineAccountBulkResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_bulk_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ]
        }''' # MachineAccountBulkRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Reload machine accounts in bulk
        new_machine_account_bulk_request = MachineAccountBulkRequest.from_json(machine_account_bulk_request)
        results = MachineAccountsApi(api_client).reload_machine_accounts_in_bulk_v1(machine_account_bulk_request=new_machine_account_bulk_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).reload_machine_accounts_in_bulk_v1(new_machine_account_bulk_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->reload_machine_accounts_in_bulk_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->reload_machine_accounts_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## unlock-machine-account-v1
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
Unlock machine account
This API submits a task to unlock a machine account and returns the task ID.

A caller who owns the machine account can unlock it. Other callers need the **idn:mis-account:unlock** right.


[API Spec](https://developer.sailpoint.com/docs/api/unlock-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountsAsyncResult**](../models/machine-accounts-async-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Async task details. | MachineAccountsAsyncResult |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_accounts_async_result import MachineAccountsAsyncResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Unlock machine account
        
        results = MachineAccountsApi(api_client).unlock_machine_account_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).unlock_machine_account_v1(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->unlock_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->unlock_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-account-v1
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
Update machine account details
Use this API to update machine accounts details. 


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
 Body  | request_body | **[]object** | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentity           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentity. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. `risk`, `permissionLevel`, `compliance`, and `lastUsedAt` are read-only. Do not patch them; aggregation is the only writer. A patch of other fields still succeeds when those values are present on the account.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccount**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Account object. | MachineAccount |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    request_body = '''[{"op":"add","path":"/environment","value":"test"}]''' # List[object] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentity           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentity. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. `risk`, `permissionLevel`, `compliance`, and `lastUsedAt` are read-only. Do not patch them; aggregation is the only writer. A patch of other fields still succeeds when those values are present on the account.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update machine account details
        new_request_body = RequestBody.from_json(request_body)
        results = MachineAccountsApi(api_client).update_machine_account_v1(id=id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).update_machine_account_v1(id, new_request_body, x_sail_point_experimental)
        print("The response of MachineAccountsApi->update_machine_account_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->update_machine_account_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-account-v2
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
Update machine account details
Use this API to update a machine account with a [JSON Patch](https://tools.ietf.org/html/rfc6902) document. The response is the updated machine account.

A caller who owns the machine account can update it. Other callers need the **idn:mis-account:update** right.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentities           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentities. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. Patching ownerIdentity and owners in the same request returns `400`.  To change the machine identity, use a single `replace` operation on `/machineIdentities` whose value is a list of exactly one machine identity reference with its `id`. The `/machineIdentity` path, indexed or nested paths such as `/machineIdentities/0`, other operations on `/machineIdentities`, and a value that is not a one-element list all return `400`.  All other fields, including `risk`, `permissionLevel`, `compliance`, and `lastUsedAt`, are read-only. A patch that changes one of them returns `400`.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccountV2**](../models/machine-account-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated machine account object. | MachineAccountV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json, application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.json_patch_operation import JsonPatchOperation
from sailpoint.machine_accounts.models.machine_account_v2 import MachineAccountV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    json_patch_operation = '''[{"op":"replace","path":"/environment","value":"test"}]''' # List[JsonPatchOperation] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * environment           * accessType           * attributes           * manuallyEdited           * ownerIdentity           * subtype           * machineIdentities           * owners  Non-dataset accounts may patch ownerIdentity, subtype, and machineIdentities. Dataset accounts may patch owners. When expanded ownership is enabled, non-dataset accounts may also patch owners, and dataset accounts may also patch ownerIdentity. Patching ownerIdentity and owners in the same request returns `400`.  To change the machine identity, use a single `replace` operation on `/machineIdentities` whose value is a list of exactly one machine identity reference with its `id`. The `/machineIdentity` path, indexed or nested paths such as `/machineIdentities/0`, other operations on `/machineIdentities`, and a value that is not a one-element list all return `400`.  All other fields, including `risk`, `permissionLevel`, `compliance`, and `lastUsedAt`, are read-only. A patch that changes one of them returns `400`.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update machine account details
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = MachineAccountsApi(api_client).update_machine_account_v2(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).update_machine_account_v2(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of MachineAccountsApi->update_machine_account_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->update_machine_account_v2: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-accounts-in-bulk-v1
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
Update machine accounts in bulk
Use this API to apply the same [JSON Patch](https://tools.ietf.org/html/rfc6902) to up to 100 machine accounts. The response has one result per requested machine account, in no particular order. Each result has its own HTTP-style `status`: `200` when the update succeeded, or an error status such as `400` or `404`.

Each patch operation must target one of these top-level fields:
  * description
  * subtype
  * environment
  * machineIdentity
  * ownerIdentity
  * manuallyEdited

The request fails with `400` when `ids` is empty or has more than 100 entries, when `jsonPatch` is missing, or when a patch operation targets any other field. A patch that changes `subtype` must only include machine accounts from one source; otherwise every result has status `400`.

A caller who owns the machine accounts can update them. Other callers need the **idn:mis-account:update** right. For a caller without the right, machine accounts they do not own get a result with status `404`.

When this capability is not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-accounts-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_account_bulk_update_request | [**MachineAccountBulkUpdateRequest**](../models/machine-account-bulk-update-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccountBulkResult]**](../models/machine-account-bulk-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | One result per requested machine account. | List[MachineAccountBulkResult] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_accounts.api.machine_accounts_api import MachineAccountsApi
from sailpoint.machine_accounts.api_client import ApiClient
from sailpoint.machine_accounts.models.machine_account_bulk_result import MachineAccountBulkResult
from sailpoint.machine_accounts.models.machine_account_bulk_update_request import MachineAccountBulkUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_account_bulk_update_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180835d2e5168015d32f890ca1581" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/environment",
            "value" : "PROD"
          } ]
        }''' # MachineAccountBulkUpdateRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update machine accounts in bulk
        new_machine_account_bulk_update_request = MachineAccountBulkUpdateRequest.from_json(machine_account_bulk_update_request)
        results = MachineAccountsApi(api_client).update_machine_accounts_in_bulk_v1(machine_account_bulk_update_request=new_machine_account_bulk_update_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).update_machine_accounts_in_bulk_v1(new_machine_account_bulk_update_request, x_sail_point_experimental)
        print("The response of MachineAccountsApi->update_machine_accounts_in_bulk_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->update_machine_accounts_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 



