---
id: v1-tagged-objects
title: TaggedObjects
pagination_label: TaggedObjects
sidebar_label: TaggedObjects
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaggedObjects', 'V1TaggedObjects'] 
slug: /tools/sdk/go/taggedobjects/methods/tagged-objects
tags: ['SDK', 'Software Development Kit', 'TaggedObjects', 'V1TaggedObjects']
---

# TaggedObjectsAPI
  Use this API to implement object tagging functionality. 
With object tagging functionality in place, any user in an organization can use tags as a way to group objects together and find them more quickly when the user searches Identity Security Cloud. 

In Identity Security Cloud, users can search their tenants for information and add tags objects they find.
Tagging an object provides users with a way of grouping objects together and makes it easier to find these objects in the future. 

For example, if a user is searching for an entitlement that grants a risky level of access to Active Directory, it&#39;s possible that the user may have to search through hundreds of entitlements to find the correct one. 
Once the user finds that entitlement, the user can add a tag to the entitlement, &quot;AD_RISKY&quot; to make it easier to find the entitlement again.
The user can add the same tag to multiple objects the user wants to group together for an easy future search, and the user can also do so in bulk.
When the user wants to find that tagged entitlement again, the user can search for &quot;tags:AD_RISKY&quot; to find all objects with that tag. 

With the API, you can tag even more different object types than you can in Identity Security Cloud (access profiles, entitlements, identities, and roles). 
You can use the API to tag all these objects:

- Access profiles 

- Applications 

- Certification campaigns

- Entitlements

- Identities 

- Roles 

- SOD (separation of duties) policies

- Sources 

You can also use the API to directly find, create, and manage tagged objects without using search queries. 

There are limits to tags: 

- You can have up to 500 different tags in your tenant.

- You can apply up to 30 tags to one object. 

- You can have up to 10,000 tag associations, pairings of 1 tag to 1 object, in your tenant. 

Because of these limits, it is recommended that you work with your governance experts and security teams to establish a list of tags that are most expressive of governance objects and access managed by Identity Security Cloud. 

These are the types of information often expressed in tags: 

- Affected departments

- Compliance and regulatory categories 

- Remediation urgency levels 

- Risk levels 

Refer to [Tagging Items in Search](https://documentation.sailpoint.com/saas/help/search/index.html?h&#x3D;tags#tagging-items-in-search) for more information about tagging objects in Identity Security Cloud. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-tagged-object-v1**](#delete-tagged-object-v1) | **Delete** `/tagged-objects/v1/{type}/{id}` | Delete object tags
[**delete-tags-to-many-object-v1**](#delete-tags-to-many-object-v1) | **Post** `/tagged-objects/v1/bulk-remove` | Remove tags from multiple objects
[**get-tagged-object-v1**](#get-tagged-object-v1) | **Get** `/tagged-objects/v1/{type}/{id}` | Get tagged object
[**list-tagged-objects-by-type-v1**](#list-tagged-objects-by-type-v1) | **Get** `/tagged-objects/v1/{type}` | List tagged objects by type
[**list-tagged-objects-v1**](#list-tagged-objects-v1) | **Get** `/tagged-objects/v1` | List tagged objects
[**put-tagged-object-v1**](#put-tagged-object-v1) | **Put** `/tagged-objects/v1/{type}/{id}` | Update tagged object
[**set-tag-to-object-v1**](#set-tag-to-object-v1) | **Post** `/tagged-objects/v1` | Add tag to object
[**set-tags-to-many-objects-v1**](#set-tags-to-many-objects-v1) | **Post** `/tagged-objects/v1/bulk-add` | Tag multiple objects


## delete-tagged-object-v1
Delete object tags
Delete all tags from a tagged object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-tagged-object-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of object to delete tags from. | 
**id** | **string** | The ID of the object to delete tags from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaggedObjectV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    type_ := `ROLE` // string | The type of object to delete tags from. # string | The type of object to delete tags from.
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the object to delete tags from. # string | The ID of the object to delete tags from.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TaggedObjectsAPI.DeleteTaggedObjectV1(context.Background(), type_, id).Execute()
	  //r, err := apiClient.TaggedObjectsAPI.DeleteTaggedObjectV1(context.Background(), type_, id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.DeleteTaggedObjectV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-tags-to-many-object-v1
Remove tags from multiple objects
This API removes tags from multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-tags-to-many-object-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTagsToManyObjectV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkremovetaggedobject** | [**Bulkremovetaggedobject**](../models/bulkremovetaggedobject) | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

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
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    bulkremovetaggedobject := []byte(``) // Bulkremovetaggedobject | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

    var bulkremovetaggedobject v1.Bulkremovetaggedobject
    if err := json.Unmarshal(bulkremovetaggedobject, &bulkremovetaggedobject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TaggedObjectsAPI.DeleteTagsToManyObjectV1(context.Background()).Bulkremovetaggedobject(bulkremovetaggedobject).Execute()
	  //r, err := apiClient.TaggedObjectsAPI.DeleteTagsToManyObjectV1(context.Background()).Bulkremovetaggedobject(bulkremovetaggedobject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.DeleteTagsToManyObjectV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-tagged-object-v1
Get tagged object
This gets a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tagged-object-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of tagged object to retrieve. | 
**id** | **string** | The ID of the object reference to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaggedObjectV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Taggedobject**](../models/taggedobject)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    type_ := `ROLE` // string | The type of tagged object to retrieve. # string | The type of tagged object to retrieve.
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the object reference to retrieve. # string | The ID of the object reference to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TaggedObjectsAPI.GetTaggedObjectV1(context.Background(), type_, id).Execute()
	  //resp, r, err := apiClient.TaggedObjectsAPI.GetTaggedObjectV1(context.Background(), type_, id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.GetTaggedObjectV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaggedObjectV1`: Taggedobject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.GetTaggedObjectV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-tagged-objects-by-type-v1
List tagged objects by type
This API returns a list of all tagged objects by type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-tagged-objects-by-type-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of tagged object to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListTaggedObjectsByTypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* | 

### Return type

[**[]Taggedobject**](../models/taggedobject)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    type_ := `ROLE` // string | The type of tagged object to retrieve. # string | The type of tagged object to retrieve.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `objectRef.id eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TaggedObjectsAPI.ListTaggedObjectsByTypeV1(context.Background(), type_).Execute()
	  //resp, r, err := apiClient.TaggedObjectsAPI.ListTaggedObjectsByTypeV1(context.Background(), type_).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.ListTaggedObjectsByTypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTaggedObjectsByTypeV1`: []Taggedobject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.ListTaggedObjectsByTypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-tagged-objects-v1
List tagged objects
This API returns a list of all tagged objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-tagged-objects-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTaggedObjectsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* | 

### Return type

[**[]Taggedobject**](../models/taggedobject)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `tagName eq "BU_FINANCE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TaggedObjectsAPI.ListTaggedObjectsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TaggedObjectsAPI.ListTaggedObjectsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.ListTaggedObjectsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTaggedObjectsV1`: []Taggedobject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.ListTaggedObjectsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-tagged-object-v1
Update tagged object
This updates a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-tagged-object-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of tagged object to update. | 
**id** | **string** | The ID of the object reference to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTaggedObjectV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **taggedobject** | [**Taggedobject**](../models/taggedobject) |  | 

### Return type

[**Taggedobject**](../models/taggedobject)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    type_ := `ROLE` // string | The type of tagged object to update. # string | The type of tagged object to update.
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the object reference to update. # string | The ID of the object reference to update.
    taggedobject := []byte(``) // Taggedobject | 

    var taggedobject v1.Taggedobject
    if err := json.Unmarshal(taggedobject, &taggedobject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TaggedObjectsAPI.PutTaggedObjectV1(context.Background(), type_, id).Taggedobject(taggedobject).Execute()
	  //resp, r, err := apiClient.TaggedObjectsAPI.PutTaggedObjectV1(context.Background(), type_, id).Taggedobject(taggedobject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.PutTaggedObjectV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaggedObjectV1`: Taggedobject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.PutTaggedObjectV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-tag-to-object-v1
Add tag to object
This adds a tag to an object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-tag-to-object-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTagToObjectV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taggedobject** | [**Taggedobject**](../models/taggedobject) |  | 

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
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    taggedobject := []byte(``) // Taggedobject | 

    var taggedobject v1.Taggedobject
    if err := json.Unmarshal(taggedobject, &taggedobject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TaggedObjectsAPI.SetTagToObjectV1(context.Background()).Taggedobject(taggedobject).Execute()
	  //r, err := apiClient.TaggedObjectsAPI.SetTagToObjectV1(context.Background()).Taggedobject(taggedobject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.SetTagToObjectV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## set-tags-to-many-objects-v1
Tag multiple objects
This API adds tags to multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-tags-to-many-objects-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTagsToManyObjectsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkaddtaggedobject** | [**Bulkaddtaggedobject**](../models/bulkaddtaggedobject) | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

### Return type

[**[]Bulktaggedobjectresponse**](../models/bulktaggedobjectresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/tagged_objects"
)

func main() {
    bulkaddtaggedobject := []byte(``) // Bulkaddtaggedobject | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

    var bulkaddtaggedobject v1.Bulkaddtaggedobject
    if err := json.Unmarshal(bulkaddtaggedobject, &bulkaddtaggedobject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TaggedObjectsAPI.SetTagsToManyObjectsV1(context.Background()).Bulkaddtaggedobject(bulkaddtaggedobject).Execute()
	  //resp, r, err := apiClient.TaggedObjectsAPI.SetTagsToManyObjectsV1(context.Background()).Bulkaddtaggedobject(bulkaddtaggedobject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.SetTagsToManyObjectsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetTagsToManyObjectsV1`: []Bulktaggedobjectresponse
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.SetTagsToManyObjectsV1`: %v\n", resp)
}
```

[[Back to top]](#)

