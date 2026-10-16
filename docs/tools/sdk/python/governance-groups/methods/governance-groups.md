# Governance_Groups

# sailpoint.governance_groups.GovernanceGroupsApi
  Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud.

A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user.

Refer to [Creating and Managing Governance Groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-workgroup-v1**](#create-workgroup-v1) | **POST** `/workgroups/v1` | Create a new governance group.
[**delete-workgroup-members-v1**](#delete-workgroup-members-v1) | **POST** `/workgroups/v1/{workgroupId}/members/bulk-delete` | Remove members from governance group
[**delete-workgroup-v1**](#delete-workgroup-v1) | **DELETE** `/workgroups/v1/{id}` | Delete a governance group
[**delete-workgroups-in-bulk-v1**](#delete-workgroups-in-bulk-v1) | **POST** `/workgroups/v1/bulk-delete` | Delete governance group(s)
[**get-workgroup-v1**](#get-workgroup-v1) | **GET** `/workgroups/v1/{id}` | Get governance group by id
[**list-connections-v1**](#list-connections-v1) | **GET** `/workgroups/v1/{workgroupId}/connections` | List connections for governance group
[**list-workgroup-members-v1**](#list-workgroup-members-v1) | **GET** `/workgroups/v1/{workgroupId}/members` | List governance group members
[**list-workgroups-v1**](#list-workgroups-v1) | **GET** `/workgroups/v1` | List governance groups
[**patch-workgroup-v1**](#patch-workgroup-v1) | **PATCH** `/workgroups/v1/{id}` | Patch a governance group
[**update-workgroup-members-v1**](#update-workgroup-members-v1) | **POST** `/workgroups/v1/{workgroupId}/members/bulk-add` | Add members to governance group


## create-workgroup-v1
Create a new governance group.
This API creates a new Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/create-workgroup-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | workgroup_dto | [**WorkgroupDto**](../models/workgroup-dto) | True  | 

### Return type
[**WorkgroupDto**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Governance Group object created. | WorkgroupDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.workgroup_dto import WorkgroupDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    workgroup_dto = '''{
          "owner" : {
            "emailAddress" : "support@sailpoint.com",
            "displayName" : "Support",
            "name" : "Support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "connectionCount" : 1641498673000,
          "created" : "2022-01-06T19:51:13Z",
          "memberCount" : 1641498673000,
          "name" : "DB Access Governance Group",
          "description" : "Description of the Governance Group",
          "modified" : "2022-01-06T19:51:13Z",
          "id" : "2c91808568c529c60168cca6f90c1313"
        }''' # WorkgroupDto | 

    try:
        # Create a new governance group.
        new_workgroup_dto = WorkgroupDto.from_json(workgroup_dto)
        results = GovernanceGroupsApi(api_client).create_workgroup_v1(workgroup_dto=new_workgroup_dto)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).create_workgroup_v1(new_workgroup_dto)
        print("The response of GovernanceGroupsApi->create_workgroup_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->create_workgroup_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-workgroup-members-v1
Remove members from governance group
This API removes one or more  members from a Governance Group.  A
>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroup-members-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | workgroup_id | **str** | True  | ID of the Governance Group.
 Body  | bulk_workgroup_members_request_inner | [**[]BulkWorkgroupMembersRequestInner**](../models/bulk-workgroup-members-request-inner) | True  | List of identities to be removed from  a Governance Group members list.

### Return type
[**List[WorkgroupMemberDeleteItem]**](../models/workgroup-member-delete-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | List of deleted and not deleted identities from Governance Group members list. | List[WorkgroupMemberDeleteItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.bulk_workgroup_members_request_inner import BulkWorkgroupMembersRequestInner
from sailpoint.governance_groups.models.workgroup_member_delete_item import WorkgroupMemberDeleteItem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    workgroup_id = '2c91808a7813090a017814121919ecca' # str | ID of the Governance Group. # str | ID of the Governance Group.
    bulk_workgroup_members_request_inner = '''[sailpoint.governance_groups.BulkWorkgroupMembersRequestInner()]''' # List[BulkWorkgroupMembersRequestInner] | List of identities to be removed from  a Governance Group members list.

    try:
        # Remove members from governance group
        new_bulk_workgroup_members_request_inner = BulkWorkgroupMembersRequestInner.from_json(bulk_workgroup_members_request_inner)
        results = GovernanceGroupsApi(api_client).delete_workgroup_members_v1(workgroup_id=workgroup_id, bulk_workgroup_members_request_inner=new_bulk_workgroup_members_request_inner)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).delete_workgroup_members_v1(workgroup_id, new_bulk_workgroup_members_request_inner)
        print("The response of GovernanceGroupsApi->delete_workgroup_members_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->delete_workgroup_members_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-workgroup-v1
Delete a governance group
This API deletes a Governance Group by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroup-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Governance Group

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180837ca6693d017ca8d097500149' # str | ID of the Governance Group # str | ID of the Governance Group

    try:
        # Delete a governance group
        
        GovernanceGroupsApi(api_client).delete_workgroup_v1(id=id)
        # Below is a request that includes all optional parameters
        # GovernanceGroupsApi(api_client).delete_workgroup_v1(id)
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->delete_workgroup_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-workgroups-in-bulk-v1
Delete governance group(s)

This API initiates a bulk deletion of one or more Governance Groups.

>  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.

>  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.

>  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.

>  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it. 

>  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroups-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | workgroup_bulk_delete_request | [**WorkgroupBulkDeleteRequest**](../models/workgroup-bulk-delete-request) | True  | 

### Return type
[**List[WorkgroupDeleteItem]**](../models/workgroup-delete-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | Governance Group bulk delete response. | List[WorkgroupDeleteItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.workgroup_bulk_delete_request import WorkgroupBulkDeleteRequest
from sailpoint.governance_groups.models.workgroup_delete_item import WorkgroupDeleteItem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    workgroup_bulk_delete_request = '''{
          "ids" : [ "567a697e-885b-495a-afc5-d55e1c23a302", "c7b0f7b2-1e78-4063-b294-a555333dacd2" ]
        }''' # WorkgroupBulkDeleteRequest | 

    try:
        # Delete governance group(s)
        new_workgroup_bulk_delete_request = WorkgroupBulkDeleteRequest.from_json(workgroup_bulk_delete_request)
        results = GovernanceGroupsApi(api_client).delete_workgroups_in_bulk_v1(workgroup_bulk_delete_request=new_workgroup_bulk_delete_request)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).delete_workgroups_in_bulk_v1(new_workgroup_bulk_delete_request)
        print("The response of GovernanceGroupsApi->delete_workgroups_in_bulk_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->delete_workgroups_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-workgroup-v1
Get governance group by id
This API returns a Governance Groups by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-workgroup-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Governance Group

### Return type
[**WorkgroupDto**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Governance Group | WorkgroupDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.workgroup_dto import WorkgroupDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180837ca6693d017ca8d097500149' # str | ID of the Governance Group # str | ID of the Governance Group

    try:
        # Get governance group by id
        
        results = GovernanceGroupsApi(api_client).get_workgroup_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).get_workgroup_v1(id)
        print("The response of GovernanceGroupsApi->get_workgroup_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->get_workgroup_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-connections-v1
List connections for governance group
This API returns list of connections associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/list-connections-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | workgroup_id | **str** | True  | ID of the Governance Group.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**List[WorkgroupConnectionDto]**](../models/workgroup-connection-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List all connections associated with a Governance Group. | List[WorkgroupConnectionDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.workgroup_connection_dto import WorkgroupConnectionDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    workgroup_id = '2c91808a7813090a017814121919ecca' # str | ID of the Governance Group. # str | ID of the Governance Group.
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 50 # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    try:
        # List connections for governance group
        
        results = GovernanceGroupsApi(api_client).list_connections_v1(workgroup_id=workgroup_id)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).list_connections_v1(workgroup_id, offset, limit, count, sorters)
        print("The response of GovernanceGroupsApi->list_connections_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->list_connections_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-workgroup-members-v1
List governance group members
This API returns list of members associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/list-workgroup-members-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | workgroup_id | **str** | True  | ID of the Governance Group.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**List[ListWorkgroupMembersV1200ResponseInner]**](../models/list-workgroup-members-v1200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List all members associated with a Governance Group. | List[ListWorkgroupMembersV1200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.list_workgroup_members_v1200_response_inner import ListWorkgroupMembersV1200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    workgroup_id = '2c91808a7813090a017814121919ecca' # str | ID of the Governance Group. # str | ID of the Governance Group.
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 50 # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    try:
        # List governance group members
        
        results = GovernanceGroupsApi(api_client).list_workgroup_members_v1(workgroup_id=workgroup_id)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).list_workgroup_members_v1(workgroup_id, offset, limit, count, sorters)
        print("The response of GovernanceGroupsApi->list_workgroup_members_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->list_workgroup_members_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-workgroups-v1
List governance groups
This API returns list of Governance Groups

[API Spec](https://developer.sailpoint.com/docs/api/list-workgroups-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description**

### Return type
[**List[WorkgroupDto]**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Governance Groups | List[WorkgroupDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.workgroup_dto import WorkgroupDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name sw \"Test\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional)

    try:
        # List governance groups
        
        results = GovernanceGroupsApi(api_client).list_workgroups_v1()
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).list_workgroups_v1(offset, limit, count, filters, sorters)
        print("The response of GovernanceGroupsApi->list_workgroups_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->list_workgroups_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-workgroup-v1
Patch a governance group
This API updates an existing governance group by ID. The following fields and objects are patchable:
* name
* description
* owner

[API Spec](https://developer.sailpoint.com/docs/api/patch-workgroup-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Governance Group
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) |   (optional) | 

### Return type
[**WorkgroupDto**](../models/workgroup-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Governance Group. | WorkgroupDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.json_patch_operation import JsonPatchOperation
from sailpoint.governance_groups.models.workgroup_dto import WorkgroupDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180837ca6693d017ca8d097500149' # str | ID of the Governance Group # str | ID of the Governance Group
    json_patch_operation = '''[{"op":"replace","path":"/description","value":"Governance Group new description."}]''' # List[JsonPatchOperation] |  (optional)

    try:
        # Patch a governance group
        
        results = GovernanceGroupsApi(api_client).patch_workgroup_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).patch_workgroup_v1(id, new_json_patch_operation)
        print("The response of GovernanceGroupsApi->patch_workgroup_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->patch_workgroup_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-workgroup-members-v1
Add members to governance group
This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/update-workgroup-members-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | workgroup_id | **str** | True  | ID of the Governance Group.
 Body  | bulk_workgroup_members_request_inner | [**[]BulkWorkgroupMembersRequestInner**](../models/bulk-workgroup-members-request-inner) | True  | List of identities to be added to a Governance Group members list.

### Return type
[**List[WorkgroupMemberAddItem]**](../models/workgroup-member-add-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | List of added and not added identities into  Governance Group members list. | List[WorkgroupMemberAddItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListWorkgroupsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListWorkgroupsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.governance_groups.api.governance_groups_api import GovernanceGroupsApi
from sailpoint.governance_groups.api_client import ApiClient
from sailpoint.governance_groups.models.bulk_workgroup_members_request_inner import BulkWorkgroupMembersRequestInner
from sailpoint.governance_groups.models.workgroup_member_add_item import WorkgroupMemberAddItem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    workgroup_id = '2c91808a7813090a017814121919ecca' # str | ID of the Governance Group. # str | ID of the Governance Group.
    bulk_workgroup_members_request_inner = '''[sailpoint.governance_groups.BulkWorkgroupMembersRequestInner()]''' # List[BulkWorkgroupMembersRequestInner] | List of identities to be added to a Governance Group members list.

    try:
        # Add members to governance group
        new_bulk_workgroup_members_request_inner = BulkWorkgroupMembersRequestInner.from_json(bulk_workgroup_members_request_inner)
        results = GovernanceGroupsApi(api_client).update_workgroup_members_v1(workgroup_id=workgroup_id, bulk_workgroup_members_request_inner=new_bulk_workgroup_members_request_inner)
        # Below is a request that includes all optional parameters
        # results = GovernanceGroupsApi(api_client).update_workgroup_members_v1(workgroup_id, new_bulk_workgroup_members_request_inner)
        print("The response of GovernanceGroupsApi->update_workgroup_members_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GovernanceGroupsApi->update_workgroup_members_v1: %s\n" % e)
```



[[Back to top]](#) 



