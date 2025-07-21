---
id: beta-sod-policies
title: SODPolicies
pagination_label: SODPolicies
sidebar_label: SODPolicies
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SODPolicies', 'BetaSODPolicies'] 
slug: /tools/sdk/powershell/beta/methods/sod-policies
tags: ['SDK', 'Software Development Kit', 'SODPolicies', 'BetaSODPolicies']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaSodPolicy**](#create-sod-policy) | **POST** `/sod-policies` | Create sod policy
[**Remove-BetaSodPolicy**](#delete-sod-policy) | **DELETE** `/sod-policies/{id}` | Delete sod policy by id
[**Remove-BetaSodPolicySchedule**](#delete-sod-policy-schedule) | **DELETE** `/sod-policies/{id}/schedule` | Delete sod policy schedule
[**Get-BetaCustomViolationReport**](#get-custom-violation-report) | **GET** `/sod-violation-report/{reportResultId}/download/{fileName}` | Download custom violation report
[**Get-BetaDefaultViolationReport**](#get-default-violation-report) | **GET** `/sod-violation-report/{reportResultId}/download` | Download violation report
[**Get-BetaSodAllReportRunStatus**](#get-sod-all-report-run-status) | **GET** `/sod-violation-report` | Get multi-report run task status
[**Get-BetaSodPolicy**](#get-sod-policy) | **GET** `/sod-policies/{id}` | Get sod policy by id
[**Get-BetaSodPolicySchedule**](#get-sod-policy-schedule) | **GET** `/sod-policies/{id}/schedule` | Get sod policy schedule
[**Get-BetaSodViolationReportRunStatus**](#get-sod-violation-report-run-status) | **GET** `/sod-policies/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**Get-BetaSodViolationReportStatus**](#get-sod-violation-report-status) | **GET** `/sod-policies/{id}/violation-report` | Get sod violation report status
[**Get-BetaSodPolicies**](#list-sod-policies) | **GET** `/sod-policies` | List sod policies
[**Update-BetaSodPolicy**](#patch-sod-policy) | **PATCH** `/sod-policies/{id}` | Patch a sod policy
[**Send-BetaPolicySchedule**](#put-policy-schedule) | **PUT** `/sod-policies/{id}/schedule` | Update sod policy schedule
[**Send-BetaSodPolicy**](#put-sod-policy) | **PUT** `/sod-policies/{id}` | Update sod policy by id
[**Start-BetaSodAllPoliciesForOrg**](#start-sod-all-policies-for-org) | **POST** `/sod-violation-report/run` | Runs all policies for org
[**Start-BetaSodPolicy**](#start-sod-policy) | **POST** `/sod-policies/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-sod-policy)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    New-BetaSodPolicy -SodPolicy $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaSodPolicy -SodPolicy $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sod-policy
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD Policy to delete.
  Query | Logical | **Boolean** |   (optional) (default to $true) | Indicates whether this is a soft delete (logical true) or a hard delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the SOD Policy to delete.
$Logical = $true # Boolean | Indicates whether this is a soft delete (logical true) or a hard delete. (optional) (default to $true)

# Delete sod policy by id

try {
    Remove-BetaSodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaSodPolicy -Id $Id -Logical $Logical  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sod-policy-schedule
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This deletes schedule for a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-sod-policy-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy the schedule must be deleted for.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the SOD policy the schedule must be deleted for.

# Delete sod policy schedule

try {
    Remove-BetaSodPolicySchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaSodPolicySchedule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaSodPolicySchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-custom-violation-report
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This allows to download a specified named violation report for a given report reference.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-custom-violation-report)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    Get-BetaCustomViolationReport -ReportResultId $ReportResultId -FileName $FileName 
    
    # Below is a request that includes all optional parameters
    # Get-BetaCustomViolationReport -ReportResultId $ReportResultId -FileName $FileName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaCustomViolationReport"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-default-violation-report
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This allows to download a violation report for a given report reference.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-default-violation-report)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$ReportResultId = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the report reference to download.

# Download violation report

try {
    Get-BetaDefaultViolationReport -ReportResultId $ReportResultId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaDefaultViolationReport -ReportResultId $ReportResultId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaDefaultViolationReport"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-all-report-run-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This endpoint gets the status for a violation report for all policy run.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sod-all-report-run-status)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get multi-report run task status

try {
    Get-BetaSodAllReportRunStatus 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSodAllReportRunStatus  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSodAllReportRunStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-policy
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the object reference to retrieve.

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD policy ID. | SodPolicy
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to retrieve.

# Get sod policy by id

try {
    Get-BetaSodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSodPolicy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-policy-schedule
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This endpoint gets a specified SOD policy's schedule.
Requires the role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sod-policy-schedule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the object reference to retrieve.

### Return type
[**SodPolicySchedule**](../models/sod-policy-schedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD policy ID. | SodPolicySchedule
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to retrieve.

# Get sod policy schedule

try {
    Get-BetaSodPolicySchedule -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSodPolicySchedule -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSodPolicySchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-violation-report-run-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This gets the status for a violation report run task that has already been invoked.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sod-violation-report-run-status)

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
$ReportResultId = "2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | The ID of the report reference to retrieve.

# Get violation report run status

try {
    Get-BetaSodViolationReportRunStatus -ReportResultId $ReportResultId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSodViolationReportRunStatus -ReportResultId $ReportResultId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSodViolationReportRunStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-violation-report-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This gets the status for a violation report run task that has already been invoked.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sod-violation-report-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the object reference to retrieve.

### Return type
[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task. | ReportResultReference
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the object reference to retrieve.

# Get sod violation report status

try {
    Get-BetaSodViolationReportStatus -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSodViolationReportStatus -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSodViolationReportStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-sod-policies
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-sod-policies)

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
$Filters = 'id eq "bc693f07e7b645539626c25954c58554"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional)
$Sorters = "id,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional)

# List sod policies

try {
    Get-BetaSodPolicies 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSodPolicies -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSodPolicies"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sod-policy
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-sod-policy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy being modified.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 

### Return type
[**SodPolicy**](../models/sod-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the SOD policy&#39;s new representation. | SodPolicy
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
$Id = "2c9180835d191a86015d28455b4a2329" # String | The ID of the SOD policy being modified.
$RequestBody =  # SystemCollectionsHashtable[] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
 $RequestBody = @"[{op=replace, path=/description, value=Modified description}, {op=replace, path=/conflictingAccessCriteria/leftCriteria/name, value=money-in-modified}, {op=replace, path=/conflictingAccessCriteria/rightCriteria, value={name=money-out-modified, criteriaList=[{type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}]}}]"@ # SystemCollectionsHashtable[] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
 

# Patch a sod policy

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-BetaSodPolicy -Id $Id -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSodPolicy -Id $Id -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-policy-schedule
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This updates schedule for a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-policy-schedule)

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
200 | SOD policy by ID. | SodPolicySchedule
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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the SOD policy to update its schedule.
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
  "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "Schedule for policy xyz",
  "emailEmptyResults" : false
}"@

# Update sod policy schedule

try {
    $Result = ConvertFrom-JsonToSodPolicySchedule -Json $SodPolicySchedule
    Send-BetaPolicySchedule -Id $Id -SodPolicySchedule $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaPolicySchedule -Id $Id -SodPolicySchedule $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaPolicySchedule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-sod-policy
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-sod-policy)

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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the SOD policy to update.
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
    Send-BetaSodPolicy -Id $Id -SodPolicy $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaSodPolicy -Id $Id -SodPolicy $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-sod-all-policies-for-org
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/start-sod-all-policies-for-org)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$MultiPolicyRequest = @"{
  "filteredPolicyList" : [ "filteredPolicyList", "filteredPolicyList" ]
}"@

# Runs all policies for org

try {
    Start-BetaSodAllPoliciesForOrg 
    
    # Below is a request that includes all optional parameters
    # Start-BetaSodAllPoliciesForOrg -MultiPolicyRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaSodAllPoliciesForOrg"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-sod-policy
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/beta/start-sod-policy)

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
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The SOD policy ID to run.

# Runs sod policy violation report

try {
    Start-BetaSodPolicy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-BetaSodPolicy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaSodPolicy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
