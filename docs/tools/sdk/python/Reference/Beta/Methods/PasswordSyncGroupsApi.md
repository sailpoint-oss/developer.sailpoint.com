---
id: beta-password-sync-groups
title: Password_Sync_Groups
pagination_label: Password_Sync_Groups
sidebar_label: Password_Sync_Groups
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Password_Sync_Groups', 'BetaPassword_Sync_Groups'] 
slug: /tools/sdk/python/beta/methods/password-sync-groups
tags: ['SDK', 'Software Development Kit', 'Password_Sync_Groups', 'BetaPassword_Sync_Groups']
---

# sailpoint.beta.PasswordSyncGroupsApi
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

- At least one password policy. Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/policies.html) for more information about password policies.

In the Admin panel in Identity Security Cloud, administrators can use the Password Mgmt dropdown menu to select Sync Groups.
To create a sync group, administrators must provide a name, choose a password policy to be enforced across the sources in the sync group, and select the sources to include in the sync group.

Administrators can also delete sync groups in Identity Security Cloud, but they should know the following before they do:

- Passwords related to the associated sources will become independent, so changing one will not change the others anymore.

- Passwords for the sources&#39; connected applications will also become independent.

- Password policies assigned to the sync group are then assigned directly to the associated sources.
To change the password policy for a source, administrators must edit it directly.

Once the password sync group has been created, users can update the password for the group in Password Manager.

Refer to [Managing Password Sync Groups](https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html) for more information about password sync groups.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-sync-group**](#create-password-sync-group) | **POST** `/password-sync-groups` | Create password sync group
[**delete-password-sync-group**](#delete-password-sync-group) | **DELETE** `/password-sync-groups/{id}` | Delete password sync group by id
[**get-password-sync-group**](#get-password-sync-group) | **GET** `/password-sync-groups/{id}` | Get password sync group by id
[**get-password-sync-groups**](#get-password-sync-groups) | **GET** `/password-sync-groups` | Get password sync group list
[**update-password-sync-group**](#update-password-sync-group) | **PUT** `/password-sync-groups/{id}` | Update password sync group by id


## create-password-sync-group
Create password sync group
This API creates a password sync group based on the specifications provided.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-password-sync-group)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | password_sync_group | [**PasswordSyncGroup**](../models/password-sync-group) | True  | 

### Return type
[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password sync group. | PasswordSyncGroup |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.password_sync_groups_api import PasswordSyncGroupsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_sync_group import PasswordSyncGroup
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    password_sync_group = '''{
          "created" : "2023-03-16T04:00:00Z",
          "name" : "Password Sync Group 1",
          "modified" : "2023-03-16T04:00:00Z",
          "passwordPolicyId" : "2c91808d744ba0ce01746f93b6204501",
          "id" : "6881f631-3bd5-4213-9c75-8e05cc3e35dd",
          "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
        }''' # PasswordSyncGroup | 

    try:
        # Create password sync group
        new_password_sync_group = PasswordSyncGroup.from_json(password_sync_group)
        results = PasswordSyncGroupsApi(api_client).create_password_sync_group(password_sync_group=new_password_sync_group)
        # Below is a request that includes all optional parameters
        # results = PasswordSyncGroupsApi(api_client).create_password_sync_group(new_password_sync_group)
        print("The response of PasswordSyncGroupsApi->create_password_sync_group:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordSyncGroupsApi->create_password_sync_group: %s\n" % e)
```



[[Back to top]](#) 

## delete-password-sync-group
Delete password sync group by id
This API deletes the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-password-sync-group)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of password sync group to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.password_sync_groups_api import PasswordSyncGroupsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '6881f631-3bd5-4213-9c75-8e05cc3e35dd' # str | The ID of password sync group to delete. # str | The ID of password sync group to delete.

    try:
        # Delete password sync group by id
        
        PasswordSyncGroupsApi(api_client).delete_password_sync_group(id=id)
        # Below is a request that includes all optional parameters
        # PasswordSyncGroupsApi(api_client).delete_password_sync_group(id)
    except Exception as e:
        print("Exception when calling PasswordSyncGroupsApi->delete_password_sync_group: %s\n" % e)
```



[[Back to top]](#) 

## get-password-sync-group
Get password sync group by id
This API returns the sync group for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-password-sync-group)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of password sync group to retrieve.

### Return type
[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password sync group. | PasswordSyncGroup |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.password_sync_groups_api import PasswordSyncGroupsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_sync_group import PasswordSyncGroup
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '6881f631-3bd5-4213-9c75-8e05cc3e35dd' # str | The ID of password sync group to retrieve. # str | The ID of password sync group to retrieve.

    try:
        # Get password sync group by id
        
        results = PasswordSyncGroupsApi(api_client).get_password_sync_group(id=id)
        # Below is a request that includes all optional parameters
        # results = PasswordSyncGroupsApi(api_client).get_password_sync_group(id)
        print("The response of PasswordSyncGroupsApi->get_password_sync_group:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordSyncGroupsApi->get_password_sync_group: %s\n" % e)
```



[[Back to top]](#) 

## get-password-sync-groups
Get password sync group list
This API returns a list of password sync groups.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-password-sync-groups)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[PasswordSyncGroup]**](../models/password-sync-group)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of password sync groups. | List[PasswordSyncGroup] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.password_sync_groups_api import PasswordSyncGroupsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_sync_group import PasswordSyncGroup
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Get password sync group list
        
        results = PasswordSyncGroupsApi(api_client).get_password_sync_groups()
        # Below is a request that includes all optional parameters
        # results = PasswordSyncGroupsApi(api_client).get_password_sync_groups(limit, offset, count)
        print("The response of PasswordSyncGroupsApi->get_password_sync_groups:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordSyncGroupsApi->get_password_sync_groups: %s\n" % e)
```



[[Back to top]](#) 

## update-password-sync-group
Update password sync group by id
This API updates the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-password-sync-group)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of password sync group to update.
 Body  | password_sync_group | [**PasswordSyncGroup**](../models/password-sync-group) | True  | 

### Return type
[**PasswordSyncGroup**](../models/password-sync-group)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password sync group. | PasswordSyncGroup |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.password_sync_groups_api import PasswordSyncGroupsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_sync_group import PasswordSyncGroup
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '6881f631-3bd5-4213-9c75-8e05cc3e35dd' # str | The ID of password sync group to update. # str | The ID of password sync group to update.
    password_sync_group = '''{
          "created" : "2023-03-16T04:00:00Z",
          "name" : "Password Sync Group 1",
          "modified" : "2023-03-16T04:00:00Z",
          "passwordPolicyId" : "2c91808d744ba0ce01746f93b6204501",
          "id" : "6881f631-3bd5-4213-9c75-8e05cc3e35dd",
          "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
        }''' # PasswordSyncGroup | 

    try:
        # Update password sync group by id
        new_password_sync_group = PasswordSyncGroup.from_json(password_sync_group)
        results = PasswordSyncGroupsApi(api_client).update_password_sync_group(id=id, password_sync_group=new_password_sync_group)
        # Below is a request that includes all optional parameters
        # results = PasswordSyncGroupsApi(api_client).update_password_sync_group(id, new_password_sync_group)
        print("The response of PasswordSyncGroupsApi->update_password_sync_group:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordSyncGroupsApi->update_password_sync_group: %s\n" % e)
```



[[Back to top]](#) 



