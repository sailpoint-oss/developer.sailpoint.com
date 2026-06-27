---
id: identities
title: Identities
pagination_label: Identities
sidebar_label: Identities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identities', 'Identities'] 
slug: /tools/sdk/python/identities/methods/identities
tags: ['SDK', 'Software Development Kit', 'Identities', 'Identities']
---

# sailpoint.identities.IdentitiesApi
  Use this API to implement identity functionality.
With this functionality in place, administrators can synchronize an identity&#39;s attributes with its various source attributes.

Identity Security Cloud uses identities as users&#39; authoritative accounts. Identities can own other accounts, entitlements, and attributes.

An identity has a variety of attributes, such as an account name, an email address, a job title, and more.
These identity attributes can be correlated with different attributes on different sources.
For example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and Identity Security Cloud knows they are the same person with the same access and attributes.

In Identity Security Cloud, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.
To manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.
They can then select the identity they want to manually synchronize and use the hamburger menu to select &#39;Synchronize Attributes.&#39;
Doing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity.

Refer to [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) for more information about synchronizing attributes.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-identity-v1**](#delete-identity-v1) | **DELETE** `/identities/v1/{id}` | Delete identity
[**get-identity-ownership-details-v1**](#get-identity-ownership-details-v1) | **GET** `/identities/v1/{identityId}/ownership` | Get ownership details
[**get-identity-v1**](#get-identity-v1) | **GET** `/identities/v1/{id}` | Identity details
[**get-role-assignment-v1**](#get-role-assignment-v1) | **GET** `/identities/v1/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**get-role-assignments-v1**](#get-role-assignments-v1) | **GET** `/identities/v1/{identityId}/role-assignments` | List role assignments
[**list-entitlements-by-identity-v1**](#list-entitlements-by-identity-v1) | **GET** `/entitlements/v1/identities/{id}/entitlements` | List of entitlements by identity.
[**list-identities-v1**](#list-identities-v1) | **GET** `/identities/v1` | List identities
[**reset-identity-v1**](#reset-identity-v1) | **POST** `/identities/v1/{id}/reset` | Reset an identity
[**send-identity-verification-account-token-v1**](#send-identity-verification-account-token-v1) | **POST** `/identities/v1/{id}/verification/account/send` | Send password reset email
[**start-identities-invite-v1**](#start-identities-invite-v1) | **POST** `/identities/v1/invite` | Invite identities to register
[**start-identity-processing-v1**](#start-identity-processing-v1) | **POST** `/identities/v1/process` | Process a list of identityids
[**synchronize-attributes-for-identity-v1**](#synchronize-attributes-for-identity-v1) | **POST** `/identities/v1/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity-v1
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
Delete identity
The API returns successful response if the requested identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity Id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request is invalid. It may indicate that the specified identity is marked as protected and cannot be deleted. | Identityassociationdetails |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete identity
        
        IdentitiesApi(api_client).delete_identity_v1(id=id)
        # Below is a request that includes all optional parameters
        # IdentitiesApi(api_client).delete_identity_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling IdentitiesApi->delete_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-ownership-details-v1
Get ownership details
Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-ownership-details-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity ID.

### Return type
[**Identityownershipassociationdetails**](../models/identityownershipassociationdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Identity&#39;s ownership association details. | Identityownershipassociationdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.identityownershipassociationdetails import Identityownershipassociationdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ff8081814d2a8036014d701f3fbf53fa' # str | Identity ID. # str | Identity ID.

    try:
        # Get ownership details
        
        results = IdentitiesApi(api_client).get_identity_ownership_details_v1(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_identity_ownership_details_v1(identity_id)
        print("The response of IdentitiesApi->get_identity_ownership_details_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_identity_ownership_details_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-v1
Identity details
This API returns a single identity using the Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity Id

### Return type
[**Identity**](../models/identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity object | Identity |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.identity import Identity
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id

    try:
        # Identity details
        
        results = IdentitiesApi(api_client).get_identity_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_identity_v1(id)
        print("The response of IdentitiesApi->get_identity_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-assignment-v1
Role assignment details


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-assignment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity Id
Path   | assignment_id | **str** | True  | Assignment Id

### Return type
[**Roleassignmentdto**](../models/roleassignmentdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A role assignment object | Roleassignmentdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.roleassignmentdto import Roleassignmentdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id
    assignment_id = '1cbb0705b38c4226b1334eadd8874086' # str | Assignment Id # str | Assignment Id

    try:
        # Role assignment details
        
        results = IdentitiesApi(api_client).get_role_assignment_v1(identity_id=identity_id, assignment_id=assignment_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_role_assignment_v1(identity_id, assignment_id)
        print("The response of IdentitiesApi->get_role_assignment_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_role_assignment_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-assignments-v1
List role assignments
This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-assignments-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity Id to get the role assignments for
  Query | role_id | **str** |   (optional) | Role Id to filter the role assignments with
  Query | role_name | **str** |   (optional) | Role name to filter the role assignments with

### Return type
[**List[GetRoleAssignmentsV1200ResponseInner]**](../models/get-role-assignments-v1200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A role assignment object | List[GetRoleAssignmentsV1200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.get_role_assignments_v1200_response_inner import GetRoleAssignmentsV1200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id to get the role assignments for # str | Identity Id to get the role assignments for
    role_id = 'e7697a1e96d04db1ac7b0f4544915d2c' # str | Role Id to filter the role assignments with (optional) # str | Role Id to filter the role assignments with (optional)
    role_name = 'Engineer' # str | Role name to filter the role assignments with (optional) # str | Role name to filter the role assignments with (optional)

    try:
        # List role assignments
        
        results = IdentitiesApi(api_client).get_role_assignments_v1(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_role_assignments_v1(identity_id, role_id, role_name)
        print("The response of IdentitiesApi->get_role_assignments_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_role_assignments_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-entitlements-by-identity-v1
List of entitlements by identity.
The API returns a list of all entitlements assigned to an identity, either directly or through the role or access profile. A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-entitlements-by-identity-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity Id
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Identityentitlements]**](../models/identityentitlements)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all Entitlements for given Identity | List[Identityentitlements] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.identityentitlements import Identityentitlements
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List of entitlements by identity.
        
        results = IdentitiesApi(api_client).list_entitlements_by_identity_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).list_entitlements_by_identity_v1(id, limit, offset, count)
        print("The response of IdentitiesApi->list_entitlements_by_identity_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->list_entitlements_by_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-identities-v1
List identities
This API returns a list of identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identities-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus**
  Query | default_filter | **str** |   (optional) (default to CORRELATED_ONLY) | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Identity]**](../models/identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identities. | List[Identity] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.identity import Identity
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'id eq \"6c9079b270a266a60170a2779fcb0006\" or correlated eq false' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional)
    sorters = 'name,-cloudStatus' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional)
    default_filter = CORRELATED_ONLY # str | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional) (default to CORRELATED_ONLY) # str | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional) (default to CORRELATED_ONLY)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List identities
        
        results = IdentitiesApi(api_client).list_identities_v1()
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).list_identities_v1(filters, sorters, default_filter, count, limit, offset)
        print("The response of IdentitiesApi->list_identities_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->list_identities_v1: %s\n" % e)
```



[[Back to top]](#) 

## reset-identity-v1
Reset an identity
Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reset-identity-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity Id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The reset request accepted and is in progress. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id

    try:
        # Reset an identity
        
        IdentitiesApi(api_client).reset_identity_v1(id=id)
        # Below is a request that includes all optional parameters
        # IdentitiesApi(api_client).reset_identity_v1(id)
    except Exception as e:
        print("Exception when calling IdentitiesApi->reset_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## send-identity-verification-account-token-v1
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
Send password reset email
This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


[API Spec](https://developer.sailpoint.com/docs/api/v1/send-identity-verification-account-token-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity ID
 Body  | sendaccountverificationrequest | [**Sendaccountverificationrequest**](../models/sendaccountverificationrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The email was successfully sent |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.sendaccountverificationrequest import Sendaccountverificationrequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity ID # str | Identity ID
    sendaccountverificationrequest = '''sailpoint.identities.Sendaccountverificationrequest()''' # Sendaccountverificationrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Send password reset email
        new_sendaccountverificationrequest = Sendaccountverificationrequest.from_json(sendaccountverificationrequest)
        IdentitiesApi(api_client).send_identity_verification_account_token_v1(id=id, sendaccountverificationrequest=new_sendaccountverificationrequest)
        # Below is a request that includes all optional parameters
        # IdentitiesApi(api_client).send_identity_verification_account_token_v1(id, new_sendaccountverificationrequest, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling IdentitiesApi->send_identity_verification_account_token_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-identities-invite-v1
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
Invite identities to register
This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status).


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-identities-invite-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | inviteidentitiesrequest | [**Inviteidentitiesrequest**](../models/inviteidentitiesrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Taskstatus**](../models/taskstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Responds with an initial TaskStatus for the executed task | Taskstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.inviteidentitiesrequest import Inviteidentitiesrequest
from sailpoint.identities.models.taskstatus import Taskstatus
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    inviteidentitiesrequest = '''sailpoint.identities.Inviteidentitiesrequest()''' # Inviteidentitiesrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Invite identities to register
        new_inviteidentitiesrequest = Inviteidentitiesrequest.from_json(inviteidentitiesrequest)
        results = IdentitiesApi(api_client).start_identities_invite_v1(inviteidentitiesrequest=new_inviteidentitiesrequest)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).start_identities_invite_v1(new_inviteidentitiesrequest, x_sail_point_experimental)
        print("The response of IdentitiesApi->start_identities_invite_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->start_identities_invite_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-identity-processing-v1
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
Process a list of identityids
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-identity-processing-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | processidentitiesrequest | [**Processidentitiesrequest**](../models/processidentitiesrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Taskresultresponse**](../models/taskresultresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Object containing the DTO type TASK_RESULT and the job id for the task | Taskresultresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.processidentitiesrequest import Processidentitiesrequest
from sailpoint.identities.models.taskresultresponse import Taskresultresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    processidentitiesrequest = '''sailpoint.identities.Processidentitiesrequest()''' # Processidentitiesrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Process a list of identityids
        new_processidentitiesrequest = Processidentitiesrequest.from_json(processidentitiesrequest)
        results = IdentitiesApi(api_client).start_identity_processing_v1(processidentitiesrequest=new_processidentitiesrequest)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).start_identity_processing_v1(new_processidentitiesrequest, x_sail_point_experimental)
        print("The response of IdentitiesApi->start_identity_processing_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->start_identity_processing_v1: %s\n" % e)
```



[[Back to top]](#) 

## synchronize-attributes-for-identity-v1
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
Attribute synchronization for single identity.
This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/synchronize-attributes-for-identity-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The Identity id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Identitysyncjob**](../models/identitysyncjob)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | An Identity Sync job | Identitysyncjob |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identities.api.identities_api import IdentitiesApi
from sailpoint.identities.api_client import ApiClient
from sailpoint.identities.models.identitysyncjob import Identitysyncjob
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = 'identity_id_example' # str | The Identity id # str | The Identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Attribute synchronization for single identity.
        
        results = IdentitiesApi(api_client).synchronize_attributes_for_identity_v1(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).synchronize_attributes_for_identity_v1(identity_id, x_sail_point_experimental)
        print("The response of IdentitiesApi->synchronize_attributes_for_identity_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentitiesApi->synchronize_attributes_for_identity_v1: %s\n" % e)
```



[[Back to top]](#) 



