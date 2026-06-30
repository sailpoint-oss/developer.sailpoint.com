---
id: v1-non-employee-lifecycle-management
title: NonEmployeeLifecycleManagement
pagination_label: NonEmployeeLifecycleManagement
sidebar_label: NonEmployeeLifecycleManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeLifecycleManagement', 'V1NonEmployeeLifecycleManagement'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/methods/non-employee-lifecycle-management
tags: ['SDK', 'Software Development Kit', 'NonEmployeeLifecycleManagement', 'V1NonEmployeeLifecycleManagement']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-non-employee-request-v1**](#approve-non-employee-request-v1) | **Post** `/non-employee-approvals/v1/{id}/approve` | Approve a non-employee request
[**create-non-employee-record-v1**](#create-non-employee-record-v1) | **Post** `/non-employee-records/v1` | Create non-employee record
[**create-non-employee-request-v1**](#create-non-employee-request-v1) | **Post** `/non-employee-requests/v1` | Create non-employee request
[**create-non-employee-source-schema-attributes-v1**](#create-non-employee-source-schema-attributes-v1) | **Post** `/non-employee-sources/v1/{sourceId}/schema-attributes` | Create a new schema attribute for non-employee source
[**create-non-employee-source-v1**](#create-non-employee-source-v1) | **Post** `/non-employee-sources/v1` | Create non-employee source
[**delete-non-employee-record-v1**](#delete-non-employee-record-v1) | **Delete** `/non-employee-records/v1/{id}` | Delete non-employee record
[**delete-non-employee-records-in-bulk-v1**](#delete-non-employee-records-in-bulk-v1) | **Post** `/non-employee-records/v1/bulk-delete` | Delete multiple non-employee records
[**delete-non-employee-request-v1**](#delete-non-employee-request-v1) | **Delete** `/non-employee-requests/v1/{id}` | Delete non-employee request
[**delete-non-employee-schema-attribute-v1**](#delete-non-employee-schema-attribute-v1) | **Delete** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Delete a schema attribute for non-employee source
[**delete-non-employee-source-schema-attributes-v1**](#delete-non-employee-source-schema-attributes-v1) | **Delete** `/non-employee-sources/v1/{sourceId}/schema-attributes` | Delete all custom schema attributes for non-employee source
[**delete-non-employee-source-v1**](#delete-non-employee-source-v1) | **Delete** `/non-employee-sources/v1/{sourceId}` | Delete non-employee source
[**export-non-employee-records-v1**](#export-non-employee-records-v1) | **Get** `/non-employee-sources/v1/{id}/non-employees/download` | Exports non-employee records to csv
[**export-non-employee-source-schema-template-v1**](#export-non-employee-source-schema-template-v1) | **Get** `/non-employee-sources/v1/{id}/schema-attributes-template/download` | Exports source schema template
[**get-non-employee-approval-summary-v1**](#get-non-employee-approval-summary-v1) | **Get** `/non-employee-approvals/v1/summary/{requested-for}` | Get summary of non-employee approval requests
[**get-non-employee-approval-v1**](#get-non-employee-approval-v1) | **Get** `/non-employee-approvals/v1/{id}` | Get a non-employee approval item detail
[**get-non-employee-bulk-upload-status-v1**](#get-non-employee-bulk-upload-status-v1) | **Get** `/non-employee-sources/v1/{id}/non-employee-bulk-upload/status` | Obtain the status of bulk upload on the source
[**get-non-employee-record-v1**](#get-non-employee-record-v1) | **Get** `/non-employee-records/v1/{id}` | Get a non-employee record
[**get-non-employee-request-summary-v1**](#get-non-employee-request-summary-v1) | **Get** `/non-employee-requests/v1/summary/{requested-for}` | Get summary of non-employee requests
[**get-non-employee-request-v1**](#get-non-employee-request-v1) | **Get** `/non-employee-requests/v1/{id}` | Get a non-employee request
[**get-non-employee-schema-attribute-v1**](#get-non-employee-schema-attribute-v1) | **Get** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Get schema attribute non-employee source
[**get-non-employee-source-schema-attributes-v1**](#get-non-employee-source-schema-attributes-v1) | **Get** `/non-employee-sources/v1/{sourceId}/schema-attributes` | List schema attributes non-employee source
[**get-non-employee-source-v1**](#get-non-employee-source-v1) | **Get** `/non-employee-sources/v1/{sourceId}` | Get a non-employee source
[**import-non-employee-records-in-bulk-v1**](#import-non-employee-records-in-bulk-v1) | **Post** `/non-employee-sources/v1/{id}/non-employee-bulk-upload` | Imports, or updates, non-employee records
[**list-non-employee-approvals-v1**](#list-non-employee-approvals-v1) | **Get** `/non-employee-approvals/v1` | Get list of non-employee approval requests
[**list-non-employee-records-v1**](#list-non-employee-records-v1) | **Get** `/non-employee-records/v1` | List non-employee records
[**list-non-employee-requests-v1**](#list-non-employee-requests-v1) | **Get** `/non-employee-requests/v1` | List non-employee requests
[**list-non-employee-sources-v1**](#list-non-employee-sources-v1) | **Get** `/non-employee-sources/v1` | List non-employee sources
[**patch-non-employee-record-v1**](#patch-non-employee-record-v1) | **Patch** `/non-employee-records/v1/{id}` | Patch non-employee record
[**patch-non-employee-schema-attribute-v1**](#patch-non-employee-schema-attribute-v1) | **Patch** `/non-employee-sources/v1/{sourceId}/schema-attributes/{attributeId}` | Patch a schema attribute for non-employee source
[**patch-non-employee-source-v1**](#patch-non-employee-source-v1) | **Patch** `/non-employee-sources/v1/{sourceId}` | Patch a non-employee source
[**reject-non-employee-request-v1**](#reject-non-employee-request-v1) | **Post** `/non-employee-approvals/v1/{id}/reject` | Reject a non-employee request
[**update-non-employee-record-v1**](#update-non-employee-record-v1) | **Put** `/non-employee-records/v1/{id}` | Update non-employee record


## approve-non-employee-request-v1
Approve a non-employee request
Approves a non-employee approval request and notifies the next approver. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-non-employee-request-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee approval item id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveNonEmployeeRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonemployeeapprovaldecision** | [**Nonemployeeapprovaldecision**](../models/nonemployeeapprovaldecision) |  | 

### Return type

[**Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Non-Employee approval item id (UUID) # string | Non-Employee approval item id (UUID)
    nonemployeeapprovaldecision := []byte(``) // Nonemployeeapprovaldecision | 

    var nonemployeeapprovaldecision v1.Nonemployeeapprovaldecision
    if err := json.Unmarshal(nonemployeeapprovaldecision, &nonemployeeapprovaldecision); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequestV1(context.Background(), id).Nonemployeeapprovaldecision(nonemployeeapprovaldecision).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequestV1(context.Background(), id).Nonemployeeapprovaldecision(nonemployeeapprovaldecision).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveNonEmployeeRequestV1`: Nonemployeeapprovalitem
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ApproveNonEmployeeRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-record-v1
Create non-employee record
This request will create a non-employee record.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-record-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeRecordV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonemployeerequestbody** | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | Non-Employee record creation request body. | 

### Return type

[**Nonemployeerecord**](../models/nonemployeerecord)

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
    
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    nonemployeerequestbody := []byte(``) // Nonemployeerequestbody | Non-Employee record creation request body.

    var nonemployeerequestbody v1.Nonemployeerequestbody
    if err := json.Unmarshal(nonemployeerequestbody, &nonemployeerequestbody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecordV1(context.Background()).Nonemployeerequestbody(nonemployeerequestbody).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecordV1(context.Background()).Nonemployeerequestbody(nonemployeerequestbody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecordV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateNonEmployeeRecordV1`: Nonemployeerecord
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRecordV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-request-v1
Create non-employee request
This request will create a non-employee request and notify the approver. Requires role context of `idn:nesr:create` or the user must own the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-request-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonemployeerequestbody** | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | Non-Employee creation request body | 

### Return type

[**Nonemployeerequest**](../models/nonemployeerequest)

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
    
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    nonemployeerequestbody := []byte(``) // Nonemployeerequestbody | Non-Employee creation request body

    var nonemployeerequestbody v1.Nonemployeerequestbody
    if err := json.Unmarshal(nonemployeerequestbody, &nonemployeerequestbody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequestV1(context.Background()).Nonemployeerequestbody(nonemployeerequestbody).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequestV1(context.Background()).Nonemployeerequestbody(nonemployeerequestbody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateNonEmployeeRequestV1`: Nonemployeerequest
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-source-schema-attributes-v1
Create a new schema attribute for non-employee source
This API creates a new schema attribute for Non-Employee Source. The schema technical name must be unique in the source. Attempts to create a schema attribute with an existing name will result in a "400.1.409 Reference conflict" response. At most, 10 custom attributes can be created per schema. Attempts to create more than 10 will result in a "400.1.4 Limit violation" response.
Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-schema-attributes-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeSourceSchemaAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonemployeeschemaattributebody** | [**Nonemployeeschemaattributebody**](../models/nonemployeeschemaattributebody) |  | 

### Return type

[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id
    nonemployeeschemaattributebody := []byte(``) // Nonemployeeschemaattributebody | 

    var nonemployeeschemaattributebody v1.Nonemployeeschemaattributebody
    if err := json.Unmarshal(nonemployeeschemaattributebody, &nonemployeeschemaattributebody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributesV1(context.Background(), sourceId).Nonemployeeschemaattributebody(nonemployeeschemaattributebody).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributesV1(context.Background(), sourceId).Nonemployeeschemaattributebody(nonemployeeschemaattributebody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateNonEmployeeSourceSchemaAttributesV1`: Nonemployeeschemaattribute
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceSchemaAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-non-employee-source-v1
Create non-employee source
Create a non-employee source. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-non-employee-source-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNonEmployeeSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nonemployeesourcerequestbody** | [**Nonemployeesourcerequestbody**](../models/nonemployeesourcerequestbody) | Non-Employee source creation request body. | 

### Return type

[**Nonemployeesourcewithcloudexternalid**](../models/nonemployeesourcewithcloudexternalid)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    nonemployeesourcerequestbody := []byte(``) // Nonemployeesourcerequestbody | Non-Employee source creation request body.

    var nonemployeesourcerequestbody v1.Nonemployeesourcerequestbody
    if err := json.Unmarshal(nonemployeesourcerequestbody, &nonemployeesourcerequestbody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceV1(context.Background()).Nonemployeesourcerequestbody(nonemployeesourcerequestbody).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceV1(context.Background()).Nonemployeesourcerequestbody(nonemployeesourcerequestbody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateNonEmployeeSourceV1`: Nonemployeesourcewithcloudexternalid
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.CreateNonEmployeeSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-non-employee-record-v1
Delete non-employee record
This request will delete a non-employee record.
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-record-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeRecordV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-Employee record id (UUID) # string | Non-Employee record id (UUID)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordV1(context.Background(), id).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-non-employee-records-in-bulk-v1
Delete multiple non-employee records
This request will delete multiple non-employee records based on the non-employee ids provided. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-records-in-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeRecordsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteNonEmployeeRecordsInBulkV1Request** | [**DeleteNonEmployeeRecordsInBulkV1Request**](../models/delete-non-employee-records-in-bulk-v1-request) | Non-Employee bulk delete request body. | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    deletenonemployeerecordsinbulkv1request := []byte(``) // DeleteNonEmployeeRecordsInBulkV1Request | Non-Employee bulk delete request body.

    var deleteNonEmployeeRecordsInBulkV1Request v1.DeleteNonEmployeeRecordsInBulkV1Request
    if err := json.Unmarshal(deletenonemployeerecordsinbulkv1request, &deleteNonEmployeeRecordsInBulkV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordsInBulkV1(context.Background()).DeleteNonEmployeeRecordsInBulkV1Request(deleteNonEmployeeRecordsInBulkV1Request).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordsInBulkV1(context.Background()).DeleteNonEmployeeRecordsInBulkV1Request(deleteNonEmployeeRecordsInBulkV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRecordsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-non-employee-request-v1
Delete non-employee request
This request will delete a non-employee request. 
Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-request-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee request id in the UUID format | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeRequestV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ac110005-7156-1150-8171-5b292e3e0084` // string | Non-Employee request id in the UUID format # string | Non-Employee request id in the UUID format

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRequestV1(context.Background(), id).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRequestV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-non-employee-schema-attribute-v1
Delete a schema attribute for non-employee source
This end-point deletes a specific schema attribute for a non-employee source.
Requires role context of `idn:nesr:delete`


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-schema-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attributeId** | **string** | The Schema Attribute Id (UUID) | 
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeSchemaAttributeV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    attributeId := `ef38f94347e94562b5bb8424a56397d8` // string | The Schema Attribute Id (UUID) # string | The Schema Attribute Id (UUID)
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSchemaAttributeV1(context.Background(), attributeId, sourceId).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSchemaAttributeV1(context.Background(), attributeId, sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSchemaAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-non-employee-source-schema-attributes-v1
Delete all custom schema attributes for non-employee source
This end-point deletes all custom schema attributes for a non-employee source. Requires role context of `idn:nesr:delete`

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-schema-attributes-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeSourceSchemaAttributesV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceSchemaAttributesV1(context.Background(), sourceId).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceSchemaAttributesV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceSchemaAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-non-employee-source-v1
Delete non-employee source
This request will delete a non-employee source. Requires role context of `idn:nesr:delete`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-non-employee-source-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNonEmployeeSourceV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    sourceId := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id # string | Source Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceV1(context.Background(), sourceId).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.DeleteNonEmployeeSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## export-non-employee-records-v1
Exports non-employee records to csv
This requests a CSV download for all non-employees from a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-records-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportNonEmployeeRecordsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id (UUID) # string | Source Id (UUID)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeRecordsV1(context.Background(), id).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeRecordsV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ExportNonEmployeeRecordsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## export-non-employee-source-schema-template-v1
Exports source schema template
This requests a download for the Source Schema Template for a provided source. Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-non-employee-source-schema-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportNonEmployeeSourceSchemaTemplateV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id (UUID) # string | Source Id (UUID)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeSourceSchemaTemplateV1(context.Background(), id).Execute()
	  //r, err := apiClient.NonEmployeeLifecycleManagementAPI.ExportNonEmployeeSourceSchemaTemplateV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ExportNonEmployeeSourceSchemaTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestedFor** | **string** | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeApprovalSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Nonemployeeapprovalsummary**](../models/nonemployeeapprovalsummary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    requestedFor := `2c91808280430dfb0180431a59440460` // string | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # string | The identity (UUID) of the approver for whom for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummaryV1(context.Background(), requestedFor).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummaryV1(context.Background(), requestedFor).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeApprovalSummaryV1`: Nonemployeeapprovalsummary
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-approval-v1
Get a non-employee approval item detail
Gets a non-employee approval item detail. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they
can get any approval.
  2. The user owns the requested approval.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-approval-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee approval item id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeApprovalV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **includeDetail** | **bool** | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* | 

### Return type

[**Nonemployeeapprovalitemdetail**](../models/nonemployeeapprovalitemdetail)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Non-Employee approval item id (UUID) # string | Non-Employee approval item id (UUID)
    includeDetail := true // bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional) # bool | The object nonEmployeeRequest will not be included detail when set to false. *Default value is true* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalV1(context.Background(), id).IncludeDetail(includeDetail).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeApprovalV1`: Nonemployeeapprovalitemdetail
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeApprovalV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-bulk-upload-status-v1
Obtain the status of bulk upload on the source
The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source.
Requires role context of `idn:nesr:read`


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-bulk-upload-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeBulkUploadStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Nonemployeebulkuploadstatus**](../models/nonemployeebulkuploadstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Source ID (UUID) # string | Source ID (UUID)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatusV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatusV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeBulkUploadStatusV1`: Nonemployeebulkuploadstatus
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeBulkUploadStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-record-v1
Get a non-employee record
This gets a non-employee record.
Requires role context of `idn:nesr:read`

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-record-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeRecordV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Nonemployeerecord**](../models/nonemployeerecord)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-Employee record id (UUID) # string | Non-Employee record id (UUID)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecordV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecordV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecordV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeRecordV1`: Nonemployeerecord
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRecordV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestedFor** | **string** | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \&quot;me\&quot; instead to indicate the current user. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeRequestSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Nonemployeerequestsummary**](../models/nonemployeerequestsummary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    requestedFor := `2c91808280430dfb0180431a59440460` // string | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user. # string | The identity (UUID) of the non-employee account manager for whom the summary is being retrieved. Use \"me\" instead to indicate the current user.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummaryV1(context.Background(), requestedFor).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummaryV1(context.Background(), requestedFor).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeRequestSummaryV1`: Nonemployeerequestsummary
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestSummaryV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee request id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Nonemployeerequest**](../models/nonemployeerequest)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ac110005-7156-1150-8171-5b292e3e0084` // string | Non-Employee request id (UUID) # string | Non-Employee request id (UUID)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeRequestV1`: Nonemployeerequest
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-schema-attribute-v1
Get schema attribute non-employee source
This API gets a schema attribute by Id for the specified Non-Employee SourceId. Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-schema-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attributeId** | **string** | The Schema Attribute Id (UUID) | 
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeSchemaAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    attributeId := `ef38f94347e94562b5bb8424a56397d8` // string | The Schema Attribute Id (UUID) # string | The Schema Attribute Id (UUID)
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttributeV1(context.Background(), attributeId, sourceId).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttributeV1(context.Background(), attributeId, sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeSchemaAttributeV1`: Nonemployeeschemaattribute
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSchemaAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-non-employee-source-schema-attributes-v1
List schema attributes non-employee source
This API gets the list of schema attributes for the specified Non-Employee SourceId. There are 8 mandatory attributes added to each new Non-Employee Source automatically. Additionaly, user can add up to 10 custom attributes. This interface returns all the mandatory attributes followed by any custom attributes. At most, a total of 18 attributes will be returned.
Requires role context of `idn:nesr:read` or the user must be an account manager of the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-non-employee-source-schema-attributes-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeSourceSchemaAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributesV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributesV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeSourceSchemaAttributesV1`: []Nonemployeeschemaattribute
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceSchemaAttributesV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNonEmployeeSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Nonemployeesource**](../models/nonemployeesource)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    sourceId := `2c91808b7c28b350017c2a2ec5790aa1` // string | Source Id # string | Source Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNonEmployeeSourceV1`: Nonemployeesource
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.GetNonEmployeeSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-non-employee-records-in-bulk-v1
Imports, or updates, non-employee records
This post will import, or update, Non-Employee records found in the CSV. Requires role context of `idn:nesr:create`

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-non-employee-records-in-bulk-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportNonEmployeeRecordsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **data** | ***os.File** |  | 

### Return type

[**Nonemployeebulkuploadjob**](../models/nonemployeebulkuploadjob)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id (UUID) # string | Source Id (UUID)
    data := BINARY_DATA_HERE // *os.File |  # *os.File | 

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulkV1(context.Background(), id).Data(data).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulkV1(context.Background(), id).Data(data).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportNonEmployeeRecordsInBulkV1`: Nonemployeebulkuploadjob
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ImportNonEmployeeRecordsInBulkV1`: %v\n", resp)
}
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeApprovalsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | The identity for whom the request was made. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **approvalStatus**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | 

### Return type

[**[]Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
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
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovalsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovalsV1(context.Background()).RequestedFor(requestedFor).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovalsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListNonEmployeeApprovalsV1`: []Nonemployeeapprovalitem
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeApprovalsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-non-employee-records-v1
List non-employee records
This gets a list of non-employee records. There are two contextual uses for this endpoint:
  1. The user has the role context of `idn:nesr:read`, in which case they can get a list of all of the non-employees.
  2. The user is an account manager, in which case they can get a list of the non-employees that they manage.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-records-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeRecordsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* | 

### Return type

[**[]Nonemployeerecord**](../models/nonemployeerecord)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `accountName,sourceId` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, accountName, sourceId, manager, firstName, lastName, email, phone, startDate, endDate, created, modified** (optional)
    filters := `sourceId eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecordsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecordsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecordsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListNonEmployeeRecordsV1`: []Nonemployeerecord
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRecordsV1`: %v\n", resp)
}
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeRequestsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | The identity for whom the request was made. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, approvalStatus, firstName, lastName, email, phone, accountName, startDate, endDate** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  | 

### Return type

[**[]Nonemployeerequest**](../models/nonemployeerequest)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
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
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequestsV1(context.Background()).RequestedFor(requestedFor).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequestsV1(context.Background()).RequestedFor(requestedFor).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequestsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListNonEmployeeRequestsV1`: []Nonemployeerequest
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeRequestsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-non-employee-sources-v1
List non-employee sources
Get a list of non-employee sources. There are two contextual uses for the `requested-for` path parameter: 
  1. If the user has the role context of `idn:nesr:read`, he or she may request a list sources assigned to a particular account manager by passing in that manager's `id`.
  2. If the current user is an account manager, the user should provide 'me' as the `requested-for` value. Doing so provide the user with a list of the sources he or she owns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-non-employee-sources-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNonEmployeeSourcesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **requestedFor** | **string** | Identity the request was made for. Use &#39;me&#39; to indicate the current user. | 
 **nonEmployeeCount** | **bool** | Flag that determines whether the API will return a non-employee count associated with the source. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, sourceId** | 

### Return type

[**[]Nonemployeesourcewithnecount**](../models/nonemployeesourcewithnecount)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
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
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeSourcesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.ListNonEmployeeSourcesV1(context.Background()).Limit(limit).Offset(offset).Count(count).RequestedFor(requestedFor).NonEmployeeCount(nonEmployeeCount).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.ListNonEmployeeSourcesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListNonEmployeeSourcesV1`: []Nonemployeesourcewithnecount
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.ListNonEmployeeSourcesV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchNonEmployeeRecordV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

[**Nonemployeerecord**](../models/nonemployeerecord)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-employee record id (UUID) # string | Non-employee record id (UUID)
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/endDate","value":"2019-08-23T18:40:35.772Z"}]`) // []Jsonpatchoperation | A list of non-employee update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecordV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecordV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecordV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchNonEmployeeRecordV1`: Nonemployeerecord
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeRecordV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-non-employee-schema-attribute-v1
Patch a schema attribute for non-employee source
This end-point patches a specific schema attribute for a non-employee SourceId.
Requires role context of `idn:nesr:update`


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-schema-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attributeId** | **string** | The Schema Attribute Id (UUID) | 
**sourceId** | **string** | The Source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchNonEmployeeSchemaAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update &#39;:&#39; &#39;label&#39;, &#39;helpText&#39;, &#39;placeholder&#39;, &#39;required&#39;. | 

### Return type

[**Nonemployeeschemaattribute**](../models/nonemployeeschemaattribute)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    attributeId := `ef38f94347e94562b5bb8424a56397d8` // string | The Schema Attribute Id (UUID) # string | The Schema Attribute Id (UUID)
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | The Source id # string | The Source id
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/label","value":{"new attribute label":null}}]`) // []Jsonpatchoperation | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following properties are allowed for update ':' 'label', 'helpText', 'placeholder', 'required'.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttributeV1(context.Background(), attributeId, sourceId).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttributeV1(context.Background(), attributeId, sourceId).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchNonEmployeeSchemaAttributeV1`: Nonemployeeschemaattribute
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSchemaAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-non-employee-source-v1
Patch a non-employee source
patch a non-employee source. (partial update) <br/> Patchable field: **name, description, approvers, accountManagers** Requires role context of `idn:nesr:update`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-non-employee-source-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchNonEmployeeSourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**Nonemployeesource**](../models/nonemployeesource)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    sourceId := `e136567de87e4d029e60b3c3c55db56d` // string | Source Id # string | Source Id
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/name","value":{"new name":null}},{"op":"replace","path":"/approvers","value":["2c91809f703bb37a017040a2fe8748c7","48b1f463c9e8427db5a5071bd81914b8"]}]`) // []Jsonpatchoperation | A list of non-employee source update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSourceV1(context.Background(), sourceId).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSourceV1(context.Background(), sourceId).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchNonEmployeeSourceV1`: Nonemployeesource
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.PatchNonEmployeeSourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-non-employee-request-v1
Reject a non-employee request
This endpoint will reject an approval item request and notify user. The current user must be the requested approver.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-non-employee-request-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-Employee approval item id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectNonEmployeeRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonemployeerejectapprovaldecision** | [**Nonemployeerejectapprovaldecision**](../models/nonemployeerejectapprovaldecision) |  | 

### Return type

[**Nonemployeeapprovalitem**](../models/nonemployeeapprovalitem)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `e136567de87e4d029e60b3c3c55db56d` // string | Non-Employee approval item id (UUID) # string | Non-Employee approval item id (UUID)
    nonemployeerejectapprovaldecision := []byte(``) // Nonemployeerejectapprovaldecision | 

    var nonemployeerejectapprovaldecision v1.Nonemployeerejectapprovaldecision
    if err := json.Unmarshal(nonemployeerejectapprovaldecision, &nonemployeerejectapprovaldecision); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequestV1(context.Background(), id).Nonemployeerejectapprovaldecision(nonemployeerejectapprovaldecision).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequestV1(context.Background(), id).Nonemployeerejectapprovaldecision(nonemployeerejectapprovaldecision).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectNonEmployeeRequestV1`: Nonemployeeapprovalitem
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.RejectNonEmployeeRequestV1`: %v\n", resp)
}
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Non-employee record id (UUID) | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateNonEmployeeRecordV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nonemployeerequestbody** | [**Nonemployeerequestbody**](../models/nonemployeerequestbody) | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields. | 

### Return type

[**Nonemployeerecord**](../models/nonemployeerecord)

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
    
    v1 "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/non_employee_lifecycle_management"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Non-employee record id (UUID) # string | Non-employee record id (UUID)
    nonemployeerequestbody := []byte(``) // Nonemployeerequestbody | Non-employee record creation request body. Attributes are restricted by user type. Owner of source can update end date. Organization admins can update all available fields.

    var nonemployeerequestbody v1.Nonemployeerequestbody
    if err := json.Unmarshal(nonemployeerequestbody, &nonemployeerequestbody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecordV1(context.Background(), id).Nonemployeerequestbody(nonemployeerequestbody).Execute()
	  //resp, r, err := apiClient.NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecordV1(context.Background(), id).Nonemployeerequestbody(nonemployeerequestbody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecordV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateNonEmployeeRecordV1`: Nonemployeerecord
    fmt.Fprintf(os.Stdout, "Response from `NonEmployeeLifecycleManagementAPI.UpdateNonEmployeeRecordV1`: %v\n", resp)
}
```

[[Back to top]](#)

