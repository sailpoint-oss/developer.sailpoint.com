---
id: v2025-non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeLifecycleManagement', 'V2025NonEmployeeLifecycleManagement'] 
slug: /tools/sdk/powershell/v2025/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement', 'V2025NonEmployeeLifecycleManagement']
---

# NonEmployeeLifecycleManagement
  Use this API to implement non-employee lifecycle management functionality. 
With this functionality in place, administrators can create non-employee records and configure them for use in their organizations. 
This allows organizations to provide secure access to non-employees and control that access. 

The &#39;non-employee&#39; term refers to any consultant, contractor, intern, or other user in an organization who is not a full-time permanent employee. 
Organizations can track non-employees&#39; access and activity in Identity Security Cloud by creating and maintaining non-employee sources. 
Organizations can have a maximum of 50 non-employee sources. 

By using SailPoint&#39;s Non-Employee Lifecycle Management functionality, you agree to the following:

- SailPoint is not responsible for storing sensitive data. 
You may only add account attributes to non-employee identities that are necessary for business operations and are consistent with your contractual limitations on data that may be sent or stored in Identity Security Cloud.

- You are responsible for regularly downloading your list of non-employee accounts for all the sources you create and storing this list of accounts in a managed location to maintain an authoritative system of record and backup data for these accounts.

To manage non-employees in Identity Security Cloud, administrators must create a non-employee source and add accounts to the source. 

To create a non-employee source in Identity Security Cloud, administrators must use the Admin panel to go to Connections &gt; Sources.
They must then specify &#39;Non-Employee&#39; in the &#39;Source Type&#39; field. 
Refer to [Creating a Non-Employee Source](https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#creating-a-non-employee-source) for more details about how to create non-employee sources.

To add accounts to a non-employee source in Identity Security Cloud, administrators can select the non-employee source and add the accounts. 
They can also use the &#39;Manage Non-Employees&#39; widget on their user dashboards to reach the list of sources and then select the non-employee source they want to add the accounts to. 

Administrators can either add accounts individually or in bulk. Each non-employee source can have a maximum of 20,000 accounts. 
To add accounts in bulk, they must select the &#39;Bulk Upload&#39; option and upload a CSV file. 
Refer to [Adding Accounts](https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#adding-accounts) for more details about how to add accounts to non-employee sources.

Once administrators have created the non-employee source and added accounts to it, they can create identity profiles to generate identities for the non-employee accounts and manage the non-employee identities the same way they would any other identities. 

Refer to [Managing Non-Employee Sources and Accounts](https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html) for more information about non-employee lifecycle management.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-V2025NonEmployeeRequest**](#approve-non-employee-request) | **POST** `/non-employee-approvals/{id}/approve` | Approve a non-employee request
[**New-V2025NonEmployeeRecord**](#create-non-employee-record) | **POST** `/non-employee-records` | Create non-employee record
[**New-V2025NonEmployeeRequest**](#create-non-employee-request) | **POST** `/non-employee-requests` | Create non-employee request
[**New-V2025NonEmployeeSource**](#create-non-employee-source) | **POST** `/non-employee-sources` | Create non-employee source
[**New-V2025NonEmployeeSourceSchemaAttributes**](#create-non-employee-source-schema-attributes) | **POST** `/non-employee-sources/{sourceId}/schema-attributes` | Create a new schema attribute for non-employee source
[**Remove-V2025NonEmployeeRecord**](#delete-non-employee-record) | **DELETE** `/non-employee-records/{id}` | Delete non-employee record
[**Remove-V2025NonEmployeeRecordsInBulk**](#delete-non-employee-records-in-bulk) | **POST** `/non-employee-records/bulk-delete` | Delete multiple non-employee records
[**Remove-V2025NonEmployeeRequest**](#delete-non-employee-request) | **DELETE** `/non-employee-requests/{id}` | Delete non-employee request
[**Remove-V2025NonEmployeeSchemaAttribute**](#delete-non-employee-schema-attribute) | **DELETE** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Delete a schema attribute for non-employee source
[**Remove-V2025NonEmployeeSource**](#delete-non-employee-source) | **DELETE** `/non-employee-sources/{sourceId}` | Delete non-employee source
[**Remove-V2025NonEmployeeSourceSchemaAttributes**](#delete-non-employee-source-schema-attributes) | **DELETE** `/non-employee-sources/{sourceId}/schema-attributes` | Delete all custom schema attributes for non-employee source
[**Export-V2025NonEmployeeRecords**](#export-non-employee-records) | **GET** `/non-employee-sources/{id}/non-employees/download` | Exports non-employee records to csv
[**Export-V2025NonEmployeeSourceSchemaTemplate**](#export-non-employee-source-schema-template) | **GET** `/non-employee-sources/{id}/schema-attributes-template/download` | Exports source schema template
[**Get-V2025NonEmployeeApproval**](#get-non-employee-approval) | **GET** `/non-employee-approvals/{id}` | Get a non-employee approval item detail
[**Get-V2025NonEmployeeApprovalSummary**](#get-non-employee-approval-summary) | **GET** `/non-employee-approvals/summary/{requested-for}` | Get summary of non-employee approval requests
[**Get-V2025NonEmployeeBulkUploadStatus**](#get-non-employee-bulk-upload-status) | **GET** `/non-employee-sources/{id}/non-employee-bulk-upload/status` | Obtain the status of bulk upload on the source
[**Get-V2025NonEmployeeRecord**](#get-non-employee-record) | **GET** `/non-employee-records/{id}` | Get a non-employee record
[**Get-V2025NonEmployeeRequest**](#get-non-employee-request) | **GET** `/non-employee-requests/{id}` | Get a non-employee request
[**Get-V2025NonEmployeeRequestSummary**](#get-non-employee-request-summary) | **GET** `/non-employee-requests/summary/{requested-for}` | Get summary of non-employee requests
[**Get-V2025NonEmployeeSchemaAttribute**](#get-non-employee-schema-attribute) | **GET** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Get schema attribute non-employee source
[**Get-V2025NonEmployeeSource**](#get-non-employee-source) | **GET** `/non-employee-sources/{sourceId}` | Get a non-employee source
[**Get-V2025NonEmployeeSourceSchemaAttributes**](#get-non-employee-source-schema-attributes) | **GET** `/non-employee-sources/{sourceId}/schema-attributes` | List schema attributes non-employee source
[**Import-V2025NonEmployeeRecordsInBulk**](#import-non-employee-records-in-bulk) | **POST** `/non-employee-sources/{id}/non-employee-bulk-upload` | Imports, or updates, non-employee records
[**Get-V2025NonEmployeeApprovals**](#list-non-employee-approvals) | **GET** `/non-employee-approvals` | Get list of non-employee approval requests
[**Get-V2025NonEmployeeRecords**](#list-non-employee-records) | **GET** `/non-employee-records` | List non-employee records
[**Get-V2025NonEmployeeRequests**](#list-non-employee-requests) | **GET** `/non-employee-requests` | List non-employee requests
[**Get-V2025NonEmployeeSources**](#list-non-employee-sources) | **GET** `/non-employee-sources` | List non-employee sources
[**Update-V2025NonEmployeeRecord**](#patch-non-employee-record) | **PATCH** `/non-employee-records/{id}` | Patch non-employee record
[**Update-V2025NonEmployeeSchemaAttribute**](#patch-non-employee-schema-attribute) | **PATCH** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Patch a schema attribute for non-employee source
[**Update-V2025NonEmployeeSource**](#patch-non-employee-source) | **PATCH** `/non-employee-sources/{sourceId}` | Patch a non-employee source
[**Deny-V2025NonEmployeeRequest**](#reject-non-employee-request) | **POST** `/non-employee-approvals/{id}/reject` | Reject a non-employee request
[**Update-V2025NonEmployeeRecord**](#update-non-employee-record) | **PUT** `/non-employee-records/{id}` | Update non-employee record


## approve-non-employee-request
Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-non-employee-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
 Body  | NonEmployeeApprovalDecision | [**NonEmployeeApprovalDecision**](../models/non-employee-approval-decision) | True  | 

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

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Non-Employee approval item id (UUID)
$NonEmployeeApprovalDecision = @"{
  "comment" : "Approved by manager"
}"@

# Approve a non-employee request

try {
    $Result = ConvertFrom-JsonToNonEmployeeApprovalDecision -Json $NonEmployeeApprovalDecision
    Approve-V2025NonEmployeeRequest -Id $Id -NonEmployeeApprovalDecision $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-V2025NonEmployeeRequest -Id $Id -NonEmployeeApprovalDecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-V2025NonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-record
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-record)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | NonEmployeeRequestBody | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-Employee record creation request body.

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

### Example
```powershell
$NonEmployeeRequestBody = @"{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "firstName" : "William",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "phone" : "5125555555",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
}"@

# Create non-employee record

try {
    $Result = ConvertFrom-JsonToNonEmployeeRequestBody -Json $NonEmployeeRequestBody
    New-V2025NonEmployeeRecord -NonEmployeeRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025NonEmployeeRecord -NonEmployeeRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025NonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-request
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | NonEmployeeRequestBody | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-Employee creation request body

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

### Example
```powershell
$NonEmployeeRequestBody = @"{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "firstName" : "William",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "phone" : "5125555555",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
}"@

# Create non-employee request

try {
    $Result = ConvertFrom-JsonToNonEmployeeRequestBody -Json $NonEmployeeRequestBody
    New-V2025NonEmployeeRequest -NonEmployeeRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025NonEmployeeRequest -NonEmployeeRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025NonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-source
Create a non-employee source. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | NonEmployeeSourceRequestBody | [**NonEmployeeSourceRequestBody**](../models/non-employee-source-request-body) | True  | Non-Employee source creation request body.

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

### Example
```powershell
$NonEmployeeSourceRequestBody = @"{
  "owner" : {
    "id" : "2c91808570313110017040b06f344ec9"
  },
  "managementWorkgroup" : "123299",
  "accountManagers" : [ {
    "id" : "2c91808570313110017040b06f344ec9"
  }, {
    "id" : "2c91808570313110017040b06f344ec9"
  }, {
    "id" : "2c91808570313110017040b06f344ec9"
  }, {
    "id" : "2c91808570313110017040b06f344ec9"
  }, {
    "id" : "2c91808570313110017040b06f344ec9"
  } ],
  "name" : "Retail",
  "description" : "Source description",
  "approvers" : [ {
    "id" : "2c91808570313110017040b06f344ec9"
  }, {
    "id" : "2c91808570313110017040b06f344ec9"
  }, {
    "id" : "2c91808570313110017040b06f344ec9"
  } ]
}"@

# Create non-employee source

try {
    $Result = ConvertFrom-JsonToNonEmployeeSourceRequestBody -Json $NonEmployeeSourceRequestBody
    New-V2025NonEmployeeSource -NonEmployeeSourceRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025NonEmployeeSource -NonEmployeeSourceRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025NonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-source-schema-attributes
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-source-schema-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
 Body  | NonEmployeeSchemaAttributeBody | [**NonEmployeeSchemaAttributeBody**](../models/non-employee-schema-attribute-body) | True  | 

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

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id
$NonEmployeeSchemaAttributeBody = @"{
  "helpText" : "The unique identifier for the account",
  "label" : "Account Name",
  "placeholder" : "Enter a unique user name for this account.",
  "type" : "TEXT",
  "technicalName" : "account.name",
  "required" : true
}"@

# Create a new schema attribute for non-employee source

try {
    $Result = ConvertFrom-JsonToNonEmployeeSchemaAttributeBody -Json $NonEmployeeSchemaAttributeBody
    New-V2025NonEmployeeSourceSchemaAttributes -SourceId $SourceId -NonEmployeeSchemaAttributeBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025NonEmployeeSourceSchemaAttributes -SourceId $SourceId -NonEmployeeSchemaAttributeBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025NonEmployeeSourceSchemaAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-record
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-record)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee record id (UUID)

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

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-Employee record id (UUID)

# Delete non-employee record

try {
    Remove-V2025NonEmployeeRecord -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025NonEmployeeRecord -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025NonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-records-in-bulk
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-records-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DeleteNonEmployeeRecordsInBulkRequest | [**DeleteNonEmployeeRecordsInBulkRequest**](../models/delete-non-employee-records-in-bulk-request) | True  | Non-Employee bulk delete request body.

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

### Example
```powershell
$DeleteNonEmployeeRecordsInBulkRequest = @""@

# Delete multiple non-employee records

try {
    $Result = ConvertFrom-JsonToDeleteNonEmployeeRecordsInBulkRequest -Json $DeleteNonEmployeeRecordsInBulkRequest
    Remove-V2025NonEmployeeRecordsInBulk -DeleteNonEmployeeRecordsInBulkRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025NonEmployeeRecordsInBulk -DeleteNonEmployeeRecordsInBulkRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025NonEmployeeRecordsInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-request
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee request id in the UUID format

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

### Example
```powershell
$Id = "ac110005-7156-1150-8171-5b292e3e0084" # String | Non-Employee request id in the UUID format

# Delete non-employee request

try {
    Remove-V2025NonEmployeeRequest -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025NonEmployeeRequest -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025NonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-schema-attribute
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-schema-attribute)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AttributeId | **String** | True  | The Schema Attribute Id (UUID)
Path   | SourceId | **String** | True  | The Source id

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

### Example
```powershell
$AttributeId = "ef38f94347e94562b5bb8424a56397d8" # String | The Schema Attribute Id (UUID)
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# Delete a schema attribute for non-employee source

try {
    Remove-V2025NonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025NonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025NonEmployeeSchemaAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-source
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id

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

### Example
```powershell
$SourceId = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id

# Delete non-employee source

try {
    Remove-V2025NonEmployeeSource -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025NonEmployeeSource -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025NonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-source-schema-attributes
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-source-schema-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

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

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# Delete all custom schema attributes for non-employee source

try {
    Remove-V2025NonEmployeeSourceSchemaAttributes -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025NonEmployeeSourceSchemaAttributes -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025NonEmployeeSourceSchemaAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-non-employee-records
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-non-employee-records)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id (UUID)

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

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id (UUID)

# Exports non-employee records to csv

try {
    Export-V2025NonEmployeeRecords -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Export-V2025NonEmployeeRecords -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-V2025NonEmployeeRecords"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-non-employee-source-schema-template
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-non-employee-source-schema-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id (UUID)

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

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source Id (UUID)

# Exports source schema template

try {
    Export-V2025NonEmployeeSourceSchemaTemplate -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Export-V2025NonEmployeeSourceSchemaTemplate -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-V2025NonEmployeeSourceSchemaTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-approval
Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
  Query | IncludeDetail | **Boolean** |   (optional) | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*

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

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Non-Employee approval item id (UUID)
$IncludeDetail = $true # Boolean | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

# Get a non-employee approval item detail

try {
    Get-V2025NonEmployeeApproval -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeApproval -Id $Id -IncludeDetail $IncludeDetail  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeApproval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-approval-summary
This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id.
  2. The current user is an approver, in which case "me" should be provided
as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-approval-summary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RequestedFor | **String** | True  | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

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

### Example
```powershell
$RequestedFor = "2c91808280430dfb0180431a59440460" # String | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

# Get summary of non-employee approval requests

try {
    Get-V2025NonEmployeeApprovalSummary -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeApprovalSummary -RequestedFor $RequestedFor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeApprovalSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-bulk-upload-status
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-bulk-upload-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID (UUID)

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

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source ID (UUID)

# Obtain the status of bulk upload on the source

try {
    Get-V2025NonEmployeeBulkUploadStatus -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeBulkUploadStatus -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeBulkUploadStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-record
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-record)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee record id (UUID)

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

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-Employee record id (UUID)

# Get a non-employee record

try {
    Get-V2025NonEmployeeRecord -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeRecord -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-request
This gets a non-employee request.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in this case the user
can get the non-employee request for any user.
  2. The user must be the owner of the non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee request id (UUID)

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

### Example
```powershell
$Id = "ac110005-7156-1150-8171-5b292e3e0084" # String | Non-Employee request id (UUID)

# Get a non-employee request

try {
    Get-V2025NonEmployeeRequest -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeRequest -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-request-summary
This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-request-summary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RequestedFor | **String** | True  | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

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

### Example
```powershell
$RequestedFor = "2c91808280430dfb0180431a59440460" # String | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

# Get summary of non-employee requests

try {
    Get-V2025NonEmployeeRequestSummary -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeRequestSummary -RequestedFor $RequestedFor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeRequestSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-schema-attribute
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-schema-attribute)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AttributeId | **String** | True  | The Schema Attribute Id (UUID)
Path   | SourceId | **String** | True  | The Source id

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

### Example
```powershell
$AttributeId = "ef38f94347e94562b5bb8424a56397d8" # String | The Schema Attribute Id (UUID)
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# Get schema attribute non-employee source

try {
    Get-V2025NonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeSchemaAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-source
This gets a non-employee source. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request any source.
  2. The current user is an account manager, in which case the user can only
request sources that they own.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id

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

### Example
```powershell
$SourceId = "2c91808b7c28b350017c2a2ec5790aa1" # String | Source Id

# Get a non-employee source

try {
    Get-V2025NonEmployeeSource -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeSource -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-source-schema-attributes
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-source-schema-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

### Return type
[**NonEmployeeSchemaAttribute[]**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Schema Attributes | NonEmployeeSchemaAttribute[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# List schema attributes non-employee source

try {
    Get-V2025NonEmployeeSourceSchemaAttributes -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeSourceSchemaAttributes -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeSourceSchemaAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-non-employee-records-in-bulk
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/import-non-employee-records-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id (UUID)
   | Data | **System.IO.FileInfo** | True  | 

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

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id (UUID)
$Data =  # System.IO.FileInfo | 

# Imports, or updates, non-employee records

try {
    Import-V2025NonEmployeeRecordsInBulk -Id $Id -Data $Data 
    
    # Below is a request that includes all optional parameters
    # Import-V2025NonEmployeeRecordsInBulk -Id $Id -Data $Data  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-V2025NonEmployeeRecordsInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-approvals
This gets a list of non-employee approval requests.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can list the approvals for any approver.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-approvals)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | RequestedFor | **String** |   (optional) | The identity for whom the request was made. *me* indicates the current user.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type
[**NonEmployeeApprovalItem[]**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of approval items. | NonEmployeeApprovalItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "2c91808280430dfb0180431a59440460" # String | The identity for whom the request was made. *me* indicates the current user. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'approvalStatus eq "Pending"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

# Get list of non-employee approval requests

try {
    Get-V2025NonEmployeeApprovals 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeApprovals -RequestedFor $RequestedFor -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeApprovals"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-records
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-records)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*

### Return type
[**NonEmployeeRecord[]**](../models/non-employee-record)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee record objects | NonEmployeeRecord[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "accountName,sourceId" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional)
$Filters = 'sourceId eq "2c91808568c529c60168cca6f90c1313"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)

# List non-employee records

try {
    Get-V2025NonEmployeeRecords 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeRecords -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeRecords"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-requests
This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list non-employee requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-requests)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | RequestedFor | **String** | True  | The identity for whom the request was made. *me* indicates the current user.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* 

### Return type
[**NonEmployeeRequest[]**](../models/non-employee-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee request objects. | NonEmployeeRequest[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "e136567de87e4d029e60b3c3c55db56d" # String | The identity for whom the request was made. *me* indicates the current user.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "created,approvalStatus" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional)
$Filters = 'sourceId eq "2c91808568c529c60168cca6f90c1313"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  (optional)

# List non-employee requests

try {
    Get-V2025NonEmployeeRequests -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeRequests -RequestedFor $RequestedFor -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeRequests"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-sources
Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter: 
  1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager's `id`.
  2. If the current user is an account manager, the user should provide 'me' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-sources)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | RequestedFor | **String** |   (optional) | Identity the request was made for. Use 'me' to indicate the current user.
  Query | NonEmployeeCount | **Boolean** |   (optional) (default to $false) | Flag that determines whether the API will return a non-employee count associated with the source.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId**

### Return type
[**NonEmployeeSourceWithNECount[]**](../models/non-employee-source-with-ne-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee sources objects. | NonEmployeeSourceWithNECount[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$RequestedFor = "me" # String | Identity the request was made for. Use 'me' to indicate the current user. (optional)
$NonEmployeeCount = $true # Boolean | Flag that determines whether the API will return a non-employee count associated with the source. (optional) (default to $false)
$Sorters = "name,created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional)

# List non-employee sources

try {
    Get-V2025NonEmployeeSources 
    
    # Below is a request that includes all optional parameters
    # Get-V2025NonEmployeeSources -Limit $Limit -Offset $Offset -Count $Count -RequestedFor $RequestedFor -NonEmployeeCount $NonEmployeeCount -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025NonEmployeeSources"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-record
This request will patch a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-non-employee-record)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-employee record id (UUID)
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

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

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-employee record id (UUID)
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
 

# Patch non-employee record

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025NonEmployeeRecord -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025NonEmployeeRecord -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025NonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-schema-attribute
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-non-employee-schema-attribute)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AttributeId | **String** | True  | The Schema Attribute Id (UUID)
Path   | SourceId | **String** | True  | The Source id
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

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

### Example
```powershell
$AttributeId = "ef38f94347e94562b5bb8424a56397d8" # String | The Schema Attribute Id (UUID)
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.
 

# Patch a schema attribute for non-employee source

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025NonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025NonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025NonEmployeeSchemaAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-source
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-non-employee-source)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

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

### Example
```powershell
$SourceId = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch a non-employee source

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2025NonEmployeeSource -SourceId $SourceId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025NonEmployeeSource -SourceId $SourceId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025NonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-non-employee-request
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/reject-non-employee-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
 Body  | NonEmployeeRejectApprovalDecision | [**NonEmployeeRejectApprovalDecision**](../models/non-employee-reject-approval-decision) | True  | 

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

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Non-Employee approval item id (UUID)
$NonEmployeeRejectApprovalDecision = @"{
  "comment" : "approved"
}"@

# Reject a non-employee request

try {
    $Result = ConvertFrom-JsonToNonEmployeeRejectApprovalDecision -Json $NonEmployeeRejectApprovalDecision
    Deny-V2025NonEmployeeRequest -Id $Id -NonEmployeeRejectApprovalDecision $Result 
    
    # Below is a request that includes all optional parameters
    # Deny-V2025NonEmployeeRequest -Id $Id -NonEmployeeRejectApprovalDecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-V2025NonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-non-employee-record
This request will update a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-non-employee-record)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-employee record id (UUID)
 Body  | NonEmployeeRequestBody | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

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

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-employee record id (UUID)
$NonEmployeeRequestBody = @"{
  "sourceId" : "2c91808568c529c60168cca6f90c1313",
  "firstName" : "William",
  "lastName" : "Smith",
  "manager" : "jane.doe",
  "data" : {
    "description" : "Auditing"
  },
  "accountName" : "william.smith",
  "phone" : "5125555555",
  "endDate" : "2021-03-25T00:00:00-05:00",
  "email" : "william.smith@example.com",
  "startDate" : "2020-03-24T00:00:00-05:00"
}"@

# Update non-employee record

try {
    $Result = ConvertFrom-JsonToNonEmployeeRequestBody -Json $NonEmployeeRequestBody
    Update-V2025NonEmployeeRecord -Id $Id -NonEmployeeRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025NonEmployeeRecord -Id $Id -NonEmployeeRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025NonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
