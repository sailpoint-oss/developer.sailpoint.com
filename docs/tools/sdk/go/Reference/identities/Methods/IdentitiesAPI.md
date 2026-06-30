---
id: v1-identities
title: Identities
pagination_label: Identities
sidebar_label: Identities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identities', 'V1Identities'] 
slug: /tools/sdk/go/identities/methods/identities
tags: ['SDK', 'Software Development Kit', 'Identities', 'V1Identities']
---

# IdentitiesAPI
  Use this API to implement identity functionality.
With this functionality in place, administrators can synchronize an identity&#39;s attributes with its various source attributes.

Identity Security Cloud uses identities as users&#39; authoritative accounts. Identities can own other accounts, entitlements, and attributes.

An identity has a variety of attributes, such as an account name, an email address, a job title, and more.
These identity attributes can be correlated with different attributes on different sources.
For example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and Identity Security Cloud knows they are the same person with the same access and attributes.

In Identity Security Cloud, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.
To manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.
They can then select the identity they want to manually synchronize and use the hamburger menu to select &#39;Synchronize Attributes.&#39;
Doing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity.

Refer to [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) for more information about synchronizing attributes.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-identity-v1**](#delete-identity-v1) | **Delete** `/identities/v1/{id}` | Delete identity
[**get-identity-ownership-details-v1**](#get-identity-ownership-details-v1) | **Get** `/identities/v1/{identityId}/ownership` | Get ownership details
[**get-identity-v1**](#get-identity-v1) | **Get** `/identities/v1/{id}` | Identity details
[**get-role-assignment-v1**](#get-role-assignment-v1) | **Get** `/identities/v1/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**get-role-assignments-v1**](#get-role-assignments-v1) | **Get** `/identities/v1/{identityId}/role-assignments` | List role assignments
[**list-entitlements-by-identity-v1**](#list-entitlements-by-identity-v1) | **Get** `/entitlements/v1/identities/{id}/entitlements` | List of entitlements by identity.
[**list-identities-v1**](#list-identities-v1) | **Get** `/identities/v1` | List identities
[**reset-identity-v1**](#reset-identity-v1) | **Post** `/identities/v1/{id}/reset` | Reset an identity
[**send-identity-verification-account-token-v1**](#send-identity-verification-account-token-v1) | **Post** `/identities/v1/{id}/verification/account/send` | Send password reset email
[**start-identities-invite-v1**](#start-identities-invite-v1) | **Post** `/identities/v1/invite` | Invite identities to register
[**start-identity-processing-v1**](#start-identity-processing-v1) | **Post** `/identities/v1/process` | Process a list of identityids
[**synchronize-attributes-for-identity-v1**](#synchronize-attributes-for-identity-v1) | **Post** `/identities/v1/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete identity
The API returns successful response if the requested identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.IdentitiesAPI.DeleteIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.IdentitiesAPI.DeleteIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.DeleteIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-identity-ownership-details-v1
Get ownership details
Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-ownership-details-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityOwnershipDetailsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Identityownershipassociationdetails**](../models/identityownershipassociationdetails)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    identityId := `ff8081814d2a8036014d701f3fbf53fa` // string | Identity ID. # string | Identity ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.GetIdentityOwnershipDetailsV1(context.Background(), identityId).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.GetIdentityOwnershipDetailsV1(context.Background(), identityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetIdentityOwnershipDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityOwnershipDetailsV1`: Identityownershipassociationdetails
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetIdentityOwnershipDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-v1
Identity details
This API returns a single identity using the Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Identity**](../models/identity)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.GetIdentityV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.GetIdentityV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityV1`: Identity
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-assignment-v1
Role assignment details


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-assignment-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity Id | 
**assignmentId** | **string** | Assignment Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleAssignmentV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Roleassignmentdto**](../models/roleassignmentdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    identityId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id
    assignmentId := `1cbb0705b38c4226b1334eadd8874086` // string | Assignment Id # string | Assignment Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.GetRoleAssignmentV1(context.Background(), identityId, assignmentId).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.GetRoleAssignmentV1(context.Background(), identityId, assignmentId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetRoleAssignmentV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleAssignmentV1`: Roleassignmentdto
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetRoleAssignmentV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-assignments-v1
List role assignments
This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-assignments-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity Id to get the role assignments for | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleAssignmentsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **roleId** | **string** | Role Id to filter the role assignments with | 
 **roleName** | **string** | Role name to filter the role assignments with | 

### Return type

[**[]GetRoleAssignmentsV1200ResponseInner**](../models/get-role-assignments-v1200-response-inner)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    identityId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id to get the role assignments for # string | Identity Id to get the role assignments for
    roleId := `e7697a1e96d04db1ac7b0f4544915d2c` // string | Role Id to filter the role assignments with (optional) # string | Role Id to filter the role assignments with (optional)
    roleName := `Engineer` // string | Role name to filter the role assignments with (optional) # string | Role name to filter the role assignments with (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.GetRoleAssignmentsV1(context.Background(), identityId).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.GetRoleAssignmentsV1(context.Background(), identityId).RoleId(roleId).RoleName(roleName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetRoleAssignmentsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleAssignmentsV1`: []GetRoleAssignmentsV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetRoleAssignmentsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlements-by-identity-v1
List of entitlements by identity.
The API returns a list of all entitlements assigned to an identity, either directly or through the role or access profile. A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-entitlements-by-identity-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementsByIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Identityentitlements**](../models/identityentitlements)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.ListEntitlementsByIdentityV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.ListEntitlementsByIdentityV1(context.Background(), id).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.ListEntitlementsByIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementsByIdentityV1`: []Identityentitlements
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.ListEntitlementsByIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identities-v1
List identities
This API returns a list of identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identities-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** | 
 **defaultFilter** | **string** | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated&#x3D;true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. | [default to &quot;CORRELATED_ONLY&quot;]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]Identity**](../models/identity)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    filters := `id eq "6c9079b270a266a60170a2779fcb0006" or correlated eq false` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional)
    sorters := `name,-cloudStatus` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional)
    defaultFilter := `NONE` // string | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional) (default to "CORRELATED_ONLY") # string | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated=true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional) (default to "CORRELATED_ONLY")
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.ListIdentitiesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.ListIdentitiesV1(context.Background()).Filters(filters).Sorters(sorters).DefaultFilter(defaultFilter).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.ListIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentitiesV1`: []Identity
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.ListIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reset-identity-v1
Reset an identity
Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reset-identity-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiResetIdentityV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.IdentitiesAPI.ResetIdentityV1(context.Background(), id).Execute()
	  //r, err := apiClient.IdentitiesAPI.ResetIdentityV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.ResetIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## send-identity-verification-account-token-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Send password reset email
This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


[API Spec](https://developer.sailpoint.com/docs/api/v1/send-identity-verification-account-token-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendIdentityVerificationAccountTokenV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **sendaccountverificationrequest** | [**Sendaccountverificationrequest**](../models/sendaccountverificationrequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity ID # string | Identity ID
    sendaccountverificationrequest := []byte(``) // Sendaccountverificationrequest | 

    var sendaccountverificationrequest v1.Sendaccountverificationrequest
    if err := json.Unmarshal(sendaccountverificationrequest, &sendaccountverificationrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.IdentitiesAPI.SendIdentityVerificationAccountTokenV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Sendaccountverificationrequest(sendaccountverificationrequest).Execute()
	  //r, err := apiClient.IdentitiesAPI.SendIdentityVerificationAccountTokenV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Sendaccountverificationrequest(sendaccountverificationrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.SendIdentityVerificationAccountTokenV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-identities-invite-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Invite identities to register
This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status).


[API Spec](https://developer.sailpoint.com/docs/api/v1/start-identities-invite-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartIdentitiesInviteV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **inviteidentitiesrequest** | [**Inviteidentitiesrequest**](../models/inviteidentitiesrequest) |  | 

### Return type

[**Taskstatus**](../models/taskstatus)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    inviteidentitiesrequest := []byte(``) // Inviteidentitiesrequest | 

    var inviteidentitiesrequest v1.Inviteidentitiesrequest
    if err := json.Unmarshal(inviteidentitiesrequest, &inviteidentitiesrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.StartIdentitiesInviteV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Inviteidentitiesrequest(inviteidentitiesrequest).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.StartIdentitiesInviteV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Inviteidentitiesrequest(inviteidentitiesrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.StartIdentitiesInviteV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartIdentitiesInviteV1`: Taskstatus
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.StartIdentitiesInviteV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-identity-processing-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Process a list of identityids
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-identity-processing-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartIdentityProcessingV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **processidentitiesrequest** | [**Processidentitiesrequest**](../models/processidentitiesrequest) |  | 

### Return type

[**Taskresultresponse**](../models/taskresultresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    processidentitiesrequest := []byte(``) // Processidentitiesrequest | 

    var processidentitiesrequest v1.Processidentitiesrequest
    if err := json.Unmarshal(processidentitiesrequest, &processidentitiesrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.StartIdentityProcessingV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Processidentitiesrequest(processidentitiesrequest).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.StartIdentityProcessingV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Processidentitiesrequest(processidentitiesrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.StartIdentityProcessingV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartIdentityProcessingV1`: Taskresultresponse
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.StartIdentityProcessingV1`: %v\n", resp)
}
```

[[Back to top]](#)

## synchronize-attributes-for-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Attribute synchronization for single identity.
This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/synchronize-attributes-for-identity-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | The Identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiSynchronizeAttributesForIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Identitysyncjob**](../models/identitysyncjob)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identities"
)

func main() {
    identityId := `identityId_example` // string | The Identity id # string | The Identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentitiesAPI.SynchronizeAttributesForIdentityV1(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IdentitiesAPI.SynchronizeAttributesForIdentityV1(context.Background(), identityId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.SynchronizeAttributesForIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SynchronizeAttributesForIdentityV1`: Identitysyncjob
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.SynchronizeAttributesForIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

