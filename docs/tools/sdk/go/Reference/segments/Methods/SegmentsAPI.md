---
id: v1-segments
title: Segments
pagination_label: Segments
sidebar_label: Segments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Segments', 'V1Segments'] 
slug: /tools/sdk/go/segments/methods/segments
tags: ['SDK', 'Software Development Kit', 'Segments', 'V1Segments']
---

# SegmentsAPI
  Use this API to implement and customize access request segment functionality. 
With this functionality in place, administrators can create and manage access request segments. 
Segments provide organizations with a way to make the access their users have even more granular - this can simply the access request process for the organization&#39;s users and improves security by reducing the risk of overprovisoning access. 

Segments represent sets of identities, all grouped by specified identity attributes, who are only able to see and access the access items associated with their segments.
For example, administrators could group all their organization&#39;s London office employees into one segment, &quot;London Office Employees,&quot; by their shared location. 
The administrators could then define the access items the London employees would need, and the identities in the &quot;London Office Employees&quot; would then only be able to see and access those items.

In Identity Security Cloud, administrators can use the &#39;Access&#39; drop-down menu and select &#39;Segments&#39; to reach the &#39;Access Requests Segments&#39; page. 
This page lists all the existing access request segments, along with their statuses, enabled or disabled. 
Administrators can use this page to create, edit, enable, disable, and delete segments. 
To create a segment, an administrator must provide a name, define the identities grouped in the segment, and define the items the identities in the segment can access.
These items can be access profiles, roles, or entitlements. 

When administrators use the API to create and manage segments, they use a JSON expression in the &#x60;visibilityCriteria&#x60; object to define the segment&#39;s identities and access items. 

Refer to [Managing Access Request Segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) for more information about segments in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-segment-v1**](#create-segment-v1) | **Post** `/segments/v1` | Create segment
[**delete-segment-v1**](#delete-segment-v1) | **Delete** `/segments/v1/{id}` | Delete segment by id
[**get-segment-v1**](#get-segment-v1) | **Get** `/segments/v1/{id}` | Get segment by id
[**list-segments-v1**](#list-segments-v1) | **Get** `/segments/v1` | List segments
[**patch-segment-v1**](#patch-segment-v1) | **Patch** `/segments/v1/{id}` | Update segment


## create-segment-v1
Create segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-segment-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSegmentV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment** | [**Segment**](../models/segment) |  | 

### Return type

[**Segment**](../models/segment)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/segments"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/segments"
)

func main() {
    segment := []byte(``) // Segment | 

    var segment v1.Segment
    if err := json.Unmarshal(segment, &segment); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SegmentsAPI.CreateSegmentV1(context.Background()).Segment(segment).Execute()
	  //resp, r, err := apiClient.SegmentsAPI.CreateSegmentV1(context.Background()).Segment(segment).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.CreateSegmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSegmentV1`: Segment
    fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.CreateSegmentV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-segment-v1
Delete segment by id
This API deletes the segment specified by the given ID.
>**Note:** that segment deletion may take some time to become effective.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-segment-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSegmentV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/segments"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The segment ID to delete. # string | The segment ID to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SegmentsAPI.DeleteSegmentV1(context.Background(), id).Execute()
	  //r, err := apiClient.SegmentsAPI.DeleteSegmentV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.DeleteSegmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-segment-v1
Get segment by id
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-segment-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSegmentV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Segment**](../models/segment)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/segments"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The segment ID to retrieve. # string | The segment ID to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SegmentsAPI.GetSegmentV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SegmentsAPI.GetSegmentV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.GetSegmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSegmentV1`: Segment
    fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.GetSegmentV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-segments-v1
List segments
This API returns a list of all segments. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-segments-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSegmentsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Segment**](../models/segment)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/segments"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SegmentsAPI.ListSegmentsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SegmentsAPI.ListSegmentsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.ListSegmentsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSegmentsV1`: []Segment
    fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.ListSegmentsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-segment-v1
Update segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
>**Note:** Changes to a segment may take some time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-segment-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to modify. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSegmentV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **[]map[string]interface{}** | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active  | 

### Return type

[**Segment**](../models/segment)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/segments"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/segments"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The segment ID to modify. # string | The segment ID to modify.
    requestbody := []byte(`[{"op":"replace","path":"/visibilityCriteria","value":{"expression":{"operator":"AND","children":[{"operator":"EQUALS","attribute":"location","value":{"type":"STRING","value":"Philadelphia"}},{"operator":"EQUALS","attribute":"department","value":{"type":"STRING","value":"HR"}}]}}}]`) // []map[string]interface{} | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 

    var requestBody []v1.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SegmentsAPI.PatchSegmentV1(context.Background(), id).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.SegmentsAPI.PatchSegmentV1(context.Background(), id).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.PatchSegmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSegmentV1`: Segment
    fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.PatchSegmentV1`: %v\n", resp)
}
```

[[Back to top]](#)

