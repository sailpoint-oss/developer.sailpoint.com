---
id: beta-identities
title: Identities
pagination_label: Identities
sidebar_label: Identities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identities', 'BetaIdentities'] 
slug: /tools/sdk/go/beta/methods/identities
tags: ['SDK', 'Software Development Kit', 'Identities', 'BetaIdentities']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-identity**](#delete-identity) | **Delete** `/identities/{id}` | Delete identity
[**get-identity**](#get-identity) | **Get** `/identities/{id}` | Identity details
[**get-identity-ownership-details**](#get-identity-ownership-details) | **Get** `/identities/{identityId}/ownership` | Get ownership details
[**get-role-assignment**](#get-role-assignment) | **Get** `/identities/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**get-role-assignments**](#get-role-assignments) | **Get** `/identities/{identityId}/role-assignments` | List role assignments
[**list-identities**](#list-identities) | **Get** `/identities` | List identities
[**reset-identity**](#reset-identity) | **Post** `/identities/{identityId}/reset` | Reset an identity
[**send-identity-verification-account-token**](#send-identity-verification-account-token) | **Post** `/identities/{id}/verification/account/send` | Send password reset email
[**start-identities-invite**](#start-identities-invite) | **Post** `/identities/invite` | Invite identities to register
[**start-identity-processing**](#start-identity-processing) | **Post** `/identities/process` | Process a list of identityids
[**synchronize-attributes-for-identity**](#synchronize-attributes-for-identity) | **Post** `/identities/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity
Delete identity
The API returns successful response if the requested identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityRequest struct via the builder pattern


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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.IdentitiesAPI.DeleteIdentity(context.Background(), id).Execute()
	  //r, err := apiClient.Beta.IdentitiesAPI.DeleteIdentity(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.DeleteIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-identity
Identity details
This API returns a single identity using the Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.GetIdentity(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.GetIdentity(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentity`: Identity
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-ownership-details
Get ownership details
Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/v3/search-post/).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-ownership-details)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityOwnershipDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentityOwnershipAssociationDetails**](../models/identity-ownership-association-details)

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
    identityId := `ff8081814d2a8036014d701f3fbf53fa` // string | Identity ID. # string | Identity ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.GetIdentityOwnershipDetails(context.Background(), identityId).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.GetIdentityOwnershipDetails(context.Background(), identityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetIdentityOwnershipDetails``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityOwnershipDetails`: IdentityOwnershipAssociationDetails
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetIdentityOwnershipDetails`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-assignment
Role assignment details


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-assignment)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity Id | 
**assignmentId** | **string** | Assignment Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleAssignmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RoleAssignmentDto**](../models/role-assignment-dto)

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
    identityId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id
    assignmentId := `1cbb0705b38c4226b1334eadd8874086` // string | Assignment Id # string | Assignment Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.GetRoleAssignment(context.Background(), identityId, assignmentId).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.GetRoleAssignment(context.Background(), identityId, assignmentId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetRoleAssignment``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleAssignment`: RoleAssignmentDto
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetRoleAssignment`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-assignments
List role assignments
This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-assignments)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity Id to get the role assignments for | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleAssignmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **roleId** | **string** | Role Id to filter the role assignments with | 
 **roleName** | **string** | Role name to filter the role assignments with | 

### Return type

[**[]GetRoleAssignments200ResponseInner**](../models/get-role-assignments200-response-inner)

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
    identityId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id to get the role assignments for # string | Identity Id to get the role assignments for
    roleId := `e7697a1e96d04db1ac7b0f4544915d2c` // string | Role Id to filter the role assignments with (optional) # string | Role Id to filter the role assignments with (optional)
    roleName := `Engineer` // string | Role name to filter the role assignments with (optional) # string | Role name to filter the role assignments with (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.GetRoleAssignments(context.Background(), identityId).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.GetRoleAssignments(context.Background(), identityId).RoleId(roleId).RoleName(roleName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.GetRoleAssignments``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleAssignments`: []GetRoleAssignments200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.GetRoleAssignments`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identities
List identities
This API returns a list of identities.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentitiesRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
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
    resp, r, err := apiClient.Beta.IdentitiesAPI.ListIdentities(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.ListIdentities(context.Background()).Filters(filters).Sorters(sorters).DefaultFilter(defaultFilter).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.ListIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentities`: []Identity
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.ListIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## reset-identity
Reset an identity
Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

[API Spec](https://developer.sailpoint.com/docs/api/beta/reset-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Identity Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiResetIdentityRequest struct via the builder pattern


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
    identityId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity Id # string | Identity Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.IdentitiesAPI.ResetIdentity(context.Background(), identityId).Execute()
	  //r, err := apiClient.Beta.IdentitiesAPI.ResetIdentity(context.Background(), identityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.ResetIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## send-identity-verification-account-token
Send password reset email
This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


[API Spec](https://developer.sailpoint.com/docs/api/beta/send-identity-verification-account-token)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendIdentityVerificationAccountTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sendAccountVerificationRequest** | [**SendAccountVerificationRequest**](../models/send-account-verification-request) |  | 

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity ID # string | Identity ID
    sendaccountverificationrequest := []byte(`{
          "sourceName" : "Active Directory Source",
          "via" : "EMAIL_WORK"
        }`) // SendAccountVerificationRequest | 

    var sendAccountVerificationRequest beta.SendAccountVerificationRequest
    if err := json.Unmarshal(sendaccountverificationrequest, &sendAccountVerificationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.IdentitiesAPI.SendIdentityVerificationAccountToken(context.Background(), id).SendAccountVerificationRequest(sendAccountVerificationRequest).Execute()
	  //r, err := apiClient.Beta.IdentitiesAPI.SendIdentityVerificationAccountToken(context.Background(), id).SendAccountVerificationRequest(sendAccountVerificationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.SendIdentityVerificationAccountToken``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-identities-invite
Invite identities to register
This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status).


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-identities-invite)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartIdentitiesInviteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteIdentitiesRequest** | [**InviteIdentitiesRequest**](../models/invite-identities-request) |  | 

### Return type

[**TaskStatus**](../models/task-status)

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
    inviteidentitiesrequest := []byte(`{
          "ids" : [ "2b568c65bc3c4c57a43bd97e3a8e55", "2c9180867769897d01776ed5f125512f" ],
          "uninvited" : false
        }`) // InviteIdentitiesRequest | 

    var inviteIdentitiesRequest beta.InviteIdentitiesRequest
    if err := json.Unmarshal(inviteidentitiesrequest, &inviteIdentitiesRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.StartIdentitiesInvite(context.Background()).InviteIdentitiesRequest(inviteIdentitiesRequest).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.StartIdentitiesInvite(context.Background()).InviteIdentitiesRequest(inviteIdentitiesRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.StartIdentitiesInvite``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartIdentitiesInvite`: TaskStatus
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.StartIdentitiesInvite`: %v\n", resp)
}
```

[[Back to top]](#)

## start-identity-processing
Process a list of identityids
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

A token with ORG_ADMIN or HELPDESK authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/beta/start-identity-processing)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartIdentityProcessingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processIdentitiesRequest** | [**ProcessIdentitiesRequest**](../models/process-identities-request) |  | 

### Return type

[**TaskResultResponse**](../models/task-result-response)

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
    processidentitiesrequest := []byte(`{
          "identityIds" : [ "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8" ]
        }`) // ProcessIdentitiesRequest | 

    var processIdentitiesRequest beta.ProcessIdentitiesRequest
    if err := json.Unmarshal(processidentitiesrequest, &processIdentitiesRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.StartIdentityProcessing(context.Background()).ProcessIdentitiesRequest(processIdentitiesRequest).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.StartIdentityProcessing(context.Background()).ProcessIdentitiesRequest(processIdentitiesRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.StartIdentityProcessing``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartIdentityProcessing`: TaskResultResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.StartIdentityProcessing`: %v\n", resp)
}
```

[[Back to top]](#)

## synchronize-attributes-for-identity
Attribute synchronization for single identity.
This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity. A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/synchronize-attributes-for-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | The Identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiSynchronizeAttributesForIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentitySyncJob**](../models/identity-sync-job)

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
    identityId := `identityId_example` // string | The Identity id # string | The Identity id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentitiesAPI.SynchronizeAttributesForIdentity(context.Background(), identityId).Execute()
	  //resp, r, err := apiClient.Beta.IdentitiesAPI.SynchronizeAttributesForIdentity(context.Background(), identityId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentitiesAPI.SynchronizeAttributesForIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SynchronizeAttributesForIdentity`: IdentitySyncJob
    fmt.Fprintf(os.Stdout, "Response from `IdentitiesAPI.SynchronizeAttributesForIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

