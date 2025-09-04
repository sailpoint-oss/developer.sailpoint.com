---
id: v2025-machine-identities
title: MachineIdentities
pagination_label: MachineIdentities
sidebar_label: MachineIdentities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentities', 'V2025MachineIdentities'] 
slug: /tools/sdk/go/v2025/methods/machine-identities
tags: ['SDK', 'Software Development Kit', 'MachineIdentities', 'V2025MachineIdentities']
---

# MachineIdentitiesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity**](#create-machine-identity) | **Post** `/machine-identities` | Create machine identities
[**delete-machine-identity**](#delete-machine-identity) | **Delete** `/machine-identities/{id}` | Delete machine identity
[**get-machine-identity**](#get-machine-identity) | **Get** `/machine-identities/{id}` | Machine identity details
[**list-machine-identities**](#list-machine-identities) | **Get** `/machine-identities` | List machine identities
[**list-machine-identity-user-entitlements**](#list-machine-identity-user-entitlements) | **Get** `/machine-identity-user-entitlements` | List machine identity&#39;s user entitlements
[**start-machine-identity-aggregation**](#start-machine-identity-aggregation) | **Post** `/sources/{sourceId}/aggregate-agents` | Start Machine Identity (AI Agent) Aggregation
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-machine-identity)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentityRequest** | [**MachineIdentityRequest**](../models/machine-identity-request) |  | 

### Return type

[**MachineIdentityResponse**](../models/machine-identity-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentityrequest := []byte(`{
          "sourceId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "created" : "2015-05-28T14:07:17Z",
          "description" : "",
          "owners" : {
            "primaryIdentity" : "{}",
            "secondaryIdentities" : [ {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            }, {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            } ]
          },
          "uuid" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "nativeIdentity" : "abc:123:dddd",
          "subtype" : "Application",
          "businessApplication" : "ADService",
          "userEntitlements" : [ {
            "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
            "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
          }, {
            "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
            "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
          } ],
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "attributes" : "{\"Region\":\"EU\"}",
          "id" : "id12345"
        }`) // MachineIdentityRequest | 

    var machineIdentityRequest v2025.MachineIdentityRequest
    if err := json.Unmarshal(machineidentityrequest, &machineIdentityRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.MachineIdentitiesAPI.CreateMachineIdentity(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityRequest(machineIdentityRequest).Execute()
	  //resp, r, err := apiClient.V2025.MachineIdentitiesAPI.CreateMachineIdentity(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityRequest(machineIdentityRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.CreateMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineIdentity`: MachineIdentityResponse
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-machine-identity)

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
    r, err := apiClient.V2025.MachineIdentitiesAPI.DeleteMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.V2025.MachineIdentitiesAPI.DeleteMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-machine-identity)

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

[**MachineIdentityResponse**](../models/machine-identity-response)

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
    resp, r, err := apiClient.V2025.MachineIdentitiesAPI.GetMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.MachineIdentitiesAPI.GetMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentity`: MachineIdentityResponse
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-machine-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name, owners.primaryIdentity.name, source.name, created, modified** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]MachineIdentityResponse**](../models/machine-identity-response)

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
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
    sorters := `businessApplication` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name, owners.primaryIdentity.name, source.name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.MachineIdentitiesAPI.ListMachineIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.MachineIdentitiesAPI.ListMachineIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentities`: []MachineIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-user-entitlements
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
List machine identity's user entitlements
This API returns a list of user entitlements associated with machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-machine-identity-user-entitlements)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityUserEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]MachineIdentityUserEntitlementResponse**](../models/machine-identity-user-entitlement-response)

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
    filters := `machineIdentityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
    sorters := `machineIdentityName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.MachineIdentitiesAPI.ListMachineIdentityUserEntitlements(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.MachineIdentitiesAPI.ListMachineIdentityUserEntitlements(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityUserEntitlements``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityUserEntitlements`: []MachineIdentityUserEntitlementResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityUserEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## start-machine-identity-aggregation
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
Start Machine Identity (AI Agent) Aggregation
Use this API to aggregate machine identities (AI Agents).

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-machine-identity-aggregation)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartMachineIdentityAggregationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentityAggregationRequest** | [**MachineIdentityAggregationRequest**](../models/machine-identity-aggregation-request) |  | 

### Return type

[**MachineIdentityAggregationResponse**](../models/machine-identity-aggregation-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentityaggregationrequest := []byte(`{
          "datasetIds" : [ "source:datasetId12345", "source:datasetId12345" ]
        }`) // MachineIdentityAggregationRequest | 

    var machineIdentityAggregationRequest v2025.MachineIdentityAggregationRequest
    if err := json.Unmarshal(machineidentityaggregationrequest, &machineIdentityAggregationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.MachineIdentitiesAPI.StartMachineIdentityAggregation(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityAggregationRequest(machineIdentityAggregationRequest).Execute()
	  //resp, r, err := apiClient.V2025.MachineIdentitiesAPI.StartMachineIdentityAggregation(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityAggregationRequest(machineIdentityAggregationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.StartMachineIdentityAggregation``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartMachineIdentityAggregation`: MachineIdentityAggregationResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.StartMachineIdentityAggregation`: %v\n", resp)
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


[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-machine-identity)

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

[**MachineIdentityResponse**](../models/machine-identity-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{op=add, path=/attributes/securityRisk, value=medium}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []v2025.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.MachineIdentitiesAPI.UpdateMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2025.MachineIdentitiesAPI.UpdateMachineIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.UpdateMachineIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineIdentity`: MachineIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.UpdateMachineIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

