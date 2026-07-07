---
id: non-employee-lifecycle-management
title: Non_Employee_Lifecycle_Management
pagination_label: Non_Employee_Lifecycle_Management
sidebar_label: Non_Employee_Lifecycle_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Non_Employee_Lifecycle_Management', 'Non_Employee_Lifecycle_Management'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'Non_Employee_Lifecycle_Management', 'Non_Employee_Lifecycle_Management']
---

# sailpoint.non_employee_lifecycle_management.NonEmployeeLifecycleManagementApi
  Use this API to implement non-employee lifecycle management functionality. 
With this functionality in place, administrators can create non-employee records and configure them for use in their organizations. 
This allows organizations to provide secure access to non-employees and control that access. 

The &#39;non-employee&#39; term refers to any consultant, contractor, intern, or other user in an organization who is not a full-time permanent employee. 
Organizations can track non-employees&#39; access and activity in Identity Security Cloud by creating and maintaining non-employee sources. 
Organizations can have a maximum of 50 non-employee sources. 

By using SailPoint&#39;s Non-Employee Lifecycle Management functionality, you agree to the following:

- SailPoint is not responsible for storing sensitive data. 
You may only add account attributes to non-employee identities that are necessary for business operations and are consistent with your contractual limitations on data that may be sent or stored in Identity Security Cloud.

- You are responsible for regularly downloading your list of non-employee accounts for all the sources you create and storing this list of accounts in a managed location to maintain an authoritative system of record and backup data for these accounts.

To manage non-employees in Identity Security Cloud, administrators must create a non-employee source and add accounts to the source. 

To create a non-employee source in Identity Security Cloud, administrators must use the Admin panel to go to Connections &gt; Sources.
They must then specify &#39;Non-Employee&#39; in the &#39;Source Type&#39; field. 
Refer to [Creating a Non-Employee Source](https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#creating-a-non-employee-source) for more details about how to create non-employee sources.

To add accounts to a non-employee source in Identity Security Cloud, administrators can select the non-employee source and add the accounts. 
They can also use the &#39;Manage Non-Employees&#39; widget on their user dashboards to reach the list of sources and then select the non-employee source they want to add the accounts to. 

Administrators can either add accounts individually or in bulk. Each non-employee source can have a maximum of 20,000 accounts. 
To add accounts in bulk, they must select the &#39;Bulk Upload&#39; option and upload a CSV file. 
Refer to [Adding Accounts](https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#adding-accounts) for more details about how to add accounts to non-employee sources.

Once administrators have created the non-employee source and added accounts to it, they can create identity profiles to generate identities for the non-employee accounts and manage the non-employee identities the same way they would any other identities. 

Refer to [Managing Non-Employee Sources and Accounts](https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html) for more information about non-employee lifecycle management.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-non-employee-request-v1**](#approve-non-employee-request-v1) | **POST** `/non-employee-approvals/v1/{id}/approve` | Approve a non-employee request
[**create-non-employee-record-v1**](#create-non-employee-record-v1) | **POST** `/non-employee-records/v1` | Create non-employee record
[**create-non-employee-request-v1**](#create-non-employee-request-v1) | **POST** `/non-employee-requests/v1` | Create non-employee request
[**create-non-employee-source-schema-attributes-v1**](#create-non-employee-source-schema-attributes-v1) | **POST** `/non-employee-sources/v1/{sourceId}/schema-attributes` | Create a new schema attribute for non-employee source
[**create-non-employee-source-v1**](#create-non-employee-source-v1) | **POST** `/non-employee-sources/v1` | Create non-employee source
[**delete-non-employee-record-v1**](#delete-non-employee-record-v1) | **DELETE** `/non-employee-records/v1/{id}` | Delete non-employee record
[**delete-non-employee-records-in-bulk-v1**](#delete-non-employee-records-in-bulk-v1) | **POST** `/non-employee-records/v1/bulk-delete` | Delete multiple non-employee records
[**delete-non-employee-request-v1**](#delete-non-employee-request-v1) | **DELETE** `/non-employee-requests/v1/{id}` | Delete non-employee request
[**delete-non-employee-schema-attribute-v1**](#delete-non-employee-schema-attribute-v1) | **DELETE** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Delete a schema attribute for non-employee source
[**delete-non-employee-source-schema-attributes-v1**](#delete-non-employee-source-schema-attributes-v1) | **DELETE** `/non-employee-sources/v1/{sourceId}/schema-attributes` | Delete all custom schema attributes for non-employee source
[**delete-non-employee-source-v1**](#delete-non-employee-source-v1) | **DELETE** `/non-employee-sources/v1/{sourceId}` | Delete non-employee source
[**export-non-employee-records-v1**](#export-non-employee-records-v1) | **GET** `/non-employee-sources/v1/{id}/non-employees/download` | Exports non-employee records to csv
[**export-non-employee-source-schema-template-v1**](#export-non-employee-source-schema-template-v1) | **GET** `/non-employee-sources/v1/{id}/schema-attributes-template/download` | Exports source schema template
[**get-non-employee-approval-summary-v1**](#get-non-employee-approval-summary-v1) | **GET** `/non-employee-approvals/v1/summary/{requested-for}` | Get summary of non-employee approval requests
[**get-non-employee-approval-v1**](#get-non-employee-approval-v1) | **GET** `/non-employee-approvals/v1/{id}` | Get a non-employee approval item detail
[**get-non-employee-bulk-upload-status-v1**](#get-non-employee-bulk-upload-status-v1) | **GET** `/non-employee-sources/v1/{id}/non-employee-bulk-upload/status` | Obtain the status of bulk upload on the source
[**get-non-employee-record-v1**](#get-non-employee-record-v1) | **GET** `/non-employee-records/v1/{id}` | Get a non-employee record
[**get-non-employee-request-summary-v1**](#get-non-employee-request-summary-v1) | **GET** `/non-employee-requests/v1/summary/{requested-for}` | Get summary of non-employee requests
[**get-non-employee-request-v1**](#get-non-employee-request-v1) | **GET** `/non-employee-requests/v1/{id}` | Get a non-employee request
[**get-non-employee-schema-attribute-v1**](#get-non-employee-schema-attribute-v1) | **GET** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Get schema attribute non-employee source
[**get-non-employee-source-schema-attributes-v1**](#get-non-employee-source-schema-attributes-v1) | **GET** `/non-employee-sources/v1/{sourceId}/schema-attributes` | List schema attributes non-employee source
[**get-non-employee-source-v1**](#get-non-employee-source-v1) | **GET** `/non-employee-sources/v1/{sourceId}` | Get a non-employee source
[**import-non-employee-records-in-bulk-v1**](#import-non-employee-records-in-bulk-v1) | **POST** `/non-employee-sources/v1/{id}/non-employee-bulk-upload` | Imports, or updates, non-employee records
[**list-non-employee-approvals-v1**](#list-non-employee-approvals-v1) | **GET** `/non-employee-approvals/v1` | Get list of non-employee approval requests
[**list-non-employee-records-v1**](#list-non-employee-records-v1) | **GET** `/non-employee-records/v1` | List non-employee records
[**list-non-employee-requests-v1**](#list-non-employee-requests-v1) | **GET** `/non-employee-requests/v1` | List non-employee requests
[**list-non-employee-sources-v1**](#list-non-employee-sources-v1) | **GET** `/non-employee-sources/v1` | List non-employee sources
[**patch-non-employee-record-v1**](#patch-non-employee-record-v1) | **PATCH** `/non-employee-records/v1/{id}` | Patch non-employee record
[**patch-non-employee-schema-attribute-v1**](#patch-non-employee-schema-attribute-v1) | **PATCH** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Patch a schema attribute for non-employee source
[**patch-non-employee-source-v1**](#patch-non-employee-source-v1) | **PATCH** `/non-employee-sources/v1/{sourceId}` | Patch a non-employee source
[**reject-non-employee-request-v1**](#reject-non-employee-request-v1) | **POST** `/non-employee-approvals/v1/{id}/reject` | Reject a non-employee request
[**update-non-employee-record-v1**](#update-non-employee-record-v1) | **PUT** `/non-employee-records/v1/{id}` | Update non-employee record


## approve-non-employee-request-v1
Approve a non-employee request
Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-non-employee-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee approval item id (UUID)
 Body  | nonemployeeapprovaldecision | [**Nonemployeeapprovaldecision**](../models/nonemployeeapprovaldecision) | True  | 

### Return type
[**Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee approval item object. | Nonemployeeapprovalitem |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovaldecision import Nonemployeeapprovaldecision
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalitem import Nonemployeeapprovalitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Non-Employee approval item id (UUID) # str | Non-Employee approval item id (UUID)
    nonemployeeapprovaldecision = '''sailpoint.non_employee_lifecycle_management.Nonemployeeapprovaldecision()''' # Nonemployeeapprovaldecision | 

    try:
        # Approve a non-employee request
        new_nonemployeeapprovaldecision = Nonemployeeapprovaldecision.from_json(nonemployeeapprovaldecision)
        results = NonEmployeeLifecycleManagementApi(api_client).approve_non_employee_request_v1(id=id, nonemployeeapprovaldecision=new_nonemployeeapprovaldecision)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).approve_non_employee_request_v1(id, new_nonemployeeapprovaldecision)
        print("The response of NonEmployeeLifecycleManagementApi->approve_non_employee_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->approve_non_employee_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-record-v1
Create non-employee record
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-record-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | nonemployeerequestbody | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | True  | Non-Employee record creation request body.

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created non-employee record. | Nonemployeerecord |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerecord import Nonemployeerecord
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestbody import Nonemployeerequestbody
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    nonemployeerequestbody = '''sailpoint.non_employee_lifecycle_management.Nonemployeerequestbody()''' # Nonemployeerequestbody | Non-Employee record creation request body.

    try:
        # Create non-employee record
        new_nonemployeerequestbody = Nonemployeerequestbody.from_json(nonemployeerequestbody)
        results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_record_v1(nonemployeerequestbody=new_nonemployeerequestbody)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_record_v1(new_nonemployeerequestbody)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_record_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_record_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-request-v1
Create non-employee request
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | nonemployeerequestbody | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | True  | Non-Employee creation request body

### Return type
[**Nonemployeerequest**](../models/nonemployeerequest)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee request creation object | Nonemployeerequest |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequest import Nonemployeerequest
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestbody import Nonemployeerequestbody
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    nonemployeerequestbody = '''sailpoint.non_employee_lifecycle_management.Nonemployeerequestbody()''' # Nonemployeerequestbody | Non-Employee creation request body

    try:
        # Create non-employee request
        new_nonemployeerequestbody = Nonemployeerequestbody.from_json(nonemployeerequestbody)
        results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_request_v1(nonemployeerequestbody=new_nonemployeerequestbody)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_request_v1(new_nonemployeerequestbody)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-source-schema-attributes-v1
Create a new schema attribute for non-employee source
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-schema-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | nonemployeeschemaattributebody | [**Nonemployeeschemaattributebody**](../models/nonemployeeschemaattributebody) | True  | 

### Return type
[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Schema Attribute created. | Nonemployeeschemaattribute |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattribute import Nonemployeeschemaattribute
from sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattributebody import Nonemployeeschemaattributebody
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id
    nonemployeeschemaattributebody = '''sailpoint.non_employee_lifecycle_management.Nonemployeeschemaattributebody()''' # Nonemployeeschemaattributebody | 

    try:
        # Create a new schema attribute for non-employee source
        new_nonemployeeschemaattributebody = Nonemployeeschemaattributebody.from_json(nonemployeeschemaattributebody)
        results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source_schema_attributes_v1(source_id=source_id, nonemployeeschemaattributebody=new_nonemployeeschemaattributebody)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source_schema_attributes_v1(source_id, new_nonemployeeschemaattributebody)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_source_schema_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_source_schema_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-source-v1
Create non-employee source
Create a non-employee source. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | nonemployeesourcerequestbody | [**Nonemployeesourcerequestbody**](../models/nonemployeesourcerequestbody) | True  | Non-Employee source creation request body.

### Return type
[**Nonemployeesourcewithcloudexternalid**](../models/nonemployeesourcewithcloudexternalid)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created non-employee source. | Nonemployeesourcewithcloudexternalid |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcerequestbody import Nonemployeesourcerequestbody
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcewithcloudexternalid import Nonemployeesourcewithcloudexternalid
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    nonemployeesourcerequestbody = '''sailpoint.non_employee_lifecycle_management.Nonemployeesourcerequestbody()''' # Nonemployeesourcerequestbody | Non-Employee source creation request body.

    try:
        # Create non-employee source
        new_nonemployeesourcerequestbody = Nonemployeesourcerequestbody.from_json(nonemployeesourcerequestbody)
        results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source_v1(nonemployeesourcerequestbody=new_nonemployeesourcerequestbody)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source_v1(new_nonemployeesourcerequestbody)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-record-v1
Delete non-employee record
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-record-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee record id (UUID)

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-Employee record id (UUID) # str | Non-Employee record id (UUID)

    try:
        # Delete non-employee record
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_record_v1(id=id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_record_v1(id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_record_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-records-in-bulk-v1
Delete multiple non-employee records
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-records-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | delete_non_employee_records_in_bulk_v1_request | [**DeleteNonEmployeeRecordsInBulkV1Request**](../models/delete-non-employee-records-in-bulk-v1-request) | True  | Non-Employee bulk delete request body.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.delete_non_employee_records_in_bulk_v1_request import DeleteNonEmployeeRecordsInBulkV1Request
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    delete_non_employee_records_in_bulk_v1_request = '''sailpoint.non_employee_lifecycle_management.DeleteNonEmployeeRecordsInBulkV1Request()''' # DeleteNonEmployeeRecordsInBulkV1Request | Non-Employee bulk delete request body.

    try:
        # Delete multiple non-employee records
        new_delete_non_employee_records_in_bulk_v1_request = DeleteNonEmployeeRecordsInBulkV1Request.from_json(delete_non_employee_records_in_bulk_v1_request)
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_records_in_bulk_v1(delete_non_employee_records_in_bulk_v1_request=new_delete_non_employee_records_in_bulk_v1_request)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_records_in_bulk_v1(new_delete_non_employee_records_in_bulk_v1_request)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_records_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-request-v1
Delete non-employee request
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee request id in the UUID format

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ac110005-7156-1150-8171-5b292e3e0084' # str | Non-Employee request id in the UUID format # str | Non-Employee request id in the UUID format

    try:
        # Delete non-employee request
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_request_v1(id=id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_request_v1(id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-schema-attribute-v1
Delete a schema attribute for non-employee source
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-schema-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attribute_id | **str** | True  | The Schema Attribute Id (UUID)
Path   | source_id | **str** | True  | The Source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    attribute_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Schema Attribute Id (UUID) # str | The Schema Attribute Id (UUID)
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # Delete a schema attribute for non-employee source
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_schema_attribute_v1(attribute_id=attribute_id, source_id=source_id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_schema_attribute_v1(attribute_id, source_id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_schema_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-source-schema-attributes-v1
Delete all custom schema attributes for non-employee source
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-schema-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # Delete all custom schema attributes for non-employee source
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source_schema_attributes_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source_schema_attributes_v1(source_id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_source_schema_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-source-v1
Delete non-employee source
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id # str | Source Id

    try:
        # Delete non-employee source
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source_v1(source_id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## export-non-employee-records-v1
Exports non-employee records to csv
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-records-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id (UUID)

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Exported CSV |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id (UUID) # str | Source Id (UUID)

    try:
        # Exports non-employee records to csv
        
        NonEmployeeLifecycleManagementApi(api_client).export_non_employee_records_v1(id=id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).export_non_employee_records_v1(id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->export_non_employee_records_v1: %s\n" % e)
```



[[Back to top]](#) 

## export-non-employee-source-schema-template-v1
Exports source schema template
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-source-schema-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id (UUID)

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Exported Source Schema Template |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id (UUID) # str | Source Id (UUID)

    try:
        # Exports source schema template
        
        NonEmployeeLifecycleManagementApi(api_client).export_non_employee_source_schema_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).export_non_employee_source_schema_template_v1(id)
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->export_non_employee_source_schema_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-approval-summary-v1
Get summary of non-employee approval requests
This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id.
  2. The current user is an approver, in which case "me" should be provided
as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-approval-summary-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | requested_for | **str** | True  | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

### Return type
[**Nonemployeeapprovalsummary**](../models/nonemployeeapprovalsummary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | summary of non-employee approval requests | Nonemployeeapprovalsummary |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalsummary import Nonemployeeapprovalsummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = '2c91808280430dfb0180431a59440460' # str | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # str | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

    try:
        # Get summary of non-employee approval requests
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval_summary_v1(requested_for=requested_for)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval_summary_v1(requested_for)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_approval_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_approval_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-approval-v1
Get a non-employee approval item detail
Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-approval-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee approval item id (UUID)
  Query | include_detail | **bool** |   (optional) | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*

### Return type
[**Nonemployeeapprovalitemdetail**](../models/nonemployeeapprovalitemdetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee approval item object. | Nonemployeeapprovalitemdetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalitemdetail import Nonemployeeapprovalitemdetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Non-Employee approval item id (UUID) # str | Non-Employee approval item id (UUID)
    include_detail = true # bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional) # bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

    try:
        # Get a non-employee approval item detail
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval_v1(id, include_detail)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_approval_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-bulk-upload-status-v1
Obtain the status of bulk upload on the source
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-bulk-upload-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID (UUID)

### Return type
[**Nonemployeebulkuploadstatus**](../models/nonemployeebulkuploadstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the newest bulk-upload job, if any. | Nonemployeebulkuploadstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeebulkuploadstatus import Nonemployeebulkuploadstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source ID (UUID) # str | Source ID (UUID)

    try:
        # Obtain the status of bulk upload on the source
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_bulk_upload_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_bulk_upload_status_v1(id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_bulk_upload_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_bulk_upload_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-record-v1
Get a non-employee record
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-record-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee record id (UUID)

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee record object | Nonemployeerecord |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerecord import Nonemployeerecord
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-Employee record id (UUID) # str | Non-Employee record id (UUID)

    try:
        # Get a non-employee record
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_record_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_record_v1(id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_record_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_record_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-request-summary-v1
Get summary of non-employee requests
This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-request-summary-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | requested_for | **str** | True  | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

### Return type
[**Nonemployeerequestsummary**](../models/nonemployeerequestsummary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee request summary object. | Nonemployeerequestsummary |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestsummary import Nonemployeerequestsummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = '2c91808280430dfb0180431a59440460' # str | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # str | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

    try:
        # Get summary of non-employee requests
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request_summary_v1(requested_for=requested_for)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request_summary_v1(requested_for)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_request_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_request_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-request-v1
Get a non-employee request
This gets a non-employee request.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in this case the user
can get the non-employee request for any user.
  2. The user must be the owner of the non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee request id (UUID)

### Return type
[**Nonemployeerequest**](../models/nonemployeerequest)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee request object. | Nonemployeerequest |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequest import Nonemployeerequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ac110005-7156-1150-8171-5b292e3e0084' # str | Non-Employee request id (UUID) # str | Non-Employee request id (UUID)

    try:
        # Get a non-employee request
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request_v1(id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-schema-attribute-v1
Get schema attribute non-employee source
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-schema-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attribute_id | **str** | True  | The Schema Attribute Id (UUID)
Path   | source_id | **str** | True  | The Source id

### Return type
[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema Attribute | Nonemployeeschemaattribute |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattribute import Nonemployeeschemaattribute
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    attribute_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Schema Attribute Id (UUID) # str | The Schema Attribute Id (UUID)
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # Get schema attribute non-employee source
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_schema_attribute_v1(attribute_id=attribute_id, source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_schema_attribute_v1(attribute_id, source_id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_schema_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_schema_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-source-schema-attributes-v1
List schema attributes non-employee source
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-source-schema-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
[**List[Nonemployeeschemaattribute]**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of Schema Attributes | List[Nonemployeeschemaattribute] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattribute import Nonemployeeschemaattribute
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # List schema attributes non-employee source
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source_schema_attributes_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source_schema_attributes_v1(source_id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_source_schema_attributes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_source_schema_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-source-v1
Get a non-employee source
This gets a non-employee source. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request any source.
  2. The current user is an account manager, in which case the user can only
request sources that they own.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id

### Return type
[**Nonemployeesource**](../models/nonemployeesource)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee source object. | Nonemployeesource |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeesource import Nonemployeesource
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c91808b7c28b350017c2a2ec5790aa1' # str | Source Id # str | Source Id

    try:
        # Get a non-employee source
        
        results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source_v1(source_id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-non-employee-records-in-bulk-v1
Imports, or updates, non-employee records
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-non-employee-records-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id (UUID)
   | data | **bytearray** | True  | 

### Return type
[**Nonemployeebulkuploadjob**](../models/nonemployeebulkuploadjob)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | The CSV was accepted to be bulk inserted now or at a later time. | Nonemployeebulkuploadjob |  -  |
400 | Client Error - Returned if the request body is invalid. The response body will contain the list of specific errors with one on each line.  | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeebulkuploadjob import Nonemployeebulkuploadjob
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id (UUID) # str | Source Id (UUID)
    data = None # bytearray |  # bytearray | 

    try:
        # Imports, or updates, non-employee records
        
        results = NonEmployeeLifecycleManagementApi(api_client).import_non_employee_records_in_bulk_v1(id=id, data=data)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).import_non_employee_records_in_bulk_v1(id, data)
        print("The response of NonEmployeeLifecycleManagementApi->import_non_employee_records_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->import_non_employee_records_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-approvals-v1
Get list of non-employee approval requests
This gets a list of non-employee approval requests.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can list the approvals for any approver.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-approvals-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requested_for | **str** |   (optional) | The identity for whom the request was made. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type
[**List[Nonemployeeapprovalitem]**](../models/nonemployeeapprovalitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of approval items. | List[Nonemployeeapprovalitem] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalitem import Nonemployeeapprovalitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = '2c91808280430dfb0180431a59440460' # str | The identity for whom the request was made. *me* indicates the current user. (optional) # str | The identity for whom the request was made. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'approvalStatus eq \"Pending\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional)
    sorters = 'created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

    try:
        # Get list of non-employee approval requests
        
        results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_approvals_v1()
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_approvals_v1(requested_for, limit, offset, count, filters, sorters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_approvals_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_approvals_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-records-v1
List non-employee records
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-records-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*

### Return type
[**List[Nonemployeerecord]**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee record objects | List[Nonemployeerecord] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerecord import Nonemployeerecord
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'accountName,sourceId' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional)
    filters = 'sourceId eq \"2c91808568c529c60168cca6f90c1313\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)

    try:
        # List non-employee records
        
        results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_records_v1()
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_records_v1(limit, offset, count, sorters, filters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_records_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_records_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-requests-v1
List non-employee requests
This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list non-employee requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-requests-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requested_for | **str** | True  | The identity for whom the request was made. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* 

### Return type
[**List[Nonemployeerequest]**](../models/nonemployeerequest)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of non-employee request objects. | List[Nonemployeerequest] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequest import Nonemployeerequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = 'e136567de87e4d029e60b3c3c55db56d' # str | The identity for whom the request was made. *me* indicates the current user. # str | The identity for whom the request was made. *me* indicates the current user.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'created,approvalStatus' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional)
    filters = 'sourceId eq \"2c91808568c529c60168cca6f90c1313\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  (optional)

    try:
        # List non-employee requests
        
        results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_requests_v1(requested_for=requested_for)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_requests_v1(requested_for, limit, offset, count, sorters, filters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_requests_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_requests_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-sources-v1
List non-employee sources
Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter: 
  1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager's `id`.
  2. If the current user is an account manager, the user should provide 'me' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-sources-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | requested_for | **str** |   (optional) | Identity the request was made for. Use 'me' to indicate the current user.
  Query | non_employee_count | **bool** |   (optional) (default to False) | Flag that determines whether the API will return a non-employee count associated with the source.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId**

### Return type
[**List[Nonemployeesourcewithnecount]**](../models/nonemployeesourcewithnecount)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of non-employee sources objects. | List[Nonemployeesourcewithnecount] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcewithnecount import Nonemployeesourcewithnecount
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    requested_for = 'me' # str | Identity the request was made for. Use 'me' to indicate the current user. (optional) # str | Identity the request was made for. Use 'me' to indicate the current user. (optional)
    non_employee_count = False # bool | Flag that determines whether the API will return a non-employee count associated with the source. (optional) (default to False) # bool | Flag that determines whether the API will return a non-employee count associated with the source. (optional) (default to False)
    sorters = 'name,created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional)

    try:
        # List non-employee sources
        
        results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_sources_v1()
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_sources_v1(limit, offset, count, requested_for, non_employee_count, sorters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_sources_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_sources_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-non-employee-record-v1
Patch non-employee record
This request will patch a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-record-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-employee record id (UUID)
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A patched non-employee record. | Nonemployeerecord |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.non_employee_lifecycle_management.models.nonemployeerecord import Nonemployeerecord
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-employee record id (UUID) # str | Non-employee record id (UUID)
    jsonpatchoperation = '''[{"op":"replace","path":"/endDate","value":"2019-08-23T18:40:35.772Z"}]''' # List[Jsonpatchoperation] | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

    try:
        # Patch non-employee record
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_record_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_record_v1(id, new_jsonpatchoperation)
        print("The response of NonEmployeeLifecycleManagementApi->patch_non_employee_record_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->patch_non_employee_record_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-non-employee-schema-attribute-v1
Patch a schema attribute for non-employee source
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-schema-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attribute_id | **str** | True  | The Schema Attribute Id (UUID)
Path   | source_id | **str** | True  | The Source id
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

### Return type
[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema Attribute was successfully patched. | Nonemployeeschemaattribute |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattribute import Nonemployeeschemaattribute
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    attribute_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Schema Attribute Id (UUID) # str | The Schema Attribute Id (UUID)
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id
    jsonpatchoperation = '''[{"op":"replace","path":"/label","value":{"new attribute label":null}}]''' # List[Jsonpatchoperation] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

    try:
        # Patch a schema attribute for non-employee source
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_schema_attribute_v1(attribute_id=attribute_id, source_id=source_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_schema_attribute_v1(attribute_id, source_id, new_jsonpatchoperation)
        print("The response of NonEmployeeLifecycleManagementApi->patch_non_employee_schema_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->patch_non_employee_schema_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-non-employee-source-v1
Patch a non-employee source
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-source-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Nonemployeesource**](../models/nonemployeesource)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A patched non-employee source object. | Nonemployeesource |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.non_employee_lifecycle_management.models.nonemployeesource import Nonemployeesource
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id # str | Source Id
    jsonpatchoperation = '''[{"op":"replace","path":"/name","value":{"new name":null}},{"op":"replace","path":"/approvers","value":["2c91809f703bb37a017040a2fe8748c7","48b1f463c9e8427db5a5071bd81914b8"]}]''' # List[Jsonpatchoperation] | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Patch a non-employee source
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_source_v1(source_id=source_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_source_v1(source_id, new_jsonpatchoperation)
        print("The response of NonEmployeeLifecycleManagementApi->patch_non_employee_source_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->patch_non_employee_source_v1: %s\n" % e)
```



[[Back to top]](#) 

## reject-non-employee-request-v1
Reject a non-employee request
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-non-employee-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee approval item id (UUID)
 Body  | nonemployeerejectapprovaldecision | [**Nonemployeerejectapprovaldecision**](../models/nonemployeerejectapprovaldecision) | True  | 

### Return type
[**Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee approval item object. | Nonemployeeapprovalitem |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalitem import Nonemployeeapprovalitem
from sailpoint.non_employee_lifecycle_management.models.nonemployeerejectapprovaldecision import Nonemployeerejectapprovaldecision
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Non-Employee approval item id (UUID) # str | Non-Employee approval item id (UUID)
    nonemployeerejectapprovaldecision = '''sailpoint.non_employee_lifecycle_management.Nonemployeerejectapprovaldecision()''' # Nonemployeerejectapprovaldecision | 

    try:
        # Reject a non-employee request
        new_nonemployeerejectapprovaldecision = Nonemployeerejectapprovaldecision.from_json(nonemployeerejectapprovaldecision)
        results = NonEmployeeLifecycleManagementApi(api_client).reject_non_employee_request_v1(id=id, nonemployeerejectapprovaldecision=new_nonemployeerejectapprovaldecision)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).reject_non_employee_request_v1(id, new_nonemployeerejectapprovaldecision)
        print("The response of NonEmployeeLifecycleManagementApi->reject_non_employee_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->reject_non_employee_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-non-employee-record-v1
Update non-employee record
This request will update a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-non-employee-record-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-employee record id (UUID)
 Body  | nonemployeerequestbody | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | True  | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

### Return type
[**Nonemployeerecord**](../models/nonemployeerecord)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An updated non-employee record. | Nonemployeerecord |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListNonEmployeeRecordsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListNonEmployeeRecordsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.non_employee_lifecycle_management.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.non_employee_lifecycle_management.api_client import ApiClient
from sailpoint.non_employee_lifecycle_management.models.nonemployeerecord import Nonemployeerecord
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestbody import Nonemployeerequestbody
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-employee record id (UUID) # str | Non-employee record id (UUID)
    nonemployeerequestbody = '''sailpoint.non_employee_lifecycle_management.Nonemployeerequestbody()''' # Nonemployeerequestbody | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

    try:
        # Update non-employee record
        new_nonemployeerequestbody = Nonemployeerequestbody.from_json(nonemployeerequestbody)
        results = NonEmployeeLifecycleManagementApi(api_client).update_non_employee_record_v1(id=id, nonemployeerequestbody=new_nonemployeerequestbody)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).update_non_employee_record_v1(id, new_nonemployeerequestbody)
        print("The response of NonEmployeeLifecycleManagementApi->update_non_employee_record_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->update_non_employee_record_v1: %s\n" % e)
```



[[Back to top]](#) 



