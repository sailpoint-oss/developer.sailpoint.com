# Access_Profiles

# sailpoint.access_profiles.AccessProfilesApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-profile-v1**](#create-access-profile-v1) | **POST** `/access-profiles/v1` | Create access profile
[**delete-access-profile-v1**](#delete-access-profile-v1) | **DELETE** `/access-profiles/v1/{id}` | Delete the specified access profile
[**delete-access-profiles-in-bulk-v1**](#delete-access-profiles-in-bulk-v1) | **POST** `/access-profiles/v1/bulk-delete` | Delete access profile(s)
[**delete-metadata-from-access-profile-by-key-and-value-v1**](#delete-metadata-from-access-profile-by-key-and-value-v1) | **DELETE** `/access-profiles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from access profile
[**get-access-profile-entitlements-v1**](#get-access-profile-entitlements-v1) | **GET** `/access-profiles/v1/{id}/entitlements` | List access profile&#39;s entitlements
[**get-access-profile-v1**](#get-access-profile-v1) | **GET** `/access-profiles/v1/{id}` | Get an access profile
[**list-access-profiles-v1**](#list-access-profiles-v1) | **GET** `/access-profiles/v1` | List access profiles
[**patch-access-profile-v1**](#patch-access-profile-v1) | **PATCH** `/access-profiles/v1/{id}` | Patch a specified access profile
[**search-access-profiles-by-filter-v1**](#search-access-profiles-by-filter-v1) | **POST** `/access-profiles/v1/filter` | Filter access profiles by metadata
[**update-access-profiles-in-bulk-v1**](#update-access-profiles-in-bulk-v1) | **POST** `/access-profiles/v1/bulk-update-requestable` | Update access profile(s) requestable field.
[**update-access-profiles-metadata-by-filter-v1**](#update-access-profiles-metadata-by-filter-v1) | **POST** `/access-profiles/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**update-access-profiles-metadata-by-ids-v1**](#update-access-profiles-metadata-by-ids-v1) | **POST** `/access-profiles/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**update-access-profiles-metadata-by-query-v1**](#update-access-profiles-metadata-by-query-v1) | **POST** `/access-profiles/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query
[**update-attribute-key-and-value-to-access-profile-v1**](#update-attribute-key-and-value-to-access-profile-v1) | **POST** `/access-profiles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to access profile


## create-access-profile-v1
Create access profile
Create an access profile.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with access profile access requests.
A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-profile-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile import AccessProfile
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
          "additionalOwners" : [ {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          }, {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          } ],
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
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "denialCommentsRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 6,
              "timeUnit" : "MONTHS"
            }
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
          "accessModelMetadata" : {
            "attributes" : [ {
              "key" : "iscPrivacy",
              "name" : "Privacy",
              "multiselect" : false,
              "status" : "active",
              "type" : "governance",
              "objectTypes" : [ "all" ],
              "description" : "Specifies the level of privacy associated with an access item.",
              "values" : [ {
                "value" : "public",
                "name" : "Public",
                "status" : "active"
              } ]
            } ]
          },
          "id" : "2c91808a7190d06e01719938fcd20792",
          "requestable" : true
        }''' # AccessProfile | 

    try:
        # Create access profile
        new_access_profile = AccessProfile.from_json(access_profile)
        results = AccessProfilesApi(api_client).create_access_profile_v1(access_profile=new_access_profile)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).create_access_profile_v1(new_access_profile)
        print("The response of AccessProfilesApi->create_access_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->create_access_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-profile-v1
Delete the specified access profile
This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profile-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the Access Profile to delete # str | ID of the Access Profile to delete

    try:
        # Delete the specified access profile
        
        AccessProfilesApi(api_client).delete_access_profile_v1(id=id)
        # Below is a request that includes all optional parameters
        # AccessProfilesApi(api_client).delete_access_profile_v1(id)
    except Exception as e:
        print("Exception when calling AccessProfilesApi->delete_access_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-access-profiles-in-bulk-v1
Delete access profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profiles-in-bulk-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile_bulk_delete_request import AccessProfileBulkDeleteRequest
from sailpoint.access_profiles.models.access_profile_bulk_delete_response import AccessProfileBulkDeleteResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_bulk_delete_request = '''{
          "accessProfileIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ],
          "bestEffortOnly" : true
        }''' # AccessProfileBulkDeleteRequest | 

    try:
        # Delete access profile(s)
        new_access_profile_bulk_delete_request = AccessProfileBulkDeleteRequest.from_json(access_profile_bulk_delete_request)
        results = AccessProfilesApi(api_client).delete_access_profiles_in_bulk_v1(access_profile_bulk_delete_request=new_access_profile_bulk_delete_request)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).delete_access_profiles_in_bulk_v1(new_access_profile_bulk_delete_request)
        print("The response of AccessProfilesApi->delete_access_profiles_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->delete_access_profiles_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-metadata-from-access-profile-by-key-and-value-v1
Remove metadata from access profile
This API removes a single Access Model Metadata value from an access profile by attribute key and attribute value.

[API Spec](https://developer.sailpoint.com/docs/api/delete-metadata-from-access-profile-by-key-and-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The access profile's ID.
Path   | attribute_key | **str** | True  | Technical name of the Attribute.
Path   | attribute_value | **str** | True  | Technical name of the Attribute Value.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Request accepted |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808c74ff913f0175097daa9d59cd' # str | The access profile's ID. # str | The access profile's ID.
    attribute_key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    attribute_value = 'public' # str | Technical name of the Attribute Value. # str | Technical name of the Attribute Value.

    try:
        # Remove metadata from access profile
        
        AccessProfilesApi(api_client).delete_metadata_from_access_profile_by_key_and_value_v1(id=id, attribute_key=attribute_key, attribute_value=attribute_value)
        # Below is a request that includes all optional parameters
        # AccessProfilesApi(api_client).delete_metadata_from_access_profile_by_key_and_value_v1(id, attribute_key, attribute_value)
    except Exception as e:
        print("Exception when calling AccessProfilesApi->delete_metadata_from_access_profile_by_key_and_value_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-profile-entitlements-v1
List access profile's entitlements
Use this API to get a list of an access profile's entitlements. 
A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-entitlements-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.entitlement import Entitlement
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
        # List access profile's entitlements
        
        results = AccessProfilesApi(api_client).get_access_profile_entitlements_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).get_access_profile_entitlements_v1(id, limit, offset, count, filters, sorters)
        print("The response of AccessProfilesApi->get_access_profile_entitlements_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->get_access_profile_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-profile-v1
Get an access profile
This API returns an Access Profile by its ID.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with access profile access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile import AccessProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180837ca6693d017ca8d097500149' # str | ID of the Access Profile # str | ID of the Access Profile

    try:
        # Get an access profile
        
        results = AccessProfilesApi(api_client).get_access_profile_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).get_access_profile_v1(id)
        print("The response of AccessProfilesApi->get_access_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->get_access_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-access-profiles-v1
List access profiles
Get a list of access profiles.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/list-access-profiles-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile import AccessProfile
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
        # List access profiles
        
        results = AccessProfilesApi(api_client).list_access_profiles_v1()
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).list_access_profiles_v1(for_subadmin, limit, offset, count, filters, sorters, for_segment_ids, include_unsegmented)
        print("The response of AccessProfilesApi->list_access_profiles_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->list_access_profiles_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-access-profile-v1
Patch a specified access profile
This API updates an existing Access Profile. The following fields are patchable:

**name**

**description**

**enabled**

**owner**

**additionalOwners**

**requestable**

**accessRequestConfig**

**revokeRequestConfig**

**segments**

**entitlements**

**provisioningCriteria**

**source** (must be updated with entitlements belonging to new source in the same API call)

If you need to change the `source` of the access profile, you can do so only if you update the `entitlements` in the same API call.  The new entitlements can only come from the target source that you want to change to.  Look for the example "Replace Source" in the examples dropdown.

Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with access profile access requests.

A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

[API Spec](https://developer.sailpoint.com/docs/api/patch-access-profile-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile import AccessProfile
from sailpoint.access_profiles.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c91808a7813090a017814121919ecca' # str | ID of the Access Profile to patch # str | ID of the Access Profile to patch
    json_patch_operation = '''[{"op":"add","path":"/entitlements","value":[{"id":"2c9180857725c14301772a93bb77242d","type":"ENTITLEMENT","name":"AD User Group"}]}]''' # List[JsonPatchOperation] | 

    try:
        # Patch a specified access profile
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = AccessProfilesApi(api_client).patch_access_profile_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).patch_access_profile_v1(id, new_json_patch_operation)
        print("The response of AccessProfilesApi->patch_access_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->patch_access_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## search-access-profiles-by-filter-v1
Filter access profiles by metadata
Get a list of access profiles filtered by Access Model Metadata and by filter expression. Filtering is supported by filter expression, by metadata attribute key and values, or by both together.

[API Spec](https://developer.sailpoint.com/docs/api/search-access-profiles-by-filter-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile_list_filter_dto | [**AccessProfileListFilterDTO**](../models/access-profile-list-filter-dto) | True  | 
  Query | for_subadmin | **str** |   (optional) | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error.
  Query | limit | **int** |   (optional) (default to 50) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**
  Query | for_segment_ids | **str** |   (optional) | Filters the returned list to those access profiles assigned to the specified segment IDs.
  Query | include_unsegmented | **bool** |   (optional) (default to True) | Whether the returned list includes unsegmented access profiles.

### Return type
[**List[AccessProfile]**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access profiles matching the filter criteria. | List[AccessProfile] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile import AccessProfile
from sailpoint.access_profiles.models.access_profile_list_filter_dto import AccessProfileListFilterDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_list_filter_dto = '''{
          "ammKeyValues" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "secret" ]
          } ],
          "filters" : "requestable eq false"
        }''' # AccessProfileListFilterDTO | 
    for_subadmin = '8c190e6787aa4ed9a90bd9d5344523fb' # str | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # str | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit = 50 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    for_segment_ids = '0b5c9f2d-1e1b-4b2f-9b1a-0e7f4a6c2d3e' # str | Filters the returned list to those access profiles assigned to the specified segment IDs. (optional) # str | Filters the returned list to those access profiles assigned to the specified segment IDs. (optional)
    include_unsegmented = True # bool | Whether the returned list includes unsegmented access profiles. (optional) (default to True) # bool | Whether the returned list includes unsegmented access profiles. (optional) (default to True)

    try:
        # Filter access profiles by metadata
        new_access_profile_list_filter_dto = AccessProfileListFilterDto.from_json(access_profile_list_filter_dto)
        results = AccessProfilesApi(api_client).search_access_profiles_by_filter_v1(access_profile_list_filter_dto=new_access_profile_list_filter_dto)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).search_access_profiles_by_filter_v1(new_access_profile_list_filter_dto, for_subadmin, limit, offset, count, sorters, for_segment_ids, include_unsegmented)
        print("The response of AccessProfilesApi->search_access_profiles_by_filter_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->search_access_profiles_by_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-profiles-in-bulk-v1
Update access profile(s) requestable field.
This API initiates a bulk update of field requestable for one or more Access Profiles.

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
 A SOURCE_SUBADMIN may only use this API to update Access Profiles which are associated with Sources they are able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile_bulk_update_request_inner | [**[]AccessProfileBulkUpdateRequestInner**](../models/access-profile-bulk-update-request-inner) | True  | 

### Return type
[**List[AccessProfileUpdateItem]**](../models/access-profile-update-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | List of updated and not updated Access Profiles. | List[AccessProfileUpdateItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
412 | Precondition Failed - Returned in response if API/Feature not enabled for an organization. | UpdateAccessProfilesInBulkV1412Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile_bulk_update_request_inner import AccessProfileBulkUpdateRequestInner
from sailpoint.access_profiles.models.access_profile_update_item import AccessProfileUpdateItem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_bulk_update_request_inner = '''[{"id":"464ae7bf-791e-49fd-b746-06a2e4a89635","requestable":false}]''' # List[AccessProfileBulkUpdateRequestInner] | 

    try:
        # Update access profile(s) requestable field.
        new_access_profile_bulk_update_request_inner = AccessProfileBulkUpdateRequestInner.from_json(access_profile_bulk_update_request_inner)
        results = AccessProfilesApi(api_client).update_access_profiles_in_bulk_v1(access_profile_bulk_update_request_inner=new_access_profile_bulk_update_request_inner)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).update_access_profiles_in_bulk_v1(new_access_profile_bulk_update_request_inner)
        print("The response of AccessProfilesApi->update_access_profiles_in_bulk_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->update_access_profiles_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-profiles-metadata-by-filter-v1
Bulk-update metadata by filter
This API initiates a bulk update of Access Model Metadata for every access profile matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-filter-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile_metadata_bulk_update_by_filter_request | [**AccessProfileMetadataBulkUpdateByFilterRequest**](../models/access-profile-metadata-bulk-update-by-filter-request) | True  | 

### Return type
[**AccessProfileMetadataBulkUpdateResponse**](../models/access-profile-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returned if the bulk update request was created. | AccessProfileMetadataBulkUpdateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_by_filter_request import AccessProfileMetadataBulkUpdateByFilterRequest
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_response import AccessProfileMetadataBulkUpdateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_metadata_bulk_update_by_filter_request = '''{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : "requestable eq false",
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }''' # AccessProfileMetadataBulkUpdateByFilterRequest | 

    try:
        # Bulk-update metadata by filter
        new_access_profile_metadata_bulk_update_by_filter_request = AccessProfileMetadataBulkUpdateByFilterRequest.from_json(access_profile_metadata_bulk_update_by_filter_request)
        results = AccessProfilesApi(api_client).update_access_profiles_metadata_by_filter_v1(access_profile_metadata_bulk_update_by_filter_request=new_access_profile_metadata_bulk_update_by_filter_request)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).update_access_profiles_metadata_by_filter_v1(new_access_profile_metadata_bulk_update_by_filter_request)
        print("The response of AccessProfilesApi->update_access_profiles_metadata_by_filter_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->update_access_profiles_metadata_by_filter_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-profiles-metadata-by-ids-v1
Bulk-update metadata by ids
This API initiates a bulk update of Access Model Metadata for one or more access profiles by a list of access profile IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum access profile count in a single request is 3000. A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-ids-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile_metadata_bulk_update_by_id_request | [**AccessProfileMetadataBulkUpdateByIdRequest**](../models/access-profile-metadata-bulk-update-by-id-request) | True  | 

### Return type
[**AccessProfileMetadataBulkUpdateResponse**](../models/access-profile-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returned if the bulk update request was created. | AccessProfileMetadataBulkUpdateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_by_id_request import AccessProfileMetadataBulkUpdateByIdRequest
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_response import AccessProfileMetadataBulkUpdateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_metadata_bulk_update_by_id_request = '''{
          "accessProfiles" : [ "b1db89554cfa431cb8b9921ea38d9367" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }''' # AccessProfileMetadataBulkUpdateByIdRequest | 

    try:
        # Bulk-update metadata by ids
        new_access_profile_metadata_bulk_update_by_id_request = AccessProfileMetadataBulkUpdateByIdRequest.from_json(access_profile_metadata_bulk_update_by_id_request)
        results = AccessProfilesApi(api_client).update_access_profiles_metadata_by_ids_v1(access_profile_metadata_bulk_update_by_id_request=new_access_profile_metadata_bulk_update_by_id_request)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).update_access_profiles_metadata_by_ids_v1(new_access_profile_metadata_bulk_update_by_id_request)
        print("The response of AccessProfilesApi->update_access_profiles_metadata_by_ids_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->update_access_profiles_metadata_by_ids_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-access-profiles-metadata-by-query-v1
Bulk-update metadata by query
This API initiates a bulk update of Access Model Metadata for every access profile matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-query-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_profile_metadata_bulk_update_by_query_request | [**AccessProfileMetadataBulkUpdateByQueryRequest**](../models/access-profile-metadata-bulk-update-by-query-request) | True  | 

### Return type
[**AccessProfileMetadataBulkUpdateResponse**](../models/access-profile-metadata-bulk-update-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returned if the bulk update request was created. | AccessProfileMetadataBulkUpdateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_by_query_request import AccessProfileMetadataBulkUpdateByQueryRequest
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_response import AccessProfileMetadataBulkUpdateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_profile_metadata_bulk_update_by_query_request = '''{
          "query" : {
            "indices" : [ "accessprofiles" ],
            "queryType" : "TEXT",
            "textQuery" : {
              "terms" : [ "test123" ],
              "fields" : [ "id" ],
              "matchAny" : false,
              "contains" : true
            },
            "includeNested" : false
          },
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }''' # AccessProfileMetadataBulkUpdateByQueryRequest | 

    try:
        # Bulk-update metadata by query
        new_access_profile_metadata_bulk_update_by_query_request = AccessProfileMetadataBulkUpdateByQueryRequest.from_json(access_profile_metadata_bulk_update_by_query_request)
        results = AccessProfilesApi(api_client).update_access_profiles_metadata_by_query_v1(access_profile_metadata_bulk_update_by_query_request=new_access_profile_metadata_bulk_update_by_query_request)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).update_access_profiles_metadata_by_query_v1(new_access_profile_metadata_bulk_update_by_query_request)
        print("The response of AccessProfilesApi->update_access_profiles_metadata_by_query_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->update_access_profiles_metadata_by_query_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-attribute-key-and-value-to-access-profile-v1
Add metadata to access profile
This API adds a single Access Model Metadata value to an access profile by attribute key and attribute value. A single access profile cannot be assigned more than 25 metadata values. Adding custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-attribute-key-and-value-to-access-profile-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The access profile's ID.
Path   | attribute_key | **str** | True  | Technical name of the Attribute.
Path   | attribute_value | **str** | True  | Technical name of the Attribute Value.

### Return type
[**AccessProfile**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the access profile as updated. | AccessProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_profiles.api.access_profiles_api import AccessProfilesApi
from sailpoint.access_profiles.api_client import ApiClient
from sailpoint.access_profiles.models.access_profile import AccessProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c24359c389374d0fb8585698a2189e3d' # str | The access profile's ID. # str | The access profile's ID.
    attribute_key = 'iscPrivacy' # str | Technical name of the Attribute. # str | Technical name of the Attribute.
    attribute_value = 'public' # str | Technical name of the Attribute Value. # str | Technical name of the Attribute Value.

    try:
        # Add metadata to access profile
        
        results = AccessProfilesApi(api_client).update_attribute_key_and_value_to_access_profile_v1(id=id, attribute_key=attribute_key, attribute_value=attribute_value)
        # Below is a request that includes all optional parameters
        # results = AccessProfilesApi(api_client).update_attribute_key_and_value_to_access_profile_v1(id, attribute_key, attribute_value)
        print("The response of AccessProfilesApi->update_attribute_key_and_value_to_access_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessProfilesApi->update_attribute_key_and_value_to_access_profile_v1: %s\n" % e)
```



[[Back to top]](#) 



