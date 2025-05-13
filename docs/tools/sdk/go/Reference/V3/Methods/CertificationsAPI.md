---
id: certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certifications', 'Certifications'] 
slug: /tools/sdk/go/v3/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications', 'Certifications']
---

# CertificationsAPI
  Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users&#39; access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations&#39; data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other Identity Security Cloud users as certification reviewers. 
Those reviewers can select the &#39;Certifications&#39; tab to view any of the certifications they either need to review or have already reviewed under the &#39;Active&#39; and &#39;Completed&#39; tabs, respectively. 

When a certification campaign is in progress, certification reviewers will see certifications listed under &#39;Active,&#39; where they can review the involved identities. 
Under the &#39;Decision&#39; column on the right, next to each access item, reviewers can select the checkmark to approve access, select the &#39;X&#39; to revoke access, or they can toggle the &#39;More Options&#39; menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. 

Once a reviewer has made decisions on all the certification&#39;s involved access items, he or she must select &#39;Sign Off&#39; to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer&#39;s list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities&#39; entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-certification-task**](#get-certification-task) | **Get** `/certification-tasks/{id}` | Certification Task by ID
[**get-identity-certification**](#get-identity-certification) | **Get** `/certifications/{id}` | Identity Certification by ID
[**get-identity-certification-item-permissions**](#get-identity-certification-item-permissions) | **Get** `/certifications/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for Entitlement Certification Item
[**get-pending-certification-tasks**](#get-pending-certification-tasks) | **Get** `/certification-tasks` | List of Pending Certification Tasks
[**list-certification-reviewers**](#list-certification-reviewers) | **Get** `/certifications/{id}/reviewers` | List of Reviewers for certification
[**list-identity-access-review-items**](#list-identity-access-review-items) | **Get** `/certifications/{id}/access-review-items` | List of Access Review Items
[**list-identity-certifications**](#list-identity-certifications) | **Get** `/certifications` | List Identity Campaign Certifications
[**make-identity-decision**](#make-identity-decision) | **Post** `/certifications/{id}/decide` | Decide on a Certification Item
[**reassign-identity-certifications**](#reassign-identity-certifications) | **Post** `/certifications/{id}/reassign` | Reassign Identities or Items
[**sign-off-identity-certification**](#sign-off-identity-certification) | **Post** `/certifications/{id}/sign-off` | Finalize Identity Certification Decisions
[**submit-reassign-certs-async**](#submit-reassign-certs-async) | **Post** `/certifications/{id}/reassign-async` | Reassign Certifications Asynchronously


## get-certification-task
Certification Task by ID
This API returns the certification task for the specified ID. Reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-certification-task)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The task ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCertificationTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CertificationTask**](../models/certification-task)

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
    id := `63b32151-26c0-42f4-9299-8898dc1c9daa` // string | The task ID # string | The task ID

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.GetCertificationTask(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.GetCertificationTask(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetCertificationTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCertificationTask`: CertificationTask
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetCertificationTask`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-certification
Identity Certification by ID
This API returns a single identity campaign certification by its ID. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-identity-certification)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The certification id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityCertificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentityCertificationDto**](../models/identity-certification-dto)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The certification id # string | The certification id

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.GetIdentityCertification(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.GetIdentityCertification(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetIdentityCertification``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityCertification`: IdentityCertificationDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetIdentityCertification`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-certification-item-permissions
Permissions for Entitlement Certification Item
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-identity-certification-item-permissions)

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


 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: 1?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 | 
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
    filters := `target eq "SYS.OBJAUTH2"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: 1?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: 1?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.GetIdentityCertificationItemPermissions(context.Background(), certificationId, itemId).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.GetIdentityCertificationItemPermissions(context.Background(), certificationId, itemId).Filters(filters).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetIdentityCertificationItemPermissions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIdentityCertificationItemPermissions`: []PermissionDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetIdentityCertificationItemPermissions`: %v\n", resp)
}
```

[[Back to top]](#)

## get-pending-certification-tasks
List of Pending Certification Tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification tasks. Any authenticated token can call this API, but only certification tasks you are authorized to review will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-pending-certification-tasks)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPendingCertificationTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewerIdentity** | **string** | The ID of reviewer identity. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* | 

### Return type

[**[]CertificationTask**](../models/certification-task)

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
    reviewerIdentity := `Ada.1de82e55078344` // string | The ID of reviewer identity. *me* indicates the current user. (optional) # string | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `type eq "ADMIN_REASSIGN"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.GetPendingCertificationTasks(context.Background()).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.GetPendingCertificationTasks(context.Background()).ReviewerIdentity(reviewerIdentity).Limit(limit).Offset(offset).Count(count).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.GetPendingCertificationTasks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPendingCertificationTasks`: []CertificationTask
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.GetPendingCertificationTasks`: %v\n", resp)
}
```

[[Back to top]](#)

## list-certification-reviewers
List of Reviewers for certification
This API returns a list of reviewers for the certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-certification-reviewers)

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
    resp, r, err := apiClient.V3.CertificationsAPI.ListCertificationReviewers(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.ListCertificationReviewers(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.ListCertificationReviewers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCertificationReviewers`: []IdentityReferenceWithNameAndEmail
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.ListCertificationReviewers`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-access-review-items
List of Access Review Items
This API returns a list of access review items for an identity campaign certification. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-identity-access-review-items)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity campaign certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityAccessReviewItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** | 
 **entitlements** | **string** | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. | 
 **accessProfiles** | **string** | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. | 
 **roles** | **string** | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. | 

### Return type

[**[]AccessReviewItem**](../models/access-review-item)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The identity campaign certification ID # string | The identity campaign certification ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "ef38f94347e94562b5bb8424a56397d8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional)
    sorters := `access.name,-accessProfile.sourceName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** (optional)
    entitlements := `identityEntitlement` // string | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. (optional) # string | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. (optional)
    accessProfiles := `accessProfile1` // string | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. (optional) # string | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. (optional)
    roles := `userRole` // string | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. (optional) # string | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.ListIdentityAccessReviewItems(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.ListIdentityAccessReviewItems(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Entitlements(entitlements).AccessProfiles(accessProfiles).Roles(roles).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.ListIdentityAccessReviewItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListIdentityAccessReviewItems`: []AccessReviewItem
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.ListIdentityAccessReviewItems`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-certifications
List Identity Campaign Certifications
Use this API to get a list of identity campaign certifications for the specified query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. This API does not support requests for certifications assigned to governance groups.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-identity-certifications)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityCertificationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewerIdentity** | **string** | Reviewer&#39;s identity. *me* indicates the current user. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** | 

### Return type

[**[]IdentityCertificationDto**](../models/identity-certification-dto)

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
    reviewerIdentity := `me` // string | Reviewer's identity. *me* indicates the current user. (optional) # string | Reviewer's identity. *me* indicates the current user. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "ef38f94347e94562b5bb8424a56397d8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* (optional)
    sorters := `name,due` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.ListIdentityCertifications(context.Background()).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.ListIdentityCertifications(context.Background()).ReviewerIdentity(reviewerIdentity).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.ListIdentityCertifications``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListIdentityCertifications`: []IdentityCertificationDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.ListIdentityCertifications`: %v\n", resp)
}
```

[[Back to top]](#)

## make-identity-decision
Decide on a Certification Item
The API makes a decision to approve or revoke one or more identity campaign certification items. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v3/make-identity-decision)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the identity campaign certification on which to make decisions | 

### Other Parameters

Other parameters are passed through a pointer to a apiMakeIdentityDecisionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **reviewDecision** | [**[]ReviewDecision**](../models/review-decision) | A non-empty array of decisions to be made. | 

### Return type

[**IdentityCertificationDto**](../models/identity-certification-dto)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the identity campaign certification on which to make decisions # string | The ID of the identity campaign certification on which to make decisions
    reviewDecision := fmt.Sprintf(`[{id=ef38f94347e94562b5bb8424a56396b5, decision=APPROVE, bulk=true, comments=This user still needs access to this source.}, {id=ef38f94347e94562b5bb8424a56397d8, decision=APPROVE, bulk=true, comments=This user still needs access to this source too.}]`) // []ReviewDecision | A non-empty array of decisions to be made.

  
   var reviewDecision v3.ReviewDecision
   if err := json.Unmarshal(data, &reviewDecision); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.MakeIdentityDecision(context.Background(), id).ReviewDecision(reviewDecision).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.MakeIdentityDecision(context.Background(), id).ReviewDecision(reviewDecision).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.MakeIdentityDecision``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `MakeIdentityDecision`: IdentityCertificationDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.MakeIdentityDecision`: %v\n", resp)
}
```

[[Back to top]](#)

## reassign-identity-certifications
Reassign Identities or Items
This API reassigns up to 50 identities or items in an identity campaign certification to another reviewer. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v3/reassign-identity-certifications)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity campaign certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiReassignIdentityCertificationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **reviewReassign** | [**ReviewReassign**](../models/review-reassign) |  | 

### Return type

[**IdentityCertificationDto**](../models/identity-certification-dto)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The identity campaign certification ID # string | The identity campaign certification ID
    data := []byte(`{
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

  
   var reviewReassign v3.ReviewReassign
   if err := json.Unmarshal(data, &reviewReassign); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.ReassignIdentityCertifications(context.Background(), id).ReviewReassign(reviewReassign).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.ReassignIdentityCertifications(context.Background(), id).ReviewReassign(reviewReassign).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.ReassignIdentityCertifications``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReassignIdentityCertifications`: IdentityCertificationDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.ReassignIdentityCertifications`: %v\n", resp)
}
```

[[Back to top]](#)

## sign-off-identity-certification
Finalize Identity Certification Decisions
This API finalizes all decisions made on an identity campaign certification and initiates any remediations required. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v3/sign-off-identity-certification)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity campaign certification ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignOffIdentityCertificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentityCertificationDto**](../models/identity-certification-dto)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The identity campaign certification ID # string | The identity campaign certification ID

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.SignOffIdentityCertification(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.SignOffIdentityCertification(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.SignOffIdentityCertification``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignOffIdentityCertification`: IdentityCertificationDto
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.SignOffIdentityCertification`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-reassign-certs-async
Reassign Certifications Asynchronously
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another
reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the
reassignment is complete. 

Reviewers for this certification can also call this API.


[API Spec](https://developer.sailpoint.com/docs/api/v3/submit-reassign-certs-async)

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

[**CertificationTask**](../models/certification-task)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The identity campaign certification ID # string | The identity campaign certification ID
    data := []byte(`{
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

  
   var reviewReassign v3.ReviewReassign
   if err := json.Unmarshal(data, &reviewReassign); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.CertificationsAPI.SubmitReassignCertsAsync(context.Background(), id).ReviewReassign(reviewReassign).Execute()
	//resp, r, err := apiClient.V3.CertificationsAPI.SubmitReassignCertsAsync(context.Background(), id).ReviewReassign(reviewReassign).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationsAPI.SubmitReassignCertsAsync``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitReassignCertsAsync`: CertificationTask
	fmt.Fprintf(os.Stdout, "Response from `CertificationsAPI.SubmitReassignCertsAsync`: %v\n", resp)
}
```

[[Back to top]](#)

