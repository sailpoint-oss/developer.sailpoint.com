---
id: v2025-dimensions
title: Dimensions
pagination_label: Dimensions
sidebar_label: Dimensions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensions', 'V2025Dimensions'] 
slug: /tools/sdk/go/v2025/methods/dimensions
tags: ['SDK', 'Software Development Kit', 'Dimensions', 'V2025Dimensions']
---

# DimensionsAPI
  Use this API to implement and customize dynamic role functionality. With this functionality in place, administrators can create dimensions and configure them for use throughout Identity Security Cloud. Identity Security Cloud can use established criteria to automatically assign the dimensions to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks. Entitlements represent the most granular level of access in Identity Security Cloud.
Access profiles represent the next level and often group entitlements. Dimension represent access selectively based on the evaluation of contextual information that is available or provided. Each Dimension include context attributes and access selection expressions which map criteria to access right assignments. Each dimension can contain up to 5 context attributes. Dynamic Access Roles represent the broadest level of access and often group access profiles ,entitlements and dimensions.Each Dynamic Access Role may contain one or more Dimensions. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-dimension**](#create-dimension) | **Post** `/roles/{roleId}/dimensions` | Create a Dimension
[**delete-bulk-dimensions**](#delete-bulk-dimensions) | **Post** `/roles/{roleId}/dimensions/bulk-delete` | Delete Dimension(s)
[**delete-dimension**](#delete-dimension) | **Delete** `/roles/{roleId}/dimensions/{dimensionId}` | Delete a Dimension
[**get-dimension**](#get-dimension) | **Get** `/roles/{roleId}/dimensions/{dimensionId}` | Get a Dimension under Role.
[**get-dimension-entitlements**](#get-dimension-entitlements) | **Get** `/roles/{roleId}/dimensions/{dimensionId}/entitlements` | List Dimension&#39;s Entitlements
[**list-dimension-access-profiles**](#list-dimension-access-profiles) | **Get** `/roles/{roleId}/dimensions/{dimensionId}/access-profiles` | List Dimension&#39;s Access Profiles
[**list-dimensions**](#list-dimensions) | **Get** `/roles/{roleId}/dimensions` | List Dimensions
[**patch-dimension**](#patch-dimension) | **Patch** `/roles/{roleId}/dimensions/{dimensionId}` | Patch a specified Dimension


## create-dimension
Create a Dimension
This API creates a dimension.
You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 
Additionally, a ROLE_SUBADMIN cannot create a dimension that includes an access profile or entitlement if that access profile or entitlement is linked to a source that the ROLE_SUBADMIN is not associated with. 
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-dimension)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateDimensionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dimension** | [**Dimension**](../models/dimension) |  | 

### Return type

[**Dimension**](../models/dimension)

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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    dimension := []byte(`{
          "owner" : {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "entitlements" : [ {
            "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
            "id" : "2c91809773dee32014e13e122092014e",
            "type" : "ENTITLEMENT"
          }, {
            "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
            "id" : "2c91809773dee32014e13e122092014e",
            "type" : "ENTITLEMENT"
          } ],
          "accessProfiles" : [ {
            "name" : "Access Profile 2567",
            "id" : "ff808081751e6e129f1518161919ecca",
            "type" : "ACCESS_PROFILE"
          }, {
            "name" : "Access Profile 2567",
            "id" : "ff808081751e6e129f1518161919ecca",
            "type" : "ACCESS_PROFILE"
          } ],
          "created" : "2021-03-01T22:32:58.104Z",
          "name" : "Dimension 2567",
          "modified" : "2021-03-02T20:22:28.104Z",
          "description" : "Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.",
          "id" : "2c918086749d78830174a1a40e121518",
          "membership" : {
            "criteria" : {
              "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
              "children" : [ {
                "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                "children" : [ {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                }, {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                } ],
                "operation" : "EQUALS",
                "key" : {
                  "property" : "attribute.email",
                  "type" : "IDENTITY"
                }
              }, {
                "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                "children" : [ {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                }, {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                } ],
                "operation" : "EQUALS",
                "key" : {
                  "property" : "attribute.email",
                  "type" : "IDENTITY"
                }
              } ],
              "operation" : "EQUALS",
              "key" : {
                "property" : "attribute.email",
                "type" : "IDENTITY"
              }
            },
            "type" : "STANDARD"
          },
          "parentId" : "2c918086749d78830174a1a40e121518"
        }`) // Dimension | 

  
   var dimension v2025.Dimension
   if err := json.Unmarshal(dimension, &dimension); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.CreateDimension(context.Background(), roleId).Dimension(dimension).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.CreateDimension(context.Background(), roleId).Dimension(dimension).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.CreateDimension``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDimension`: Dimension
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.CreateDimension`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-bulk-dimensions
Delete Dimension(s)
This endpoint initiates a bulk deletion of one or more dimensions.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all dimensions included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-bulk-dimensions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimensions. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBulkDimensionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dimensionBulkDeleteRequest** | [**DimensionBulkDeleteRequest**](../models/dimension-bulk-delete-request) |  | 

### Return type

[**TaskResultDto**](../models/task-result-dto)

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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimensions. # string | Parent Role Id of the dimensions.
    dimensionbulkdeleterequest := []byte(`{
          "dimensionIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
        }`) // DimensionBulkDeleteRequest | 

  
   var dimensionBulkDeleteRequest v2025.DimensionBulkDeleteRequest
   if err := json.Unmarshal(dimensionbulkdeleterequest, &dimensionBulkDeleteRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.DeleteBulkDimensions(context.Background(), roleId).DimensionBulkDeleteRequest(dimensionBulkDeleteRequest).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.DeleteBulkDimensions(context.Background(), roleId).DimensionBulkDeleteRequest(dimensionBulkDeleteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.DeleteBulkDimensions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteBulkDimensions`: TaskResultDto
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.DeleteBulkDimensions`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-dimension
Delete a Dimension
This API deletes a Dimension by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles/Entitlements included in the Dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-dimension)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 
**dimensionId** | **string** | Id of the Dimension | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDimensionRequest struct via the builder pattern


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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    dimensionId := `2c9180835d191a86015d28455b4a2329` // string | Id of the Dimension # string | Id of the Dimension

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.DimensionsAPI.DeleteDimension(context.Background(), roleId, dimensionId).Execute()
	//r, err := apiClient.V2025.DimensionsAPI.DeleteDimension(context.Background(), roleId, dimensionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.DeleteDimension``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-dimension
Get a Dimension under Role.
This API returns a Dimension by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles or Entitlements included in the Dimension or Parent Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-dimension)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 
**dimensionId** | **string** | Id of the Dimension | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDimensionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Dimension**](../models/dimension)

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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    dimensionId := `2c9180835d191a86015d28455b4a2329` // string | Id of the Dimension # string | Id of the Dimension

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.GetDimension(context.Background(), roleId, dimensionId).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.GetDimension(context.Background(), roleId, dimensionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.GetDimension``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDimension`: Dimension
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.GetDimension`: %v\n", resp)
}
```

[[Back to top]](#)

## get-dimension-entitlements
List Dimension's Entitlements
This API lists the Entitlements associated with a given dimension.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-dimension-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 
**dimensionId** | **string** | Id of the Dimension | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDimensionEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | 

### Return type

[**[]Entitlement**](../models/entitlement)

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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    dimensionId := `2c9180835d191a86015d28455b4a2329` // string | Id of the Dimension # string | Id of the Dimension
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.GetDimensionEntitlements(context.Background(), roleId, dimensionId).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.GetDimensionEntitlements(context.Background(), roleId, dimensionId).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.GetDimensionEntitlements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDimensionEntitlements`: []Entitlement
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.GetDimensionEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## list-dimension-access-profiles
List Dimension's Access Profiles
This API lists the Access Profiles associated with a given Dimension

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-dimension-access-profiles)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 
**dimensionId** | **string** | Id of the Dimension | 

### Other Parameters

Other parameters are passed through a pointer to a apiListDimensionAccessProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 

### Return type

[**[]AccessProfile**](../models/access-profile)

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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    dimensionId := `2c9180835d191a86015d28455b4a2329` // string | Id of the Dimension # string | Id of the Dimension
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `source.id eq "2c91808982f979270182f99e386d00fa"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.ListDimensionAccessProfiles(context.Background(), roleId, dimensionId).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.ListDimensionAccessProfiles(context.Background(), roleId, dimensionId).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.ListDimensionAccessProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDimensionAccessProfiles`: []AccessProfile
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.ListDimensionAccessProfiles`: %v\n", resp)
}
```

[[Back to top]](#)

## list-dimensions
List Dimensions
This API returns a list of dimensions under a specified role.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-dimensions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListDimensionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 

### Return type

[**[]Dimension**](../models/dimension)

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
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq '2c918086749d78830174a1a40e121518'` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.ListDimensions(context.Background(), roleId).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.ListDimensions(context.Background(), roleId).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.ListDimensions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDimensions`: []Dimension
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.ListDimensions`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-dimension
Patch a specified Dimension
This API updates an existing dimension using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **name** **description** **owner** **accessProfiles** **entitlements** **membership**
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles/entitlements included in the dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
The maximum supported length for the description field is 2000 characters.
When you use this API to modify a dimension's membership identities, you can only modify up to a limit of 500 membership identities at a time.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-dimension)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roleId** | **string** | Parent Role Id of the dimension. | 
**dimensionId** | **string** | Id of the Dimension | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchDimensionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**Dimension**](../models/dimension)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    roleId := `6603fba3004f43c687610a29195252ce` // string | Parent Role Id of the dimension. # string | Parent Role Id of the dimension.
    dimensionId := `2c9180835d191a86015d28455b4a2329` // string | Id of the Dimension # string | Id of the Dimension
    jsonpatchoperation := []byte(`[{op=replace, path=/description, value=Test Description}, {op=replace, path=/name, value=new name}]`) // []JsonPatchOperation | 

  
   var jsonPatchOperation v2025.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.DimensionsAPI.PatchDimension(context.Background(), roleId, dimensionId).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.DimensionsAPI.PatchDimension(context.Background(), roleId, dimensionId).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DimensionsAPI.PatchDimension``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchDimension`: Dimension
	fmt.Fprintf(os.Stdout, "Response from `DimensionsAPI.PatchDimension`: %v\n", resp)
}
```

[[Back to top]](#)

