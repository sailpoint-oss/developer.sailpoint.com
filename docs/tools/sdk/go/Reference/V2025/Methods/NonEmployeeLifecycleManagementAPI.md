---
id: v2025-non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeLifecycleManagement', 'V2025NonEmployeeLifecycleManagement'] 
slug: /tools/sdk/go/v2025/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement', 'V2025NonEmployeeLifecycleManagement']
---

# NonEmployeeLifecycleManagementAPI
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-non-employee-request**](#approve-non-employee-request) | **Post** `/non-employee-approvals/{id}/approve` | Approve a Non-Employee Request
[**create-non-employee-record**](#create-non-employee-record) | **Post** `/non-employee-records` | Create Non-Employee Record
[**create-non-employee-request**](#create-non-employee-request) | **Post** `/non-employee-requests` | Create Non-Employee Request
[**create-non-employee-source**](#create-non-employee-source) | **Post** `/non-employee-sources` | Create Non-Employee Source
[**create-non-employee-source-schema-attributes**](#create-non-employee-source-schema-attributes) | **Post** `/non-employee-sources/{sourceId}/schema-attributes` | Create a new Schema Attribute for Non-Employee Source
[**delete-non-employee-record**](#delete-non-employee-record) | **Delete** `/non-employee-records/{id}` | Delete Non-Employee Record
[**delete-non-employee-records-in-bulk**](#delete-non-employee-records-in-bulk) | **Post** `/non-employee-records/bulk-delete` | Delete Multiple Non-Employee Records
[**delete-non-employee-request**](#delete-non-employee-request) | **Delete** `/non-employee-requests/{id}` | Delete Non-Employee Request
[**delete-non-employee-schema-attribute**](#delete-non-employee-schema-attribute) | **Delete** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Delete a Schema Attribute for Non-Employee Source
[**delete-non-employee-source**](#delete-non-employee-source) | **Delete** `/non-employee-sources/{sourceId}` | Delete Non-Employee Source
[**delete-non-employee-source-schema-attributes**](#delete-non-employee-source-schema-attributes) | **Delete** `/non-employee-sources/{sourceId}/schema-attributes` | Delete all custom schema attributes for Non-Employee Source
[**export-non-employee-records**](#export-non-employee-records) | **Get** `/non-employee-sources/{id}/non-employees/download` | Exports Non-Employee Records to CSV
[**export-non-employee-source-schema-template**](#export-non-employee-source-schema-template) | **Get** `/non-employee-sources/{id}/schema-attributes-template/download` | Exports Source Schema Template
[**get-non-employee-approval**](#get-non-employee-approval) | **Get** `/non-employee-approvals/{id}` | Get a non-employee approval item detail
[**get-non-employee-approval-summary**](#get-non-employee-approval-summary) | **Get** `/non-employee-approvals/summary/{requested-for}` | Get Summary of Non-Employee Approval Requests
[**get-non-employee-bulk-upload-status**](#get-non-employee-bulk-upload-status) | **Get** `/non-employee-sources/{id}/non-employee-bulk-upload/status` | Obtain the status of bulk upload on the source
[**get-non-employee-record**](#get-non-employee-record) | **Get** `/non-employee-records/{id}` | Get a Non-Employee Record
[**get-non-employee-request**](#get-non-employee-request) | **Get** `/non-employee-requests/{id}` | Get a Non-Employee Request
[**get-non-employee-request-summary**](#get-non-employee-request-summary) | **Get** `/non-employee-requests/summary/{requested-for}` | Get Summary of Non-Employee Requests
[**get-non-employee-schema-attribute**](#get-non-employee-schema-attribute) | **Get** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Get Schema Attribute Non-Employee Source
[**get-non-employee-source**](#get-non-employee-source) | **Get** `/non-employee-sources/{sourceId}` | Get a Non-Employee Source
[**get-non-employee-source-schema-attributes**](#get-non-employee-source-schema-attributes) | **Get** `/non-employee-sources/{sourceId}/schema-attributes` | List Schema Attributes Non-Employee Source
[**import-non-employee-records-in-bulk**](#import-non-employee-records-in-bulk) | **Post** `/non-employee-sources/{id}/non-employee-bulk-upload` | Imports, or Updates, Non-Employee Records
[**list-non-employee-approvals**](#list-non-employee-approvals) | **Get** `/non-employee-approvals` | Get List of Non-Employee Approval Requests
[**list-non-employee-records**](#list-non-employee-records) | **Get** `/non-employee-records` | List Non-Employee Records
[**list-non-employee-requests**](#list-non-employee-requests) | **Get** `/non-employee-requests` | List Non-Employee Requests
[**list-non-employee-sources**](#list-non-employee-sources) | **Get** `/non-employee-sources` | List Non-Employee Sources
[**patch-non-employee-record**](#patch-non-employee-record) | **Patch** `/non-employee-records/{id}` | Patch Non-Employee Record
[**patch-non-employee-schema-attribute**](#patch-non-employee-schema-attribute) | **Patch** `/non-employee-sources/{sourceId}/schema-attributes/{attributeId}` | Patch a Schema Attribute for Non-Employee Source
[**patch-non-employee-source**](#patch-non-employee-source) | **Patch** `/non-employee-sources/{sourceId}` | Patch a Non-Employee Source
[**reject-non-employee-request**](#reject-non-employee-request) | **Post** `/non-employee-approvals/{id}/reject` | Reject a Non-Employee Request
[**update-non-employee-record**](#update-non-employee-record) | **Put** `/non-employee-records/{id}` | Update Non-Employee Record


## approve-non-employee-request
Approve a Non-Employee Request
Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-non-employee-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee approval item id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveNonEmployeeRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonEmployeeApprovalDecision** | [**NonEmployeeApprovalDecision**](../models/non-employee-approval-decision) |  | 

### Return type

[**NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Non-Employee approval item id (UUID) # string | Non-Employee approval item id (UUID)
    nonemployeeapprovaldecision := []byte(`{
          "comment" : "Approved by manager"
        }`) // NonEmployeeApprovalDecision | 

  
   var nonEmployeeApprovalDecision v2025.NonEmployeeApprovalDecision
   if err := json.Unmarshal(nonemployeeapprovaldecision, &nonEmployeeApprovalDecision); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequest(context.Background(), id).NonEmployeeApprovalDecision(nonEmployeeApprovalDecision).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequest(context.Background(), id).NonEmployeeApprovalDecision(nonEmployeeApprovalDecision).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApproveNonEmployeeRequest`: NonEmployeeApprovalItem
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-record
Create Non-Employee Record
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-record)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonEmployeeRequestBody** | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | Non-Employee record creation request body. | 

### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    nonemployeerequestbody := []byte(`{
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
        }`) // NonEmployeeRequestBody | Non-Employee record creation request body.

  
   var nonEmployeeRequestBody v2025.NonEmployeeRequestBody
   if err := json.Unmarshal(nonemployeerequestbody, &nonEmployeeRequestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecord(context.Background()).NonEmployeeRequestBody(nonEmployeeRequestBody).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecord(context.Background()).NonEmployeeRequestBody(nonEmployeeRequestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecord``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNonEmployeeRecord`: NonEmployeeRecord
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecord`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-request
Create Non-Employee Request
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonEmployeeRequestBody** | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | Non-Employee creation request body | 

### Return type

[**NonEmployeeRequest**](../models/non-employee-request)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    nonemployeerequestbody := []byte(`{
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
        }`) // NonEmployeeRequestBody | Non-Employee creation request body

  
   var nonEmployeeRequestBody v2025.NonEmployeeRequestBody
   if err := json.Unmarshal(nonemployeerequestbody, &nonEmployeeRequestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequest(context.Background()).NonEmployeeRequestBody(nonEmployeeRequestBody).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequest(context.Background()).NonEmployeeRequestBody(nonEmployeeRequestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNonEmployeeRequest`: NonEmployeeRequest
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-source
Create Non-Employee Source
Create a non-employee source. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-source)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonEmployeeSourceRequestBody** | [**NonEmployeeSourceRequestBody**](../models/non-employee-source-request-body) | Non-Employee source creation request body. | 

### Return type

[**NonEmployeeSourceWithCloudExternalId**](../models/non-employee-source-with-cloud-external-id)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    nonemployeesourcerequestbody := []byte(`{
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
        }`) // NonEmployeeSourceRequestBody | Non-Employee source creation request body.

  
   var nonEmployeeSourceRequestBody v2025.NonEmployeeSourceRequestBody
   if err := json.Unmarshal(nonemployeesourcerequestbody, &nonEmployeeSourceRequestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSource(context.Background()).NonEmployeeSourceRequestBody(nonEmployeeSourceRequestBody).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSource(context.Background()).NonEmployeeSourceRequestBody(nonEmployeeSourceRequestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNonEmployeeSource`: NonEmployeeSourceWithCloudExternalId
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSource`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-source-schema-attributes
Create a new Schema Attribute for Non-Employee Source
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-non-employee-source-schema-attributes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeSourceSchemaAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonEmployeeSchemaAttributeBody** | [**NonEmployeeSchemaAttributeBody**](../models/non-employee-schema-attribute-body) |  | 

### Return type

[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id
    nonemployeeschemaattributebody := []byte(`{
          "helpText" : "The unique identifier for the account",
          "label" : "Account Name",
          "placeholder" : "Enter a unique user name for this account.",
          "type" : "TEXT",
          "technicalName" : "account.name",
          "required" : true
        }`) // NonEmployeeSchemaAttributeBody | 

  
   var nonEmployeeSchemaAttributeBody v2025.NonEmployeeSchemaAttributeBody
   if err := json.Unmarshal(nonemployeeschemaattributebody, &nonEmployeeSchemaAttributeBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributes(context.Background(), sourceId).NonEmployeeSchemaAttributeBody(nonEmployeeSchemaAttributeBody).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributes(context.Background(), sourceId).NonEmployeeSchemaAttributeBody(nonEmployeeSchemaAttributeBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNonEmployeeSourceSchemaAttributes`: NonEmployeeSchemaAttribute
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-non-employee-record
Delete Non-Employee Record
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-record)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-Employee record id (UUID) # string | Non-Employee record id (UUID)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecord(context.Background(), id).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecord(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecord``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-non-employee-records-in-bulk
Delete Multiple Non-Employee Records
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-records-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeRecordsInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNonEmployeeRecordsInBulkRequest** | [**DeleteNonEmployeeRecordsInBulkRequest**](../models/delete-non-employee-records-in-bulk-request) | Non-Employee bulk delete request body. | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    deletenonemployeerecordsinbulkrequest := []byte(``) // DeleteNonEmployeeRecordsInBulkRequest | Non-Employee bulk delete request body.

  
   var deleteNonEmployeeRecordsInBulkRequest v2025.DeleteNonEmployeeRecordsInBulkRequest
   if err := json.Unmarshal(deletenonemployeerecordsinbulkrequest, &deleteNonEmployeeRecordsInBulkRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordsInBulk(context.Background()).DeleteNonEmployeeRecordsInBulkRequest(deleteNonEmployeeRecordsInBulkRequest).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordsInBulk(context.Background()).DeleteNonEmployeeRecordsInBulkRequest(deleteNonEmployeeRecordsInBulkRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordsInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-non-employee-request
Delete Non-Employee Request
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee request id in the UUID format | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ac110005-7156-1150-8171-5b292e3e0084` // string | Non-Employee request id in the UUID format # string | Non-Employee request id in the UUID format

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRequest(context.Background(), id).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRequest(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-non-employee-schema-attribute
Delete a Schema Attribute for Non-Employee Source
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-schema-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attributeId** | **string** | The Schema Attribute Id (UUID) | 
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeSchemaAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    attributeId := `ef38f94347e94562b5bb8424a56397d8` // string | The Schema Attribute Id (UUID) # string | The Schema Attribute Id (UUID)
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSchemaAttribute(context.Background(), attributeId, sourceId).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSchemaAttribute(context.Background(), attributeId, sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSchemaAttribute``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-non-employee-source
Delete Non-Employee Source
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id # string | Source Id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSource(context.Background(), sourceId).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSource(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-non-employee-source-schema-attributes
Delete all custom schema attributes for Non-Employee Source
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-non-employee-source-schema-attributes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeSourceSchemaAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceSchemaAttributes(context.Background(), sourceId).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceSchemaAttributes(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceSchemaAttributes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## export-non-employee-records
Exports Non-Employee Records to CSV
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-non-employee-records)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportNonEmployeeRecordsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id (UUID) # string | Source Id (UUID)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeRecords(context.Background(), id).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeRecords(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ExportNonEmployeeRecords``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## export-non-employee-source-schema-template
Exports Source Schema Template
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-non-employee-source-schema-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportNonEmployeeSourceSchemaTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id (UUID) # string | Source Id (UUID)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeSourceSchemaTemplate(context.Background(), id).Execute()
	//r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeSourceSchemaTemplate(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ExportNonEmployeeSourceSchemaTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-non-employee-approval
Get a non-employee approval item detail
Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-approval)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee approval item id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **includeDetail** | **bool** | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* | 

### Return type

[**NonEmployeeApprovalItemDetail**](../models/non-employee-approval-item-detail)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Non-Employee approval item id (UUID) # string | Non-Employee approval item id (UUID)
    includeDetail := true // bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional) # bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApproval(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApproval(context.Background(), id).IncludeDetail(includeDetail).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApproval``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeApproval`: NonEmployeeApprovalItemDetail
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-approval-summary
Get Summary of Non-Employee Approval Requests
This request will retrieve a summary of non-employee approval requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular approver by passing in that approver's id.
  2. The current user is an approver, in which case "me" should be provided
as the `requested-for` value. This will provide the approver with a summary of the approval items assigned to him or her.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-approval-summary)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestedFor** | **string** | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeApprovalSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**NonEmployeeApprovalSummary**](../models/non-employee-approval-summary)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestedFor := `2c91808280430dfb0180431a59440460` // string | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # string | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummary(context.Background(), requestedFor).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummary(context.Background(), requestedFor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeApprovalSummary`: NonEmployeeApprovalSummary
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummary`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-bulk-upload-status
Obtain the status of bulk upload on the source
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-bulk-upload-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeBulkUploadStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**NonEmployeeBulkUploadStatus**](../models/non-employee-bulk-upload-status)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Source ID (UUID) # string | Source ID (UUID)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatus(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatus(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeBulkUploadStatus`: NonEmployeeBulkUploadStatus
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-record
Get a Non-Employee Record
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-record)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-Employee record id (UUID) # string | Non-Employee record id (UUID)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecord(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecord(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecord``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeRecord`: NonEmployeeRecord
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecord`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-request
Get a Non-Employee Request
This gets a non-employee request.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in this case the user
can get the non-employee request for any user.
  2. The user must be the owner of the non-employee request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee request id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**NonEmployeeRequest**](../models/non-employee-request)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ac110005-7156-1150-8171-5b292e3e0084` // string | Non-Employee request id (UUID) # string | Non-Employee request id (UUID)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequest(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequest(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeRequest`: NonEmployeeRequest
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-request-summary
Get Summary of Non-Employee Requests
This request will retrieve a summary of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a summary of all non-employee approval requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a summary of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-request-summary)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestedFor** | **string** | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeRequestSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**NonEmployeeRequestSummary**](../models/non-employee-request-summary)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestedFor := `2c91808280430dfb0180431a59440460` // string | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # string | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummary(context.Background(), requestedFor).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummary(context.Background(), requestedFor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeRequestSummary`: NonEmployeeRequestSummary
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummary`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-schema-attribute
Get Schema Attribute Non-Employee Source
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-schema-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attributeId** | **string** | The Schema Attribute Id (UUID) | 
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeSchemaAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    attributeId := `ef38f94347e94562b5bb8424a56397d8` // string | The Schema Attribute Id (UUID) # string | The Schema Attribute Id (UUID)
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttribute(context.Background(), attributeId, sourceId).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttribute(context.Background(), attributeId, sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttribute``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeSchemaAttribute`: NonEmployeeSchemaAttribute
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-source
Get a Non-Employee Source
This gets a non-employee source. There are two contextual uses for the requested-for path parameter: 
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request any source.
  2. The current user is an account manager, in which case the user can only
request sources that they own.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**NonEmployeeSource**](../models/non-employee-source)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `2c91808b7c28b350017c2a2ec5790aa1` // string | Source Id # string | Source Id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSource(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSource(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeSource`: NonEmployeeSource
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSource`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-source-schema-attributes
List Schema Attributes Non-Employee Source
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-non-employee-source-schema-attributes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeSourceSchemaAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributes(context.Background(), sourceId).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributes(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNonEmployeeSourceSchemaAttributes`: []NonEmployeeSchemaAttribute
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## import-non-employee-records-in-bulk
Imports, or Updates, Non-Employee Records
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v2025/import-non-employee-records-in-bulk)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportNonEmployeeRecordsInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **data** | ***os.File** |  | 

### Return type

[**NonEmployeeBulkUploadJob**](../models/non-employee-bulk-upload-job)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id (UUID) # string | Source Id (UUID)
    data := BINARY_DATA_HERE // *os.File |  # *os.File | 

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulk(context.Background(), id).Data(data).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulk(context.Background(), id).Data(data).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportNonEmployeeRecordsInBulk`: NonEmployeeBulkUploadJob
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## list-non-employee-approvals
Get List of Non-Employee Approval Requests
This gets a list of non-employee approval requests.
There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can list the approvals for any approver.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-approvals)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeApprovalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | The identity for whom the request was made. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | 

### Return type

[**[]NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestedFor := `2c91808280430dfb0180431a59440460` // string | The identity for whom the request was made. *me* indicates the current user. (optional) # string | The identity for whom the request was made. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `approvalStatus eq "Pending"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovals(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovals(context.Background()).RequestedFor(requestedFor).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovals``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNonEmployeeApprovals`: []NonEmployeeApprovalItem
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovals`: %v\n", resp)
}
```

[[Back to top]](#)

## list-non-employee-records
List Non-Employee Records
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-records)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeRecordsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* | 

### Return type

[**[]NonEmployeeRecord**](../models/non-employee-record)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `accountName,sourceId` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional)
    filters := `sourceId eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecords(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecords(context.Background()).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecords``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNonEmployeeRecords`: []NonEmployeeRecord
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecords`: %v\n", resp)
}
```

[[Back to top]](#)

## list-non-employee-requests
List Non-Employee Requests
This gets a list of non-employee requests. There are two contextual uses for the `requested-for` path parameter:
  1. The user has the role context of `idn:nesr:read`, in which case he or
she may request a list non-employee requests assigned to a particular account manager by passing in that manager's id.
  2. The current user is an account manager, in which case "me" should be
provided as the `requested-for` value. This will provide the user with a list of the non-employee requests in the source(s) he or she manages.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-requests)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | The identity for whom the request was made. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  | 

### Return type

[**[]NonEmployeeRequest**](../models/non-employee-request)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestedFor := `e136567de87e4d029e60b3c3c55db56d` // string | The identity for whom the request was made. *me* indicates the current user. # string | The identity for whom the request was made. *me* indicates the current user.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `created,approvalStatus` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** (optional)
    filters := `sourceId eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequests(context.Background()).RequestedFor(requestedFor).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequests(context.Background()).RequestedFor(requestedFor).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNonEmployeeRequests`: []NonEmployeeRequest
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequests`: %v\n", resp)
}
```

[[Back to top]](#)

## list-non-employee-sources
List Non-Employee Sources
Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter: 
  1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager's `id`.
  2. If the current user is an account manager, the user should provide 'me' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-non-employee-sources)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **requestedFor** | **string** | Identity the request was made for. Use &#39;me&#39; to indicate the current user. | 
 **nonEmployeeCount** | **bool** | Flag that determines whether the API will return a non-employee count associated with the source. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** | 

### Return type

[**[]NonEmployeeSourceWithNECount**](../models/non-employee-source-with-ne-count)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    requestedFor := `me` // string | Identity the request was made for. Use 'me' to indicate the current user. (optional) # string | Identity the request was made for. Use 'me' to indicate the current user. (optional)
    nonEmployeeCount := true // bool | Flag that determines whether the API will return a non-employee count associated with the source. (optional) (default to false) # bool | Flag that determines whether the API will return a non-employee count associated with the source. (optional) (default to false)
    sorters := `name,created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeSources(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.ListNonEmployeeSources(context.Background()).Limit(limit).Offset(offset).Count(count).RequestedFor(requestedFor).NonEmployeeCount(nonEmployeeCount).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNonEmployeeSources`: []NonEmployeeSourceWithNECount
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeSources`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-non-employee-record
Patch Non-Employee Record
This request will patch a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-non-employee-record)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchNonEmployeeRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-employee record id (UUID) # string | Non-employee record id (UUID)
    jsonpatchoperation := []byte(`[{op=replace, path=/endDate, value=2019-08-23T18:40:35.772Z}]`) // []JsonPatchOperation | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

  
   var jsonPatchOperation v2025.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecord(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecord(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecord``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchNonEmployeeRecord`: NonEmployeeRecord
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecord`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-non-employee-schema-attribute
Patch a Schema Attribute for Non-Employee Source
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-non-employee-schema-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attributeId** | **string** | The Schema Attribute Id (UUID) | 
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchNonEmployeeSchemaAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update &#39;:&#39; &#39;label&#39;, &#39;helpText&#39;, &#39;placeholder&#39;, &#39;required&#39;. | 

### Return type

[**NonEmployeeSchemaAttribute**](../models/non-employee-schema-attribute)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    attributeId := `ef38f94347e94562b5bb8424a56397d8` // string | The Schema Attribute Id (UUID) # string | The Schema Attribute Id (UUID)
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id
    jsonpatchoperation := []byte(`[{op=replace, path=/label, value={new attribute label=null}}]`) // []JsonPatchOperation | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

  
   var jsonPatchOperation v2025.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttribute(context.Background(), attributeId, sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttribute(context.Background(), attributeId, sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttribute``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchNonEmployeeSchemaAttribute`: NonEmployeeSchemaAttribute
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-non-employee-source
Patch a Non-Employee Source
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-non-employee-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchNonEmployeeSourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**NonEmployeeSource**](../models/non-employee-source)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceId := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id # string | Source Id
    jsonpatchoperation := []byte(`[{op=replace, path=/name, value={new name=null}}, {op=replace, path=/approvers, value=[2c91809f703bb37a017040a2fe8748c7, 48b1f463c9e8427db5a5071bd81914b8]}]`) // []JsonPatchOperation | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

  
   var jsonPatchOperation v2025.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSource(context.Background(), sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSource(context.Background(), sourceId).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchNonEmployeeSource`: NonEmployeeSource
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSource`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-non-employee-request
Reject a Non-Employee Request
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/reject-non-employee-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee approval item id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectNonEmployeeRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonEmployeeRejectApprovalDecision** | [**NonEmployeeRejectApprovalDecision**](../models/non-employee-reject-approval-decision) |  | 

### Return type

[**NonEmployeeApprovalItem**](../models/non-employee-approval-item)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Non-Employee approval item id (UUID) # string | Non-Employee approval item id (UUID)
    nonemployeerejectapprovaldecision := []byte(`{
          "comment" : "approved"
        }`) // NonEmployeeRejectApprovalDecision | 

  
   var nonEmployeeRejectApprovalDecision v2025.NonEmployeeRejectApprovalDecision
   if err := json.Unmarshal(nonemployeerejectapprovaldecision, &nonEmployeeRejectApprovalDecision); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequest(context.Background(), id).NonEmployeeRejectApprovalDecision(nonEmployeeRejectApprovalDecision).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequest(context.Background(), id).NonEmployeeRejectApprovalDecision(nonEmployeeRejectApprovalDecision).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RejectNonEmployeeRequest`: NonEmployeeApprovalItem
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## update-non-employee-record
Update Non-Employee Record
This request will update a non-employee record. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:update`, in which case they
update all available fields.
  2. The user is owner of the source, in this case they can only update the
end date.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-non-employee-record)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateNonEmployeeRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonEmployeeRequestBody** | [**NonEmployeeRequestBody**](../models/non-employee-request-body) | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

[**NonEmployeeRecord**](../models/non-employee-record)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "encoding/json"
    
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-employee record id (UUID) # string | Non-employee record id (UUID)
    nonemployeerequestbody := []byte(`{
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
        }`) // NonEmployeeRequestBody | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

  
   var nonEmployeeRequestBody v2025.NonEmployeeRequestBody
   if err := json.Unmarshal(nonemployeerequestbody, &nonEmployeeRequestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecord(context.Background(), id).NonEmployeeRequestBody(nonEmployeeRequestBody).Execute()
	//resp, r, err := apiClient.V2025.NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecord(context.Background(), id).NonEmployeeRequestBody(nonEmployeeRequestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecord``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateNonEmployeeRecord`: NonEmployeeRecord
	fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecord`: %v\n", resp)
}
```

[[Back to top]](#)

