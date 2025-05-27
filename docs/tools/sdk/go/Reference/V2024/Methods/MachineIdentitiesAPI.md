---
id: v2024-machine-identities
title: MachineIdentities
pagination_label: MachineIdentities
sidebar_label: MachineIdentities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentities', 'V2024MachineIdentities'] 
slug: /tools/sdk/go/v2024/methods/machine-identities
tags: ['SDK', 'Software Development Kit', 'MachineIdentities', 'V2024MachineIdentities']
---

# MachineIdentitiesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity**](#create-machine-identity) | **Post** `/machine-identities` | Create machine identities
[**delete-machine-identity**](#delete-machine-identity) | **Delete** `/machine-identities/{id}` | Delete machine identity
[**get-machine-identity**](#get-machine-identity) | **Get** `/machine-identities/{id}` | Machine identity details
[**list-machine-identities**](#list-machine-identities) | **Get** `/machine-identities` | List machine identities
[**update-machine-identity**](#update-machine-identity) | **Patch** `/machine-identities/{id}` | Update a machine identity


## create-machine-identity
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
Create machine identities
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-machine-identity)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentity** | [**MachineIdentity**](../models/machine-identity) |  | 

### Return type

[**MachineIdentity**](../models/machine-identity)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentity := []byte(`{
          "created" : "2015-05-28T14:07:17Z",
          "businessApplication" : "ADService",
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "description" : "",
          "attributes" : "{\"Region\":\"EU\"}",
          "id" : "id12345",
          "manuallyEdited" : true
        }`) // MachineIdentity | 

    var machineIdentity v2024.MachineIdentity
    if err := json.Unmarshal(machineidentity, &machineIdentity); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineIdentitiesAPI.CreateMachineIdentity(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentity(machineIdentity).Execute()
	  //resp, r, err := apiClient.V2024.MachineIdentitiesAPI.CreateMachineIdentity(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentity(machineIdentity).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.CreateMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineIdentity`: MachineIdentity
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.CreateMachineIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-identity
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
Delete machine identity
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineIdentityRequest struct via the builder pattern


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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID # string | Machine Identity ID
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.MachineIdentitiesAPI.DeleteMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.V2024.MachineIdentitiesAPI.DeleteMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-identity
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
Machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-machine-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentity**](../models/machine-identity)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID # string | Machine Identity ID
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineIdentitiesAPI.GetMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.MachineIdentitiesAPI.GetMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentity`: MachineIdentity
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identities
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
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-machine-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **description**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]MachineIdentity**](../models/machine-identity)

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
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **description**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **description**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq* (optional)
    sorters := `businessApplication` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineIdentitiesAPI.ListMachineIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.MachineIdentitiesAPI.ListMachineIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentities`: []MachineIdentity
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-identity
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
Update a machine identity
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-machine-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface{}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**MachineIdentity**](../models/machine-identity)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{op=add, path=/attributes/securityRisk, value=medium}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []v2024.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineIdentitiesAPI.UpdateMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2024.MachineIdentitiesAPI.UpdateMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.UpdateMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineIdentity`: MachineIdentity
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.UpdateMachineIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

