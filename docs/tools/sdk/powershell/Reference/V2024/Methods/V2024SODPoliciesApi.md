---
id: v2024-sod-policies
title: SODPolicies
pagination_label: SODPolicies
sidebar_label: SODPolicies
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SODPolicies', 'V2024SODPolicies'] 
slug: /tools/sdk/powershell/v2024/methods/sod-policies
tags: ['SDK', 'Software Development Kit', 'SODPolicies', 'V2024SODPolicies']
---

# SODPolicies
  Use this API to implement and manage &quot;separation of duties&quot; (SOD) policies. 
With SOD policy functionality in place, administrators can organize the access in their tenants to prevent individuals from gaining conflicting or excessive access. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

To create SOD policies in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Policies&#39;.
To create a policy, they must configure two lists of access items. Each access item can only be added to one of the two lists.
They can search for the entitlements they want to add to these access lists.

&gt;Note: You can have a maximum of 500 policies of any type (including general policies) in your organization. In each access-based SOD policy, you can have a maximum of 50 entitlements in each access list.  

Once a SOD policy is in place, if an identity has access items on both lists, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies. 

To create a subscription to a SOD policy in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Layers&#39;.
They can create a subscription to the policy and schedule it to run at a regular interval. 

Refer to [Managing Policies](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html) for more information about SOD policies. 

Refer to [Subscribe to a SOD Policy](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html#subscribe-to-an-sod-policy) for more information about SOD policy subscriptions.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024SodPolicy**](#create-sod-policy) | **POST** `/sod-policies` | Create sod policy
[**Remove-V2024SodPolicy**](#delete-sod-policy) | **DELETE** `/sod-policies/{id}` | Delete sod policy by id
[**Remove-V2024SodPolicySchedule**](#delete-sod-policy-schedule) | **DELETE** `/sod-policies/{id}/schedule` | Delete sod policy schedule
[**Get-V2024CustomViolationReport**](#get-custom-violation-report) | **GET** `/sod-violation-report/{reportResultId}/download/{fileName}` | Download custom violation report
[**Get-V2024DefaultViolationReport**](#get-default-violation-report) | **GET** `/sod-violation-report/{reportResultId}/download` | Download violation report
[**Get-V2024SodAllReportRunStatus**](#get-sod-all-report-run-status) | **GET** `/sod-violation-report` | Get multi-report run task status
[**Get-V2024SodPolicy**](#get-sod-policy) | **GET** `/sod-policies/{id}` | Get sod policy by id
[**Get-V2024SodPolicySchedule**](#get-sod-policy-schedule) | **GET** `/sod-policies/{id}/schedule` | Get sod policy schedule
[**Get-V2024SodViolationReportRunStatus**](#get-sod-violation-report-run-status) | **GET** `/sod-policies/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**Get-V2024SodViolationReportStatus**](#get-sod-violation-report-status) | **GET** `/sod-policies/{id}/violation-report` | Get sod violation report status
[**Get-V2024SodPolicies**](#list-sod-policies) | **GET** `/sod-policies` | List sod policies
[**Update-V2024SodPolicy**](#patch-sod-policy) | **PATCH** `/sod-policies/{id}` | Patch sod policy by id
[**Send-V2024PolicySchedule**](#put-policy-schedule) | **PUT** `/sod-policies/{id}/schedule` | Update sod policy schedule
[**Send-V2024SodPolicy**](#put-sod-policy) | **PUT** `/sod-policies/{id}` | Update sod policy by id
[**Start-V2024EvaluateSodPolicy**](#start-evaluate-sod-policy) | **POST** `/sod-policies/{id}/evaluate` | Evaluate one policy by id
[**Start-V2024SodAllPoliciesForOrg**](#start-sod-all-policies-for-org) | **POST** `/sod-violation-report/run` | Runs all policies for org
[**Start-V2024SodPolicy**](#start-sod-policy) | **POST** `/sod-policies/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SodPolicy | [**SodPolicy**](../models/sod-policy) | True  | 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | SOD policy created | SodPolicy
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
$SodPolicy = @"{
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}"@

# Create sod policy

try {
    $Result = ConvertFrom-JsonToSodPolicy -Json $SodPolicy
    New-V2024SodPolicy -SodPolicy $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024SodPolicy -SodPolicy $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024SodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sod-policy
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD Policy to delete.
  Query | Logical | **Boolean** |   (optional) (default to $true) | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD Policy to delete.
$Logical = $true # Boolean | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to $true)

# Delete sod policy by id

try {
    Remove-V2024SodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024SodPolicy -Id $Id -Logical $Logical  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024SodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sod-policy-schedule
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-sod-policy-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy the schedule must be deleted for.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content response. | 
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy the schedule must be deleted for.

# Delete sod policy schedule

try {
    Remove-V2024SodPolicySchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024SodPolicySchedule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024SodPolicySchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-custom-violation-report
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-custom-violation-report)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to download.
Path   | FileName | **String** | True  | Custom Name for the  file.

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the zip file with given custom name that contains the violation report file. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$ReportResultId = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the report reference to download.
$FileName = "custom-name" # String | Custom Name for the  file.

# Download custom violation report

try {
    Get-V2024CustomViolationReport -ReportResultId $ReportResultId -FileName $FileName 
    
    # Below is a request that includes all optional parameters
    # Get-V2024CustomViolationReport -ReportResultId $ReportResultId -FileName $FileName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024CustomViolationReport"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-default-violation-report
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-default-violation-report)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to download.

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the PolicyReport.zip that contains the violation report file. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$ReportResultId = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the report reference to download.

# Download violation report

try {
    Get-V2024DefaultViolationReport -ReportResultId $ReportResultId 
    
    # Below is a request that includes all optional parameters
    # Get-V2024DefaultViolationReport -ReportResultId $ReportResultId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024DefaultViolationReport"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-all-report-run-status
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-all-report-run-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task for all policy run. | ReportResultReference
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

# Get multi-report run task status

try {
    Get-V2024SodAllReportRunStatus 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SodAllReportRunStatus  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SodAllReportRunStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-policy
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD Policy to retrieve.

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD policy ID. | SodPolicy
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD Policy to retrieve.

# Get sod policy by id

try {
    Get-V2024SodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SodPolicy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-policy-schedule
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-policy-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy schedule to retrieve.

### Return type
[**SodPolicySchedule**](../models/sod-policy-schedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD policy schedule. | SodPolicySchedule
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy schedule to retrieve.

# Get sod policy schedule

try {
    Get-V2024SodPolicySchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SodPolicySchedule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SodPolicySchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-violation-report-run-status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-violation-report-run-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to retrieve.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task. | ReportResultReference
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
$ReportResultId = "2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | The ID of the report reference to retrieve.

# Get violation report run status

try {
    Get-V2024SodViolationReportRunStatus -ReportResultId $ReportResultId 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SodViolationReportRunStatus -ReportResultId $ReportResultId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SodViolationReportRunStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-violation-report-status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sod-violation-report-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the violation report to retrieve status for.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task. | ReportResultReference
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the violation report to retrieve status for.

# Get sod violation report status

try {
    Get-V2024SodViolationReportStatus -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SodViolationReportStatus -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SodViolationReportStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-sod-policies
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-sod-policies)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description**

### Return type
[**SodPolicy[]**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all SOD policies. | SodPolicy[]
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
$Filters = 'id eq "bc693f07e7b645539626c25954c58554"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional)
$Sorters = "id,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional)

# List sod policies

try {
    Get-V2024SodPolicies 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SodPolicies -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SodPolicies"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sod-policy
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy being modified.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the SOD policy&#39;s new representation. | SodPolicy
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
$Id = "2c918083-5d19-1a86-015d-28455b4a2329" # String | The ID of the SOD policy being modified.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
 

# Patch sod policy by id

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024SodPolicy -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024SodPolicy -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024SodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-policy-schedule
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-policy-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy to update its schedule.
 Body  | SodPolicySchedule | [**SodPolicySchedule**](../models/sod-policy-schedule) | True  | 

### Return type
[**SodPolicySchedule**](../models/sod-policy-schedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created or updated SOD policy schedule. | SodPolicySchedule
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy to update its schedule.
$SodPolicySchedule = @"{
  "schedule" : {
    "hours" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "months" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "timeZoneId" : "America/Chicago",
    "days" : {
      "accountMatchConfig" : {
        "matchExpression" : {
          "and" : true,
          "matchTerms" : [ {
            "name" : "",
            "value" : "",
            "container" : true,
            "and" : false,
            "children" : [ {
              "name" : "businessCategory",
              "value" : "Service",
              "op" : "eq",
              "container" : false,
              "and" : false
            } ]
          } ]
        }
      },
      "applicationId" : "2c91808874ff91550175097daaec161c\""
    },
    "expiration" : "2018-06-25T20:22:28.104Z",
    "type" : "WEEKLY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "recipients" : [ {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  }, {
    "name" : "Michael Michaels",
    "id" : "2c7180a46faadee4016fb4e018c20642",
    "type" : "IDENTITY"
  } ],
  "name" : "SCH-1584312283015",
  "creatorId" : "0f11f2a47c944bf3a2bd742580fe3bde",
  "modifierId" : "0f11f2a47c944bf3a2bd742580fe3bde",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "Schedule for policy xyz",
  "emailEmptyResults" : false
}"@

# Update sod policy schedule

try {
    $Result = ConvertFrom-JsonToSodPolicySchedule -Json $SodPolicySchedule
    Send-V2024PolicySchedule -Id $Id -SodPolicySchedule $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2024PolicySchedule -Id $Id -SodPolicySchedule $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024PolicySchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-sod-policy
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy to update.
 Body  | SodPolicy | [**SodPolicy**](../models/sod-policy) | True  | 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD Policy by ID | SodPolicy
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy to update.
$SodPolicy = @"{
  "conflictingAccessCriteria" : {
    "leftCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    },
    "rightCriteria" : {
      "name" : "money-in",
      "criteriaList" : [ {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a66",
        "name" : "Administrator"
      }, {
        "type" : "ENTITLEMENT",
        "id" : "2c9180866166b5b0016167c32ef31a67",
        "name" : "Administrator"
      } ]
    }
  },
  "ownerRef" : {
    "name" : "Support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "scheduled" : true,
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "description" : "This policy ensures compliance of xyz",
  "violationOwnerAssignmentConfig" : {
    "assignmentRule" : "MANAGER",
    "ownerRef" : {
      "name" : "Support",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    }
  },
  "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
  "type" : "GENERAL",
  "tags" : [ "TAG1", "TAG2" ],
  "name" : "policy-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
  "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "state" : "ENFORCED",
  "externalPolicyReference" : "XYZ policy"
}"@

# Update sod policy by id

try {
    $Result = ConvertFrom-JsonToSodPolicy -Json $SodPolicy
    Send-V2024SodPolicy -Id $Id -SodPolicy $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2024SodPolicy -Id $Id -SodPolicy $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024SodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-evaluate-sod-policy
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-evaluate-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The SOD policy ID to run.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | ReportResultReference
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The SOD policy ID to run.

# Evaluate one policy by id

try {
    Start-V2024EvaluateSodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-V2024EvaluateSodPolicy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024EvaluateSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-sod-all-policies-for-org
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-sod-all-policies-for-org)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | MultiPolicyRequest | [**MultiPolicyRequest**](../models/multi-policy-request) |   (optional) | 

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | ReportResultReference
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
$MultiPolicyRequest = @"{
  "filteredPolicyList" : [ "[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]", "[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]" ]
}"@

# Runs all policies for org

try {
    Start-V2024SodAllPoliciesForOrg 
    
    # Below is a request that includes all optional parameters
    # Start-V2024SodAllPoliciesForOrg -MultiPolicyRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024SodAllPoliciesForOrg"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-sod-policy
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/start-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The SOD policy ID to run.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | ReportResultReference
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
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The SOD policy ID to run.

# Runs sod policy violation report

try {
    Start-V2024SodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-V2024SodPolicy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2024SodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
