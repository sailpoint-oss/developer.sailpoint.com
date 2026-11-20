# AccessProfiles

# AccessProfilesAPI
  Use this API to implement and customize access profile functionality. 
With this functionality in place, administrators can create access profiles and configure them for use throughout SailPoint Identity Security, enabling users to get the access they need quickly and securely.

Access profiles group entitlements, which represent access rights on sources. 

For example, an Active Directory source in SailPoint Identity Security can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

SailPoint Identity Security uses access profiles in many features, including the following:

- Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles.

- Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements. 

- Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile.

- Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity&#39;s role. 

In SailPoint Identity Security, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones. 
Administrators can enable and disable an access profile, and they can also make the following configurations: 

- Manage Entitlements: Manage the profile&#39;s access by adding and removing entitlements. 

- Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked. 
Do not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile.

- Multiple Account Options: Define the logic SailPoint Identity Security uses to provision access to an identity with multiple accounts on the source. 

Refer to [Managing Access Profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) for more information about access profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-profile-v1**](#create-access-profile-v1) | **Post** `/access-profiles/v1` | Create access profile
[**create-access-profile-v2**](#create-access-profile-v2) | **Post** `/access-profiles/v2` | Create access profile
[**delete-access-profile-v1**](#delete-access-profile-v1) | **Delete** `/access-profiles/v1/{id}` | Delete the specified access profile
[**delete-access-profile-v2**](#delete-access-profile-v2) | **Delete** `/access-profiles/v2/{id}` | Delete the specified access profile
[**delete-access-profiles-in-bulk-v1**](#delete-access-profiles-in-bulk-v1) | **Post** `/access-profiles/v1/bulk-delete` | Delete access profile(s)
[**delete-access-profiles-in-bulk-v2**](#delete-access-profiles-in-bulk-v2) | **Post** `/access-profiles/v2/bulk-delete` | Delete access profile(s)
[**delete-metadata-from-access-profile-by-key-and-value-v1**](#delete-metadata-from-access-profile-by-key-and-value-v1) | **Delete** `/access-profiles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from access profile
[**get-access-profile-entitlements-v1**](#get-access-profile-entitlements-v1) | **Get** `/access-profiles/v1/{id}/entitlements` | List access profile&#39;s entitlements
[**get-access-profile-entitlements-v2**](#get-access-profile-entitlements-v2) | **Get** `/access-profiles/v2/{id}/entitlements` | List access profile&#39;s entitlements
[**get-access-profile-v1**](#get-access-profile-v1) | **Get** `/access-profiles/v1/{id}` | Get an access profile
[**get-access-profile-v2**](#get-access-profile-v2) | **Get** `/access-profiles/v2/{id}` | Get an access profile
[**list-access-profiles-v1**](#list-access-profiles-v1) | **Get** `/access-profiles/v1` | List access profiles
[**list-access-profiles-v2**](#list-access-profiles-v2) | **Get** `/access-profiles/v2` | List access profiles
[**patch-access-profile-v1**](#patch-access-profile-v1) | **Patch** `/access-profiles/v1/{id}` | Patch a specified access profile
[**patch-access-profile-v2**](#patch-access-profile-v2) | **Patch** `/access-profiles/v2/{id}` | Patch a specified access profile
[**search-access-profiles-by-filter-v1**](#search-access-profiles-by-filter-v1) | **Post** `/access-profiles/v1/filter` | Filter access profiles by metadata
[**search-access-profiles-by-filter-v2**](#search-access-profiles-by-filter-v2) | **Post** `/access-profiles/v2/filter` | List access profiles by filter
[**update-access-profiles-in-bulk-v1**](#update-access-profiles-in-bulk-v1) | **Post** `/access-profiles/v1/bulk-update-requestable` | Update access profile(s) requestable field.
[**update-access-profiles-in-bulk-v2**](#update-access-profiles-in-bulk-v2) | **Post** `/access-profiles/v2/bulk-update-requestable` | Update access profile(s) requestable field.
[**update-access-profiles-metadata-by-filter-v1**](#update-access-profiles-metadata-by-filter-v1) | **Post** `/access-profiles/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**update-access-profiles-metadata-by-ids-v1**](#update-access-profiles-metadata-by-ids-v1) | **Post** `/access-profiles/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**update-access-profiles-metadata-by-query-v1**](#update-access-profiles-metadata-by-query-v1) | **Post** `/access-profiles/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query
[**update-attribute-key-and-value-to-access-profile-v1**](#update-attribute-key-and-value-to-access-profile-v1) | **Post** `/access-profiles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to access profile


## create-access-profile-v1
Create access profile
Create an access profile.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with access profile access requests.
A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-profile-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessProfileV1Request struct via the builder pattern


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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofileJson := []byte(`{
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
          "additionalOwners" : [ {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          }, {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          } ],
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
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "denialCommentsRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 6,
              "timeUnit" : "MONTHS"
            }
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
          "id" : "2c91808a7190d06e01719938fcd20792",
          "requestable" : true
        }`) // AccessProfile | 

    var accessProfile access_profiles.AccessProfile
    if err := json.Unmarshal(accessprofileJson, &accessProfile); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.CreateAccessProfileV1(context.Background()).AccessProfile(accessProfile).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.CreateAccessProfileV1(context.Background()).AccessProfile(accessProfile).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.CreateAccessProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessProfileV1`: AccessProfile
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.CreateAccessProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-access-profile-v2
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
Create access profile
Create an access profile.

This version accepts the same request body and applies the same validation as [Create Access Profile V1](https://developer.sailpoint.com/docs/api/create-access-profile-v-1). It returns the v2 access profile shape, which adds the read-only `privilegeLevel` field.

A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.
>**Note:** `privilegeLevel` is read-only and is ignored if supplied in the request body. It is calculated asynchronously from the access profile's entitlements, so it is typically absent from the create response.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-profile-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessProfileV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessprofilev2** | [**Accessprofilev2**](../models/accessprofilev2) |  | 

### Return type

[**Accessprofilev2**](../models/accessprofilev2)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessprofilev2Json := []byte(`{
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
          "privilegeLevel" : {
            "effective" : "MEDIUM"
          },
          "created" : "2021-03-01T22:32:58.104Z",
          "description" : "Collection of entitlements to read/write the employee database",
          "source" : {
            "name" : "ODS-AD-SOURCE",
            "id" : "2c91809773dee3610173fdb0b6061ef4",
            "type" : "SOURCE"
          },
          "enabled" : true,
          "additionalOwners" : [ {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          }, {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          } ],
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
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "denialCommentsRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 6,
              "timeUnit" : "MONTHS"
            }
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
          "id" : "2c91808a7190d06e01719938fcd20792",
          "requestable" : true
        }`) // Accessprofilev2 | 

    var accessprofilev2 access_profiles.Accessprofilev2
    if err := json.Unmarshal(accessprofilev2Json, &accessprofilev2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.CreateAccessProfileV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Accessprofilev2(accessprofilev2).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.CreateAccessProfileV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Accessprofilev2(accessprofilev2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.CreateAccessProfileV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessProfileV2`: Accessprofilev2
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.CreateAccessProfileV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-profile-v1
Delete the specified access profile
This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profile-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessProfileV1Request struct via the builder pattern


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
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Access Profile to delete # string | ID of the Access Profile to delete

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.AccessProfilesAPI.DeleteAccessProfileV1(context.Background(), id).Execute()
	  //r, err := apiClient.AccessProfilesAPI.DeleteAccessProfileV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteAccessProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-access-profile-v2
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
Delete the specified access profile
This API deletes an existing Access Profile.

This version behaves identically to [Delete the Specified Access Profile V1](https://developer.sailpoint.com/docs/api/delete-access-profile-v-1).

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profile-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessProfileV2Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Access Profile to delete # string | ID of the Access Profile to delete

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.AccessProfilesAPI.DeleteAccessProfileV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.AccessProfilesAPI.DeleteAccessProfileV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteAccessProfileV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-access-profiles-in-bulk-v1
Delete access profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profiles-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessProfilesInBulkV1Request struct via the builder pattern


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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofilebulkdeleterequestJson := []byte(`{
          "accessProfileIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ],
          "bestEffortOnly" : true
        }`) // AccessProfileBulkDeleteRequest | 

    var accessProfileBulkDeleteRequest access_profiles.AccessProfileBulkDeleteRequest
    if err := json.Unmarshal(accessprofilebulkdeleterequestJson, &accessProfileBulkDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.DeleteAccessProfilesInBulkV1(context.Background()).AccessProfileBulkDeleteRequest(accessProfileBulkDeleteRequest).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.DeleteAccessProfilesInBulkV1(context.Background()).AccessProfileBulkDeleteRequest(accessProfileBulkDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteAccessProfilesInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccessProfilesInBulkV1`: AccessProfileBulkDeleteResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.DeleteAccessProfilesInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-profiles-in-bulk-v2
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
Delete access profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.

This version behaves identically to [Delete Access Profile(s) V1](https://developer.sailpoint.com/docs/api/delete-access-profiles-in-bulk-v-1).

When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profiles-in-bulk-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessProfilesInBulkV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessprofilebulkdeleterequestJson := []byte(`{
          "accessProfileIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ],
          "bestEffortOnly" : true
        }`) // AccessProfileBulkDeleteRequest | 

    var accessProfileBulkDeleteRequest access_profiles.AccessProfileBulkDeleteRequest
    if err := json.Unmarshal(accessprofilebulkdeleterequestJson, &accessProfileBulkDeleteRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.DeleteAccessProfilesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessProfileBulkDeleteRequest(accessProfileBulkDeleteRequest).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.DeleteAccessProfilesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessProfileBulkDeleteRequest(accessProfileBulkDeleteRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteAccessProfilesInBulkV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccessProfilesInBulkV2`: AccessProfileBulkDeleteResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.DeleteAccessProfilesInBulkV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-metadata-from-access-profile-by-key-and-value-v1
Remove metadata from access profile
This API removes a single Access Model Metadata value from an access profile by attribute key and attribute value.

[API Spec](https://developer.sailpoint.com/docs/api/delete-metadata-from-access-profile-by-key-and-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The access profile&#39;s ID. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMetadataFromAccessProfileByKeyAndValueV1Request struct via the builder pattern


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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The access profile's ID. # string | The access profile's ID.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.AccessProfilesAPI.DeleteMetadataFromAccessProfileByKeyAndValueV1(context.Background(), id, attributeKey, attributeValue).Execute()
	  //r, err := apiClient.AccessProfilesAPI.DeleteMetadataFromAccessProfileByKeyAndValueV1(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.DeleteMetadataFromAccessProfileByKeyAndValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-access-profile-entitlements-v1
List access profile's entitlements
Use this API to get a list of an access profile's entitlements. 
A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-entitlements-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the access profile containing the entitlements. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessProfileEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the &#39;+&#39; symbol in their names.  | 
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
    id := `2c91808a7813090a017814121919ecca` // string | ID of the access profile containing the entitlements. # string | ID of the access profile containing the entitlements.
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileEntitlementsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileEntitlementsV1(context.Background(), id).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.GetAccessProfileEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessProfileEntitlementsV1`: []Entitlement
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.GetAccessProfileEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-profile-entitlements-v2
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
List access profile's entitlements
Get a list of an access profile's entitlements.

This version reads from Search Lite and returns a superset of the entitlement returned by [List Access Profile's Entitlements V1](https://developer.sailpoint.com/docs/api/get-access-profile-entitlements-v-1), adding the entitlement's `tags` and calculated `privilegeLevel`. It also supports opaque cursor pagination through the `cursor` parameter and `X-Next-Cursor` response header.

A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-entitlements-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the access profile containing the entitlements. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessProfileEntitlementsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a &#x60;cursor&#x60;, and &#x60;offset&#x60; plus &#x60;limit&#x60; must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **attribute**: *eq, co*  **value**: *eq, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **privilegeLevel.effective**: *eq, in*  Results are automatically scoped to entitlements belonging to the access profile. | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. | 
 **cursor** | **string** | Opaque cursor taken from the &#x60;X-Next-Cursor&#x60; header of a previous response, used to retrieve the next page of results. When you supply a cursor, &#x60;offset&#x60; must be 0. | 

### Return type

[**[]Accessprofileentitlementv2**](../models/accessprofileentitlementv2)

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
    id := `2c91808a7813090a017814121919ecca` // string | ID of the access profile containing the entitlements. # string | ID of the access profile containing the entitlements.
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a `cursor`, and `offset` plus `limit` must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a `cursor`, and `offset` plus `limit` must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **attribute**: *eq, co*  **value**: *eq, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **privilegeLevel.effective**: *eq, in*  Results are automatically scoped to entitlements belonging to the access profile. (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **attribute**: *eq, co*  **value**: *eq, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **privilegeLevel.effective**: *eq, in*  Results are automatically scoped to entitlements belonging to the access profile. (optional)
    sorters := `name,-id` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. (optional)
    cursor := `W3sic29ydCI6ImNyZWF0ZWQiLCJ2YWx1ZSI6IjIwMjEtMDMtMDFUMjI6MzI6NTguMTA0WiJ9LHsic29ydCI6ImlkIiwidmFsdWUiOiIyYzkxODA4YTcxOTBkMDZlMDE3MTk5MzhmY2QyMDc5MiJ9XQ` // string | Opaque cursor taken from the `X-Next-Cursor` header of a previous response, used to retrieve the next page of results. When you supply a cursor, `offset` must be 0. (optional) # string | Opaque cursor taken from the `X-Next-Cursor` header of a previous response, used to retrieve the next page of results. When you supply a cursor, `offset` must be 0. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileEntitlementsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileEntitlementsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Cursor(cursor).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.GetAccessProfileEntitlementsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessProfileEntitlementsV2`: []Accessprofileentitlementv2
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.GetAccessProfileEntitlementsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-profile-v1
Get an access profile
This API returns an Access Profile by its ID.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with access profile access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessProfileV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Access Profile # string | ID of the Access Profile

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.GetAccessProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessProfileV1`: AccessProfile
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.GetAccessProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-profile-v2
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
Get an access profile
Get an access profile by its ID.

This version reads from Search Lite and returns the same access profile shape as [Get Access Profile V1](https://developer.sailpoint.com/docs/api/get-access-profile-v-1), with the calculated `privilegeLevel` field added.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessProfileV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**Accessprofilev2**](../models/accessprofilev2)

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
    id := `2c9180837ca6693d017ca8d097500149` // string | ID of the Access Profile # string | ID of the Access Profile

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.GetAccessProfileV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.GetAccessProfileV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessProfileV2`: Accessprofilev2
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.GetAccessProfileV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-profiles-v1
List access profiles
Get a list of access profiles.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/list-access-profiles-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessProfilesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forSubadmin** | **string** | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity&#39;s ID.  If you specify an identity that isn&#39;t a subadmin, the API returns a 400 Bad Request error. | 
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the &#39;+&#39; symbol in their names.  | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    forSubadmin := `8c190e6787aa4ed9a90bd9d5344523fb` // string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "SailPoint Support"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the '+' symbol in their names.  (optional)
    sorters := `name,-modified` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true) # bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.ListAccessProfilesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.ListAccessProfilesV1(context.Background()).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.ListAccessProfilesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessProfilesV1`: []AccessProfile
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.ListAccessProfilesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-profiles-v2
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
List access profiles
Get a list of access profiles.

This version reads from Search Lite and returns the same access profile shape as [List Access Profiles V1](https://developer.sailpoint.com/docs/api/list-access-profiles-v-1), with two additions: the calculated `privilegeLevel` field, and opaque cursor pagination through the `cursor` parameter and `X-Next-Cursor` response header.

>**Note:** When you omit `sorters`, results are sorted by `created` ascending. For deterministic ordering across pages, always specify explicit sorters. When you use cursor pagination, include `id` in `sorters`; the service appends it automatically if you omit it.

>**Note:** `offset` and `cursor` are mutually exclusive. Use `offset=0` along with a cursor value taken from a prior response's `X-Next-Cursor` header.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-profiles-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessProfilesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **forSubadmin** | **string** | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity&#39;s ID.  If you specify an identity that isn&#39;t a subadmin, the API returns a 400 Bad Request error. | 
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a &#x60;cursor&#x60;, and &#x60;offset&#x60; plus &#x60;limit&#x60; must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **requestable**: *eq*  **source.id**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. | 
 **forSegmentIds** | **string** | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | 
 **includeUnsegmented** | **bool** | Indicates whether the response list should contain unsegmented access profiles. If &#x60;for-segment-ids&#x60; is absent or empty, specifying *include-unsegmented* as &#x60;false&#x60; results in an error. | [default to true]
 **cursor** | **string** | Opaque cursor taken from the &#x60;X-Next-Cursor&#x60; header of a previous response, used to retrieve the next page of results. When you supply a cursor, &#x60;offset&#x60; must be 0. | 

### Return type

[**[]Accessprofilev2**](../models/accessprofilev2)

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
    forSubadmin := `8c190e6787aa4ed9a90bd9d5344523fb` // string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit := 50 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a `cursor`, and `offset` plus `limit` must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a `cursor`, and `offset` plus `limit` must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name co "Developer"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **requestable**: *eq*  **source.id**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co*  **created**: *lt, le, gt, ge*  **modified**: *lt, le, gt, ge*  **requestable**: *eq*  **source.id**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **dimensional**: *eq*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* (optional)
    sorters := `name,-id` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true) # bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true)
    cursor := `W3sic29ydCI6ImNyZWF0ZWQiLCJ2YWx1ZSI6IjIwMjEtMDMtMDFUMjI6MzI6NTguMTA0WiJ9LHsic29ydCI6ImlkIiwidmFsdWUiOiIyYzkxODA4YTcxOTBkMDZlMDE3MTk5MzhmY2QyMDc5MiJ9XQ` // string | Opaque cursor taken from the `X-Next-Cursor` header of a previous response, used to retrieve the next page of results. When you supply a cursor, `offset` must be 0. (optional) # string | Opaque cursor taken from the `X-Next-Cursor` header of a previous response, used to retrieve the next page of results. When you supply a cursor, `offset` must be 0. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.ListAccessProfilesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.ListAccessProfilesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Cursor(cursor).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.ListAccessProfilesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessProfilesV2`: []Accessprofilev2
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.ListAccessProfilesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-access-profile-v1
Patch a specified access profile
This API updates an existing Access Profile. The following fields are patchable:

**name**

**description**

**enabled**

**owner**

**additionalOwners**

**requestable**

**accessRequestConfig**

**revokeRequestConfig**

**segments**

**entitlements**

**provisioningCriteria**

**source** (must be updated with entitlements belonging to new source in the same API call)

If you need to change the `source` of the access profile, you can do so only if you update the `entitlements` in the same API call.  The new entitlements can only come from the target source that you want to change to.  Look for the example "Replace Source" in the examples dropdown.

Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with access profile access requests.

A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

[API Spec](https://developer.sailpoint.com/docs/api/patch-access-profile-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchAccessProfileV1Request struct via the builder pattern


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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Access Profile to patch # string | ID of the Access Profile to patch
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/entitlements","value":[{"id":"2c9180857725c14301772a93bb77242d","type":"ENTITLEMENT","name":"AD User Group"}]}]`) // []JsonPatchOperation | 

    var jsonPatchOperation []access_profiles.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.PatchAccessProfileV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.PatchAccessProfileV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.PatchAccessProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAccessProfileV1`: AccessProfile
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.PatchAccessProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-access-profile-v2
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
Patch a specified access profile
This API updates an existing Access Profile.

This version patches the same fields as [Patch a Specified Access Profile V1](https://developer.sailpoint.com/docs/api/patch-access-profile-v-1). It returns the v2 access profile shape, which adds the read-only `privilegeLevel` field.

The following fields are patchable:

**name**

**description**

**enabled**

**owner**

**additionalOwners**

**requestable**

**accessRequestConfig**

**revocationRequestConfig**

**segments**

**entitlements**

**provisioningCriteria**

**source** (must be updated with entitlements belonging to new source in the same API call)

If you need to change the `source` of the access profile, you can do so only if you update the `entitlements` in the same API call.  The new entitlements can only come from the target source that you want to change to.  Look for the example "Replace Source" in the examples dropdown.

A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

>**Note:** `privilegeLevel` is read-only and cannot be patched. Changing the access profile's entitlements recalculates it asynchronously, so the patch response may still show the previous value.

[API Spec](https://developer.sailpoint.com/docs/api/patch-access-profile-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Access Profile to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchAccessProfileV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**Accessprofilev2**](../models/accessprofilev2)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Access Profile to patch # string | ID of the Access Profile to patch
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/entitlements","value":[{"id":"2c9180857725c14301772a93bb77242d","type":"ENTITLEMENT","name":"AD User Group"}]}]`) // []JsonPatchOperation | 

    var jsonPatchOperation []access_profiles.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.PatchAccessProfileV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.PatchAccessProfileV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.PatchAccessProfileV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAccessProfileV2`: Accessprofilev2
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.PatchAccessProfileV2`: %v\n", resp)
}
```

[[Back to top]](#)

## search-access-profiles-by-filter-v1
Filter access profiles by metadata
Get a list of access profiles filtered by Access Model Metadata and by filter expression. Filtering is supported by filter expression, by metadata attribute key and values, or by both together.

[API Spec](https://developer.sailpoint.com/docs/api/search-access-profiles-by-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAccessProfilesByFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileListFilterDTO** | [**AccessProfileListFilterDTO**](../models/access-profile-list-filter-dto) |  | 
 **forSubadmin** | **string** | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity&#39;s ID.  If you specify an identity that isn&#39;t a subadmin, the API returns a 400 Bad Request error. | 
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | 
 **forSegmentIds** | **string** | Filters the returned list to those access profiles assigned to the specified segment IDs. | 
 **includeUnsegmented** | **bool** | Whether the returned list includes unsegmented access profiles. | [default to true]

### Return type

[**[]AccessProfile**](../models/access-profile)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofilelistfilterdtoJson := []byte(`{
          "ammKeyValues" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "secret" ]
          } ],
          "filters" : "requestable eq false"
        }`) // AccessProfileListFilterDTO | 
    forSubadmin := `8c190e6787aa4ed9a90bd9d5344523fb` // string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit := 50 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    forSegmentIds := `0b5c9f2d-1e1b-4b2f-9b1a-0e7f4a6c2d3e` // string | Filters the returned list to those access profiles assigned to the specified segment IDs. (optional) # string | Filters the returned list to those access profiles assigned to the specified segment IDs. (optional)
    includeUnsegmented := true // bool | Whether the returned list includes unsegmented access profiles. (optional) (default to true) # bool | Whether the returned list includes unsegmented access profiles. (optional) (default to true)

    var accessProfileListFilterDTO access_profiles.AccessProfileListFilterDTO
    if err := json.Unmarshal(accessprofilelistfilterdtoJson, &accessProfileListFilterDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.SearchAccessProfilesByFilterV1(context.Background()).AccessProfileListFilterDTO(accessProfileListFilterDTO).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.SearchAccessProfilesByFilterV1(context.Background()).AccessProfileListFilterDTO(accessProfileListFilterDTO).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.SearchAccessProfilesByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchAccessProfilesByFilterV1`: []AccessProfile
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.SearchAccessProfilesByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## search-access-profiles-by-filter-v2
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
List access profiles by filter
Get a list of access profiles, supplying the filter criteria and access model metadata key/values in the request body rather than as query parameters.

Use this endpoint when you need to filter by access model metadata, or when your filter expression is too long to pass as a query parameter. Pagination, sorting, subadmin scoping, and segment scoping behave the same as [List Access Profiles V2](https://developer.sailpoint.com/docs/api/list-access-profiles-v-2), including opaque cursor pagination through the `cursor` parameter and `X-Next-Cursor` response header.

[API Spec](https://developer.sailpoint.com/docs/api/search-access-profiles-by-filter-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAccessProfilesByFilterV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessProfileListFilterV2** | [**AccessProfileListFilterV2**](../models/access-profile-list-filter-v2) |  | 
 **forSubadmin** | **string** | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity&#39;s ID.  If you specify an identity that isn&#39;t a subadmin, the API returns a 400 Bad Request error. | 
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a &#x60;cursor&#x60;, and &#x60;offset&#x60; plus &#x60;limit&#x60; must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. | 
 **forSegmentIds** | **string** | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | 
 **includeUnsegmented** | **bool** | Indicates whether the response list should contain unsegmented access profiles. If &#x60;for-segment-ids&#x60; is absent or empty, specifying *include-unsegmented* as &#x60;false&#x60; results in an error. | [default to true]
 **cursor** | **string** | Opaque cursor taken from the &#x60;X-Next-Cursor&#x60; header of a previous response, used to retrieve the next page of results. When you supply a cursor, &#x60;offset&#x60; must be 0. | 

### Return type

[**[]Accessprofilev2**](../models/accessprofilev2)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessprofilelistfilterv2Json := []byte(`{
          "ammKeyValues" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "secret" ]
          } ],
          "filters" : "privilegeLevel.effective eq \"HIGH\""
        }`) // AccessProfileListFilterV2 | 
    forSubadmin := `8c190e6787aa4ed9a90bd9d5344523fb` // string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional) # string | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity's ID.  If you specify an identity that isn't a subadmin, the API returns a 400 Bad Request error. (optional)
    limit := 50 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a `cursor`, and `offset` plus `limit` must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Must be 0 when you supply a `cursor`, and `offset` plus `limit` must not exceed 10000.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name,-id` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, privilegeLevel.effective**  Defaults to **created** ascending when omitted. (optional)
    forSegmentIds := `0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional) # string | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    includeUnsegmented := false // bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true) # bool | Indicates whether the response list should contain unsegmented access profiles. If `for-segment-ids` is absent or empty, specifying *include-unsegmented* as `false` results in an error. (optional) (default to true)
    cursor := `W3sic29ydCI6ImNyZWF0ZWQiLCJ2YWx1ZSI6IjIwMjEtMDMtMDFUMjI6MzI6NTguMTA0WiJ9LHsic29ydCI6ImlkIiwidmFsdWUiOiIyYzkxODA4YTcxOTBkMDZlMDE3MTk5MzhmY2QyMDc5MiJ9XQ` // string | Opaque cursor taken from the `X-Next-Cursor` header of a previous response, used to retrieve the next page of results. When you supply a cursor, `offset` must be 0. (optional) # string | Opaque cursor taken from the `X-Next-Cursor` header of a previous response, used to retrieve the next page of results. When you supply a cursor, `offset` must be 0. (optional)

    var accessProfileListFilterV2 access_profiles.AccessProfileListFilterV2
    if err := json.Unmarshal(accessprofilelistfilterv2Json, &accessProfileListFilterV2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.SearchAccessProfilesByFilterV2(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessProfileListFilterV2(accessProfileListFilterV2).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.SearchAccessProfilesByFilterV2(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessProfileListFilterV2(accessProfileListFilterV2).ForSubadmin(forSubadmin).Limit(limit).Offset(offset).Count(count).Sorters(sorters).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Cursor(cursor).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.SearchAccessProfilesByFilterV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchAccessProfilesByFilterV2`: []Accessprofilev2
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.SearchAccessProfilesByFilterV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-profiles-in-bulk-v1
Update access profile(s) requestable field.
This API initiates a bulk update of field requestable for one or more Access Profiles.

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
 A SOURCE_SUBADMIN may only use this API to update Access Profiles which are associated with Sources they are able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessProfilesInBulkV1Request struct via the builder pattern


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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofilebulkupdaterequestinnerJson := []byte(`[{"id":"464ae7bf-791e-49fd-b746-06a2e4a89635","requestable":false}]`) // []AccessProfileBulkUpdateRequestInner | 

    var accessProfileBulkUpdateRequestInner []access_profiles.AccessProfileBulkUpdateRequestInner
    if err := json.Unmarshal(accessprofilebulkupdaterequestinnerJson, &accessProfileBulkUpdateRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesInBulkV1(context.Background()).AccessProfileBulkUpdateRequestInner(accessProfileBulkUpdateRequestInner).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesInBulkV1(context.Background()).AccessProfileBulkUpdateRequestInner(accessProfileBulkUpdateRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAccessProfilesInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessProfilesInBulkV1`: []AccessProfileUpdateItem
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAccessProfilesInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-profiles-in-bulk-v2
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
Update access profile(s) requestable field.
This API initiates a bulk update of field requestable for one or more Access Profiles.

This version behaves identically to [Update Access Profile(s) Requestable Field V1](https://developer.sailpoint.com/docs/api/update-access-profiles-in-bulk-v-1).

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
 A SOURCE_SUBADMIN may only use this API to update Access Profiles which are associated with Sources they are able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-in-bulk-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessProfilesInBulkV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessprofilebulkupdaterequestinnerJson := []byte(`[{"id":"464ae7bf-791e-49fd-b746-06a2e4a89635","requestable":false}]`) // []AccessProfileBulkUpdateRequestInner | 

    var accessProfileBulkUpdateRequestInner []access_profiles.AccessProfileBulkUpdateRequestInner
    if err := json.Unmarshal(accessprofilebulkupdaterequestinnerJson, &accessProfileBulkUpdateRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessProfileBulkUpdateRequestInner(accessProfileBulkUpdateRequestInner).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessProfileBulkUpdateRequestInner(accessProfileBulkUpdateRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAccessProfilesInBulkV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessProfilesInBulkV2`: []AccessProfileUpdateItem
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAccessProfilesInBulkV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-profiles-metadata-by-filter-v1
Bulk-update metadata by filter
This API initiates a bulk update of Access Model Metadata for every access profile matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessProfilesMetadataByFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileMetadataBulkUpdateByFilterRequest** | [**AccessProfileMetadataBulkUpdateByFilterRequest**](../models/access-profile-metadata-bulk-update-by-filter-request) |  | 

### Return type

[**AccessProfileMetadataBulkUpdateResponse**](../models/access-profile-metadata-bulk-update-response)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofilemetadatabulkupdatebyfilterrequestJson := []byte(`{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : "requestable eq false",
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }`) // AccessProfileMetadataBulkUpdateByFilterRequest | 

    var accessProfileMetadataBulkUpdateByFilterRequest access_profiles.AccessProfileMetadataBulkUpdateByFilterRequest
    if err := json.Unmarshal(accessprofilemetadatabulkupdatebyfilterrequestJson, &accessProfileMetadataBulkUpdateByFilterRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesMetadataByFilterV1(context.Background()).AccessProfileMetadataBulkUpdateByFilterRequest(accessProfileMetadataBulkUpdateByFilterRequest).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesMetadataByFilterV1(context.Background()).AccessProfileMetadataBulkUpdateByFilterRequest(accessProfileMetadataBulkUpdateByFilterRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAccessProfilesMetadataByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessProfilesMetadataByFilterV1`: AccessProfileMetadataBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAccessProfilesMetadataByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-profiles-metadata-by-ids-v1
Bulk-update metadata by ids
This API initiates a bulk update of Access Model Metadata for one or more access profiles by a list of access profile IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum access profile count in a single request is 3000. A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-ids-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessProfilesMetadataByIdsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileMetadataBulkUpdateByIdRequest** | [**AccessProfileMetadataBulkUpdateByIdRequest**](../models/access-profile-metadata-bulk-update-by-id-request) |  | 

### Return type

[**AccessProfileMetadataBulkUpdateResponse**](../models/access-profile-metadata-bulk-update-response)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofilemetadatabulkupdatebyidrequestJson := []byte(`{
          "accessProfiles" : [ "b1db89554cfa431cb8b9921ea38d9367" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }`) // AccessProfileMetadataBulkUpdateByIdRequest | 

    var accessProfileMetadataBulkUpdateByIdRequest access_profiles.AccessProfileMetadataBulkUpdateByIdRequest
    if err := json.Unmarshal(accessprofilemetadatabulkupdatebyidrequestJson, &accessProfileMetadataBulkUpdateByIdRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesMetadataByIdsV1(context.Background()).AccessProfileMetadataBulkUpdateByIdRequest(accessProfileMetadataBulkUpdateByIdRequest).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesMetadataByIdsV1(context.Background()).AccessProfileMetadataBulkUpdateByIdRequest(accessProfileMetadataBulkUpdateByIdRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAccessProfilesMetadataByIdsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessProfilesMetadataByIdsV1`: AccessProfileMetadataBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAccessProfilesMetadataByIdsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-profiles-metadata-by-query-v1
Bulk-update metadata by query
This API initiates a bulk update of Access Model Metadata for every access profile matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-query-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessProfilesMetadataByQueryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessProfileMetadataBulkUpdateByQueryRequest** | [**AccessProfileMetadataBulkUpdateByQueryRequest**](../models/access-profile-metadata-bulk-update-by-query-request) |  | 

### Return type

[**AccessProfileMetadataBulkUpdateResponse**](../models/access-profile-metadata-bulk-update-response)

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
    access_profiles "github.com/sailpoint-oss/golang-sdk/v3/access_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessprofilemetadatabulkupdatebyqueryrequestJson := []byte(`{
          "query" : {
            "indices" : [ "accessprofiles" ],
            "queryType" : "TEXT",
            "textQuery" : {
              "terms" : [ "test123" ],
              "fields" : [ "id" ],
              "matchAny" : false,
              "contains" : true
            },
            "includeNested" : false
          },
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }`) // AccessProfileMetadataBulkUpdateByQueryRequest | 

    var accessProfileMetadataBulkUpdateByQueryRequest access_profiles.AccessProfileMetadataBulkUpdateByQueryRequest
    if err := json.Unmarshal(accessprofilemetadatabulkupdatebyqueryrequestJson, &accessProfileMetadataBulkUpdateByQueryRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesMetadataByQueryV1(context.Background()).AccessProfileMetadataBulkUpdateByQueryRequest(accessProfileMetadataBulkUpdateByQueryRequest).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.UpdateAccessProfilesMetadataByQueryV1(context.Background()).AccessProfileMetadataBulkUpdateByQueryRequest(accessProfileMetadataBulkUpdateByQueryRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAccessProfilesMetadataByQueryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessProfilesMetadataByQueryV1`: AccessProfileMetadataBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAccessProfilesMetadataByQueryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-attribute-key-and-value-to-access-profile-v1
Add metadata to access profile
This API adds a single Access Model Metadata value to an access profile by attribute key and attribute value. A single access profile cannot be assigned more than 25 metadata values. Adding custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-attribute-key-and-value-to-access-profile-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The access profile&#39;s ID. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAttributeKeyAndValueToAccessProfileV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `c24359c389374d0fb8585698a2189e3d` // string | The access profile's ID. # string | The access profile's ID.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessProfilesAPI.UpdateAttributeKeyAndValueToAccessProfileV1(context.Background(), id, attributeKey, attributeValue).Execute()
	  //resp, r, err := apiClient.AccessProfilesAPI.UpdateAttributeKeyAndValueToAccessProfileV1(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessProfilesAPI.UpdateAttributeKeyAndValueToAccessProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAttributeKeyAndValueToAccessProfileV1`: AccessProfile
    fmt.Fprintf(os.Stdout, "Response from `AccessProfilesAPI.UpdateAttributeKeyAndValueToAccessProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

