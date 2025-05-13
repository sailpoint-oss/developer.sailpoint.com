---
id: beta-access-profiles
title: AccessProfiles
pagination_label: AccessProfiles
sidebar_label: AccessProfiles
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfiles', 'BetaAccessProfiles'] 
slug: /tools/sdk/go/beta/methods/access-profiles
tags: ['SDK', 'Software Development Kit', 'AccessProfiles', 'BetaAccessProfiles']
---

# AccessProfilesAPI
  Use this API to implement and customize access profile functionality.
With this functionality in place, administrators can create access profiles and configure them for use throughout Identity Security Cloud, enabling users to get the access they need quickly and securely.

Access profiles group entitlements, which represent access rights on sources.

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

Identity Security Cloud uses access profiles in many features, including the following:

- Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles.

- Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements.

- Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile.

- Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity&#39;s role.

In Identity Security Cloud, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones.
Administrators can enable and disable an access profile, and they can also make the following configurations:

- Manage Entitlements: Manage the profile&#39;s access by adding and removing entitlements.

- Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked.
Do not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile.

- Multiple Account Options: Define the logic Identity Security Cloud uses to provision access to an identity with multiple accounts on the source.

Refer to [Managing Access Profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) for more information about access profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-profile**](#create-access-profile) | **Post** `/access-profiles` | Create Access Profile
[**delete-access-profile**](#delete-access-profile) | **Delete** `/access-profiles/{id}` | Delete the specified Access Profile
[**delete-access-profiles-in-bulk**](#delete-access-profiles-in-bulk) | **Post** `/access-profiles/bulk-delete` | Delete Access Profile(s)
[**get-access-profile**](#get-access-profile) | **Get** `/access-profiles/{id}` | Get an Access Profile
[**get-access-profile-entitlements**](#get-access-profile-entitlements) | **Get** `/access-profiles/{id}/entitlements` | List Access Profile&#39;s Entitlements
[**list-access-profiles**](#list-access-profiles) | **Get** `/access-profiles` | List Access Profiles
[**patch-access-profile**](#patch-access-profile) | **Patch** `/access-profiles/{id}` | Patch a specified Access Profile
[**update-access-profiles-in-bulk**](#update-access-profiles-in-bulk) | **Post** `/access-profiles/bulk-update-requestable` | Update Access Profile(s) requestable field.


## create-access-profile
Create Access Profile
Create an access profile.
A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-profile)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfile** | [**AccessProfile**](../models/access-profile) |  | 

### Return type

[**AccessProfile**](../models/access-profile)

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
    data := []byte(`{
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
          "created" : "2021-03-01T22:32:58.104Z",
          "description" : "Collection of entitlements to read/write the employee database",
          "source" : {
            "name" : "ODS-AD-SOURCE",
            "id" : "2c91809773dee3610173fdb0b6061ef4",
            "type" : "SOURCE"
          },
          "enabled" : true,
          "revocationRequestConfig" : {
            "approvalSchemes" : [ {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            } ]
          },
          "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
          "accessRequestConfig" : {
            "commentsRequired" : true,
            "reauthorizationRequired" : true,
            "approvalSchemes" : [ {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "denialCommentsRequired" : true
          },
          "name" : "Employee-database-read-write",
          "provisioningCriteria" : {
            "children" : [ {
              "children" : [ {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              }, {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              } ],
              "attribute" : "email",
              "operation" : "EQUALS",
              "value" : "carlee.cert1c9f9b6fd@mailinator.com"
            }, {
              "children" : [ {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              }, {
                "children" : "children",
                "attribute" : "email",
                "operation" : "EQUALS",
                "value" : "carlee.cert1c9f9b6fd@mailinator.com"
              } ],
              "attribute" : "email",
              "operation" : "EQUALS",
              "value" : "carlee.cert1c9f9b6fd@mailinator.com"
            } ],
            "attribute" : "email",
            "operation" : "EQUALS",
            "value" : "carlee.cert1c9f9b6fd@mailinator.com"
          },
          "modified" : "2021-03-02T20:22:28.104Z",
          "id" : "2c91808a7190d06e01719938fcd20792",
          "requestable" : true
        }`) // AccessProfile | 

  
   var accessProfile beta.AccessProfile
   if err := json.Unmarshal(data, &accessProfile); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.CreateAccessProfile(context.Background()).AccessProfile(accessProfile).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.CreateAccessProfile(context.Background()).AccessProfile(accessProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.CreateAccessProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAccessProfile`: AccessProfile
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.CreateAccessProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-profile
Delete the specified Access Profile
This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to invoke this API. In addition, a SOURCE_SUBADMIN token must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-access-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessProfileRequest struct via the builder pattern


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
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Access Profile to delete # string | ID of the Access Profile to delete

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.AccessProfilesAPI.DeleteAccessProfile(context.Background(), id).Execute()
	//r, err := apiClient.Beta.AccessProfilesAPI.DeleteAccessProfile(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteAccessProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-access-profiles-in-bulk
Delete Access Profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-access-profiles-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessProfilesInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBulkDeleteRequest** | [**AccessProfileBulkDeleteRequest**](../models/access-profile-bulk-delete-request) |  | 

### Return type

[**AccessProfileBulkDeleteResponse**](../models/access-profile-bulk-delete-response)

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
    data := []byte(`{
          "accessProfileIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ],
          "bestEffortOnly" : true
        }`) // AccessProfileBulkDeleteRequest | 

  
   var accessProfileBulkDeleteRequest beta.AccessProfileBulkDeleteRequest
   if err := json.Unmarshal(data, &accessProfileBulkDeleteRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.DeleteAccessProfilesInBulk(context.Background()).AccessProfileBulkDeleteRequest(accessProfileBulkDeleteRequest).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.DeleteAccessProfilesInBulk(context.Background()).AccessProfileBulkDeleteRequest(accessProfileBulkDeleteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteAccessProfilesInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteAccessProfilesInBulk`: AccessProfileBulkDeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.DeleteAccessProfilesInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-profile
Get an Access Profile
This API returns an Access Profile by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccessProfile**](../models/access-profile)

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
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Access Profile # string | ID of the Access Profile

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.GetAccessProfile(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.GetAccessProfile(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.GetAccessProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessProfile`: AccessProfile
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.GetAccessProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-profile-entitlements
List Access Profile's Entitlements
Use this API to get a list of an access profile's entitlements. 
A user with SOURCE_SUBADMIN authority must have access to the source associated with the specified access profile.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-profile-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the access profile containing the entitlements. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessProfileEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the &#39;+&#39; symbol in their names.   | 
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
    id := `2c91808a7813090a017814121919ecca` // string | ID of the access profile containing the entitlements. # string | ID of the access profile containing the entitlements.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.   (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.   (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.GetAccessProfileEntitlements(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.GetAccessProfileEntitlements(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.GetAccessProfileEntitlements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessProfileEntitlements`: []Entitlement
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.GetAccessProfileEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-profiles
List Access Profiles
Get a list of access profiles.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-profiles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string** | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity&#39;s ID.  If you specify an identity that isn&#39;t a subadmin, the API returns a 400 Bad Request error. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the &#39;+&#39; symbol in their names.  | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **forSegmentIds** | **string** | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | 
 **includeUnsegmented** | **bool** | Indicates whether the response list should contain unsegmented access profiles. If &#x60;for-segment-ids&#x60; is absent or empty, specifying *include-unsegmented* as &#x60;false&#x60; results in an error. | [default to true]

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
    forSubadmin := `8c190e6787aa4ed9a90bd9d5344523fb` // string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "SailPoint Support"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true) # bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.ListAccessProfiles(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.ListAccessProfiles(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.ListAccessProfiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAccessProfiles`: []AccessProfile
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.ListAccessProfiles`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-access-profile
Patch a specified Access Profile
This API updates an existing Access Profile. The following fields are patchable:
**name**, **description**, **enabled**, **owner**, **requestable**, **accessRequestConfig**, **revokeRequestConfig**, **segments**, **entitlements**, **provisioningCriteria**
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API. In addition, a SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-access-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchAccessProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**AccessProfile**](../models/access-profile)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Access Profile to patch # string | ID of the Access Profile to patch
    jsonPatchOperation := fmt.Sprintf(`[{op=add, path=/entitlements, value=[{id=2c9180857725c14301772a93bb77242d, type=ENTITLEMENT, name=AD User Group}]}]`) // []JsonPatchOperation | 

  
   var jsonPatchOperation beta.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.PatchAccessProfile(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.PatchAccessProfile(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.PatchAccessProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAccessProfile`: AccessProfile
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.PatchAccessProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-profiles-in-bulk
Update Access Profile(s) requestable field.
This API initiates a bulk update of field requestable for one or more Access Profiles.

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
A SOURCE_SUBADMIN user may only use this API to update Access Profiles which are associated with Sources they are able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-access-profiles-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessProfilesInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileBulkUpdateRequestInner** | [**[]AccessProfileBulkUpdateRequestInner**](../models/access-profile-bulk-update-request-inner) |  | 

### Return type

[**[]AccessProfileUpdateItem**](../models/access-profile-update-item)

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
    accessProfileBulkUpdateRequestInner := fmt.Sprintf(`[{id=464ae7bf-791e-49fd-b746-06a2e4a89635, requestable=false}]`) // []AccessProfileBulkUpdateRequestInner | 

  
   var accessProfileBulkUpdateRequestInner beta.AccessProfileBulkUpdateRequestInner
   if err := json.Unmarshal(data, &accessProfileBulkUpdateRequestInner); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessProfilesAPI.UpdateAccessProfilesInBulk(context.Background()).AccessProfileBulkUpdateRequestInner(accessProfileBulkUpdateRequestInner).Execute()
	//resp, r, err := apiClient.Beta.AccessProfilesAPI.UpdateAccessProfilesInBulk(context.Background()).AccessProfileBulkUpdateRequestInner(accessProfileBulkUpdateRequestInner).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAccessProfilesInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateAccessProfilesInBulk`: []AccessProfileUpdateItem
	fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAccessProfilesInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

