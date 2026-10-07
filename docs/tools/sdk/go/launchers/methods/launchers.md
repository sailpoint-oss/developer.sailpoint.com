# Launchers

# LaunchersAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-launcher-v1**](#create-launcher-v1) | **Post** `/launchers/v1` | Create launcher
[**delete-launcher-v1**](#delete-launcher-v1) | **Delete** `/launchers/v1/{launcherID}` | Delete launcher
[**get-launcher-v1**](#get-launcher-v1) | **Get** `/launchers/v1/{launcherID}` | Get launcher by id
[**get-launchers-v1**](#get-launchers-v1) | **Get** `/launchers/v1` | List all launchers for tenant
[**put-launcher-v1**](#put-launcher-v1) | **Put** `/launchers/v1/{launcherID}` | Replace launcher
[**start-launcher-v1**](#start-launcher-v1) | **Post** `/launchers/v1/{launcherID}/launch` | Launch a launcher


## create-launcher-v1
Create launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/create-launcher-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateLauncherV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **launcherRequest** | [**LauncherRequest**](../models/launcher-request) | Payload to create a Launcher | 

### Return type

[**Launcher**](../models/launcher)

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
    launchers "github.com/sailpoint-oss/golang-sdk/v3/launchers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    launcherrequestJson := []byte(`{
          "reference" : {
            "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
            "type" : "WORKFLOW"
          },
          "name" : "Group Create",
          "description" : "Create a new Active Directory Group",
          "disabled" : false,
          "type" : "INTERACTIVE_PROCESS",
          "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
        }`) // LauncherRequest | Payload to create a Launcher

    var launcherRequest launchers.LauncherRequest
    if err := json.Unmarshal(launcherrequestJson, &launcherRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LaunchersAPI.CreateLauncherV1(context.Background()).LauncherRequest(launcherRequest).Execute()
	  //resp, r, err := apiClient.LaunchersAPI.CreateLauncherV1(context.Background()).LauncherRequest(launcherRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.CreateLauncherV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateLauncherV1`: Launcher
    fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.CreateLauncherV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-launcher-v1
Delete launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/delete-launcher-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be deleted | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLauncherV1Request struct via the builder pattern


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
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be deleted # string | ID of the Launcher to be deleted

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.LaunchersAPI.DeleteLauncherV1(context.Background(), launcherID).Execute()
	  //r, err := apiClient.LaunchersAPI.DeleteLauncherV1(context.Background(), launcherID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.DeleteLauncherV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-launcher-v1
Get launcher by id
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/get-launcher-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLauncherV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Launcher**](../models/launcher)

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
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be retrieved # string | ID of the Launcher to be retrieved

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LaunchersAPI.GetLauncherV1(context.Background(), launcherID).Execute()
	  //resp, r, err := apiClient.LaunchersAPI.GetLauncherV1(context.Background(), launcherID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.GetLauncherV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLauncherV1`: Launcher
    fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.GetLauncherV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-launchers-v1
List all launchers for tenant
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/get-launchers-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLaunchersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* | 
 **next** | **string** | Pagination marker | 
 **limit** | **int32** | Number of Launchers to return | [default to 10]

### Return type

[**GetLaunchersV1200Response**](../models/get-launchers-v1200-response)

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
    filters := `disabled eq "true"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
    next := `eyJuZXh0IjoxMjN9Cg==` // string | Pagination marker (optional) # string | Pagination marker (optional)
    limit := 42 // int32 | Number of Launchers to return (optional) (default to 10) # int32 | Number of Launchers to return (optional) (default to 10)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LaunchersAPI.GetLaunchersV1(context.Background()).Execute()
	  //resp, r, err := apiClient.LaunchersAPI.GetLaunchersV1(context.Background()).Filters(filters).Next(next).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.GetLaunchersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLaunchersV1`: GetLaunchersV1200Response
    fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.GetLaunchersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-launcher-v1
Replace launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/put-launcher-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be replaced | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutLauncherV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **launcherRequest** | [**LauncherRequest**](../models/launcher-request) | Payload to replace Launcher | 

### Return type

[**Launcher**](../models/launcher)

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
    launchers "github.com/sailpoint-oss/golang-sdk/v3/launchers"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be replaced # string | ID of the Launcher to be replaced
    launcherrequestJson := []byte(`{
          "reference" : {
            "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
            "type" : "WORKFLOW"
          },
          "name" : "Group Create",
          "description" : "Create a new Active Directory Group",
          "disabled" : false,
          "type" : "INTERACTIVE_PROCESS",
          "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
        }`) // LauncherRequest | Payload to replace Launcher

    var launcherRequest launchers.LauncherRequest
    if err := json.Unmarshal(launcherrequestJson, &launcherRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LaunchersAPI.PutLauncherV1(context.Background(), launcherID).LauncherRequest(launcherRequest).Execute()
	  //resp, r, err := apiClient.LaunchersAPI.PutLauncherV1(context.Background(), launcherID).LauncherRequest(launcherRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.PutLauncherV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutLauncherV1`: Launcher
    fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.PutLauncherV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-launcher-v1
Launch a launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/start-launcher-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be launched | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartLauncherV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StartLauncherV1200Response**](../models/start-launcher-v1200-response)

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
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be launched # string | ID of the Launcher to be launched

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.LaunchersAPI.StartLauncherV1(context.Background(), launcherID).Execute()
	  //resp, r, err := apiClient.LaunchersAPI.StartLauncherV1(context.Background(), launcherID).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.StartLauncherV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartLauncherV1`: StartLauncherV1200Response
    fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.StartLauncherV1`: %v\n", resp)
}
```

[[Back to top]](#)

