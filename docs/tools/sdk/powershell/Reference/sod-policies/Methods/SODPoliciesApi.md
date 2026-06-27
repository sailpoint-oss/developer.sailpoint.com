---
id: sod-policies
title: SODPolicies
pagination_label: SODPolicies
sidebar_label: SODPolicies
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SODPolicies', 'SODPolicies'] 
slug: /tools/sdk/powershell/sodpolicies/methods/sod-policies
tags: ['SDK', 'Software Development Kit', 'SODPolicies', 'SODPolicies']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SodPolicyV1**](#create-sod-policy-v1) | **POST** `/sod-policies/v1` | Create sod policy
[**Remove-SodPolicyScheduleV1**](#delete-sod-policy-schedule-v1) | **DELETE** `/sod-policies/v1/{id}/schedule` | Delete sod policy schedule
[**Remove-SodPolicyV1**](#delete-sod-policy-v1) | **DELETE** `/sod-policies/v1/{id}` | Delete sod policy by id
[**Get-CustomViolationReportV1**](#get-custom-violation-report-v1) | **GET** `/sod-violation-report/v1/{reportResultId}/download/{fileName}` | Download custom violation report
[**Get-DefaultViolationReportV1**](#get-default-violation-report-v1) | **GET** `/sod-violation-report/v1/{reportResultId}/download` | Download violation report
[**Get-SodAllReportRunStatusV1**](#get-sod-all-report-run-status-v1) | **GET** `/sod-violation-report/v1` | Get multi-report run task status
[**Get-SodPolicyScheduleV1**](#get-sod-policy-schedule-v1) | **GET** `/sod-policies/v1/{id}/schedule` | Get sod policy schedule
[**Get-SodPolicyV1**](#get-sod-policy-v1) | **GET** `/sod-policies/v1/{id}` | Get sod policy by id
[**Get-SodViolationReportRunStatusV1**](#get-sod-violation-report-run-status-v1) | **GET** `/sod-policies/v1/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**Get-SodViolationReportStatusV1**](#get-sod-violation-report-status-v1) | **GET** `/sod-policies/v1/{id}/violation-report` | Get sod violation report status
[**Get-SodPoliciesV1**](#list-sod-policies-v1) | **GET** `/sod-policies/v1` | List sod policies
[**Update-SodPolicyV1**](#patch-sod-policy-v1) | **PATCH** `/sod-policies/v1/{id}` | Patch sod policy by id
[**Send-PolicyScheduleV1**](#put-policy-schedule-v1) | **PUT** `/sod-policies/v1/{id}/schedule` | Update sod policy schedule
[**Send-SodPolicyV1**](#put-sod-policy-v1) | **PUT** `/sod-policies/v1/{id}` | Update sod policy by id
[**Start-EvaluateSodPolicyV1**](#start-evaluate-sod-policy-v1) | **POST** `/sod-policies/v1/{id}/evaluate` | Evaluate one policy by id
[**Start-SodAllPoliciesForOrgV1**](#start-sod-all-policies-for-org-v1) | **POST** `/sod-violation-report/v1/run` | Runs all policies for org
[**Start-SodPolicyV1**](#start-sod-policy-v1) | **POST** `/sod-policies/v1/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy-v1
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sod-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Sodpolicy | [**Sodpolicy**](../models/sodpolicy) | True  | 

### Return type
[**Sodpolicy**](../models/sodpolicy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | SOD policy created | Sodpolicy
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Sodpolicy = @"{"name":"Conflicting-Policy-Name","description":"This policy ensures compliance of xyz","ownerRef":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"Owner Name"},"externalPolicyReference":"XYZ policy","compensatingControls":"Have a manager review the transaction decisions for their \"out of compliance\" employee","correctionAdvice":"Based on the role of the employee, managers should remove access that is not required for their job function.","state":"ENFORCED","tags":["string"],"creatorId":"0f11f2a4-7c94-4bf3-a2bd-742580fe3bde","modifierId":"0f11f2a4-7c94-4bf3-a2bd-742580fe3bde","violationOwnerAssignmentConfig":{"assignmentRule":"MANAGER","ownerRef":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"Violation Owner Name"}},"scheduled":true,"type":"CONFLICTING_ACCESS_BASED","conflictingAccessCriteria":{"leftCriteria":{"name":"money-in","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67"}]},"rightCriteria":{"name":"money-out","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a68"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a69"}]}}}"@

# Create sod policy

try {
    $Result = ConvertFrom-JsonToSodpolicy -Json $Sodpolicy
    New-SodPolicyV1 -Sodpolicy $Result 
    
    # Below is a request that includes all optional parameters
    # New-SodPolicyV1 -Sodpolicy $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sod-policy-schedule-v1
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-sod-policy-schedule-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy the schedule must be deleted for.

# Delete sod policy schedule

try {
    Remove-SodPolicyScheduleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-SodPolicyScheduleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SodPolicyScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sod-policy-v1
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-sod-policy-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD Policy to delete.
$Logical = $true # Boolean | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to $true)

# Delete sod policy by id

try {
    Remove-SodPolicyV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-SodPolicyV1 -Id $Id -Logical $Logical  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-custom-violation-report-v1
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-custom-violation-report-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$ReportResultId = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the report reference to download.
$FileName = "custom-name" # String | Custom Name for the  file.

# Download custom violation report

try {
    Get-CustomViolationReportV1 -ReportResultId $ReportResultId -FileName $FileName 
    
    # Below is a request that includes all optional parameters
    # Get-CustomViolationReportV1 -ReportResultId $ReportResultId -FileName $FileName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CustomViolationReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-default-violation-report-v1
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-default-violation-report-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$ReportResultId = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the report reference to download.

# Download violation report

try {
    Get-DefaultViolationReportV1 -ReportResultId $ReportResultId 
    
    # Below is a request that includes all optional parameters
    # Get-DefaultViolationReportV1 -ReportResultId $ReportResultId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DefaultViolationReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-all-report-run-status-v1
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-all-report-run-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Reportresultreference**](../models/reportresultreference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task for all policy run. | Reportresultreference
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get multi-report run task status

try {
    Get-SodAllReportRunStatusV1 
    
    # Below is a request that includes all optional parameters
    # Get-SodAllReportRunStatusV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SodAllReportRunStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-policy-schedule-v1
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-policy-schedule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy schedule to retrieve.

### Return type
[**Sodpolicyschedule**](../models/sodpolicyschedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD policy schedule. | Sodpolicyschedule
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy schedule to retrieve.

# Get sod policy schedule

try {
    Get-SodPolicyScheduleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SodPolicyScheduleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SodPolicyScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-policy-v1
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD Policy to retrieve.

### Return type
[**Sodpolicy**](../models/sodpolicy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD policy ID. | Sodpolicy
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD Policy to retrieve.

# Get sod policy by id

try {
    Get-SodPolicyV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SodPolicyV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-violation-report-run-status-v1
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-violation-report-run-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to retrieve.

### Return type
[**Reportresultreference**](../models/reportresultreference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task. | Reportresultreference
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ReportResultId = "2e8d8180-24bc-4d21-91c6-7affdb473b0d" # String | The ID of the report reference to retrieve.

# Get violation report run status

try {
    Get-SodViolationReportRunStatusV1 -ReportResultId $ReportResultId 
    
    # Below is a request that includes all optional parameters
    # Get-SodViolationReportRunStatusV1 -ReportResultId $ReportResultId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SodViolationReportRunStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sod-violation-report-status-v1
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-violation-report-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the violation report to retrieve status for.

### Return type
[**Reportresultreference**](../models/reportresultreference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task. | Reportresultreference
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the violation report to retrieve status for.

# Get sod violation report status

try {
    Get-SodViolationReportStatusV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SodViolationReportStatusV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SodViolationReportStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-sod-policies-v1
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sod-policies-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description**

### Return type
[**Sodpolicy[]**](../models/sodpolicy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all SOD policies. | Sodpolicy[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-SodPoliciesV1 
    
    # Below is a request that includes all optional parameters
    # Get-SodPoliciesV1 -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SodPoliciesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sod-policy-v1
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-sod-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy being modified.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 

### Return type
[**Sodpolicy**](../models/sodpolicy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the SOD policy&#39;s new representation. | Sodpolicy
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c918083-5d19-1a86-015d-28455b4a2329" # String | The ID of the SOD policy being modified.
 $Jsonpatchoperation = @"[{"op":"replace","path":"/description","value":"Modified description"},{"op":"replace","path":"/conflictingAccessCriteria/leftCriteria/name","value":"money-in-modified"},{"op":"replace","path":"/conflictingAccessCriteria/rightCriteria","value":{"name":"money-out-modified","criteriaList":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}}]"@ # Jsonpatchoperation[] | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
 

# Patch sod policy by id

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-SodPolicyV1 -Id $Id -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-SodPolicyV1 -Id $Id -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-policy-schedule-v1
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-policy-schedule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy to update its schedule.
 Body  | Sodpolicyschedule | [**Sodpolicyschedule**](../models/sodpolicyschedule) | True  | 

### Return type
[**Sodpolicyschedule**](../models/sodpolicyschedule)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created or updated SOD policy schedule. | Sodpolicyschedule
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy to update its schedule.
$Sodpolicyschedule = @""@

# Update sod policy schedule

try {
    $Result = ConvertFrom-JsonToSodpolicyschedule -Json $Sodpolicyschedule
    Send-PolicyScheduleV1 -Id $Id -Sodpolicyschedule $Result 
    
    # Below is a request that includes all optional parameters
    # Send-PolicyScheduleV1 -Id $Id -Sodpolicyschedule $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-PolicyScheduleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-sod-policy-v1
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-sod-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the SOD policy to update.
 Body  | Sodpolicy | [**Sodpolicy**](../models/sodpolicy) | True  | 

### Return type
[**Sodpolicy**](../models/sodpolicy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SOD Policy by ID | Sodpolicy
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The ID of the SOD policy to update.
$Sodpolicy = @"{"name":"Conflicting-Policy-Name","description":"Modified Description","externalPolicyReference":"XYZ policy","compensatingControls":"Have a manager review the transaction decisions for their \"out of compliance\" employee","correctionAdvice":"Based on the role of the employee, managers should remove access that is not required for their job function.","state":"ENFORCED","tags":["string"],"violationOwnerAssignmentConfig":{"assignmentRule":"MANAGER","ownerRef":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"Violation Owner Name"}},"scheduled":true,"type":"CONFLICTING_ACCESS_BASED","conflictingAccessCriteria":{"leftCriteria":{"name":"money-in","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67"}]},"rightCriteria":{"name":"money-out","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a68"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a69"}]}}}"@

# Update sod policy by id

try {
    $Result = ConvertFrom-JsonToSodpolicy -Json $Sodpolicy
    Send-SodPolicyV1 -Id $Id -Sodpolicy $Result 
    
    # Below is a request that includes all optional parameters
    # Send-SodPolicyV1 -Id $Id -Sodpolicy $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-SodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-evaluate-sod-policy-v1
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-evaluate-sod-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The SOD policy ID to run.

### Return type
[**Reportresultreference**](../models/reportresultreference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | Reportresultreference
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The SOD policy ID to run.

# Evaluate one policy by id

try {
    Start-EvaluateSodPolicyV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-EvaluateSodPolicyV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-EvaluateSodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-sod-all-policies-for-org-v1
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-sod-all-policies-for-org-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Multipolicyrequest | [**Multipolicyrequest**](../models/multipolicyrequest) |   (optional) | 

### Return type
[**Reportresultreference**](../models/reportresultreference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | Reportresultreference
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Multipolicyrequest = @"{"filteredPolicyList":["b868cd40-ffa4-4337-9c07-1a51846cfa94","63a07a7b-39a4-48aa-956d-50c827deba2a"]}"@

# Runs all policies for org

try {
    Start-SodAllPoliciesForOrgV1 
    
    # Below is a request that includes all optional parameters
    # Start-SodAllPoliciesForOrgV1 -Multipolicyrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-SodAllPoliciesForOrgV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-sod-policy-v1
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-sod-policy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The SOD policy ID to run.

### Return type
[**Reportresultreference**](../models/reportresultreference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | Reportresultreference
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListSodPoliciesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListSodPoliciesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The SOD policy ID to run.

# Runs sod policy violation report

try {
    Start-SodPolicyV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Start-SodPolicyV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-SodPolicyV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
