---
id: sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SODViolations', 'SODViolations'] 
slug: /tools/sdk/powershell/sodviolations/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations', 'SODViolations']
---

# SODViolations
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Start-PredictSodViolationsV1**](#start-predict-sod-violations-v1) | **POST** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**Start-ViolationCheckV1**](#start-violation-check-v1) | **POST** `/sod-violations/v1/check` | Check sod violations


## start-predict-sod-violations-v1
This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-predict-sod-violations-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Identitywithnewaccess | [**Identitywithnewaccess**](../models/identitywithnewaccess) | True  | 

### Return type
[**Violationprediction**](../models/violationprediction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Violation Contexts | Violationprediction
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Identitywithnewaccess = @"{"identityId":"2c91808568c529c60168cca6f90c1313","accessRefs":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}"@

# Predict sod violations for identity.

try {
    $Result = ConvertFrom-JsonToIdentitywithnewaccess -Json $Identitywithnewaccess
    Start-PredictSodViolationsV1 -Identitywithnewaccess $Result 
    
    # Below is a request that includes all optional parameters
    # Start-PredictSodViolationsV1 -Identitywithnewaccess $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-PredictSodViolationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-violation-check-v1
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-violation-check-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Identitywithnewaccess | [**Identitywithnewaccess**](../models/identitywithnewaccess) | True  | 

### Return type
[**Sodviolationcheck**](../models/sodviolationcheck)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Request ID with a timestamp. | Sodviolationcheck
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Identitywithnewaccess = @"{"identityId":"2c91808568c529c60168cca6f90c1313","accessRefs":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}],"clientMetadata":{"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"}}"@

# Check sod violations

try {
    $Result = ConvertFrom-JsonToIdentitywithnewaccess -Json $Identitywithnewaccess
    Start-ViolationCheckV1 -Identitywithnewaccess $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ViolationCheckV1 -Identitywithnewaccess $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ViolationCheckV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
