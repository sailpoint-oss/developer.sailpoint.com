---
id: v2025-tagged-objects
title: TaggedObjects
pagination_label: TaggedObjects
sidebar_label: TaggedObjects
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaggedObjects', 'V2025TaggedObjects'] 
slug: /tools/sdk/go/v2025/methods/tagged-objects
tags: ['SDK', 'Software Development Kit', 'TaggedObjects', 'V2025TaggedObjects']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-tagged-object**](#delete-tagged-object) | **Delete** `/tagged-objects/{type}/{id}` | Delete object tags
[**delete-tags-to-many-object**](#delete-tags-to-many-object) | **Post** `/tagged-objects/bulk-remove` | Remove tags from multiple objects
[**get-tagged-object**](#get-tagged-object) | **Get** `/tagged-objects/{type}/{id}` | Get tagged object
[**list-tagged-objects**](#list-tagged-objects) | **Get** `/tagged-objects` | List tagged objects
[**list-tagged-objects-by-type**](#list-tagged-objects-by-type) | **Get** `/tagged-objects/{type}` | List tagged objects by type
[**put-tagged-object**](#put-tagged-object) | **Put** `/tagged-objects/{type}/{id}` | Update tagged object
[**set-tag-to-object**](#set-tag-to-object) | **Post** `/tagged-objects` | Add tag to object
[**set-tags-to-many-objects**](#set-tags-to-many-objects) | **Post** `/tagged-objects/bulk-add` | Tag multiple objects


## delete-tagged-object
Delete object tags
Delete all tags from a tagged object.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-tagged-object)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of object to delete tags from. | 
**id** | **string** | The ID of the object to delete tags from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaggedObjectRequest struct via the builder pattern


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
    type_ := `ROLE` // string | The type of object to delete tags from. # string | The type of object to delete tags from.
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the object to delete tags from. # string | The ID of the object to delete tags from.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.TaggedObjectsAPI.DeleteTaggedObject(context.Background(), type_, id).Execute()
	  //r, err := apiClient.V2025.TaggedObjectsAPI.DeleteTaggedObject(context.Background(), type_, id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.DeleteTaggedObject``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-tags-to-many-object
Remove tags from multiple objects
This API removes tags from multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-tags-to-many-object)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTagsToManyObjectRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkRemoveTaggedObject** | [**BulkRemoveTaggedObject**](../models/bulk-remove-tagged-object) | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkremovetaggedobject := []byte(`{
          "objectRefs" : [ {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "tags" : [ "BU_FINANCE", "PCI" ]
        }`) // BulkRemoveTaggedObject | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

    var bulkRemoveTaggedObject v2025.BulkRemoveTaggedObject
    if err := json.Unmarshal(bulkremovetaggedobject, &bulkRemoveTaggedObject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.TaggedObjectsAPI.DeleteTagsToManyObject(context.Background()).BulkRemoveTaggedObject(bulkRemoveTaggedObject).Execute()
	  //r, err := apiClient.V2025.TaggedObjectsAPI.DeleteTagsToManyObject(context.Background()).BulkRemoveTaggedObject(bulkRemoveTaggedObject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.DeleteTagsToManyObject``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-tagged-object
Get tagged object
This gets a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tagged-object)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of tagged object to retrieve. | 
**id** | **string** | The ID of the object reference to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaggedObjectRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TaggedObject**](../models/tagged-object)

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
    type_ := `ROLE` // string | The type of tagged object to retrieve. # string | The type of tagged object to retrieve.
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the object reference to retrieve. # string | The ID of the object reference to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.TaggedObjectsAPI.GetTaggedObject(context.Background(), type_, id).Execute()
	  //resp, r, err := apiClient.V2025.TaggedObjectsAPI.GetTaggedObject(context.Background(), type_, id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.GetTaggedObject``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaggedObject`: TaggedObject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.GetTaggedObject`: %v\n", resp)
}
```

[[Back to top]](#)

## list-tagged-objects
List tagged objects
This API returns a list of all tagged objects.

Any authenticated token may be used to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-tagged-objects)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTaggedObjectsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* | 

### Return type

[**[]TaggedObject**](../models/tagged-object)

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
    filters := `tagName eq "BU_FINANCE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.TaggedObjectsAPI.ListTaggedObjects(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.TaggedObjectsAPI.ListTaggedObjects(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.ListTaggedObjects``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTaggedObjects`: []TaggedObject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.ListTaggedObjects`: %v\n", resp)
}
```

[[Back to top]](#)

## list-tagged-objects-by-type
List tagged objects by type
This API returns a list of all tagged objects by type.

Any authenticated token may be used to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-tagged-objects-by-type)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of tagged object to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListTaggedObjectsByTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* | 

### Return type

[**[]TaggedObject**](../models/tagged-object)

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
    type_ := `ROLE` // string | The type of tagged object to retrieve. # string | The type of tagged object to retrieve.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `objectRef.id eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.TaggedObjectsAPI.ListTaggedObjectsByType(context.Background(), type_).Execute()
	  //resp, r, err := apiClient.V2025.TaggedObjectsAPI.ListTaggedObjectsByType(context.Background(), type_).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.ListTaggedObjectsByType``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTaggedObjectsByType`: []TaggedObject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.ListTaggedObjectsByType`: %v\n", resp)
}
```

[[Back to top]](#)

## put-tagged-object
Update tagged object
This updates a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-tagged-object)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**type_** | **string** | The type of tagged object to update. | 
**id** | **string** | The ID of the object reference to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTaggedObjectRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **taggedObject** | [**TaggedObject**](../models/tagged-object) |  | 

### Return type

[**TaggedObject**](../models/tagged-object)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    type_ := `ROLE` // string | The type of tagged object to update. # string | The type of tagged object to update.
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the object reference to update. # string | The ID of the object reference to update.
    taggedobject := []byte(`{
          "objectRef" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "tags" : [ "BU_FINANCE", "PCI" ]
        }`) // TaggedObject | 

    var taggedObject v2025.TaggedObject
    if err := json.Unmarshal(taggedobject, &taggedObject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.TaggedObjectsAPI.PutTaggedObject(context.Background(), type_, id).TaggedObject(taggedObject).Execute()
	  //resp, r, err := apiClient.V2025.TaggedObjectsAPI.PutTaggedObject(context.Background(), type_, id).TaggedObject(taggedObject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.PutTaggedObject``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaggedObject`: TaggedObject
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.PutTaggedObject`: %v\n", resp)
}
```

[[Back to top]](#)

## set-tag-to-object
Add tag to object
This adds a tag to an object.

Any authenticated token may be used to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-tag-to-object)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTagToObjectRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taggedObject** | [**TaggedObject**](../models/tagged-object) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    taggedobject := []byte(`{
          "objectRef" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "tags" : [ "BU_FINANCE", "PCI" ]
        }`) // TaggedObject | 

    var taggedObject v2025.TaggedObject
    if err := json.Unmarshal(taggedobject, &taggedObject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.TaggedObjectsAPI.SetTagToObject(context.Background()).TaggedObject(taggedObject).Execute()
	  //r, err := apiClient.V2025.TaggedObjectsAPI.SetTagToObject(context.Background()).TaggedObject(taggedObject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.SetTagToObject``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## set-tags-to-many-objects
Tag multiple objects
This API adds tags to multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-tags-to-many-objects)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTagsToManyObjectsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkAddTaggedObject** | [**BulkAddTaggedObject**](../models/bulk-add-tagged-object) | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

### Return type

[**[]BulkTaggedObjectResponse**](../models/bulk-tagged-object-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkaddtaggedobject := []byte(`{
          "objectRefs" : [ {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "operation" : "MERGE",
          "tags" : [ "BU_FINANCE", "PCI" ]
        }`) // BulkAddTaggedObject | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

    var bulkAddTaggedObject v2025.BulkAddTaggedObject
    if err := json.Unmarshal(bulkaddtaggedobject, &bulkAddTaggedObject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.TaggedObjectsAPI.SetTagsToManyObjects(context.Background()).BulkAddTaggedObject(bulkAddTaggedObject).Execute()
	  //resp, r, err := apiClient.V2025.TaggedObjectsAPI.SetTagsToManyObjects(context.Background()).BulkAddTaggedObject(bulkAddTaggedObject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TaggedObjectsAPI.SetTagsToManyObjects``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetTagsToManyObjects`: []BulkTaggedObjectResponse
    fmt.Fprintf(os.Stdout, "Response from `TaggedObjectsAPI.SetTagsToManyObjects`: %v\n", resp)
}
```

[[Back to top]](#)

