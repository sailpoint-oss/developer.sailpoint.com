---
id: beta-managed-clients
title: Managed_Clients
pagination_label: Managed_Clients
sidebar_label: Managed_Clients
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managed_Clients', 'BetaManaged_Clients'] 
slug: /tools/sdk/python/beta/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'Managed_Clients', 'BetaManaged_Clients']
---

# sailpoint.beta.ManagedClientsApi
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-managed-client-status**](#get-managed-client-status) | **GET** `/managed-clients/{id}/status` | Specified managed client status.
[**update-managed-client-status**](#update-managed-client-status) | **POST** `/managed-clients/{id}/status` | Handle status request from client


## get-managed-client-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Specified managed client status.
Retrieve Managed Client Status by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-managed-client-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Managed Client Status to get
  Query | type | [**ManagedClientType**](../models/managed-client-type) | True  | Type of the Managed Client Status to get

### Return type
[**ManagedClientStatus**](../models/managed-client-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with Managed Client Status having the given ID and Type. | ManagedClientStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.managed_clients_api import ManagedClientsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.managed_client_status import ManagedClientStatus
from sailpoint.beta.models.managed_client_type import ManagedClientType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClientId' # str | ID of the Managed Client Status to get # str | ID of the Managed Client Status to get
    type = sailpoint.beta.ManagedClientType() # ManagedClientType | Type of the Managed Client Status to get # ManagedClientType | Type of the Managed Client Status to get

    try:
        # Specified managed client status.
        
        results = ManagedClientsApi(api_client).get_managed_client_status(id=id, type=type)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).get_managed_client_status(id, type)
        print("The response of ManagedClientsApi->get_managed_client_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->get_managed_client_status: %s\n" % e)
```



[[Back to top]](#) 

## update-managed-client-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Handle status request from client
Update a status detail passed in from the client

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-managed-client-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Managed Client Status to update
 Body  | managed_client_status | [**ManagedClientStatus**](../models/managed-client-status) | True  | 

### Return type
[**ManagedClientStatusAggResponse**](../models/managed-client-status-agg-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the updated Managed Client Status. | ManagedClientStatusAggResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.managed_clients_api import ManagedClientsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.managed_client_status import ManagedClientStatus
from sailpoint.beta.models.managed_client_status_agg_response import ManagedClientStatusAggResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClientId' # str | ID of the Managed Client Status to update # str | ID of the Managed Client Status to update
    managed_client_status = '''{
          "body" : {
            "alertKey" : "",
            "id" : "5678",
            "clusterId" : "1234",
            "ccg_etag" : "ccg_etag123xyz456",
            "ccg_pin" : "NONE",
            "cookbook_etag" : "20210420125956-20210511144538",
            "hostname" : "megapod-useast1-secret-hostname.sailpoint.com",
            "internal_ip" : "127.0.0.1",
            "lastSeen" : "1620843964604",
            "sinceSeen" : "14708",
            "sinceSeenMillis" : "14708",
            "localDev" : false,
            "stacktrace" : "",
            "status" : "NORMAL",
            "product" : "idn",
            "platform_version" : "2",
            "os_version" : "2345.3.1",
            "os_type" : "flatcar",
            "hypervisor" : "unknown"
          },
          "type" : "CCG",
          "status" : "NORMAL",
          "timestamp" : "2020-01-01T00:00:00Z"
        }''' # ManagedClientStatus | 

    try:
        # Handle status request from client
        new_managed_client_status = ManagedClientStatus.from_json(managed_client_status)
        results = ManagedClientsApi(api_client).update_managed_client_status(id=id, managed_client_status=new_managed_client_status)
        # Below is a request that includes all optional parameters
        # results = ManagedClientsApi(api_client).update_managed_client_status(id, new_managed_client_status)
        print("The response of ManagedClientsApi->update_managed_client_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClientsApi->update_managed_client_status: %s\n" % e)
```



[[Back to top]](#) 



