# MachineClassificationConfig

# MachineClassificationConfigAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **Delete** `/sources/v1/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **Get** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **Put** `/sources/v1/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete source's classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-classification-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineClassificationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineClassificationConfigAPI.DeleteMachineClassificationConfigV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineClassificationConfigAPI.DeleteMachineClassificationConfigV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.DeleteMachineClassificationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-classification-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-classification-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineClassificationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID # string | Source ID
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineClassificationConfigAPI.GetMachineClassificationConfigV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineClassificationConfigAPI.GetMachineClassificationConfigV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.GetMachineClassificationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineClassificationConfigV1`: MachineClassificationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineClassificationConfigAPI.GetMachineClassificationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-machine-classification-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update source's classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-classification-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetMachineClassificationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    machine_classification_config "github.com/sailpoint-oss/golang-sdk/v3/machine_classification_config"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineclassificationconfigJson := []byte(`{
          "criteria" : {
            "children" : [ {
              "children" : [ {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              }, {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
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
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
                "attribute" : "sAMAccountName",
                "operation" : "EQUALS",
                "value" : "SVC"
              }, {
                "children" : [ "{}", "{}" ],
                "caseSensitive" : false,
                "dataType" : "dataType",
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

    var machineClassificationConfig machine_classification_config.MachineClassificationConfig
    if err := json.Unmarshal(machineclassificationconfigJson, &machineClassificationConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineClassificationConfigAPI.SetMachineClassificationConfigV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).MachineClassificationConfig(machineClassificationConfig).Execute()
	  //resp, r, err := apiClient.MachineClassificationConfigAPI.SetMachineClassificationConfigV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).MachineClassificationConfig(machineClassificationConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineClassificationConfigAPI.SetMachineClassificationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMachineClassificationConfigV1`: MachineClassificationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineClassificationConfigAPI.SetMachineClassificationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

