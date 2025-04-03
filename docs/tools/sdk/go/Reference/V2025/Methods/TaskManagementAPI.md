---
id: v2025-task-management
title: TaskManagement
pagination_label: TaskManagement
sidebar_label: TaskManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskManagement', 'V2025TaskManagement'] 
slug: /tools/sdk/go/v2025/methods/task-management
tags: ['SDK', 'Software Development Kit', 'TaskManagement', 'V2025TaskManagement']
---

# TaskManagementAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-pending-task-headers**](#get-pending-task-headers) | **Head** `/task-status/pending-tasks` | Retrieve Pending Task List Headers
[**get-pending-tasks**](#get-pending-tasks) | **Get** `/task-status/pending-tasks` | Retrieve Pending Task Status List
[**get-task-status**](#get-task-status) | **Get** `/task-status/{id}` | Get Task Status by ID
[**get-task-status-list**](#get-task-status-list) | **Get** `/task-status` | Retrieve Task Status List
[**update-task-status**](#update-task-status) | **Patch** `/task-status/{id}` | Update Task Status by ID


## get-pending-task-headers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Retrieve Pending Task List Headers
Responds with headers only for list of task statuses for pending tasks.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-pending-task-headers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPendingTaskHeadersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.TaskManagementAPI.GetPendingTaskHeaders(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TaskManagementAPI.GetPendingTaskHeaders``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-pending-tasks
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Retrieve Pending Task Status List
Retrieve a list of statuses for pending tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-pending-tasks)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPendingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]TaskStatus**](../models/task-status)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.TaskManagementAPI.GetPendingTasks(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TaskManagementAPI.GetPendingTasks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPendingTasks`: []TaskStatus
	fmt.Fprintf(os.Stdout, "Response from `TaskManagementAPI.GetPendingTasks`: %v\n", resp)
}
```

[[Back to top]](#)

## get-task-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Task Status by ID
Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-task-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Task ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TaskStatus**](../models/task-status)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 00eebcf881994e419d72e757fd30dc0e # string | Task ID. # string | Task ID.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.TaskManagementAPI.GetTaskStatus(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TaskManagementAPI.GetTaskStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTaskStatus`: TaskStatus
	fmt.Fprintf(os.Stdout, "Response from `TaskManagementAPI.GetTaskStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-task-status-list
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Retrieve Task Status List
Use this endpoint to get a list of statuses for **completed** tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned. To get a list of statuses for **in-progress** tasks, please use the [retrieve pending task status list](https://developer.sailpoint.com/docs/api/v2024/get-pending-tasks) endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-task-status-list)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskStatusListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** | 

### Return type

[**[]TaskStatus**](../models/task-status)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := completionStatus eq "Success" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in*  **type**: *eq, in* (optional)
    sorters := -created # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.TaskManagementAPI.GetTaskStatusList(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TaskManagementAPI.GetTaskStatusList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTaskStatusList`: []TaskStatus
	fmt.Fprintf(os.Stdout, "Response from `TaskManagementAPI.GetTaskStatusList`: %v\n", resp)
}
```

[[Back to top]](#)

## update-task-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Task Status by ID
Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-task-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Task ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTaskStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the object. | 

### Return type

[**TaskStatus**](../models/task-status)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 00eebcf881994e419d72e757fd30dc0e # string | Task ID. # string | Task ID.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonPatchOperation := fmt.Sprintf(``) # []JsonPatchOperation | The JSONPatch payload used to update the object.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.TaskManagementAPI.UpdateTaskStatus(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TaskManagementAPI.UpdateTaskStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTaskStatus`: TaskStatus
	fmt.Fprintf(os.Stdout, "Response from `TaskManagementAPI.UpdateTaskStatus`: %v\n", resp)
}
```

[[Back to top]](#)

