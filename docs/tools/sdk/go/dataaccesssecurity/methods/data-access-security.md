# DataAccessSecurity

# DataAccessSecurityAPI
  Use this API to enable data ownership election campaigns, assign resource owners, and respond to identity lifecycle events to maintain continuous accountability.
This API can also trigger and manage DAS tasks such as scans-starting them on demand, updating configurations or schedules, and retrieving statuses. Additionally, you can onboard and manage applications at scale by creating and configuring them, setting scanning schedules, retrieving metadata, and associating them with Virtual Appliances and Identity Collectors.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-task-v1**](#cancel-task-v1) | **Post** `/das/v1/tasks/cancel/{id}` | Cancel a DAS task.
[**create-application-v1**](#create-application-v1) | **Post** `/das/v1/applications` | Create application
[**create-data-dictionary-field-v1**](#create-data-dictionary-field-v1) | **Post** `/das/v1/permissions/fields` | Create data dictionary field
[**create-identity-collector-v1**](#create-identity-collector-v1) | **Post** `/das/v1/identity-collectors` | Create identity collector
[**create-schedule-v1**](#create-schedule-v1) | **Post** `/das/v1/tasks/schedules` | Create a new schedule.
[**das-v1-owners-assign-post**](#das-v1-owners-assign-post) | **Post** `/das/v1/owners/assign` | Assign owner to application resource.
[**das-v1-owners-owner-identity-id-resources-get**](#das-v1-owners-owner-identity-id-resources-get) | **Get** `/das/v1/owners/{ownerIdentityId}/resources` | List resources for owner.
[**das-v1-owners-reelect-post**](#das-v1-owners-reelect-post) | **Post** `/das/v1/owners/reelect` | Re-elect resource owner.
[**das-v1-owners-resources-resource-id-get**](#das-v1-owners-resources-resource-id-get) | **Get** `/das/v1/owners/resources/{resourceId}` | List owners for resource.
[**das-v1-owners-source-identity-id-reassign-destination-identity-id-post**](#das-v1-owners-source-identity-id-reassign-destination-identity-id-post) | **Post** `/das/v1/owners/{sourceIdentityId}/reassign/{destinationIdentityId}` | Reassign resource owner.
[**delete-application-v1**](#delete-application-v1) | **Delete** `/das/v1/applications/{id}` | Delete an application by identifier.
[**delete-data-dictionary-field-v1**](#delete-data-dictionary-field-v1) | **Delete** `/das/v1/permissions/fields/{name}` | Delete data dictionary field
[**delete-identity-collector-v1**](#delete-identity-collector-v1) | **Delete** `/das/v1/identity-collectors/{id}` | Delete identity collector by identifier
[**delete-schedule-v1**](#delete-schedule-v1) | **Delete** `/das/v1/tasks/schedules/{id}` | Delete a DAS schedule.
[**delete-task-v1**](#delete-task-v1) | **Delete** `/das/v1/tasks/{id}` | Delete a DAS task.
[**get-application-v1**](#get-application-v1) | **Get** `/das/v1/applications/{id}` | Retrieve application details by identifier.
[**get-applications-v1**](#get-applications-v1) | **Get** `/das/v1/applications` | Search applications in DAS.
[**get-identity-collector-builtin-properties-v1**](#get-identity-collector-builtin-properties-v1) | **Get** `/das/v1/identity-collectors/properties` | List built-in identity collector properties
[**get-identity-collector-types-v1**](#get-identity-collector-types-v1) | **Get** `/das/v1/identity-collectors/types` | List identity collector types
[**get-owners-v1**](#get-owners-v1) | **Get** `/das/v1/owners/applications/{appId}` | Retrieve owners per application.
[**get-schedule-v1**](#get-schedule-v1) | **Get** `/das/v1/tasks/schedules/{id}` | Get a DAS schedule.
[**get-schedules-v1**](#get-schedules-v1) | **Get** `/das/v1/tasks/schedules` | List all schedules.
[**get-task-v1**](#get-task-v1) | **Get** `/das/v1/tasks/{id}` | Get a DAS task.
[**get-tasks-v1**](#get-tasks-v1) | **Get** `/das/v1/tasks` | Lists all DAS tasks.
[**list-data-dictionary-fields-v1**](#list-data-dictionary-fields-v1) | **Get** `/das/v1/permissions/fields` | List data dictionary fields
[**list-identity-collectors-v1**](#list-identity-collectors-v1) | **Get** `/das/v1/identity-collectors` | List identity collectors
[**put-application-v1**](#put-application-v1) | **Put** `/das/v1/applications/{id}` | Update application by identifier.
[**put-data-dictionary-field-v1**](#put-data-dictionary-field-v1) | **Put** `/das/v1/permissions/fields/{name}` | Replace data dictionary field
[**put-identity-collector-v1**](#put-identity-collector-v1) | **Put** `/das/v1/identity-collectors/{id}` | Replace identity collector
[**put-schedule-v1**](#put-schedule-v1) | **Put** `/das/v1/tasks/schedules/{id}` | Update a schedule.
[**start-task-rerun-v1**](#start-task-rerun-v1) | **Post** `/das/v1/tasks/rerun/{id}` | Rerun a DAS task.


## cancel-task-v1
Cancel a DAS task.
This end-point sends a request to cancel a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-task-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

[API Spec](https://developer.sailpoint.com/docs/api/create-application-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationV1Request struct via the builder pattern


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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    basecreateapplicationrequestJson := []byte(`{
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

    var baseCreateApplicationRequest data_access_security.BaseCreateApplicationRequest
    if err := json.Unmarshal(basecreateapplicationrequestJson, &baseCreateApplicationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.CreateApplicationV1(context.Background()).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.CreateApplicationV1(context.Background()).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateApplicationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## create-data-dictionary-field-v1
Create data dictionary field
Creates a custom data dictionary field. The server assigns fieldType String and required false; callers do not supply those values.

[API Spec](https://developer.sailpoint.com/docs/api/create-data-dictionary-field-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDataDictionaryFieldV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdatadictionaryfieldrequest** | [**Createdatadictionaryfieldrequest**](../models/createdatadictionaryfieldrequest) | Custom data dictionary field to create. | 

### Return type

[**Datadictionaryfieldlistitem**](../models/datadictionaryfieldlistitem)

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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createdatadictionaryfieldrequestJson := []byte(`{
          "name" : "Department",
          "dataDictionaryType" : "Users"
        }`) // Createdatadictionaryfieldrequest | Custom data dictionary field to create.

    var createdatadictionaryfieldrequest data_access_security.Createdatadictionaryfieldrequest
    if err := json.Unmarshal(createdatadictionaryfieldrequestJson, &createdatadictionaryfieldrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.CreateDataDictionaryFieldV1(context.Background()).Createdatadictionaryfieldrequest(createdatadictionaryfieldrequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.CreateDataDictionaryFieldV1(context.Background()).Createdatadictionaryfieldrequest(createdatadictionaryfieldrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.CreateDataDictionaryFieldV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDataDictionaryFieldV1`: Datadictionaryfieldlistitem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.CreateDataDictionaryFieldV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-identity-collector-v1
Create identity collector
This endpoint creates a new identity collector in Data Access Security for the specified source. The identity collector type is derived from the source.

Optionally configure `users` and `groups` to register source attributes (`properties`) and map them to data dictionary fields by name (`fieldMappings.fieldDictionaryName`). When omitted, both collections are created with fixed columns only.

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-collector-v-1)

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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createidentitycollectorrequestJson := []byte(`{
          "sourceId" : "2c9180835d2e5168015d32f890ca1581",
          "name" : "Active Directory Identity Collector",
          "groups" : {
            "fieldMappings" : [ {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            }, {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            } ],
            "properties" : [ "UserAddress", "department" ]
          },
          "users" : {
            "fieldMappings" : [ {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            }, {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            } ],
            "properties" : [ "UserAddress", "department" ]
          }
        }`) // Createidentitycollectorrequest | Request body containing the details required to create a new identity collector.

    var createidentitycollectorrequest data_access_security.Createidentitycollectorrequest
    if err := json.Unmarshal(createidentitycollectorrequestJson, &createidentitycollectorrequest); err != nil {
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


[API Spec](https://developer.sailpoint.com/docs/api/create-schedule-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduleV1Request struct via the builder pattern


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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createschedulerequestJson := []byte(`{
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

    var createScheduleRequest data_access_security.CreateScheduleRequest
    if err := json.Unmarshal(createschedulerequestJson, &createScheduleRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.CreateScheduleV1(context.Background()).CreateScheduleRequest(createScheduleRequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.CreateScheduleV1(context.Background()).CreateScheduleRequest(createScheduleRequest).Execute()
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


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-assign-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersAssignPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignResourceOwnerRequest** | [**AssignResourceOwnerRequest**](../models/assign-resource-owner-request) | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner. | 

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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    assignresourceownerrequestJson := []byte(`{
          "fullPath" : "/shared/hr/documents/employee-records.pdf",
          "identityId" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
          "appId" : 12345
        }`) // AssignResourceOwnerRequest | The request body must contain the application ID, resource path, and identity ID to be assigned as the resource owner.

    var assignResourceOwnerRequest data_access_security.AssignResourceOwnerRequest
    if err := json.Unmarshal(assignresourceownerrequestJson, &assignResourceOwnerRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersAssignPost(context.Background()).AssignResourceOwnerRequest(assignResourceOwnerRequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersAssignPost(context.Background()).AssignResourceOwnerRequest(assignResourceOwnerRequest).Execute()
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


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-owner-identity-id-resources-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `DasV1OwnersOwnerIdentityIdResourcesGet`: []ResourceModel
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.DasV1OwnersOwnerIdentityIdResourcesGet`: %v\n", resp)
}
```

[[Back to top]](#)

## das-v1-owners-reelect-post
Re-elect resource owner.


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-reelect-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDasV1OwnersReelectPostRequest struct via the builder pattern


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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    reelectrequestJson := []byte(`{
          "ownerId" : "c1a2b3d4-e5f6-7890-abcd-1234567890ab",
          "campaignName" : "Annual Resource Owner Election",
          "reviewers" : [ "d4e5f6a7-b8c9-0123-4567-89abcdef0123", "e7f8g9h0-i1j2-3456-7890-klmnopqrstuv" ]
        }`) // ReelectRequest | The request body must contain details for re-electing a resource owner. Date/time fields should use epoch format in seconds.

    var reelectRequest data_access_security.ReelectRequest
    if err := json.Unmarshal(reelectrequestJson, &reelectRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersReelectPost(context.Background()).ReelectRequest(reelectRequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.DasV1OwnersReelectPost(context.Background()).ReelectRequest(reelectRequest).Execute()
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


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-resources-resource-id-get)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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


[API Spec](https://developer.sailpoint.com/docs/api/das-v1-owners-source-identity-id-reassign-destination-identity-id-post)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

[API Spec](https://developer.sailpoint.com/docs/api/delete-application-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

## delete-data-dictionary-field-v1
Delete data dictionary field
Deletes a custom data dictionary field. Built-in fields where required is true cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-data-dictionary-field-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The field name to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDataDictionaryFieldV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    name := `Department` // string | The field name to delete. # string | The field name to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.DeleteDataDictionaryFieldV1(context.Background(), name).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.DeleteDataDictionaryFieldV1(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.DeleteDataDictionaryFieldV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-identity-collector-v1
Delete identity collector by identifier
This endpoint deletes an identity collector from Data Access Security by its unique identifier.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-collector-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

[API Spec](https://developer.sailpoint.com/docs/api/delete-schedule-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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


[API Spec](https://developer.sailpoint.com/docs/api/delete-task-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

[API Spec](https://developer.sailpoint.com/docs/api/get-application-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetApplicationV1`: ApplicationItem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetApplicationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-applications-v1
Search applications in DAS.
This endpoint lists all the applications in Data Access Security with optional filtering.

[API Spec](https://developer.sailpoint.com/docs/api/get-applications-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetApplicationsV1`: []ApplicationItem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetApplicationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-collector-builtin-properties-v1
List built-in identity collector properties
Returns the built-in source attribute names for users and groups collections. When no filter is provided, built-in properties for all public identity collector types are returned (the same base types listed by [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1)). When filtered by `type`, only the matching type is returned; the filter accepts any supported type display name, including SaaS variants such as `Box SaaS` or `AWS SaaS`.

These attributes are always available for field mapping without being listed in `properties`.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-collector-builtin-properties-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityCollectorBuiltinPropertiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq* | 

### Return type

[**Identitycollectorbuiltinpropertiesresponse**](../models/identitycollectorbuiltinpropertiesresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    filters := `type eq "Azure Active Directory"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetIdentityCollectorBuiltinPropertiesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetIdentityCollectorBuiltinPropertiesV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetIdentityCollectorBuiltinPropertiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityCollectorBuiltinPropertiesV1`: Identitycollectorbuiltinpropertiesresponse
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetIdentityCollectorBuiltinPropertiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-collector-types-v1
List identity collector types
Returns the public identity collector type display names exposed for metadata and UI discovery. This endpoint lists base types only (for example, `Box` rather than `Box SaaS`). SaaS variants are not listed here; the identity collector type is derived from `sourceId` when creating an identity collector. Existing identity collectors may still report SaaS variant types in list and update responses.

Pagination is not supported for this endpoint; the full set of public types is always returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityCollectorTypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.GetIdentityCollectorTypesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.GetIdentityCollectorTypesV1(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.GetIdentityCollectorTypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityCollectorTypesV1`: []string
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetIdentityCollectorTypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-owners-v1
Retrieve owners per application.


[API Spec](https://developer.sailpoint.com/docs/api/get-owners-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetOwnersV1`: []DataOwnerModel
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetOwnersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-schedule-v1
Get a DAS schedule.
This end-point gets a schedule in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedule-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetScheduleV1`: ScheduleInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-schedules-v1
List all schedules.
This end-point lists all the schedules in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-schedules-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetSchedulesV1`: []ScheduleInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetSchedulesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-task-v1
Get a DAS task.
This end-point gets a task in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-task-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetTaskV1`: TaskInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetTaskV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-tasks-v1
Lists all DAS tasks.
This end-point lists all the tasks in Data Access Security.

[API Spec](https://developer.sailpoint.com/docs/api/get-tasks-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetTasksV1`: []TaskInfo
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.GetTasksV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-data-dictionary-fields-v1
List data dictionary fields
Returns custom data dictionary fields that can be used when configuring identity collector field mappings and other permission-related settings. Built-in fields are not included in list responses; only custom fields created via [Create Data Dictionary Field](https://developer.sailpoint.com/docs/api/create-data-dictionary-field-v-1) are returned. All listed fields have `required: false`.

[API Spec](https://developer.sailpoint.com/docs/api/list-data-dictionary-fields-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDataDictionaryFieldsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Datadictionaryfieldlistitem**](../models/datadictionaryfieldlistitem)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    filters := `dataDictionaryType eq "Users" and name eq "Department"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **dataDictionaryType**: *eq*  **name**: *eq*  Supported composite operators are *and* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.ListDataDictionaryFieldsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.ListDataDictionaryFieldsV1(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.ListDataDictionaryFieldsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListDataDictionaryFieldsV1`: []Datadictionaryfieldlistitem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.ListDataDictionaryFieldsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-collectors-v1
List identity collectors
This endpoint lists the identity collectors in Data Access Security with optional filtering and pagination.

Sorting is not supported for this endpoint; supplying the `sorters` query parameter results in a validation error.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityCollectorsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For &#x60;name&#x60;, &#x60;eq&#x60; performs an exact match and &#x60;co&#x60; performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with &#x60;type&#x60; filters (for example, &#x60;AWS&#x60;, not &#x60;AWS SaaS&#x60;).  Supported composite operators are *and, or* | 
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    filters := `name co "Finance" and type eq "AWS"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For `name`, `eq` performs an exact match and `co` performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with `type` filters (for example, `AWS`, not `AWS SaaS`).  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  **type**: *eq, in*  **id**: *eq, in*  **name**: *eq, co*  For `name`, `eq` performs an exact match and `co` performs a contains (substring) match. Use public type display names from [List Identity Collector Types](https://developer.sailpoint.com/docs/api/get-identity-collector-types-v-1) with `type` filters (for example, `AWS`, not `AWS SaaS`).  Supported composite operators are *and, or* (optional)
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

[API Spec](https://developer.sailpoint.com/docs/api/put-application-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the application to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutApplicationV1Request struct via the builder pattern


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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := 12345 // int64 | The unique identifier of the application to update. # int64 | The unique identifier of the application to update.
    basecreateapplicationrequestJson := []byte(`{
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

    var baseCreateApplicationRequest data_access_security.BaseCreateApplicationRequest
    if err := json.Unmarshal(basecreateapplicationrequestJson, &baseCreateApplicationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.PutApplicationV1(context.Background(), id).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.PutApplicationV1(context.Background(), id).BaseCreateApplicationRequest(baseCreateApplicationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutApplicationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## put-data-dictionary-field-v1
Replace data dictionary field
Fully replaces a custom data dictionary field. This is a PUT operation, not a partial update: the request body must contain the complete resource representation. Omitted properties are rejected. For custom fields, `fieldType`, `dataDictionaryType`, and `required` must match the current values; only `name` may change. Built-in fields where `required` is true cannot be updated.

List the field first with [List Data Dictionary Fields](https://developer.sailpoint.com/docs/api/list-data-dictionary-fields-v-1) to obtain the current representation before replacing it.

[API Spec](https://developer.sailpoint.com/docs/api/put-data-dictionary-field-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The current field name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutDataDictionaryFieldV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updatedatadictionaryfieldrequest** | [**Updatedatadictionaryfieldrequest**](../models/updatedatadictionaryfieldrequest) | Complete data dictionary field representation used to fully replace the existing field. | 

### Return type

[**Datadictionaryfieldlistitem**](../models/datadictionaryfieldlistitem)

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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    name := `Department` // string | The current field name. # string | The current field name.
    updatedatadictionaryfieldrequestJson := []byte(`{
          "name" : "Cost Center",
          "dataDictionaryType" : "Users",
          "fieldType" : "String",
          "required" : false
        }`) // Updatedatadictionaryfieldrequest | Complete data dictionary field representation used to fully replace the existing field.

    var updatedatadictionaryfieldrequest data_access_security.Updatedatadictionaryfieldrequest
    if err := json.Unmarshal(updatedatadictionaryfieldrequestJson, &updatedatadictionaryfieldrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.DataAccessSecurityAPI.PutDataDictionaryFieldV1(context.Background(), name).Updatedatadictionaryfieldrequest(updatedatadictionaryfieldrequest).Execute()
	  //resp, r, err := apiClient.DataAccessSecurityAPI.PutDataDictionaryFieldV1(context.Background(), name).Updatedatadictionaryfieldrequest(updatedatadictionaryfieldrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `DataAccessSecurityAPI.PutDataDictionaryFieldV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDataDictionaryFieldV1`: Datadictionaryfieldlistitem
    fmt.Fprintf(os.Stdout, "Response from `DataAccessSecurityAPI.PutDataDictionaryFieldV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-identity-collector-v1
Replace identity collector
Fully replaces an existing identity collector in Data Access Security. This is a PUT operation, not a partial update: the request body must contain the complete resource representation. Omitted or null top-level properties are rejected. After a successful request, a subsequent list request returns exactly the configuration that was sent.

Retrieve the current configuration with [List Identity Collectors](https://developer.sailpoint.com/docs/api/list-identity-collectors-v-1) before replacing it. The `sourceId` and `type` cannot be changed and must match the current values.

[API Spec](https://developer.sailpoint.com/docs/api/put-identity-collector-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the identity collector to replace. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutIdentityCollectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateidentitycollectorrequest** | [**Updateidentitycollectorrequest**](../models/updateidentitycollectorrequest) | Complete identity collector representation used to fully replace the existing resource. Partial updates are not supported. | 

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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := 12345 // int64 | The unique identifier of the identity collector to replace. # int64 | The unique identifier of the identity collector to replace.
    updateidentitycollectorrequestJson := []byte(`{
          "sourceId" : "2c9180835d2e5168015d32f890ca1581",
          "name" : "Active Directory Identity Collector",
          "groups" : {
            "fieldMappings" : [ {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            }, {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            } ],
            "properties" : [ "UserAddress", "department" ]
          },
          "type" : "Active Directory",
          "users" : {
            "fieldMappings" : [ {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            }, {
              "sourceAttributeName" : "department",
              "fieldDictionaryName" : "UPTF-1"
            } ],
            "properties" : [ "UserAddress", "department" ]
          }
        }`) // Updateidentitycollectorrequest | Complete identity collector representation used to fully replace the existing resource. Partial updates are not supported.

    var updateidentitycollectorrequest data_access_security.Updateidentitycollectorrequest
    if err := json.Unmarshal(updateidentitycollectorrequestJson, &updateidentitycollectorrequest); err != nil {
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


[API Spec](https://developer.sailpoint.com/docs/api/put-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** | The unique identifier of the schedule to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutScheduleV1Request struct via the builder pattern


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
    data_access_security "github.com/sailpoint-oss/golang-sdk/v3/data_access_security"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := 1001 // int64 | The unique identifier of the schedule to update. # int64 | The unique identifier of the schedule to update.
    updateschedulerequestJson := []byte(`{
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

    var updateScheduleRequest data_access_security.UpdateScheduleRequest
    if err := json.Unmarshal(updateschedulerequestJson, &updateScheduleRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.DataAccessSecurityAPI.PutScheduleV1(context.Background(), id).UpdateScheduleRequest(updateScheduleRequest).Execute()
	  //r, err := apiClient.DataAccessSecurityAPI.PutScheduleV1(context.Background(), id).UpdateScheduleRequest(updateScheduleRequest).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/start-task-rerun-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

