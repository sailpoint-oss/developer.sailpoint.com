---
id: identity-profiles
title: Identity_Profiles
pagination_label: Identity_Profiles
sidebar_label: Identity_Profiles
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identity_Profiles', 'Identity_Profiles'] 
slug: /tools/sdk/python/identity-profiles/methods/identity-profiles
tags: ['SDK', 'Software Development Kit', 'Identity_Profiles', 'Identity_Profiles']
---

# sailpoint.identity_profiles.IdentityProfilesApi
  Use this API to implement identity profile functionality. 
With this functionality in place, administrators can view identity profiles and their configurations. 

Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.  

In Identity Security Cloud, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles. 
This list shows some details about each identity profile, along with its status. 
They can select an identity profile to view its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings. 

Refer to [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) for more information about identity profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-profile-v1**](#create-identity-profile-v1) | **POST** `/identity-profiles/v1` | Create identity profile
[**delete-identity-profile-v1**](#delete-identity-profile-v1) | **DELETE** `/identity-profiles/v1/{identity-profile-id}` | Delete identity profile
[**delete-identity-profiles-v1**](#delete-identity-profiles-v1) | **POST** `/identity-profiles/v1/bulk-delete` | Delete identity profiles
[**export-identity-profiles-v1**](#export-identity-profiles-v1) | **GET** `/identity-profiles/v1/export` | Export identity profiles
[**generate-identity-preview-v1**](#generate-identity-preview-v1) | **POST** `/identity-profiles/v1/identity-preview` | Generate identity profile preview
[**get-default-identity-attribute-config-v1**](#get-default-identity-attribute-config-v1) | **GET** `/identity-profiles/v1/{identity-profile-id}/default-identity-attribute-config` | Get default identity attribute config
[**get-identity-profile-v1**](#get-identity-profile-v1) | **GET** `/identity-profiles/v1/{identity-profile-id}` | Get identity profile
[**import-identity-profiles-v1**](#import-identity-profiles-v1) | **POST** `/identity-profiles/v1/import` | Import identity profiles
[**list-identity-profiles-v1**](#list-identity-profiles-v1) | **GET** `/identity-profiles/v1` | List identity profiles
[**sync-identity-profile-v1**](#sync-identity-profile-v1) | **POST** `/identity-profiles/v1/{identity-profile-id}/process-identities` | Process identities under profile
[**update-identity-profile-v1**](#update-identity-profile-v1) | **PATCH** `/identity-profiles/v1/{identity-profile-id}` | Update identity profile


## create-identity-profile-v1
Create identity profile
Creates an identity profile.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-profile-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identityprofile | [**Identityprofile**](../models/identityprofile) | True  | 

### Return type
[**Identityprofile**](../models/identityprofile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created identity profile. | Identityprofile |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityprofile import Identityprofile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identityprofile = '''sailpoint.identity_profiles.Identityprofile()''' # Identityprofile | 

    try:
        # Create identity profile
        new_identityprofile = Identityprofile.from_json(identityprofile)
        results = IdentityProfilesApi(api_client).create_identity_profile_v1(identityprofile=new_identityprofile)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).create_identity_profile_v1(new_identityprofile)
        print("The response of IdentityProfilesApi->create_identity_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->create_identity_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-profile-v1
Delete identity profile
Delete an identity profile by ID.
On success, this endpoint will return a reference to the bulk delete task result.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-profile-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity profile ID.

### Return type
[**Taskresultsimplified**](../models/taskresultsimplified)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | Taskresultsimplified |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.taskresultsimplified import Taskresultsimplified
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity profile ID. # str | Identity profile ID.

    try:
        # Delete identity profile
        
        results = IdentityProfilesApi(api_client).delete_identity_profile_v1(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).delete_identity_profile_v1(identity_profile_id)
        print("The response of IdentityProfilesApi->delete_identity_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->delete_identity_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-profiles-v1
Delete identity profiles
This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

The following rights are required to access this endpoint: idn:identity-profile:delete

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-profiles-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | request_body | **[]str** | True  | Identity Profile bulk delete request body.

### Return type
[**Taskresultsimplified**](../models/taskresultsimplified)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returns a TaskResult object referencing the bulk delete job created. | Taskresultsimplified |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.taskresultsimplified import Taskresultsimplified
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    request_body = '''['request_body_example']''' # List[str] | Identity Profile bulk delete request body.

    try:
        # Delete identity profiles
        new_request_body = RequestBody.from_json(request_body)
        results = IdentityProfilesApi(api_client).delete_identity_profiles_v1(request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).delete_identity_profiles_v1(new_request_body)
        print("The response of IdentityProfilesApi->delete_identity_profiles_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->delete_identity_profiles_v1: %s\n" % e)
```



[[Back to top]](#) 

## export-identity-profiles-v1
Export identity profiles
This exports existing identity profiles in the format specified by the sp-config service.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-identity-profiles-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority**

### Return type
[**List[Identityprofileexportedobject]**](../models/identityprofileexportedobject)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of export objects with identity profiles. | List[Identityprofileexportedobject] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityprofileexportedobject import Identityprofileexportedobject
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
        
        results = IdentityProfilesApi(api_client).export_identity_profiles_v1()
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).export_identity_profiles_v1(limit, offset, count, filters, sorters)
        print("The response of IdentityProfilesApi->export_identity_profiles_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->export_identity_profiles_v1: %s\n" % e)
```



[[Back to top]](#) 

## generate-identity-preview-v1
Generate identity profile preview
This generates a non-persisted IdentityDetails object that will represent as the preview of the identities attribute when the given policy''s attribute config is applied.

[API Spec](https://developer.sailpoint.com/docs/api/v1/generate-identity-preview-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identitypreviewrequest | [**Identitypreviewrequest**](../models/identitypreviewrequest) | True  | Identity Preview request body.

### Return type
[**Identitypreviewresponse**](../models/identitypreviewresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Object representing the preview object with all of the identity attributes using the current mappings. | Identitypreviewresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identitypreviewrequest import Identitypreviewrequest
from sailpoint.identity_profiles.models.identitypreviewresponse import Identitypreviewresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identitypreviewrequest = '''sailpoint.identity_profiles.Identitypreviewrequest()''' # Identitypreviewrequest | Identity Preview request body.

    try:
        # Generate identity profile preview
        new_identitypreviewrequest = Identitypreviewrequest.from_json(identitypreviewrequest)
        results = IdentityProfilesApi(api_client).generate_identity_preview_v1(identitypreviewrequest=new_identitypreviewrequest)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).generate_identity_preview_v1(new_identitypreviewrequest)
        print("The response of IdentityProfilesApi->generate_identity_preview_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->generate_identity_preview_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-default-identity-attribute-config-v1
Get default identity attribute config
This returns the default identity attribute config.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-default-identity-attribute-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | The Identity Profile ID.

### Return type
[**Identityattributeconfig**](../models/identityattributeconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An Identity Attribute Config object. | Identityattributeconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityattributeconfig import Identityattributeconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | The Identity Profile ID. # str | The Identity Profile ID.

    try:
        # Get default identity attribute config
        
        results = IdentityProfilesApi(api_client).get_default_identity_attribute_config_v1(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).get_default_identity_attribute_config_v1(identity_profile_id)
        print("The response of IdentityProfilesApi->get_default_identity_attribute_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->get_default_identity_attribute_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-profile-v1
Get identity profile
Get a single identity profile by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-profile-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity profile ID.

### Return type
[**Identityprofile**](../models/identityprofile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Identity profile object. | Identityprofile |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityprofile import Identityprofile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | Identity profile ID. # str | Identity profile ID.

    try:
        # Get identity profile
        
        results = IdentityProfilesApi(api_client).get_identity_profile_v1(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).get_identity_profile_v1(identity_profile_id)
        print("The response of IdentityProfilesApi->get_identity_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->get_identity_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-identity-profiles-v1
Import identity profiles
This imports previously exported identity profiles.

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-identity-profiles-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identityprofileexportedobject | [**[]Identityprofileexportedobject**](../models/identityprofileexportedobject) | True  | Previously exported Identity Profiles.

### Return type
[**Objectimportresult**](../models/objectimportresult)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of importing Identity Profiles. | Objectimportresult |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityprofileexportedobject import Identityprofileexportedobject
from sailpoint.identity_profiles.models.objectimportresult import Objectimportresult
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identityprofileexportedobject = '''[sailpoint.identity_profiles.Identityprofileexportedobject()]''' # List[Identityprofileexportedobject] | Previously exported Identity Profiles.

    try:
        # Import identity profiles
        new_identityprofileexportedobject = Identityprofileexportedobject.from_json(identityprofileexportedobject)
        results = IdentityProfilesApi(api_client).import_identity_profiles_v1(identityprofileexportedobject=new_identityprofileexportedobject)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).import_identity_profiles_v1(new_identityprofileexportedobject)
        print("The response of IdentityProfilesApi->import_identity_profiles_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->import_identity_profiles_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-profiles-v1
List identity profiles
Get a list of identity profiles, based on the specified query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-profiles-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name**

### Return type
[**List[Identityprofile]**](../models/identityprofile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identity profiles. | List[Identityprofile] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityprofile import Identityprofile
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
        
        results = IdentityProfilesApi(api_client).list_identity_profiles_v1()
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).list_identity_profiles_v1(limit, offset, count, filters, sorters)
        print("The response of IdentityProfilesApi->list_identity_profiles_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->list_identity_profiles_v1: %s\n" % e)
```



[[Back to top]](#) 

## sync-identity-profile-v1
Process identities under profile
Process identities under the profile
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 
This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh.
This operation will perform the following activities on all identities under the identity profile.
1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity's correct manager through manager correlation. 3. Updates the identity's access according to their assigned lifecycle state. 4. Updates the identity's access based on role assignment criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/sync-identity-profile-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Identity Profile ID to be processed # str | The Identity Profile ID to be processed

    try:
        # Process identities under profile
        
        results = IdentityProfilesApi(api_client).sync_identity_profile_v1(identity_profile_id=identity_profile_id)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).sync_identity_profile_v1(identity_profile_id)
        print("The response of IdentityProfilesApi->sync_identity_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->sync_identity_profile_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-identity-profile-v1
Update identity profile
Update a specified identity profile with this PATCH request.
  
You cannot update these fields:
* id
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at the same time.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-identity-profile-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_profile_id | **str** | True  | Identity profile ID.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Identityprofile**](../models/identityprofile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated identity profile. | Identityprofile |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityProfilesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityProfilesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_profiles.api.identity_profiles_api import IdentityProfilesApi
from sailpoint.identity_profiles.api_client import ApiClient
from sailpoint.identity_profiles.models.identityprofile import Identityprofile
from sailpoint.identity_profiles.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_profile_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity profile ID. # str | Identity profile ID.
    jsonpatchoperation = '''[{"op":"add","path":"/identityAttributeConfig/attributeTransforms/0","value":{"identityAttributeName":"location","transformDefinition":{"type":"accountAttribute","attributes":{"sourceName":"Employees","attributeName":"location","sourceId":"2c91808878b7d63b0178c66ffcdc4ce4"}}}}]''' # List[Jsonpatchoperation] | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Update identity profile
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = IdentityProfilesApi(api_client).update_identity_profile_v1(identity_profile_id=identity_profile_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = IdentityProfilesApi(api_client).update_identity_profile_v1(identity_profile_id, new_jsonpatchoperation)
        print("The response of IdentityProfilesApi->update_identity_profile_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityProfilesApi->update_identity_profile_v1: %s\n" % e)
```



[[Back to top]](#) 



