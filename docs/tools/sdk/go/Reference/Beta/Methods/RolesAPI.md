---
id: beta-roles
title: Roles
pagination_label: Roles
sidebar_label: Roles
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roles', 'BetaRoles'] 
slug: /tools/sdk/go/beta/methods/roles
tags: ['SDK', 'Software Development Kit', 'Roles', 'BetaRoles']
---

# RolesAPI
  Use this API to implement and customize role functionality.
With this functionality in place, administrators can create roles and configure them for use throughout Identity Security Cloud.
Identity Security Cloud can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks.

Entitlements represent the most granular level of access in Identity Security Cloud.
Access profiles represent the next level and often group entitlements.
Roles represent the broadest level of access and often group access profiles.

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

An administrator can then create an even broader set of access in the form of a role grouping the &#39;AD Developers&#39; access profile with another profile, &#39;GitHub Developers,&#39; grouping entitlements for the GitHub source.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

When users need both the &#39;AD Developers&#39; access profile and the &#39;GitHub Developers&#39; access profile, they can request access to the role grouping both.

Roles often represent positions within organizations.
For example, an organization&#39;s accountant can access all the tools the organization&#39;s accountants need with the &#39;Accountant&#39; role.
If the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant&#39;s &#39;Accountant&#39; access and grant access to the &#39;Engineer&#39; role instead, granting access to all the tools the organization&#39;s engineers need.

In Identity Security Cloud, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones.
Administrators can enable and disable the role, and they can also make the following configurations:

- Manage Access: Manage the role&#39;s access by adding or removing access profiles.

- Define Assignment: Define the criteria Identity Security Cloud uses to assign the role to identities.
Use the first option, &#39;Standard Criteria,&#39; to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes.
Use the second, &#39;Identity List,&#39; to specify the identities for assignment.

- Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked.
Do not configure a role to be requestable without establishing a secure access request approval process for that role first.

Refer to [Working with Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) for more information about roles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role**](#create-role) | **Post** `/roles` | Create a Role
[**delete-bulk-roles**](#delete-bulk-roles) | **Post** `/roles/bulk-delete` | Delete Role(s)
[**delete-role**](#delete-role) | **Delete** `/roles/{id}` | Delete a Role
[**get-role**](#get-role) | **Get** `/roles/{id}` | Get a Role
[**get-role-assigned-identities**](#get-role-assigned-identities) | **Get** `/roles/{id}/assigned-identities` | Identities assigned a Role
[**get-role-entitlements**](#get-role-entitlements) | **Get** `/roles/{id}/entitlements` | List Role&#39;s Entitlements
[**list-roles**](#list-roles) | **Get** `/roles` | List Roles
[**patch-role**](#patch-role) | **Patch** `/roles/{id}` | Patch a specified Role


## create-role
Create a Role
This API creates a role.

You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 

In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-role)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**Role**](../models/role) |  | 

### Return type

[**Role**](../models/role)

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
          "dimensional" : false,
          "created" : "2021-03-01T22:32:58.104Z",
          "dimensionRefs" : [ {
            "name" : "Role 2",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "DIMENSION"
          }, {
            "name" : "Role 2",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "DIMENSION"
          } ],
          "description" : "Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.",
          "membership" : {
            "identities" : [ {
              "aliasName" : "t.edison",
              "name" : "Thomas Edison",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            }, {
              "aliasName" : "t.edison",
              "name" : "Thomas Edison",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            } ],
            "criteria" : {
              "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
              "children" : [ {
                "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                "children" : [ {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "sourceId" : "2c9180867427f3a301745aec18211519",
                    "property" : "attribute.email",
                    "type" : "ACCOUNT"
                  }
                }, {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "sourceId" : "2c9180867427f3a301745aec18211519",
                    "property" : "attribute.email",
                    "type" : "ACCOUNT"
                  }
                } ],
                "operation" : "EQUALS",
                "key" : {
                  "sourceId" : "2c9180867427f3a301745aec18211519",
                  "property" : "attribute.email",
                  "type" : "ACCOUNT"
                }
              }, {
                "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                "children" : [ {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "sourceId" : "2c9180867427f3a301745aec18211519",
                    "property" : "attribute.email",
                    "type" : "ACCOUNT"
                  }
                }, {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "sourceId" : "2c9180867427f3a301745aec18211519",
                    "property" : "attribute.email",
                    "type" : "ACCOUNT"
                  }
                } ],
                "operation" : "EQUALS",
                "key" : {
                  "sourceId" : "2c9180867427f3a301745aec18211519",
                  "property" : "attribute.email",
                  "type" : "ACCOUNT"
                }
              } ],
              "operation" : "EQUALS",
              "key" : {
                "sourceId" : "2c9180867427f3a301745aec18211519",
                "property" : "attribute.email",
                "type" : "ACCOUNT"
              }
            },
            "type" : "IDENTITY_LIST"
          },
          "enabled" : true,
          "revocationRequestConfig" : {
            "commentsRequired" : false,
            "approvalSchemes" : [ {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "denialCommentsRequired" : false
          },
          "segments" : [ "f7b1b8a3-5fed-4fd4-ad29-82014e137e19", "29cb6c06-1da8-43ea-8be4-b3125f248f2a" ],
          "legacyMembershipInfo" : {
            "type" : "IDENTITY_LIST"
          },
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
          "accessProfiles" : [ {
            "name" : "Access Profile 2567",
            "id" : "ff808081751e6e129f1518161919ecca",
            "type" : "ACCESS_PROFILE"
          }, {
            "name" : "Access Profile 2567",
            "id" : "ff808081751e6e129f1518161919ecca",
            "type" : "ACCESS_PROFILE"
          } ],
          "name" : "Role 2567",
          "modified" : "2021-03-02T20:22:28.104Z",
          "accessModelMetadata" : {
            "attributes" : [ {
              "key" : "iscPrivacy",
              "name" : "Privacy",
              "multiselect" : false,
              "status" : "active",
              "type" : "governance",
              "objectTypes" : [ "all" ],
              "description" : "Specifies the level of privacy associated with an access item.",
              "values" : [ {
                "value" : "public",
                "name" : "Public",
                "status" : "active"
              } ]
            } ]
          },
          "id" : "2c918086749d78830174a1a40e121518",
          "requestable" : true
        }`) // Role | 

  
   var role beta.Role
   if err := json.Unmarshal(data, &role); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.CreateRole(context.Background()).Role(role).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.CreateRole(context.Background()).Role(role).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.CreateRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateRole`: Role
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.CreateRole`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-bulk-roles
Delete Role(s)
This endpoint initiates a bulk deletion of one or more roles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-bulk-roles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBulkRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleBulkDeleteRequest** | [**RoleBulkDeleteRequest**](../models/role-bulk-delete-request) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "roleIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
        }`) // RoleBulkDeleteRequest | 

  
   var roleBulkDeleteRequest beta.RoleBulkDeleteRequest
   if err := json.Unmarshal(data, &roleBulkDeleteRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.DeleteBulkRoles(context.Background()).RoleBulkDeleteRequest(roleBulkDeleteRequest).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.DeleteBulkRoles(context.Background()).RoleBulkDeleteRequest(roleBulkDeleteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteBulkRoles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteBulkRoles`: TaskResultDto
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.DeleteBulkRoles`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-role
Delete a Role
This API deletes a Role by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoleRequest struct via the builder pattern


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
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role # string | ID of the Role

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.RolesAPI.DeleteRole(context.Background(), id).Execute()
	//r, err := apiClient.Beta.RolesAPI.DeleteRole(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-role
Get a Role
This API returns a Role by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Role**](../models/role)

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
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role # string | ID of the Role

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.GetRole(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.GetRole(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRole`: Role
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-assigned-identities
Identities assigned a Role


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-assigned-identities)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role for which the assigned Identities are to be listed | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleAssignedIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** | 

### Return type

[**[]RoleIdentity**](../models/role-identity)

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
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role for which the assigned Identities are to be listed # string | ID of the Role for which the assigned Identities are to be listed
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name sw Joe` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional)
    sorters := `aliasName,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.GetRoleAssignedIdentities(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.GetRoleAssignedIdentities(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleAssignedIdentities``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleAssignedIdentities`: []RoleIdentity
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleAssignedIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-entitlements
List Role's Entitlements
Get a list of entitlements associated with a specified role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Containing role&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
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
    id := `2c91808a7813090a017814121919ecca` // string | Containing role's ID. # string | Containing role's ID.
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.GetRoleEntitlements(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.GetRoleEntitlements(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleEntitlements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleEntitlements`: []Entitlement
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## list-roles
List Roles
This API returns a list of Roles.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-roles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **forSegmentIds** | **string** | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. | 
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [default to true]

### Return type

[**[]Role**](../models/role)

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
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `requestable eq false` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.ListRoles(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.ListRoles(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.ListRoles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListRoles`: []Role
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.ListRoles`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-role
Patch a specified Role
This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:

* name
* description
* enabled
* owner
* accessProfiles
* entitlements
* membership
* requestable
* accessRequestConfig
* revokeRequestConfig
* segments
* accessModelMetadata   
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles included in the role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles, however, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

When you use this API to modify a role's membership identities, you can only modify up to a limit of 500 membership identities at a time. 

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**Role**](../models/role)

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
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role to patch # string | ID of the Role to patch
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/requestable, value=true}, {op=replace, path=/enabled, value=true}]`) // []JsonPatchOperation | 

  
   var jsonPatchOperation beta.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.RolesAPI.PatchRole(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.Beta.RolesAPI.PatchRole(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.PatchRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchRole`: Role
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.PatchRole`: %v\n", resp)
}
```

[[Back to top]](#)

