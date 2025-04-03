---
id: v2025-data-segmentation
title: DataSegmentation
pagination_label: DataSegmentation
sidebar_label: DataSegmentation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataSegmentation', 'V2025DataSegmentation'] 
slug: /tools/sdk/go/v2025/methods/data-segmentation
tags: ['SDK', 'Software Development Kit', 'DataSegmentation', 'V2025DataSegmentation']
---

# DataSegmentationAPI
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-data-segment**](#create-data-segment) | **Post** `/data-segments` | Create Segment
[**delete-data-segment**](#delete-data-segment) | **Delete** `/data-segments/{segmentId}` | Delete Segment by ID
[**get-data-segment**](#get-data-segment) | **Get** `/data-segments/{segmentId}` | Get Segment by ID
[**get-data-segment-identity-membership**](#get-data-segment-identity-membership) | **Get** `/data-segments/membership/{identityId}` | Get SegmentMembership by Identity ID
[**get-data-segmentation-enabled-for-user**](#get-data-segmentation-enabled-for-user) | **Get** `/data-segments/user-enabled/{identityId}` | Is Segmentation enabled by Identity
[**list-data-segments**](#list-data-segments) | **Get** `/data-segments` | Get Segments
[**patch-data-segment**](#patch-data-segment) | **Patch** `/data-segments/{segmentId}` | Update Segment
[**publish-data-segment**](#publish-data-segment) | **Post** `/data-segments/{segmentId}` | Publish segment by ID


## create-data-segment
Create Segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-data-segment)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDataSegmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataSegment** | [**DataSegment**](../models/data-segment) |  | 

### Return type

[**DataSegment**](../models/data-segment)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    dataSegment := fmt.Sprintf(``) # DataSegment | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.DataSegmentationAPI.CreateDataSegment(context.Background()).DataSegment(dataSegment).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.CreateDataSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDataSegment`: DataSegment
	fmt.Fprintf(os.Stdout, "Response from `DataSegmentationAPI.CreateDataSegment`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-data-segment
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
Delete Segment by ID
This API deletes the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-data-segment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDataSegmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **published** | **bool** | This determines which version of the segment to delete | [default to false]

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f943-47e9-4562-b5bb-8424a56397d8 # string | The segment ID to delete. # string | The segment ID to delete.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    published := false # bool | This determines which version of the segment to delete (optional) (default to false) # bool | This determines which version of the segment to delete (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.DataSegmentationAPI.DeleteDataSegment(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Published(published).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.DeleteDataSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-data-segment
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
Get Segment by ID
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-data-segment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDataSegmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**DataSegment**](../models/data-segment)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f943-47e9-4562-b5bb-8424a56397d8 # string | The segment ID to retrieve. # string | The segment ID to retrieve.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.DataSegmentationAPI.GetDataSegment(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.GetDataSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDataSegment`: DataSegment
	fmt.Fprintf(os.Stdout, "Response from `DataSegmentationAPI.GetDataSegment`: %v\n", resp)
}
```

[[Back to top]](#)

## get-data-segment-identity-membership
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
Get SegmentMembership by Identity ID
This API returns the segment membership specified by the given identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-data-segment-identity-membership)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | The identity ID to retrieve the segments they are in. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDataSegmentIdentityMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

**map[string]interface{}**

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityId := ef38f943-47e9-4562-b5bb-8424a56397d8 # string | The identity ID to retrieve the segments they are in. # string | The identity ID to retrieve the segments they are in.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.DataSegmentationAPI.GetDataSegmentIdentityMembership(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.GetDataSegmentIdentityMembership``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDataSegmentIdentityMembership`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `DataSegmentationAPI.GetDataSegmentIdentityMembership`: %v\n", resp)
}
```

[[Back to top]](#)

## get-data-segmentation-enabled-for-user
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
Is Segmentation enabled by Identity
This API returns whether or not segmentation is enabled for the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-data-segmentation-enabled-for-user)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | The identity ID to retrieve if segmentation is enabled for the identity. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDataSegmentationEnabledForUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

**bool**

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityId := ef38f943-47e9-4562-b5bb-8424a56397d8 # string | The identity ID to retrieve if segmentation is enabled for the identity. # string | The identity ID to retrieve if segmentation is enabled for the identity.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.DataSegmentationAPI.GetDataSegmentationEnabledForUser(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.GetDataSegmentationEnabledForUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDataSegmentationEnabledForUser`: bool
	fmt.Fprintf(os.Stdout, "Response from `DataSegmentationAPI.GetDataSegmentationEnabledForUser`: %v\n", resp)
}
```

[[Back to top]](#)

## list-data-segments
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
Get Segments
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-data-segments)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDataSegmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **enabled** | **bool** | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [default to true]
 **unique** | **bool** | This returns only one record if set to true and that would be the published record if exists. | [default to false]
 **published** | **bool** | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published | [default to true]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* | 

### Return type

[**[]DataSegment**](../models/data-segment)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    enabled := true # bool | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to true) # bool | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to true)
    unique := false # bool | This returns only one record if set to true and that would be the published record if exists. (optional) (default to false) # bool | This returns only one record if set to true and that would be the published record if exists. (optional) (default to false)
    published := true # bool | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to true) # bool | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to true)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := name eq "" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.DataSegmentationAPI.ListDataSegments(context.Background()).XSailPointExperimental(xSailPointExperimental).Enabled(enabled).Unique(unique).Published(published).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.ListDataSegments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDataSegments`: []DataSegment
	fmt.Fprintf(os.Stdout, "Response from `DataSegmentationAPI.ListDataSegments`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-data-segment
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
Update Segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-data-segment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The segment ID to modify. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchDataSegmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface{}** | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled  | 

### Return type

[**DataSegment**](../models/data-segment)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f943-47e9-4562-b5bb-8424a56397d8 # string | The segment ID to modify. # string | The segment ID to modify.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestBody := fmt.Sprintf(`[{op=replace, path=/memberFilter, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]`) # []map[string]interface{} | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.DataSegmentationAPI.PatchDataSegment(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.PatchDataSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchDataSegment`: DataSegment
	fmt.Fprintf(os.Stdout, "Response from `DataSegmentationAPI.PatchDataSegment`: %v\n", resp)
}
```

[[Back to top]](#)

## publish-data-segment
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
Publish segment by ID
This will publish the segment so that it starts applying the segmentation to the desired users if enabled

[API Spec](https://developer.sailpoint.com/docs/api/v2025/publish-data-segment)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPublishDataSegmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** | A list of segment ids that you wish to publish | 
 **publishAll** | **bool** | This flag decides whether you want to publish all unpublished or a list of specific segment ids | [default to true]

### Return type

 (empty response body)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestBody := fmt.Sprintf(``) # []string | A list of segment ids that you wish to publish
    publishAll := true # bool | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to true) # bool | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to true)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.DataSegmentationAPI.PublishDataSegment(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).PublishAll(publishAll).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataSegmentationAPI.PublishDataSegment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

