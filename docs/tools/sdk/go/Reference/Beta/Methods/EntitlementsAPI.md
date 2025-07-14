---
id: beta-entitlements
title: Entitlements
pagination_label: Entitlements
sidebar_label: Entitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlements', 'BetaEntitlements'] 
slug: /tools/sdk/go/beta/methods/entitlements
tags: ['SDK', 'Software Development Kit', 'Entitlements', 'BetaEntitlements']
---

# EntitlementsAPI
  Use this API to implement and customize entitlement functionality.
With this functionality in place, administrators can view entitlements and configure them for use throughout Identity Security Cloud in certifications, access profiles, and roles.
Administrators in Identity Security Cloud can then grant users access to the entitlements or configure them so users themselves can request access to the entitlements whenever they need them.
With a good approval process, this entitlement functionality allows users to gain the specific access they need on sources quickly and securely.

Entitlements represent access rights on sources.
Entitlements are the most granular form of access in Identity Security Cloud.
Entitlements are often grouped into access profiles, and access profiles themselves are often grouped into roles, the broadest form of access in Identity Security Cloud.

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

An administrator can then create an even broader set of access in the form of a role grouping the &#39;AD Developers&#39; access profile with another profile, &#39;GitHub Developers,&#39; grouping entitlements for the GitHub source.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

When users need both the &#39;AD Developers&#39; access profile and the &#39;GitHub Developers&#39; access profile, they can request access to the role grouping both.

Administrators often use roles and access profiles within those roles to manage access so that users can gain access more quickly, but the hierarchy of access all starts with entitlements.

Anywhere entitlements appear, you can select them to find more information about the following:

- Cloud Access Details: These provide details about the cloud access entitlements on cloud-enabled sources.

- Permissions: Permissions represent individual units of read/write/admin access to a system.

- Relationships: These list each entitlement&#39;s parent and child relationships.

- Type: This is the entitlement&#39;s type. Some sources support multiple types, each with a different attribute schema.

Identity Security Cloud uses entitlements in many features, including the following:

- Certifications: Entitlements can be revoked from an identity that no longer needs them.

- Roles: Roles can group access profiles which themselves group entitlements. You can grant and revoke access on a broad level with roles. Role membership criteria can grant roles to identities based on whether they have certain entitlements or attributes.

- Access Profiles: Access profiles group entitlements.
They are the most important units of access in Identity Security Cloud.
Identity Security Cloud uses them in provisioning, certifications, and access requests, and administrators can configure them to grant very broad or very granular access.

You cannot delete entitlements directly from Identity Security Cloud.
Entitlements are deleted based on their inclusion in aggregations.

Refer to [Deleting Entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html#deleting-entitlements) more information about deleting entitlements.

Refer to [Entitlements](https://documentation.sailpoint.com/saas/help/access/entitlements.html) for more information about entitlements.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-for-entitlement**](#create-access-model-metadata-for-entitlement) | **Post** `/entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to an entitlement.
[**delete-access-model-metadata-from-entitlement**](#delete-access-model-metadata-from-entitlement) | **Delete** `/entitlements/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from an entitlement.
[**get-entitlement**](#get-entitlement) | **Get** `/entitlements/{id}` | Get an entitlement
[**get-entitlement-request-config**](#get-entitlement-request-config) | **Get** `/entitlements/{id}/entitlement-request-config` | Get entitlement request config
[**import-entitlements-by-source**](#import-entitlements-by-source) | **Post** `/entitlements/aggregate/sources/{id}` | Aggregate entitlements
[**list-entitlement-children**](#list-entitlement-children) | **Get** `/entitlements/{id}/children` | List of entitlements children
[**list-entitlement-parents**](#list-entitlement-parents) | **Get** `/entitlements/{id}/parents` | List of entitlements parents
[**list-entitlements**](#list-entitlements) | **Get** `/entitlements` | Gets a list of entitlements.
[**patch-entitlement**](#patch-entitlement) | **Patch** `/entitlements/{id}` | Patch an entitlement
[**put-entitlement-request-config**](#put-entitlement-request-config) | **Put** `/entitlements/{id}/entitlement-request-config` | Replace entitlement request config
[**reset-source-entitlements**](#reset-source-entitlements) | **Post** `/entitlements/reset/sources/{sourceId}` | Reset source entitlements
[**update-entitlements-in-bulk**](#update-entitlements-in-bulk) | **Post** `/entitlements/bulk-update` | Bulk update an entitlement list


## create-access-model-metadata-for-entitlement
Add metadata to an entitlement.
Add single Access Model Metadata to an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-model-metadata-for-entitlement)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The entitlement id. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataForEntitlementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**Entitlement**](../models/entitlement)

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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The entitlement id. # string | The entitlement id.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.CreateAccessModelMetadataForEntitlement(context.Background(), id, attributeKey, attributeValue).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.CreateAccessModelMetadataForEntitlement(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.CreateAccessModelMetadataForEntitlement``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataForEntitlement`: Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.CreateAccessModelMetadataForEntitlement`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-model-metadata-from-entitlement
Remove metadata from an entitlement.
Remove single Access Model Metadata from an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-access-model-metadata-from-entitlement)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The entitlement id. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessModelMetadataFromEntitlementRequest struct via the builder pattern


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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The entitlement id. # string | The entitlement id.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.EntitlementsAPI.DeleteAccessModelMetadataFromEntitlement(context.Background(), id, attributeKey, attributeValue).Execute()
	  //r, err := apiClient.Beta.EntitlementsAPI.DeleteAccessModelMetadataFromEntitlement(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.DeleteAccessModelMetadataFromEntitlement``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-entitlement
Get an entitlement
This API returns an entitlement by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Entitlement**](../models/entitlement)

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
    id := `2c91808874ff91550175097daaec161c` // string | The entitlement ID # string | The entitlement ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.GetEntitlement(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.GetEntitlement(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.GetEntitlement``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlement`: Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.GetEntitlement`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-request-config
Get entitlement request config
This API returns the entitlement request config for a specified entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-request-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EntitlementRequestConfig**](../models/entitlement-request-config)

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
    id := `2c91808874ff91550175097daaec161c` // string | Entitlement Id # string | Entitlement Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.GetEntitlementRequestConfig(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.GetEntitlementRequestConfig(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.GetEntitlementRequestConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementRequestConfig`: EntitlementRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.GetEntitlementRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## import-entitlements-by-source
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Aggregate entitlements
Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/beta/import-entitlements).

If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.

If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-entitlements-by-source)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportEntitlementsBySourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **csvFile** | ***os.File** | The CSV file containing the source entitlements to aggregate. | 

### Return type

[**LoadEntitlementTask**](../models/load-entitlement-task)

### HTTP request headers

- **Content-Type**: multipart/form-data
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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    csvFile := BINARY_DATA_HERE // *os.File | The CSV file containing the source entitlements to aggregate. (optional) # *os.File | The CSV file containing the source entitlements to aggregate. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.ImportEntitlementsBySource(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.ImportEntitlementsBySource(context.Background(), id).CsvFile(csvFile).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ImportEntitlementsBySource``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportEntitlementsBySource`: LoadEntitlementTask
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ImportEntitlementsBySource`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlement-children
List of entitlements children
This API returns a list of all child entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-entitlement-children)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementChildrenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | 

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
    id := `2c91808874ff91550175097daaec161c` // string | Entitlement Id # string | Entitlement Id
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.ListEntitlementChildren(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.ListEntitlementChildren(context.Background(), id).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlementChildren``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementChildren`: []Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlementChildren`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlement-parents
List of entitlements parents
This API returns a list of all parent entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-entitlement-parents)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementParentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* | 

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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | Entitlement Id # string | Entitlement Id
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id** (optional)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.ListEntitlementParents(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.ListEntitlementParents(context.Background(), id).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlementParents``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementParents`: []Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlementParents`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlements
Gets a list of entitlements.
This API returns a list of entitlements.

This API can be used in one of the two following ways: either getting entitlements for a specific **account-id**, or getting via use of **filters** (those two options are exclusive).

Any authenticated token can call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-entitlements)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **string** | The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements. | 
 **segmentedForIdentity** | **string** | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.  Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user&#39;s Identity. | 
 **forSegmentIds** | **string** | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). | 
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented&#x3D;false** results in an error. | [default to true]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* | 

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
    accountId := `ef38f94347e94562b5bb8424a56397d8` // string | The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements. (optional) # string | The account ID. If specified, returns only entitlements associated with the given Account. Cannot be specified with the **filters**, **segmented-for-identity**, **for-segment-ids**, or **include-unsegmented** param(s). This parameter is deprecated. Please use [Account Entitlements API](https://developer.sailpoint.com/apis/beta/#operation/getAccountEntitlements) to get account entitlements. (optional)
    segmentedForIdentity := `e554098913544630b5985e9042f5e44b` // string | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.  Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user's Identity. (optional) # string | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID.  Cannot be specified with the **account-id** or **for-segment-ids** param(s). It is also illegal to specify a value that refers to a different user's Identity. (optional)
    forSegmentIds := `041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649` // string | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). (optional) # string | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. Cannot be specified with the **account-id** or **segmented-for-identity** param(s). (optional)
    includeUnsegmented := true // bool | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to true)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.ListEntitlements(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.ListEntitlements(context.Background()).AccountId(accountId).SegmentedForIdentity(segmentedForIdentity).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlements``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlements`: []Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-entitlement
Patch an entitlement
This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable: **requestable**, **privileged**, **segments**, **owner**, **name**, **description**, and **manuallyUpdatedFields**

When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

A token with ORG_ADMIN or SOURCE_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-entitlement)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the entitlement to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchEntitlementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**Entitlement**](../models/entitlement)

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
    id := `2c91808a7813090a017814121e121518` // string | ID of the entitlement to patch # string | ID of the entitlement to patch
    jsonpatchoperation := []byte(`[{op=replace, path=/requestable, value=true}, {op=replace, path=/privileged, value=true}]`) // []JsonPatchOperation |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.PatchEntitlement(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.PatchEntitlement(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.PatchEntitlement``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchEntitlement`: Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.PatchEntitlement`: %v\n", resp)
}
```

[[Back to top]](#)

## put-entitlement-request-config
Replace entitlement request config
This API replaces the entitlement request config for a specified entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-entitlement-request-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutEntitlementRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **entitlementRequestConfig** | [**EntitlementRequestConfig**](../models/entitlement-request-config) |  | 

### Return type

[**EntitlementRequestConfig**](../models/entitlement-request-config)

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
    id := `2c91808a7813090a017814121e121518` // string | Entitlement ID # string | Entitlement ID
    entitlementrequestconfig := []byte(`{
          "accessRequestConfig" : {
            "denialCommentRequired" : false,
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "reauthorizationRequired" : false,
            "requestCommentRequired" : true
          },
          "revocationRequestConfig" : {
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ]
          }
        }`) // EntitlementRequestConfig | 

    var entitlementRequestConfig beta.EntitlementRequestConfig
    if err := json.Unmarshal(entitlementrequestconfig, &entitlementRequestConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.PutEntitlementRequestConfig(context.Background(), id).EntitlementRequestConfig(entitlementRequestConfig).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.PutEntitlementRequestConfig(context.Background(), id).EntitlementRequestConfig(entitlementRequestConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.PutEntitlementRequestConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutEntitlementRequestConfig`: EntitlementRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.PutEntitlementRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## reset-source-entitlements
Reset source entitlements
Remove all entitlements from a specific source.
To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Import Accounts](https://developer.sailpoint.com/docs/api/beta/import-accounts/) with `disableOptimization` = `true`. 

[API Spec](https://developer.sailpoint.com/docs/api/beta/reset-source-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of source for the entitlement reset | 

### Other Parameters

Other parameters are passed through a pointer to a apiResetSourceEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EntitlementSourceResetBaseReferenceDto**](../models/entitlement-source-reset-base-reference-dto)

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
    sourceId := `2c91808a7813090a017814121919ecca` // string | ID of source for the entitlement reset # string | ID of source for the entitlement reset

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.EntitlementsAPI.ResetSourceEntitlements(context.Background(), sourceId).Execute()
	  //resp, r, err := apiClient.Beta.EntitlementsAPI.ResetSourceEntitlements(context.Background(), sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ResetSourceEntitlements``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ResetSourceEntitlements`: EntitlementSourceResetBaseReferenceDto
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ResetSourceEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlements-in-bulk
Bulk update an entitlement list
This API applies an update to every entitlement of the list.


The number of entitlements to update is limited to 50 items maximum.


The JsonPatch update follows the [JSON
Patch](https://tools.ietf.org/html/rfc6902) standard. allowed operations :
`**{ "op": "replace", "path": "/privileged", "value": boolean }**  **{ "op":
"replace", "path": "/requestable","value": boolean }**`


A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-entitlements-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementBulkUpdateRequest** | [**EntitlementBulkUpdateRequest**](../models/entitlement-bulk-update-request) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    entitlementbulkupdaterequest := []byte(`{
          "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e", "2c91808a7624751a01762f19d692220f" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/privileged",
            "value" : false
          }, {
            "op" : "replace",
            "path" : "/requestable",
            "value" : false
          } ]
        }`) // EntitlementBulkUpdateRequest | 

    var entitlementBulkUpdateRequest beta.EntitlementBulkUpdateRequest
    if err := json.Unmarshal(entitlementbulkupdaterequest, &entitlementBulkUpdateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.EntitlementsAPI.UpdateEntitlementsInBulk(context.Background()).EntitlementBulkUpdateRequest(entitlementBulkUpdateRequest).Execute()
	  //r, err := apiClient.Beta.EntitlementsAPI.UpdateEntitlementsInBulk(context.Background()).EntitlementBulkUpdateRequest(entitlementBulkUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.UpdateEntitlementsInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

