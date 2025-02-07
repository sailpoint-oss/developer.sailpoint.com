---
id: beta-non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeLifecycleManagement', 'BetaNonEmployeeLifecycleManagement'] 
slug: /tools/sdk/powershell/beta/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement', 'BetaNonEmployeeLifecycleManagement']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-BetaNonEmployeeRequest**](#approve-non-employee-request) | **POST** `/non-employee-approvals/{id}/approve` | Approve a Non-Employee Request
[**New-BetaNonEmployeeRecord**](#create-non-employee-record) | **POST** `/non-employee-records` | Create Non-Employee Record
[**New-BetaNonEmployeeRequest**](#create-non-employee-request) | **POST** `/non-employee-requests` | Create Non-Employee Request
[**New-BetaNonEmployeeSource**](#create-non-employee-source) | **POST** `/non-employee-sources` | Create Non-Employee Source
[**New-BetaNonEmployeeSourceSchemaAttributes**](#create-non-employee-source-schema-attributes) | **POST** `/non-employee-sources/{sourceId}/schema-attributes` | Create Non-Employee Source Schema Attribute
[**Remove-BetaNonEmployeeRecord**](#delete-non-employee-record) | **DELETE** `/non-employee-records/{id}` | Delete Non-Employee Record
[**Remove-BetaNonEmployeeRecordInBulk**](#delete-non-employee-record-in-bulk) | **POST** `/non-employee-records/bulk-delete` | Delete Multiple Non-Employee Records
[**Remove-BetaNonEmployeeRequest**](#delete-non-employee-request) | **DELETE** `/non-employee-requests/{id}` | Delete Non-Employee Request
[**Remove-BetaNonEmployeeSchemaAttribute**](#delete-non-employee-schema-attribute) | **DELETE** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Delete Non-Employee Source&#39;s Schema Attribute
[**Remove-BetaNonEmployeeSource**](#delete-non-employee-source) | **DELETE** `/non-employee-sources/{sourceId}` | Delete Non-Employee Source
[**Remove-BetaNonEmployeeSourceSchemaAttributes**](#delete-non-employee-source-schema-attributes) | **DELETE** `/non-employee-sources/{sourceId}/schema-attributes` | Delete all custom schema attributes
[**Export-BetaNonEmployeeRecords**](#export-non-employee-records) | **GET** `/non-employee-sources/{id}/non-employees/download` | Exports Non-Employee Records to CSV
[**Export-BetaNonEmployeeSourceSchemaTemplate**](#export-non-employee-source-schema-template) | **GET** `/non-employee-sources/{id}/schema-attributes-template/download` | Exports Source Schema Template
[**Get-BetaNonEmployeeApproval**](#get-non-employee-approval) | **GET** `/non-employee-approvals/{id}` | Get a non-employee approval item detail
[**Get-BetaNonEmployeeApprovalSummary**](#get-non-employee-approval-summary) | **GET** `/non-employee-approvals/summary/{requested-for}` | Get Summary of Non-Employee Approval Requests
[**Get-BetaNonEmployeeBulkUploadStatus**](#get-non-employee-bulk-upload-status) | **GET** `/non-employee-sources/{id}/non-employee-bulk-upload/status` | Bulk upload status on source
[**Get-BetaNonEmployeeRecord**](#get-non-employee-record) | **GET** `/non-employee-records/{id}` | Get a Non-Employee Record
[**Get-BetaNonEmployeeRequest**](#get-non-employee-request) | **GET** `/non-employee-requests/{id}` | Get a Non-Employee Request
[**Get-BetaNonEmployeeRequestSummary**](#get-non-employee-request-summary) | **GET** `/non-employee-requests/summary/{requested-for}` | Get Summary of Non-Employee Requests
[**Get-BetaNonEmployeeSchemaAttribute**](#get-non-employee-schema-attribute) | **GET** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Get Schema Attribute Non-Employee Source
[**Get-BetaNonEmployeeSource**](#get-non-employee-source) | **GET** `/non-employee-sources/{sourceId}` | Get a Non-Employee Source
[**Get-BetaNonEmployeeSourceSchemaAttributes**](#get-non-employee-source-schema-attributes) | **GET** `/non-employee-sources/{sourceId}/schema-attributes` | List Schema Attributes Non-Employee Source
[**Import-BetaNonEmployeeRecordsInBulk**](#import-non-employee-records-in-bulk) | **POST** `/non-employee-sources/{id}/non-employee-bulk-upload` | Imports, or Updates, Non-Employee Records
[**Get-BetaNonEmployeeApproval**](#list-non-employee-approval) | **GET** `/non-employee-approvals` | Get List of Non-Employee Approval Requests
[**Get-BetaNonEmployeeRecords**](#list-non-employee-records) | **GET** `/non-employee-records` | List Non-Employee Records
[**Get-BetaNonEmployeeRequests**](#list-non-employee-requests) | **GET** `/non-employee-requests` | List Non-Employee Requests
[**Get-BetaNonEmployeeSources**](#list-non-employee-sources) | **GET** `/non-employee-sources` | List Non-Employee Sources
[**Update-BetaNonEmployeeRecord**](#patch-non-employee-record) | **PATCH** `/non-employee-records/{id}` | Patch Non-Employee Record
[**Update-BetaNonEmployeeSchemaAttribute**](#patch-non-employee-schema-attribute) | **PATCH** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Patch Non-Employee Source&#39;s Schema Attribute
[**Update-BetaNonEmployeeSource**](#patch-non-employee-source) | **PATCH** `/non-employee-sources/{sourceId}` | Patch a Non-Employee Source
[**Deny-BetaNonEmployeeRequest**](#reject-non-employee-request) | **POST** `/non-employee-approvals/{id}/reject` | Reject a Non-Employee Request
[**Update-BetaNonEmployeeRecord**](#update-non-employee-record) | **PUT** `/non-employee-records/{id}` | Update Non-Employee Record


## approve-non-employee-request
Approves a non-employee approval request and notifies the next approver.

[API Spec](https://developer.sailpoint.com/docs/api/beta/approve-non-employee-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "MyId" # String | Non-Employee approval item id (UUID)
$NonEmployeeApprovalDecision = @"{
  "comment" : "comment"
}"@

# Approve a Non-Employee Request

try {
    $Result = ConvertFrom-JsonToNonEmployeeApprovalDecision -Json $NonEmployeeApprovalDecision
    Approve-BetaNonEmployeeRequest -Id $Id -BetaNonEmployeeApprovalDecision $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-BetaNonEmployeeRequest -Id $Id -BetaNonEmployeeApprovalDecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-BetaNonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-record
This request will create a non-employee record.
Request will require the following security scope:
'idn:nesr:create'

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-non-employee-record)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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

# Create Non-Employee Record

try {
    $Result = ConvertFrom-JsonToNonEmployeeRequestBody -Json $NonEmployeeRequestBody
    New-BetaNonEmployeeRecord -BetaNonEmployeeRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaNonEmployeeRecord -BetaNonEmployeeRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaNonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-request
This request will create a non-employee request and notify the approver

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-non-employee-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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

# Create Non-Employee Request

try {
    $Result = ConvertFrom-JsonToNonEmployeeRequestBody -Json $NonEmployeeRequestBody
    New-BetaNonEmployeeRequest -BetaNonEmployeeRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaNonEmployeeRequest -BetaNonEmployeeRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaNonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-source
This request will create a non-employee source.
Request will require the following security scope:
'idn:nesr:create'

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-non-employee-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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

# Create Non-Employee Source

try {
    $Result = ConvertFrom-JsonToNonEmployeeSourceRequestBody -Json $NonEmployeeSourceRequestBody
    New-BetaNonEmployeeSource -BetaNonEmployeeSourceRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaNonEmployeeSource -BetaNonEmployeeSourceRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaNonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-source-schema-attributes
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-non-employee-source-schema-attributes)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c91808b6ef1d43e016efba0ce470904" # String | The Source id
$NonEmployeeSchemaAttributeBody = @"{
  "helpText" : "The unique identifier for the account",
  "label" : "Account Name",
  "placeholder" : "Enter a unique user name for this account.",
  "type" : "TEXT",
  "technicalName" : "account.name",
  "required" : true
}"@

# Create Non-Employee Source Schema Attribute

try {
    $Result = ConvertFrom-JsonToNonEmployeeSchemaAttributeBody -Json $NonEmployeeSchemaAttributeBody
    New-BetaNonEmployeeSourceSchemaAttributes -SourceId $SourceId -BetaNonEmployeeSchemaAttributeBody $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaNonEmployeeSourceSchemaAttributes -SourceId $SourceId -BetaNonEmployeeSchemaAttributeBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaNonEmployeeSourceSchemaAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-record
This request will delete a non-employee record.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-non-employee-record)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808b6ef1d43e016efba0ce470904" # String | Non-Employee record id (UUID)

# Delete Non-Employee Record

try {
    Remove-BetaNonEmployeeRecord -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNonEmployeeRecord -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-record-in-bulk
This request will delete multiple non-employee records based on the non-employee ids provided.
Request will require the following scope:
'idn:nesr:delete'

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-non-employee-record-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DeleteNonEmployeeRecordInBulkRequest | [**DeleteNonEmployeeRecordInBulkRequest**](../models/delete-non-employee-record-in-bulk-request) | True  | Non-Employee bulk delete request body.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DeleteNonEmployeeRecordInBulkRequest = @""@

# Delete Multiple Non-Employee Records

try {
    $Result = ConvertFrom-JsonToDeleteNonEmployeeRecordInBulkRequest -Json $DeleteNonEmployeeRecordInBulkRequest
    Remove-BetaNonEmployeeRecordInBulk -BetaDeleteNonEmployeeRecordInBulkRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNonEmployeeRecordInBulk -BetaDeleteNonEmployeeRecordInBulkRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNonEmployeeRecordInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-request
This request will delete a non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-non-employee-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808b6ef1d43e016efba0ce470904" # String | Non-Employee request id in the UUID format

# Delete Non-Employee Request

try {
    Remove-BetaNonEmployeeRequest -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNonEmployeeRequest -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-schema-attribute
This end-point deletes a specific schema attribute for a non-employee source.


[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-non-employee-schema-attribute)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AttributeId = "2c91808b6ef1d43e016efba0ce470904" # String | The Schema Attribute Id (UUID)
$SourceId = "2c91808b6ef1d43e016efba0ce470904" # String | The Source id

# Delete Non-Employee Source's Schema Attribute

try {
    Remove-BetaNonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNonEmployeeSchemaAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-source
This request will delete a non-employee source.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-non-employee-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c91808b6ef1d43e016efba0ce470904" # String | Source Id

# Delete Non-Employee Source

try {
    Remove-BetaNonEmployeeSource -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNonEmployeeSource -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-source-schema-attributes
This end-point deletes all custom schema attributes for a non-employee source.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-non-employee-source-schema-attributes)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c91808b6ef1d43e016efba0ce470904" # String | The Source id

# Delete all custom schema attributes

try {
    Remove-BetaNonEmployeeSourceSchemaAttributes -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNonEmployeeSourceSchemaAttributes -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNonEmployeeSourceSchemaAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-non-employee-records
This requests a CSV download for all non-employees from a provided source.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-non-employee-records)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$Id = "2c918085842e69ae018432d22ccb212f" # String | Source Id (UUID)

# Exports Non-Employee Records to CSV

try {
    Export-BetaNonEmployeeRecords -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Export-BetaNonEmployeeRecords -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaNonEmployeeRecords"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-non-employee-source-schema-template
This requests a download for the Source Schema Template for a provided source.
Request will require the following security scope:
idn:nesr:read'

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-non-employee-source-schema-template)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$Id = "2c918085842e69ae018432d22ccb212f" # String | Source Id (UUID)

# Exports Source Schema Template

try {
    Export-BetaNonEmployeeSourceSchemaTemplate -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Export-BetaNonEmployeeSourceSchemaTemplate -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaNonEmployeeSourceSchemaTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-approval
Approves a non-employee approval request and notifies the next approver.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-approval)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
  Query | IncludeDetail | **String** |   (optional) | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*

### Return type
[**NonEmployeeApprovalItemDetail**](../models/non-employee-approval-item-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | NonEmployeeApprovalItemDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ac10d20a-841e-1e7d-8184-32d2e22c0179" # String | Non-Employee approval item id (UUID)
$IncludeDetail = "include-detail=false" # String | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

# Get a non-employee approval item detail

try {
    Get-BetaNonEmployeeApproval -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeApproval -Id $Id -IncludeDetail $IncludeDetail  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeApproval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-approval-summary
This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter: 1. The current user is the Org Admin, in which case he or she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id. 2. The current user is an approver, in which case "me" should be provided as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-approval-summary)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "ac10d20a-841e-1e7d-8184-32d2e22c0179" # String | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

# Get Summary of Non-Employee Approval Requests

try {
    Get-BetaNonEmployeeApprovalSummary -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeApprovalSummary -RequestedFor $RequestedFor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeApprovalSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-bulk-upload-status
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-bulk-upload-status)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c918085842e69ae018432d22ccb212f" # String | Source ID (UUID)

# Bulk upload status on source

try {
    Get-BetaNonEmployeeBulkUploadStatus -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeBulkUploadStatus -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeBulkUploadStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-record
This gets a non-employee record.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-record)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808b6ef1d43e016efba0ce470904" # String | Non-Employee record id (UUID)

# Get a Non-Employee Record

try {
    Get-BetaNonEmployeeRecord -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeRecord -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-request
This gets a non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808b6ef1d43e016efba0ce470904" # String | Non-Employee request id (UUID)

# Get a Non-Employee Request

try {
    Get-BetaNonEmployeeRequest -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeRequest -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-request-summary
This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter: 1. The current user is the Org Admin, in which case he or she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id. 2. The current user is an account manager, in which case "me" should be provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-request-summary)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "ac10d20a-841e-1e7d-8184-32d2e22c0179" # String | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

# Get Summary of Non-Employee Requests

try {
    Get-BetaNonEmployeeRequestSummary -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeRequestSummary -RequestedFor $RequestedFor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeRequestSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-schema-attribute
This API gets a schema attribute by Id for the specified Non-Employee SourceId.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-schema-attribute)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AttributeId = "2c918085842e69ae018432d22ccb212f" # String | The Schema Attribute Id (UUID)
$SourceId = "2c918085842e69ae018432d22ccb212f" # String | The Source id

# Get Schema Attribute Non-Employee Source

try {
    Get-BetaNonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeSchemaAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-source
This gets a non-employee source.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c91808b7c28b350017c2a2ec5790aa1" # String | Source Id

# Get a Non-Employee Source

try {
    Get-BetaNonEmployeeSource -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeSource -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-source-schema-attributes
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-non-employee-source-schema-attributes)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c918085842e69ae018432d22ccb212f" # String | The Source id

# List Schema Attributes Non-Employee Source

try {
    Get-BetaNonEmployeeSourceSchemaAttributes -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeSourceSchemaAttributes -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeSourceSchemaAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-non-employee-records-in-bulk
This post will import, or update, Non-Employee records found in the CSV.
Request will need the following security scope:
'idn:nesr:create'

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-non-employee-records-in-bulk)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id (UUID)
$Data =  # System.IO.FileInfo | 

# Imports, or Updates, Non-Employee Records

try {
    Import-BetaNonEmployeeRecordsInBulk -Id $Id -Data $Data 
    
    # Below is a request that includes all optional parameters
    # Import-BetaNonEmployeeRecordsInBulk -Id $Id -Data $Data  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaNonEmployeeRecordsInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-approval
This gets a list of non-employee approval requests.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-non-employee-approval)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "ac10d20a-841e-1e7d-8184-32d2e22c0179" # String | The identity for whom the request was made. *me* indicates the current user. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'approvalStatus eq "PENDING"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

# Get List of Non-Employee Approval Requests

try {
    Get-BetaNonEmployeeApproval 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeApproval -RequestedFor $RequestedFor -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeApproval"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-records
This gets a list of non-employee records.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-non-employee-records)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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

# List Non-Employee Records

try {
    Get-BetaNonEmployeeRecords 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeRecords -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeRecords"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-requests
This gets a list of non-employee requests.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-non-employee-requests)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "me" # String | The identity for whom the request was made. *me* indicates the current user.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "approvalStatus,firstName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional)
$Filters = 'sourceId eq "2c91808568c529c60168cca6f90c1313"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)

# List Non-Employee Requests

try {
    Get-BetaNonEmployeeRequests -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeRequests -RequestedFor $RequestedFor -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeRequests"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-sources
This gets a list of non-employee sources.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-non-employee-sources)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | RequestedFor | **String** | True  | The identity for whom the request was made. *me* indicates the current user.
  Query | NonEmployeeCount | **Boolean** | True  | The flag to determine whether return a non-employee count associate with source.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId**

### Return type
[**NonEmployeeSourceWithNECount[]**](../models/non-employee-source-with-ne-count)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee sources objects. | NonEmployeeSourceWithNECount[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "me" # String | The identity for whom the request was made. *me* indicates the current user.
$NonEmployeeCount = $false # Boolean | The flag to determine whether return a non-employee count associate with source.
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "name,created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional)

# List Non-Employee Sources

try {
    Get-BetaNonEmployeeSources -RequestedFor $RequestedFor -NonEmployeeCount $NonEmployeeCount 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNonEmployeeSources -RequestedFor $RequestedFor -NonEmployeeCount $NonEmployeeCount -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNonEmployeeSources"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-record
This request will patch a non-employee record.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-non-employee-record)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808b6ef1d43e016efba0ce470904" # String | Non-employee record id (UUID)
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
 

# Patch Non-Employee Record

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaNonEmployeeRecord -Id $Id -BetaJsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaNonEmployeeRecord -Id $Id -BetaJsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaNonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-schema-attribute
This end-point patches a specific schema attribute for a non-employee SourceId.


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-non-employee-schema-attribute)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$AttributeId = "2c91808b6ef1d43e016efba0ce470904" # String | The Schema Attribute Id (UUID)
$SourceId = "2c91808b6ef1d43e016efba0ce470904" # String | The Source id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.
 

# Patch Non-Employee Source's Schema Attribute

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaNonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId -BetaJsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaNonEmployeeSchemaAttribute -AttributeId $AttributeId -SourceId $SourceId -BetaJsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaNonEmployeeSchemaAttribute"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-source
patch a non-employee source. (Partial Update)  Patchable field: **name, description, approvers, accountManagers**

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-non-employee-source)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c91808b6ef1d43e016efba0ce470904" # String | Source Id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch a Non-Employee Source

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BetaNonEmployeeSource -SourceId $SourceId -BetaJsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaNonEmployeeSource -SourceId $SourceId -BetaJsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaNonEmployeeSource"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-non-employee-request
This endpoint will reject an approval item request and notify user.

[API Spec](https://developer.sailpoint.com/docs/api/beta/reject-non-employee-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "MyId" # String | Non-Employee approval item id (UUID)
$NonEmployeeRejectApprovalDecision = @"{
  "comment" : "comment"
}"@

# Reject a Non-Employee Request

try {
    $Result = ConvertFrom-JsonToNonEmployeeRejectApprovalDecision -Json $NonEmployeeRejectApprovalDecision
    Deny-BetaNonEmployeeRequest -Id $Id -BetaNonEmployeeRejectApprovalDecision $Result 
    
    # Below is a request that includes all optional parameters
    # Deny-BetaNonEmployeeRequest -Id $Id -BetaNonEmployeeRejectApprovalDecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-BetaNonEmployeeRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-non-employee-record
This request will update a non-employee record.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-non-employee-record)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808b6ef1d43e016efba0ce470904" # String | Non-employee record id (UUID)
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

# Update Non-Employee Record

try {
    $Result = ConvertFrom-JsonToNonEmployeeRequestBody -Json $NonEmployeeRequestBody
    Update-BetaNonEmployeeRecord -Id $Id -BetaNonEmployeeRequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaNonEmployeeRecord -Id $Id -BetaNonEmployeeRequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaNonEmployeeRecord"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
