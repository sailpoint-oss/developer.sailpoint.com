---
id: v2026-task-management
title: TaskManagement
pagination_label: TaskManagement
sidebar_label: TaskManagement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskManagement', 'V2026TaskManagement'] 
slug: /tools/sdk/go/v2026/methods/task-management
tags: ['SDK', 'Software Development Kit', 'TaskManagement', 'V2026TaskManagement']
---

# TaskManagementAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-task-status**](#get-task-status) | **Get** `/task-status/{id}` | Get task status by id
[**get-task-status-list**](#get-task-status-list) | **Get** `/task-status` | Retrieve task status list
[**update-task-status**](#update-task-status) | **Patch** `/task-status/{id}` | Update task status by id


## get-task-status
Get task status by id
Get task status by task ID. Types of tasks include account and entitlement aggregation and other general background processing tasks.  Data for tasks older than 90 days will not be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-task-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Task ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `00eebcf881994e419d72e757fd30dc0e` // string | Task ID. # string | Task ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.TaskManagementAPI.GetTaskStatus(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2026.TaskManagementAPI.GetTaskStatus(context.Background(), id).Execute()
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
Retrieve task status list
Use this endpoint to get a list of statuses for **all** tasks, including completed, in-progress, terminated, and errored tasks. Types of tasks include account and entitlement aggregation and other general background processing tasks. Data for tasks older than 90 days will not be returned. For a list of **in-progress** tasks, apply the isnull filter to the Completion Status field.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-task-status-list)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskStatusListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION | 
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `type eq "CLOUD_ACCOUNT_AGGREGATION" and completionStatus isnull` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **sourceId**: *eq, in*  **completionStatus**: *eq, in, isnull*  **type**: *eq, in*  **launcher**: *eq, in*  **Possible Values:** CLOUD_ACCOUNT_AGGREGATION, CLOUD_GROUP_AGGREGATION, CLOUD_PROCESS_UNCORRELATED_ACCOUNTS, CLOUD_REFRESH_ROLE, SOURCE_APPLICATION_DISCOVERY, AI_AGENT_AGGREGATION, CLOUD_ENTITLEMENT_IMPORT, CLOUD_UNCORRELATED_REFRESH, CLOUD_IDENTITY_AGGREGATION, CLOUD_ATTRIBUTE_SYNCHRONIZATION, IDENTITY_REFRESH, APPLICATION_DISCOVERY, MACHINE_IDENTITY_AGGREGATION, MACHINE_IDENTITY_DELETION, ACCOUNT_DELETION (optional)
    sorters := `-created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.TaskManagementAPI.GetTaskStatusList(context.Background()).Execute()
	  //resp, r, err := apiClient.V2026.TaskManagementAPI.GetTaskStatusList(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
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
Update task status by id
Update a current task status by task ID. Use this API to clear a pending task by updating the completionStatus and completed attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/update-task-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Task ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTaskStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `00eebcf881994e419d72e757fd30dc0e` // string | Task ID. # string | Task ID.
    jsonpatchoperation := []byte(``) // []JsonPatchOperation | The JSONPatch payload used to update the object.

    var jsonPatchOperation []v2026.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.TaskManagementAPI.UpdateTaskStatus(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V2026.TaskManagementAPI.UpdateTaskStatus(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaskManagementAPI.UpdateTaskStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateTaskStatus`: TaskStatus
    fmt.Fprintf(os.Stdout, "Response from `TaskManagementAPI.UpdateTaskStatus`: %v\n", resp)
}
```

[[Back to top]](#)

