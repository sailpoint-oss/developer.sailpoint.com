# ManagedClusterTypes

# ManagedClusterTypesAPI
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-type-v1**](#create-managed-cluster-type-v1) | **Post** `/managed-cluster-types/v1` | Create new managed cluster type
[**delete-managed-cluster-type-v1**](#delete-managed-cluster-type-v1) | **Delete** `/managed-cluster-types/v1/{id}` | Delete a managed cluster type
[**get-managed-cluster-type-v1**](#get-managed-cluster-type-v1) | **Get** `/managed-cluster-types/v1/{id}` | Get a managed cluster type
[**get-managed-cluster-types-v1**](#get-managed-cluster-types-v1) | **Get** `/managed-cluster-types/v1` | List managed cluster types
[**update-managed-cluster-type-v1**](#update-managed-cluster-type-v1) | **Patch** `/managed-cluster-types/v1/{id}` | Update a managed cluster type


## create-managed-cluster-type-v1
Create new managed cluster type
Create a new Managed Cluster Type.

The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api/create-managed-cluster-type-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateManagedClusterTypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedClusterType** | [**ManagedClusterType**](../models/managed-cluster-type) |  | 

### Return type

[**ManagedClusterType**](../models/managed-cluster-type)

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
    managed_cluster_types "github.com/sailpoint-oss/golang-sdk/v3/managed_cluster_types"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    managedclustertypeJson := []byte(`{
          "managedProcessIds" : [ "someId", "someId2" ],
          "pod" : "megapod-useast1",
          "org" : "denali-cjh",
          "id" : "aClusterTypeId",
          "type" : "idn"
        }`) // ManagedClusterType | 

    var managedClusterType managed_cluster_types.ManagedClusterType
    if err := json.Unmarshal(managedclustertypeJson, &managedClusterType); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClusterTypesAPI.CreateManagedClusterTypeV1(context.Background()).ManagedClusterType(managedClusterType).Execute()
	  //resp, r, err := apiClient.ManagedClusterTypesAPI.CreateManagedClusterTypeV1(context.Background()).ManagedClusterType(managedClusterType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.CreateManagedClusterTypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateManagedClusterTypeV1`: ManagedClusterType
    fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.CreateManagedClusterTypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-managed-cluster-type-v1
Delete a managed cluster type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/delete-managed-cluster-type-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Managed Cluster Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteManagedClusterTypeV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `aClusterTypeId` // string | The Managed Cluster Type ID # string | The Managed Cluster Type ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ManagedClusterTypesAPI.DeleteManagedClusterTypeV1(context.Background(), id).Execute()
	  //r, err := apiClient.ManagedClusterTypesAPI.DeleteManagedClusterTypeV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.DeleteManagedClusterTypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-managed-cluster-type-v1
Get a managed cluster type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-type-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Managed Cluster Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClusterTypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ManagedClusterType**](../models/managed-cluster-type)

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
    id := `aClusterTypeId` // string | The Managed Cluster Type ID # string | The Managed Cluster Type ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClusterTypesAPI.GetManagedClusterTypeV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ManagedClusterTypesAPI.GetManagedClusterTypeV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.GetManagedClusterTypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClusterTypeV1`: ManagedClusterType
    fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.GetManagedClusterTypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-cluster-types-v1
List managed cluster types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/get-managed-cluster-types-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClusterTypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type_** | **string** | Type descriptor | 
 **pod** | **string** | Pinned pod (or default) | 
 **org** | **string** | Pinned org (or default) | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]ManagedClusterType**](../models/managed-cluster-type)

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
    type_ := `IDN` // string | Type descriptor (optional) # string | Type descriptor (optional)
    pod := `megapod-useast1` // string | Pinned pod (or default) (optional) # string | Pinned pod (or default) (optional)
    org := `denali-xyz` // string | Pinned org (or default) (optional) # string | Pinned org (or default) (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClusterTypesAPI.GetManagedClusterTypesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ManagedClusterTypesAPI.GetManagedClusterTypesV1(context.Background()).Type_(type_).Pod(pod).Org(org).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.GetManagedClusterTypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClusterTypesV1`: []ManagedClusterType
    fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.GetManagedClusterTypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-cluster-type-v1
Update a managed cluster type
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/update-managed-cluster-type-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Managed Cluster Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClusterTypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | The JSONPatch payload used to update the schema. | 

### Return type

[**ManagedClusterType**](../models/managed-cluster-type)

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
    managed_cluster_types "github.com/sailpoint-oss/golang-sdk/v3/managed_cluster_types"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `aClusterTypeId` // string | The Managed Cluster Type ID # string | The Managed Cluster Type ID
    jsonpatchJson := []byte(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) // JsonPatch | The JSONPatch payload used to update the schema.

    var jsonPatch managed_cluster_types.JsonPatch
    if err := json.Unmarshal(jsonpatchJson, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClusterTypesAPI.UpdateManagedClusterTypeV1(context.Background(), id).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.ManagedClusterTypesAPI.UpdateManagedClusterTypeV1(context.Background(), id).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.UpdateManagedClusterTypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateManagedClusterTypeV1`: ManagedClusterType
    fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.UpdateManagedClusterTypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

