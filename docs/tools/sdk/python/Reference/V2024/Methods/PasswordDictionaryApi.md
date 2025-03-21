---
id: v2024-password-dictionary
title: Password_Dictionary
pagination_label: Password_Dictionary
sidebar_label: Password_Dictionary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Password_Dictionary', 'V2024Password_Dictionary'] 
slug: /tools/sdk/python/v2024/methods/password-dictionary
tags: ['SDK', 'Software Development Kit', 'Password_Dictionary', 'V2024Password_Dictionary']
---

# sailpoint.v2024.PasswordDictionaryApi
  Use this API to implement password dictionary functionality.  
With this functionality in place, administrators can create password dictionaries to prevent users from using certain words or characters in their passwords. 

A password dictionary is a list of words or characters that users are prevented from including in their passwords. 
This can help protect users from themselves and force them to create passwords that are not easy to break. 

A password dictionary must meet the following requirements to for the API to handle them correctly: 

- It must be in .txt format.

- All characters must be UTF-8 characters. 

- Each line must contain a single word or character with no spaces or whitespace characters.

- It must contain at least one line other than the locale string.

- Each line must not exceed 128 characters.

- The file must not exceed 2500 lines. 

Administrators should also consider the following when they create their dictionaries: 

- Lines starting with a # represent comments.

- All words in the password dictionary are case-insensitive. 
For example, adding the word &quot;password&quot; to the dictionary also disallows the following: PASSWORD, Password, and PassWord.

- The dictionary uses substring matching. 
For example, adding the word &quot;spring&quot; to the dictionary also disallows the following: Spring124, 345SprinG, and 8spring.
Users can then select &#39;Change Password&#39; to update their passwords. 

Administrators must do the following to create a password dictionary: 

- Create the text file that will contain the prohibited password values.

- If the dictionary is not in English, they must add a locale string to the top line: locale:&#x60;languageCode&#x60;_&#x60;countryCode&#x60;

The languageCode value refers to the language&#39;s 2-letter ISO 639-1 code.
The countryCode value refers to the country&#39;s 2-letter ISO 3166-1 code.

Refer to this list https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html to see all the available ISO 639-1 language codes and ISO 3166-1 country codes.

- Upload the .txt file to Identity Security Cloud with [Update Password Dictionary](https://developer.sailpoint.com/docs/api/v2024/put-password-dictionary). Uploading a new file always overwrites the previous dictionary file.

Administrators can then specify which password policies check new passwords against the password dictionary by doing the following: In the Admin panel, they can use the Password Mgmt dropdown menu to select Policies, select the policy, and select the &#39;Prevent use of words in this site&#39;s password dictionary&#39; checkbox beside it.

Refer to [Configuring Advanced Password Management Options](https://documentation.sailpoint.com/saas/help/pwd/adv_config.html) for more information about password dictionaries.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-password-dictionary**](#get-password-dictionary) | **GET** `/password-dictionary` | Get Password Dictionary
[**put-password-dictionary**](#put-password-dictionary) | **PUT** `/password-dictionary` | Update Password Dictionary


## get-password-dictionary
Get Password Dictionary
This gets password dictionary for the organization.
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-password-dictionary)

### Parameters 
This endpoint does not need any parameter. 

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A password dictionary response | str |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

### Example

```python
from sailpoint.v2024.api.password_dictionary_api import PasswordDictionaryApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get Password Dictionary
        
        results = PasswordDictionaryApi(api_client).get_password_dictionary()
        # Below is a request that includes all optional parameters
        # results = PasswordDictionaryApi(api_client).get_password_dictionary()
        print("The response of PasswordDictionaryApi->get_password_dictionary:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling PasswordDictionaryApi->get_password_dictionary: %s\n" % e)
```



[[Back to top]](#) 

## put-password-dictionary
Update Password Dictionary
This updates password dictionary for the organization.
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-password-dictionary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | file | **bytearray** |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully updated. |  |  -  |
201 | Created. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.password_dictionary_api import PasswordDictionaryApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    file = None # bytearray |  (optional) # bytearray |  (optional)

    try:
        # Update Password Dictionary
        
        PasswordDictionaryApi(api_client).put_password_dictionary()
        # Below is a request that includes all optional parameters
        # PasswordDictionaryApi(api_client).put_password_dictionary(file)
    except Exception as e:
        print("Exception when calling PasswordDictionaryApi->put_password_dictionary: %s\n" % e)
```



[[Back to top]](#) 



