---
id: non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeLifecycleManagement'] 
slug: /tools/sdk/go/v3/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement']
---


# NonEmployeeLifecycleManagement

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApproveNonEmployeeRequest**](#approve-non-employee-request) | **Post** /non-employee-approvals/{id}/approve | Approve a Non-Employee Request
[**CreateNonEmployeeRecord**](#create-non-employee-record) | **Post** /non-employee-records | Create Non-Employee Record
[**CreateNonEmployeeRequest**](#create-non-employee-request) | **Post** /non-employee-requests | Create Non-Employee Request
[**CreateNonEmployeeSource**](#create-non-employee-source) | **Post** /non-employee-sources | Create Non-Employee Source
[**CreateNonEmployeeSourceSchemaAttributes**](#create-non-employee-source-schema-attributes) | **Post** /non-employee-sources/{sourceId}/schema-attributes | Create a new Schema Attribute for Non-Employee Source
[**DeleteNonEmployeeRecord**](#delete-non-employee-record) | **Delete** /non-employee-records/{id} | Delete Non-Employee Record
[**DeleteNonEmployeeRecordsInBulk**](#delete-non-employee-records-in-bulk) | **Post** /non-employee-records/bulk-delete | Delete Multiple Non-Employee Records
[**DeleteNonEmployeeRequest**](#delete-non-employee-request) | **Delete** /non-employee-requests/{id} | Delete Non-Employee Request
[**DeleteNonEmployeeSchemaAttribute**](#delete-non-employee-schema-attribute) | **Delete** /non-employee-sources/{sourceId}/schema-attributes/{attributeId} | Delete a Schema Attribute for Non-Employee Source
[**DeleteNonEmployeeSource**](#delete-non-employee-source) | **Delete** /non-employee-sources/{sourceId} | Delete Non-Employee Source
[**DeleteNonEmployeeSourceSchemaAttributes**](#delete-non-employee-source-schema-attributes) | **Delete** /non-employee-sources/{sourceId}/schema-attributes | Delete all custom schema attributes for Non-Employee Source
[**ExportNonEmployeeRecords**](#export-non-employee-records) | **Get** /non-employee-sources/{id}/non-employees/download | Exports Non-Employee Records to CSV
[**ExportNonEmployeeSourceSchemaTemplate**](#export-non-employee-source-schema-template) | **Get** /non-employee-sources/{id}/schema-attributes-template/download | Exports Source Schema Template
[**GetNonEmployeeApproval**](#get-non-employee-approval) | **Get** /non-employee-approvals/{id} | Get a non-employee approval item detail
[**GetNonEmployeeApprovalSummary**](#get-non-employee-approval-summary) | **Get** /non-employee-approvals/summary/{requested-for} | Get Summary of Non-Employee Approval Requests
[**GetNonEmployeeBulkUploadStatus**](#get-non-employee-bulk-upload-status) | **Get** /non-employee-sources/{id}/non-employee-bulk-upload/status | Obtain the status of bulk upload on the source
[**GetNonEmployeeRecord**](#get-non-employee-record) | **Get** /non-employee-records/{id} | Get a Non-Employee Record
[**GetNonEmployeeRequest**](#get-non-employee-request) | **Get** /non-employee-requests/{id} | Get a Non-Employee Request
[**GetNonEmployeeRequestSummary**](#get-non-employee-request-summary) | **Get** /non-employee-requests/summary/{requested-for} | Get Summary of Non-Employee Requests
[**GetNonEmployeeSchemaAttribute**](#get-non-employee-schema-attribute) | **Get** /non-employee-sources/{sourceId}/schema-attributes/{attributeId} | Get Schema Attribute Non-Employee Source
[**GetNonEmployeeSource**](#get-non-employee-source) | **Get** /non-employee-sources/{sourceId} | Get a Non-Employee Source
[**GetNonEmployeeSourceSchemaAttributes**](#get-non-employee-source-schema-attributes) | **Get** /non-employee-sources/{sourceId}/schema-attributes | List Schema Attributes Non-Employee Source
[**ImportNonEmployeeRecordsInBulk**](#import-non-employee-records-in-bulk) | **Post** /non-employee-sources/{id}/non-employee-bulk-upload | Imports, or Updates, Non-Employee Records
[**ListNonEmployeeApprovals**](#list-non-employee-approvals) | **Get** /non-employee-approvals | Get List of Non-Employee Approval Requests
[**ListNonEmployeeRecords**](#list-non-employee-records) | **Get** /non-employee-records | List Non-Employee Records
[**ListNonEmployeeRequests**](#list-non-employee-requests) | **Get** /non-employee-requests | List Non-Employee Requests
[**ListNonEmployeeSources**](#list-non-employee-sources) | **Get** /non-employee-sources | List Non-Employee Sources
[**PatchNonEmployeeRecord**](#patch-non-employee-record) | **Patch** /non-employee-records/{id} | Patch Non-Employee Record
[**PatchNonEmployeeSchemaAttribute**](#patch-non-employee-schema-attribute) | **Patch** /non-employee-sources/{sourceId}/schema-attributes/{attributeId} | Patch a Schema Attribute for Non-Employee Source
[**PatchNonEmployeeSource**](#patch-non-employee-source) | **Patch** /non-employee-sources/{sourceId} | Patch a Non-Employee Source
[**RejectNonEmployeeRequest**](#reject-non-employee-request) | **Post** /non-employee-approvals/{id}/reject | Reject a Non-Employee Request
[**UpdateNonEmployeeRecord**](#update-non-employee-record) | **Put** /non-employee-records/{id} | Update Non-Employee Record



## approve-non-employee-request


Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee approval item id (UUID)
 Body  | nonEmployeeApprovalDecision | [**NonEmployeeApprovalDecision**](../models/non-employee-approval-decision) | True  | 

	
### Return type

[**NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | NonEmployeeApprovalItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## create-non-employee-record


This request will create a non-employee record.
Requires role context of `idn:nesr:create`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | nonEmployeeRequestBody | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-Employee record creation request body.

	
### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created non-employee record. | NonEmployeeRecord
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## create-non-employee-request


This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | nonEmployeeRequestBody | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-Employee creation request body

	
### Return type

[**NonEmployeeRequest**](../models/non-employee-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee request creation object | NonEmployeeRequest
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## create-non-employee-source


This request will create a non-employee source. Requires role context of `idn:nesr:create`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | nonEmployeeSourceRequestBody | [**NonEmployeeSourceRequestBody**](../models/non-employee-source-request-body) | True  | Non-Employee source creation request body.

	
### Return type

[**NonEmployeeSourceWithCloudExternalId**](../models/non-employee-source-with-cloud-external-id)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created non-employee source. | NonEmployeeSourceWithCloudExternalId
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## create-non-employee-source-schema-attributes


This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | The Source id
 Body  | nonEmployeeSchemaAttributeBody | [**NonEmployeeSchemaAttributeBody**](../models/non-employee-schema-attribute-body) | True  | 

	
### Return type

[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Schema Attribute created. | NonEmployeeSchemaAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-non-employee-record


This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee record id (UUID)

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## delete-non-employee-records-in-bulk


This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | deleteNonEmployeeRecordsInBulkRequest | [**DeleteNonEmployeeRecordsInBulkRequest**](../models/delete-non-employee-records-in-bulk-request) | True  | Non-Employee bulk delete request body.

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## delete-non-employee-request


This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee request id in the UUID format

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## delete-non-employee-schema-attribute


This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attributeId | **string** | True  | The Schema Attribute Id (UUID)
Path   | sourceId | **string** | True  | The Source id

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## delete-non-employee-source


This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | Source Id

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## delete-non-employee-source-schema-attributes


This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | The Source id

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## export-non-employee-records


This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Source Id (UUID)

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Exported CSV | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

[[Back to top]](#) 


## export-non-employee-source-schema-template


This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Source Id (UUID)

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Exported Source Schema Template | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

[[Back to top]](#) 


## get-non-employee-approval


Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee approval item id (UUID)
  Query | includeDetail | **bool** |   (optional) | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*

	
### Return type

[**NonEmployeeApprovalItemDetail**](../models/non-employee-approval-item-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | NonEmployeeApprovalItemDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-approval-summary


This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id.
  2. The current user is an approver, in which case "me" should be provided
as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | requestedFor | **string** | True  | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

	
### Return type

[**NonEmployeeApprovalSummary**](../models/non-employee-approval-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | summary of non-employee approval requests | NonEmployeeApprovalSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-bulk-upload-status


The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Source ID (UUID)

	
### Return type

[**NonEmployeeBulkUploadStatus**](../models/non-employee-bulk-upload-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the newest bulk-upload job, if any. | NonEmployeeBulkUploadStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-record


This gets a non-employee record.
Requires role context of `idn:nesr:read`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee record id (UUID)

	
### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee record object | NonEmployeeRecord
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-request


This gets a non-employee request.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in this case the user
can get the non-employee request for any user.
  2. The user must be the owner of the non-employee request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee request id (UUID)

	
### Return type

[**NonEmployeeRequest**](../models/non-employee-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee request object. | NonEmployeeRequest
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-request-summary


This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | requestedFor | **string** | True  | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

	
### Return type

[**NonEmployeeRequestSummary**](../models/non-employee-request-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee request summary object. | NonEmployeeRequestSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-schema-attribute


This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attributeId | **string** | True  | The Schema Attribute Id (UUID)
Path   | sourceId | **string** | True  | The Source id

	
### Return type

[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Schema Attribute | NonEmployeeSchemaAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-source


This gets a non-employee source. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request any source.
  2. The current user is an account manager, in which case the user can only
request sources that they own.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | Source Id

	
### Return type

[**NonEmployeeSource**](../models/non-employee-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee source object. | NonEmployeeSource
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-non-employee-source-schema-attributes


This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | The Source id

	
### Return type

[**[]NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Schema Attributes | []NonEmployeeSchemaAttribute
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## import-non-employee-records-in-bulk


This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Source Id (UUID)
   | data | ***os.File** | True  | 

	
### Return type

[**NonEmployeeBulkUploadJob**](../models/non-employee-bulk-upload-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The CSV was accepted to be bulk inserted now or at a later time. | NonEmployeeBulkUploadJob
400 | Client Error - Returned if the request body is invalid. The response body will contain the list of specific errors with one on each line.  | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) 


## list-non-employee-approvals


This gets a list of non-employee approval requests.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can list the approvals for any approver.
  2. The user owns the requested approval.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requestedFor | **string** |   (optional) | The identity for whom the request was made. *me* indicates the current user.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **string** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq*
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

	
### Return type

[**[]NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of approval items. | []NonEmployeeApprovalItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-non-employee-records


This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified**
  Query | filters | **string** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*

	
### Return type

[**[]NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee record objects | []NonEmployeeRecord
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-non-employee-requests


This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list non-employee requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requestedFor | **string** | True  | The identity for whom the request was made. *me* indicates the current user.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate**
  Query | filters | **string** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* 

	
### Return type

[**[]NonEmployeeRequest**](../models/non-employee-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee request objects. | []NonEmployeeRequest
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-non-employee-sources


This gets a list of non-employee sources. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list sources assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the sources that he or she owns.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requestedFor | **string** | True  | The identity for whom the request was made. *me* indicates the current user.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | nonEmployeeCount | **bool** |   (optional) | The flag to determine whether return a non-employee count associate with source.
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId**

	
### Return type

[**[]NonEmployeeSourceWithNECount**](../models/non-employee-source-with-ne-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee sources objects. | []NonEmployeeSourceWithNECount
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## patch-non-employee-record


This request will patch a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-employee record id (UUID)
 Body  | jsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

	
### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A patched non-employee record. | NonEmployeeRecord
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


## patch-non-employee-schema-attribute


This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attributeId | **string** | True  | The Schema Attribute Id (UUID)
Path   | sourceId | **string** | True  | The Source id
 Body  | jsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

	
### Return type

[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Schema Attribute was successfully patched. | NonEmployeeSchemaAttribute
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


## patch-non-employee-source


patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | Source Id
 Body  | jsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

	
### Return type

[**NonEmployeeSource**](../models/non-employee-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A patched non-employee source object. | NonEmployeeSource
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

[[Back to top]](#) 


## reject-non-employee-request


This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-Employee approval item id (UUID)
 Body  | nonEmployeeRejectApprovalDecision | [**NonEmployeeRejectApprovalDecision**](../models/non-employee-reject-approval-decision) | True  | 

	
### Return type

[**NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | NonEmployeeApprovalItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## update-non-employee-record


This request will update a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | Non-employee record id (UUID)
 Body  | nonEmployeeRequestBody | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

	
### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An updated non-employee record. | NonEmployeeRecord
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

