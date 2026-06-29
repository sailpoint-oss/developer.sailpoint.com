---
id: v1-data-access-security
title: DataAccessSecurity
pagination_label: DataAccessSecurity
sidebar_label: DataAccessSecurity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataAccessSecurity', 'V1DataAccessSecurity'] 
slug: /tools/sdk/go/dataaccesssecurity/methods/data-access-security
tags: ['SDK', 'Software Development Kit', 'DataAccessSecurity', 'V1DataAccessSecurity']
---

# DataAccessSecurityAPI
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task-v1**](#cancel-task-v1) | **Post** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**create-application-v1**](#create-application-v1) | **Post** `/das/v1/applications` | Create application
[**create-identity-collector-v1**](#create-identity-collector-v1) | **Post** `/das/identity-collectors/v1` | Create identity collector
[**create-schedule-v1**](#create-schedule-v1) | **Post** `/das/v1/tasks/schedules` | Create a new schedule.
[**das-v1-owners-assign-post**](#das-v1-owners-assign-post) | **Post** `/das/v1/owners/assign` | Assign owner to application resource.
[**das-v1-owners-owner-identity-id-resources-get**](#das-v1-owners-owner-identity-id-resources-get) | **Get** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**das-v1-owners-reelect-post**](#das-v1-owners-reelect-post) | **Post** `/das/v1/owners/reelect` | Re-elect resource owner.
[**das-v1-owners-resources-resource-id-get**](#das-v1-owners-resources-resource-id-get) | **Get** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**das-v1-owners-source-identity-id-reassign-destination-identity-id-post**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **Post** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**delete-application-v1**](#delete-application-v1) | **Delete** `/das/v1/applications/{id}` | Delete an application by identifier.
[**delete-identity-collector-v1**](#delete-identity-collector-v1) | **Delete** `/das/identity-collectors/v1/{id}` | Delete identity collector by identifier
[**delete-schedule-v1**](#delete-schedule-v1) | **Delete** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task-v1**](#delete-task-v1) | **Delete** `/das/v1/tasks/{id}` | Delete a DAS task.
[**get-application-v1**](#get-application-v1) | **Get** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**get-applications-v1**](#get-applications-v1) | **Get** `/das/v1/applications` | Search applications in DAS.
[**get-owners-v1**](#get-owners-v1) | **Get** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**get-schedule-v1**](#get-schedule-v1) | **Get** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules-v1**](#get-schedules-v1) | **Get** `/das/v1/tasks/schedules` | List all schedules.
[**get-task-v1**](#get-task-v1) | **Get** `/das/v1/tasks/{id}` | Get a DAS task.
[**get-tasks-v1**](#get-tasks-v1) | **Get** `/das/v1/tasks` | Lists all DAS tasks.
[**list-identity-collectors-v1**](#list-identity-collectors-v1) | **Get** `/das/identity-collectors/v1` | List identity collectors
[**put-application-v1**](#put-application-v1) | **Put** `/das/v1/applications/{id}` | Update application by identifier.
[**put-identity-collector-v1**](#put-identity-collector-v1) | **Put** `/das/identity-collectors/v1/{id}` | Update identity collector by identifier
[**put-schedule-v1**](#put-schedule-v1) | **Put** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**start-task-rerun-v1**](#start-task-rerun-v1) | **Post** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
Cancel a DAS task.
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-task-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to cancel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelTaskV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the task to cancel. # int64 | The unique identifier of the task to cancel.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.CancelTaskV1(context.Background(), id).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.CancelTaskV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CancelTaskV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-application-v1
Create application
This endpoint creates a new application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-application-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basecreateapplicationrequest** | [**Basecreateapplicationrequest**](../models/basecreateapplicationrequest) | Request body containing the details required to create a new application. | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    basecreateapplicationrequest := []byte(``) // Basecreateapplicationrequest | Request body containing the details required to create a new application.

    var basecreateapplicationrequest v1.Basecreateapplicationrequest
    if err := json.Unmarshal(basecreateapplicationrequest, &basecreateapplicationrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.CreateApplicationV1(context.Background()).Basecreateapplicationrequest(basecreateapplicationrequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.CreateApplicationV1(context.Background()).Basecreateapplicationrequest(basecreateapplicationrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateApplicationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-identity-collector-v1
Create identity collector
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-collector-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIdentityCollectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createidentitycollectorrequest** | [**Createidentitycollectorrequest**](../models/createidentitycollectorrequest) | Request body containing the details required to create a new identity collector. | 

### Return type

[**CreateIdentityCollectorV1200Response**](../models/create-identity-collector-v1200-response)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    createidentitycollectorrequest := []byte(``) // Createidentitycollectorrequest | Request body containing the details required to create a new identity collector.

    var createidentitycollectorrequest v1.Createidentitycollectorrequest
    if err := json.Unmarshal(createidentitycollectorrequest, &createidentitycollectorrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.CreateIdentityCollectorV1(context.Background()).Createidentitycollectorrequest(createidentitycollectorrequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.CreateIdentityCollectorV1(context.Background()).Createidentitycollectorrequest(createidentitycollectorrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateIdentityCollectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateIdentityCollectorV1`: CreateIdentityCollectorV1200Response
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.CreateIdentityCollectorV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-schedule-v1
Create a new schedule.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-schedule-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createschedulerequest** | [**Createschedulerequest**](../models/createschedulerequest) |  | 

### Return type

**int64**

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    createschedulerequest := []byte(``) // Createschedulerequest | 

    var createschedulerequest v1.Createschedulerequest
    if err := json.Unmarshal(createschedulerequest, &createschedulerequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.CreateScheduleV1(context.Background()).Createschedulerequest(createschedulerequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.CreateScheduleV1(context.Background()).Createschedulerequest(createschedulerequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateScheduleV1`: int64
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.CreateScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## das-v1-owners-assign-post
Assign owner to application resource.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-assign-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersAssignPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignresourceownerrequest** | [**Assignresourceownerrequest**](../models/assignresourceownerrequest) | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner. | 

### Return type

**int32**

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    assignresourceownerrequest := []byte(``) // Assignresourceownerrequest | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.

    var assignresourceownerrequest v1.Assignresourceownerrequest
    if err := json.Unmarshal(assignresourceownerrequest, &assignresourceownerrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersAssignPost(context.Background()).Assignresourceownerrequest(assignresourceownerrequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersAssignPost(context.Background()).Assignresourceownerrequest(assignresourceownerrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasV1OwnersAssignPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasV1OwnersAssignPost`: int32
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasV1OwnersAssignPost`: %v\n", resp)
}
```

[[Back to top]](#)

## das-v1-owners-owner-identity-id-resources-get
List resources for owner.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-owner-identity-id-resources-get)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ownerIdentityId** | **string** | Unique identifier for the owner. This should be a UUID representing the owner&#39;s identity. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersOwnerIdentityIdResourcesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Not applicable for this endpoint. Do not use. | [default to 250]
 **offset** | **int32** | Not applicable for this endpoint. Do not use. | [default to 0]

### Return type

[**[]Resourcemodel**](../models/resourcemodel)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    ownerIdentityId := `a3f1c2d4-5678-4e9b-8c2d-123456789abc` // string | Unique identifier for the owner. This should be a UUID representing the owner's identity. # string | Unique identifier for the owner. This should be a UUID representing the owner's identity.
    limit := 250 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
    offset := 0 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersOwnerIdentityIdResourcesGet(context.Background(), ownerIdentityId).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersOwnerIdentityIdResourcesGet(context.Background(), ownerIdentityId).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasV1OwnersOwnerIdentityIdResourcesGet``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasV1OwnersOwnerIdentityIdResourcesGet`: []Resourcemodel
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasV1OwnersOwnerIdentityIdResourcesGet`: %v\n", resp)
}
```

[[Back to top]](#)

## das-v1-owners-reelect-post
Re-elect resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-reelect-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersReelectPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reelectrequest** | [**Reelectrequest**](../models/reelectrequest) | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds. | 

### Return type

**int32**

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    reelectrequest := []byte(``) // Reelectrequest | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.

    var reelectrequest v1.Reelectrequest
    if err := json.Unmarshal(reelectrequest, &reelectrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersReelectPost(context.Background()).Reelectrequest(reelectrequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersReelectPost(context.Background()).Reelectrequest(reelectrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasV1OwnersReelectPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasV1OwnersReelectPost`: int32
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasV1OwnersReelectPost`: %v\n", resp)
}
```

[[Back to top]](#)

## das-v1-owners-resources-resource-id-get
List owners for resource.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-resources-resource-id-get)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** | Unique identifier for the resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersResourcesResourceIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Not applicable for this endpoint. Do not use. | [default to 250]
 **offset** | **int32** | Not applicable for this endpoint. Do not use. | [default to 0]

### Return type

**[]string**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    resourceId := 101 // int64 | Unique identifier for the resource. # int64 | Unique identifier for the resource.
    limit := 250 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
    offset := 0 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersResourcesResourceIdGet(context.Background(), resourceId).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersResourcesResourceIdGet(context.Background(), resourceId).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasV1OwnersResourcesResourceIdGet``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasV1OwnersResourcesResourceIdGet`: []string
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasV1OwnersResourcesResourceIdGet`: %v\n", resp)
}
```

[[Back to top]](#)

## das-v1-owners-source-identity-id-reassign-destination-identity-id-post
Reassign resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/v1/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceIdentityId** | **string** | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from. | 
**destinationIdentityId** | **string** | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**int32**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    sourceIdentityId := `a3f1c2d4-5678-4e9b-8c2d-123456789abc` // string | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from. # string | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
    destinationIdentityId := `b4e2d3c5-6789-4f0a-9d3e-234567890bcd` // string | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to. # string | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(context.Background(), sourceIdentityId, destinationIdentityId).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost(context.Background(), sourceIdentityId, destinationIdentityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost`: int32
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasV1OwnersSourceIdentityIdReassignDestinationIdentityIdPost`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-application-v1
Delete an application by identifier.
This endpoint deletes an application from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-application-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 12345 // int64 | The unique identifier of the application to delete. # int64 | The unique identifier of the application to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.DeleteApplicationV1(context.Background(), id).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.DeleteApplicationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteApplicationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-identity-collector-v1
Delete identity collector by identifier
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-collector-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the identity collector to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityCollectorV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 12345 // int64 | The unique identifier of the identity collector to delete. # int64 | The unique identifier of the identity collector to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.DeleteIdentityCollectorV1(context.Background(), id).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.DeleteIdentityCollectorV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteIdentityCollectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-schedule-v1
Delete a DAS schedule.
This end-point sends a request to delete a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-schedule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteScheduleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the schedule to delete. # int64 | The unique identifier of the schedule to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.DeleteScheduleV1(context.Background(), id).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.DeleteScheduleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-task-v1
Delete a DAS task.
This end-point sends a request to delete a task in Data Access Security.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-task-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaskV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the task to delete. # int64 | The unique identifier of the task to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.DeleteTaskV1(context.Background(), id).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.DeleteTaskV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteTaskV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-application-v1
Retrieve application details by identifier.
This endpoint retrieves the details of a specific application in Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-application-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApplicationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Applicationitem**](../models/applicationitem)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 12345 // int64 | The unique identifier of the application to retrieve. # int64 | The unique identifier of the application to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetApplicationV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetApplicationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetApplicationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApplicationV1`: Applicationitem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetApplicationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-applications-v1
Search applications in DAS.
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-applications-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApplicationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Applicationitem**](../models/applicationitem)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    filters := `AppType eq 'ActiveDirectory' and Statuses eq 'Passed'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetApplicationsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetApplicationsV1(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetApplicationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApplicationsV1`: []Applicationitem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetApplicationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-owners-v1
Retrieve owners per application.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-owners-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **int64** | The unique identifier of the application for which to retrieve owners. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOwnersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Not applicable for this endpoint. Do not use. | [default to 250]
 **offset** | **int32** | Not applicable for this endpoint. Do not use. | [default to 0]

### Return type

[**[]Dataownermodel**](../models/dataownermodel)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    appId := 2001 // int64 | The unique identifier of the application for which to retrieve owners. # int64 | The unique identifier of the application for which to retrieve owners.
    limit := 250 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
    offset := 0 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetOwnersV1(context.Background(), appId).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetOwnersV1(context.Background(), appId).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetOwnersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOwnersV1`: []Dataownermodel
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetOwnersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-schedule-v1
Get a DAS schedule.
This end-point gets a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-schedule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Scheduleinfo**](../models/scheduleinfo)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the schedule to retrieve. # int64 | The unique identifier of the schedule to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetScheduleV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetScheduleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetScheduleV1`: Scheduleinfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-schedules-v1
List all schedules.
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-schedules-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSchedulesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Scheduleinfo**](../models/scheduleinfo)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    filters := `ScheduleType eq "Daily" and startTime eq 1762237200` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetSchedulesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetSchedulesV1(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetSchedulesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSchedulesV1`: []Scheduleinfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetSchedulesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-task-v1
Get a DAS task.
This end-point gets a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-task-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Taskinfo**](../models/taskinfo)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the task to retrieve. # int64 | The unique identifier of the task to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetTaskV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetTaskV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetTaskV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaskV1`: Taskinfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetTaskV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-tasks-v1
Lists all DAS tasks.
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tasks-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTasksV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Taskinfo**](../models/taskinfo)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    filters := `TaskTypeName eq "DataClassification and EndBeforeTime eq 1762240800` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \"DataSync\" and endBeforeTime eq 1762240800 (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \"DataSync\" and endBeforeTime eq 1762240800 (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetTasksV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetTasksV1(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetTasksV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTasksV1`: []Taskinfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetTasksV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-collectors-v1
List identity collectors
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-collectors-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityCollectorsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Identitycollectorlistitem**](../models/identitycollectorlistitem)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    filters := `sourceId eq "2c9180835d2e5168015d32f890ca1581"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  Supported composite operators are *and, or* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.ListIdentityCollectorsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.ListIdentityCollectorsV1(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.ListIdentityCollectorsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentityCollectorsV1`: []Identitycollectorlistitem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.ListIdentityCollectorsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-application-v1
Update application by identifier.
This endpoint updates an existing application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-application-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutApplicationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **basecreateapplicationrequest** | [**Basecreateapplicationrequest**](../models/basecreateapplicationrequest) | Request body containing the updated details for the application. | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 12345 // int64 | The unique identifier of the application to update. # int64 | The unique identifier of the application to update.
    basecreateapplicationrequest := []byte(``) // Basecreateapplicationrequest | Request body containing the updated details for the application.

    var basecreateapplicationrequest v1.Basecreateapplicationrequest
    if err := json.Unmarshal(basecreateapplicationrequest, &basecreateapplicationrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.PutApplicationV1(context.Background(), id).Basecreateapplicationrequest(basecreateapplicationrequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.PutApplicationV1(context.Background(), id).Basecreateapplicationrequest(basecreateapplicationrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutApplicationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## put-identity-collector-v1
Update identity collector by identifier
This endpoint updates the name of an existing identity collector in Data Access Security. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-identity-collector-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the identity collector to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutIdentityCollectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateidentitycollectorrequest** | [**Updateidentitycollectorrequest**](../models/updateidentitycollectorrequest) | Request body containing the updated details for the identity collector. | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 12345 // int64 | The unique identifier of the identity collector to update. # int64 | The unique identifier of the identity collector to update.
    updateidentitycollectorrequest := []byte(``) // Updateidentitycollectorrequest | Request body containing the updated details for the identity collector.

    var updateidentitycollectorrequest v1.Updateidentitycollectorrequest
    if err := json.Unmarshal(updateidentitycollectorrequest, &updateidentitycollectorrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.PutIdentityCollectorV1(context.Background(), id).Updateidentitycollectorrequest(updateidentitycollectorrequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.PutIdentityCollectorV1(context.Background(), id).Updateidentitycollectorrequest(updateidentitycollectorrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutIdentityCollectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## put-schedule-v1
Update a schedule.


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-schedule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutScheduleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateschedulerequest** | [**Updateschedulerequest**](../models/updateschedulerequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the schedule to update. # int64 | The unique identifier of the schedule to update.
    updateschedulerequest := []byte(``) // Updateschedulerequest | 

    var updateschedulerequest v1.Updateschedulerequest
    if err := json.Unmarshal(updateschedulerequest, &updateschedulerequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.PutScheduleV1(context.Background(), id).Updateschedulerequest(updateschedulerequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.PutScheduleV1(context.Background(), id).Updateschedulerequest(updateschedulerequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-task-rerun-v1
Rerun a DAS task.
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-task-rerun-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to rerun. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartTaskRerunV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
)

func main() {
    id := 1001 // int64 | The unique identifier of the task to rerun. # int64 | The unique identifier of the task to rerun.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.StartTaskRerunV1(context.Background(), id).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.StartTaskRerunV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.StartTaskRerunV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

