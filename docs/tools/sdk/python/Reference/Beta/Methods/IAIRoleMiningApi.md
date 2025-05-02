---
id: beta-iai-role-mining
title: IAI_Role_Mining
pagination_label: IAI_Role_Mining
sidebar_label: IAI_Role_Mining
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Role_Mining', 'BetaIAI_Role_Mining'] 
slug: /tools/sdk/python/beta/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAI_Role_Mining', 'BetaIAI_Role_Mining']
---

# sailpoint.beta.IAIRoleMiningApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-potential-role-provision-request**](#create-potential-role-provision-request) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**create-role-mining-sessions**](#create-role-mining-sessions) | **POST** `/role-mining-sessions` | Create a role mining session
[**download-role-mining-potential-role-zip**](#download-role-mining-potential-role-zip) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role**](#export-role-mining-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role-async**](#export-role-mining-potential-role-async) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**export-role-mining-potential-role-status**](#export-role-mining-potential-role-status) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**get-all-potential-role-summaries**](#get-all-potential-role-summaries) | **GET** `/role-mining-potential-roles` | Retrieves all potential role summaries
[**get-entitlement-distribution-potential-role**](#get-entitlement-distribution-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**get-entitlements-potential-role**](#get-entitlements-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**get-excluded-entitlements-potential-role**](#get-excluded-entitlements-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**get-identities-potential-role**](#get-identities-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**get-potential-role**](#get-potential-role) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieve potential role in session
[**get-potential-role-applications**](#get-potential-role-applications) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**get-potential-role-entitlements**](#get-potential-role-entitlements) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**get-potential-role-source-identity-usage**](#get-potential-role-source-identity-usage) | **GET** `/role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**get-potential-role-summaries**](#get-potential-role-summaries) | **GET** `/role-mining-sessions/{sessionId}/potential-role-summaries` | Retrieve session&#39;s potential role summaries
[**get-role-mining-potential-role**](#get-role-mining-potential-role) | **GET** `/role-mining-potential-roles/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-session**](#get-role-mining-session) | **GET** `/role-mining-sessions/{sessionId}` | Get a role mining session
[**get-role-mining-session-status**](#get-role-mining-session-status) | **GET** `/role-mining-sessions/{sessionId}/status` | Get role mining session status state
[**get-role-mining-sessions**](#get-role-mining-sessions) | **GET** `/role-mining-sessions` | Retrieves all role mining sessions
[**get-saved-potential-roles**](#get-saved-potential-roles) | **GET** `/role-mining-potential-roles/saved` | Retrieves all saved potential roles
[**patch-potential-role**](#patch-potential-role) | **PATCH** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role in session
[**patch-role-mining-potential-role**](#patch-role-mining-potential-role) | **PATCH** `/role-mining-potential-roles/{potentialRoleId}` | Update a potential role
[**patch-role-mining-session**](#patch-role-mining-session) | **PATCH** `/role-mining-sessions/{sessionId}` | Patch a role mining session
[**update-entitlements-potential-role**](#update-entitlements-potential-role) | **POST** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request
Create request to provision a potential role into an actual role.
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-potential-role-provision-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | min_entitlement_popularity | **int** |   (optional) (default to 0) | Minimum popularity required for an entitlement to be included in the provisioned role.
  Query | include_common_access | **bool** |   (optional) (default to True) | Boolean determining whether common access entitlements will be included in the provisioned role.
 Body  | role_mining_potential_role_provision_request | [**RoleMiningPotentialRoleProvisionRequest**](../models/role-mining-potential-role-provision-request) |   (optional) | Required information to create a new role

### Return type
[**RoleMiningPotentialRoleSummary**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. Returns a potential role summary including the status of the provison request | RoleMiningPotentialRoleSummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_provision_request import RoleMiningPotentialRoleProvisionRequest
from sailpoint.beta.models.role_mining_potential_role_summary import RoleMiningPotentialRoleSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    min_entitlement_popularity = 0 # int | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0) # int | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
    include_common_access = True # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to True) # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to True)
    role_mining_potential_role_provision_request = '''{
          "includeIdentities" : true,
          "roleName" : "Finance - Accounting",
          "ownerId" : "2b568c65bc3c4c57a43bd97e3a8e41",
          "roleDescription" : "General access for accounting department",
          "directlyAssignedEntitlements" : false
        }''' # RoleMiningPotentialRoleProvisionRequest | Required information to create a new role (optional)

    try:
        # Create request to provision a potential role into an actual role.
        
        results = IAIRoleMiningApi(api_client).create_potential_role_provision_request(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).create_potential_role_provision_request(session_id, potential_role_id, min_entitlement_popularity, include_common_access, new_role_mining_potential_role_provision_request)
        print("The response of IAIRoleMiningApi->create_potential_role_provision_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->create_potential_role_provision_request: %s\n" % e)
```



[[Back to top]](#) 

## create-role-mining-sessions
Create a role mining session
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-role-mining-sessions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | role_mining_session_dto | [**RoleMiningSessionDto**](../models/role-mining-session-dto) | True  | Role mining session parameters

### Return type
[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Submitted a role mining session request | RoleMiningSessionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_session_dto import RoleMiningSessionDto
from sailpoint.beta.models.role_mining_session_response import RoleMiningSessionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_mining_session_dto = '''{
          "emailRecipientId" : "2c918090761a5aac0176215c46a62d58",
          "prescribedPruneThreshold" : 10,
          "pruneThreshold" : 50,
          "saved" : true,
          "potentialRolesReadyCount" : 0,
          "scope" : {
            "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
            "attributeFilterCriteria" : {
              "displayName" : {
                "untranslated" : "Location: Miami"
              },
              "ariaLabel" : {
                "untranslated" : "Location: Miami"
              },
              "data" : {
                "displayName" : {
                  "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
                },
                "name" : "location",
                "operator" : "EQUALS",
                "values" : [ "Miami" ]
              }
            },
            "criteria" : "source.name:DataScienceDataset"
          },
          "potentialRoleCount" : 0,
          "name" : "Saved RM Session - 07/10",
          "minNumIdentitiesInPotentialRole" : 20,
          "identityCount" : 0,
          "type" : "SPECIALIZED"
        }''' # RoleMiningSessionDto | Role mining session parameters

    try:
        # Create a role mining session
        new_role_mining_session_dto = RoleMiningSessionDto.from_json(role_mining_session_dto)
        results = IAIRoleMiningApi(api_client).create_role_mining_sessions(role_mining_session_dto=new_role_mining_session_dto)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).create_role_mining_sessions(new_role_mining_session_dto)
        print("The response of IAIRoleMiningApi->create_role_mining_sessions:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->create_role_mining_sessions: %s\n" % e)
```



[[Back to top]](#) 

## download-role-mining-potential-role-zip
Export (download) details for a potential role in a role mining session
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/download-role-mining-potential-role-zip)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
Path   | export_id | **str** | True  | The id of a previously run export job for this potential role

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | bytearray |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '278359a6-04b7-4669-9468-924cf580964a' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    export_id = '4940ffd4-836f-48a3-b2b0-6d498c3fdf40' # str | The id of a previously run export job for this potential role # str | The id of a previously run export job for this potential role

    try:
        # Export (download) details for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).download_role_mining_potential_role_zip(session_id=session_id, potential_role_id=potential_role_id, export_id=export_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).download_role_mining_potential_role_zip(session_id, potential_role_id, export_id)
        print("The response of IAIRoleMiningApi->download_role_mining_potential_role_zip:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->download_role_mining_potential_role_zip: %s\n" % e)
```



[[Back to top]](#) 

## export-role-mining-potential-role
Export (download) details for a potential role in a role mining session
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session

### Return type
**bytearray**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | bytearray |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session

    try:
        # Export (download) details for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).export_role_mining_potential_role(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).export_role_mining_potential_role(session_id, potential_role_id)
        print("The response of IAIRoleMiningApi->export_role_mining_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->export_role_mining_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## export-role-mining-potential-role-async
Asynchronously export details for a potential role in a role mining session and upload to S3
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role-async)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
 Body  | role_mining_potential_role_export_request | [**RoleMiningPotentialRoleExportRequest**](../models/role-mining-potential-role-export-request) |   (optional) | 

### Return type
[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Job Submitted. Returns a reportId that can be used to download the zip once complete | RoleMiningPotentialRoleExportResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_export_request import RoleMiningPotentialRoleExportRequest
from sailpoint.beta.models.role_mining_potential_role_export_response import RoleMiningPotentialRoleExportResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '278359a6-04b7-4669-9468-924cf580964a' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    role_mining_potential_role_export_request = '''{
          "minEntitlementPopularity" : 0,
          "includeCommonAccess" : true
        }''' # RoleMiningPotentialRoleExportRequest |  (optional)

    try:
        # Asynchronously export details for a potential role in a role mining session and upload to S3
        
        results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_async(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_async(session_id, potential_role_id, new_role_mining_potential_role_export_request)
        print("The response of IAIRoleMiningApi->export_role_mining_potential_role_async:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->export_role_mining_potential_role_async: %s\n" % e)
```



[[Back to top]](#) 

## export-role-mining-potential-role-status
Retrieve status of a potential role export job
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
Path   | export_id | **str** | True  | The id of a previously run export job for this potential role

### Return type
[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Success. Returns the current status of this export | RoleMiningPotentialRoleExportResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_export_response import RoleMiningPotentialRoleExportResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '278359a6-04b7-4669-9468-924cf580964a' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    export_id = '4940ffd4-836f-48a3-b2b0-6d498c3fdf40' # str | The id of a previously run export job for this potential role # str | The id of a previously run export job for this potential role

    try:
        # Retrieve status of a potential role export job
        
        results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_status(session_id=session_id, potential_role_id=potential_role_id, export_id=export_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).export_role_mining_potential_role_status(session_id, potential_role_id, export_id)
        print("The response of IAIRoleMiningApi->export_role_mining_potential_role_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->export_role_mining_potential_role_status: %s\n" % e)
```



[[Back to top]](#) 

## get-all-potential-role-summaries
Retrieves all potential role summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-all-potential-role-summaries)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningPotentialRoleSummary]**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns all potential role summaries that match the query parameters. | List[RoleMiningPotentialRoleSummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_summary import RoleMiningPotentialRoleSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sorters = 'createdDate' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
    filters = '(createdByName co \"int\") and (createdById sw \"2c9180907\") and (type eq \"COMMON\") and ((name co \"entt\") or (saved eq true))' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves all potential role summaries
        
        results = IAIRoleMiningApi(api_client).get_all_potential_role_summaries()
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_all_potential_role_summaries(sorters, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_all_potential_role_summaries:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_all_potential_role_summaries: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-distribution-potential-role
Retrieves entitlement popularity distribution for a potential role in a role mining session
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-distribution-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | include_common_access | **bool** |   (optional) | Boolean determining whether common access entitlements will be included or not

### Return type
**Dict[str, int]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a map containing entitlement popularity distribution for a potential role. | Dict[str, int] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    include_common_access = True # bool | Boolean determining whether common access entitlements will be included or not (optional) # bool | Boolean determining whether common access entitlements will be included or not (optional)

    try:
        # Retrieves entitlement popularity distribution for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_entitlement_distribution_potential_role(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_entitlement_distribution_potential_role(session_id, potential_role_id, include_common_access)
        print("The response of IAIRoleMiningApi->get_entitlement_distribution_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_entitlement_distribution_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlements-potential-role
Retrieves entitlements for a potential role in a role mining session
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlements-potential-role)

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

### Return type
[**List[RoleMiningEntitlement]**](../models/role-mining-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of entitlements for a potential role. | List[RoleMiningEntitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_entitlement import RoleMiningEntitlement
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    include_common_access = True # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to True) # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to True)
    sorters = 'popularity' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
    filters = 'applicationName sw \"AD\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves entitlements for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_entitlements_potential_role(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_entitlements_potential_role(session_id, potential_role_id, include_common_access, sorters, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_entitlements_potential_role:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_entitlements_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## get-excluded-entitlements-potential-role
Retrieves excluded entitlements for a potential role in a role mining session
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-excluded-entitlements-potential-role)

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

### Return type
[**List[RoleMiningEntitlement]**](../models/role-mining-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of excluded entitlements for a potential roles. | List[RoleMiningEntitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_entitlement import RoleMiningEntitlement
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    sorters = 'populariity' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
    filters = 'applicationName sw \"AD\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves excluded entitlements for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_excluded_entitlements_potential_role(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_excluded_entitlements_potential_role(session_id, potential_role_id, sorters, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_excluded_entitlements_potential_role:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_excluded_entitlements_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## get-identities-potential-role
Retrieves identities for a potential role in a role mining session
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identities-potential-role)

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

### Return type
[**List[RoleMiningIdentity]**](../models/role-mining-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of identities for a potential role. | List[RoleMiningIdentity] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_identity import RoleMiningIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'filters_example' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves identities for a potential role in a role mining session
        
        results = IAIRoleMiningApi(api_client).get_identities_potential_role(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_identities_potential_role(session_id, potential_role_id, sorters, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_identities_potential_role:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_identities_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role
Retrieve potential role in session
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session

### Return type
[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role import RoleMiningPotentialRole
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session

    try:
        # Retrieve potential role in session
        
        results = IAIRoleMiningApi(api_client).get_potential_role(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role(session_id, potential_role_id)
        print("The response of IAIRoleMiningApi->get_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-applications
Retrieves the applications of a potential role for a role mining session
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-applications)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningPotentialRoleApplication]**](../models/role-mining-potential-role-application)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential roles for a role mining session. | List[RoleMiningPotentialRoleApplication] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_application import RoleMiningPotentialRoleApplication
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '62f28d91-7d9f-4d17-be15-666d5b41d77f' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    filters = 'applicationName sw \"test\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves the applications of a potential role for a role mining session
        
        results = IAIRoleMiningApi(api_client).get_potential_role_applications(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_applications(session_id, potential_role_id, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_potential_role_applications:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_applications: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-entitlements
Retrieves the entitlements of a potential role for a role mining session
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-entitlements)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningPotentialRoleEntitlements]**](../models/role-mining-potential-role-entitlements)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns the entitlements of a potential role for a role mining session. | List[RoleMiningPotentialRoleEntitlements] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_entitlements import RoleMiningPotentialRoleEntitlements
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '62f28d91-7d9f-4d17-be15-666d5b41d77f' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    filters = 'entitlementRef.name sw \"test\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves the entitlements of a potential role for a role mining session
        
        results = IAIRoleMiningApi(api_client).get_potential_role_entitlements(session_id=session_id, potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_entitlements(session_id, potential_role_id, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_potential_role_entitlements:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_entitlements: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-source-identity-usage
Retrieves potential role source usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-source-identity-usage)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | potential_role_id | **str** | True  | A potential role id
Path   | source_id | **str** | True  | A source id
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningPotentialRoleSourceUsage]**](../models/role-mining-potential-role-source-usage)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of source usage for the identities in a potential role. | List[RoleMiningPotentialRoleSourceUsage] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_source_usage import RoleMiningPotentialRoleSourceUsage
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    potential_role_id = 'e0cc5d7d-bf7f-4f81-b2af-8885b09d9923' # str | A potential role id # str | A potential role id
    source_id = '2c9180877620c1460176267f336a106f' # str | A source id # str | A source id
    sorters = '-usageCount' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves potential role source usage
        
        results = IAIRoleMiningApi(api_client).get_potential_role_source_identity_usage(potential_role_id=potential_role_id, source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_source_identity_usage(potential_role_id, source_id, sorters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_potential_role_source_identity_usage:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_source_identity_usage: %s\n" % e)
```



[[Back to top]](#) 

## get-potential-role-summaries
Retrieve session's potential role summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-summaries)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq*
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningPotentialRoleSummary]**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential role summaries for a role mining session. | List[RoleMiningPotentialRoleSummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role_summary import RoleMiningPotentialRoleSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    sorters = 'createdDate' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
    filters = '(createdByName co \"int\")and (createdById sw \"2c9180907\")and (type eq \"COMMON\")and ((name co \"entt\")or (saved eq true))' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieve session's potential role summaries
        
        results = IAIRoleMiningApi(api_client).get_potential_role_summaries(session_id=session_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_potential_role_summaries(session_id, sorters, filters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_potential_role_summaries:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_potential_role_summaries: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-potential-role
Retrieves a specific potential role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | potential_role_id | **str** | True  | A potential role id

### Return type
[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role import RoleMiningPotentialRole
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id # str | A potential role id

    try:
        # Retrieves a specific potential role
        
        results = IAIRoleMiningApi(api_client).get_role_mining_potential_role(potential_role_id=potential_role_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_potential_role(potential_role_id)
        print("The response of IAIRoleMiningApi->get_role_mining_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-session
Get a role mining session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-session)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id to be retrieved.

### Return type
[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns a role mining session | RoleMiningSessionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_session_response import RoleMiningSessionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id to be retrieved. # str | The role mining session id to be retrieved.

    try:
        # Get a role mining session
        
        results = IAIRoleMiningApi(api_client).get_role_mining_session(session_id=session_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_session(session_id)
        print("The response of IAIRoleMiningApi->get_role_mining_session:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_session: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-session-status
Get role mining session status state
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-session-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id

### Return type
[**RoleMiningSessionStatus**](../models/role-mining-session-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns session status | RoleMiningSessionStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_session_status import RoleMiningSessionStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id

    try:
        # Get role mining session status state
        
        results = IAIRoleMiningApi(api_client).get_role_mining_session_status(session_id=session_id)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_session_status(session_id)
        print("The response of IAIRoleMiningApi->get_role_mining_session_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_session_status: %s\n" % e)
```



[[Back to top]](#) 

## get-role-mining-sessions
Retrieves all role mining sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-sessions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningSessionResponse]**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns all role mining sessions that match the query parameters. | List[RoleMiningSessionResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_session_response import RoleMiningSessionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'saved eq \"true\" and name sw \"RM Session\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
    sorters = 'createdBy,createdDate' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves all role mining sessions
        
        results = IAIRoleMiningApi(api_client).get_role_mining_sessions()
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_role_mining_sessions(filters, sorters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_role_mining_sessions:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_role_mining_sessions: %s\n" % e)
```



[[Back to top]](#) 

## get-saved-potential-roles
Retrieves all saved potential roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-saved-potential-roles)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified**
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[RoleMiningSessionDraftRoleDto]**](../models/role-mining-session-draft-role-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of draft roles for a role mining session. | List[RoleMiningSessionDraftRoleDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_session_draft_role_dto import RoleMiningSessionDraftRoleDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sorters = 'modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Retrieves all saved potential roles
        
        results = IAIRoleMiningApi(api_client).get_saved_potential_roles()
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).get_saved_potential_roles(sorters, offset, limit, count)
        print("The response of IAIRoleMiningApi->get_saved_potential_roles:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->get_saved_potential_roles: %s\n" % e)
```



[[Back to top]](#) 

## patch-potential-role
Update a potential role in session
This method updates an existing potential role using the role mining session id and the potential role summary id.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | The potential role summary id
 Body  | patch_potential_role_request_inner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.patch_potential_role_request_inner import PatchPotentialRoleRequestInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The potential role summary id # str | The potential role summary id
    patch_potential_role_request_inner = '''[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]''' # List[PatchPotentialRoleRequestInner] | 

    try:
        # Update a potential role in session
        new_patch_potential_role_request_inner = PatchPotentialRoleRequestInner.from_json(patch_potential_role_request_inner)
        results = IAIRoleMiningApi(api_client).patch_potential_role(session_id=session_id, potential_role_id=potential_role_id, patch_potential_role_request_inner=new_patch_potential_role_request_inner)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).patch_potential_role(session_id, potential_role_id, new_patch_potential_role_request_inner)
        print("The response of IAIRoleMiningApi->patch_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->patch_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## patch-role-mining-potential-role
Update a potential role
This method updates an existing potential role.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role-mining-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | potential_role_id | **str** | True  | The potential role summary id
 Body  | patch_potential_role_request_inner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.patch_potential_role_request_inner import PatchPotentialRoleRequestInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The potential role summary id # str | The potential role summary id
    patch_potential_role_request_inner = '''[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]''' # List[PatchPotentialRoleRequestInner] | 

    try:
        # Update a potential role
        new_patch_potential_role_request_inner = PatchPotentialRoleRequestInner.from_json(patch_potential_role_request_inner)
        results = IAIRoleMiningApi(api_client).patch_role_mining_potential_role(potential_role_id=potential_role_id, patch_potential_role_request_inner=new_patch_potential_role_request_inner)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).patch_role_mining_potential_role(potential_role_id, new_patch_potential_role_request_inner)
        print("The response of IAIRoleMiningApi->patch_role_mining_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->patch_role_mining_potential_role: %s\n" % e)
```



[[Back to top]](#) 

## patch-role-mining-session
Patch a role mining session
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role-mining-session)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id to be patched
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id to be patched # str | The role mining session id to be patched
    json_patch_operation = '''[{op=replace, path=/pruneThreshold, value=83}, {op=replace, path=/minNumIdentitiesInPotentialRole, value=10}, {op=replace, path=/saved, value=false}, {op=replace, path=/name, value=RM Session - 07/10/22}, {op=add, path=/name, value=RM Session - 07/10/22}]''' # List[JsonPatchOperation] | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

    try:
        # Patch a role mining session
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = IAIRoleMiningApi(api_client).patch_role_mining_session(session_id=session_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).patch_role_mining_session(session_id, new_json_patch_operation)
        print("The response of IAIRoleMiningApi->patch_role_mining_session:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->patch_role_mining_session: %s\n" % e)
```



[[Back to top]](#) 

## update-entitlements-potential-role
Edit entitlements for a potential role to exclude some entitlements
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-entitlements-potential-role)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | session_id | **str** | True  | The role mining session id
Path   | potential_role_id | **str** | True  | A potential role id in a role mining session
 Body  | role_mining_potential_role_edit_entitlements | [**RoleMiningPotentialRoleEditEntitlements**](../models/role-mining-potential-role-edit-entitlements) | True  | Role mining session parameters

### Return type
[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Adds or removes entitlements from a potential role&#39;s entitlement exclusion list. | RoleMiningPotentialRole |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_role_mining_api import IAIRoleMiningApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_mining_potential_role import RoleMiningPotentialRole
from sailpoint.beta.models.role_mining_potential_role_edit_entitlements import RoleMiningPotentialRoleEditEntitlements
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    session_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role mining session id # str | The role mining session id
    potential_role_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | A potential role id in a role mining session # str | A potential role id in a role mining session
    role_mining_potential_role_edit_entitlements = '''{
          "ids" : [ "entId1", "entId2" ],
          "exclude" : true
        }''' # RoleMiningPotentialRoleEditEntitlements | Role mining session parameters

    try:
        # Edit entitlements for a potential role to exclude some entitlements
        new_role_mining_potential_role_edit_entitlements = RoleMiningPotentialRoleEditEntitlements.from_json(role_mining_potential_role_edit_entitlements)
        results = IAIRoleMiningApi(api_client).update_entitlements_potential_role(session_id=session_id, potential_role_id=potential_role_id, role_mining_potential_role_edit_entitlements=new_role_mining_potential_role_edit_entitlements)
        # Below is a request that includes all optional parameters
        # results = IAIRoleMiningApi(api_client).update_entitlements_potential_role(session_id, potential_role_id, new_role_mining_potential_role_edit_entitlements)
        print("The response of IAIRoleMiningApi->update_entitlements_potential_role:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIRoleMiningApi->update_entitlements_potential_role: %s\n" % e)
```



[[Back to top]](#) 



