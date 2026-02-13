---
id: v2025-data-access-security
title: DataAccessSecurity
pagination_label: DataAccessSecurity
sidebar_label: DataAccessSecurity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataAccessSecurity', 'V2025DataAccessSecurity'] 
slug: /tools/sdk/go/v2025/methods/data-access-security
tags: ['SDK', 'Software Development Kit', 'DataAccessSecurity', 'V2025DataAccessSecurity']
---

# DataAccessSecurityAPI
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task**](#cancel-task) | **Post** `/das/tasks/cancel/{id}` | Cancel a DAS task.
[**create-application**](#create-application) | **Post** `/das/applications` | Create application
[**create-schedule**](#create-schedule) | **Post** `/das/tasks/schedules` | Create a new schedule.
[**das-owners-assign-post**](#das-owners-assign-post) | **Post** `/das/owners/assign` | Assign owner to application resource.
[**das-owners-owner-identity-id-resources-get**](#das-owners-owner-identity-id-resources-get) | **Get** `/das/owners/{ownerIdentityId}/resources` | List resources for owner.
[**das-owners-reelect-post**](#das-owners-reelect-post) | **Post** `/das/owners/reelect` | Re-elect resource owner.
[**das-owners-resources-resource-id-get**](#das-owners-resources-resource-id-get) | **Get** `/das/owners/resources/{resourceId}` | List owners for resource.
[**das-owners-source-identity-id-reassign-destination-identity-id-post**](#das-owners-source-identity-id-reassign-destination-identity-id-post) | **Post** `/das/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**delete-application**](#delete-application) | **Delete** `/das/applications/{id}` | Delete an application by identifier.
[**delete-schedule**](#delete-schedule) | **Delete** `/das/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task**](#delete-task) | **Delete** `/das/tasks/{id}` | Delete a DAS task.
[**get-application**](#get-application) | **Get** `/das/applications/{id}` | Retrieve application details by identifier.
[**get-applications**](#get-applications) | **Get** `/das/applications` | Search applications in DAS.
[**get-owners**](#get-owners) | **Get** `/das/owners/applications/{appId}` | Retrieve owners per application.
[**get-schedule**](#get-schedule) | **Get** `/das/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules**](#get-schedules) | **Get** `/das/tasks/schedules` | List all schedules.
[**get-task**](#get-task) | **Get** `/das/tasks/{id}` | Get a DAS task.
[**get-tasks**](#get-tasks) | **Get** `/das/tasks` | Lists all DAS tasks.
[**put-application**](#put-application) | **Put** `/das/applications/{id}` | Update application by identifier.
[**put-schedule**](#put-schedule) | **Put** `/das/tasks/schedules/{id}` | Update a schedule.
[**start-task-rerun**](#start-task-rerun) | **Post** `/das/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task
Cancel a DAS task.
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-task)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to cancel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelTaskRequest struct via the builder pattern


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
    id := 1001 // int64 | The unique identifier of the task to cancel. # int64 | The unique identifier of the task to cancel.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.CancelTask(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.CancelTask(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CancelTask``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-application
Create application
This endpoint creates a new application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-application)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseCreateApplicationRequest** | [**BaseCreateApplicationRequest**](../models/base-create-application-request) | Request body containing the details required to create a new application. | 

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
    basecreateapplicationrequest := []byte(`{
          "adIdentityCollectorId" : 987654321,
          "applicationType" : 9,
          "nisIdentityCollectorId" : 192837465,
          "executeNow" : false,
          "name" : "HR File Server",
          "description" : "Stores HR documents and employee records.",
          "dataClassificationSettings" : {
            "isEnabled" : true,
            "clusterId" : "cluster-001"
          },
          "activityConfigurationSettings" : {
            "excludeFolders" : [ "/tmp", "/archive" ],
            "excludeFileExtensions" : [ ".log", ".bak" ],
            "excludeActions" : [ "delete", "move" ],
            "isEnabled" : true,
            "retentionTimePeriod" : 30,
            "retentionTimeType" : "days",
            "clusterId" : "cluster-001",
            "excludeUsers" : [ "user1", "user2" ]
          },
          "applicationCrawlerSettings" : {
            "calculateResourceSize" : 2,
            "excludedResources" : [ "resourceA", "resourceB" ],
            "crawlPublicFolders" : true,
            "excludedPathsByRegex" : "^/archive/.*",
            "isEnabled" : true,
            "crawlSnapshotsFolder" : true,
            "crawlMailboxes" : false,
            "crawlTopLevelShares" : [ "share1", "share2" ],
            "clusterId" : "cluster-001",
            "includeResources" : [ "resourceX", "resourceY" ]
          },
          "identityCollectorId" : 123456789,
          "permissionCollectorSettings" : {
            "analyzeUniquePermissions" : true,
            "calculateRiskiestPermissions" : false,
            "isEnabled" : true,
            "calculateEffectivePermissions" : true,
            "clusterId" : "cluster-001",
            "effectivePermissionsSource" : "S3"
          },
          "tags" : [ {
            "key" : 1,
            "value" : "Confidential"
          } ]
        }`) // BaseCreateApplicationRequest | Request body containing the details required to create a new application.

    var baseCreateApplicationRequest v2025.BaseCreateApplicationRequest
    if err := json.Unmarshal(basecreateapplicationrequest, &baseCreateApplicationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.CreateApplication(context.Background()).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.CreateApplication(context.Background()).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateApplication``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-schedule
Create a new schedule.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-schedule)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createScheduleRequest** | [**CreateScheduleRequest**](../models/create-schedule-request) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createschedulerequest := []byte(`{
          "scheduleTaskName" : "Daily Data Sync",
          "scheduleType" : "Daily",
          "active" : true,
          "interval" : 1440,
          "startTime" : 1762237200,
          "endTime" : 1762240800,
          "taskTypeName" : "DataSync",
          "daysOfWeek" : [ "Monday", "Wednesday", "Friday" ],
          "applicationId" : 2001,
          "runAfterScheduleTaskId" : 1000
        }`) // CreateScheduleRequest | 

    var createScheduleRequest v2025.CreateScheduleRequest
    if err := json.Unmarshal(createschedulerequest, &createScheduleRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.CreateSchedule(context.Background()).CreateScheduleRequest(createScheduleRequest).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.CreateSchedule(context.Background()).CreateScheduleRequest(createScheduleRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSchedule`: int64
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.CreateSchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## das-owners-assign-post
Assign owner to application resource.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/das-owners-assign-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDasOwnersAssignPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignResourceOwnerRequest** | [**AssignResourceOwnerRequest**](../models/assign-resource-owner-request) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    assignresourceownerrequest := []byte(`{
          "fullPath" : "/shared/hr/documents/employee-records.pdf",
          "identityId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "appId" : 12345
        }`) // AssignResourceOwnerRequest | 

    var assignResourceOwnerRequest v2025.AssignResourceOwnerRequest
    if err := json.Unmarshal(assignresourceownerrequest, &assignResourceOwnerRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersAssignPost(context.Background()).AssignResourceOwnerRequest(assignResourceOwnerRequest).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersAssignPost(context.Background()).AssignResourceOwnerRequest(assignResourceOwnerRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasOwnersAssignPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasOwnersAssignPost`: int32
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasOwnersAssignPost`: %v\n", resp)
}
```

[[Back to top]](#)

## das-owners-owner-identity-id-resources-get
List resources for owner.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/das-owners-owner-identity-id-resources-get)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ownerIdentityId** | **string** | Unique identifier for the owner. This should be a UUID representing the owner&#39;s identity. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDasOwnersOwnerIdentityIdResourcesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Not applicable for this endpoint. Do not use. | [default to 250]
 **offset** | **int32** | Not applicable for this endpoint. Do not use. | [default to 0]

### Return type

[**[]ResourceModel**](../models/resource-model)

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
    ownerIdentityId := `a3f1c2d4-5678-4e9b-8c2d-123456789abc` // string | Unique identifier for the owner. This should be a UUID representing the owner's identity. # string | Unique identifier for the owner. This should be a UUID representing the owner's identity.
    limit := 250 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
    offset := 0 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersOwnerIdentityIdResourcesGet(context.Background(), ownerIdentityId).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersOwnerIdentityIdResourcesGet(context.Background(), ownerIdentityId).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasOwnersOwnerIdentityIdResourcesGet``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasOwnersOwnerIdentityIdResourcesGet`: []ResourceModel
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasOwnersOwnerIdentityIdResourcesGet`: %v\n", resp)
}
```

[[Back to top]](#)

## das-owners-reelect-post
Re-elect resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/das-owners-reelect-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDasOwnersReelectPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reelectRequest** | [**ReelectRequest**](../models/reelect-request) | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds. | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    reelectrequest := []byte(`{
          "ownerId" : "c1a2b3d4-e5f6-7890-abcd-1234567890ab",
          "campaignName" : "Annual Resource Owner Election",
          "reviewers" : [ "d4e5f6a7-b8c9-0123-4567-89abcdef0123", "e7f8g9h0-i1j2-3456-7890-klmnopqrstuv" ]
        }`) // ReelectRequest | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.

    var reelectRequest v2025.ReelectRequest
    if err := json.Unmarshal(reelectrequest, &reelectRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersReelectPost(context.Background()).ReelectRequest(reelectRequest).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersReelectPost(context.Background()).ReelectRequest(reelectRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasOwnersReelectPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasOwnersReelectPost`: int32
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasOwnersReelectPost`: %v\n", resp)
}
```

[[Back to top]](#)

## das-owners-resources-resource-id-get
List owners for resource.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/das-owners-resources-resource-id-get)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** | Unique identifier for the resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDasOwnersResourcesResourceIdGetRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    resourceId := 101 // int64 | Unique identifier for the resource. # int64 | Unique identifier for the resource.
    limit := 250 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
    offset := 0 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersResourcesResourceIdGet(context.Background(), resourceId).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersResourcesResourceIdGet(context.Background(), resourceId).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasOwnersResourcesResourceIdGet``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasOwnersResourcesResourceIdGet`: []string
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasOwnersResourcesResourceIdGet`: %v\n", resp)
}
```

[[Back to top]](#)

## das-owners-source-identity-id-reassign-destination-identity-id-post
Reassign resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/das-owners-source-identity-id-reassign-destination-identity-id-post)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceIdentityId** | **string** | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from. | 
**destinationIdentityId** | **string** | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDasOwnersSourceIdentityIdReassignDestinationIdentityIdPostRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sourceIdentityId := `a3f1c2d4-5678-4e9b-8c2d-123456789abc` // string | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from. # string | Unique identifier for the source owner. This should be a UUID representing the identity to reassign from.
    destinationIdentityId := `b4e2d3c5-6789-4f0a-9d3e-234567890bcd` // string | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to. # string | Unique identifier for the destination owner. This should be a UUID representing the identity to reassign to.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersSourceIdentityIdReassignDestinationIdentityIdPost(context.Background(), sourceIdentityId, destinationIdentityId).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.DasOwnersSourceIdentityIdReassignDestinationIdentityIdPost(context.Background(), sourceIdentityId, destinationIdentityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DasOwnersSourceIdentityIdReassignDestinationIdentityIdPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DasOwnersSourceIdentityIdReassignDestinationIdentityIdPost`: int32
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasOwnersSourceIdentityIdReassignDestinationIdentityIdPost`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-application
Delete an application by identifier.
This endpoint deletes an application from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-application)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationRequest struct via the builder pattern


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
    id := 12345 // int64 | The unique identifier of the application to delete. # int64 | The unique identifier of the application to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.DeleteApplication(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.DeleteApplication(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteApplication``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-schedule
Delete a DAS schedule.
This end-point sends a request to delete a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteScheduleRequest struct via the builder pattern


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
    id := 1001 // int64 | The unique identifier of the schedule to delete. # int64 | The unique identifier of the schedule to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.DeleteSchedule(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.DeleteSchedule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-task
Delete a DAS task.
This end-point sends a request to delete a task in Data Access Security.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-task)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaskRequest struct via the builder pattern


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
    id := 1001 // int64 | The unique identifier of the task to delete. # int64 | The unique identifier of the task to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.DeleteTask(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.DeleteTask(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteTask``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-application
Retrieve application details by identifier.
This endpoint retrieves the details of a specific application in Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-application)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApplicationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ApplicationItem**](../models/application-item)

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
    id := 12345 // int64 | The unique identifier of the application to retrieve. # int64 | The unique identifier of the application to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetApplication(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetApplication(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetApplication``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApplication`: ApplicationItem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetApplication`: %v\n", resp)
}
```

[[Back to top]](#)

## get-applications
Search applications in DAS.
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-applications)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApplicationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]ApplicationItem**](../models/application-item)

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
    filters := `AppType eq 'ActiveDirectory' and Statuses eq 'Passed'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **appIds**: *eq, in*  **tagIds**: *eq, in*  **statuses**: *eq, in*  **groupCodes**: *eq, in*  **virtualAppId**: *eq*  **appName**: *eq*  **supportsValidation**: *eq*  Supported composite operators are *and, or* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetApplications(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetApplications(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetApplications``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApplications`: []ApplicationItem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetApplications`: %v\n", resp)
}
```

[[Back to top]](#)

## get-owners
Retrieve owners per application.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-owners)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **int64** | The unique identifier of the application for which to retrieve owners. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Not applicable for this endpoint. Do not use. | [default to 250]
 **offset** | **int32** | Not applicable for this endpoint. Do not use. | [default to 0]

### Return type

[**[]DataOwnerModel**](../models/data-owner-model)

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
    appId := 2001 // int64 | The unique identifier of the application for which to retrieve owners. # int64 | The unique identifier of the application for which to retrieve owners.
    limit := 250 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 250)
    offset := 0 // int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0) # int32 | Not applicable for this endpoint. Do not use. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetOwners(context.Background(), appId).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetOwners(context.Background(), appId).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetOwners``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOwners`: []DataOwnerModel
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetOwners`: %v\n", resp)
}
```

[[Back to top]](#)

## get-schedule
Get a DAS schedule.
This end-point gets a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ScheduleInfo**](../models/schedule-info)

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
    id := 1001 // int64 | The unique identifier of the schedule to retrieve. # int64 | The unique identifier of the schedule to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetSchedule(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetSchedule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSchedule`: ScheduleInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetSchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## get-schedules
List all schedules.
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-schedules)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]ScheduleInfo**](../models/schedule-info)

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
    filters := `ScheduleType eq "Daily" and startTime eq 1762237200` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **scheduleTaskIds**: *eq, in*  **taskTypeName**: *eq, in*  **status**: *eq*  **applicationId**: *eq*  **fullName**: *eq*  **nameSubString**: *eq*  **scheduleType**: *eq*  Supported composite operators are *and, or* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetSchedules(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetSchedules(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetSchedules``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSchedules`: []ScheduleInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetSchedules`: %v\n", resp)
}
```

[[Back to top]](#)

## get-task
Get a DAS task.
This end-point gets a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-task)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TaskInfo**](../models/task-info)

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
    id := 1001 // int64 | The unique identifier of the task to retrieve. # int64 | The unique identifier of the task to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetTask(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetTask(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetTask``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTask`: TaskInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetTask`: %v\n", resp)
}
```

[[Back to top]](#)

## get-tasks
Lists all DAS tasks.
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tasks)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \&quot;DataSync\&quot; and endBeforeTime eq 1762240800 | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]TaskInfo**](../models/task-info)

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
    filters := `TaskTypeName eq "DataClassification and EndBeforeTime eq 1762240800` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \"DataSync\" and endBeforeTime eq 1762240800 (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **taskIds**: *eq, in*  **statuses**: *eq, in*  **taskTypeName**: *eq, in*  **taskName**: *eq*  **endBeforeTime**: *eq*  Supported composite operators are *and, or*  Example: taskTypeName eq \"DataSync\" and endBeforeTime eq 1762240800 (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetTasks(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.DataAccessSecurityAPI.GetTasks(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetTasks``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTasks`: []TaskInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetTasks`: %v\n", resp)
}
```

[[Back to top]](#)

## put-application
Update application by identifier.
This endpoint updates an existing application in Data Access Security with the specified configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-application)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutApplicationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **baseCreateApplicationRequest** | [**BaseCreateApplicationRequest**](../models/base-create-application-request) | Request body containing the updated details for the application. | 

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
    id := 12345 // int64 | The unique identifier of the application to update. # int64 | The unique identifier of the application to update.
    basecreateapplicationrequest := []byte(`{
          "adIdentityCollectorId" : 987654321,
          "applicationType" : 9,
          "nisIdentityCollectorId" : 192837465,
          "executeNow" : false,
          "name" : "HR File Server",
          "description" : "Stores HR documents and employee records.",
          "dataClassificationSettings" : {
            "isEnabled" : true,
            "clusterId" : "cluster-001"
          },
          "activityConfigurationSettings" : {
            "excludeFolders" : [ "/tmp", "/archive" ],
            "excludeFileExtensions" : [ ".log", ".bak" ],
            "excludeActions" : [ "delete", "move" ],
            "isEnabled" : true,
            "retentionTimePeriod" : 30,
            "retentionTimeType" : "days",
            "clusterId" : "cluster-001",
            "excludeUsers" : [ "user1", "user2" ]
          },
          "applicationCrawlerSettings" : {
            "calculateResourceSize" : 2,
            "excludedResources" : [ "resourceA", "resourceB" ],
            "crawlPublicFolders" : true,
            "excludedPathsByRegex" : "^/archive/.*",
            "isEnabled" : true,
            "crawlSnapshotsFolder" : true,
            "crawlMailboxes" : false,
            "crawlTopLevelShares" : [ "share1", "share2" ],
            "clusterId" : "cluster-001",
            "includeResources" : [ "resourceX", "resourceY" ]
          },
          "identityCollectorId" : 123456789,
          "permissionCollectorSettings" : {
            "analyzeUniquePermissions" : true,
            "calculateRiskiestPermissions" : false,
            "isEnabled" : true,
            "calculateEffectivePermissions" : true,
            "clusterId" : "cluster-001",
            "effectivePermissionsSource" : "S3"
          },
          "tags" : [ {
            "key" : 1,
            "value" : "Confidential"
          } ]
        }`) // BaseCreateApplicationRequest | Request body containing the updated details for the application.

    var baseCreateApplicationRequest v2025.BaseCreateApplicationRequest
    if err := json.Unmarshal(basecreateapplicationrequest, &baseCreateApplicationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.PutApplication(context.Background(), id).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.PutApplication(context.Background(), id).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutApplication``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## put-schedule
Update a schedule.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateScheduleRequest** | [**UpdateScheduleRequest**](../models/update-schedule-request) |  | 

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
    id := 1001 // int64 | The unique identifier of the schedule to update. # int64 | The unique identifier of the schedule to update.
    updateschedulerequest := []byte(`{
          "scheduleTaskName" : "Daily Data Sync",
          "scheduleType" : "Daily",
          "active" : true,
          "interval" : 1440,
          "startTime" : 1762237200,
          "endTime" : 1762240800,
          "taskTypeName" : "DataSync",
          "daysOfWeek" : [ "Monday", "Wednesday", "Friday" ],
          "applicationId" : 2001,
          "runAfterScheduleTaskId" : 1000
        }`) // UpdateScheduleRequest | 

    var updateScheduleRequest v2025.UpdateScheduleRequest
    if err := json.Unmarshal(updateschedulerequest, &updateScheduleRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.PutSchedule(context.Background(), id).UpdateScheduleRequest(updateScheduleRequest).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.PutSchedule(context.Background(), id).UpdateScheduleRequest(updateScheduleRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutSchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-task-rerun
Rerun a DAS task.
This end-point sends a request to re-run a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-task-rerun)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the task to rerun. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartTaskRerunRequest struct via the builder pattern


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
    id := 1001 // int64 | The unique identifier of the task to rerun. # int64 | The unique identifier of the task to rerun.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DataAccessSecurityAPI.StartTaskRerun(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.DataAccessSecurityAPI.StartTaskRerun(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.StartTaskRerun``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

