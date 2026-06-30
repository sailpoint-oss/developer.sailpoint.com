---
id: v1-non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonEmployeeLifecycleManagement', 'v1NonEmployeeLifecycleManagement']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement', 'v1NonEmployeeLifecycleManagement']
---

# NonEmployeeLifecycleManagementV1Api
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee approval item id (UUID) |  [default to undefined]
**nonemployeeapprovaldecisionV1** | `NonemployeeapprovaldecisionV1` |  | 

### Return type

`NonemployeeapprovalitemV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = e136567de87e4d029e60b3c3c55db56d; // Non-Employee approval item id (UUID)
const nonemployeeapprovaldecisionV1: NonemployeeapprovaldecisionV1 = ; // 
const result = await apiInstance.approveNonEmployeeRequestV1({ id: id, nonemployeeapprovaldecisionV1: nonemployeeapprovaldecisionV1 });
console.log(result);
```

[[Back to top]](#)

## create-non-employee-record-v1
Create non-employee record
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-record-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**nonemployeerequestbodyV1** | `NonemployeerequestbodyV1` | Non-Employee record creation request body. | 

### Return type

`NonemployeerecordV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const nonemployeerequestbodyV1: NonemployeerequestbodyV1 = ; // Non-Employee record creation request body.
const result = await apiInstance.createNonEmployeeRecordV1({ nonemployeerequestbodyV1: nonemployeerequestbodyV1 });
console.log(result);
```

[[Back to top]](#)

## create-non-employee-request-v1
Create non-employee request
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-request-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**nonemployeerequestbodyV1** | `NonemployeerequestbodyV1` | Non-Employee creation request body | 

### Return type

`NonemployeerequestV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const nonemployeerequestbodyV1: NonemployeerequestbodyV1 = ; // Non-Employee creation request body
const result = await apiInstance.createNonEmployeeRequestV1({ nonemployeerequestbodyV1: nonemployeerequestbodyV1 });
console.log(result);
```

[[Back to top]](#)

## create-non-employee-source-schema-attributes-v1
Create a new schema attribute for non-employee source
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-schema-attributes-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]
**nonemployeeschemaattributebodyV1** | `NonemployeeschemaattributebodyV1` |  | 

### Return type

`NonemployeeschemaattributeV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // The Source id
const nonemployeeschemaattributebodyV1: NonemployeeschemaattributebodyV1 = ; // 
const result = await apiInstance.createNonEmployeeSourceSchemaAttributesV1({ sourceId: sourceId, nonemployeeschemaattributebodyV1: nonemployeeschemaattributebodyV1 });
console.log(result);
```

[[Back to top]](#)

## create-non-employee-source-v1
Create non-employee source
Create a non-employee source. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**nonemployeesourcerequestbodyV1** | `NonemployeesourcerequestbodyV1` | Non-Employee source creation request body. | 

### Return type

`NonemployeesourcewithcloudexternalidV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const nonemployeesourcerequestbodyV1: NonemployeesourcerequestbodyV1 = ; // Non-Employee source creation request body.
const result = await apiInstance.createNonEmployeeSourceV1({ nonemployeesourcerequestbodyV1: nonemployeesourcerequestbodyV1 });
console.log(result);
```

[[Back to top]](#)

## delete-non-employee-record-v1
Delete non-employee record
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-record-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee record id (UUID) |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-Employee record id (UUID)
const result = await apiInstance.deleteNonEmployeeRecordV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-non-employee-records-in-bulk-v1
Delete multiple non-employee records
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-records-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**deleteNonEmployeeRecordsInBulkV1RequestV1** | `DeleteNonEmployeeRecordsInBulkV1RequestV1` | Non-Employee bulk delete request body. | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const deleteNonEmployeeRecordsInBulkV1RequestV1: DeleteNonEmployeeRecordsInBulkV1RequestV1 = ; // Non-Employee bulk delete request body.
const result = await apiInstance.deleteNonEmployeeRecordsInBulkV1({ deleteNonEmployeeRecordsInBulkV1RequestV1: deleteNonEmployeeRecordsInBulkV1RequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-non-employee-request-v1
Delete non-employee request
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-request-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee request id in the UUID format |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ac110005-7156-1150-8171-5b292e3e0084; // Non-Employee request id in the UUID format
const result = await apiInstance.deleteNonEmployeeRequestV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-non-employee-schema-attribute-v1
Delete a schema attribute for non-employee source
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-schema-attribute-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**attributeId** | `string` | The Schema Attribute Id (UUID) |  [default to undefined]
**sourceId** | `string` | The Source id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const attributeId: string = ef38f94347e94562b5bb8424a56397d8; // The Schema Attribute Id (UUID)
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // The Source id
const result = await apiInstance.deleteNonEmployeeSchemaAttributeV1({ attributeId: attributeId, sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## delete-non-employee-source-schema-attributes-v1
Delete all custom schema attributes for non-employee source
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-schema-attributes-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // The Source id
const result = await apiInstance.deleteNonEmployeeSourceSchemaAttributesV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## delete-non-employee-source-v1
Delete non-employee source
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source Id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const sourceId: string = e136567de87e4d029e60b3c3c55db56d; // Source Id
const result = await apiInstance.deleteNonEmployeeSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## export-non-employee-records-v1
Exports non-employee records to csv
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-records-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source Id (UUID) |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = e136567de87e4d029e60b3c3c55db56d; // Source Id (UUID)
const result = await apiInstance.exportNonEmployeeRecordsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## export-non-employee-source-schema-template-v1
Exports source schema template
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-source-schema-template-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source Id (UUID) |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Source Id (UUID)
const result = await apiInstance.exportNonEmployeeSourceSchemaTemplateV1({ id: id });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestedFor** | `string` | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. |  [default to undefined]

### Return type

`NonemployeeapprovalsummaryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const requestedFor: string = 2c91808280430dfb0180431a59440460; // The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user.
const result = await apiInstance.getNonEmployeeApprovalSummaryV1({ requestedFor: requestedFor });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee approval item id (UUID) |  [default to undefined]
**includeDetail** | `boolean` | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* | [optional] [default to undefined]

### Return type

`NonemployeeapprovalitemdetailV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = e136567de87e4d029e60b3c3c55db56d; // Non-Employee approval item id (UUID)
const includeDetail: boolean = true; // The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)
const result = await apiInstance.getNonEmployeeApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-non-employee-bulk-upload-status-v1
Obtain the status of bulk upload on the source
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-bulk-upload-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source ID (UUID) |  [default to undefined]

### Return type

`NonemployeebulkuploadstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = e136567de87e4d029e60b3c3c55db56d; // Source ID (UUID)
const result = await apiInstance.getNonEmployeeBulkUploadStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-non-employee-record-v1
Get a non-employee record
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-record-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee record id (UUID) |  [default to undefined]

### Return type

`NonemployeerecordV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-Employee record id (UUID)
const result = await apiInstance.getNonEmployeeRecordV1({ id: id });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestedFor** | `string` | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. |  [default to undefined]

### Return type

`NonemployeerequestsummaryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const requestedFor: string = 2c91808280430dfb0180431a59440460; // The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user.
const result = await apiInstance.getNonEmployeeRequestSummaryV1({ requestedFor: requestedFor });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee request id (UUID) |  [default to undefined]

### Return type

`NonemployeerequestV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ac110005-7156-1150-8171-5b292e3e0084; // Non-Employee request id (UUID)
const result = await apiInstance.getNonEmployeeRequestV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-non-employee-schema-attribute-v1
Get schema attribute non-employee source
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-schema-attribute-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**attributeId** | `string` | The Schema Attribute Id (UUID) |  [default to undefined]
**sourceId** | `string` | The Source id |  [default to undefined]

### Return type

`NonemployeeschemaattributeV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const attributeId: string = ef38f94347e94562b5bb8424a56397d8; // The Schema Attribute Id (UUID)
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // The Source id
const result = await apiInstance.getNonEmployeeSchemaAttributeV1({ attributeId: attributeId, sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-non-employee-source-schema-attributes-v1
List schema attributes non-employee source
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-source-schema-attributes-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source id |  [default to undefined]

### Return type

`Array<NonemployeeschemaattributeV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // The Source id
const result = await apiInstance.getNonEmployeeSourceSchemaAttributesV1({ sourceId: sourceId });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source Id |  [default to undefined]

### Return type

`NonemployeesourceV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const sourceId: string = 2c91808b7c28b350017c2a2ec5790aa1; // Source Id
const result = await apiInstance.getNonEmployeeSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## import-non-employee-records-in-bulk-v1
Imports, or updates, non-employee records
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-non-employee-records-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source Id (UUID) |  [default to undefined]
**data** | `File` |  |  [default to undefined]

### Return type

`NonemployeebulkuploadjobV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = e136567de87e4d029e60b3c3c55db56d; // Source Id (UUID)
const data: File = BINARY_DATA_HERE; // 
const result = await apiInstance.importNonEmployeeRecordsInBulkV1({ id: id, data: data });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestedFor** | `string` | The identity for whom the request was made. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

`Array<NonemployeeapprovalitemV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const requestedFor: string = 2c91808280430dfb0180431a59440460; // The identity for whom the request was made. *me* indicates the current user. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = approvalStatus eq "Pending"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional)
const sorters: string = created; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)
const result = await apiInstance.listNonEmployeeApprovalsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-non-employee-records-v1
List non-employee records
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-records-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* | [optional] [default to undefined]

### Return type

`Array<NonemployeerecordV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = accountName,sourceId; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional)
const filters: string = sourceId eq "2c91808568c529c60168cca6f90c1313"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)
const result = await apiInstance.listNonEmployeeRecordsV1({  });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestedFor** | `string` | The identity for whom the request was made. *me* indicates the current user. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  | [optional] [default to undefined]

### Return type

`Array<NonemployeerequestV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const requestedFor: string = e136567de87e4d029e60b3c3c55db56d; // The identity for whom the request was made. *me* indicates the current user.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = created,approvalStatus; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional)
const filters: string = sourceId eq "2c91808568c529c60168cca6f90c1313"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  (optional)
const result = await apiInstance.listNonEmployeeRequestsV1({ requestedFor: requestedFor });
console.log(result);
```

[[Back to top]](#)

## list-non-employee-sources-v1
List non-employee sources
Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter: 
  1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager's `id`.
  2. If the current user is an account manager, the user should provide 'me' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-sources-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**requestedFor** | `string` | Identity the request was made for. Use \&#39;me\&#39; to indicate the current user. | [optional] [default to undefined]
**nonEmployeeCount** | `boolean` | Flag that determines whether the API will return a non-employee count associated with the source. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** | [optional] [default to undefined]

### Return type

`Array<NonemployeesourcewithnecountV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const requestedFor: string = me; // Identity the request was made for. Use \&#39;me\&#39; to indicate the current user. (optional)
const nonEmployeeCount: boolean = true; // Flag that determines whether the API will return a non-employee count associated with the source. (optional)
const sorters: string = name,created; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional)
const result = await apiInstance.listNonEmployeeSourcesV1({  });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-employee record id (UUID) |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

`NonemployeerecordV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-employee record id (UUID)
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/endDate","value":"2019-08-23T18:40:35.772Z"}]; // A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
const result = await apiInstance.patchNonEmployeeRecordV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## patch-non-employee-schema-attribute-v1
Patch a schema attribute for non-employee source
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-schema-attribute-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**attributeId** | `string` | The Schema Attribute Id (UUID) |  [default to undefined]
**sourceId** | `string` | The Source id |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update \&#39;:\&#39; \&#39;label\&#39;, \&#39;helpText\&#39;, \&#39;placeholder\&#39;, \&#39;required\&#39;. | 

### Return type

`NonemployeeschemaattributeV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const attributeId: string = ef38f94347e94562b5bb8424a56397d8; // The Schema Attribute Id (UUID)
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // The Source id
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/label","value":{"new attribute label":null}}]; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update \&#39;:\&#39; \&#39;label\&#39;, \&#39;helpText\&#39;, \&#39;placeholder\&#39;, \&#39;required\&#39;.
const result = await apiInstance.patchNonEmployeeSchemaAttributeV1({ attributeId: attributeId, sourceId: sourceId, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## patch-non-employee-source-v1
Patch a non-employee source
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-source-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source Id |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`NonemployeesourceV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const sourceId: string = e136567de87e4d029e60b3c3c55db56d; // Source Id
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/name","value":{"new name":null}},{"op":"replace","path":"/approvers","value":["2c91809f703bb37a017040a2fe8748c7","48b1f463c9e8427db5a5071bd81914b8"]}]; // A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const result = await apiInstance.patchNonEmployeeSourceV1({ sourceId: sourceId, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## reject-non-employee-request-v1
Reject a non-employee request
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-non-employee-request-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-Employee approval item id (UUID) |  [default to undefined]
**nonemployeerejectapprovaldecisionV1** | `NonemployeerejectapprovaldecisionV1` |  | 

### Return type

`NonemployeeapprovalitemV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = e136567de87e4d029e60b3c3c55db56d; // Non-Employee approval item id (UUID)
const nonemployeerejectapprovaldecisionV1: NonemployeerejectapprovaldecisionV1 = ; // 
const result = await apiInstance.rejectNonEmployeeRequestV1({ id: id, nonemployeerejectapprovaldecisionV1: nonemployeerejectapprovaldecisionV1 });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Non-employee record id (UUID) |  [default to undefined]
**nonemployeerequestbodyV1** | `NonemployeerequestbodyV1` | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

`NonemployeerecordV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NonEmployeeLifecycleManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new NonEmployeeLifecycleManagementV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Non-employee record id (UUID)
const nonemployeerequestbodyV1: NonemployeerequestbodyV1 = ; // Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.
const result = await apiInstance.updateNonEmployeeRecordV1({ id: id, nonemployeerequestbodyV1: nonemployeerequestbodyV1 });
console.log(result);
```

[[Back to top]](#)

