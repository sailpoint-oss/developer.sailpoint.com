---
id: beta-public-identities-config
title: PublicIdentitiesConfig
pagination_label: PublicIdentitiesConfig
sidebar_label: PublicIdentitiesConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentitiesConfig', 'BetaPublicIdentitiesConfig'] 
slug: /tools/sdk/powershell/beta/methods/public-identities-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesConfig', 'BetaPublicIdentitiesConfig']
---

# PublicIdentitiesConfig
  Use this API to implement public identity configuration functionality.
With this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions.
This can be helpful for access approvers, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.

By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager.
However, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.
Administrators can use this API to make those necessary identity attributes public to non-administrators.

For example, a non-administrator deciding whether to approve another identity&#39;s request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department.
If an administrator has used [Update Public Identity Config](https://developer.sailpoint.com/docs/api/beta/update-public-identity-config/) to make the &quot;department&quot; attribute public, the approver can see the department and make a decision without requesting any more information.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaPublicIdentityConfig**](#get-public-identity-config) | **GET** `/public-identities-config` | Get Public Identity Config
[**Update-BetaPublicIdentityConfig**](#update-public-identity-config) | **PUT** `/public-identities-config` | Update Public Identity Config

## get-public-identity-config
This gets details of public identity config.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get Public Identity Config

try {
    Get-BetaPublicIdentityConfig
    
    # Below is a request that includes all optional parameters
    # Get-BetaPublicIdentityConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPublicIdentityConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## update-public-identity-config
This updates the details of public identity config.

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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

# Update Public Identity Config

try {
    $Result = ConvertFrom-JsonToPublicIdentityConfig -Json $PublicIdentityConfig
    Update-BetaPublicIdentityConfig -BetaPublicIdentityConfig $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaPublicIdentityConfig -BetaPublicIdentityConfig $PublicIdentityConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaPublicIdentityConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
