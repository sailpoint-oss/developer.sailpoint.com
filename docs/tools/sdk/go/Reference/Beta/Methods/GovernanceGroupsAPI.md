---
id: beta-governance-groups
title: GovernanceGroups
pagination_label: GovernanceGroups
sidebar_label: GovernanceGroups
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GovernanceGroups', 'BetaGovernanceGroups'] 
slug: /tools/sdk/go/beta/methods/governance-groups
tags: ['SDK', 'Software Development Kit', 'GovernanceGroups', 'BetaGovernanceGroups']
---

# GovernanceGroupsAPI
  Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud.

A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user.

Refer to [Creating and Managing Governance Groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-workgroup**](#create-workgroup) | **Post** `/workgroups` | Create a new governance group.
[**delete-workgroup**](#delete-workgroup) | **Delete** `/workgroups/{id}` | Delete a governance group
[**delete-workgroup-members**](#delete-workgroup-members) | **Post** `/workgroups/{workgroupId}/members/bulk-delete` | Remove members from governance group
[**delete-workgroups-in-bulk**](#delete-workgroups-in-bulk) | **Post** `/workgroups/bulk-delete` | Delete governance group(s)
[**get-workgroup**](#get-workgroup) | **Get** `/workgroups/{id}` | Get governance group by id
[**list-connections**](#list-connections) | **Get** `/workgroups/{workgroupId}/connections` | List connections for governance group
[**list-workgroup-members**](#list-workgroup-members) | **Get** `/workgroups/{workgroupId}/members` | List governance group members
[**list-workgroups**](#list-workgroups) | **Get** `/workgroups` | List governance groups
[**patch-workgroup**](#patch-workgroup) | **Patch** `/workgroups/{id}` | Patch a governance group
[**update-workgroup-members**](#update-workgroup-members) | **Post** `/workgroups/{workgroupId}/members/bulk-add` | Add members to governance group


## create-workgroup
Create a new governance group.
This API creates a new Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-workgroup)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkgroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupDto** | [**WorkgroupDto**](../models/workgroup-dto) |  | 

### Return type

[**WorkgroupDto**](../models/workgroup-dto)

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
    workgroupdto := []byte(`{
          "owner" : {
            "emailAddress" : "support@sailpoint.com",
            "displayName" : "Support",
            "name" : "Support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "connectionCount" : 1641498673000,
          "created" : "2022-01-06T19:51:13Z",
          "memberCount" : 1641498673000,
          "name" : "DB Access Governance Group",
          "description" : "Description of the Governance Group",
          "modified" : "2022-01-06T19:51:13Z",
          "id" : "2c91808568c529c60168cca6f90c1313"
        }`) // WorkgroupDto | 

    var workgroupDto beta.WorkgroupDto
    if err := json.Unmarshal(workgroupdto, &workgroupDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.CreateWorkgroup(context.Background()).WorkgroupDto(workgroupDto).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.CreateWorkgroup(context.Background()).WorkgroupDto(workgroupDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.CreateWorkgroup``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateWorkgroup`: WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.CreateWorkgroup`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-workgroup
Delete a governance group
This API deletes a Governance Group by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-workgroup)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Governance Group | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkgroupRequest struct via the builder pattern


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
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Governance Group # string | ID of the Governance Group

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroup(context.Background(), id).Execute()
	  //r, err := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroup(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.DeleteWorkgroup``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-workgroup-members
Remove members from governance group
This API removes one or more  members from a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-workgroup-members)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkgroupMembersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **bulkWorkgroupMembersRequestInner** | [**[]BulkWorkgroupMembersRequestInner**](../models/bulk-workgroup-members-request-inner) | List of identities to be removed from  a Governance Group members list. | 

### Return type

[**[]WorkgroupMemberDeleteItem**](../models/workgroup-member-delete-item)

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
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    bulkworkgroupmembersrequestinner := []byte(``) // []BulkWorkgroupMembersRequestInner | List of identities to be removed from  a Governance Group members list.

    var bulkWorkgroupMembersRequestInner []beta.BulkWorkgroupMembersRequestInner
    if err := json.Unmarshal(bulkworkgroupmembersrequestinner, &bulkWorkgroupMembersRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroupMembers(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroupMembers(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.DeleteWorkgroupMembers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWorkgroupMembers`: []WorkgroupMemberDeleteItem
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.DeleteWorkgroupMembers`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-workgroups-in-bulk
Delete governance group(s)

This API initiates a bulk deletion of one or more Governance Groups.

>  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.

>  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.

>  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.

>  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it. 

>  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-workgroups-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkgroupsInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workgroupBulkDeleteRequest** | [**WorkgroupBulkDeleteRequest**](../models/workgroup-bulk-delete-request) |  | 

### Return type

[**[]WorkgroupDeleteItem**](../models/workgroup-delete-item)

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
    workgroupbulkdeleterequest := []byte(`{
          "ids" : [ "567a697e-885b-495a-afc5-d55e1c23a302", "c7b0f7b2-1e78-4063-b294-a555333dacd2" ]
        }`) // WorkgroupBulkDeleteRequest | 

    var workgroupBulkDeleteRequest beta.WorkgroupBulkDeleteRequest
    if err := json.Unmarshal(workgroupbulkdeleterequest, &workgroupBulkDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroupsInBulk(context.Background()).WorkgroupBulkDeleteRequest(workgroupBulkDeleteRequest).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroupsInBulk(context.Background()).WorkgroupBulkDeleteRequest(workgroupBulkDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.DeleteWorkgroupsInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWorkgroupsInBulk`: []WorkgroupDeleteItem
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.DeleteWorkgroupsInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workgroup
Get governance group by id
This API returns a Governance Groups by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-workgroup)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Governance Group | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkgroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**WorkgroupDto**](../models/workgroup-dto)

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
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Governance Group # string | ID of the Governance Group

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.GetWorkgroup(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.GetWorkgroup(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.GetWorkgroup``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkgroup`: WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.GetWorkgroup`: %v\n", resp)
}
```

[[Back to top]](#)

## list-connections
List connections for governance group
This API returns list of connections associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-connections)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListConnectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 

### Return type

[**[]WorkgroupConnectionDto**](../models/workgroup-connection-dto)

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
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.ListConnections(context.Background(), workgroupId).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.ListConnections(context.Background(), workgroupId).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.ListConnections``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListConnections`: []WorkgroupConnectionDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.ListConnections`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workgroup-members
List governance group members
This API returns list of members associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-workgroup-members)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListWorkgroupMembersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 

### Return type

[**[]ListWorkgroupMembers200ResponseInner**](../models/list-workgroup-members200-response-inner)

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
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.ListWorkgroupMembers(context.Background(), workgroupId).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.ListWorkgroupMembers(context.Background(), workgroupId).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.ListWorkgroupMembers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkgroupMembers`: []ListWorkgroupMembers200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.ListWorkgroupMembers`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workgroups
List governance groups
This API returns list of Governance Groups

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-workgroups)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** | 

### Return type

[**[]WorkgroupDto**](../models/workgroup-dto)

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
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name sw "Test"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.ListWorkgroups(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.ListWorkgroups(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.ListWorkgroups``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkgroups`: []WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.ListWorkgroups`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-workgroup
Patch a governance group
This API updates an existing governance group by ID. 
The following fields and objects are patchable:
  * name
  * description
  * owner

A token with API or ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-workgroup)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Governance Group | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchWorkgroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**WorkgroupDto**](../models/workgroup-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Governance Group # string | ID of the Governance Group
    jsonpatchoperation := []byte(`[{op=replace, path=/description, value=Governance Group new description.}]`) // []JsonPatchOperation |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.PatchWorkgroup(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.PatchWorkgroup(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.PatchWorkgroup``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchWorkgroup`: WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.PatchWorkgroup`: %v\n", resp)
}
```

[[Back to top]](#)

## update-workgroup-members
Add members to governance group
This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-workgroup-members)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkgroupMembersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **bulkWorkgroupMembersRequestInner** | [**[]BulkWorkgroupMembersRequestInner**](../models/bulk-workgroup-members-request-inner) | List of identities to be added to a Governance Group members list. | 

### Return type

[**[]WorkgroupMemberAddItem**](../models/workgroup-member-add-item)

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
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    bulkworkgroupmembersrequestinner := []byte(``) // []BulkWorkgroupMembersRequestInner | List of identities to be added to a Governance Group members list.

    var bulkWorkgroupMembersRequestInner []beta.BulkWorkgroupMembersRequestInner
    if err := json.Unmarshal(bulkworkgroupmembersrequestinner, &bulkWorkgroupMembersRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.GovernanceGroupsAPI.UpdateWorkgroupMembers(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
	  //resp, r, err := apiClient.Beta.GovernanceGroupsAPI.UpdateWorkgroupMembers(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.UpdateWorkgroupMembers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateWorkgroupMembers`: []WorkgroupMemberAddItem
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.UpdateWorkgroupMembers`: %v\n", resp)
}
```

[[Back to top]](#)

