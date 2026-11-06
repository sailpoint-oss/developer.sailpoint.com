# Roles

# RolesAPI
  Use this API to implement and customize role functionality.
With this functionality in place, administrators can create roles and configure them for use throughout SailPoint Identity Security. 
SailPoint Identity Security can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks.

Entitlements represent the most granular level of access in SailPoint Identity Security. 
Access profiles represent the next level and often group entitlements. 
Roles represent the broadest level of access and often group access profiles. 

For example, an Active Directory source in SailPoint Identity Security can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

An administrator can then create an even broader set of access in the form of a role grouping the &#39;AD Developers&#39; access profile with another profile, &#39;GitHub Developers,&#39; grouping entitlements for the GitHub source.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

When users need both the &#39;AD Developers&#39; access profile and the &#39;GitHub Developers&#39; access profile, they can request access to the role grouping both. 

Roles often represent positions within organizations. 
For example, an organization&#39;s accountant can access all the tools the organization&#39;s accountants need with the &#39;Accountant&#39; role. 
If the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant&#39;s &#39;Accountant&#39; access and grant access to the &#39;Engineer&#39; role instead, granting access to all the tools the organization&#39;s engineers need.

In SailPoint Identity Security, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones. 
Administrators can enable and disable the role, and they can also make the following configurations: 

- Manage Access: Manage the role&#39;s access by adding or removing access profiles.

- Define Assignment: Define the criteria SailPoint Identity Security uses to assign the role to identities. 
Use the first option, &#39;Standard Criteria,&#39; to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes. 
Use the second, &#39;Identity List,&#39; to specify the identities for assignment.

- Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked. 
Do not configure a role to be requestable without establishing a secure access request approval process for that role first. 

Refer to [Working with Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) for more information about roles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role-v1**](#create-role-v1) | **Post** `/roles/v1` | Create a role
[**delete-bulk-roles-v1**](#delete-bulk-roles-v1) | **Post** `/roles/v1/bulk-delete` | Delete role(s)
[**delete-metadata-from-role-by-key-and-value-v1**](#delete-metadata-from-role-by-key-and-value-v1) | **Delete** `/roles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove a metadata from role.
[**delete-role-v1**](#delete-role-v1) | **Delete** `/roles/v1/{id}` | Delete a role
[**get-bulk-update-status-by-id-v1**](#get-bulk-update-status-by-id-v1) | **Get** `/roles/v1/access-model-metadata/bulk-update/id` | Get bulk-update status by id
[**get-bulk-update-status-v1**](#get-bulk-update-status-v1) | **Get** `/roles/v1/access-model-metadata/bulk-update` | Get bulk-update statuses
[**get-role-assigned-identities-v1**](#get-role-assigned-identities-v1) | **Get** `/roles/v1/{id}/assigned-identities` | List identities assigned a role
[**get-role-entitlements-v1**](#get-role-entitlements-v1) | **Get** `/roles/v1/{id}/entitlements` | List role&#39;s entitlements
[**get-role-entitlements-v2**](#get-role-entitlements-v2) | **Get** `/roles/v2/{id}/entitlements` | List role&#39;s entitlements
[**get-role-v1**](#get-role-v1) | **Get** `/roles/v1/{id}` | Get a role
[**get-role-v2**](#get-role-v2) | **Get** `/roles/v2/{id}` | Get a role
[**list-roles-v1**](#list-roles-v1) | **Get** `/roles/v1` | List roles
[**list-roles-v2**](#list-roles-v2) | **Get** `/roles/v2` | List roles
[**patch-role-v1**](#patch-role-v1) | **Patch** `/roles/v1/{id}` | Patch a specified role
[**search-roles-by-filter-v1**](#search-roles-by-filter-v1) | **Post** `/roles/v1/filter` | Filter roles by metadata
[**search-roles-by-filter-v2**](#search-roles-by-filter-v2) | **Post** `/roles/v2/filter` | Filter roles by metadata
[**update-attribute-key-and-value-to-role-v1**](#update-attribute-key-and-value-to-role-v1) | **Post** `/roles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add a metadata to role.
[**update-roles-metadata-by-filter-v1**](#update-roles-metadata-by-filter-v1) | **Post** `/roles/v1/access-model-metadata/bulk-update/filter` | Bulk-update roles&#39; metadata by filters
[**update-roles-metadata-by-ids-v1**](#update-roles-metadata-by-ids-v1) | **Post** `/roles/v1/access-model-metadata/bulk-update/ids` | Bulk-update roles&#39; metadata by id
[**update-roles-metadata-by-query-v1**](#update-roles-metadata-by-query-v1) | **Post** `/roles/v1/access-model-metadata/bulk-update/query` | Bulk-update roles&#39; metadata by query


## create-role-v1
Create a role
This API creates a role.

You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 

In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-role-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleV1Request struct via the builder pattern


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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    roleJson := []byte(`{
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
          "privilegeLevel" : "High",
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
          "additionalOwners" : [ {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          }, {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          } ],
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
            "dimensionSchema" : {
              "dimensionAttributes" : [ {
                "displayName" : "City",
                "name" : "city",
                "derived" : true
              }, {
                "displayName" : "City",
                "name" : "city",
                "derived" : true
              } ]
            },
            "commentsRequired" : true,
            "reauthorizationRequired" : true,
            "approvalSchemes" : [ {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "46c79819-a69f-49a2-becb-12c971ae66c6",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "denialCommentsRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 6,
              "timeUnit" : "MONTHS"
            }
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

    var role roles.Role
    if err := json.Unmarshal(roleJson, &role); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.CreateRoleV1(context.Background()).Role(role).Execute()
	  //resp, r, err := apiClient.RolesAPI.CreateRoleV1(context.Background()).Role(role).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.CreateRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateRoleV1`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.CreateRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-bulk-roles-v1
Delete role(s)
This endpoint initiates a bulk deletion of one or more roles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A user with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/delete-bulk-roles-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBulkRolesV1Request struct via the builder pattern


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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    rolebulkdeleterequestJson := []byte(`{
          "roleIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
        }`) // RoleBulkDeleteRequest | 

    var roleBulkDeleteRequest roles.RoleBulkDeleteRequest
    if err := json.Unmarshal(rolebulkdeleterequestJson, &roleBulkDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.DeleteBulkRolesV1(context.Background()).RoleBulkDeleteRequest(roleBulkDeleteRequest).Execute()
	  //resp, r, err := apiClient.RolesAPI.DeleteBulkRolesV1(context.Background()).RoleBulkDeleteRequest(roleBulkDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteBulkRolesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBulkRolesV1`: TaskResultDto
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.DeleteBulkRolesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-metadata-from-role-by-key-and-value-v1
Remove a metadata from role.
This API initialize a request to remove a single Access Model Metadata from a role by attribute key and value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-metadata-from-role-by-key-and-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The role&#39;s id. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMetadataFromRoleByKeyAndValueV1Request struct via the builder pattern


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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The role's id. # string | The role's id.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.RolesAPI.DeleteMetadataFromRoleByKeyAndValueV1(context.Background(), id, attributeKey, attributeValue).Execute()
	  //r, err := apiClient.RolesAPI.DeleteMetadataFromRoleByKeyAndValueV1(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteMetadataFromRoleByKeyAndValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-role-v1
Delete a role
This API deletes a Role by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/delete-role-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoleV1Request struct via the builder pattern


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
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role # string | ID of the Role

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.RolesAPI.DeleteRoleV1(context.Background(), id).Execute()
	  //r, err := apiClient.RolesAPI.DeleteRoleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.DeleteRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-bulk-update-status-by-id-v1
Get bulk-update status by id

This API initial a request for one bulk update's status by bulk update Id returns the status of the bulk update process.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/get-bulk-update-status-by-id-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Id of the bulk update task. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBulkUpdateStatusByIdV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `c24359c389374d0fb8585698a2189e3d` // string | The Id of the bulk update task. # string | The Id of the bulk update task.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetBulkUpdateStatusByIdV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetBulkUpdateStatusByIdV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetBulkUpdateStatusByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBulkUpdateStatusByIdV1`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetBulkUpdateStatusByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-bulk-update-status-v1
Get bulk-update statuses
This API returns a list of all unfinished bulk update process status of the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-bulk-update-status-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBulkUpdateStatusV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetBulkUpdateStatusV1(context.Background()).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetBulkUpdateStatusV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetBulkUpdateStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBulkUpdateStatusV1`: []RoleGetAllBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetBulkUpdateStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-assigned-identities-v1
List identities assigned a role


[API Spec](https://developer.sailpoint.com/docs/api/get-role-assigned-identities-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role for which the assigned Identities are to be listed | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleAssignedIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role for which the assigned Identities are to be listed # string | ID of the Role for which the assigned Identities are to be listed
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name sw Joe` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional)
    sorters := `aliasName,name` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetRoleAssignedIdentitiesV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetRoleAssignedIdentitiesV1(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleAssignedIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleAssignedIdentitiesV1`: []RoleIdentity
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleAssignedIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-entitlements-v1
List role's entitlements
Get a list of entitlements associated with a specified role.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-entitlements-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Containing role&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121919ecca` // string | Containing role's ID. # string | Containing role's ID.
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetRoleEntitlementsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetRoleEntitlementsV1(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleEntitlementsV1`: []Entitlement
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-entitlements-v2
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
List role's entitlements
Get a list of entitlements assigned directly to a specified Role. Each entitlement includes its privilege level in `privilegeLevel`, with the direct, inherited, and effective levels.

Use either offset pagination (`offset` and `limit`) or cursor pagination (`cursor` and `limit`). When more results are available, the `x-next-cursor` response header contains the cursor for the next page. You can't use `cursor` together with an `offset` greater than 0, and `offset` plus `limit` can't be greater than 10,000.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-entitlements-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Containing role&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleEntitlementsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **cursor** | **string** | Opaque cursor returned in the &#x60;x-next-cursor&#x60; response header of the previous page. Pass it with the same &#x60;sorters&#x60; to get the next page of results. Can&#39;t be used with an *offset* greater than 0. | [default to &quot;&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **attribute**: *eq, sw, co*  **value**: *eq, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **privilegeLevel.effective**: *eq, in* | [default to &quot;&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, attribute, value, created, modified, privilegeLevel.effective**  The default sort is **created**. **id** is always added as the final sort field so that cursor pagination is stable. | [default to &quot;created&quot;]
 **forSegmentIds** | **string** | If present and not empty, filters entitlements to those assigned to the segment(s) with the specified IDs. Can&#39;t be used with *segmented-for-identity*. | [default to &quot;&quot;]
 **segmentedForIdentity** | **string** | If present, filters entitlements to those in the segments visible to the specified identity. The value must be the calling identity&#39;s ID or the special value **me**. Can&#39;t be used with *for-segment-ids*. | [default to &quot;&quot;]
 **includeUnsegmented** | **bool** | Whether the response list should contain unsegmented entitlements. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [default to true]

### Return type

[**[]EntitlementV2**](../models/entitlement-v2)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c91808a7813090a017814121919ecca` // string | Containing role's ID. # string | Containing role's ID.
    limit := 50 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    cursor := `eyJzb3J0IjpbImNyZWF0ZWQiLCJpZCJdLCJzZWFyY2hBZnRlciI6WyIxNjAyMTgyMDMyMDI5IiwiMmM5MSJdfQ` // string | Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same `sorters` to get the next page of results. Can't be used with an *offset* greater than 0. (optional) (default to "") # string | Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same `sorters` to get the next page of results. Can't be used with an *offset* greater than 0. (optional) (default to "")
    filters := `privilegeLevel.effective eq "HIGH"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **attribute**: *eq, sw, co*  **value**: *eq, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **privilegeLevel.effective**: *eq, in* (optional) (default to "") # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **attribute**: *eq, sw, co*  **value**: *eq, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **privilegeLevel.effective**: *eq, in* (optional) (default to "")
    sorters := `-privilegeLevel.effective,name` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, attribute, value, created, modified, privilegeLevel.effective**  The default sort is **created**. **id** is always added as the final sort field so that cursor pagination is stable. (optional) (default to "created") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, attribute, value, created, modified, privilegeLevel.effective**  The default sort is **created**. **id** is always added as the final sort field so that cursor pagination is stable. (optional) (default to "created")
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, filters entitlements to those assigned to the segment(s) with the specified IDs. Can't be used with *segmented-for-identity*. (optional) (default to "") # string | If present and not empty, filters entitlements to those assigned to the segment(s) with the specified IDs. Can't be used with *segmented-for-identity*. (optional) (default to "")
    segmentedForIdentity := `me` // string | If present, filters entitlements to those in the segments visible to the specified identity. The value must be the calling identity's ID or the special value **me**. Can't be used with *for-segment-ids*. (optional) (default to "") # string | If present, filters entitlements to those in the segments visible to the specified identity. The value must be the calling identity's ID or the special value **me**. Can't be used with *for-segment-ids*. (optional) (default to "")
    includeUnsegmented := false // bool | Whether the response list should contain unsegmented entitlements. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether the response list should contain unsegmented entitlements. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetRoleEntitlementsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetRoleEntitlementsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Cursor(cursor).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).SegmentedForIdentity(segmentedForIdentity).IncludeUnsegmented(includeUnsegmented).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleEntitlementsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleEntitlementsV2`: []EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleEntitlementsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-v1
Get a role
This API returns a Role by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role # string | ID of the Role

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetRoleV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetRoleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleV1`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-v2
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
Get a role
This API returns a Role by its ID. The response includes the Role's effective privilege level in `privilegeLevel.effective`, which is the highest effective privilege level among the entitlements assigned directly to the Role and the entitlements included in the Role's access profiles.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**RoleV2**](../models/role-v2)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role # string | ID of the Role

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.GetRoleV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolesAPI.GetRoleV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.GetRoleV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleV2`: RoleV2
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.GetRoleV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-roles-v1
List roles
This API returns a list of Roles.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-roles-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListRolesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `requestable eq false` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.ListRolesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.RolesAPI.ListRolesV1(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.ListRolesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListRolesV1`: []Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.ListRolesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-roles-v2
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
List roles
This API returns a list of Roles. Each Role includes its effective privilege level in `privilegeLevel.effective`, which is the highest effective privilege level among the entitlements assigned directly to the Role and the entitlements included in the Role's access profiles.

Use either offset pagination (`offset` and `limit`) or cursor pagination (`cursor` and `limit`). When more results are available, the `x-next-cursor` response header contains the cursor for the next page. Send that value in the `cursor` query parameter, with the same `sorters`, to get the next page. You can't use `cursor` together with an `offset` greater than 0, and `offset` plus `limit` can't be greater than 10,000. Use cursor pagination to page beyond 10,000 results.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-roles-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListRolesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [default to &quot;&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **cursor** | **string** | Opaque cursor returned in the &#x60;x-next-cursor&#x60; response header of the previous page. Pass it with the same &#x60;sorters&#x60; to get the next page of results. Can&#39;t be used with an *offset* greater than 0. | [default to &quot;&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [default to &quot;&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, privilegeLevel.effective**  The default sort is **name**. **id** is always added as the final sort field so that cursor pagination is stable. | [default to &quot;name&quot;]
 **forSegmentIds** | **string** | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. | [default to &quot;&quot;]
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [default to true]

### Return type

[**[]RoleV2**](../models/role-v2)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) (default to "") # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) (default to "")
    limit := 50 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    cursor := `eyJzb3J0IjpbIm5hbWUiLCJpZCJdLCJzZWFyY2hBZnRlciI6WyJSb2xlIDI1NjciLCIyYzkxIl19` // string | Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same `sorters` to get the next page of results. Can't be used with an *offset* greater than 0. (optional) (default to "") # string | Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same `sorters` to get the next page of results. Can't be used with an *offset* greater than 0. (optional) (default to "")
    filters := `privilegeLevel.effective in ("HIGH","MEDIUM")` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* (optional) (default to "") # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* (optional) (default to "")
    sorters := `-privilegeLevel.effective,name` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, privilegeLevel.effective**  The default sort is **name**. **id** is always added as the final sort field so that cursor pagination is stable. (optional) (default to "name") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, privilegeLevel.effective**  The default sort is **name**. **id** is always added as the final sort field so that cursor pagination is stable. (optional) (default to "name")
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional) (default to "") # string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional) (default to "")
    includeUnsegmented := false // bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.ListRolesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.RolesAPI.ListRolesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Cursor(cursor).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.ListRolesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListRolesV2`: []RoleV2
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.ListRolesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-role-v1
Patch a specified role
This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:

* name
* description
* enabled
* owner
* additionalOwners
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

[API Spec](https://developer.sailpoint.com/docs/api/patch-role-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Role to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchRoleV1Request struct via the builder pattern


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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121e121518` // string | ID of the Role to patch # string | ID of the Role to patch
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/requestable","value":true},{"op":"replace","path":"/enabled","value":true}]`) // []JsonPatchOperation | 

    var jsonPatchOperation []roles.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.PatchRoleV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.RolesAPI.PatchRoleV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.PatchRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchRoleV1`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.PatchRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-roles-by-filter-v1
Filter roles by metadata
This API returns a list of Role that filter by metadata and filter, it support filter by  both path parameter and attribute key and values.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, HELPDESK, CERT_ADMIN, REPORT_ADMIN or SOURCE_ADMIN  authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/search-roles-by-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchRolesByFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 
 **limit** | **int32** | Max number of results to return See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **forSegmentIds** | **string** | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | 
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [default to true]
 **roleListFilterDTO** | [**RoleListFilterDTO**](../models/role-list-filter-dto) |  | 

### Return type

[**[]Role**](../models/role)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    limit := 50 // int32 | Max number of results to return See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)
    rolelistfilterdtoJson := []byte(`{
          "ammKeyValues" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "secret" ]
          } ],
          "filters" : "dimensional eq false"
        }`) // RoleListFilterDTO |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.SearchRolesByFilterV1(context.Background()).Execute()
	  //resp, r, err := apiClient.RolesAPI.SearchRolesByFilterV1(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).RoleListFilterDTO(roleListFilterDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.SearchRolesByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchRolesByFilterV1`: []Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.SearchRolesByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-roles-by-filter-v2
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
Filter roles by metadata
This API returns a list of Roles filtered by Access Model Metadata and by filter expression. Filtering is supported by filter expression, by metadata attribute key and values, or by both together. Each Role includes its effective privilege level in `privilegeLevel.effective`.

The `filters` expression in the request body supports the same fields and operators as the `filters` query parameter of [List roles](#operation/listRolesV2), including **privilegeLevel.effective**: *eq, in*.

Use either offset pagination (`offset` and `limit`) or cursor pagination (`cursor` and `limit`). When more results are available, the `x-next-cursor` response header contains the cursor for the next page. Send that value in the `cursor` query parameter, with the same request body and `sorters`, to get the next page. You can't use `cursor` together with an `offset` greater than 0, and `offset` plus `limit` can't be greater than 10,000.

[API Spec](https://developer.sailpoint.com/docs/api/search-roles-by-filter-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchRolesByFilterV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **rolelistfilterdtov2** | [**Rolelistfilterdtov2**](../models/rolelistfilterdtov2) |  | 
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [default to &quot;&quot;]
 **limit** | **int32** | Max number of results to return See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **cursor** | **string** | Opaque cursor returned in the &#x60;x-next-cursor&#x60; response header of the previous page. Pass it with the same request body and &#x60;sorters&#x60; to get the next page of results. Can&#39;t be used with an *offset* greater than 0. | [default to &quot;&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, privilegeLevel.effective**  The default sort is **name**. **id** is always added as the final sort field so that cursor pagination is stable. | [default to &quot;name&quot;]
 **forSegmentIds** | **string** | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. | [default to &quot;&quot;]
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [default to true]

### Return type

[**[]RoleV2**](../models/role-v2)

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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    rolelistfilterdtov2Json := []byte(`{
          "ammKeyValues" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "secret" ]
          } ],
          "filters" : "privilegeLevel.effective in (\"HIGH\",\"MEDIUM\")"
        }`) // Rolelistfilterdtov2 | 
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) (default to "") # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) (default to "")
    limit := 50 // int32 | Max number of results to return See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 or omitted when *cursor* is specified. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    cursor := `eyJzb3J0IjpbIm5hbWUiLCJpZCJdLCJzZWFyY2hBZnRlciI6WyJSb2xlIDI1NjciLCIyYzkxIl19` // string | Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same request body and `sorters` to get the next page of results. Can't be used with an *offset* greater than 0. (optional) (default to "") # string | Opaque cursor returned in the `x-next-cursor` response header of the previous page. Pass it with the same request body and `sorters` to get the next page of results. Can't be used with an *offset* greater than 0. (optional) (default to "")
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, privilegeLevel.effective**  The default sort is **name**. **id** is always added as the final sort field so that cursor pagination is stable. (optional) (default to "name") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, privilegeLevel.effective**  The default sort is **name**. **id** is always added as the final sort field so that cursor pagination is stable. (optional) (default to "name")
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional) (default to "") # string | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional) (default to "")
    includeUnsegmented := false // bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional) (default to true)

    var rolelistfilterdtov2 roles.Rolelistfilterdtov2
    if err := json.Unmarshal(rolelistfilterdtov2Json, &rolelistfilterdtov2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.SearchRolesByFilterV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Rolelistfilterdtov2(rolelistfilterdtov2).Execute()
	  //resp, r, err := apiClient.RolesAPI.SearchRolesByFilterV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Rolelistfilterdtov2(rolelistfilterdtov2).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Cursor(cursor).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.SearchRolesByFilterV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchRolesByFilterV2`: []RoleV2
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.SearchRolesByFilterV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-attribute-key-and-value-to-role-v1
Add a metadata to role.
This API initialize a request to add a single Access Model Metadata to a role by attribute key and attribute value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum number of attributes in one role is 25. Custom metadata update, including ADD and REPLACE need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/update-attribute-key-and-value-to-role-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Id of a role | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAttributeKeyAndValueToRoleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `c24359c389374d0fb8585698a2189e3d` // string | The Id of a role # string | The Id of a role
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.UpdateAttributeKeyAndValueToRoleV1(context.Background(), id, attributeKey, attributeValue).Execute()
	  //resp, r, err := apiClient.RolesAPI.UpdateAttributeKeyAndValueToRoleV1(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateAttributeKeyAndValueToRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAttributeKeyAndValueToRoleV1`: Role
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateAttributeKeyAndValueToRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-roles-metadata-by-filter-v1
Bulk-update roles' metadata by filters
This API initiates a bulk update of metadata for one or more Roles by filter.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/update-roles-metadata-by-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRolesMetadataByFilterV1Request struct via the builder pattern


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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    rolemetadatabulkupdatebyfilterrequestJson := []byte(`{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : " requestable eq false",
          "replaceScope" : "ALL",
          "operation" : "REPLACE"
        }`) // RoleMetadataBulkUpdateByFilterRequest | 

    var roleMetadataBulkUpdateByFilterRequest roles.RoleMetadataBulkUpdateByFilterRequest
    if err := json.Unmarshal(rolemetadatabulkupdatebyfilterrequestJson, &roleMetadataBulkUpdateByFilterRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.UpdateRolesMetadataByFilterV1(context.Background()).RoleMetadataBulkUpdateByFilterRequest(roleMetadataBulkUpdateByFilterRequest).Execute()
	  //resp, r, err := apiClient.RolesAPI.UpdateRolesMetadataByFilterV1(context.Background()).RoleMetadataBulkUpdateByFilterRequest(roleMetadataBulkUpdateByFilterRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateRolesMetadataByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRolesMetadataByFilterV1`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateRolesMetadataByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-roles-metadata-by-ids-v1
Bulk-update roles' metadata by id
This API initiates a bulk update of metadata for one or more Roles by a list of Role Ids.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum role count in a single update request is 3000. The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/update-roles-metadata-by-ids-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRolesMetadataByIdsV1Request struct via the builder pattern


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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    rolemetadatabulkupdatebyidrequestJson := []byte(`{
          "roles" : [ "b1db89554cfa431cb8b9921ea38d9367" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ALL",
          "operation" : "REPLACE"
        }`) // RoleMetadataBulkUpdateByIdRequest | 

    var roleMetadataBulkUpdateByIdRequest roles.RoleMetadataBulkUpdateByIdRequest
    if err := json.Unmarshal(rolemetadatabulkupdatebyidrequestJson, &roleMetadataBulkUpdateByIdRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.UpdateRolesMetadataByIdsV1(context.Background()).RoleMetadataBulkUpdateByIdRequest(roleMetadataBulkUpdateByIdRequest).Execute()
	  //resp, r, err := apiClient.RolesAPI.UpdateRolesMetadataByIdsV1(context.Background()).RoleMetadataBulkUpdateByIdRequest(roleMetadataBulkUpdateByIdRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateRolesMetadataByIdsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRolesMetadataByIdsV1`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateRolesMetadataByIdsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-roles-metadata-by-query-v1
Bulk-update roles' metadata by query
This API initiates a bulk update of metadata for one or more Roles by query.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/update-roles-metadata-by-query-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRolesMetadataByQueryV1Request struct via the builder pattern


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
    roles "github.com/sailpoint-oss/golang-sdk/v3/roles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    rolemetadatabulkupdatebyqueryrequestJson := []byte(`{
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

    var roleMetadataBulkUpdateByQueryRequest roles.RoleMetadataBulkUpdateByQueryRequest
    if err := json.Unmarshal(rolemetadatabulkupdatebyqueryrequestJson, &roleMetadataBulkUpdateByQueryRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.RolesAPI.UpdateRolesMetadataByQueryV1(context.Background()).RoleMetadataBulkUpdateByQueryRequest(roleMetadataBulkUpdateByQueryRequest).Execute()
	  //resp, r, err := apiClient.RolesAPI.UpdateRolesMetadataByQueryV1(context.Background()).RoleMetadataBulkUpdateByQueryRequest(roleMetadataBulkUpdateByQueryRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.UpdateRolesMetadataByQueryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRolesMetadataByQueryV1`: RoleBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `RolesAPI.UpdateRolesMetadataByQueryV1`: %v\n", resp)
}
```

[[Back to top]](#)

