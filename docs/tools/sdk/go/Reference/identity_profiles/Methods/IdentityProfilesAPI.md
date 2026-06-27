---
id: v1-identity-profiles
title: IdentityProfiles
pagination_label: IdentityProfiles
sidebar_label: IdentityProfiles
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityProfiles', 'V1IdentityProfiles'] 
slug: /tools/sdk/go/identityprofiles/methods/identity-profiles
tags: ['SDK', 'Software Development Kit', 'IdentityProfiles', 'V1IdentityProfiles']
---

# IdentityProfilesAPI
  Use this API to implement identity profile functionality. 
With this functionality in place, administrators can view identity profiles and their configurations. 

Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.  

In Identity Security Cloud, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles. 
This list shows some details about each identity profile, along with its status. 
They can select an identity profile to view its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings. 

Refer to [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) for more information about identity profiles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-profile-v1**](#create-identity-profile-v1) | **Post** `/identity-profiles/v1` | Create identity profile
[**delete-identity-profile-v1**](#delete-identity-profile-v1) | **Delete** `/identity-profiles/v1/{identity-profile-id}` | Delete identity profile
[**delete-identity-profiles-v1**](#delete-identity-profiles-v1) | **Post** `/identity-profiles/v1/bulk-delete` | Delete identity profiles
[**export-identity-profiles-v1**](#export-identity-profiles-v1) | **Get** `/identity-profiles/v1/export` | Export identity profiles
[**generate-identity-preview-v1**](#generate-identity-preview-v1) | **Post** `/identity-profiles/v1/identity-preview` | Generate identity profile preview
[**get-default-identity-attribute-config-v1**](#get-default-identity-attribute-config-v1) | **Get** `/identity-profiles/v1/{identity-profile-id}/default-identity-attribute-config` | Get default identity attribute config
[**get-identity-profile-v1**](#get-identity-profile-v1) | **Get** `/identity-profiles/v1/{identity-profile-id}` | Get identity profile
[**import-identity-profiles-v1**](#import-identity-profiles-v1) | **Post** `/identity-profiles/v1/import` | Import identity profiles
[**list-identity-profiles-v1**](#list-identity-profiles-v1) | **Get** `/identity-profiles/v1` | List identity profiles
[**sync-identity-profile-v1**](#sync-identity-profile-v1) | **Post** `/identity-profiles/v1/{identity-profile-id}/process-identities` | Process identities under profile
[**update-identity-profile-v1**](#update-identity-profile-v1) | **Patch** `/identity-profiles/v1/{identity-profile-id}` | Update identity profile


## create-identity-profile-v1
Create identity profile
Creates an identity profile.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-profile-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIdentityProfileV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityprofile** | [**Identityprofile**](../models/identityprofile) |  | 

### Return type

[**Identityprofile**](../models/identityprofile)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityprofile := []byte(``) // Identityprofile | 

    var identityprofile v1.Identityprofile
    if err := json.Unmarshal(identityprofile, &identityprofile); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.CreateIdentityProfileV1(context.Background()).Identityprofile(identityprofile).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.CreateIdentityProfileV1(context.Background()).Identityprofile(identityprofile).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.CreateIdentityProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateIdentityProfileV1`: Identityprofile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.CreateIdentityProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-identity-profile-v1
Delete identity profile
Delete an identity profile by ID.
On success, this endpoint will return a reference to the bulk delete task result.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-profile-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityProfileV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Taskresultsimplified**](../models/taskresultsimplified)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity profile ID. # string | Identity profile ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.DeleteIdentityProfileV1(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.DeleteIdentityProfileV1(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.DeleteIdentityProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteIdentityProfileV1`: Taskresultsimplified
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.DeleteIdentityProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-identity-profiles-v1
Delete identity profiles
This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

The following rights are required to access this endpoint: idn:identity-profile:delete

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-profiles-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityProfilesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **[]string** | Identity Profile bulk delete request body. | 

### Return type

[**Taskresultsimplified**](../models/taskresultsimplified)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    requestbody := []byte(``) // []string | Identity Profile bulk delete request body.

    var requestBody []v1.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.DeleteIdentityProfilesV1(context.Background()).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.DeleteIdentityProfilesV1(context.Background()).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.DeleteIdentityProfilesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteIdentityProfilesV1`: Taskresultsimplified
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.DeleteIdentityProfilesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## export-identity-profiles-v1
Export identity profiles
This exports existing identity profiles in the format specified by the sp-config service.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-identity-profiles-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportIdentityProfilesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** | 

### Return type

[**[]Identityprofileexportedobject**](../models/identityprofileexportedobject)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "ef38f94347e94562b5bb8424a56397d8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.ExportIdentityProfilesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.ExportIdentityProfilesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ExportIdentityProfilesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportIdentityProfilesV1`: []Identityprofileexportedobject
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ExportIdentityProfilesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## generate-identity-preview-v1
Generate identity profile preview
This generates a non-persisted IdentityDetails object that will represent as the preview of the identities attribute when the given policy''s attribute config is applied.

[API Spec](https://developer.sailpoint.com/docs/api/v1/generate-identity-preview-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGenerateIdentityPreviewV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identitypreviewrequest** | [**Identitypreviewrequest**](../models/identitypreviewrequest) | Identity Preview request body. | 

### Return type

[**Identitypreviewresponse**](../models/identitypreviewresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identitypreviewrequest := []byte(``) // Identitypreviewrequest | Identity Preview request body.

    var identitypreviewrequest v1.Identitypreviewrequest
    if err := json.Unmarshal(identitypreviewrequest, &identitypreviewrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.GenerateIdentityPreviewV1(context.Background()).Identitypreviewrequest(identitypreviewrequest).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.GenerateIdentityPreviewV1(context.Background()).Identitypreviewrequest(identitypreviewrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.GenerateIdentityPreviewV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenerateIdentityPreviewV1`: Identitypreviewresponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.GenerateIdentityPreviewV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-default-identity-attribute-config-v1
Get default identity attribute config
This returns the default identity attribute config.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-default-identity-attribute-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | The Identity Profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultIdentityAttributeConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Identityattributeconfig**](../models/identityattributeconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | The Identity Profile ID. # string | The Identity Profile ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.GetDefaultIdentityAttributeConfigV1(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.GetDefaultIdentityAttributeConfigV1(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.GetDefaultIdentityAttributeConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultIdentityAttributeConfigV1`: Identityattributeconfig
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.GetDefaultIdentityAttributeConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-profile-v1
Get identity profile
Get a single identity profile by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-profile-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityProfileV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Identityprofile**](../models/identityprofile)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityProfileId := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | Identity profile ID. # string | Identity profile ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.GetIdentityProfileV1(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.GetIdentityProfileV1(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.GetIdentityProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityProfileV1`: Identityprofile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.GetIdentityProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-identity-profiles-v1
Import identity profiles
This imports previously exported identity profiles.

[API Spec](https://developer.sailpoint.com/docs/api/v1/import-identity-profiles-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportIdentityProfilesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityprofileexportedobject** | [**[]Identityprofileexportedobject**](../models/identityprofileexportedobject) | Previously exported Identity Profiles. | 

### Return type

[**Objectimportresult**](../models/objectimportresult)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityprofileexportedobject := []byte(``) // []Identityprofileexportedobject | Previously exported Identity Profiles.

    var identityprofileexportedobject []v1.Identityprofileexportedobject
    if err := json.Unmarshal(identityprofileexportedobject, &identityprofileexportedobject); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.ImportIdentityProfilesV1(context.Background()).Identityprofileexportedobject(identityprofileexportedobject).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.ImportIdentityProfilesV1(context.Background()).Identityprofileexportedobject(identityprofileexportedobject).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ImportIdentityProfilesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportIdentityProfilesV1`: Objectimportresult
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ImportIdentityProfilesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-profiles-v1
List identity profiles
Get a list of identity profiles, based on the specified query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-profiles-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityProfilesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** | 

### Return type

[**[]Identityprofile**](../models/identityprofile)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "ef38f94347e94562b5bb8424a56397d8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.ListIdentityProfilesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.ListIdentityProfilesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.ListIdentityProfilesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentityProfilesV1`: []Identityprofile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.ListIdentityProfilesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## sync-identity-profile-v1
Process identities under profile
Process identities under the profile
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 
This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh.
This operation will perform the following activities on all identities under the identity profile.
1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity's correct manager through manager correlation. 3. Updates the identity's access according to their assigned lifecycle state. 4. Updates the identity's access based on role assignment criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/sync-identity-profile-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | The Identity Profile ID to be processed | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncIdentityProfileV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | The Identity Profile ID to be processed # string | The Identity Profile ID to be processed

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.SyncIdentityProfileV1(context.Background(), identityProfileId).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.SyncIdentityProfileV1(context.Background(), identityProfileId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.SyncIdentityProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SyncIdentityProfileV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.SyncIdentityProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-identity-profile-v1
Update identity profile
Update a specified identity profile with this PATCH request.
  
You cannot update these fields:
* id
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at the same time.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-identity-profile-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityProfileId** | **string** | Identity profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateIdentityProfileV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**Identityprofile**](../models/identityprofile)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_profiles"
)

func main() {
    identityProfileId := `ef38f94347e94562b5bb8424a56397d8` // string | Identity profile ID. # string | Identity profile ID.
    jsonpatchoperation := []byte(`[{"op":"add","path":"/identityAttributeConfig/attributeTransforms/0","value":{"identityAttributeName":"location","transformDefinition":{"type":"accountAttribute","attributes":{"sourceName":"Employees","attributeName":"location","sourceId":"2c91808878b7d63b0178c66ffcdc4ce4"}}}}]`) // []Jsonpatchoperation | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityProfilesAPI.UpdateIdentityProfileV1(context.Background(), identityProfileId).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.IdentityProfilesAPI.UpdateIdentityProfileV1(context.Background(), identityProfileId).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityProfilesAPI.UpdateIdentityProfileV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateIdentityProfileV1`: Identityprofile
    fmt.Fprintf(os.Stdout, "Response from `IdentityProfilesAPI.UpdateIdentityProfileV1`: %v\n", resp)
}
```

[[Back to top]](#)

