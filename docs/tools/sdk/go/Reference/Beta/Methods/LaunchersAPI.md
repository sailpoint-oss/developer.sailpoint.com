---
id: beta-launchers
title: Launchers
pagination_label: Launchers
sidebar_label: Launchers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Launchers', 'BetaLaunchers'] 
slug: /tools/sdk/go/beta/methods/launchers
tags: ['SDK', 'Software Development Kit', 'Launchers', 'BetaLaunchers']
---

# LaunchersAPI
  Use this API to manage Launchers.

Launchers are objects that allow users to launch various tasks from ISC such as Privileged Workflows.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-launcher**](#create-launcher) | **Post** `/launchers` | Create launcher
[**delete-launcher**](#delete-launcher) | **Delete** `/launchers/{launcherID}` | Delete Launcher
[**get-launcher**](#get-launcher) | **Get** `/launchers/{launcherID}` | Get Launcher by ID
[**get-launchers**](#get-launchers) | **Get** `/launchers` | List all Launchers for tenant
[**put-launcher**](#put-launcher) | **Put** `/launchers/{launcherID}` | Replace Launcher
[**start-launcher**](#start-launcher) | **Post** `/beta/launchers/{launcherID}/launch` | Launch a Launcher


## create-launcher
Create launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-launcher)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateLauncherRequest struct via the builder pattern


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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    launcherrequest := []byte(`{
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

  
   var launcherRequest beta.LauncherRequest
   if err := json.Unmarshal(launcherrequest, &launcherRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.LaunchersAPI.CreateLauncher(context.Background()).LauncherRequest(launcherRequest).Execute()
	//resp, r, err := apiClient.Beta.LaunchersAPI.CreateLauncher(context.Background()).LauncherRequest(launcherRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.CreateLauncher``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateLauncher`: Launcher
	fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.CreateLauncher`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-launcher
Delete Launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-launcher)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be deleted | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLauncherRequest struct via the builder pattern


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
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be deleted # string | ID of the Launcher to be deleted

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.LaunchersAPI.DeleteLauncher(context.Background(), launcherID).Execute()
	//r, err := apiClient.Beta.LaunchersAPI.DeleteLauncher(context.Background(), launcherID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.DeleteLauncher``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-launcher
Get Launcher by ID
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-launcher)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be retrieved | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLauncherRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be retrieved # string | ID of the Launcher to be retrieved

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.LaunchersAPI.GetLauncher(context.Background(), launcherID).Execute()
	//resp, r, err := apiClient.Beta.LaunchersAPI.GetLauncher(context.Background(), launcherID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.GetLauncher``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLauncher`: Launcher
	fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.GetLauncher`: %v\n", resp)
}
```

[[Back to top]](#)

## get-launchers
List all Launchers for tenant
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-launchers)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLaunchersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* | 
 **next** | **string** | Pagination marker | 
 **limit** | **int32** | Number of Launchers to return | [default to 10]

### Return type

[**GetLaunchers200Response**](../models/get-launchers200-response)

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
    filters := `disabled eq "true"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
    next := `eyJuZXh0IjoxMjN9Cg==` // string | Pagination marker (optional) # string | Pagination marker (optional)
    limit := 42 // int32 | Number of Launchers to return (optional) (default to 10) # int32 | Number of Launchers to return (optional) (default to 10)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.LaunchersAPI.GetLaunchers(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.LaunchersAPI.GetLaunchers(context.Background()).Filters(filters).Next(next).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.GetLaunchers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLaunchers`: GetLaunchers200Response
	fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.GetLaunchers`: %v\n", resp)
}
```

[[Back to top]](#)

## put-launcher
Replace Launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-launcher)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be replaced | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutLauncherRequest struct via the builder pattern


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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be replaced # string | ID of the Launcher to be replaced
    launcherrequest := []byte(`{
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

  
   var launcherRequest beta.LauncherRequest
   if err := json.Unmarshal(launcherrequest, &launcherRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.LaunchersAPI.PutLauncher(context.Background(), launcherID).LauncherRequest(launcherRequest).Execute()
	//resp, r, err := apiClient.Beta.LaunchersAPI.PutLauncher(context.Background(), launcherID).LauncherRequest(launcherRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.PutLauncher``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutLauncher`: Launcher
	fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.PutLauncher`: %v\n", resp)
}
```

[[Back to top]](#)

## start-launcher
Launch a Launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/beta/start-launcher)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**launcherID** | **string** | ID of the Launcher to be launched | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartLauncherRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StartLauncher200Response**](../models/start-launcher200-response)

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
    launcherID := `e3012408-8b61-4564-ad41-c5ec131c325b` // string | ID of the Launcher to be launched # string | ID of the Launcher to be launched

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.LaunchersAPI.StartLauncher(context.Background(), launcherID).Execute()
	//resp, r, err := apiClient.Beta.LaunchersAPI.StartLauncher(context.Background(), launcherID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LaunchersAPI.StartLauncher``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StartLauncher`: StartLauncher200Response
	fmt.Fprintf(os.Stdout, "Response from `LaunchersAPI.StartLauncher`: %v\n", resp)
}
```

[[Back to top]](#)

