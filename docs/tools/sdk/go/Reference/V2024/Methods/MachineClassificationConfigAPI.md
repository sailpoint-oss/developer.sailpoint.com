---
id: v2024-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineClassificationConfig', 'V2024MachineClassificationConfig'] 
slug: /tools/sdk/go/v2024/methods/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V2024MachineClassificationConfig']
---

# MachineClassificationConfigAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config**](#delete-machine-classification-config) | **Delete** `/sources/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**get-machine-classification-config**](#get-machine-classification-config) | **Get** `/sources/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config**](#set-machine-classification-config) | **Put** `/sources/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config
Delete source's classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-classification-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineClassificationConfigRequest struct via the builder pattern


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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.MachineClassificationConfigAPI.DeleteMachineClassificationConfig(context.Background(), id).Execute()
	  //r, err := apiClient.V2024.MachineClassificationConfigAPI.DeleteMachineClassificationConfig(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.DeleteMachineClassificationConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-classification-config
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-machine-classification-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineClassificationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MachineClassificationConfig**](../models/machine-classification-config)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID # string | Source ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineClassificationConfigAPI.GetMachineClassificationConfig(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2024.MachineClassificationConfigAPI.GetMachineClassificationConfig(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.GetMachineClassificationConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineClassificationConfig`: MachineClassificationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineClassificationConfigAPI.GetMachineClassificationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## set-machine-classification-config
Update source's classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-machine-classification-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetMachineClassificationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **machineClassificationConfig** | [**MachineClassificationConfig**](../models/machine-classification-config) |  | 

### Return type

[**MachineClassificationConfig**](../models/machine-classification-config)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    machineclassificationconfig := []byte(`{
          "criteria" : {
            "children" : [ {
              "children" : [ {
                "children" : [ "children", "children" ],
                "caseSensitive" : false,
                "dataType" : "This is the first level of classification criteria",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              }, {
                "children" : [ "children", "children" ],
                "caseSensitive" : false,
                "dataType" : "This is the first level of classification criteria",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              } ],
              "caseSensitive" : false,
              "dataType" : "dataType",
              "attribute" : "employeeType",
              "operation" : "EQUALS",
              "value" : "SERVICE"
            }, {
              "children" : [ {
                "children" : [ "children", "children" ],
                "caseSensitive" : false,
                "dataType" : "This is the first level of classification criteria",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              }, {
                "children" : [ "children", "children" ],
                "caseSensitive" : false,
                "dataType" : "This is the first level of classification criteria",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              } ],
              "caseSensitive" : false,
              "dataType" : "dataType",
              "attribute" : "employeeType",
              "operation" : "EQUALS",
              "value" : "SERVICE"
            } ],
            "caseSensitive" : false,
            "dataType" : "dataType",
            "attribute" : "distinguishedName",
            "operation" : "EQUALS",
            "value" : "OU=Service Accounts"
          },
          "created" : "2017-07-11T18:45:37.098Z",
          "modified" : "2018-06-25T20:22:28.104Z",
          "classificationMethod" : "SOURCE",
          "enabled" : true
        }`) // MachineClassificationConfig | 

    var machineClassificationConfig v2024.MachineClassificationConfig
    if err := json.Unmarshal(machineclassificationconfig, &machineClassificationConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineClassificationConfigAPI.SetMachineClassificationConfig(context.Background(), id).MachineClassificationConfig(machineClassificationConfig).Execute()
	  //resp, r, err := apiClient.V2024.MachineClassificationConfigAPI.SetMachineClassificationConfig(context.Background(), id).MachineClassificationConfig(machineClassificationConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.SetMachineClassificationConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMachineClassificationConfig`: MachineClassificationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineClassificationConfigAPI.SetMachineClassificationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

