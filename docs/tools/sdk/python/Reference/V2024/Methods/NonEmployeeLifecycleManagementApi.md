---
id: v2024-non-employee-lifecycle-management
title: Non_Employee_Lifecycle_Management
pagination_label: Non_Employee_Lifecycle_Management
sidebar_label: Non_Employee_Lifecycle_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Non_Employee_Lifecycle_Management', 'V2024Non_Employee_Lifecycle_Management'] 
slug: /tools/sdk/python/v2024/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'Non_Employee_Lifecycle_Management', 'V2024Non_Employee_Lifecycle_Management']
---

# sailpoint.v2024.NonEmployeeLifecycleManagementApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-non-employee-request**](#approve-non-employee-request) | **POST** `/non-employee-approvals/{id}/approve` | Approve a Non-Employee Request
[**create-non-employee-record**](#create-non-employee-record) | **POST** `/non-employee-records` | Create Non-Employee Record
[**create-non-employee-request**](#create-non-employee-request) | **POST** `/non-employee-requests` | Create Non-Employee Request
[**create-non-employee-source**](#create-non-employee-source) | **POST** `/non-employee-sources` | Create Non-Employee Source
[**create-non-employee-source-schema-attributes**](#create-non-employee-source-schema-attributes) | **POST** `/non-employee-sources/{sourceId}/schema-attributes` | Create a new Schema Attribute for Non-Employee Source
[**delete-non-employee-record**](#delete-non-employee-record) | **DELETE** `/non-employee-records/{id}` | Delete Non-Employee Record
[**delete-non-employee-records-in-bulk**](#delete-non-employee-records-in-bulk) | **POST** `/non-employee-records/bulk-delete` | Delete Multiple Non-Employee Records
[**delete-non-employee-request**](#delete-non-employee-request) | **DELETE** `/non-employee-requests/{id}` | Delete Non-Employee Request
[**delete-non-employee-schema-attribute**](#delete-non-employee-schema-attribute) | **DELETE** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Delete a Schema Attribute for Non-Employee Source
[**delete-non-employee-source**](#delete-non-employee-source) | **DELETE** `/non-employee-sources/{sourceId}` | Delete Non-Employee Source
[**delete-non-employee-source-schema-attributes**](#delete-non-employee-source-schema-attributes) | **DELETE** `/non-employee-sources/{sourceId}/schema-attributes` | Delete all custom schema attributes for Non-Employee Source
[**export-non-employee-records**](#export-non-employee-records) | **GET** `/non-employee-sources/{id}/non-employees/download` | Exports Non-Employee Records to CSV
[**export-non-employee-source-schema-template**](#export-non-employee-source-schema-template) | **GET** `/non-employee-sources/{id}/schema-attributes-template/download` | Exports Source Schema Template
[**get-non-employee-approval**](#get-non-employee-approval) | **GET** `/non-employee-approvals/{id}` | Get a non-employee approval item detail
[**get-non-employee-approval-summary**](#get-non-employee-approval-summary) | **GET** `/non-employee-approvals/summary/{requested-for}` | Get Summary of Non-Employee Approval Requests
[**get-non-employee-bulk-upload-status**](#get-non-employee-bulk-upload-status) | **GET** `/non-employee-sources/{id}/non-employee-bulk-upload/status` | Obtain the status of bulk upload on the source
[**get-non-employee-record**](#get-non-employee-record) | **GET** `/non-employee-records/{id}` | Get a Non-Employee Record
[**get-non-employee-request**](#get-non-employee-request) | **GET** `/non-employee-requests/{id}` | Get a Non-Employee Request
[**get-non-employee-request-summary**](#get-non-employee-request-summary) | **GET** `/non-employee-requests/summary/{requested-for}` | Get Summary of Non-Employee Requests
[**get-non-employee-schema-attribute**](#get-non-employee-schema-attribute) | **GET** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Get Schema Attribute Non-Employee Source
[**get-non-employee-source**](#get-non-employee-source) | **GET** `/non-employee-sources/{sourceId}` | Get a Non-Employee Source
[**get-non-employee-source-schema-attributes**](#get-non-employee-source-schema-attributes) | **GET** `/non-employee-sources/{sourceId}/schema-attributes` | List Schema Attributes Non-Employee Source
[**import-non-employee-records-in-bulk**](#import-non-employee-records-in-bulk) | **POST** `/non-employee-sources/{id}/non-employee-bulk-upload` | Imports, or Updates, Non-Employee Records
[**list-non-employee-approvals**](#list-non-employee-approvals) | **GET** `/non-employee-approvals` | Get List of Non-Employee Approval Requests
[**list-non-employee-records**](#list-non-employee-records) | **GET** `/non-employee-records` | List Non-Employee Records
[**list-non-employee-requests**](#list-non-employee-requests) | **GET** `/non-employee-requests` | List Non-Employee Requests
[**list-non-employee-sources**](#list-non-employee-sources) | **GET** `/non-employee-sources` | List Non-Employee Sources
[**patch-non-employee-record**](#patch-non-employee-record) | **PATCH** `/non-employee-records/{id}` | Patch Non-Employee Record
[**patch-non-employee-schema-attribute**](#patch-non-employee-schema-attribute) | **PATCH** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Patch a Schema Attribute for Non-Employee Source
[**patch-non-employee-source**](#patch-non-employee-source) | **PATCH** `/non-employee-sources/{sourceId}` | Patch a Non-Employee Source
[**reject-non-employee-request**](#reject-non-employee-request) | **POST** `/non-employee-approvals/{id}/reject` | Reject a Non-Employee Request
[**update-non-employee-record**](#update-non-employee-record) | **PUT** `/non-employee-records/{id}` | Update Non-Employee Record


## approve-non-employee-request
Approve a Non-Employee Request
Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/approve-non-employee-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee approval item id (UUID)
 Body  | non_employee_approval_decision | [**NonEmployeeApprovalDecision**](../models/non-employee-approval-decision) | True  | 

### Return type
[**NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee approval item object. | NonEmployeeApprovalItem |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_approval_decision import NonEmployeeApprovalDecision
from sailpoint.v2024.models.non_employee_approval_item import NonEmployeeApprovalItem
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Non-Employee approval item id (UUID) # str | Non-Employee approval item id (UUID)
    non_employee_approval_decision = {
          "comment" : "Approved by manager"
        } # NonEmployeeApprovalDecision | 

    try:
        # Approve a Non-Employee Request
        new_non_employee_approval_decision = NonEmployeeApprovalDecision()
        new_non_employee_approval_decision.from_json(non_employee_approval_decision)
        results =NonEmployeeLifecycleManagementApi(api_client).approve_non_employee_request(id, new_non_employee_approval_decision)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).approve_non_employee_request(id, new_non_employee_approval_decision)
        print("The response of NonEmployeeLifecycleManagementApi->approve_non_employee_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->approve_non_employee_request: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-record
Create Non-Employee Record
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-non-employee-record)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | non_employee_request_body | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-Employee record creation request body.

### Return type
[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created non-employee record. | NonEmployeeRecord |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_record import NonEmployeeRecord
from sailpoint.v2024.models.non_employee_request_body import NonEmployeeRequestBody
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    non_employee_request_body = {
          "sourceId" : "2c91808568c529c60168cca6f90c1313",
          "firstName" : "William",
          "lastName" : "Smith",
          "manager" : "jane.doe",
          "data" : {
            "description" : "Auditing"
          },
          "accountName" : "william.smith",
          "phone" : "5125555555",
          "endDate" : "2021-03-25T00:00:00-05:00",
          "email" : "william.smith@example.com",
          "startDate" : "2020-03-24T00:00:00-05:00"
        } # NonEmployeeRequestBody | Non-Employee record creation request body.

    try:
        # Create Non-Employee Record
        new_non_employee_request_body = NonEmployeeRequestBody()
        new_non_employee_request_body.from_json(non_employee_request_body)
        results =NonEmployeeLifecycleManagementApi(api_client).create_non_employee_record(new_non_employee_request_body)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_record(new_non_employee_request_body)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_record:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_record: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-request
Create Non-Employee Request
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-non-employee-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | non_employee_request_body | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-Employee creation request body

### Return type
[**NonEmployeeRequest**](../models/non-employee-request)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee request creation object | NonEmployeeRequest |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_request import NonEmployeeRequest
from sailpoint.v2024.models.non_employee_request_body import NonEmployeeRequestBody
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    non_employee_request_body = {
          "sourceId" : "2c91808568c529c60168cca6f90c1313",
          "firstName" : "William",
          "lastName" : "Smith",
          "manager" : "jane.doe",
          "data" : {
            "description" : "Auditing"
          },
          "accountName" : "william.smith",
          "phone" : "5125555555",
          "endDate" : "2021-03-25T00:00:00-05:00",
          "email" : "william.smith@example.com",
          "startDate" : "2020-03-24T00:00:00-05:00"
        } # NonEmployeeRequestBody | Non-Employee creation request body

    try:
        # Create Non-Employee Request
        new_non_employee_request_body = NonEmployeeRequestBody()
        new_non_employee_request_body.from_json(non_employee_request_body)
        results =NonEmployeeLifecycleManagementApi(api_client).create_non_employee_request(new_non_employee_request_body)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_request(new_non_employee_request_body)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_request: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-source
Create Non-Employee Source
This request will create a non-employee source. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-non-employee-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | non_employee_source_request_body | [**NonEmployeeSourceRequestBody**](../models/non-employee-source-request-body) | True  | Non-Employee source creation request body.

### Return type
[**NonEmployeeSourceWithCloudExternalId**](../models/non-employee-source-with-cloud-external-id)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created non-employee source. | NonEmployeeSourceWithCloudExternalId |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_source_request_body import NonEmployeeSourceRequestBody
from sailpoint.v2024.models.non_employee_source_with_cloud_external_id import NonEmployeeSourceWithCloudExternalId
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    non_employee_source_request_body = {
          "owner" : {
            "id" : "2c91808570313110017040b06f344ec9"
          },
          "managementWorkgroup" : "123299",
          "accountManagers" : [ {
            "id" : "2c91808570313110017040b06f344ec9"
          }, {
            "id" : "2c91808570313110017040b06f344ec9"
          }, {
            "id" : "2c91808570313110017040b06f344ec9"
          }, {
            "id" : "2c91808570313110017040b06f344ec9"
          }, {
            "id" : "2c91808570313110017040b06f344ec9"
          } ],
          "name" : "Retail",
          "description" : "Source description",
          "approvers" : [ {
            "id" : "2c91808570313110017040b06f344ec9"
          }, {
            "id" : "2c91808570313110017040b06f344ec9"
          }, {
            "id" : "2c91808570313110017040b06f344ec9"
          } ]
        } # NonEmployeeSourceRequestBody | Non-Employee source creation request body.

    try:
        # Create Non-Employee Source
        new_non_employee_source_request_body = NonEmployeeSourceRequestBody()
        new_non_employee_source_request_body.from_json(non_employee_source_request_body)
        results =NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source(new_non_employee_source_request_body)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source(new_non_employee_source_request_body)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_source: %s\n" % e)
```



[[Back to top]](#) 

## create-non-employee-source-schema-attributes
Create a new Schema Attribute for Non-Employee Source
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-non-employee-source-schema-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id
 Body  | non_employee_schema_attribute_body | [**NonEmployeeSchemaAttributeBody**](../models/non-employee-schema-attribute-body) | True  | 

### Return type
[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Schema Attribute created. | NonEmployeeSchemaAttribute |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_schema_attribute import NonEmployeeSchemaAttribute
from sailpoint.v2024.models.non_employee_schema_attribute_body import NonEmployeeSchemaAttributeBody
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id
    non_employee_schema_attribute_body = {
          "helpText" : "The unique identifier for the account",
          "label" : "Account Name",
          "placeholder" : "Enter a unique user name for this account.",
          "type" : "TEXT",
          "technicalName" : "account.name",
          "required" : true
        } # NonEmployeeSchemaAttributeBody | 

    try:
        # Create a new Schema Attribute for Non-Employee Source
        new_non_employee_schema_attribute_body = NonEmployeeSchemaAttributeBody()
        new_non_employee_schema_attribute_body.from_json(non_employee_schema_attribute_body)
        results =NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source_schema_attributes(source_id, new_non_employee_schema_attribute_body)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).create_non_employee_source_schema_attributes(source_id, new_non_employee_schema_attribute_body)
        print("The response of NonEmployeeLifecycleManagementApi->create_non_employee_source_schema_attributes:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->create_non_employee_source_schema_attributes: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-record
Delete Non-Employee Record
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-non-employee-record)

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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-Employee record id (UUID) # str | Non-Employee record id (UUID)

    try:
        # Delete Non-Employee Record
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_record(id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_record(id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_record: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-records-in-bulk
Delete Multiple Non-Employee Records
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-non-employee-records-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | delete_non_employee_records_in_bulk_request | [**DeleteNonEmployeeRecordsInBulkRequest**](../models/delete-non-employee-records-in-bulk-request) | True  | Non-Employee bulk delete request body.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.delete_non_employee_records_in_bulk_request import DeleteNonEmployeeRecordsInBulkRequest
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    delete_non_employee_records_in_bulk_request = sailpoint.v2024.DeleteNonEmployeeRecordsInBulkRequest() # DeleteNonEmployeeRecordsInBulkRequest | Non-Employee bulk delete request body.

    try:
        # Delete Multiple Non-Employee Records
        new_delete_non_employee_records_in_bulk_request = DeleteNonEmployeeRecordsInBulkRequest()
        new_delete_non_employee_records_in_bulk_request.from_json(delete_non_employee_records_in_bulk_request)
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_records_in_bulk(new_delete_non_employee_records_in_bulk_request)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_records_in_bulk(new_delete_non_employee_records_in_bulk_request)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_records_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-request
Delete Non-Employee Request
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-non-employee-request)

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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ac110005-7156-1150-8171-5b292e3e0084' # str | Non-Employee request id in the UUID format # str | Non-Employee request id in the UUID format

    try:
        # Delete Non-Employee Request
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_request(id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_request(id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_request: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-schema-attribute
Delete a Schema Attribute for Non-Employee Source
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-non-employee-schema-attribute)

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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    attribute_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Schema Attribute Id (UUID) # str | The Schema Attribute Id (UUID)
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # Delete a Schema Attribute for Non-Employee Source
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_schema_attribute(attribute_id, source_id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_schema_attribute(attribute_id, source_id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_schema_attribute: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-source
Delete Non-Employee Source
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-non-employee-source)

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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id # str | Source Id

    try:
        # Delete Non-Employee Source
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source(source_id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source(source_id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_source: %s\n" % e)
```



[[Back to top]](#) 

## delete-non-employee-source-schema-attributes
Delete all custom schema attributes for Non-Employee Source
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-non-employee-source-schema-attributes)

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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # Delete all custom schema attributes for Non-Employee Source
        
        NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source_schema_attributes(source_id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).delete_non_employee_source_schema_attributes(source_id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->delete_non_employee_source_schema_attributes: %s\n" % e)
```



[[Back to top]](#) 

## export-non-employee-records
Exports Non-Employee Records to CSV
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-non-employee-records)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id (UUID) # str | Source Id (UUID)

    try:
        # Exports Non-Employee Records to CSV
        
        NonEmployeeLifecycleManagementApi(api_client).export_non_employee_records(id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).export_non_employee_records(id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->export_non_employee_records: %s\n" % e)
```



[[Back to top]](#) 

## export-non-employee-source-schema-template
Exports Source Schema Template
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-non-employee-source-schema-template)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source Id (UUID) # str | Source Id (UUID)

    try:
        # Exports Source Schema Template
        
        NonEmployeeLifecycleManagementApi(api_client).export_non_employee_source_schema_template(id)
        # Below is a request that includes all optional parameters
        # NonEmployeeLifecycleManagementApi(api_client).export_non_employee_source_schema_template(id)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->export_non_employee_source_schema_template: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-approval
Get a non-employee approval item detail
Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-approval)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee approval item id (UUID)
  Query | include_detail | **bool** |   (optional) | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true*

### Return type
[**NonEmployeeApprovalItemDetail**](../models/non-employee-approval-item-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee approval item object. | NonEmployeeApprovalItemDetail |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_approval_item_detail import NonEmployeeApprovalItemDetail
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Non-Employee approval item id (UUID) # str | Non-Employee approval item id (UUID)
    include_detail = true # bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional) # bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

    try:
        # Get a non-employee approval item detail
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval(id, )
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval(id, include_detail)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_approval:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_approval: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-approval-summary
Get Summary of Non-Employee Approval Requests
This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id.
  2. The current user is an approver, in which case "me" should be provided
as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-approval-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | requested_for | **str** | True  | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

### Return type
[**NonEmployeeApprovalSummary**](../models/non-employee-approval-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | summary of non-employee approval requests | NonEmployeeApprovalSummary |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_approval_summary import NonEmployeeApprovalSummary
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    requested_for = '2c91808280430dfb0180431a59440460' # str | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # str | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

    try:
        # Get Summary of Non-Employee Approval Requests
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval_summary(requested_for)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_approval_summary(requested_for)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_approval_summary:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_approval_summary: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-bulk-upload-status
Obtain the status of bulk upload on the source
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-bulk-upload-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID (UUID)

### Return type
[**NonEmployeeBulkUploadStatus**](../models/non-employee-bulk-upload-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the newest bulk-upload job, if any. | NonEmployeeBulkUploadStatus |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_bulk_upload_status import NonEmployeeBulkUploadStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source ID (UUID) # str | Source ID (UUID)

    try:
        # Obtain the status of bulk upload on the source
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_bulk_upload_status(id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_bulk_upload_status(id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_bulk_upload_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_bulk_upload_status: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-record
Get a Non-Employee Record
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-record)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee record id (UUID)

### Return type
[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee record object | NonEmployeeRecord |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_record import NonEmployeeRecord
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-Employee record id (UUID) # str | Non-Employee record id (UUID)

    try:
        # Get a Non-Employee Record
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_record(id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_record(id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_record:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_record: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-request
Get a Non-Employee Request
This gets a non-employee request.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in this case the user
can get the non-employee request for any user.
  2. The user must be the owner of the non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee request id (UUID)

### Return type
[**NonEmployeeRequest**](../models/non-employee-request)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee request object. | NonEmployeeRequest |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_request import NonEmployeeRequest
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ac110005-7156-1150-8171-5b292e3e0084' # str | Non-Employee request id (UUID) # str | Non-Employee request id (UUID)

    try:
        # Get a Non-Employee Request
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request(id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request(id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_request: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-request-summary
Get Summary of Non-Employee Requests
This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-request-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | requested_for | **str** | True  | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

### Return type
[**NonEmployeeRequestSummary**](../models/non-employee-request-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee request summary object. | NonEmployeeRequestSummary |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_request_summary import NonEmployeeRequestSummary
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    requested_for = '2c91808280430dfb0180431a59440460' # str | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # str | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

    try:
        # Get Summary of Non-Employee Requests
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request_summary(requested_for)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_request_summary(requested_for)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_request_summary:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_request_summary: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-schema-attribute
Get Schema Attribute Non-Employee Source
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-schema-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attribute_id | **str** | True  | The Schema Attribute Id (UUID)
Path   | source_id | **str** | True  | The Source id

### Return type
[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema Attribute | NonEmployeeSchemaAttribute |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_schema_attribute import NonEmployeeSchemaAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    attribute_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Schema Attribute Id (UUID) # str | The Schema Attribute Id (UUID)
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # Get Schema Attribute Non-Employee Source
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_schema_attribute(attribute_id, source_id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_schema_attribute(attribute_id, source_id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_schema_attribute:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_schema_attribute: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-source
Get a Non-Employee Source
This gets a non-employee source. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request any source.
  2. The current user is an account manager, in which case the user can only
request sources that they own.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id

### Return type
[**NonEmployeeSource**](../models/non-employee-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee source object. | NonEmployeeSource |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_source import NonEmployeeSource
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = '2c91808b7c28b350017c2a2ec5790aa1' # str | Source Id # str | Source Id

    try:
        # Get a Non-Employee Source
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source(source_id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source(source_id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_source: %s\n" % e)
```



[[Back to top]](#) 

## get-non-employee-source-schema-attributes
List Schema Attributes Non-Employee Source
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-non-employee-source-schema-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source id

### Return type
[**List[NonEmployeeSchemaAttribute]**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of Schema Attributes | List[NonEmployeeSchemaAttribute] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_schema_attribute import NonEmployeeSchemaAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id

    try:
        # List Schema Attributes Non-Employee Source
        
        results =NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source_schema_attributes(source_id)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).get_non_employee_source_schema_attributes(source_id)
        print("The response of NonEmployeeLifecycleManagementApi->get_non_employee_source_schema_attributes:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->get_non_employee_source_schema_attributes: %s\n" % e)
```



[[Back to top]](#) 

## import-non-employee-records-in-bulk
Imports, or Updates, Non-Employee Records
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-non-employee-records-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source Id (UUID)
   | data | **bytearray** | True  | 

### Return type
[**NonEmployeeBulkUploadJob**](../models/non-employee-bulk-upload-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | The CSV was accepted to be bulk inserted now or at a later time. | NonEmployeeBulkUploadJob |  -  |
400 | Client Error - Returned if the request body is invalid. The response body will contain the list of specific errors with one on each line.  | ErrorResponseDto |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_bulk_upload_job import NonEmployeeBulkUploadJob
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id (UUID) # str | Source Id (UUID)
    data = None # bytearray |  # bytearray | 

    try:
        # Imports, or Updates, Non-Employee Records
        
        results =NonEmployeeLifecycleManagementApi(api_client).import_non_employee_records_in_bulk(id, data)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).import_non_employee_records_in_bulk(id, data)
        print("The response of NonEmployeeLifecycleManagementApi->import_non_employee_records_in_bulk:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->import_non_employee_records_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-approvals
Get List of Non-Employee Approval Requests
This gets a list of non-employee approval requests.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can list the approvals for any approver.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-non-employee-approvals)

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
[**List[NonEmployeeApprovalItem]**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of approval items. | List[NonEmployeeApprovalItem] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_approval_item import NonEmployeeApprovalItem
from pprint import pprint
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
        # Get List of Non-Employee Approval Requests
        
        results =NonEmployeeLifecycleManagementApi(api_client).list_non_employee_approvals()
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_approvals(requested_for, limit, offset, count, filters, sorters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_approvals:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_approvals: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-records
List Non-Employee Records
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-non-employee-records)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*

### Return type
[**List[NonEmployeeRecord]**](../models/non-employee-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee record objects | List[NonEmployeeRecord] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_record import NonEmployeeRecord
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'accountName,sourceId' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional)
    filters = 'sourceId eq \"2c91808568c529c60168cca6f90c1313\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)

    try:
        # List Non-Employee Records
        
        results =NonEmployeeLifecycleManagementApi(api_client).list_non_employee_records()
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_records(limit, offset, count, sorters, filters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_records:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_records: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-requests
List Non-Employee Requests
This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list non-employee requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-non-employee-requests)

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
[**List[NonEmployeeRequest]**](../models/non-employee-request)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of non-employee request objects. | List[NonEmployeeRequest] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_request import NonEmployeeRequest
from pprint import pprint
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
        # List Non-Employee Requests
        
        results =NonEmployeeLifecycleManagementApi(api_client).list_non_employee_requests(requested_for, )
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_requests(requested_for, limit, offset, count, sorters, filters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_requests:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_requests: %s\n" % e)
```



[[Back to top]](#) 

## list-non-employee-sources
List Non-Employee Sources
This gets a list of non-employee sources. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list sources assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the sources that he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-non-employee-sources)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requested_for | **str** | True  | The identity for whom the request was made. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | non_employee_count | **bool** |   (optional) | The flag to determine whether return a non-employee count associate with source.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId**

### Return type
[**List[NonEmployeeSourceWithNECount]**](../models/non-employee-source-with-ne-count)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of non-employee sources objects. | List[NonEmployeeSourceWithNECount] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_source_with_ne_count import NonEmployeeSourceWithNECount
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    requested_for = 'me' # str | The identity for whom the request was made. *me* indicates the current user. # str | The identity for whom the request was made. *me* indicates the current user.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    non_employee_count = true # bool | The flag to determine whether return a non-employee count associate with source. (optional) # bool | The flag to determine whether return a non-employee count associate with source. (optional)
    sorters = 'name,created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional)

    try:
        # List Non-Employee Sources
        
        results =NonEmployeeLifecycleManagementApi(api_client).list_non_employee_sources(requested_for, )
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).list_non_employee_sources(requested_for, limit, offset, count, non_employee_count, sorters)
        print("The response of NonEmployeeLifecycleManagementApi->list_non_employee_sources:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->list_non_employee_sources: %s\n" % e)
```



[[Back to top]](#) 

## patch-non-employee-record
Patch Non-Employee Record
This request will patch a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-non-employee-record)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-employee record id (UUID)
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

### Return type
[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A patched non-employee record. | NonEmployeeRecord |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.non_employee_record import NonEmployeeRecord
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-employee record id (UUID) # str | Non-employee record id (UUID)
    [{op=replace, path=/endDate, value=2019-08-23T18:40:35.772Z}] # List[JsonPatchOperation] | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
    

    try:
        # Patch Non-Employee Record
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_record(id, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_record(id, new_json_patch_operation)
        print("The response of NonEmployeeLifecycleManagementApi->patch_non_employee_record:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->patch_non_employee_record: %s\n" % e)
```



[[Back to top]](#) 

## patch-non-employee-schema-attribute
Patch a Schema Attribute for Non-Employee Source
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-non-employee-schema-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | attribute_id | **str** | True  | The Schema Attribute Id (UUID)
Path   | source_id | **str** | True  | The Source id
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

### Return type
[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The Schema Attribute was successfully patched. | NonEmployeeSchemaAttribute |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.non_employee_schema_attribute import NonEmployeeSchemaAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    attribute_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Schema Attribute Id (UUID) # str | The Schema Attribute Id (UUID)
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The Source id # str | The Source id
    [{op=replace, path=/label, value={new attribute label=null}}] # List[JsonPatchOperation] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.
    

    try:
        # Patch a Schema Attribute for Non-Employee Source
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_schema_attribute(attribute_id, source_id, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_schema_attribute(attribute_id, source_id, new_json_patch_operation)
        print("The response of NonEmployeeLifecycleManagementApi->patch_non_employee_schema_attribute:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->patch_non_employee_schema_attribute: %s\n" % e)
```



[[Back to top]](#) 

## patch-non-employee-source
Patch a Non-Employee Source
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-non-employee-source)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source Id
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**NonEmployeeSource**](../models/non-employee-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A patched non-employee source object. | NonEmployeeSource |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.non_employee_source import NonEmployeeSource
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    source_id = 'e136567de87e4d029e60b3c3c55db56d' # str | Source Id # str | Source Id
    [{op=replace, path=/name, value={new name=null}}, {op=replace, path=/approvers, value=[2c91809f703bb37a017040a2fe8748c7, 48b1f463c9e8427db5a5071bd81914b8]}] # List[JsonPatchOperation] | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    

    try:
        # Patch a Non-Employee Source
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_source(source_id, new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).patch_non_employee_source(source_id, new_json_patch_operation)
        print("The response of NonEmployeeLifecycleManagementApi->patch_non_employee_source:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->patch_non_employee_source: %s\n" % e)
```



[[Back to top]](#) 

## reject-non-employee-request
Reject a Non-Employee Request
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/reject-non-employee-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-Employee approval item id (UUID)
 Body  | non_employee_reject_approval_decision | [**NonEmployeeRejectApprovalDecision**](../models/non-employee-reject-approval-decision) | True  | 

### Return type
[**NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Non-Employee approval item object. | NonEmployeeApprovalItem |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_approval_item import NonEmployeeApprovalItem
from sailpoint.v2024.models.non_employee_reject_approval_decision import NonEmployeeRejectApprovalDecision
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'e136567de87e4d029e60b3c3c55db56d' # str | Non-Employee approval item id (UUID) # str | Non-Employee approval item id (UUID)
    non_employee_reject_approval_decision = {
          "comment" : "approved"
        } # NonEmployeeRejectApprovalDecision | 

    try:
        # Reject a Non-Employee Request
        new_non_employee_reject_approval_decision = NonEmployeeRejectApprovalDecision()
        new_non_employee_reject_approval_decision.from_json(non_employee_reject_approval_decision)
        results =NonEmployeeLifecycleManagementApi(api_client).reject_non_employee_request(id, new_non_employee_reject_approval_decision)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).reject_non_employee_request(id, new_non_employee_reject_approval_decision)
        print("The response of NonEmployeeLifecycleManagementApi->reject_non_employee_request:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->reject_non_employee_request: %s\n" % e)
```



[[Back to top]](#) 

## update-non-employee-record
Update Non-Employee Record
This request will update a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-non-employee-record)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Non-employee record id (UUID)
 Body  | non_employee_request_body | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | True  | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

### Return type
[**NonEmployeeRecord**](../models/non-employee-record)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An updated non-employee record. | NonEmployeeRecord |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.non_employee_lifecycle_management_api import NonEmployeeLifecycleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.non_employee_record import NonEmployeeRecord
from sailpoint.v2024.models.non_employee_request_body import NonEmployeeRequestBody
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Non-employee record id (UUID) # str | Non-employee record id (UUID)
    non_employee_request_body = {
          "sourceId" : "2c91808568c529c60168cca6f90c1313",
          "firstName" : "William",
          "lastName" : "Smith",
          "manager" : "jane.doe",
          "data" : {
            "description" : "Auditing"
          },
          "accountName" : "william.smith",
          "phone" : "5125555555",
          "endDate" : "2021-03-25T00:00:00-05:00",
          "email" : "william.smith@example.com",
          "startDate" : "2020-03-24T00:00:00-05:00"
        } # NonEmployeeRequestBody | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

    try:
        # Update Non-Employee Record
        new_non_employee_request_body = NonEmployeeRequestBody()
        new_non_employee_request_body.from_json(non_employee_request_body)
        results =NonEmployeeLifecycleManagementApi(api_client).update_non_employee_record(id, new_non_employee_request_body)
        # Below is a request that includes all optional parameters
        # results = NonEmployeeLifecycleManagementApi(api_client).update_non_employee_record(id, new_non_employee_request_body)
        print("The response of NonEmployeeLifecycleManagementApi->update_non_employee_record:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling NonEmployeeLifecycleManagementApi->update_non_employee_record: %s\n" % e)
```



[[Back to top]](#) 



