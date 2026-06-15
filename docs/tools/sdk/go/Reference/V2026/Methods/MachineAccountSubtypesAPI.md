---
id: v2026-machine-account-subtypes
title: MachineAccountSubtypes
pagination_label: MachineAccountSubtypes
sidebar_label: MachineAccountSubtypes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccountSubtypes', 'V2026MachineAccountSubtypes'] 
slug: /tools/sdk/go/v2026/methods/machine-account-subtypes
tags: ['SDK', 'Software Development Kit', 'MachineAccountSubtypes', 'V2026MachineAccountSubtypes']
---

# MachineAccountSubtypesAPI
  Use this API to get, update, and delete machine account subtype for sources.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype**](#create-source-subtype) | **Post** `/source-subtypes` | Create subtype
[**delete-machine-account-subtype**](#delete-machine-account-subtype) | **Delete** `/source-subtypes/{subtypeId}` | Delete subtype by ID
[**get-machine-account-subtype-approval-config**](#get-machine-account-subtype-approval-config) | **Get** `/source-subtypes/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id**](#get-source-subtype-by-id) | **Get** `/source-subtypes/{subtypeId}` | Get subtype by ID
[**list-source-subtypes**](#list-source-subtypes) | **Get** `/source-subtypes` | Retrieve all subtypes
[**load-bulk-source-subtypes**](#load-bulk-source-subtypes) | **Post** `/source-subtypes/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype**](#patch-machine-account-subtype) | **Patch** `/source-subtypes/{subtypeId}` | Patch subtype by ID
[**update-machine-account-subtype-approval-config**](#update-machine-account-subtype-approval-config) | **Patch** `/source-subtypes/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype
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
Create subtype
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/create-source-subtype)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **createSourceSubtypeRequest** | [**CreateSourceSubtypeRequest**](../models/create-source-subtype-request) |  | 

### Return type

[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    createsourcesubtyperequest := []byte(`{sourceId=6d0458373bec4b4b80460992b76016da, technicalName=foo, displayName=Mr Foo, description=fighters, type=MACHINE}`) // CreateSourceSubtypeRequest | 

    var createSourceSubtypeRequest v2026.CreateSourceSubtypeRequest
    if err := json.Unmarshal(createsourcesubtyperequest, &createSourceSubtypeRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.CreateSourceSubtype(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateSourceSubtypeRequest(createSourceSubtypeRequest).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.CreateSourceSubtype(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateSourceSubtypeRequest(createSourceSubtypeRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtype``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtype`: SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.CreateSourceSubtype`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-account-subtype
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
Delete subtype by ID
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/delete-machine-account-subtype)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountSubtypeRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    subtypeId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.MachineAccountSubtypesAPI.DeleteMachineAccountSubtype(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.V2026.MachineAccountSubtypesAPI.DeleteMachineAccountSubtype(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.DeleteMachineAccountSubtype``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-account-subtype-approval-config
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
Machine Subtype Approval Config
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-machine-account-subtype-approval-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | machine subtype id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountSubtypeApprovalConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    subtypeId := `ef38f94347e94562b5bb8424a56498d8` // string | machine subtype id. # string | machine subtype id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfig(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfig(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountSubtypeApprovalConfig`: MachineAccountSubtypeConfigDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-subtype-by-id
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
Get subtype by ID
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-source-subtype-by-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSubtypeByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    subtypeId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.GetSourceSubtypeById(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.GetSourceSubtypeById(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetSourceSubtypeById``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSubtypeById`: SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.GetSourceSubtypeById`: %v\n", resp)
}
```

[[Back to top]](#)

## list-source-subtypes
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
Retrieve all subtypes
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/list-source-subtypes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourceSubtypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `displayName eq "sail"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
    sorters := `displayName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.ListSourceSubtypes(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.ListSourceSubtypes(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.ListSourceSubtypes``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSourceSubtypes`: []SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.ListSourceSubtypes`: %v\n", resp)
}
```

[[Back to top]](#)

## load-bulk-source-subtypes
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
Bulk Retrieve of Source Subtypes
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/load-bulk-source-subtypes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLoadBulkSourceSubtypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** |  | 

### Return type

[**[]SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | 

    var requestBody []v2026.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.LoadBulkSourceSubtypes(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.LoadBulkSourceSubtypes(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.LoadBulkSourceSubtypes``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LoadBulkSourceSubtypes`: []SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.LoadBulkSourceSubtypes`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-machine-account-subtype
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
Patch subtype by ID
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/patch-machine-account-subtype)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchMachineAccountSubtypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface{}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    subtypeId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{op=replace, path=/displayName, value=Test New DisplayName}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []v2026.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.PatchMachineAccountSubtype(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.PatchMachineAccountSubtype(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.PatchMachineAccountSubtype``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchMachineAccountSubtype`: SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.PatchMachineAccountSubtype`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-account-subtype-approval-config
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
Machine Subtype Approval Config
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/update-machine-account-subtype-approval-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | machine account subtype ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountSubtypeApprovalConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the object. | 

### Return type

[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    subtypeId := `00eebcf881994e419d72e757fd30dc0e` // string | machine account subtype ID. # string | machine account subtype ID.
    jsonpatchoperation := []byte(``) // []JsonPatchOperation | The JSONPatch payload used to update the object.

    var jsonPatchOperation []v2026.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfig(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V2026.MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfig(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccountSubtypeApprovalConfig`: MachineAccountSubtypeConfigDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfig`: %v\n", resp)
}
```

[[Back to top]](#)

