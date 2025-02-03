
---
id: v2024-public-identities-config
title: PublicIdentitiesConfig
pagination_label: PublicIdentitiesConfig
sidebar_label: PublicIdentitiesConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentitiesConfig', 'V2024PublicIdentitiesConfig'] 
slug: /tools/sdk/powershell/v2024/methods/public-identities-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesConfig', 'V2024PublicIdentitiesConfig']
---

# PublicIdentitiesConfig
  Use this API to implement public identity configuration functionality. 
With this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions. 
This can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.

By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager. 
However, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.
Administrators can use this API to make those necessary identity attributes public to non-administrators. 

For example, a non-administrator deciding whether to approve another identity&#39;s request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department. 
If an administrator has used [Update Public Identity Config](https://developer.sailpoint.com/docs/api/v3/update-public-identity-config/) to make the &quot;department&quot; attribute public, the approver can see the department and make a decision without requesting any more information.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024PublicIdentityConfig**](#get-public-identity-config) | **GET** `/public-identities-config` | Get the Public Identities Configuration
[**Update-V2024PublicIdentityConfig**](#update-public-identity-config) | **PUT** `/public-identities-config` | Update the Public Identities Configuration

## get-public-identity-config
Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**PublicIdentityConfig**](../models/public-identity-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | PublicIdentityConfig
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

# Get the Public Identities Configuration

try {
    Get-V2024PublicIdentityConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024PublicIdentityConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PublicIdentityConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## update-public-identity-config
Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PublicIdentityConfig | [**PublicIdentityConfig**](../models/public-identity-config) | True  | 

### Return type
[**PublicIdentityConfig**](../models/public-identity-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | PublicIdentityConfig
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
$PublicIdentityConfig = @"{
  "modified" : "2018-06-25T20:22:28.104Z",
  "attributes" : [ {
    "name" : "Country",
    "key" : "country"
  }, {
    "name" : "Country",
    "key" : "country"
  } ],
  "modifiedBy" : {
    "name" : "Thomas Edison",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  }
}"@

# Update the Public Identities Configuration

try {
    $Result = ConvertFrom-JsonToPublicIdentityConfig -Json $PublicIdentityConfig
    Update-V2024PublicIdentityConfig-V2024PublicIdentityConfig $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024PublicIdentityConfig -V2024PublicIdentityConfig $PublicIdentityConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024PublicIdentityConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
