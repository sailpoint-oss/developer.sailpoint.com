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
  Use this API to trigger and manage DAS tasks such as scans-starting them on demand, updating schedules, and retrieving statuses.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task**](#cancel-task) | **Post** `/das/tasks/cancel/{id}` | Cancel a DAS task.
[**create-schedule**](#create-schedule) | **Post** `/das/tasks/schedules` | Create a new schedule.
[**delete-schedule**](#delete-schedule) | **Delete** `/das/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task**](#delete-task) | **Delete** `/das/tasks/{id}` | Delete a DAS task.
[**get-schedule**](#get-schedule) | **Get** `/das/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules**](#get-schedules) | **Get** `/das/tasks/schedules` | List all schedules.
[**get-task**](#get-task) | **Get** `/das/tasks/{id}` | Get a DAS task.
[**get-tasks**](#get-tasks) | **Get** `/das/tasks` | Lists all DAS tasks.
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

