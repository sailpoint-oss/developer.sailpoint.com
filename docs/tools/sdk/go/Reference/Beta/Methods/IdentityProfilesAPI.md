---
id: beta-identity-profiles
title: IdentityProfiles
pagination_label: IdentityProfiles
sidebar_label: IdentityProfiles
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityProfiles', 'BetaIdentityProfiles'] 
slug: /tools/sdk/go/beta/methods/identity-profiles
tags: ['SDK', 'Software Development Kit', 'IdentityProfiles', 'BetaIdentityProfiles']
---

# IdentityProfilesAPI
  Use this API to implement and customize identity profile functionality.
With this functionality in place, administrators can manage identity profiles and configure them for use by identities throughout Identity Security Cloud.

Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.
This allows administrators to save time by applying identity profiles to any number of similar identities rather than configuring each one individually.

In Identity Security Cloud, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles.
This list shows some details about each identity profile, along with its status. They can select an identity profile to view and modify its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings.
Administrators can also use this page to create new identity profiles or delete existing ones.

Refer to [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) for more information about identity profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-profile**](#create-identity-profile) | **Post** `/identity-profiles` | Create identity profile
[**delete-identity-profile**](#delete-identity-profile) | **Delete** `/identity-profiles/{identity-profile-id}` | Delete identity profile
[**delete-identity-profiles**](#delete-identity-profiles) | **Post** `/identity-profiles/bulk-delete` | Delete identity profiles
[**export-identity-profiles**](#export-identity-profiles) | **Get** `/identity-profiles/export` | Export identity profiles
[**get-default-identity-attribute-config**](#get-default-identity-attribute-config) | **Get** `/identity-profiles/{identity-profile-id}/default-identity-attribute-config` | Default identity attribute config
[**get-identity-profile**](#get-identity-profile) | **Get** `/identity-profiles/{identity-profile-id}` | Get identity profile
[**import-identity-profiles**](#import-identity-profiles) | **Post** `/identity-profiles/import` | Import identity profiles
[**list-identity-profiles**](#list-identity-profiles) | **Get** `/identity-profiles` | List identity profiles
[**show-generate-identity-preview**](#show-generate-identity-preview) | **Post** `/identity-profiles/identity-preview` | Generate identity profile preview
[**sync-identity-profile**](#sync-identity-profile) | **Post** `/identity-profiles/{identity-profile-id}/process-identities` | Process identities under profile
[**update-identity-profile**](#update-identity-profile) | **Patch** `/identity-profiles/{identity-profile-id}` | Update identity profile


## create-identity-profile
Create identity profile
Create an identity profile.
A token with ORG_ADMIN authority is required to call this API to create an Identity Profile.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-identity-profile)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIdentityProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfile** | [**IdentityProfile**](../models/identity-profile) |  | 

### Return type

[**IdentityProfile**](../models/identity-profile)

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
    identityprofile := []byte(`{
          "owner" : {
            "name" : "William Wilson",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "type" : "IDENTITY"
          },
          "identityExceptionReportReference" : {
            "reportName" : "My annual report",
            "taskResultId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
          },
          "authoritativeSource" : {
            "name" : "HR Active Directory",
            "id" : "2c9180835d191a86015d28455b4b232a",
            "type" : "SOURCE"
          },
          "hasTimeBasedAttr" : true,
          "created" : "2023-01-03T21:16:22.432Z",
          "description" : "My custom flat file profile",
          "identityRefreshRequired" : true,
          "identityCount" : 8,
          "priority" : 10,
          "identityAttributeConfig" : {
            "attributeTransforms" : [ {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            }, {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            } ],
            "enabled" : true
          },
          "name" : "aName",
          "modified" : "2023-01-03T21:16:22.432Z",
          "id" : "id12345"
        }`) // IdentityProfile | 

    var identityProfile beta.IdentityProfile
    if err := json.Unmarshal(identityprofile, &identityProfile); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.CreateIdentityProfile(context.Background()).IdentityProfile(identityProfile).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.CreateIdentityProfile(context.Background()).IdentityProfile(identityProfile).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.CreateIdentityProfile``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateIdentityProfile`: IdentityProfile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.CreateIdentityProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-identity-profile
Delete identity profile
Delete an identity profile by ID.
On success, this endpoint will return a reference to the bulk delete task result.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TaskResultSimplified**](../models/task-result-simplified)

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
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity profile ID. # string | Identity profile ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.DeleteIdentityProfile(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.DeleteIdentityProfile(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.DeleteIdentityProfile``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteIdentityProfile`: TaskResultSimplified
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.DeleteIdentityProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-identity-profiles
Delete identity profiles
This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

A token with ORG_ADMIN authority is required to call this API.

The following rights are required to access this endpoint: idn:identity-profile:delete

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity-profiles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **[]string** | Identity Profile bulk delete request body. | 

### Return type

[**TaskResultSimplified**](../models/task-result-simplified)

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
    requestbody := []byte(``) // []string | Identity Profile bulk delete request body.

    var requestBody []beta.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.DeleteIdentityProfiles(context.Background()).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.DeleteIdentityProfiles(context.Background()).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.DeleteIdentityProfiles``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteIdentityProfiles`: TaskResultSimplified
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.DeleteIdentityProfiles`: %v\n", resp)
}
```

[[Back to top]](#)

## export-identity-profiles
Export identity profiles
This exports existing identity profiles in the format specified by the sp-config service.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-identity-profiles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportIdentityProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** | 

### Return type

[**[]IdentityProfileExportedObject**](../models/identity-profile-exported-object)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq 8c190e6787aa4ed9a90bd9d5344523fb` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional)
    sorters := `name,-priority` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.ExportIdentityProfiles(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.ExportIdentityProfiles(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ExportIdentityProfiles``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportIdentityProfiles`: []IdentityProfileExportedObject
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ExportIdentityProfiles`: %v\n", resp)
}
```

[[Back to top]](#)

## get-default-identity-attribute-config
Default identity attribute config
This returns the default identity attribute config
A token with ORG_ADMIN authority is required to call this API to get the default identity attribute config.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-default-identity-attribute-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | The Identity Profile ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultIdentityAttributeConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentityAttributeConfig**](../models/identity-attribute-config)

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
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | The Identity Profile ID # string | The Identity Profile ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.GetDefaultIdentityAttributeConfig(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.GetDefaultIdentityAttributeConfig(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.GetDefaultIdentityAttributeConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultIdentityAttributeConfig`: IdentityAttributeConfig
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.GetDefaultIdentityAttributeConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-profile
Get identity profile
Get a single identity profile by ID.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentityProfile**](../models/identity-profile)

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
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity profile ID. # string | Identity profile ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.GetIdentityProfile(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.GetIdentityProfile(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.GetIdentityProfile``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityProfile`: IdentityProfile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.GetIdentityProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## import-identity-profiles
Import identity profiles
This imports previously exported identity profiles.

[API Spec](https://developer.sailpoint.com/docs/api/beta/import-identity-profiles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportIdentityProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityProfileExportedObject** | [**[]IdentityProfileExportedObject**](../models/identity-profile-exported-object) | Previously exported Identity Profiles. | 

### Return type

[**ObjectImportResult**](../models/object-import-result)

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
    identityprofileexportedobject := []byte(``) // []IdentityProfileExportedObject | Previously exported Identity Profiles.

    var identityProfileExportedObject []beta.IdentityProfileExportedObject
    if err := json.Unmarshal(identityprofileexportedobject, &identityProfileExportedObject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.ImportIdentityProfiles(context.Background()).IdentityProfileExportedObject(identityProfileExportedObject).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.ImportIdentityProfiles(context.Background()).IdentityProfileExportedObject(identityProfileExportedObject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ImportIdentityProfiles``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportIdentityProfiles`: ObjectImportResult
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ImportIdentityProfiles`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-profiles
List identity profiles
Get a list of identity profiles, based on the specified query parameters.
A token with ORG_ADMIN or API authority is required to call this API to get a list of Identity Profiles.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identity-profiles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** | 

### Return type

[**[]IdentityProfile**](../models/identity-profile)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq 8c190e6787aa4ed9a90bd9d5344523fb` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional)
    sorters := `name,-priority` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.ListIdentityProfiles(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.ListIdentityProfiles(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ListIdentityProfiles``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentityProfiles`: []IdentityProfile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ListIdentityProfiles`: %v\n", resp)
}
```

[[Back to top]](#)

## show-generate-identity-preview
Generate identity profile preview
Use this API to generate a non-persisted preview of the identity object after applying `IdentityAttributeConfig` sent in request body.
This API only allows `accountAttribute`, `reference` and `rule` transform types in the `IdentityAttributeConfig` sent in the request body.
A token with ORG_ADMIN authority is required to call this API to generate an identity preview.

[API Spec](https://developer.sailpoint.com/docs/api/beta/show-generate-identity-preview)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiShowGenerateIdentityPreviewRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityPreviewRequest** | [**IdentityPreviewRequest**](../models/identity-preview-request) | Identity Preview request body. | 

### Return type

[**IdentityPreviewResponse**](../models/identity-preview-response)

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
    identitypreviewrequest := []byte(`{
          "identityId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "identityAttributeConfig" : {
            "attributeTransforms" : [ {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            }, {
              "transformDefinition" : {
                "attributes" : {
                  "attributeName" : "e-mail",
                  "sourceName" : "MySource",
                  "sourceId" : "2c9180877a826e68017a8c0b03da1a53"
                },
                "type" : "accountAttribute"
              },
              "identityAttributeName" : "email"
            } ],
            "enabled" : true
          }
        }`) // IdentityPreviewRequest | Identity Preview request body.

    var identityPreviewRequest beta.IdentityPreviewRequest
    if err := json.Unmarshal(identitypreviewrequest, &identityPreviewRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.ShowGenerateIdentityPreview(context.Background()).IdentityPreviewRequest(identityPreviewRequest).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.ShowGenerateIdentityPreview(context.Background()).IdentityPreviewRequest(identityPreviewRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ShowGenerateIdentityPreview``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShowGenerateIdentityPreview`: IdentityPreviewResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ShowGenerateIdentityPreview`: %v\n", resp)
}
```

[[Back to top]](#)

## sync-identity-profile
Process identities under profile
Process identities under the profile
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 
This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh.
This operation will perform the following activities on all identities under the identity profile.
1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity's correct manager through manager correlation. 3. Updates the identity's access according to their assigned lifecycle state. 4. Updates the identity's access based on role assignment criteria.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/sync-identity-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | The Identity Profile ID to be processed | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncIdentityProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

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
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | The Identity Profile ID to be processed # string | The Identity Profile ID to be processed

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.SyncIdentityProfile(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.SyncIdentityProfile(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.SyncIdentityProfile``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SyncIdentityProfile`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.SyncIdentityProfile`: %v\n", resp)
}
```

[[Back to top]](#)

## update-identity-profile
Update identity profile
Update the specified identity profile with this PATCH request. 
A token with ORG_ADMIN authority is required to call this API to update the Identity Profile.
These fields cannot be updated:
* id
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at once.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-identity-profile)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateIdentityProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**IdentityProfile**](../models/identity-profile)

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
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity profile ID. # string | Identity profile ID.
    jsonpatchoperation := []byte(`[{op=add, path=/identityAttributeConfig/attributeTransforms/0, value={identityAttributeName=location, transformDefinition={type=accountAttribute, attributes={sourceName=Employees, attributeName=location, sourceId=2c91808878b7d63b0178c66ffcdc4ce4}}}}]`) // []JsonPatchOperation | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []beta.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityProfilesAPI.UpdateIdentityProfile(context.Background(), identityProfileId).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.Beta.IdentityProfilesAPI.UpdateIdentityProfile(context.Background(), identityProfileId).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.UpdateIdentityProfile``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateIdentityProfile`: IdentityProfile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.UpdateIdentityProfile`: %v\n", resp)
}
```

[[Back to top]](#)

