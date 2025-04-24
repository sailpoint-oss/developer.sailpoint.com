---
id: access-profiles
title: Access_Profiles
pagination_label: Access_Profiles
sidebar_label: Access_Profiles
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Profiles', 'Access_Profiles'] 
slug: /tools/sdk/python/v3/methods/access-profiles
tags: ['SDK', 'Software Development Kit', 'Access_Profiles', 'Access_Profiles']
---

# sailpoint.v3.AccessProfilesApi
  Use this API to implement and customize access profile functionality. 
With this functionality in place, administrators can create access profiles and configure them for use throughout Identity Security Cloud, enabling users to get the access they need quickly and securely.

Access profiles group entitlements, which represent access rights on sources. 

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

Identity Security Cloud uses access profiles in many features, including the following:

- Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles.

- Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements. 

- Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile.

- Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity&#39;s role. 

In Identity Security Cloud, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones. 
Administrators can enable and disable an access profile, and they can also make the following configurations: 

- Manage Entitlements: Manage the profile&#39;s access by adding and removing entitlements. 

- Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked. 
Do not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile.

- Multiple Account Options: Define the logic Identity Security Cloud uses to provision access to an identity with multiple accounts on the source. 

Refer to [Managing Access Profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) for more information about access profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-profile**](#create-access-profile) | **POST** `/access-profiles` | Create Access Profile
[**delete-access-profile**](#delete-access-profile) | **DELETE** `/access-profiles/{id}` | Delete the specified Access Profile
[**delete-access-profiles-in-bulk**](#delete-access-profiles-in-bulk) | **POST** `/access-profiles/bulk-delete` | Delete Access Profile(s)
[**get-access-profile**](#get-access-profile) | **GET** `/access-profiles/{id}` | Get an Access Profile
[**get-access-profile-entitlements**](#get-access-profile-entitlements) | **GET** `/access-profiles/{id}/entitlements` | List Access Profile&#39;s Entitlements
[**list-access-profiles**](#list-access-profiles) | **GET** `/access-profiles` | List Access Profiles
[**patch-access-profile**](#patch-access-profile) | **PATCH** `/access-profiles/{id}` | Patch a specified Access Profile


## create-access-profile
Create Access Profile
Create an access profile.
A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles.  However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-access-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile | [**AccessProfile**](../models/access-profile) | True  | 

### Return type
[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Access profile created. | AccessProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.access_profile import AccessProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile = '''{
          "owner" : {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "entitlements" : [ {
            "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
            "id" : "2c91809773dee32014e13e122092014e",
            "type" : "ENTITLEMENT"
          }, {
            "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
            "id" : "2c91809773dee32014e13e122092014e",
            "type" : "ENTITLEMENT"
          } ],
          "created" : "2021-03-01T22:32:58.104Z",
          "description" : "Collection of entitlements to read/write the employee database",
          "source" : {
            "name" : "ODS-AD-SOURCE",
            "id" : "2c91809773dee3610173fdb0b6061ef4",
            "type" : "SOURCE"
          },
          "enabled" : true,
          "revocationRequestConfig" : {
            "approvalSchemes" : [ {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            } ]
          },
          "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
          "accessRequestConfig" : {
            "commentsRequired" : true,
            "reauthorizationRequired" : true,
            "approvalSchemes" : [ {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "denialCommentsRequired" : true
          },
          "name" : "Employee-database-read-write",
          "provisioningCriteria" : {
            "children" : [ {
              "children" : [ {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              }, {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              } ],
              "attribute" : "email",
              "operation" : "EQUALS",
              "value" : "carlee.cert1c9f9b6fd@mailinator.com"
            }, {
              "children" : [ {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              }, {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              } ],
              "attribute" : "email",
              "operation" : "EQUALS",
              "value" : "carlee.cert1c9f9b6fd@mailinator.com"
            } ],
            "attribute" : "email",
            "operation" : "EQUALS",
            "value" : "carlee.cert1c9f9b6fd@mailinator.com"
          },
          "modified" : "2021-03-02T20:22:28.104Z",
          "id" : "2c91808a7190d06e01719938fcd20792",
          "requestable" : true
        }''' # AccessProfile | 

    try:
        # Create Access Profile
        new_access_profile = AccessProfile.from_json(access_profile)
        results = AccessProfilesApi(api_client).create_access_profile(access_profile=new_access_profile)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).create_access_profile(new_access_profile)
        print("The response of AccessProfilesApi->create_access_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->create_access_profile: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-profile
Delete the specified Access Profile
This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-access-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Access Profile to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Returned when an access profile cannot be deleted as it&#39;s being used. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the Access Profile to delete # str | ID of the Access Profile to delete

    try:
        # Delete the specified Access Profile
        
        AccessProfilesApi(api_client).delete_access_profile(id=id)
        # Below is a request that includes all optional parameters
        # AccessProfilesApi(api_client).delete_access_profile(id)
    except Exception as e:
        print("Exception when calling AccessProfilesApi->delete_access_profile: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-profiles-in-bulk
Delete Access Profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-access-profiles-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile_bulk_delete_request | [**AccessProfileBulkDeleteRequest**](../models/access-profile-bulk-delete-request) | True  | 

### Return type
[**AccessProfileBulkDeleteResponse**](../models/access-profile-bulk-delete-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returned only if **bestEffortOnly** is **false**, and one or more Access Profiles are in use. | AccessProfileBulkDeleteResponse |  -  |
202 | Returned if at least one deletion will be performed. | AccessProfileBulkDeleteResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.access_profile_bulk_delete_request import AccessProfileBulkDeleteRequest
from sailpoint.v3.models.access_profile_bulk_delete_response import AccessProfileBulkDeleteResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_bulk_delete_request = '''{
          "accessProfileIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ],
          "bestEffortOnly" : true
        }''' # AccessProfileBulkDeleteRequest | 

    try:
        # Delete Access Profile(s)
        new_access_profile_bulk_delete_request = AccessProfileBulkDeleteRequest.from_json(access_profile_bulk_delete_request)
        results = AccessProfilesApi(api_client).delete_access_profiles_in_bulk(access_profile_bulk_delete_request=new_access_profile_bulk_delete_request)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).delete_access_profiles_in_bulk(new_access_profile_bulk_delete_request)
        print("The response of AccessProfilesApi->delete_access_profiles_in_bulk:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->delete_access_profiles_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## get-access-profile
Get an Access Profile
This API returns an Access Profile by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-access-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Access Profile

### Return type
[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An AccessProfile | AccessProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.access_profile import AccessProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180837ca6693d017ca8d097500149' # str | ID of the Access Profile # str | ID of the Access Profile

    try:
        # Get an Access Profile
        
        results = AccessProfilesApi(api_client).get_access_profile(id=id)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).get_access_profile(id)
        print("The response of AccessProfilesApi->get_access_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->get_access_profile: %s\n" % e)
```



[[Back to top]](#) 

## get-access-profile-entitlements
List Access Profile's Entitlements
Use this API to get a list of an access profile's entitlements. 
A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-access-profile-entitlements)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the access profile containing the entitlements.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names. 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**

### Return type
[**List[Entitlement]**](../models/entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlements. | List[Entitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.entitlement import Entitlement
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the access profile containing the entitlements. # str | ID of the access profile containing the entitlements.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'attribute eq \"memberOf\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

    try:
        # List Access Profile's Entitlements
        
        results = AccessProfilesApi(api_client).get_access_profile_entitlements(id=id)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).get_access_profile_entitlements(id, limit, offset, count, filters, sorters)
        print("The response of AccessProfilesApi->get_access_profile_entitlements:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->get_access_profile_entitlements: %s\n" % e)
```



[[Back to top]](#) 

## list-access-profiles
List Access Profiles
Get a list of access profiles. 
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-access-profiles)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | for_subadmin | **str** |   (optional) | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names. 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | for_segment_ids | **str** |   (optional) | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error.
  Query | include_unsegmented | **bool** |   (optional) (default to True) | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error.

### Return type
[**List[AccessProfile]**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access profiles. | List[AccessProfile] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.access_profile import AccessProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    for_subadmin = '8c190e6787aa4ed9a90bd9d5344523fb' # str | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # str | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"SailPoint Support\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    for_segment_ids = '0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d' # str | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # str | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    include_unsegmented = True # bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to True) # bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to True)

    try:
        # List Access Profiles
        
        results = AccessProfilesApi(api_client).list_access_profiles()
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).list_access_profiles(for_subadmin, limit, offset, count, filters, sorters, for_segment_ids, include_unsegmented)
        print("The response of AccessProfilesApi->list_access_profiles:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->list_access_profiles: %s\n" % e)
```



[[Back to top]](#) 

## patch-access-profile
Patch a specified Access Profile
This API updates an existing Access Profile. The following fields are patchable:

**name**

**description**

**enabled**

**owner**

**requestable**

**accessRequestConfig**

**revokeRequestConfig**

**segments**

**entitlements**

**provisioningCriteria**

**source** (must be updated with entitlements belonging to new source in the same API call)

If you need to change the `source` of the access profile, you can do so only if you update the `entitlements` in the same API call.  The new entitlements can only come from the target source that you want to change to.  Look for the example "Replace Source" in the examples dropdown.

A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-access-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Access Profile to patch
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the Access Profile as updated. | AccessProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.access_profiles_api import AccessProfilesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.access_profile import AccessProfile
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the Access Profile to patch # str | ID of the Access Profile to patch
    json_patch_operation = '''[{op=add, path=/entitlements, value=[{id=2c9180857725c14301772a93bb77242d, type=ENTITLEMENT, name=AD User Group}]}]''' # List[JsonPatchOperation] | 

    try:
        # Patch a specified Access Profile
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = AccessProfilesApi(api_client).patch_access_profile(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).patch_access_profile(id, new_json_patch_operation)
        print("The response of AccessProfilesApi->patch_access_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->patch_access_profile: %s\n" % e)
```



[[Back to top]](#) 



