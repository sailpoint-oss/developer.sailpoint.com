---
id: v1-entitlement-connections
title: EntitlementConnections
pagination_label: EntitlementConnections
sidebar_label: EntitlementConnections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementConnections', 'V1EntitlementConnections'] 
slug: /tools/sdk/go/entitlementconnections/methods/entitlement-connections
tags: ['SDK', 'Software Development Kit', 'EntitlementConnections', 'V1EntitlementConnections']
---

# EntitlementConnectionsAPI
  Use this API to search and manage entitlement connections.
Entitlement connections represent the relationship between an identity account and an entitlement on a source, including its access type and JIT lifecycle state.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-entitlement-connections-for-current-identity-v1**](#list-entitlement-connections-for-current-identity-v1) | **Get** `/entitlement-connections/v1/current-identity` | List my entitlement connections
[**list-entitlement-connections-v1**](#list-entitlement-connections-v1) | **Get** `/entitlement-connections/v1` | List entitlement connections
[**patch-entitlement-connection-by-id-v1**](#patch-entitlement-connection-by-id-v1) | **Patch** `/entitlement-connections/v1/{connectionId}` | Update entitlement connection
[**patch-entitlement-connection-by-query-v1**](#patch-entitlement-connection-by-query-v1) | **Patch** `/entitlement-connections/v1` | Update connection by query
[**update-entitlement-connections-bulk-v1**](#update-entitlement-connections-bulk-v1) | **Post** `/entitlement-connections/v1` | Update connections in bulk


## list-entitlement-connections-for-current-identity-v1
List my entitlement connections
Returns entitlement connections constrained to the authenticated identity.
This endpoint proxies to Search and supports standard collection query parameters.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-entitlement-connections-for-current-identity-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementConnectionsForCurrentIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **searchAfter** | **string** | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  | 

### Return type

[**[]Entitlementconnectionsearchhit**](../models/entitlementconnectionsearchhit)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    searchAfter := `Account Payable,2c91808375d8e80a0175e1f88a575221` // string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    filters := `state.value co "Available"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  (optional)
    sorters := `id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementConnectionsAPI.ListEntitlementConnectionsForCurrentIdentityV1(context.Background()).Execute()
	  //resp, r, err := apiClient.EntitlementConnectionsAPI.ListEntitlementConnectionsForCurrentIdentityV1(context.Background()).Offset(offset).Limit(limit).Count(count).SearchAfter(searchAfter).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementConnectionsAPI.ListEntitlementConnectionsForCurrentIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementConnectionsForCurrentIdentityV1`: []Entitlementconnectionsearchhit
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.ListEntitlementConnectionsForCurrentIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlement-connections-v1
List entitlement connections
Returns entitlement connections for the tenant.

This endpoint proxies to Search and supports standard collection query parameters.
The `filters` and `sorters` values support the Entitlement Connections search fields documented by ECS.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-entitlement-connections-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementConnectionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **searchAfter** | **string** | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with &#x60;-&#x60; for descending order.  | 

### Return type

[**[]Entitlementconnectionsearchhit**](../models/entitlementconnectionsearchhit)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    searchAfter := `Account Payable,2c91808375d8e80a0175e1f88a575221` // string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    filters := `type eq "JIT"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  (optional)
    sorters := `-type,id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with `-` for descending order.  (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with `-` for descending order.  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementConnectionsAPI.ListEntitlementConnectionsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.EntitlementConnectionsAPI.ListEntitlementConnectionsV1(context.Background()).Offset(offset).Limit(limit).Count(count).SearchAfter(searchAfter).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementConnectionsAPI.ListEntitlementConnectionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementConnectionsV1`: []Entitlementconnectionsearchhit
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.ListEntitlementConnectionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-entitlement-connection-by-id-v1
Update entitlement connection
Applies JSON Patch operations to an entitlement connection selected by `connectionId`.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-entitlement-connection-by-id-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID (UUID with or without hyphens). | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchEntitlementConnectionByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) |  | 

### Return type

[**Entitlementconnection**](../models/entitlementconnection)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
)

func main() {
    connectionId := `6c692d9972f8400ca4560a68f62c4c5f` // string | Connection ID (UUID with or without hyphens). # string | Connection ID (UUID with or without hyphens).
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1(context.Background(), connectionId).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1(context.Background(), connectionId).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchEntitlementConnectionByIdV1`: Entitlementconnection
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-entitlement-connection-by-query-v1
Update connection by query
Applies JSON Patch operations to a single entitlement connection selected by
`entitlementId`, `identityId`, and `accountId`.


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-entitlement-connection-by-query-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchEntitlementConnectionByQueryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementId** | **string** | Entitlement ID (UUID with or without hyphens). | 
 **identityId** | **string** | Identity ID (UUID with or without hyphens). | 
 **accountId** | **string** | Account ID (UUID with or without hyphens). | 
 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) |  | 

### Return type

[**Entitlementconnection**](../models/entitlementconnection)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
)

func main() {
    entitlementId := `dcfd09e551644ad5aa162ce977862031` // string | Entitlement ID (UUID with or without hyphens). # string | Entitlement ID (UUID with or without hyphens).
    identityId := `5470d8d4817a4207a8020bf533187da9` // string | Identity ID (UUID with or without hyphens). # string | Identity ID (UUID with or without hyphens).
    accountId := `323bfddfb3dd4197b8f10f7735307d27` // string | Account ID (UUID with or without hyphens). # string | Account ID (UUID with or without hyphens).
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementConnectionsAPI.PatchEntitlementConnectionByQueryV1(context.Background()).EntitlementId(entitlementId).IdentityId(identityId).AccountId(accountId).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.EntitlementConnectionsAPI.PatchEntitlementConnectionByQueryV1(context.Background()).EntitlementId(entitlementId).IdentityId(identityId).AccountId(accountId).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementConnectionsAPI.PatchEntitlementConnectionByQueryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchEntitlementConnectionByQueryV1`: Entitlementconnection
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.PatchEntitlementConnectionByQueryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlement-connections-bulk-v1
Update connections in bulk
Updates connection type for up to 100 connections in one request.
The API returns per-item results in a 207 Multi-Status response.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-entitlement-connections-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementConnectionsBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementconnectionbulkupdateitem** | [**[]Entitlementconnectionbulkupdateitem**](../models/entitlementconnectionbulkupdateitem) |  | 

### Return type

[**[]Entitlementconnectionbulkupdateresultitem**](../models/entitlementconnectionbulkupdateresultitem)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
)

func main() {
    entitlementconnectionbulkupdateitem := []byte(`[{"connectionId":"d532fa5cb15748e2873c6a01e5923ec4","type":"JIT"},{"connectionId":"57bdbfcab8a34afb91c0a9fb4dba52b8","type":"STANDING"},{"connectionId":"0f571cefc8a2411790e0ee09f77e25a3","type":"STANDING"},{"connectionId":"025542c7e42144258c6f2325b6feeba8","type":"JIT"},{"connectionId":"6bccbc42381f49028dac9bfe68dbad2e","type":"JIT"}]`) // []Entitlementconnectionbulkupdateitem | 

    var entitlementconnectionbulkupdateitem []v1.Entitlementconnectionbulkupdateitem
    if err := json.Unmarshal(entitlementconnectionbulkupdateitem, &entitlementconnectionbulkupdateitem); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementConnectionsAPI.UpdateEntitlementConnectionsBulkV1(context.Background()).Entitlementconnectionbulkupdateitem(entitlementconnectionbulkupdateitem).Execute()
	  //resp, r, err := apiClient.EntitlementConnectionsAPI.UpdateEntitlementConnectionsBulkV1(context.Background()).Entitlementconnectionbulkupdateitem(entitlementconnectionbulkupdateitem).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementConnectionsAPI.UpdateEntitlementConnectionsBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEntitlementConnectionsBulkV1`: []Entitlementconnectionbulkupdateresultitem
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.UpdateEntitlementConnectionsBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

