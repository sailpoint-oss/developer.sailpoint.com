---
id: v2025-roles
title: Roles
pagination_label: Roles
sidebar_label: Roles
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roles', 'V2025Roles'] 
slug: /tools/sdk/go/v2025/methods/roles
tags: ['SDK', 'Software Development Kit', 'Roles', 'V2025Roles']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role**](#create-role) | **Post** `/roles` | Create a Role
[**delete-bulk-roles**](#delete-bulk-roles) | **Post** `/roles/bulk-delete` | Delete Role(s)
[**delete-metadata-from-role-by-key-and-value**](#delete-metadata-from-role-by-key-and-value) | **Delete** `/roles/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove a Metadata From Role.
[**delete-role**](#delete-role) | **Delete** `/roles/{id}` | Delete a Role
[**get-bulk-update-status**](#get-bulk-update-status) | **Get** `/roles/access-model-metadata/bulk-update` | Get Bulk-Update Statuses
[**get-bulk-update-status-by-id**](#get-bulk-update-status-by-id) | **Get** `/roles/access-model-metadata/bulk-update/id` | Get Bulk-Update Status by ID
[**get-role**](#get-role) | **Get** `/roles/{id}` | Get a Role
[**get-role-assigned-identities**](#get-role-assigned-identities) | **Get** `/roles/{id}/assigned-identities` | List Identities assigned a Role
[**get-role-entitlements**](#get-role-entitlements) | **Get** `/roles/{id}/entitlements` | List Role&#39;s Entitlements
[**list-roles**](#list-roles) | **Get** `/roles` | List Roles
[**patch-role**](#patch-role) | **Patch** `/roles/{id}` | Patch a specified Role
[**search-roles-by-filter**](#search-roles-by-filter) | **Post** `/roles/filter` | Filter Roles by Metadata
[**update-attribute-key-and-value-to-role**](#update-attribute-key-and-value-to-role) | **Post** `/roles/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add a Metadata to Role.
[**update-roles-metadata-by-filter**](#update-roles-metadata-by-filter) | **Post** `/roles/access-model-metadata/bulk-update/filter` | Bulk-Update Roles&#39; Metadata by Filters
[**update-roles-metadata-by-ids**](#update-roles-metadata-by-ids) | **Post** `/roles/access-model-metadata/bulk-update/ids` | Bulk-Update Roles&#39; Metadata by ID
[**update-roles-metadata-by-query**](#update-roles-metadata-by-query) | **Post** `/roles/access-model-metadata/bulk-update/query` | Bulk-Update Roles&#39; Metadata by Query


## create-role
Create a Role
This API creates a role.

You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 

In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-role)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    role := []byte(`{
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

    var role v2025.Role
    if err := json.Unmarshal(role, &role); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.CreateRole(context.Background()).Role(role).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.CreateRole(context.Background()).Role(role).Execute()
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
A user with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-bulk-roles)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    rolebulkdeleterequest := []byte(`{
          "roleIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
        }`) // RoleBulkDeleteRequest | 

    var roleBulkDeleteRequest v2025.RoleBulkDeleteRequest
    if err := json.Unmarshal(rolebulkdeleterequest, &roleBulkDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.DeleteBulkRoles(context.Background()).RoleBulkDeleteRequest(roleBulkDeleteRequest).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.DeleteBulkRoles(context.Background()).RoleBulkDeleteRequest(roleBulkDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteBulkRoles``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBulkRoles`: TaskResultDto
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.DeleteBulkRoles`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-metadata-from-role-by-key-and-value
Remove a Metadata From Role.
This API initialize a request to remove a single Access Model Metadata from a role by attribute key and value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-metadata-from-role-by-key-and-value)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The role&#39;s id. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMetadataFromRoleByKeyAndValueRequest struct via the builder pattern


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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The role's id. # string | The role's id.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.RolesAPI.DeleteMetadataFromRoleByKeyAndValue(context.Background(), id, attributeKey, attributeValue).Execute()
	  //r, err := apiClient.V2025.RolesAPI.DeleteMetadataFromRoleByKeyAndValue(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteMetadataFromRoleByKeyAndValue``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-role
Delete a Role
This API deletes a Role by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-role)

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
    r, err := apiClient.V2025.RolesAPI.DeleteRole(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.RolesAPI.DeleteRole(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-bulk-update-status
Get Bulk-Update Statuses
This API returns a list of all unfinished bulk update process status of the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-bulk-update-status)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBulkUpdateStatusRequest struct via the builder pattern


### Return type

[**[]RoleGetAllBulkUpdateResponse**](../models/role-get-all-bulk-update-response)

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

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.GetBulkUpdateStatus(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.GetBulkUpdateStatus(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetBulkUpdateStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBulkUpdateStatus`: []RoleGetAllBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetBulkUpdateStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-bulk-update-status-by-id
Get Bulk-Update Status by ID

This API initial a request for one bulk update's status by bulk update Id returns the status of the bulk update process.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-bulk-update-status-by-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Id of the bulk update task. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBulkUpdateStatusByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

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
    id := `c24359c389374d0fb8585698a2189e3d` // string | The Id of the bulk update task. # string | The Id of the bulk update task.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.GetBulkUpdateStatusById(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.GetBulkUpdateStatusById(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetBulkUpdateStatusById``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBulkUpdateStatusById`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetBulkUpdateStatusById`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role
Get a Role
This API returns a Role by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-role)

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
    resp, r, err := apiClient.V2025.RolesAPI.GetRole(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.GetRole(context.Background(), id).Execute()
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
List Identities assigned a Role


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-role-assigned-identities)

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
    resp, r, err := apiClient.V2025.RolesAPI.GetRoleAssignedIdentities(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.GetRoleAssignedIdentities(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Role's Entitlements
Get a list of entitlements associated with a specified role.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-role-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Containing role&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.GetRoleEntitlements(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.GetRoleEntitlements(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-roles)

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
    resp, r, err := apiClient.V2025.RolesAPI.ListRoles(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.ListRoles(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-role)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role to patch # string | ID of the Role to patch
    jsonpatchoperation := []byte(`[{op=replace, path=/requestable, value=true}, {op=replace, path=/enabled, value=true}]`) // []JsonPatchOperation | 

    var jsonPatchOperation []v2025.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.PatchRole(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.PatchRole(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.PatchRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchRole`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.PatchRole`: %v\n", resp)
}
```

[[Back to top]](#)

## search-roles-by-filter
Filter Roles by Metadata
This API returns a list of Role that filter by metadata and filter, it support filter by  both path parameter and attribute key and values.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, HELPDESK, CERT_ADMIN, REPORT_ADMIN or SOURCE_ADMIN  authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/search-roles-by-filter)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchRolesByFilterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 
 **limit** | **int32** | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **forSegmentIds** | **string** | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | 
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [default to true]
 **roleListFilterDTO** | [**RoleListFilterDTO**](../models/role-list-filter-dto) |  | 

### Return type

**Role**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    limit := 50 // int32 | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)
    rolelistfilterdto := []byte(`{
          "ammKeyValues" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "secret" ]
          } ],
          "filters" : "dimensional eq false"
        }`) // RoleListFilterDTO |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.SearchRolesByFilter(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.SearchRolesByFilter(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).RoleListFilterDTO(roleListFilterDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.SearchRolesByFilter``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchRolesByFilter`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.SearchRolesByFilter`: %v\n", resp)
}
```

[[Back to top]](#)

## update-attribute-key-and-value-to-role
Add a Metadata to Role.
This API initialize a request to add a single Access Model Metadata to a role by attribute key and attribute value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum number of attributes in one role is 25. Custom metadata update, including ADD and REPLACE need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-attribute-key-and-value-to-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Id of a role | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAttributeKeyAndValueToRoleRequest struct via the builder pattern


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
    id := `c24359c389374d0fb8585698a2189e3d` // string | The Id of a role # string | The Id of a role
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.UpdateAttributeKeyAndValueToRole(context.Background(), id, attributeKey, attributeValue).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.UpdateAttributeKeyAndValueToRole(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateAttributeKeyAndValueToRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAttributeKeyAndValueToRole`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateAttributeKeyAndValueToRole`: %v\n", resp)
}
```

[[Back to top]](#)

## update-roles-metadata-by-filter
Bulk-Update Roles' Metadata by Filters
This API initiates a bulk update of metadata for one or more Roles by filter.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-roles-metadata-by-filter)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRolesMetadataByFilterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleMetadataBulkUpdateByFilterRequest** | [**RoleMetadataBulkUpdateByFilterRequest**](../models/role-metadata-bulk-update-by-filter-request) |  | 

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

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
    rolemetadatabulkupdatebyfilterrequest := []byte(`{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : " requestable eq false",
          "replaceScope" : "ALL",
          "operation" : "REPLACE"
        }`) // RoleMetadataBulkUpdateByFilterRequest | 

    var roleMetadataBulkUpdateByFilterRequest v2025.RoleMetadataBulkUpdateByFilterRequest
    if err := json.Unmarshal(rolemetadatabulkupdatebyfilterrequest, &roleMetadataBulkUpdateByFilterRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.UpdateRolesMetadataByFilter(context.Background()).RoleMetadataBulkUpdateByFilterRequest(roleMetadataBulkUpdateByFilterRequest).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.UpdateRolesMetadataByFilter(context.Background()).RoleMetadataBulkUpdateByFilterRequest(roleMetadataBulkUpdateByFilterRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateRolesMetadataByFilter``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRolesMetadataByFilter`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateRolesMetadataByFilter`: %v\n", resp)
}
```

[[Back to top]](#)

## update-roles-metadata-by-ids
Bulk-Update Roles' Metadata by ID
This API initiates a bulk update of metadata for one or more Roles by a list of Role Ids.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum role count in a single update request is 3000. The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-roles-metadata-by-ids)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRolesMetadataByIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleMetadataBulkUpdateByIdRequest** | [**RoleMetadataBulkUpdateByIdRequest**](../models/role-metadata-bulk-update-by-id-request) |  | 

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

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
    rolemetadatabulkupdatebyidrequest := []byte(`{
          "roles" : [ "b1db89554cfa431cb8b9921ea38d9367" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ALL",
          "operation" : "REPLACE"
        }`) // RoleMetadataBulkUpdateByIdRequest | 

    var roleMetadataBulkUpdateByIdRequest v2025.RoleMetadataBulkUpdateByIdRequest
    if err := json.Unmarshal(rolemetadatabulkupdatebyidrequest, &roleMetadataBulkUpdateByIdRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.UpdateRolesMetadataByIds(context.Background()).RoleMetadataBulkUpdateByIdRequest(roleMetadataBulkUpdateByIdRequest).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.UpdateRolesMetadataByIds(context.Background()).RoleMetadataBulkUpdateByIdRequest(roleMetadataBulkUpdateByIdRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateRolesMetadataByIds``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRolesMetadataByIds`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateRolesMetadataByIds`: %v\n", resp)
}
```

[[Back to top]](#)

## update-roles-metadata-by-query
Bulk-Update Roles' Metadata by Query
This API initiates a bulk update of metadata for one or more Roles by query.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-roles-metadata-by-query)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRolesMetadataByQueryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleMetadataBulkUpdateByQueryRequest** | [**RoleMetadataBulkUpdateByQueryRequest**](../models/role-metadata-bulk-update-by-query-request) |  | 

### Return type

[**RoleBulkUpdateResponse**](../models/role-bulk-update-response)

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
    rolemetadatabulkupdatebyqueryrequest := []byte(`{
          "query" : {
            "query\"" : {
              "indices" : [ "roles" ],
              "queryType" : "TEXT",
              "textQuery" : {
                "terms" : [ "test123" ],
                "fields" : [ "id" ],
                "matchAny" : false,
                "contains" : true
              },
              "includeNested" : false
            }
          },
          "values" : [ {
            "attributeValue" : [ "topSecret" ],
            "attributeKey" : "iscFederalClassifications"
          }, {
            "attributeValue" : [ "topSecret" ],
            "attributeKey" : "iscFederalClassifications"
          } ],
          "replaceScope" : "ALL",
          "operation" : "REPLACE"
        }`) // RoleMetadataBulkUpdateByQueryRequest | 

    var roleMetadataBulkUpdateByQueryRequest v2025.RoleMetadataBulkUpdateByQueryRequest
    if err := json.Unmarshal(rolemetadatabulkupdatebyqueryrequest, &roleMetadataBulkUpdateByQueryRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.RolesAPI.UpdateRolesMetadataByQuery(context.Background()).RoleMetadataBulkUpdateByQueryRequest(roleMetadataBulkUpdateByQueryRequest).Execute()
	  //resp, r, err := apiClient.V2025.RolesAPI.UpdateRolesMetadataByQuery(context.Background()).RoleMetadataBulkUpdateByQueryRequest(roleMetadataBulkUpdateByQueryRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateRolesMetadataByQuery``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRolesMetadataByQuery`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateRolesMetadataByQuery`: %v\n", resp)
}
```

[[Back to top]](#)

