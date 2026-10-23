# MachineAccountMappings

# MachineAccountMappingsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-mappings-v1**](#create-machine-account-mappings-v1) | **Post** `/sources/v1/{sourceId}/machine-account-mappings` | Create machine account mappings
[**delete-machine-account-mappings-v1**](#delete-machine-account-mappings-v1) | **Delete** `/sources/v1/{sourceId}/machine-account-mappings` | Delete source&#39;s machine account mappings
[**list-machine-account-mappings-v1**](#list-machine-account-mappings-v1) | **Get** `/sources/v1/{sourceId}/machine-account-mappings` | Machine account mapping for source
[**set-machine-account-mappings-v1**](#set-machine-account-mappings-v1) | **Put** `/sources/v1/{sourceId}/machine-account-mappings` | Update source&#39;s machine account mappings


## create-machine-account-mappings-v1
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
Create machine account mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-mappings-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **attributeMappings** | [**AttributeMappings**](../models/attribute-mappings) |  | 

### Return type

[**[]AttributeMappings**](../models/attribute-mappings)

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
    machine_account_mappings "github.com/sailpoint-oss/golang-sdk/v3/machine_account_mappings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    attributemappingsJson := []byte(`{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }`) // AttributeMappings | 

    var attributeMappings machine_account_mappings.AttributeMappings
    if err := json.Unmarshal(attributemappingsJson, &attributeMappings); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountMappingsAPI.CreateMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).AttributeMappings(attributeMappings).Execute()
	  //resp, r, err := apiClient.MachineAccountMappingsAPI.CreateMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).AttributeMappings(attributeMappings).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.CreateMachineAccountMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineAccountMappingsV1`: []AttributeMappings
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountMappingsAPI.CreateMachineAccountMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-account-mappings-v1
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
Delete source's machine account mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-mappings-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountMappingsV1Request struct via the builder pattern


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
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | source ID. # string | source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineAccountMappingsAPI.DeleteMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineAccountMappingsAPI.DeleteMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.DeleteMachineAccountMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## list-machine-account-mappings-v1
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
Machine account mapping for source
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-mappings-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]AttributeMappings**](../models/attribute-mappings)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountMappingsAPI.ListMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountMappingsAPI.ListMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.ListMachineAccountMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccountMappingsV1`: []AttributeMappings
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountMappingsAPI.ListMachineAccountMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-machine-account-mappings-v1
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
Update source's machine account mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-account-mappings-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetMachineAccountMappingsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **attributeMappings** | [**AttributeMappings**](../models/attribute-mappings) |  | 

### Return type

[**[]AttributeMappings**](../models/attribute-mappings)

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
    machine_account_mappings "github.com/sailpoint-oss/golang-sdk/v3/machine_account_mappings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    attributemappingsJson := []byte(`{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }`) // AttributeMappings | 

    var attributeMappings machine_account_mappings.AttributeMappings
    if err := json.Unmarshal(attributemappingsJson, &attributeMappings); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountMappingsAPI.SetMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).AttributeMappings(attributeMappings).Execute()
	  //resp, r, err := apiClient.MachineAccountMappingsAPI.SetMachineAccountMappingsV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).AttributeMappings(attributeMappings).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.SetMachineAccountMappingsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMachineAccountMappingsV1`: []AttributeMappings
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountMappingsAPI.SetMachineAccountMappingsV1`: %v\n", resp)
}
```

[[Back to top]](#)

