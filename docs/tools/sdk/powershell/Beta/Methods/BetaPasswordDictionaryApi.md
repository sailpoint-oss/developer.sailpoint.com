---
id: password-dictionary
title: PasswordDictionary
pagination_label: PasswordDictionary
sidebar_label: PasswordDictionary
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordDictionary'] 
slug: /tools/sdk/powershell/beta/methods/password-dictionary
tags: ['SDK', 'Software Development Kit', 'PasswordDictionary']
---


# PasswordDictionary

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPasswordDictionary**](#get-password-dictionary) | **GET** /password-dictionary | Get Password Dictionary
[**putPasswordDictionary**](#put-password-dictionary) | **PUT** /password-dictionary | Update Password Dictionary



## get-password-dictionary


This gets password dictionary for the organization.
A token with ORG_ADMIN authority is required to call this API.
The password dictionary file can contain lines that are:
1. comment lines - the first character is '#', can be 128 Unicode codepoints in length, and are ignored during processing
2. empty lines
3. locale line - the first line that starts with "locale=" is considered to be locale line, the rest are treated as normal content lines
4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;
        maximum length of the line is 128 Unicode codepoints


Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).
  Password dict file must contain UTF-8 characters only.

# Sample password text file

```

# Password dictionary small test file

locale=en_US

# Password dictionary prohibited words

qwerty
abcd
aaaaa
password
qazxsws

```

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A password dictionary response | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

[[Back to top]](#) 


## put-password-dictionary


This updates password dictionary for the organization.
A token with ORG_ADMIN authority is required to call this API.
The password dictionary file can contain lines that are:
1. comment lines - the first character is '#', can be 128 Unicode codepoints in length, and are ignored during processing
2. empty lines
3. locale line - the first line that starts with "locale=" is considered to be locale line, the rest are treated as normal content lines
4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;
        maximum length of the line is 128 Unicode codepoints


Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).
  Password dict file must contain UTF-8 characters only.

# Sample password text file

```

# Password dictionary small test file

locale=en_US

# Password dictionary prohibited words

qwerty
abcd
aaaaa
password
qazxsws

```

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | File | **System.IO.FileInfo** |   (optional) | 

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully updated. | 
201 | Created. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) 

