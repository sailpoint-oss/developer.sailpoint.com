---
id: account-deletion-requests
title: AccountDeletionRequests
pagination_label: AccountDeletionRequests
sidebar_label: AccountDeletionRequests
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountDeletionRequests', 'AccountDeletionRequests'] 
slug: /tools/sdk/powershell/accountdeletionrequests/methods/account-deletion-requests
tags: ['SDK', 'Software Development Kit', 'AccountDeletionRequests', 'AccountDeletionRequests']
---

# AccountDeletionRequests
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-AccountRequestV1**](#delete-account-request-v1) | **POST** `/account-requests/v1/account/{accountId}/delete` | Delete account
[**Get-AccountDeletionRequestsV1**](#get-account-deletion-requests-v1) | **GET** `/account-requests/v1/deletion` | List of Account Deletion Requests


## delete-account-request-v1
Initiates an account deletion request for the specified account.
This method validates the input data, processes the deletion request,
and generates an asynchronous result containing a tracking ID. 
>**NOTE: You can only delete accounts from sources of the "Connected" type. which supports account deletion**

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-account-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AccountId | **String** | True  | Account ID.
 Body  | Accountdeleterequestinput | [**Accountdeleterequestinput**](../models/accountdeleterequestinput) |   (optional) | 

### Return type
[**Accountrequestasyncresult**](../models/accountrequestasyncresult)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Account deletion request details. | Accountrequestasyncresult
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccountDeletionRequestsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccountDeletionRequestsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AccountId = "ef38f94347e94562b5bb8424a56498d8" # String | Account ID.
$Accountdeleterequestinput = @"{"comments":"I requested this account deletion."}"@

# Delete account

try {
    Remove-AccountRequestV1 -AccountId $AccountId 
    
    # Below is a request that includes all optional parameters
    # Remove-AccountRequestV1 -AccountId $AccountId -Accountdeleterequestinput $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-AccountRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-account-deletion-requests-v1
Retrieves a paginated list of account deletion requests filtered by the provided query parameters. When the "mine" parameter is set to true, the response includes only those deletion requests that were initiated by the currently authenticated user. If "mine" is false or not specified, the endpoint returns all account deletion requests associated with the current tenant, regardless of the initiator. This allows both users and administrators to view relevant deletion requests based on their access level and intent.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-deletion-requests-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Mine | **Boolean** |   (optional) (default to $false) | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant.

### Return type
[**Accountactionrequestdto[]**](../models/accountactionrequestdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account Action Request objects. | Accountactionrequestdto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccountDeletionRequestsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccountDeletionRequestsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Mine = $true # Boolean | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional) (default to $false)

# List of Account Deletion Requests

try {
    Get-AccountDeletionRequestsV1 
    
    # Below is a request that includes all optional parameters
    # Get-AccountDeletionRequestsV1 -Limit $Limit -Offset $Offset -Count $Count -Mine $Mine  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccountDeletionRequestsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
