---
id: beta-certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certifications', 'BetaCertifications'] 
slug: /tools/sdk/go/beta/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications', 'BetaCertifications']
---

# CertificationsAPI
  Use this API to implement certification functionality.
This API provides specific functionality that improves an organization&#39;s ability to manage its certification process.

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access.
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved.
Multiple certifications by different reviewers are often required to approve a user&#39;s access.
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers.
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more.

This API enables administrators and reviewers to get useful information about certifications at a high level, such as the reviewers involved, and at a more granular level, such as the permissions affected by changes to entitlements within those certifications.
It also provides the useful ability to reassign identities and items within certifications to other reviewers, rather than [reassigning the entire certifications themselves](https://developer.sailpoint.com/idn/api/beta/submit-reassign-certs-async/).

Refer to [Managing User Accounts](https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts) for more information about accounts.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-identity-certification-item-permissions**](#get-identity-certification-item-permissions) | **Get** `/certifications/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for Entitlement Certification Item
[**get-identity-certification-pending-tasks**](#get-identity-certification-pending-tasks) | **Get** `/certifications/{id}/tasks-pending` | Pending Certification Tasks
[**get-identity-certification-task-status**](#get-identity-certification-task-status) | **Get** `/certifications/{id}/tasks/{taskId}` | Certification Task Status
[**list-certification-reviewers**](#list-certification-reviewers) | **Get** `/certifications/{id}/reviewers` | List of Reviewers for certification
[**list-certifications**](#list-certifications) | **Get** `/certifications` | Certifications by IDs
[**submit-reassign-certs-async**](#submit-reassign-certs-async) | **Post** `/certifications/{id}/reassign-async` | Reassign Certifications Asynchronously


## get-identity-certification-item-permissions
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Permissions for Entitlement Certification Item
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-item-permissions)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificationId** | **string** | The certification ID | 
**itemId** | **string** | The certification item ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityCertificationItemPermissionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)&#x60; | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]PermissionDto**](../models/permission-dto)

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
    certificationId := `ef38f94347e94562b5bb8424a56397d8` // string | The certification ID # string | The certification ID
    itemId := `2c91808671bcbab40171bd945d961227` // string | The certification item ID # string | The certification item ID
    filters := `target eq "SYS.OBJAUTH2"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)` (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)` (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.CertificationsAPI.GetIdentityCertificationItemPermissions(context.Background(), certificationId, itemId).Execute()
	//resp, r, err := apiClient.Beta.CertificationsAPI.GetIdentityCertificationItemPermissions(context.Background(), certificationId, itemId).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetIdentityCertificationItemPermissions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityCertificationItemPermissions`: []PermissionDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetIdentityCertificationItemPermissions`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-certification-pending-tasks
Pending Certification Tasks
This API returns the status of all pending (`QUEUED` or `IN_PROGRESS`) tasks for an identity campaign certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-pending-tasks)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity campaign certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityCertificationPendingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]IdentityCertificationTask**](../models/identity-certification-task)

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
    id := `id_example` // string | The identity campaign certification ID # string | The identity campaign certification ID

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.CertificationsAPI.GetIdentityCertificationPendingTasks(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.CertificationsAPI.GetIdentityCertificationPendingTasks(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetIdentityCertificationPendingTasks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityCertificationPendingTasks`: []IdentityCertificationTask
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetIdentityCertificationPendingTasks`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-certification-task-status
Certification Task Status
This API returns the status of a certification task. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-task-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity campaign certification ID | 
**taskId** | **string** | The certification task ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityCertificationTaskStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**IdentityCertificationTask**](../models/identity-certification-task)

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
    id := `id_example` // string | The identity campaign certification ID # string | The identity campaign certification ID
    taskId := `taskId_example` // string | The certification task ID # string | The certification task ID

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.CertificationsAPI.GetIdentityCertificationTaskStatus(context.Background(), id, taskId).Execute()
	//resp, r, err := apiClient.Beta.CertificationsAPI.GetIdentityCertificationTaskStatus(context.Background(), id, taskId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetIdentityCertificationTaskStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityCertificationTaskStatus`: IdentityCertificationTask
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetIdentityCertificationTaskStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## list-certification-reviewers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
List of Reviewers for certification
This API returns a list of reviewers for the certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-certification-reviewers)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListCertificationReviewersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** | 

### Return type

[**[]IdentityReferenceWithNameAndEmail**](../models/identity-reference-with-name-and-email)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The certification ID # string | The certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Bob"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.CertificationsAPI.ListCertificationReviewers(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.CertificationsAPI.ListCertificationReviewers(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.ListCertificationReviewers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCertificationReviewers`: []IdentityReferenceWithNameAndEmail
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.ListCertificationReviewers`: %v\n", resp)
}
```

[[Back to top]](#)

## list-certifications
Certifications by IDs
This API returns a list of certifications that satisfy the given query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-certifications)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCertificationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewerIdentitiy** | **string** | The ID of reviewer identity. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq, ne*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** | 

### Return type

[**[]CertificationDto**](../models/certification-dto)

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
    reviewerIdentitiy := `reviewerIdentitiy_example` // string | The ID of reviewer identity. *me* indicates the current user. (optional) # string | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `filters_example` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq, ne*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq, ne*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in* (optional)
    sorters := `sorters_example` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.CertificationsAPI.ListCertifications(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.CertificationsAPI.ListCertifications(context.Background()).ReviewerIdentitiy(reviewerIdentitiy).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.ListCertifications``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCertifications`: []CertificationDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.ListCertifications`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-reassign-certs-async
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Reassign Certifications Asynchronously
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the reassignment is complete. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-reassign-certs-async)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity campaign certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitReassignCertsAsyncRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **reviewReassign** | [**ReviewReassign**](../models/review-reassign) |  | 

### Return type

[**IdentityCertificationTask**](../models/identity-certification-task)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The identity campaign certification ID # string | The identity campaign certification ID
    reviewreassign := []byte(`{
          "reason" : "reassigned for some reason",
          "reassignTo" : "ef38f94347e94562b5bb8424a56397d8",
          "reassign" : [ {
            "id" : "ef38f94347e94562b5bb8424a56397d8",
            "type" : "ITEM"
          }, {
            "id" : "ef38f94347e94562b5bb8424a56397d8",
            "type" : "ITEM"
          } ]
        }`) // ReviewReassign | 

  
   var reviewReassign beta.ReviewReassign
   if err := json.Unmarshal(reviewreassign, &reviewReassign); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.CertificationsAPI.SubmitReassignCertsAsync(context.Background(), id).ReviewReassign(reviewReassign).Execute()
	//resp, r, err := apiClient.Beta.CertificationsAPI.SubmitReassignCertsAsync(context.Background(), id).ReviewReassign(reviewReassign).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.SubmitReassignCertsAsync``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitReassignCertsAsync`: IdentityCertificationTask
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.SubmitReassignCertsAsync`: %v\n", resp)
}
```

[[Back to top]](#)

