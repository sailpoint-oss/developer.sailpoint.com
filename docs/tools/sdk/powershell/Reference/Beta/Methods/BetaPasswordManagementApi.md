---
id: beta-password-management
title: PasswordManagement
pagination_label: PasswordManagement
sidebar_label: PasswordManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordManagement', 'BetaPasswordManagement'] 
slug: /tools/sdk/powershell/beta/methods/password-management
tags: ['SDK', 'Software Development Kit', 'PasswordManagement', 'BetaPasswordManagement']
---

# PasswordManagement
  Use this API to implement password management functionality.
With this functionality in place, users can manage their identity passwords for all their applications.

In Identity Security Cloud, users can select their names in the upper right corner of the page and use the drop-down menu to select Password Manager.
Password Manager lists the user&#39;s identity&#39;s applications, possibly grouped to share passwords.
Users can then select &#39;Change Password&#39; to update their passwords.

Grouping passwords allows users to update their passwords more broadly, rather than requiring them to update each password individually.
Password Manager may list the applications and sources in the following groups:

- Password Group: This refers to a group of applications that share a password.
For example, a user can use the same password for Google Drive, Google Mail, and YouTube.
Updating the password for the password group updates the password for all its included applications.

- Multi-Application Source: This refers to a source with multiple applications that share a password.
For example, a user can have a source, G Suite, that includes the Google Calendar, Google Drive, and Google Mail applications.
Updating the password for the multi-application source updates the password for all its included applications.

- Applications: These are applications that do not share passwords with other applications.

An organization may require some authentication for users to update their passwords.
Users may be required to answer security questions or use a third-party authenticator before they can confirm their updates.

Refer to [Managing Passwords](https://documentation.sailpoint.com/saas/user-help/accounts/passwords.html) for more information about password management.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaDigitToken**](#create-digit-token) | **POST** `/generate-password-reset-token/digit` | Generate a digit token
[**Get-BetaIdentityPasswordChangeStatus**](#get-identity-password-change-status) | **GET** `/password-change-status/{id}` | Get Password Change Request Status
[**Search-BetaPasswordInfo**](#query-password-info) | **POST** `/query-password-info` | Query Password Info
[**Set-BetaIdentityPassword**](#set-identity-password) | **POST** `/set-password` | Set Identity&#39;s Password


## create-digit-token
This API is used to generate a digit token for password management. Requires authorization scope of "idn:password-digit-token:create".

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-digit-token)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordDigitTokenReset | [**PasswordDigitTokenReset**](../models/password-digit-token-reset) | True  | 

### Return type
[**PasswordDigitToken**](../models/password-digit-token)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The digit token for password management. | PasswordDigitToken
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
$PasswordDigitTokenReset = @"{
  "durationMinutes" : 5,
  "length" : 8,
  "userId" : "Abby.Smith"
}"@

# Generate a digit token

try {
    $Result = ConvertFrom-JsonToPasswordDigitTokenReset -Json $PasswordDigitTokenReset
    New-BetaDigitToken -BetaPasswordDigitTokenReset $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaDigitToken -BetaPasswordDigitTokenReset $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaDigitToken"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-password-change-status
This API returns the status of a password change request. A token with identity owner or trusted API client application authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-password-change-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | 

### Return type
[**PasswordStatus**](../models/password-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the password change request | PasswordStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "MyId" # String | 

# Get Password Change Request Status

try {
    Get-BetaIdentityPasswordChangeStatus -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityPasswordChangeStatus -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityPasswordChangeStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## query-password-info
This API is used to query password related information. 

A token with [API authority](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow) 
is required to call this API.  "API authority" refers to a token that only has the "client_credentials" 
grant type, and therefore no user context. A [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) 
or a token generated with the [authorization_code](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow) 
grant type will **NOT** work on this endpoint, and a `403 Forbidden` response 
will be returned.


[API Spec](https://developer.sailpoint.com/docs/api/beta/query-password-info)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordInfoQueryDTO | [**PasswordInfoQueryDTO**](../models/password-info-query-dto) | True  | 

### Return type
[**PasswordInfo**](../models/password-info)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password info. | PasswordInfo
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
$PasswordInfoQueryDTO = @"{
  "sourceName" : "My-AD",
  "userName" : "Abby.Smith"
}"@

# Query Password Info

try {
    $Result = ConvertFrom-JsonToPasswordInfoQueryDTO -Json $PasswordInfoQueryDTO
    Search-BetaPasswordInfo -BetaPasswordInfoQueryDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Search-BetaPasswordInfo -BetaPasswordInfoQueryDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-BetaPasswordInfo"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-identity-password
This API is used to set a password for an identity. 

An identity can change their own password (as well as any of their accounts' passwords) if they use a token generated by their ISC user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or ["authorization_code" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).

A token with [API authority](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow) can be used to change **any** identity's password or the password of any of the identity's accounts. 
"API authority" refers to a token that only has the "client_credentials" grant type.

>**Note: If you want to set an identity's source account password, you must enable `PASSWORD` as one of the source's features. You can use the [PATCH Source endpoint](https://developer.sailpoint.com/docs/api/v3/update-source) to add the `PASSWORD` feature.**

You can use this endpoint to generate an `encryptedPassword` (RSA encrypted using publicKey). 
To do so, follow these steps:

1. Use [Query Password Info](https://developer.sailpoint.com/idn/api/v3/query-password-info) to get the following information: `identityId`, `sourceId`, `publicKeyId`, `publicKey`, `accounts`, and `policies`. 

2. Choose an account from the previous response that you will provide as an `accountId` in your request to set an encrypted password. 

3. Use [Set Identity's Password](https://developer.sailpoint.com/idn/api/v3/set-password) and provide the information you got from your earlier query. Then add this code to your request to get the encrypted password:

```java
import javax.crypto.Cipher;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;
import java util.Base64;

String encrypt(String publicKey, String toEncrypt) throws Exception {
  byte[] publicKeyBytes = Base64.getDecoder().decode(publicKey);
  byte[] encryptedBytes = encryptRsa(publicKeyBytes, toEncrypt.getBytes("UTF-8"));
  return Base64.getEncoder().encodeToString(encryptedBytes);
}

private byte[] encryptRsa(byte[] publicKeyBytes, byte[] toEncryptBytes) throws Exception {
  PublicKey key = KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes));
  String transformation = "RSA/ECB/PKCS1Padding";
  Cipher cipher = Cipher.getInstance(transformation);
  cipher.init(1, key);
  return cipher.doFinal(toEncryptBytes);
}
```    

In this example, `toEncrypt` refers to the plain text password you are setting and then encrypting, and the `publicKey` refers to the publicKey you got from the first request you sent. 

You can then use [Get Password Change Request Status](https://developer.sailpoint.com/idn/api/v3/get-password-change-status) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password. 


[API Spec](https://developer.sailpoint.com/docs/api/beta/set-identity-password)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordChangeRequest | [**PasswordChangeRequest**](../models/password-change-request) | True  | 

### Return type
[**PasswordChangeResponse**](../models/password-change-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Reference to the password change. | PasswordChangeResponse
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
$PasswordChangeRequest = @"{
  "sourceId" : "8a807d4c73c545510173c545d4b60246",
  "accountId" : "CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com",
  "identityId" : "8a807d4c73c545510173c545f0a002ff",
  "publicKeyId" : "YWQ2NjQ4MTItZjY0NC00MWExLWFjMjktOGNmMzU3Y2VlNjk2",
  "encryptedPassword" : "XzN+YwKgr2C+InkMYFMBG3UtjMEw5ZIql/XFlXo8cJNeslmkplx6vn4kd4/43IF9STBk5RnzR6XmjpEO+FwHDoiBwYZAkAZK/Iswxk4OdybG6Y4MStJCOCiK8osKr35IMMSV/mbO4wAeltoCk7daTWzTGLiI6UaT5tf+F2EgdjJZ7YqM8W8r7aUWsm3p2Xt01Y46ZRx0QaM91QruiIx2rECFT2pUO0wr+7oQ77jypATyGWRtADsu3YcvCk/6U5MqCnXMzKBcRas7NnZdSL/d5H1GglVGz3VLPMaivG4/oL4chOMmFCRl/zVsGxZ9RhN8rxsRGFFKn+rhExTi+bax3A=="
}"@

# Set Identity's Password

try {
    $Result = ConvertFrom-JsonToPasswordChangeRequest -Json $PasswordChangeRequest
    Set-BetaIdentityPassword -BetaPasswordChangeRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaIdentityPassword -BetaPasswordChangeRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaIdentityPassword"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
