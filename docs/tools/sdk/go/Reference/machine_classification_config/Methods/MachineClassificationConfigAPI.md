---
id: v1-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineClassificationConfig', 'V1MachineClassificationConfig'] 
slug: /tools/sdk/go/machineclassificationconfig/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V1MachineClassificationConfig']
---

# MachineClassificationConfigAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **Delete** `/sources/v1/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **Get** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **Put** `/sources/v1/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config-v1
Delete source's classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-classification-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineClassificationConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_classification_config"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineClassificationConfigAPI.DeleteMachineClassificationConfigV1(context.Background(), sourceId).Execute()
	  //r, err := apiClient.MachineClassificationConfigAPI.DeleteMachineClassificationConfigV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.DeleteMachineClassificationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-classification-config-v1
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-classification-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineClassificationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Machineclassificationconfig**](../models/machineclassificationconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_classification_config"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID # string | Source ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineClassificationConfigAPI.GetMachineClassificationConfigV1(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.MachineClassificationConfigAPI.GetMachineClassificationConfigV1(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.GetMachineClassificationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineClassificationConfigV1`: Machineclassificationconfig
    fmt.Fprintf(os.Stdout, "Response from `MachineClassificationConfigAPI.GetMachineClassificationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-machine-classification-config-v1
Update source's classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-machine-classification-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetMachineClassificationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **machineclassificationconfig** | [**Machineclassificationconfig**](../models/machineclassificationconfig) |  | 

### Return type

[**Machineclassificationconfig**](../models/machineclassificationconfig)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/machine_classification_config"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/machine_classification_config"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    machineclassificationconfig := []byte(``) // Machineclassificationconfig | 

    var machineclassificationconfig v1.Machineclassificationconfig
    if err := json.Unmarshal(machineclassificationconfig, &machineclassificationconfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineClassificationConfigAPI.SetMachineClassificationConfigV1(context.Background(), sourceId).Machineclassificationconfig(machineclassificationconfig).Execute()
	  //resp, r, err := apiClient.MachineClassificationConfigAPI.SetMachineClassificationConfigV1(context.Background(), sourceId).Machineclassificationconfig(machineclassificationconfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.SetMachineClassificationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMachineClassificationConfigV1`: Machineclassificationconfig
    fmt.Fprintf(os.Stdout, "Response from `MachineClassificationConfigAPI.SetMachineClassificationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

