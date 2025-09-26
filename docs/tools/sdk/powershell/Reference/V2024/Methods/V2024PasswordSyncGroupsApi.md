---
id: v2024-password-sync-groups
title: PasswordSyncGroups
pagination_label: PasswordSyncGroups
sidebar_label: PasswordSyncGroups
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordSyncGroups', 'V2024PasswordSyncGroups'] 
slug: /tools/sdk/powershell/v2024/methods/password-sync-groups
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroups', 'V2024PasswordSyncGroups']
---

# PasswordSyncGroups
  Use this API to implement password sync group functionality. 
With this functionality in place, administrators can group sources into password sync groups so that all their applications share the same password. 
This allows users to update the password for all the applications in a sync group if they want, rather than updating each password individually. 

A password sync group is a group of applications that shares a password. 
Administrators create these groups by grouping the applications&#39; sources. 
For example, an administrator can group the ActiveDirectory, GitHub, and G Suite sources together so that all those sources&#39; applications can also be grouped to share a password. 
A user can then update his or her password for ActiveDirectory, GitHub, Gmail, Google Drive, and Google Calendar all at once, rather then updating each one individually.

The following are required for administrators to create a password sync group in Identity Security Cloud: 

- At least two direct connect sources connected to Identity Security Cloud and configured for Password Management.

- Each authentication source in a sync group must have at least one application. Refer to [Adding and Resetting Application Passwords](https://documentation.sailpoint.com/saas/help/pwd/adv_config.html#adding-and-resetting-application-passwords) for more information about adding applications to sources.

- At least one password policy. Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/index.html) for more information about password policies. 

In the Admin panel in Identity Security Cloud, administrators can use the Password Mgmt dropdown menu to select Sync Groups. 
To create a sync group, administrators must provide a name, choose a password policy to be enforced across the sources in the sync group, and select the sources to include in the sync group. 

Administrators can also delete sync groups in Identity Security Cloud, but they should know the following before they do: 

- Passwords related to the associated sources will become independent, so changing one will not change the others anymore. 

- Passwords for the sources&#39; connected applications will also become independent. 

- Password policies assigned to the sync group are then assigned directly to the associated sources. 
To change the password policy for a source, administrators must edit it directly. 

Once the password sync group has been created, users can update the password for the group in Password Manager.

Refer to [Managing Password Sync Groups](https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html) for more information about password sync groups.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024PasswordSyncGroup**](#create-password-sync-group) | **POST** `/password-sync-groups` | Create password sync group
[**Remove-V2024PasswordSyncGroup**](#delete-password-sync-group) | **DELETE** `/password-sync-groups/{id}` | Delete password sync group by id
[**Get-V2024PasswordSyncGroup**](#get-password-sync-group) | **GET** `/password-sync-groups/{id}` | Get password sync group by id
[**Get-V2024PasswordSyncGroups**](#get-password-sync-groups) | **GET** `/password-sync-groups` | Get password sync group list
[**Update-V2024PasswordSyncGroup**](#update-password-sync-group) | **PUT** `/password-sync-groups/{id}` | Update password sync group by id


## create-password-sync-group
This API creates a password sync group based on the specifications provided.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-password-sync-group)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordSyncGroup | [**PasswordSyncGroup**](../models/password-sync-group) | True  | 

### Return type
[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password sync group. | PasswordSyncGroup
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
$PasswordSyncGroup = @"{
  "created" : "2023-03-16T04:00:00Z",
  "name" : "Password Sync Group 1",
  "modified" : "2023-03-16T04:00:00Z",
  "passwordPolicyId" : "2c91808d744ba0ce01746f93b6204501",
  "id" : "6881f631-3bd5-4213-9c75-8e05cc3e35dd",
  "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
}"@

# Create password sync group

try {
    $Result = ConvertFrom-V2024JsonToPasswordSyncGroup -Json $PasswordSyncGroup
    New-V2024PasswordSyncGroup -PasswordSyncGroup $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024PasswordSyncGroup -PasswordSyncGroup $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024PasswordSyncGroup"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-password-sync-group
This API deletes the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-password-sync-group)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password sync group to delete.

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
$Id = "6881f631-3bd5-4213-9c75-8e05cc3e35dd" # String | The ID of password sync group to delete.

# Delete password sync group by id

try {
    Remove-V2024PasswordSyncGroup -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024PasswordSyncGroup -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024PasswordSyncGroup"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-password-sync-group
This API returns the sync group for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-password-sync-group)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password sync group to retrieve.

### Return type
[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password sync group. | PasswordSyncGroup
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
$Id = "6881f631-3bd5-4213-9c75-8e05cc3e35dd" # String | The ID of password sync group to retrieve.

# Get password sync group by id

try {
    Get-V2024PasswordSyncGroup -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PasswordSyncGroup -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PasswordSyncGroup"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-password-sync-groups
This API returns a list of password sync groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-password-sync-groups)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**PasswordSyncGroup[]**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of password sync groups. | PasswordSyncGroup[]
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

# Get password sync group list

try {
    Get-V2024PasswordSyncGroups 
    
    # Below is a request that includes all optional parameters
    # Get-V2024PasswordSyncGroups -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024PasswordSyncGroups"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-password-sync-group
This API updates the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-password-sync-group)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of password sync group to update.
 Body  | PasswordSyncGroup | [**PasswordSyncGroup**](../models/password-sync-group) | True  | 

### Return type
[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password sync group. | PasswordSyncGroup
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
$Id = "6881f631-3bd5-4213-9c75-8e05cc3e35dd" # String | The ID of password sync group to update.
$PasswordSyncGroup = @"{
  "created" : "2023-03-16T04:00:00Z",
  "name" : "Password Sync Group 1",
  "modified" : "2023-03-16T04:00:00Z",
  "passwordPolicyId" : "2c91808d744ba0ce01746f93b6204501",
  "id" : "6881f631-3bd5-4213-9c75-8e05cc3e35dd",
  "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
}"@

# Update password sync group by id

try {
    $Result = ConvertFrom-V2024JsonToPasswordSyncGroup -Json $PasswordSyncGroup
    Update-V2024PasswordSyncGroup -Id $Id -PasswordSyncGroup $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024PasswordSyncGroup -Id $Id -PasswordSyncGroup $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024PasswordSyncGroup"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
