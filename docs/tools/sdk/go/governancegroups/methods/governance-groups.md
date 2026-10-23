# GovernanceGroups

# GovernanceGroupsAPI
  Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud.

A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user.

Refer to [Creating and Managing Governance Groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-workgroup-v1**](#create-workgroup-v1) | **Post** `/workgroups/v1` | Create a new governance group.
[**delete-workgroup-members-v1**](#delete-workgroup-members-v1) | **Post** `/workgroups/v1/{workgroupId}/members/bulk-delete` | Remove members from governance group
[**delete-workgroup-v1**](#delete-workgroup-v1) | **Delete** `/workgroups/v1/{id}` | Delete a governance group
[**delete-workgroups-in-bulk-v1**](#delete-workgroups-in-bulk-v1) | **Post** `/workgroups/v1/bulk-delete` | Delete governance group(s)
[**get-workgroup-v1**](#get-workgroup-v1) | **Get** `/workgroups/v1/{id}` | Get governance group by id
[**list-connections-v1**](#list-connections-v1) | **Get** `/workgroups/v1/{workgroupId}/connections` | List connections for governance group
[**list-workgroup-members-v1**](#list-workgroup-members-v1) | **Get** `/workgroups/v1/{workgroupId}/members` | List governance group members
[**list-workgroups-v1**](#list-workgroups-v1) | **Get** `/workgroups/v1` | List governance groups
[**patch-workgroup-v1**](#patch-workgroup-v1) | **Patch** `/workgroups/v1/{id}` | Patch a governance group
[**update-workgroup-members-v1**](#update-workgroup-members-v1) | **Post** `/workgroups/v1/{workgroupId}/members/bulk-add` | Add members to governance group


## create-workgroup-v1
Create a new governance group.
This API creates a new Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/create-workgroup-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkgroupV1Request struct via the builder pattern


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
    governance_groups "github.com/sailpoint-oss/golang-sdk/v3/governance_groups"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    workgroupdtoJson := []byte(`{
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

    var workgroupDto governance_groups.WorkgroupDto
    if err := json.Unmarshal(workgroupdtoJson, &workgroupDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.CreateWorkgroupV1(context.Background()).WorkgroupDto(workgroupDto).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.CreateWorkgroupV1(context.Background()).WorkgroupDto(workgroupDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.CreateWorkgroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateWorkgroupV1`: WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.CreateWorkgroupV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-workgroup-members-v1
Remove members from governance group
This API removes one or more  members from a Governance Group.  A
>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroup-members-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkgroupMembersV1Request struct via the builder pattern


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
    governance_groups "github.com/sailpoint-oss/golang-sdk/v3/governance_groups"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    bulkworkgroupmembersrequestinnerJson := []byte(``) // []BulkWorkgroupMembersRequestInner | List of identities to be removed from  a Governance Group members list.

    var bulkWorkgroupMembersRequestInner []governance_groups.BulkWorkgroupMembersRequestInner
    if err := json.Unmarshal(bulkworkgroupmembersrequestinnerJson, &bulkWorkgroupMembersRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.DeleteWorkgroupMembersV1(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.DeleteWorkgroupMembersV1(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.DeleteWorkgroupMembersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWorkgroupMembersV1`: []WorkgroupMemberDeleteItem
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.DeleteWorkgroupMembersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-workgroup-v1
Delete a governance group
This API deletes a Governance Group by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroup-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Governance Group | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkgroupV1Request struct via the builder pattern


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
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Governance Group # string | ID of the Governance Group

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.GovernanceGroupsAPI.DeleteWorkgroupV1(context.Background(), id).Execute()
	  //r, err := apiClient.GovernanceGroupsAPI.DeleteWorkgroupV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.DeleteWorkgroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-workgroups-in-bulk-v1
Delete governance group(s)

This API initiates a bulk deletion of one or more Governance Groups.

>  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.

>  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.

>  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.

>  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it. 

>  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroups-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkgroupsInBulkV1Request struct via the builder pattern


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
    governance_groups "github.com/sailpoint-oss/golang-sdk/v3/governance_groups"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    workgroupbulkdeleterequestJson := []byte(`{
          "ids" : [ "567a697e-885b-495a-afc5-d55e1c23a302", "c7b0f7b2-1e78-4063-b294-a555333dacd2" ]
        }`) // WorkgroupBulkDeleteRequest | 

    var workgroupBulkDeleteRequest governance_groups.WorkgroupBulkDeleteRequest
    if err := json.Unmarshal(workgroupbulkdeleterequestJson, &workgroupBulkDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.DeleteWorkgroupsInBulkV1(context.Background()).WorkgroupBulkDeleteRequest(workgroupBulkDeleteRequest).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.DeleteWorkgroupsInBulkV1(context.Background()).WorkgroupBulkDeleteRequest(workgroupBulkDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.DeleteWorkgroupsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteWorkgroupsInBulkV1`: []WorkgroupDeleteItem
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.DeleteWorkgroupsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-workgroup-v1
Get governance group by id
This API returns a Governance Groups by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-workgroup-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Governance Group | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkgroupV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Governance Group # string | ID of the Governance Group

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.GetWorkgroupV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.GetWorkgroupV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.GetWorkgroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkgroupV1`: WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.GetWorkgroupV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-connections-v1
List connections for governance group
This API returns list of connections associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/list-connections-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListConnectionsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.ListConnectionsV1(context.Background(), workgroupId).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.ListConnectionsV1(context.Background(), workgroupId).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.ListConnectionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListConnectionsV1`: []WorkgroupConnectionDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.ListConnectionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workgroup-members-v1
List governance group members
This API returns list of members associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/list-workgroup-members-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListWorkgroupMembersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 

### Return type

[**[]ListWorkgroupMembersV1200ResponseInner**](../models/list-workgroup-members-v1200-response-inner)

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
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.ListWorkgroupMembersV1(context.Background(), workgroupId).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.ListWorkgroupMembersV1(context.Background(), workgroupId).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.ListWorkgroupMembersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkgroupMembersV1`: []ListWorkgroupMembersV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.ListWorkgroupMembersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-workgroups-v1
List governance groups
This API returns list of Governance Groups

[API Spec](https://developer.sailpoint.com/docs/api/list-workgroups-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkgroupsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name sw "Test"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.ListWorkgroupsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.ListWorkgroupsV1(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.ListWorkgroupsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkgroupsV1`: []WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.ListWorkgroupsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-workgroup-v1
Patch a governance group
This API updates an existing governance group by ID. The following fields and objects are patchable:
* name
* description
* owner

[API Spec](https://developer.sailpoint.com/docs/api/patch-workgroup-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Governance Group | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchWorkgroupV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Governance Group # string | ID of the Governance Group
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/description","value":"Governance Group new description."}]`) // []JsonPatchOperation |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.PatchWorkgroupV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.PatchWorkgroupV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.PatchWorkgroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchWorkgroupV1`: WorkgroupDto
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.PatchWorkgroupV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-workgroup-members-v1
Add members to governance group
This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/update-workgroup-members-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workgroupId** | **string** | ID of the Governance Group. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkgroupMembersV1Request struct via the builder pattern


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
    governance_groups "github.com/sailpoint-oss/golang-sdk/v3/governance_groups"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    workgroupId := `2c91808a7813090a017814121919ecca` // string | ID of the Governance Group. # string | ID of the Governance Group.
    bulkworkgroupmembersrequestinnerJson := []byte(``) // []BulkWorkgroupMembersRequestInner | List of identities to be added to a Governance Group members list.

    var bulkWorkgroupMembersRequestInner []governance_groups.BulkWorkgroupMembersRequestInner
    if err := json.Unmarshal(bulkworkgroupmembersrequestinnerJson, &bulkWorkgroupMembersRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GovernanceGroupsAPI.UpdateWorkgroupMembersV1(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
	  //resp, r, err := apiClient.GovernanceGroupsAPI.UpdateWorkgroupMembersV1(context.Background(), workgroupId).BulkWorkgroupMembersRequestInner(bulkWorkgroupMembersRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsAPI.UpdateWorkgroupMembersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateWorkgroupMembersV1`: []WorkgroupMemberAddItem
    fmt.Fprintf(os.Stdout, "Response from `GovernanceGroupsAPI.UpdateWorkgroupMembersV1`: %v\n", resp)
}
```

[[Back to top]](#)

