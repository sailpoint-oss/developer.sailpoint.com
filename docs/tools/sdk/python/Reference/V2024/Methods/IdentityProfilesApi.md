---
id: v2024-identity-profiles
title: Identity_Profiles
pagination_label: Identity_Profiles
sidebar_label: Identity_Profiles
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identity_Profiles', 'V2024Identity_Profiles'] 
slug: /tools/sdk/python/v2024/methods/identity-profiles
tags: ['SDK', 'Software Development Kit', 'Identity_Profiles', 'V2024Identity_Profiles']
---

# sailpoint.v2024.IdentityProfilesApi
  Use this API to implement identity profile functionality. 
With this functionality in place, administrators can view identity profiles and their configurations. 

Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.  

In Identity Security Cloud, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles. 
This list shows some details about each identity profile, along with its status. 
They can select an identity profile to view its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings. 

Refer to [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) for more information about identity profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-profile**](#create-identity-profile) | **POST** `/identity-profiles` | Create identity profile
[**delete-identity-profile**](#delete-identity-profile) | **DELETE** `/identity-profiles/{identity-profile-id}` | Delete identity profile
[**delete-identity-profiles**](#delete-identity-profiles) | **POST** `/identity-profiles/bulk-delete` | Delete identity profiles
[**export-identity-profiles**](#export-identity-profiles) | **GET** `/identity-profiles/export` | Export identity profiles
[**generate-identity-preview**](#generate-identity-preview) | **POST** `/identity-profiles/identity-preview` | Generate identity profile preview
[**get-default-identity-attribute-config**](#get-default-identity-attribute-config) | **GET** `/identity-profiles/{identity-profile-id}/default-identity-attribute-config` | Get default identity attribute config
[**get-identity-profile**](#get-identity-profile) | **GET** `/identity-profiles/{identity-profile-id}` | Get identity profile
[**import-identity-profiles**](#import-identity-profiles) | **POST** `/identity-profiles/import` | Import identity profiles
[**list-identity-profiles**](#list-identity-profiles) | **GET** `/identity-profiles` | List identity profiles
[**sync-identity-profile**](#sync-identity-profile) | **POST** `/identity-profiles/{identity-profile-id}/process-identities` | Process identities under profile
[**update-identity-profile**](#update-identity-profile) | **PATCH** `/identity-profiles/{identity-profile-id}` | Update identity profile


## create-identity-profile
Create identity profile
Creates an identity profile.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-identity-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identity_profile | [**IdentityProfile**](../models/identity-profile) | True  | 

### Return type
[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created identity profile. | IdentityProfile |  -  |
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
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_profile import IdentityProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile = '''{
          "owner" : {
            "name" : "William Wilson",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "type" : "IDENTITY"
          },
          "identityExceptionReportReference" : {
            "reportName" : "My annual report",
            "taskResultId" : "2b838de9-db9b-abcf-e646-d4f274ad4238"
          },
          "authoritativeSource" : {
            "name" : "HR Active Directory",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "type" : "SOURCE"
          },
          "hasTimeBasedAttr" : true,
          "created" : "2015-05-28T14:07:17Z",
          "description" : "My custom flat file profile",
          "identityRefreshRequired" : true,
          "identityCount" : 8,
          "priority" : 10,
          "identityAttributeConfig" : {
            "attributeTransforms" : [ {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            }, {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            } ],
            "enabled" : true
          },
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "id" : "id12345"
        }''' # IdentityProfile | 

    try:
        # Create identity profile
        new_identity_profile = IdentityProfile.from_json(identity_profile)
        results = IdentityProfilesApi(api_client).create_identity_profile(identity_profile=new_identity_profile)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).create_identity_profile(new_identity_profile)
        print("The response of IdentityProfilesApi->create_identity_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->create_identity_profile: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-profile
Delete identity profile
Delete an identity profile by ID.
On success, this endpoint will return a reference to the bulk delete task result.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-identity-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity profile ID.

### Return type
[**TaskResultSimplified**](../models/task-result-simplified)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | TaskResultSimplified |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.task_result_simplified import TaskResultSimplified
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity profile ID. # str | Identity profile ID.

    try:
        # Delete identity profile
        
        results = IdentityProfilesApi(api_client).delete_identity_profile(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).delete_identity_profile(identity_profile_id)
        print("The response of IdentityProfilesApi->delete_identity_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->delete_identity_profile: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-profiles
Delete identity profiles
This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

The following rights are required to access this endpoint: idn:identity-profile:delete

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-identity-profiles)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | request_body | **[]str** | True  | Identity Profile bulk delete request body.

### Return type
[**TaskResultSimplified**](../models/task-result-simplified)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | TaskResultSimplified |  -  |
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
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.task_result_simplified import TaskResultSimplified
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    request_body = '''['request_body_example']''' # List[str] | Identity Profile bulk delete request body.

    try:
        # Delete identity profiles
        new_request_body = RequestBody.from_json(request_body)
        results = IdentityProfilesApi(api_client).delete_identity_profiles(request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).delete_identity_profiles(new_request_body)
        print("The response of IdentityProfilesApi->delete_identity_profiles:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->delete_identity_profiles: %s\n" % e)
```



[[Back to top]](#) 

## export-identity-profiles
Export identity profiles
This exports existing identity profiles in the format specified by the sp-config service.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-identity-profiles)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority**

### Return type
[**List[IdentityProfileExportedObject]**](../models/identity-profile-exported-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of export objects with identity profiles. | List[IdentityProfileExportedObject] |  -  |
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
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_profile_exported_object import IdentityProfileExportedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional)

    try:
        # Export identity profiles
        
        results = IdentityProfilesApi(api_client).export_identity_profiles()
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).export_identity_profiles(limit, offset, count, filters, sorters)
        print("The response of IdentityProfilesApi->export_identity_profiles:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->export_identity_profiles: %s\n" % e)
```



[[Back to top]](#) 

## generate-identity-preview
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Generate identity profile preview
This generates a non-persisted IdentityDetails object that will represent as the preview of the identities attribute when the given policy''s attribute config is applied.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/generate-identity-preview)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | identity_preview_request | [**IdentityPreviewRequest**](../models/identity-preview-request) | True  | Identity Preview request body.

### Return type
[**IdentityPreviewResponse**](../models/identity-preview-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Object representing the preview object with all of the identity attributes using the current mappings. | IdentityPreviewResponse |  -  |
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
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_preview_request import IdentityPreviewRequest
from sailpoint.v2024.models.identity_preview_response import IdentityPreviewResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    identity_preview_request = '''{
          "identityId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "identityAttributeConfig" : {
            "attributeTransforms" : [ {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            }, {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            } ],
            "enabled" : true
          }
        }''' # IdentityPreviewRequest | Identity Preview request body.

    try:
        # Generate identity profile preview
        new_identity_preview_request = IdentityPreviewRequest.from_json(identity_preview_request)
        results = IdentityProfilesApi(api_client).generate_identity_preview(x_sail_point_experimental=x_sail_point_experimental, identity_preview_request=new_identity_preview_request)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).generate_identity_preview(x_sail_point_experimental, new_identity_preview_request)
        print("The response of IdentityProfilesApi->generate_identity_preview:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->generate_identity_preview: %s\n" % e)
```



[[Back to top]](#) 

## get-default-identity-attribute-config
Get default identity attribute config
This returns the default identity attribute config.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-default-identity-attribute-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | The Identity Profile ID.

### Return type
[**IdentityAttributeConfig**](../models/identity-attribute-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An Identity Attribute Config object. | IdentityAttributeConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_attribute_config import IdentityAttributeConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | The Identity Profile ID. # str | The Identity Profile ID.

    try:
        # Get default identity attribute config
        
        results = IdentityProfilesApi(api_client).get_default_identity_attribute_config(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).get_default_identity_attribute_config(identity_profile_id)
        print("The response of IdentityProfilesApi->get_default_identity_attribute_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->get_default_identity_attribute_config: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-profile
Get identity profile
Get a single identity profile by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity profile ID.

### Return type
[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Identity profile object. | IdentityProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_profile import IdentityProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | Identity profile ID. # str | Identity profile ID.

    try:
        # Get identity profile
        
        results = IdentityProfilesApi(api_client).get_identity_profile(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).get_identity_profile(identity_profile_id)
        print("The response of IdentityProfilesApi->get_identity_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->get_identity_profile: %s\n" % e)
```



[[Back to top]](#) 

## import-identity-profiles
Import identity profiles
This imports previously exported identity profiles.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-identity-profiles)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identity_profile_exported_object | [**[]IdentityProfileExportedObject**](../models/identity-profile-exported-object) | True  | Previously exported Identity Profiles.

### Return type
[**ObjectImportResult**](../models/object-import-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of importing Identity Profiles. | ObjectImportResult |  -  |
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
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_profile_exported_object import IdentityProfileExportedObject
from sailpoint.v2024.models.object_import_result import ObjectImportResult
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_exported_object = '''[sailpoint.v2024.IdentityProfileExportedObject()]''' # List[IdentityProfileExportedObject] | Previously exported Identity Profiles.

    try:
        # Import identity profiles
        new_identity_profile_exported_object = IdentityProfileExportedObject.from_json(identity_profile_exported_object)
        results = IdentityProfilesApi(api_client).import_identity_profiles(identity_profile_exported_object=new_identity_profile_exported_object)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).import_identity_profiles(new_identity_profile_exported_object)
        print("The response of IdentityProfilesApi->import_identity_profiles:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->import_identity_profiles: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-profiles
List identity profiles
Get a list of identity profiles, based on the specified query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-identity-profiles)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name**

### Return type
[**List[IdentityProfile]**](../models/identity-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identity profiles. | List[IdentityProfile] |  -  |
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
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_profile import IdentityProfile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional)

    try:
        # List identity profiles
        
        results = IdentityProfilesApi(api_client).list_identity_profiles()
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).list_identity_profiles(limit, offset, count, filters, sorters)
        print("The response of IdentityProfilesApi->list_identity_profiles:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->list_identity_profiles: %s\n" % e)
```



[[Back to top]](#) 

## sync-identity-profile
Process identities under profile
Process identities under the profile
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 
This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh.
This operation will perform the following activities on all identities under the identity profile.
1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity's correct manager through manager correlation. 3. Updates the identity's access according to their assigned lifecycle state. 4. Updates the identity's access based on role assignment criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/sync-identity-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | The Identity Profile ID to be processed

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Identity Profile ID to be processed # str | The Identity Profile ID to be processed

    try:
        # Process identities under profile
        
        results = IdentityProfilesApi(api_client).sync_identity_profile(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).sync_identity_profile(identity_profile_id)
        print("The response of IdentityProfilesApi->sync_identity_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->sync_identity_profile: %s\n" % e)
```



[[Back to top]](#) 

## update-identity-profile
Update identity profile
Update a specified identity profile with this PATCH request.
  
You cannot update these fields:
* id
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at the same time.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-identity-profile)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity profile ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**IdentityProfile**](../models/identity-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated identity profile. | IdentityProfile |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_profile import IdentityProfile
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity profile ID. # str | Identity profile ID.
    json_patch_operation = '''[{op=add, path=/identityAttributeConfig/attributeTransforms/0, value={identityAttributeName=location, transformDefinition={type=accountAttribute, attributes={sourceName=Employees, attributeName=location, sourceId=2c91808878b7d63b0178c66ffcdc4ce4}}}}]''' # List[JsonPatchOperation] | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Update identity profile
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = IdentityProfilesApi(api_client).update_identity_profile(identity_profile_id=identity_profile_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).update_identity_profile(identity_profile_id, new_json_patch_operation)
        print("The response of IdentityProfilesApi->update_identity_profile:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->update_identity_profile: %s\n" % e)
```



[[Back to top]](#) 



