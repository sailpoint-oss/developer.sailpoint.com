# SODControls

# SODControlsAPI
  Use this API to create, list, retrieve, update, and delete compensating controls associated with separation-of-duties policies. Requires policy violation management license.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-control-v1**](#create-control-v1) | **Post** `/controls/v1` | Create Compensating Control
[**delete-control-v1**](#delete-control-v1) | **Delete** `/controls/v1/{id}` | Delete compensating control by ID
[**get-control-v1**](#get-control-v1) | **Get** `/controls/v1/{id}` | Get compensating control by ID
[**list-controls-v1**](#list-controls-v1) | **Get** `/controls/v1` | List Compensating Controls
[**put-control-v1**](#put-control-v1) | **Put** `/controls/v1/{id}` | Put Compensating Control


## create-control-v1
Create Compensating Control
Creates a compensating control associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/create-control-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateControlV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compensatingcontrolcreate** | [**Compensatingcontrolcreate**](../models/compensatingcontrolcreate) | Data needed to create a Compensating Control | 

### Return type

[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

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
    sod_controls "github.com/sailpoint-oss/golang-sdk/v3/sod_controls"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    compensatingcontrolcreateJson := []byte(`{
          "owner" : {
            "id" : "3e07886555ed43cfb83c85c58d2016e6",
            "type" : "IDENTITY"
          },
          "name" : "a name",
          "description" : "a description",
          "secondaryOwners" : [ {
            "id" : "943a7c57da334d07ba2454bf7fcf144f",
            "type" : "GOVERNANCE_GROUP"
          } ],
          "action" : "Workflow",
          "expiration" : "20d",
          "type" : "Mitigation",
          "justificationRequired" : true,
          "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
        }`) // Compensatingcontrolcreate | Data needed to create a Compensating Control

    var compensatingcontrolcreate sod_controls.Compensatingcontrolcreate
    if err := json.Unmarshal(compensatingcontrolcreateJson, &compensatingcontrolcreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODControlsAPI.CreateControlV1(context.Background()).Compensatingcontrolcreate(compensatingcontrolcreate).Execute()
	  //resp, r, err := apiClient.SODControlsAPI.CreateControlV1(context.Background()).Compensatingcontrolcreate(compensatingcontrolcreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODControlsAPI.CreateControlV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateControlV1`: Compensatingcontrolresponse
    fmt.Fprintf(os.Stdout, "Response from `SODControlsAPI.CreateControlV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-control-v1
Delete compensating control by ID
Deletes the specified compensating control from the data store.

[API Spec](https://developer.sailpoint.com/docs/api/delete-control-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | the ID (UUID) of the compensating control to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteControlV1Request struct via the builder pattern


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
    id := `3e078865-55ed-43cf-b83c-85c58d2016e6` // string | the ID (UUID) of the compensating control to delete. # string | the ID (UUID) of the compensating control to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SODControlsAPI.DeleteControlV1(context.Background(), id).Execute()
	  //r, err := apiClient.SODControlsAPI.DeleteControlV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODControlsAPI.DeleteControlV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-control-v1
Get compensating control by ID
Returns a single compensating control by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-control-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the compensating control to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetControlV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

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
    id := `3e078865-55ed-43cf-b83c-85c58d2016e6` // string | The ID of the compensating control to fetch # string | The ID of the compensating control to fetch

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODControlsAPI.GetControlV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SODControlsAPI.GetControlV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODControlsAPI.GetControlV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetControlV1`: Compensatingcontrolresponse
    fmt.Fprintf(os.Stdout, "Response from `SODControlsAPI.GetControlV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-controls-v1
List Compensating Controls
Returns a list of compensating controls associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/list-controls-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListControlsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* | 
 **sort** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. | 

### Return type

[**[]Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `type eq "Mitigation" and name co "payroll"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional)
    sort := `-name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODControlsAPI.ListControlsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SODControlsAPI.ListControlsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sort(sort).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODControlsAPI.ListControlsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListControlsV1`: []Compensatingcontrolresponse
    fmt.Fprintf(os.Stdout, "Response from `SODControlsAPI.ListControlsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-control-v1
Put Compensating Control
Updates the specified compensating control.

[API Spec](https://developer.sailpoint.com/docs/api/put-control-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the Compensating Control to be updated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutControlV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **compensatingcontrolupdate** | [**Compensatingcontrolupdate**](../models/compensatingcontrolupdate) | Data needed to put a Compensating Control | 

### Return type

[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

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
    sod_controls "github.com/sailpoint-oss/golang-sdk/v3/sod_controls"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `3e078865-55ed-43cf-b83c-85c58d2016e6` // string | The unique identifier of the Compensating Control to be updated. # string | The unique identifier of the Compensating Control to be updated.
    compensatingcontrolupdateJson := []byte(`{
          "owner" : {
            "id" : "3e07886555ed43cfb83c85c58d2016e6",
            "type" : "IDENTITY"
          },
          "name" : "a name",
          "description" : "a description",
          "secondaryOwners" : [ {
            "id" : "943a7c57da334d07ba2454bf7fcf144f",
            "type" : "GOVERNANCE_GROUP"
          } ],
          "action" : "Workflow",
          "expiration" : "20d",
          "type" : "Mitigation",
          "justificationRequired" : true,
          "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
        }`) // Compensatingcontrolupdate | Data needed to put a Compensating Control

    var compensatingcontrolupdate sod_controls.Compensatingcontrolupdate
    if err := json.Unmarshal(compensatingcontrolupdateJson, &compensatingcontrolupdate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODControlsAPI.PutControlV1(context.Background(), id).Compensatingcontrolupdate(compensatingcontrolupdate).Execute()
	  //resp, r, err := apiClient.SODControlsAPI.PutControlV1(context.Background(), id).Compensatingcontrolupdate(compensatingcontrolupdate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODControlsAPI.PutControlV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutControlV1`: Compensatingcontrolresponse
    fmt.Fprintf(os.Stdout, "Response from `SODControlsAPI.PutControlV1`: %v\n", resp)
}
```

[[Back to top]](#)

