---
id: v2024-machine-accounts
title: MachineAccounts
pagination_label: MachineAccounts
sidebar_label: MachineAccounts
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccounts', 'V2024MachineAccounts'] 
slug: /tools/sdk/go/v2024/methods/machine-accounts
tags: ['SDK', 'Software Development Kit', 'MachineAccounts', 'V2024MachineAccounts']
---

# MachineAccountsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-machine-account**](#get-machine-account) | **Get** `/machine-accounts/{id}` | Machine account details
[**list-machine-accounts**](#list-machine-accounts) | **Get** `/machine-accounts` | Machine accounts list
[**update-machine-account**](#update-machine-account) | **Patch** `/machine-accounts/{id}` | Update a machine account


## get-machine-account
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
Machine account details
Use this API to return the details for a single machine account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-machine-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineAccount**](../models/machine-account)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountsAPI.GetMachineAccount(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.MachineAccountsAPI.GetMachineAccount(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.GetMachineAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccount`: MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.GetMachineAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-accounts
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
Machine accounts list
This returns a list of machine accounts.  

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-machine-accounts)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **machineIdentity**: *eq, in, sw*  **description**: *eq, in, sw*  **ownerIdentity**: *eq, in, sw*  **ownerIdentityId**: *eq, in, sw*  **entitlements**: *eq*  **accessType**: *eq, in, sw*  **subType**: *eq, in, sw*  **environment**: *eq, in, sw*  **classificationMethod**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **manuallyEdited**: *eq*  **identity**: *eq, in, sw*  **source**: *eq, in*  **hasEntitlement**: *eq*  **locked**: *eq*  **connectorAttributes**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, machineIdentity, identity.id, nativeIdentity, uuid, manuallyCorrelated, connectorAttributes, entitlements, identity.name, identity.type, source.id, source.name, source.type** | 

### Return type

[**[]MachineAccount**](../models/machine-account)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **machineIdentity**: *eq, in, sw*  **description**: *eq, in, sw*  **ownerIdentity**: *eq, in, sw*  **ownerIdentityId**: *eq, in, sw*  **entitlements**: *eq*  **accessType**: *eq, in, sw*  **subType**: *eq, in, sw*  **environment**: *eq, in, sw*  **classificationMethod**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **manuallyEdited**: *eq*  **identity**: *eq, in, sw*  **source**: *eq, in*  **hasEntitlement**: *eq*  **locked**: *eq*  **connectorAttributes**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **machineIdentity**: *eq, in, sw*  **description**: *eq, in, sw*  **ownerIdentity**: *eq, in, sw*  **ownerIdentityId**: *eq, in, sw*  **entitlements**: *eq*  **accessType**: *eq, in, sw*  **subType**: *eq, in, sw*  **environment**: *eq, in, sw*  **classificationMethod**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **manuallyEdited**: *eq*  **identity**: *eq, in, sw*  **source**: *eq, in*  **hasEntitlement**: *eq*  **locked**: *eq*  **connectorAttributes**: *eq* (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, machineIdentity, identity.id, nativeIdentity, uuid, manuallyCorrelated, connectorAttributes, entitlements, identity.name, identity.type, source.id, source.name, source.type** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, machineIdentity, identity.id, nativeIdentity, uuid, manuallyCorrelated, connectorAttributes, entitlements, identity.name, identity.type, source.id, source.name, source.type** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountsAPI.ListMachineAccounts(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.MachineAccountsAPI.ListMachineAccounts(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.ListMachineAccounts``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccounts`: []MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.ListMachineAccounts`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-account
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
Update a machine account
Use this API to update machine accounts details. 


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-machine-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface{}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * ownerIdentity           * subType           * accessType           * environment           * attributes           * classificationMethod           * manuallyEdited           * nativeIdentity           * uuid           * source           * manuallyCorrelated           * enabled           * locked           * hasEntitlements           * connectorAttributes | 

### Return type

[**MachineAccount**](../models/machine-account)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Account ID. # string | Machine Account ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{op=add, path=/environment, value=test}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * ownerIdentity           * subType           * accessType           * environment           * attributes           * classificationMethod           * manuallyEdited           * nativeIdentity           * uuid           * source           * manuallyCorrelated           * enabled           * locked           * hasEntitlements           * connectorAttributes

    var requestBody []v2024.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountsAPI.UpdateMachineAccount(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2024.MachineAccountsAPI.UpdateMachineAccount(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountsAPI.UpdateMachineAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccount`: MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountsAPI.UpdateMachineAccount`: %v\n", resp)
}
```

[[Back to top]](#)

