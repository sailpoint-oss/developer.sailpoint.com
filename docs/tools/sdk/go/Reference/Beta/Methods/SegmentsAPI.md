---
id: beta-segments
title: Segments
pagination_label: Segments
sidebar_label: Segments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Segments', 'BetaSegments'] 
slug: /tools/sdk/go/beta/methods/segments
tags: ['SDK', 'Software Development Kit', 'Segments', 'BetaSegments']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-segment**](#create-segment) | **Post** `/segments` | Create Segment
[**delete-segment**](#delete-segment) | **Delete** `/segments/{id}` | Delete Segment by ID
[**get-segment**](#get-segment) | **Get** `/segments/{id}` | Get Segment by ID
[**list-segments**](#list-segments) | **Get** `/segments` | List Segments
[**patch-segment**](#patch-segment) | **Patch** `/segments/{id}` | Update Segment


## create-segment
Create Segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-segment)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSegmentRequest struct via the builder pattern


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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    segment := []byte(`{
          "owner" : {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "visibilityCriteria" : {
            "expression" : {
              "children" : [ ],
              "attribute" : "location",
              "value" : {
                "type" : "STRING",
                "value" : "Austin"
              },
              "operator" : "EQUALS"
            }
          },
          "name" : "segment-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "description" : "This segment represents xyz",
          "active" : true,
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
        }`) // Segment | 

  
   var segment beta.Segment
   if err := json.Unmarshal(segment, &segment); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SegmentsAPI.CreateSegment(context.Background()).Segment(segment).Execute()
	//resp, r, err := apiClient.Beta.SegmentsAPI.CreateSegment(context.Background()).Segment(segment).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.CreateSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSegment`: Segment
	fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.CreateSegment`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-segment
Delete Segment by ID
This API deletes the segment specified by the given ID.
>**Note:** Segment deletion may take some time to go into effect. 
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-segment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSegmentRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The segment ID to delete. # string | The segment ID to delete.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SegmentsAPI.DeleteSegment(context.Background(), id).Execute()
	//r, err := apiClient.Beta.SegmentsAPI.DeleteSegment(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.DeleteSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-segment
Get Segment by ID
This API returns the segment specified by the given ID.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-segment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSegmentRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The segment ID to retrieve. # string | The segment ID to retrieve.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SegmentsAPI.GetSegment(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.SegmentsAPI.GetSegment(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.GetSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSegment`: Segment
	fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.GetSegment`: %v\n", resp)
}
```

[[Back to top]](#)

## list-segments
List Segments
This API returns a list of all segments.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-segments)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSegmentsRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SegmentsAPI.ListSegments(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.SegmentsAPI.ListSegments(context.Background()).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.ListSegments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSegments`: []Segment
	fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.ListSegments`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-segment
Update Segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
>**Note:** Changes to a segment may take some time to propagate to all identities.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-segment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to modify. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSegmentRequest struct via the builder pattern


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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The segment ID to modify. # string | The segment ID to modify.
    requestbody := []byte(`[{op=replace, path=/visibilityCriteria, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]`) // []map[string]interface{} | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 

  
   var requestBody beta.[]RequestBody
   if err := json.Unmarshal(requestbody, &requestBody); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SegmentsAPI.PatchSegment(context.Background(), id).RequestBody(requestBody).Execute()
	//resp, r, err := apiClient.Beta.SegmentsAPI.PatchSegment(context.Background(), id).RequestBody(requestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SegmentsAPI.PatchSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchSegment`: Segment
	fmt.Fprintf(os.Stdout, "Response from `SegmentsAPI.PatchSegment`: %v\n", resp)
}
```

[[Back to top]](#)

