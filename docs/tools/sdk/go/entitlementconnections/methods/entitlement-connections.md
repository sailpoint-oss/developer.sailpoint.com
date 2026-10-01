# EntitlementConnections

# EntitlementConnectionsAPI
  Use this API to search and manage entitlement connections.
Entitlement connections represent the relationship between an identity account and an entitlement on a source, including its access type and JIT lifecycle state.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-entitlement-connections-for-current-identity-v1**](#list-entitlement-connections-for-current-identity-v1) | **Get** `/entitlement-connections/v1/current-identity` | List my entitlement connections
[**list-entitlement-connections-v1**](#list-entitlement-connections-v1) | **Get** `/entitlement-connections/v1` | List entitlement connections
[**patch-entitlement-connection-by-id-v1**](#patch-entitlement-connection-by-id-v1) | **Patch** `/entitlement-connections/v1/{connectionId}` | Update entitlement connection


## list-entitlement-connections-for-current-identity-v1
List my entitlement connections
Returns entitlement connections constrained to the authenticated identity.
This endpoint proxies to Search and supports standard collection query parameters.


[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-connections-for-current-identity-v-1)

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

[**[]EntitlementConnectionSearchHit**](../models/entitlement-connection-search-hit)

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
    // response from `ListEntitlementConnectionsForCurrentIdentityV1`: []EntitlementConnectionSearchHit
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.ListEntitlementConnectionsForCurrentIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlement-connections-v1
List entitlement connections
Returns entitlement connections for the tenant.

This endpoint proxies to Search and supports standard collection query parameters.
The `filters` and `sorters` values support the Entitlement Connections search fields documented by ECS.


[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-connections-v-1)

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

[**[]EntitlementConnectionSearchHit**](../models/entitlement-connection-search-hit)

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
    // response from `ListEntitlementConnectionsV1`: []EntitlementConnectionSearchHit
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.ListEntitlementConnectionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-entitlement-connection-by-id-v1
Update entitlement connection
Applies JSON Patch operations to an entitlement connection selected by `connectionId`.


[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-connection-by-id-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID (UUID with or without hyphens). | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchEntitlementConnectionByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**EntitlementConnection**](../models/entitlement-connection)

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
    entitlement_connections "github.com/sailpoint-oss/golang-sdk/v3/entitlement_connections"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    connectionId := `6c692d9972f8400ca4560a68f62c4c5f` // string | Connection ID (UUID with or without hyphens). # string | Connection ID (UUID with or without hyphens).
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | 

    var jsonPatchOperation []entitlement_connections.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1(context.Background(), connectionId).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1(context.Background(), connectionId).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchEntitlementConnectionByIdV1`: EntitlementConnection
    fmt.Fprintf(os.Stdout, "Response from `EntitlementConnectionsAPI.PatchEntitlementConnectionByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

