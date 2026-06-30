---
id: iai-role-mining
title: IAI_Role_Mining
pagination_label: IAI_Role_Mining
sidebar_label: IAI_Role_Mining
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Role_Mining', 'IAI_Role_Mining'] 
slug: /tools/sdk/python/iai-role-mining/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAI_Role_Mining', 'IAI_Role_Mining']
---

# sailpoint.iai_role_mining.IAIRoleMiningApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-potential-role-provision-request-v1**](#create-potential-role-provision-request-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**create-role-mining-sessions-v1**](#create-role-mining-sessions-v1) | **POST** `/role-mining-sessions/v1` | Create a role mining session
[**download-role-mining-potential-role-zip-v1**](#download-role-mining-potential-role-zip-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role-async-v1**](#export-role-mining-potential-role-async-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**export-role-mining-potential-role-status-v1**](#export-role-mining-potential-role-status-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**export-role-mining-potential-role-v1**](#export-role-mining-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**get-all-potential-role-summaries-v1**](#get-all-potential-role-summaries-v1) | **GET** `/role-mining-potential-roles/v1` | Retrieves all potential role summaries
[**get-entitlement-distribution-potential-role-v1**](#get-entitlement-distribution-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**get-entitlements-potential-role-v1**](#get-entitlements-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**get-excluded-entitlements-potential-role-v1**](#get-excluded-entitlements-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**get-identities-potential-role-v1**](#get-identities-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**get-potential-role-applications-v1**](#get-potential-role-applications-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**get-potential-role-entitlements-v1**](#get-potential-role-entitlements-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**get-potential-role-source-identity-usage-v1**](#get-potential-role-source-identity-usage-v1) | **GET** `/role-mining-potential-roles/v1/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**get-potential-role-summaries-v1**](#get-potential-role-summaries-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries` | Retrieves all potential role summaries
[**get-potential-role-v1**](#get-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-potential-role-v1**](#get-role-mining-potential-role-v1) | **GET** `/role-mining-potential-roles/v1/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-session-status-v1**](#get-role-mining-session-status-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/status` | Get role mining session status state
[**get-role-mining-session-v1**](#get-role-mining-session-v1) | **GET** `/role-mining-sessions/v1/{sessionId}` | Get a role mining session
[**get-role-mining-sessions-v1**](#get-role-mining-sessions-v1) | **GET** `/role-mining-sessions/v1` | Retrieves all role mining sessions
[**get-saved-potential-roles-v1**](#get-saved-potential-roles-v1) | **GET** `/role-mining-potential-roles/v1/saved` | Retrieves all saved potential roles
[**patch-potential-role-session-v1**](#patch-potential-role-session-v1) | **PATCH** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role session
[**patch-potential-role-v1**](#patch-potential-role-v1) | **PATCH** `/role-mining-potential-roles/v1/{potentialRoleId}` | Update a potential role
[**patch-role-mining-session-v1**](#patch-role-mining-session-v1) | **PATCH** `/role-mining-sessions/v1/{sessionId}` | Patch a role mining session
[**update-entitlements-potential-role-v1**](#update-entitlements-potential-role-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request-v1
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
Create request to provision a potential role into an actual role.
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-potential-role-provision-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | min_entitlement_popularity | **int** |   (optional) (default to 0) | Minimum popularity required for an entitlement to be included in the provisioned role.
  Query | include_common_access | **bool** |   (optional) (default to True) | Boolean determining whether common access entitlements will be included in the provisioned role.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
 Body  | roleminingpotentialroleprovisionrequest | [**Roleminingpotentialroleprovisionrequest**](../models/roleminingpotentialroleprovisionrequest) |   (optional) | Required information to create a new role

### Return type
[**Roleminingpotentialrolesummary**](../models/roleminingpotentialrolesummary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. Returns a potential role summary including the status of the provison request | Roleminingpotentialrolesummary |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialroleprovisionrequest import Roleminingpotentialroleprovisionrequest
from sailpoint.iai_role_mining.models.roleminingpotentialrolesummary import Roleminingpotentialrolesummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    min_entitlement_popularity = 0 # int | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0) # int | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
    include_common_access = True # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to True) # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to True)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    roleminingpotentialroleprovisionrequest = '''sailpoint.iai_role_mining.Roleminingpotentialroleprovisionrequest()''' # Roleminingpotentialroleprovisionrequest | Required information to create a new role (optional)

    try:
        # Create request to provision a potential role into an actual role.
        
        results = IAIRoleMiningApi(api_client).create_potential_role_provision_request_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).create_potential_role_provision_request_v1(session_id, potential_role_id, min_entitlement_popularity, include_common_access, x_sail_point_experimental, new_roleminingpotentialroleprovisionrequest)
        print("The response of IAIRoleMiningApi->create_potential_role_provision_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->create_potential_role_provision_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-role-mining-sessions-v1
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
Create a role mining session
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-role-mining-sessions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | roleminingsessiondto | [**Roleminingsessiondto**](../models/roleminingsessiondto) | True  | Role mining session parameters
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingsessionresponse**](../models/roleminingsessionresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Submitted a role mining session request | Roleminingsessionresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingsessiondto import Roleminingsessiondto
from sailpoint.iai_role_mining.models.roleminingsessionresponse import Roleminingsessionresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    roleminingsessiondto = '''sailpoint.iai_role_mining.Roleminingsessiondto()''' # Roleminingsessiondto | Role mining session parameters
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a role mining session
        new_roleminingsessiondto = Roleminingsessiondto.from_json(roleminingsessiondto)
        results = IAIRoleMiningApi(api_client).create_role_mining_sessions_v1(roleminingsessiondto=new_roleminingsessiondto)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).create_role_mining_sessions_v1(new_roleminingsessiondto, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->create_role_mining_sessions_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->create_role_mining_sessions_v1: %s\n" % e)
```



[[Back to top]](#) 

## download-role-mining-potential-role-zip-v1
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
Export (download) details for a potential role in a role mining session
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/download-role-mining-potential-role-zip-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
Path   | export_id | **str** | True  | The id of a previously run export job for this potential role
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | bytearray |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '278359a6-04b7-4669-9468-924cf580964a' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    export_id = '4940ffd4-836f-48a3-b2b0-6d498c3fdf40' # str | The id of a previously run export job for this potential role # str | The id of a previously run export job for this potential role
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Export (download) details for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).download_role_mining_potential_role_zip_v1(session_id=session_id, potential_role_id=potential_role_id, export_id=export_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).download_role_mining_potential_role_zip_v1(session_id, potential_role_id, export_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->download_role_mining_potential_role_zip_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->download_role_mining_potential_role_zip_v1: %s\n" % e)
```



[[Back to top]](#) 

## export-role-mining-potential-role-async-v1
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
Asynchronously export details for a potential role in a role mining session and upload to S3
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-async-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
 Body  | roleminingpotentialroleexportrequest | [**Roleminingpotentialroleexportrequest**](../models/roleminingpotentialroleexportrequest) |   (optional) | 

### Return type
[**Roleminingpotentialroleexportresponse**](../models/roleminingpotentialroleexportresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Job Submitted. Returns a reportId that can be used to download the zip once complete | Roleminingpotentialroleexportresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialroleexportrequest import Roleminingpotentialroleexportrequest
from sailpoint.iai_role_mining.models.roleminingpotentialroleexportresponse import Roleminingpotentialroleexportresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '278359a6-04b7-4669-9468-924cf580964a' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    roleminingpotentialroleexportrequest = '''sailpoint.iai_role_mining.Roleminingpotentialroleexportrequest()''' # Roleminingpotentialroleexportrequest |  (optional)

    try:
        # Asynchronously export details for a potential role in a role mining session and upload to S3
        
        results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_async_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_async_v1(session_id, potential_role_id, x_sail_point_experimental, new_roleminingpotentialroleexportrequest)
        print("The response of IAIRoleMiningApi->export_role_mining_potential_role_async_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->export_role_mining_potential_role_async_v1: %s\n" % e)
```



[[Back to top]](#) 

## export-role-mining-potential-role-status-v1
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
Retrieve status of a potential role export job
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
Path   | export_id | **str** | True  | The id of a previously run export job for this potential role
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialroleexportresponse**](../models/roleminingpotentialroleexportresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Success. Returns the current status of this export | Roleminingpotentialroleexportresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialroleexportresponse import Roleminingpotentialroleexportresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '278359a6-04b7-4669-9468-924cf580964a' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    export_id = '4940ffd4-836f-48a3-b2b0-6d498c3fdf40' # str | The id of a previously run export job for this potential role # str | The id of a previously run export job for this potential role
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieve status of a potential role export job
        
        results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_status_v1(session_id=session_id, potential_role_id=potential_role_id, export_id=export_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_status_v1(session_id, potential_role_id, export_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->export_role_mining_potential_role_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->export_role_mining_potential_role_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## export-role-mining-potential-role-v1
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
Export (download) details for a potential role in a role mining session
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | bytearray |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Export (download) details for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_v1(session_id, potential_role_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->export_role_mining_potential_role_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->export_role_mining_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-all-potential-role-summaries-v1
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
Retrieves all potential role summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-all-potential-role-summaries-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingpotentialrolesummary]**](../models/roleminingpotentialrolesummary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns all potential role summaries that match the query parameters. | List[Roleminingpotentialrolesummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialrolesummary import Roleminingpotentialrolesummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    sorters = 'createdDate' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
    filters = '(createdByName co \"int\") and (createdById sw \"2c9180907\") and (type eq \"COMMON\") and ((name co \"entt\") or (saved eq true))' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves all potential role summaries
        
        results = IAIRoleMiningApi(api_client).get_all_potential_role_summaries_v1()
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_all_potential_role_summaries_v1(sorters, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_all_potential_role_summaries_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_all_potential_role_summaries_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-distribution-potential-role-v1
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
Retrieves entitlement popularity distribution for a potential role in a role mining session
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-distribution-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | include_common_access | **bool** |   (optional) | Boolean determining whether common access entitlements will be included or not
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**Dict[str, int]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a map containing entitlement popularity distribution for a potential role. | Dict[str, int] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    include_common_access = True # bool | Boolean determining whether common access entitlements will be included or not (optional) # bool | Boolean determining whether common access entitlements will be included or not (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves entitlement popularity distribution for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_entitlement_distribution_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_entitlement_distribution_potential_role_v1(session_id, potential_role_id, include_common_access, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_entitlement_distribution_potential_role_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_entitlement_distribution_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlements-potential-role-v1
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
Retrieves entitlements for a potential role in a role mining session
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlements-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | include_common_access | **bool** |   (optional) (default to True) | Boolean determining whether common access entitlements will be included or not
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order. 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingentitlement]**](../models/roleminingentitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of entitlements for a potential role. | List[Roleminingentitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingentitlement import Roleminingentitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    include_common_access = True # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to True) # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to True)
    sorters = 'popularity' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
    filters = 'applicationName sw \"AD\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves entitlements for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_entitlements_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_entitlements_potential_role_v1(session_id, potential_role_id, include_common_access, sorters, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_entitlements_potential_role_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_entitlements_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-excluded-entitlements-potential-role-v1
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
Retrieves excluded entitlements for a potential role in a role mining session
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-excluded-entitlements-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingentitlement]**](../models/roleminingentitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of excluded entitlements for a potential roles. | List[Roleminingentitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingentitlement import Roleminingentitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    sorters = 'populariity' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
    filters = 'applicationName sw \"AD\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves excluded entitlements for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_excluded_entitlements_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_excluded_entitlements_potential_role_v1(session_id, potential_role_id, sorters, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_excluded_entitlements_potential_role_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_excluded_entitlements_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-identities-potential-role-v1
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
Retrieves identities for a potential role in a role mining session
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identities-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingidentity]**](../models/roleminingidentity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of identities for a potential role. | List[Roleminingidentity] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingidentity import Roleminingidentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'filters_example' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves identities for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_identities_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_identities_potential_role_v1(session_id, potential_role_id, sorters, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_identities_potential_role_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_identities_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-applications-v1
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
Retrieves the applications of a potential role for a role mining session
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-applications-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingpotentialroleapplication]**](../models/roleminingpotentialroleapplication)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential roles for a role mining session. | List[Roleminingpotentialroleapplication] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialroleapplication import Roleminingpotentialroleapplication
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '62f28d91-7d9f-4d17-be15-666d5b41d77f' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    filters = 'applicationName sw \"test\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves the applications of a potential role for a role mining session
        
        results = IAIRoleMiningApi(api_client).get_potential_role_applications_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_applications_v1(session_id, potential_role_id, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_potential_role_applications_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_applications_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-entitlements-v1
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
Retrieves the entitlements of a potential role for a role mining session
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-entitlements-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingpotentialroleentitlements]**](../models/roleminingpotentialroleentitlements)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns the entitlements of a potential role for a role mining session. session. | List[Roleminingpotentialroleentitlements] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialroleentitlements import Roleminingpotentialroleentitlements
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '62f28d91-7d9f-4d17-be15-666d5b41d77f' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    filters = 'entitlementRef.name sw \"test\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves the entitlements of a potential role for a role mining session
        
        results = IAIRoleMiningApi(api_client).get_potential_role_entitlements_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_entitlements_v1(session_id, potential_role_id, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_potential_role_entitlements_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-source-identity-usage-v1
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
Retrieves potential role source usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-source-identity-usage-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | potential_role_id | **str** | True  | A potential role id
Path   | source_id | **str** | True  | A source id
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingpotentialrolesourceusage]**](../models/roleminingpotentialrolesourceusage)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of source usage for the identities in a potential role. | List[Roleminingpotentialrolesourceusage] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialrolesourceusage import Roleminingpotentialrolesourceusage
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    potential_role_id = 'e0cc5d7d-bf7f-4f81-b2af-8885b09d9923' # str | A potential role id # str | A potential role id
    source_id = '2c9180877620c1460176267f336a106f' # str | A source id # str | A source id
    sorters = '-usageCount' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves potential role source usage
        
        results = IAIRoleMiningApi(api_client).get_potential_role_source_identity_usage_v1(potential_role_id=potential_role_id, source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_source_identity_usage_v1(potential_role_id, source_id, sorters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_potential_role_source_identity_usage_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_source_identity_usage_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-summaries-v1
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
Retrieves all potential role summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-summaries-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingpotentialrolesummary]**](../models/roleminingpotentialrolesummary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential role summaries for a role mining session. | List[Roleminingpotentialrolesummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialrolesummary import Roleminingpotentialrolesummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    sorters = 'createdDate' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
    filters = '(createdByName co \"int\")and (createdById sw \"2c9180907\")and (type eq \"COMMON\")and ((name co \"entt\")or (saved eq true))' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves all potential role summaries
        
        results = IAIRoleMiningApi(api_client).get_potential_role_summaries_v1(session_id=session_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_summaries_v1(session_id, sorters, filters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_potential_role_summaries_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_summaries_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-v1
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
Retrieves a specific potential role
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential roles for a role mining session. | Roleminingpotentialrole |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialrole import Roleminingpotentialrole
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves a specific potential role
        
        results = IAIRoleMiningApi(api_client).get_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_v1(session_id, potential_role_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_potential_role_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-potential-role-v1
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
Retrieves a specific potential role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | potential_role_id | **str** | True  | A potential role id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential roles for a role mining session. | Roleminingpotentialrole |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialrole import Roleminingpotentialrole
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id # str | A potential role id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves a specific potential role
        
        results = IAIRoleMiningApi(api_client).get_role_mining_potential_role_v1(potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_potential_role_v1(potential_role_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_role_mining_potential_role_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-session-status-v1
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
Get role mining session status state
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-session-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingsessionstatus**](../models/roleminingsessionstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns session status | Roleminingsessionstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingsessionstatus import Roleminingsessionstatus
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get role mining session status state
        
        results = IAIRoleMiningApi(api_client).get_role_mining_session_status_v1(session_id=session_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_session_status_v1(session_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_role_mining_session_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_session_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-session-v1
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
Get a role mining session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-session-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id to be retrieved.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingsessionresponse**](../models/roleminingsessionresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns a role mining session | Roleminingsessionresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingsessionresponse import Roleminingsessionresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id to be retrieved. # str | The role mining session id to be retrieved.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a role mining session
        
        results = IAIRoleMiningApi(api_client).get_role_mining_session_v1(session_id=session_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_session_v1(session_id, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_role_mining_session_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_session_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-sessions-v1
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
Retrieves all role mining sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-sessions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingsessiondto]**](../models/roleminingsessiondto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns all role mining sessions that match the query parameters. | List[Roleminingsessiondto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingsessiondto import Roleminingsessiondto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'saved eq \"true\" and name sw \"RM Session\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
    sorters = 'createdBy,createdDate' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves all role mining sessions
        
        results = IAIRoleMiningApi(api_client).get_role_mining_sessions_v1()
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_sessions_v1(filters, sorters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_role_mining_sessions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_sessions_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-saved-potential-roles-v1
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
Retrieves all saved potential roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-potential-roles-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Roleminingsessiondraftroledto]**](../models/roleminingsessiondraftroledto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of draft roles for a role mining session. | List[Roleminingsessiondraftroledto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingsessiondraftroledto import Roleminingsessiondraftroledto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    sorters = 'modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieves all saved potential roles
        
        results = IAIRoleMiningApi(api_client).get_saved_potential_roles_v1()
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_saved_potential_roles_v1(sorters, offset, limit, count, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->get_saved_potential_roles_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_saved_potential_roles_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-potential-role-session-v1
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
Update a potential role session
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-potential-role-session-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | The potential role summary id
 Body  | jsonpatchoperationrolemining | [**[]Jsonpatchoperationrolemining**](../models/jsonpatchoperationrolemining) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.jsonpatchoperationrolemining import Jsonpatchoperationrolemining
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The potential role summary id # str | The potential role summary id
    jsonpatchoperationrolemining = '''[{"op":"remove","path":"/description"},{"op":"replace","path":"/description","value":"Acct I - Potential Role"},{"op":"remove","path":"/saved"},{"op":"replace","path":"/saved","value":"false"},{"op":"remove","path":"/name"},{"op":"replace","path":"/name","value":"Potential Role Accounting"}]''' # List[Jsonpatchoperationrolemining] | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update a potential role session
        new_jsonpatchoperationrolemining = Jsonpatchoperationrolemining.from_json(jsonpatchoperationrolemining)
        results = IAIRoleMiningApi(api_client).patch_potential_role_session_v1(session_id=session_id, potential_role_id=potential_role_id, jsonpatchoperationrolemining=new_jsonpatchoperationrolemining)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).patch_potential_role_session_v1(session_id, potential_role_id, new_jsonpatchoperationrolemining, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->patch_potential_role_session_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->patch_potential_role_session_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-potential-role-v1
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
Update a potential role
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | The potential role summary id
 Body  | jsonpatchoperationrolemining | [**[]Jsonpatchoperationrolemining**](../models/jsonpatchoperationrolemining) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.jsonpatchoperationrolemining import Jsonpatchoperationrolemining
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The potential role summary id # str | The potential role summary id
    jsonpatchoperationrolemining = '''[{"op":"remove","path":"/description"},{"op":"replace","path":"/description","value":"Acct I - Potential Role"},{"op":"remove","path":"/saved"},{"op":"replace","path":"/saved","value":"false"},{"op":"remove","path":"/name"},{"op":"replace","path":"/name","value":"Potential Role Accounting"}]''' # List[Jsonpatchoperationrolemining] | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update a potential role
        new_jsonpatchoperationrolemining = Jsonpatchoperationrolemining.from_json(jsonpatchoperationrolemining)
        results = IAIRoleMiningApi(api_client).patch_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id, jsonpatchoperationrolemining=new_jsonpatchoperationrolemining)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).patch_potential_role_v1(session_id, potential_role_id, new_jsonpatchoperationrolemining, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->patch_potential_role_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->patch_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-role-mining-session-v1
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
Patch a role mining session
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-role-mining-session-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id to be patched
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRoleMiningSessionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id to be patched # str | The role mining session id to be patched
    jsonpatchoperation = '''[{"op":"replace","path":"/pruneThreshold","value":"83"},{"op":"replace","path":"/minNumIdentitiesInPotentialRole","value":"10"},{"op":"replace","path":"/saved","value":"false"},{"op":"replace","path":"/name","value":"RM Session - 07/10/22"},{"op":"add","path":"/name","value":"RM Session - 07/10/22"}]''' # List[Jsonpatchoperation] | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch a role mining session
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = IAIRoleMiningApi(api_client).patch_role_mining_session_v1(session_id=session_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).patch_role_mining_session_v1(session_id, new_jsonpatchoperation, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->patch_role_mining_session_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->patch_role_mining_session_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-entitlements-potential-role-v1
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
Edit entitlements for a potential role to exclude some entitlements
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-entitlements-potential-role-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
 Body  | roleminingpotentialroleeditentitlements | [**Roleminingpotentialroleeditentitlements**](../models/roleminingpotentialroleeditentitlements) | True  | Role mining session parameters
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Adds or removes entitlements from a potential role&#39;s entitlement exclusion list. | Roleminingpotentialrole |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRoleMiningSessionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_role_mining.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.iai_role_mining.api_client import ApiClient
from sailpoint.iai_role_mining.models.roleminingpotentialrole import Roleminingpotentialrole
from sailpoint.iai_role_mining.models.roleminingpotentialroleeditentitlements import Roleminingpotentialroleeditentitlements
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    roleminingpotentialroleeditentitlements = '''sailpoint.iai_role_mining.Roleminingpotentialroleeditentitlements()''' # Roleminingpotentialroleeditentitlements | Role mining session parameters
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Edit entitlements for a potential role to exclude some entitlements
        new_roleminingpotentialroleeditentitlements = Roleminingpotentialroleeditentitlements.from_json(roleminingpotentialroleeditentitlements)
        results = IAIRoleMiningApi(api_client).update_entitlements_potential_role_v1(session_id=session_id, potential_role_id=potential_role_id, roleminingpotentialroleeditentitlements=new_roleminingpotentialroleeditentitlements)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).update_entitlements_potential_role_v1(session_id, potential_role_id, new_roleminingpotentialroleeditentitlements, x_sail_point_experimental)
        print("The response of IAIRoleMiningApi->update_entitlements_potential_role_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->update_entitlements_potential_role_v1: %s\n" % e)
```



[[Back to top]](#) 



