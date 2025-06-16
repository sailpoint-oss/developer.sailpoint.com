---
id: v2024-requestable-objects
title: RequestableObjects
pagination_label: RequestableObjects
sidebar_label: RequestableObjects
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestableObjects', 'V2024RequestableObjects'] 
slug: /tools/sdk/go/v2024/methods/requestable-objects
tags: ['SDK', 'Software Development Kit', 'RequestableObjects', 'V2024RequestableObjects']
---

# RequestableObjectsAPI
  Use this API to implement requestable object functionality. 
With this functionality in place, administrators can determine which access items can be requested with the [Access Request APIs](https://developer.sailpoint.com/docs/api/v2024/access-requests/), along with their statuses. 
This can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-requestable-objects**](#list-requestable-objects) | **Get** `/requestable-objects` | Requestable objects list


## list-requestable-objects
Requestable objects list
Get a list of acccess items that can be requested through the [Access Request endpoints](https://developer.sailpoint.com/docs/api/v2024/access-requests). Access items are marked with `AVAILABLE`, `PENDING` or `ASSIGNED` with respect to the identity provided using `identity-id` query parameter.
Any authenticated token can call this endpoint to see their requestable access items.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-requestable-objects)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListRequestableObjectsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityId** | **string** | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. | 
 **types** | **[]string** | Filters the results to the specified type/types, where each type is one of &#x60;ROLE&#x60; or &#x60;ACCESS_PROFILE&#x60;. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. | 
 **term** | **string** | Allows searching requestable access items with a partial match on the name or description. If &#x60;term&#x60; is provided, then the API will ignore the &#x60;filter&#x60; query parameter. | 
 **statuses** | [**[]RequestableObjectRequestStatus**](../models/requestable-object-request-status) | Filters the result to the specified status/statuses, where each status is one of &#x60;AVAILABLE&#x60;, &#x60;ASSIGNED&#x60;, or &#x60;PENDING&#x60;. Specifying this parameter without also specifying an &#x60;identity-id&#x60; parameter results in an error.  SailPoint may add additional statuses in the future without notice. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  | 

### Return type

[**[]RequestableObject**](../models/requestable-object)

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
    identityId := `e7eab60924f64aa284175b9fa3309599` // string | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. (optional) # string | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. (optional)
    types := []byte(`ACCESS_PROFILE,ROLE`) // []string | Filters the results to the specified type/types, where each type is one of `ROLE` or `ACCESS_PROFILE`. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. (optional)
    term := `Finance Role` // string | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter. (optional) # string | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter. (optional)
    statuses := []byte(`[ASSIGNED, PENDING]`) // []RequestableObjectRequestStatus | Filters the result to the specified status/statuses, where each status is one of `AVAILABLE`, `ASSIGNED`, or `PENDING`. Specifying this parameter without also specifying an `identity-id` parameter results in an error.  SailPoint may add additional statuses in the future without notice. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name sw "bob"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RequestableObjectsAPI.ListRequestableObjects(context.Background()).Execute()
	  //resp, r, err := apiClient.V2024.RequestableObjectsAPI.ListRequestableObjects(context.Background()).IdentityId(identityId).Types(types).Term(term).Statuses(statuses).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RequestableObjectsAPI.ListRequestableObjects``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListRequestableObjects`: []RequestableObject
    fmt.Fprintf(os.Stdout, "Response from `RequestableObjectsAPI.ListRequestableObjects`: %v\n", resp)
}
```

[[Back to top]](#)

