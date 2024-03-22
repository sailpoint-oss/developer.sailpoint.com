---
id: iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IAIRoleMining'] 
slug: /tools/sdk/powershell/beta/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining']
---


# IAIRoleMining

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPotentialRoleProvisionRequest**](#create-potential-role-provision-request) | **POST** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/provision | Create request to provision a potential role into an actual role.
[**createRoleMiningSessions**](#create-role-mining-sessions) | **POST** /role-mining-sessions | Create a role mining session
[**downloadRoleMiningPotentialRoleZip**](#download-role-mining-potential-role-zip) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download | Export (download) details for a potential role in a role mining session
[**exportRoleMiningPotentialRole**](#export-role-mining-potential-role) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export | Export (download) details for a potential role in a role mining session
[**exportRoleMiningPotentialRoleAsync**](#export-role-mining-potential-role-async) | **POST** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async | Asynchronously export details for a potential role in a role mining session and upload to S3
[**exportRoleMiningPotentialRoleStatus**](#export-role-mining-potential-role-status) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId} | Retrieve status of a potential role export job
[**getAllPotentialRoleSummaries**](#get-all-potential-role-summaries) | **GET** /role-mining-potential-roles | Retrieves all potential role summaries
[**getEntitlementDistributionPotentialRole**](#get-entitlement-distribution-potential-role) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**getEntitlementsPotentialRole**](#get-entitlements-potential-role) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities | Retrieves entitlements for a potential role in a role mining session
[**getExcludedEntitlementsPotentialRole**](#get-excluded-entitlements-potential-role) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements | Retrieves excluded entitlements for a potential role in a role mining session
[**getIdentitiesPotentialRole**](#get-identities-potential-role) | **GET** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/identities | Retrieves identities for a potential role in a role mining session
[**getPotentialRole**](#get-potential-role) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId} | Retrieves a specific potential role
[**getPotentialRoleApplications**](#get-potential-role-applications) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications | Retrieves the applications of a potential role for a role mining session
[**getPotentialRoleSourceIdentityUsage**](#get-potential-role-source-identity-usage) | **GET** /role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage | Retrieves potential role source usage
[**getPotentialRoleSummaries**](#get-potential-role-summaries) | **GET** /role-mining-sessions/{sessionId}/potential-role-summaries | Retrieves all potential role summaries
[**getRoleMiningPotentialRole**](#get-role-mining-potential-role) | **GET** /role-mining-potential-roles/{potentialRoleId} | Retrieves a specific potential role
[**getRoleMiningSession**](#get-role-mining-session) | **GET** /role-mining-sessions/{sessionId} | Get a role mining session
[**getRoleMiningSessionStatus**](#get-role-mining-session-status) | **GET** /role-mining-sessions/{sessionId}/status | Get role mining session status state
[**getRoleMiningSessions**](#get-role-mining-sessions) | **GET** /role-mining-sessions | Retrieves all role mining sessions
[**getSavedPotentialRoles**](#get-saved-potential-roles) | **GET** /role-mining-potential-roles/saved | Retrieves all saved potential roles
[**patchPotentialRole**](#patch-potential-role) | **PATCH** /role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId} | Update a potential role
[**patchPotentialRole_0**](#patch-potential-role-0) | **PATCH** /role-mining-potential-roles/{potentialRoleId} | Update a potential role
[**patchRoleMiningSession**](#patch-role-mining-session) | **PATCH** /role-mining-sessions/{sessionId} | Patch a role mining session
[**updateEntitlementsPotentialRole**](#update-entitlements-potential-role) | **POST** /role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements | Edit entitlements for a potential role to exclude some entitlements



## create-potential-role-provision-request


This method starts a job to provision a potential role

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | MinEntitlementPopularity | **Int32** |   (optional) (default to 0) | Minimum popularity required for an entitlement to be included in the provisioned role.
  Query | IncludeCommonAccess | **Boolean** |   (optional) (default to $true) | Boolean determining whether common access entitlements will be included in the provisioned role.
 Body  | RoleMiningPotentialRoleProvisionRequest | [**RoleMiningPotentialRoleProvisionRequest**](../models/role-mining-potential-role-provision-request) |   (optional) | Required information to create a new role

	
### Return type

[**RoleMiningPotentialRoleSummary**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. Returns a potential role summary including the status of the provison request | RoleMiningPotentialRoleSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## create-role-mining-sessions


This submits a create role mining session request to the role mining application.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RoleMiningSessionDto | [**RoleMiningSessionDto**](../models/role-mining-session-dto) | True  | Role mining session parameters

	
### Return type

[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Submitted a role mining session request | RoleMiningSessionResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## download-role-mining-potential-role-zip


This endpoint downloads a completed export of information for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role

	
### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

[[Back to top]](#) 


## export-role-mining-potential-role


This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session

	
### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a zip file containing csv files for identities and entitlements for the potential role. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

[[Back to top]](#) 


## export-role-mining-potential-role-async


This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
 Body  | RoleMiningPotentialRoleExportRequest | [**RoleMiningPotentialRoleExportRequest**](../models/role-mining-potential-role-export-request) |   (optional) | 

	
### Return type

[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Job Submitted. Returns a reportId that can be used to download the zip once complete | RoleMiningPotentialRoleExportResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## export-role-mining-potential-role-status


This endpoint retrieves information about the current status of a potential role export.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
Path   | ExportId | **String** | True  | The id of a previously run export job for this potential role

	
### Return type

[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Success. Returns the current status of this export | RoleMiningPotentialRoleExportResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-all-potential-role-summaries


Returns all potential role summaries that match the query parameters

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningPotentialRoleSummary[]**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all potential role summaries that match the query parameters. | RoleMiningPotentialRoleSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-entitlement-distribution-potential-role


This method returns entitlement popularity distribution for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | IncludeCommonAccess | **Boolean** |   (optional) | Boolean determining whether common access entitlements will be included or not

	
### Return type

**System.Collections.Hashtable**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a map containing entitlement popularity distribution for a potential role. | System.Collections.Hashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-entitlements-potential-role


This method returns entitlements for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | IncludeCommonAccess | **Boolean** |   (optional) | Boolean determining whether common access entitlements will be included or not
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity**  The default sort is **popularity** in descending order. 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningEntitlement[]**](../models/role-mining-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of entitlements for a potential role. | RoleMiningEntitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-excluded-entitlements-potential-role


This method returns excluded entitlements for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningEntitlement[]**](../models/role-mining-entitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of excluded entitlements for a potential roles. | RoleMiningEntitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-identities-potential-role


This method returns identities for a potential role in a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningIdentity[]**](../models/role-mining-identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of identities for a potential role. | RoleMiningIdentity[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-potential-role


This method returns a specific potential role for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session

	
### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-potential-role-applications


This method returns the applications of a potential role for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningPotentialRoleApplication[]**](../models/role-mining-potential-role-application)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRoleApplication[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-potential-role-source-identity-usage


This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id
Path   | SourceId | **String** | True  | A source id
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningPotentialRoleSourceUsage[]**](../models/role-mining-potential-role-source-usage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of source usage for the identities in a potential role. | RoleMiningPotentialRoleSourceUsage[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-potential-role-summaries


This method returns the potential role summaries for a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq*
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningPotentialRoleSummary[]**](../models/role-mining-potential-role-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential role summaries for a role mining session. | RoleMiningPotentialRoleSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-role-mining-potential-role


This method returns a specific potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PotentialRoleId | **String** | True  | A potential role id

	
### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of potential roles for a role mining session. | RoleMiningPotentialRole
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-role-mining-session


The method retrieves a role mining session.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be retrieved.

	
### Return type

[**RoleMiningSessionResponse**](../models/role-mining-session-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns a role mining session | RoleMiningSessionResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-role-mining-session-status


This method returns a role mining session status for a customer.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id

	
### Return type

[**RoleMiningSessionStatus**](../models/role-mining-session-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns session status | RoleMiningSessionStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-role-mining-sessions


Returns all role mining sessions that match the query parameters

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningSessionDto[]**](../models/role-mining-session-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns all role mining sessions that match the query parameters. | RoleMiningSessionDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-saved-potential-roles


This method returns all saved potential roles (draft roles).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified**
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**RoleMiningSessionDraftRoleDto[]**](../models/role-mining-session-draft-role-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns a list of draft roles for a role mining session. | RoleMiningSessionDraftRoleDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## patch-potential-role


The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
 Body  | PatchPotentialRoleRequestInner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

	
### Return type

[**SystemCollectionsHashtable**](../models/system-collections-hashtable)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## patch-potential-role-0


The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | The potential role summary id
 Body  | PatchPotentialRoleRequestInner | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) | True  | 

	
### Return type

[**SystemCollectionsHashtable**](../models/system-collections-hashtable)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns the potential role summary based on the potentialRoleId provided. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## patch-role-mining-session


The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id to be patched
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

	
### Return type

[**SystemCollectionsHashtable**](../models/system-collections-hashtable)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## update-entitlements-potential-role


This endpoint adds or removes entitlements from an exclusion list for a potential role.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SessionId | **String** | True  | The role mining session id
Path   | PotentialRoleId | **String** | True  | A potential role id in a role mining session
 Body  | RoleMiningPotentialRoleEditEntitlements | [**RoleMiningPotentialRoleEditEntitlements**](../models/role-mining-potential-role-edit-entitlements) | True  | Role mining session parameters

	
### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Adds or removes entitlements from a potential role&#39;s entitlement exclusion list. | RoleMiningPotentialRole
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

