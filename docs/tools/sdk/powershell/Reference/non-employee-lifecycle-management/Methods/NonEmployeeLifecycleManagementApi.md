---
id: non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeLifecycleManagement', 'NonEmployeeLifecycleManagement'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement', 'NonEmployeeLifecycleManagement']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-NonEmployeeRequestV1**](#approve-non-employee-request-v1) | **POST** `/non-employee-approvals/v1/{id}/approve` | Approve a non-employee request
[**New-NonEmployeeRecordV1**](#create-non-employee-record-v1) | **POST** `/non-employee-records/v1` | Create non-employee record
[**New-NonEmployeeRequestV1**](#create-non-employee-request-v1) | **POST** `/non-employee-requests/v1` | Create non-employee request
[**New-NonEmployeeSourceSchemaAttributesV1**](#create-non-employee-source-schema-attributes-v1) | **POST** `/non-employee-sources/v1/{sourceId}/schema-attributes` | Create a new schema attribute for non-employee source
[**New-NonEmployeeSourceV1**](#create-non-employee-source-v1) | **POST** `/non-employee-sources/v1` | Create non-employee source
[**Remove-NonEmployeeRecordV1**](#delete-non-employee-record-v1) | **DELETE** `/non-employee-records/v1/{id}` | Delete non-employee record
[**Remove-NonEmployeeRecordsInBulkV1**](#delete-non-employee-records-in-bulk-v1) | **POST** `/non-employee-records/v1/bulk-delete` | Delete multiple non-employee records
[**Remove-NonEmployeeRequestV1**](#delete-non-employee-request-v1) | **DELETE** `/non-employee-requests/v1/{id}` | Delete non-employee request
[**Remove-NonEmployeeSchemaAttributeV1**](#delete-non-employee-schema-attribute-v1) | **DELETE** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Delete a schema attribute for non-employee source
[**Remove-NonEmployeeSourceSchemaAttributesV1**](#delete-non-employee-source-schema-attributes-v1) | **DELETE** `/non-employee-sources/v1/{sourceId}/schema-attributes` | Delete all custom schema attributes for non-employee source
[**Remove-NonEmployeeSourceV1**](#delete-non-employee-source-v1) | **DELETE** `/non-employee-sources/v1/{sourceId}` | Delete non-employee source
[**Export-NonEmployeeRecordsV1**](#export-non-employee-records-v1) | **GET** `/non-employee-sources/v1/{id}/non-employees/download` | Exports non-employee records to csv
[**Export-NonEmployeeSourceSchemaTemplateV1**](#export-non-employee-source-schema-template-v1) | **GET** `/non-employee-sources/v1/{id}/schema-attributes-template/download` | Exports source schema template
[**Get-NonEmployeeApprovalSummaryV1**](#get-non-employee-approval-summary-v1) | **GET** `/non-employee-approvals/v1/summary/{requested-for}` | Get summary of non-employee approval requests
[**Get-NonEmployeeApprovalV1**](#get-non-employee-approval-v1) | **GET** `/non-employee-approvals/v1/{id}` | Get a non-employee approval item detail
[**Get-NonEmployeeBulkUploadStatusV1**](#get-non-employee-bulk-upload-status-v1) | **GET** `/non-employee-sources/v1/{id}/non-employee-bulk-upload/status` | Obtain the status of bulk upload on the source
[**Get-NonEmployeeRecordV1**](#get-non-employee-record-v1) | **GET** `/non-employee-records/v1/{id}` | Get a non-employee record
[**Get-NonEmployeeRequestSummaryV1**](#get-non-employee-request-summary-v1) | **GET** `/non-employee-requests/v1/summary/{requested-for}` | Get summary of non-employee requests
[**Get-NonEmployeeRequestV1**](#get-non-employee-request-v1) | **GET** `/non-employee-requests/v1/{id}` | Get a non-employee request
[**Get-NonEmployeeSchemaAttributeV1**](#get-non-employee-schema-attribute-v1) | **GET** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Get schema attribute non-employee source
[**Get-NonEmployeeSourceSchemaAttributesV1**](#get-non-employee-source-schema-attributes-v1) | **GET** `/non-employee-sources/v1/{sourceId}/schema-attributes` | List schema attributes non-employee source
[**Get-NonEmployeeSourceV1**](#get-non-employee-source-v1) | **GET** `/non-employee-sources/v1/{sourceId}` | Get a non-employee source
[**Import-NonEmployeeRecordsInBulkV1**](#import-non-employee-records-in-bulk-v1) | **POST** `/non-employee-sources/v1/{id}/non-employee-bulk-upload` | Imports, or updates, non-employee records
[**Get-NonEmployeeApprovalsV1**](#list-non-employee-approvals-v1) | **GET** `/non-employee-approvals/v1` | Get list of non-employee approval requests
[**Get-NonEmployeeRecordsV1**](#list-non-employee-records-v1) | **GET** `/non-employee-records/v1` | List non-employee records
[**Get-NonEmployeeRequestsV1**](#list-non-employee-requests-v1) | **GET** `/non-employee-requests/v1` | List non-employee requests
[**Get-NonEmployeeSourcesV1**](#list-non-employee-sources-v1) | **GET** `/non-employee-sources/v1` | List non-employee sources
[**Update-NonEmployeeRecordV1**](#patch-non-employee-record-v1) | **PATCH** `/non-employee-records/v1/{id}` | Patch non-employee record
[**Update-NonEmployeeSchemaAttributeV1**](#patch-non-employee-schema-attribute-v1) | **PATCH** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Patch a schema attribute for non-employee source
[**Update-NonEmployeeSourceV1**](#patch-non-employee-source-v1) | **PATCH** `/non-employee-sources/v1/{sourceId}` | Patch a non-employee source
[**Deny-NonEmployeeRequestV1**](#reject-non-employee-request-v1) | **POST** `/non-employee-approvals/v1/{id}/reject` | Reject a non-employee request
[**Update-NonEmployeeRecordV1**](#update-non-employee-record-v1) | **PUT** `/non-employee-records/v1/{id}` | Update non-employee record


## approve-non-employee-request-v1
Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-non-employee-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
 Body  | Nonemployeeapprovaldecision | [**Nonemployeeapprovaldecision**](../models/nonemployeeapprovaldecision) | True  | 

### Return type
[**Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | Nonemployeeapprovalitem
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Non-Employee approval item id (UUID)
$Nonemployeeapprovaldecision = @""@

# Approve a non-employee request

try {
    $Result = ConvertFrom-JsonToNonemployeeapprovaldecision -Json $Nonemployeeapprovaldecision
    Approve-NonEmployeeRequestV1 -Id $Id -Nonemployeeapprovaldecision $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-NonEmployeeRequestV1 -Id $Id -Nonemployeeapprovaldecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-NonEmployeeRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-record-v1
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-record-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Nonemployeerequestbody | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | True  | Non-Employee record creation request body.

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created non-employee record. | Nonemployeerecord
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Nonemployeerequestbody = @""@

# Create non-employee record

try {
    $Result = ConvertFrom-JsonToNonemployeerequestbody -Json $Nonemployeerequestbody
    New-NonEmployeeRecordV1 -Nonemployeerequestbody $Result 
    
    # Below is a request that includes all optional parameters
    # New-NonEmployeeRecordV1 -Nonemployeerequestbody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-NonEmployeeRecordV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-request-v1
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Nonemployeerequestbody | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | True  | Non-Employee creation request body

### Return type
[**Nonemployeerequest**](../models/nonemployeerequest)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee request creation object | Nonemployeerequest
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Nonemployeerequestbody = @""@

# Create non-employee request

try {
    $Result = ConvertFrom-JsonToNonemployeerequestbody -Json $Nonemployeerequestbody
    New-NonEmployeeRequestV1 -Nonemployeerequestbody $Result 
    
    # Below is a request that includes all optional parameters
    # New-NonEmployeeRequestV1 -Nonemployeerequestbody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-NonEmployeeRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-source-schema-attributes-v1
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-schema-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id
 Body  | Nonemployeeschemaattributebody | [**Nonemployeeschemaattributebody**](../models/nonemployeeschemaattributebody) | True  | 

### Return type
[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Schema Attribute created. | Nonemployeeschemaattribute
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id
$Nonemployeeschemaattributebody = @""@

# Create a new schema attribute for non-employee source

try {
    $Result = ConvertFrom-JsonToNonemployeeschemaattributebody -Json $Nonemployeeschemaattributebody
    New-NonEmployeeSourceSchemaAttributesV1 -SourceId $SourceId -Nonemployeeschemaattributebody $Result 
    
    # Below is a request that includes all optional parameters
    # New-NonEmployeeSourceSchemaAttributesV1 -SourceId $SourceId -Nonemployeeschemaattributebody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-NonEmployeeSourceSchemaAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-non-employee-source-v1
Create a non-employee source. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Nonemployeesourcerequestbody | [**Nonemployeesourcerequestbody**](../models/nonemployeesourcerequestbody) | True  | Non-Employee source creation request body.

### Return type
[**Nonemployeesourcewithcloudexternalid**](../models/nonemployeesourcewithcloudexternalid)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created non-employee source. | Nonemployeesourcewithcloudexternalid
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Nonemployeesourcerequestbody = @""@

# Create non-employee source

try {
    $Result = ConvertFrom-JsonToNonemployeesourcerequestbody -Json $Nonemployeesourcerequestbody
    New-NonEmployeeSourceV1 -Nonemployeesourcerequestbody $Result 
    
    # Below is a request that includes all optional parameters
    # New-NonEmployeeSourceV1 -Nonemployeesourcerequestbody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-NonEmployeeSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-record-v1
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-record-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-Employee record id (UUID)

# Delete non-employee record

try {
    Remove-NonEmployeeRecordV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-NonEmployeeRecordV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NonEmployeeRecordV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-records-in-bulk-v1
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-records-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DeleteNonEmployeeRecordsInBulkV1Request | [**DeleteNonEmployeeRecordsInBulkV1Request**](../models/delete-non-employee-records-in-bulk-v1-request) | True  | Non-Employee bulk delete request body.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DeleteNonEmployeeRecordsInBulkV1Request = @""@

# Delete multiple non-employee records

try {
    $Result = ConvertFrom-JsonToDeleteNonEmployeeRecordsInBulkV1Request -Json $DeleteNonEmployeeRecordsInBulkV1Request
    Remove-NonEmployeeRecordsInBulkV1 -DeleteNonEmployeeRecordsInBulkV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-NonEmployeeRecordsInBulkV1 -DeleteNonEmployeeRecordsInBulkV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NonEmployeeRecordsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-request-v1
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-request-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ac110005-7156-1150-8171-5b292e3e0084" # String | Non-Employee request id in the UUID format

# Delete non-employee request

try {
    Remove-NonEmployeeRequestV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-NonEmployeeRequestV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NonEmployeeRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-schema-attribute-v1
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-schema-attribute-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AttributeId = "ef38f94347e94562b5bb8424a56397d8" # String | The Schema Attribute Id (UUID)
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# Delete a schema attribute for non-employee source

try {
    Remove-NonEmployeeSchemaAttributeV1 -AttributeId $AttributeId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-NonEmployeeSchemaAttributeV1 -AttributeId $AttributeId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NonEmployeeSchemaAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-source-schema-attributes-v1
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-schema-attributes-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# Delete all custom schema attributes for non-employee source

try {
    Remove-NonEmployeeSourceSchemaAttributesV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-NonEmployeeSourceSchemaAttributesV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NonEmployeeSourceSchemaAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-non-employee-source-v1
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id

# Delete non-employee source

try {
    Remove-NonEmployeeSourceV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Remove-NonEmployeeSourceV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NonEmployeeSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-non-employee-records-v1
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-records-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id (UUID)

# Exports non-employee records to csv

try {
    Export-NonEmployeeRecordsV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Export-NonEmployeeRecordsV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-NonEmployeeRecordsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## export-non-employee-source-schema-template-v1
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-source-schema-template-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Source Id (UUID)

# Exports source schema template

try {
    Export-NonEmployeeSourceSchemaTemplateV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Export-NonEmployeeSourceSchemaTemplateV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-NonEmployeeSourceSchemaTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-approval-summary-v1
This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id.
  2. The current user is an approver, in which case "me" should be provided
as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-approval-summary-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RequestedFor | **String** | True  | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

### Return type
[**Nonemployeeapprovalsummary**](../models/nonemployeeapprovalsummary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | summary of non-employee approval requests | Nonemployeeapprovalsummary
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "2c91808280430dfb0180431a59440460" # String | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

# Get summary of non-employee approval requests

try {
    Get-NonEmployeeApprovalSummaryV1 -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeApprovalSummaryV1 -RequestedFor $RequestedFor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeApprovalSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-approval-v1
Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-approval-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
  Query | IncludeDetail | **Boolean** |   (optional) | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*

### Return type
[**Nonemployeeapprovalitemdetail**](../models/nonemployeeapprovalitemdetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | Nonemployeeapprovalitemdetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Non-Employee approval item id (UUID)
$IncludeDetail = $true # Boolean | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

# Get a non-employee approval item detail

try {
    Get-NonEmployeeApprovalV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeApprovalV1 -Id $Id -IncludeDetail $IncludeDetail  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-bulk-upload-status-v1
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-bulk-upload-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source ID (UUID)

### Return type
[**Nonemployeebulkuploadstatus**](../models/nonemployeebulkuploadstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the newest bulk-upload job, if any. | Nonemployeebulkuploadstatus
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source ID (UUID)

# Obtain the status of bulk upload on the source

try {
    Get-NonEmployeeBulkUploadStatusV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeBulkUploadStatusV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeBulkUploadStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-record-v1
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-record-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee record id (UUID)

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee record object | Nonemployeerecord
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-Employee record id (UUID)

# Get a non-employee record

try {
    Get-NonEmployeeRecordV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeRecordV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeRecordV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-request-summary-v1
This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-request-summary-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RequestedFor | **String** | True  | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

### Return type
[**Nonemployeerequestsummary**](../models/nonemployeerequestsummary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee request summary object. | Nonemployeerequestsummary
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestedFor = "2c91808280430dfb0180431a59440460" # String | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use ""me"" instead to indicate the current user.

# Get summary of non-employee requests

try {
    Get-NonEmployeeRequestSummaryV1 -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeRequestSummaryV1 -RequestedFor $RequestedFor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeRequestSummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-request-v1
This gets a non-employee request.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in this case the user
can get the non-employee request for any user.
  2. The user must be the owner of the non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee request id (UUID)

### Return type
[**Nonemployeerequest**](../models/nonemployeerequest)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee request object. | Nonemployeerequest
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ac110005-7156-1150-8171-5b292e3e0084" # String | Non-Employee request id (UUID)

# Get a non-employee request

try {
    Get-NonEmployeeRequestV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeRequestV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-schema-attribute-v1
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-schema-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AttributeId | **String** | True  | The Schema Attribute Id (UUID)
Path   | SourceId | **String** | True  | The Source id

### Return type
[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Schema Attribute | Nonemployeeschemaattribute
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AttributeId = "ef38f94347e94562b5bb8424a56397d8" # String | The Schema Attribute Id (UUID)
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# Get schema attribute non-employee source

try {
    Get-NonEmployeeSchemaAttributeV1 -AttributeId $AttributeId -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeSchemaAttributeV1 -AttributeId $AttributeId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeSchemaAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-source-schema-attributes-v1
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-source-schema-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source id

### Return type
[**Nonemployeeschemaattribute[]**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Schema Attributes | Nonemployeeschemaattribute[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id

# List schema attributes non-employee source

try {
    Get-NonEmployeeSourceSchemaAttributesV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeSourceSchemaAttributesV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeSourceSchemaAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-non-employee-source-v1
This gets a non-employee source. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request any source.
  2. The current user is an account manager, in which case the user can only
request sources that they own.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-source-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id

### Return type
[**Nonemployeesource**](../models/nonemployeesource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee source object. | Nonemployeesource
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c91808b7c28b350017c2a2ec5790aa1" # String | Source Id

# Get a non-employee source

try {
    Get-NonEmployeeSourceV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeSourceV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-non-employee-records-in-bulk-v1
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-non-employee-records-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id (UUID)
   | Data | **System.IO.FileInfo** | True  | 

### Return type
[**Nonemployeebulkuploadjob**](../models/nonemployeebulkuploadjob)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The CSV was accepted to be bulk inserted now or at a later time. | Nonemployeebulkuploadjob
400 | Client Error - Returned if the request body is invalid. The response body will contain the list of specific errors with one on each line.  | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id (UUID)
$Data =  # System.IO.FileInfo | 

# Imports, or updates, non-employee records

try {
    Import-NonEmployeeRecordsInBulkV1 -Id $Id -Data $Data 
    
    # Below is a request that includes all optional parameters
    # Import-NonEmployeeRecordsInBulkV1 -Id $Id -Data $Data  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-NonEmployeeRecordsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-approvals-v1
This gets a list of non-employee approval requests.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can list the approvals for any approver.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-approvals-v1)

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
[**Nonemployeeapprovalitem[]**](../models/nonemployeeapprovalitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of approval items. | Nonemployeeapprovalitem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-NonEmployeeApprovalsV1 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeApprovalsV1 -RequestedFor $RequestedFor -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeApprovalsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-records-v1
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-records-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*

### Return type
[**Nonemployeerecord[]**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee record objects | Nonemployeerecord[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-NonEmployeeRecordsV1 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeRecordsV1 -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeRecordsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-requests-v1
This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list non-employee requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-requests-v1)

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
[**Nonemployeerequest[]**](../models/nonemployeerequest)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee request objects. | Nonemployeerequest[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-NonEmployeeRequestsV1 -RequestedFor $RequestedFor 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeRequestsV1 -RequestedFor $RequestedFor -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeRequestsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-non-employee-sources-v1
Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter: 
  1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager's `id`.
  2. If the current user is an account manager, the user should provide 'me' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-sources-v1)

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
[**Nonemployeesourcewithnecount[]**](../models/nonemployeesourcewithnecount)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of non-employee sources objects. | Nonemployeesourcewithnecount[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-NonEmployeeSourcesV1 
    
    # Below is a request that includes all optional parameters
    # Get-NonEmployeeSourcesV1 -Limit $Limit -Offset $Offset -Count $Count -RequestedFor $RequestedFor -NonEmployeeCount $NonEmployeeCount -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NonEmployeeSourcesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-record-v1
This request will patch a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-record-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-employee record id (UUID)
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A patched non-employee record. | Nonemployeerecord
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-employee record id (UUID)
 $Jsonpatchoperation = @"[{"op":"replace","path":"/endDate","value":"2019-08-23T18:40:35.772Z"}]"@ # Jsonpatchoperation[] | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
 

# Patch non-employee record

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-NonEmployeeRecordV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-NonEmployeeRecordV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-NonEmployeeRecordV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-schema-attribute-v1
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-schema-attribute-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AttributeId | **String** | True  | The Schema Attribute Id (UUID)
Path   | SourceId | **String** | True  | The Source id
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

### Return type
[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The Schema Attribute was successfully patched. | Nonemployeeschemaattribute
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$AttributeId = "ef38f94347e94562b5bb8424a56397d8" # String | The Schema Attribute Id (UUID)
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | The Source id
 $Jsonpatchoperation = @"[{"op":"replace","path":"/label","value":{"new attribute label":null}}]"@ # Jsonpatchoperation[] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.
 

# Patch a schema attribute for non-employee source

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-NonEmployeeSchemaAttributeV1 -AttributeId $AttributeId -SourceId $SourceId -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-NonEmployeeSchemaAttributeV1 -AttributeId $AttributeId -SourceId $SourceId -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-NonEmployeeSchemaAttributeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-non-employee-source-v1
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-source-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source Id
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Nonemployeesource**](../models/nonemployeesource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A patched non-employee source object. | Nonemployeesource
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SourceId = "e136567de87e4d029e60b3c3c55db56d" # String | Source Id
 $Jsonpatchoperation = @"[{"op":"replace","path":"/name","value":{"new name":null}},{"op":"replace","path":"/approvers","value":["2c91809f703bb37a017040a2fe8748c7","48b1f463c9e8427db5a5071bd81914b8"]}]"@ # Jsonpatchoperation[] | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch a non-employee source

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-NonEmployeeSourceV1 -SourceId $SourceId -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-NonEmployeeSourceV1 -SourceId $SourceId -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-NonEmployeeSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-non-employee-request-v1
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-non-employee-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-Employee approval item id (UUID)
 Body  | Nonemployeerejectapprovaldecision | [**Nonemployeerejectapprovaldecision**](../models/nonemployeerejectapprovaldecision) | True  | 

### Return type
[**Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Non-Employee approval item object. | Nonemployeeapprovalitem
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "e136567de87e4d029e60b3c3c55db56d" # String | Non-Employee approval item id (UUID)
$Nonemployeerejectapprovaldecision = @""@

# Reject a non-employee request

try {
    $Result = ConvertFrom-JsonToNonemployeerejectapprovaldecision -Json $Nonemployeerejectapprovaldecision
    Deny-NonEmployeeRequestV1 -Id $Id -Nonemployeerejectapprovaldecision $Result 
    
    # Below is a request that includes all optional parameters
    # Deny-NonEmployeeRequestV1 -Id $Id -Nonemployeerejectapprovaldecision $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-NonEmployeeRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-non-employee-record-v1
This request will update a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-non-employee-record-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-employee record id (UUID)
 Body  | Nonemployeerequestbody | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | True  | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An updated non-employee record. | Nonemployeerecord
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-employee record id (UUID)
$Nonemployeerequestbody = @""@

# Update non-employee record

try {
    $Result = ConvertFrom-JsonToNonemployeerequestbody -Json $Nonemployeerequestbody
    Update-NonEmployeeRecordV1 -Id $Id -Nonemployeerequestbody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-NonEmployeeRecordV1 -Id $Id -Nonemployeerequestbody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-NonEmployeeRecordV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
