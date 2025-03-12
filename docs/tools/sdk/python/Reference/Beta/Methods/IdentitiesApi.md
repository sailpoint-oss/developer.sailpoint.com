---
id: beta-identities
title: Identities
pagination_label: Identities
sidebar_label: Identities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identities', 'BetaIdentities'] 
slug: /tools/sdk/python/beta/methods/identities
tags: ['SDK', 'Software Development Kit', 'Identities', 'BetaIdentities']
---

# sailpoint.beta.IdentitiesApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-identity**](#delete-identity) | **DELETE** `/identities/{id}` | Delete identity
[**get-identity**](#get-identity) | **GET** `/identities/{id}` | Identity Details
[**get-identity-ownership-details**](#get-identity-ownership-details) | **GET** `/identities/{identityId}/ownership` | Get ownership details
[**get-role-assignment**](#get-role-assignment) | **GET** `/identities/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**get-role-assignments**](#get-role-assignments) | **GET** `/identities/{identityId}/role-assignments` | List role assignments
[**list-identities**](#list-identities) | **GET** `/identities` | List Identities
[**reset-identity**](#reset-identity) | **POST** `/identities/{identityId}/reset` | Reset an identity
[**send-identity-verification-account-token**](#send-identity-verification-account-token) | **POST** `/identities/{id}/verification/account/send` | Send password reset email
[**start-identities-invite**](#start-identities-invite) | **POST** `/identities/invite` | Invite identities to register
[**start-identity-processing**](#start-identity-processing) | **POST** `/identities/process` | Process a list of identityIds
[**synchronize-attributes-for-identity**](#synchronize-attributes-for-identity) | **POST** `/identities/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity
Delete identity
The API returns successful response if the requested identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity Id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request is invalid. It may indicate that the specified identity is marked as protected and cannot be deleted. | IdentityAssociationDetails |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id

    try:
        # Delete identity
        
        IdentitiesApi(api_client).delete_identity(id=id)
        # Below is a request that includes all optional parameters
        # IdentitiesApi(api_client).delete_identity(id)
    except Exception as e:
        print("Exception when calling IdentitiesApi->delete_identity: %s\n" % e)
```



[[Back to top]](#) 

## get-identity
Identity Details
This API returns a single identity using the Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity)

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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity import Identity
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id

    try:
        # Identity Details
        
        results = IdentitiesApi(api_client).get_identity(id=id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_identity(id)
        print("The response of IdentitiesApi->get_identity:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_identity: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-ownership-details
Get ownership details
Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-ownership-details)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity ID.

### Return type
[**IdentityOwnershipAssociationDetails**](../models/identity-ownership-association-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Identity&#39;s ownership association details. | IdentityOwnershipAssociationDetails |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_ownership_association_details import IdentityOwnershipAssociationDetails
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ff8081814d2a8036014d701f3fbf53fa' # str | Identity ID. # str | Identity ID.

    try:
        # Get ownership details
        
        results = IdentitiesApi(api_client).get_identity_ownership_details(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_identity_ownership_details(identity_id)
        print("The response of IdentitiesApi->get_identity_ownership_details:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_identity_ownership_details: %s\n" % e)
```



[[Back to top]](#) 

## get-role-assignment
Role assignment details


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-assignment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity Id
Path   | assignment_id | **str** | True  | Assignment Id

### Return type
[**RoleAssignmentDto**](../models/role-assignment-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A role assignment object | RoleAssignmentDto |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.role_assignment_dto import RoleAssignmentDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id
    assignment_id = '1cbb0705b38c4226b1334eadd8874086' # str | Assignment Id # str | Assignment Id

    try:
        # Role assignment details
        
        results = IdentitiesApi(api_client).get_role_assignment(identity_id=identity_id, assignment_id=assignment_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_role_assignment(identity_id, assignment_id)
        print("The response of IdentitiesApi->get_role_assignment:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_role_assignment: %s\n" % e)
```



[[Back to top]](#) 

## get-role-assignments
List role assignments
This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-assignments)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity Id to get the role assignments for
  Query | role_id | **str** |   (optional) | Role Id to filter the role assignments with
  Query | role_name | **str** |   (optional) | Role name to filter the role assignments with

### Return type
[**List[GetRoleAssignments200ResponseInner]**](../models/get-role-assignments200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A role assignment object | List[GetRoleAssignments200ResponseInner] |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.get_role_assignments200_response_inner import GetRoleAssignments200ResponseInner
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id to get the role assignments for # str | Identity Id to get the role assignments for
    role_id = 'e7697a1e96d04db1ac7b0f4544915d2c' # str | Role Id to filter the role assignments with (optional) # str | Role Id to filter the role assignments with (optional)
    role_name = 'Engineer' # str | Role name to filter the role assignments with (optional) # str | Role name to filter the role assignments with (optional)

    try:
        # List role assignments
        
        results = IdentitiesApi(api_client).get_role_assignments(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).get_role_assignments(identity_id, role_id, role_name)
        print("The response of IdentitiesApi->get_role_assignments:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->get_role_assignments: %s\n" % e)
```



[[Back to top]](#) 

## list-identities
List Identities
This API returns a list of identities.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identities)

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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity import Identity
from pprint import pprint
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
        # List Identities
        
        results = IdentitiesApi(api_client).list_identities()
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).list_identities(filters, sorters, default_filter, count, limit, offset)
        print("The response of IdentitiesApi->list_identities:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->list_identities: %s\n" % e)
```



[[Back to top]](#) 

## reset-identity
Reset an identity
Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

[API Spec](https://developer.sailpoint.com/docs/api/beta/reset-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | Identity Id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The reset request accepted and is in progress. |  |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity Id # str | Identity Id

    try:
        # Reset an identity
        
        IdentitiesApi(api_client).reset_identity(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # IdentitiesApi(api_client).reset_identity(identity_id)
    except Exception as e:
        print("Exception when calling IdentitiesApi->reset_identity: %s\n" % e)
```



[[Back to top]](#) 

## send-identity-verification-account-token
Send password reset email
This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


[API Spec](https://developer.sailpoint.com/docs/api/beta/send-identity-verification-account-token)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Identity ID
 Body  | send_account_verification_request | [**SendAccountVerificationRequest**](../models/send-account-verification-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The email was successfully sent |  |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.send_account_verification_request import SendAccountVerificationRequest
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Identity ID # str | Identity ID
    send_account_verification_request = '''{
          "sourceName" : "Active Directory Source",
          "via" : "EMAIL_WORK"
        }''' # SendAccountVerificationRequest | 

    try:
        # Send password reset email
        new_send_account_verification_request = SendAccountVerificationRequest.from_json(send_account_verification_request)
        IdentitiesApi(api_client).send_identity_verification_account_token(id=id, send_account_verification_request=new_send_account_verification_request)
        # Below is a request that includes all optional parameters
        # IdentitiesApi(api_client).send_identity_verification_account_token(id, new_send_account_verification_request)
    except Exception as e:
        print("Exception when calling IdentitiesApi->send_identity_verification_account_token: %s\n" % e)
```



[[Back to top]](#) 

## start-identities-invite
Invite identities to register
This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status).


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-identities-invite)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | invite_identities_request | [**InviteIdentitiesRequest**](../models/invite-identities-request) | True  | 

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Responds with an initial TaskStatus for the executed task | TaskStatus |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.invite_identities_request import InviteIdentitiesRequest
from sailpoint.beta.models.task_status import TaskStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    invite_identities_request = '''{
          "ids" : [ "2b568c65bc3c4c57a43bd97e3a8e55", "2c9180867769897d01776ed5f125512f" ],
          "uninvited" : false
        }''' # InviteIdentitiesRequest | 

    try:
        # Invite identities to register
        new_invite_identities_request = InviteIdentitiesRequest.from_json(invite_identities_request)
        results = IdentitiesApi(api_client).start_identities_invite(invite_identities_request=new_invite_identities_request)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).start_identities_invite(new_invite_identities_request)
        print("The response of IdentitiesApi->start_identities_invite:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->start_identities_invite: %s\n" % e)
```



[[Back to top]](#) 

## start-identity-processing
Process a list of identityIds
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

A token with ORG_ADMIN or HELPDESK authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-identity-processing)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | process_identities_request | [**ProcessIdentitiesRequest**](../models/process-identities-request) | True  | 

### Return type
[**TaskResultResponse**](../models/task-result-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Object containing the DTO type TASK_RESULT and the job id for the task | TaskResultResponse |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.process_identities_request import ProcessIdentitiesRequest
from sailpoint.beta.models.task_result_response import TaskResultResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    process_identities_request = '''{
          "identityIds" : [ "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8" ]
        }''' # ProcessIdentitiesRequest | 

    try:
        # Process a list of identityIds
        new_process_identities_request = ProcessIdentitiesRequest.from_json(process_identities_request)
        results = IdentitiesApi(api_client).start_identity_processing(process_identities_request=new_process_identities_request)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).start_identity_processing(new_process_identities_request)
        print("The response of IdentitiesApi->start_identity_processing:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->start_identity_processing: %s\n" % e)
```



[[Back to top]](#) 

## synchronize-attributes-for-identity
Attribute synchronization for single identity.
This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity. A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/synchronize-attributes-for-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The Identity id

### Return type
[**IdentitySyncJob**](../models/identity-sync-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | An Identity Sync job | IdentitySyncJob |  -  |
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
from sailpoint.beta.api.identities_api import IdentitiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_sync_job import IdentitySyncJob
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'identity_id_example' # str | The Identity id # str | The Identity id

    try:
        # Attribute synchronization for single identity.
        
        results = IdentitiesApi(api_client).synchronize_attributes_for_identity(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = IdentitiesApi(api_client).synchronize_attributes_for_identity(identity_id)
        print("The response of IdentitiesApi->synchronize_attributes_for_identity:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling IdentitiesApi->synchronize_attributes_for_identity: %s\n" % e)
```



[[Back to top]](#) 



