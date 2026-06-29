---
id: v1-iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIRoleMining', 'V1IAIRoleMining'] 
slug: /tools/sdk/go/iairolemining/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining', 'V1IAIRoleMining']
---

# IAIRoleMiningAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-potential-role-provision-request-v1**](#create-potential-role-provision-request-v1) | **Post** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**create-role-mining-sessions-v1**](#create-role-mining-sessions-v1) | **Post** `/role-mining-sessions/v1` | Create a role mining session
[**download-role-mining-potential-role-zip-v1**](#download-role-mining-potential-role-zip-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role-async-v1**](#export-role-mining-potential-role-async-v1) | **Post** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**export-role-mining-potential-role-status-v1**](#export-role-mining-potential-role-status-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**export-role-mining-potential-role-v1**](#export-role-mining-potential-role-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**get-all-potential-role-summaries-v1**](#get-all-potential-role-summaries-v1) | **Get** `/role-mining-potential-roles/v1` | Retrieves all potential role summaries
[**get-entitlement-distribution-potential-role-v1**](#get-entitlement-distribution-potential-role-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**get-entitlements-potential-role-v1**](#get-entitlements-potential-role-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**get-excluded-entitlements-potential-role-v1**](#get-excluded-entitlements-potential-role-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**get-identities-potential-role-v1**](#get-identities-potential-role-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**get-potential-role-applications-v1**](#get-potential-role-applications-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**get-potential-role-entitlements-v1**](#get-potential-role-entitlements-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**get-potential-role-source-identity-usage-v1**](#get-potential-role-source-identity-usage-v1) | **Get** `/role-mining-potential-roles/v1/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**get-potential-role-summaries-v1**](#get-potential-role-summaries-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries` | Retrieves all potential role summaries
[**get-potential-role-v1**](#get-potential-role-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-potential-role-v1**](#get-role-mining-potential-role-v1) | **Get** `/role-mining-potential-roles/v1/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-session-status-v1**](#get-role-mining-session-status-v1) | **Get** `/role-mining-sessions/v1/{sessionId}/status` | Get role mining session status state
[**get-role-mining-session-v1**](#get-role-mining-session-v1) | **Get** `/role-mining-sessions/v1/{sessionId}` | Get a role mining session
[**get-role-mining-sessions-v1**](#get-role-mining-sessions-v1) | **Get** `/role-mining-sessions/v1` | Retrieves all role mining sessions
[**get-saved-potential-roles-v1**](#get-saved-potential-roles-v1) | **Get** `/role-mining-potential-roles/v1/saved` | Retrieves all saved potential roles
[**patch-potential-role-session-v1**](#patch-potential-role-session-v1) | **Patch** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role session
[**patch-potential-role-v1**](#patch-potential-role-v1) | **Patch** `/role-mining-potential-roles/v1/{potentialRoleId}` | Update a potential role
[**patch-role-mining-session-v1**](#patch-role-mining-session-v1) | **Patch** `/role-mining-sessions/v1/{sessionId}` | Patch a role mining session
[**update-entitlements-potential-role-v1**](#update-entitlements-potential-role-v1) | **Post** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request-v1
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
Create request to provision a potential role into an actual role.
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-potential-role-provision-request-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreatePotentialRoleProvisionRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **minEntitlementPopularity** | **int32** | Minimum popularity required for an entitlement to be included in the provisioned role. | [default to 0]
 **includeCommonAccess** | **bool** | Boolean determining whether common access entitlements will be included in the provisioned role. | [default to true]
 **roleminingpotentialroleprovisionrequest** | [**Roleminingpotentialroleprovisionrequest**](../models/roleminingpotentialroleprovisionrequest) | Required information to create a new role | 

### Return type

[**Roleminingpotentialrolesummary**](../models/roleminingpotentialrolesummary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    minEntitlementPopularity := 56 // int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0) # int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
    includeCommonAccess := true // bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true) # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true)
    roleminingpotentialroleprovisionrequest := []byte(``) // Roleminingpotentialroleprovisionrequest | Required information to create a new role (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.CreatePotentialRoleProvisionRequestV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.CreatePotentialRoleProvisionRequestV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).MinEntitlementPopularity(minEntitlementPopularity).IncludeCommonAccess(includeCommonAccess).Roleminingpotentialroleprovisionrequest(roleminingpotentialroleprovisionrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.CreatePotentialRoleProvisionRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePotentialRoleProvisionRequestV1`: Roleminingpotentialrolesummary
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.CreatePotentialRoleProvisionRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-role-mining-sessions-v1
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
Create a role mining session
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-role-mining-sessions-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleMiningSessionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **roleminingsessiondto** | [**Roleminingsessiondto**](../models/roleminingsessiondto) | Role mining session parameters | 

### Return type

[**Roleminingsessionresponse**](../models/roleminingsessionresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    roleminingsessiondto := []byte(``) // Roleminingsessiondto | Role mining session parameters

    var roleminingsessiondto v1.Roleminingsessiondto
    if err := json.Unmarshal(roleminingsessiondto, &roleminingsessiondto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.CreateRoleMiningSessionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Roleminingsessiondto(roleminingsessiondto).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.CreateRoleMiningSessionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Roleminingsessiondto(roleminingsessiondto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.CreateRoleMiningSessionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateRoleMiningSessionsV1`: Roleminingsessionresponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.CreateRoleMiningSessionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## download-role-mining-potential-role-zip-v1
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
Export (download) details for a potential role in a role mining session
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/download-role-mining-potential-role-zip-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 
**exportId** | **string** | The id of a previously run export job for this potential role | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadRoleMiningPotentialRoleZipV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `278359a6-04b7-4669-9468-924cf580964a` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    exportId := `4940ffd4-836f-48a3-b2b0-6d498c3fdf40` // string | The id of a previously run export job for this potential role # string | The id of a previously run export job for this potential role
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZipV1(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZipV1(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZipV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DownloadRoleMiningPotentialRoleZipV1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZipV1`: %v\n", resp)
}
```

[[Back to top]](#)

## export-role-mining-potential-role-async-v1
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
Asynchronously export details for a potential role in a role mining session and upload to S3
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-async-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportRoleMiningPotentialRoleAsyncV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **roleminingpotentialroleexportrequest** | [**Roleminingpotentialroleexportrequest**](../models/roleminingpotentialroleexportrequest) |  | 

### Return type

[**Roleminingpotentialroleexportresponse**](../models/roleminingpotentialroleexportresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `278359a6-04b7-4669-9468-924cf580964a` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    roleminingpotentialroleexportrequest := []byte(``) // Roleminingpotentialroleexportrequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsyncV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsyncV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Roleminingpotentialroleexportrequest(roleminingpotentialroleexportrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsyncV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportRoleMiningPotentialRoleAsyncV1`: Roleminingpotentialroleexportresponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsyncV1`: %v\n", resp)
}
```

[[Back to top]](#)

## export-role-mining-potential-role-status-v1
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
Retrieve status of a potential role export job
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 
**exportId** | **string** | The id of a previously run export job for this potential role | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportRoleMiningPotentialRoleStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Roleminingpotentialroleexportresponse**](../models/roleminingpotentialroleexportresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `278359a6-04b7-4669-9468-924cf580964a` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    exportId := `4940ffd4-836f-48a3-b2b0-6d498c3fdf40` // string | The id of a previously run export job for this potential role # string | The id of a previously run export job for this potential role
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatusV1(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatusV1(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportRoleMiningPotentialRoleStatusV1`: Roleminingpotentialroleexportresponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## export-role-mining-potential-role-v1
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
Export (download) details for a potential role in a role mining session
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-role-mining-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportRoleMiningPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportRoleMiningPotentialRoleV1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-all-potential-role-summaries-v1
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
Retrieves all potential role summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-all-potential-role-summaries-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPotentialRoleSummariesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingpotentialrolesummary**](../models/roleminingpotentialrolesummary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `createdDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
    filters := `(createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true))` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetAllPotentialRoleSummariesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetAllPotentialRoleSummariesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetAllPotentialRoleSummariesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAllPotentialRoleSummariesV1`: []Roleminingpotentialrolesummary
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetAllPotentialRoleSummariesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-distribution-potential-role-v1
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
Retrieves entitlement popularity distribution for a potential role in a role mining session
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-distribution-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementDistributionPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **includeCommonAccess** | **bool** | Boolean determining whether common access entitlements will be included or not | 

### Return type

**map[string]int32**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    includeCommonAccess := true // bool | Boolean determining whether common access entitlements will be included or not (optional) # bool | Boolean determining whether common access entitlements will be included or not (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetEntitlementDistributionPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetEntitlementDistributionPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).IncludeCommonAccess(includeCommonAccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetEntitlementDistributionPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementDistributionPotentialRoleV1`: map[string]int32
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetEntitlementDistributionPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlements-potential-role-v1
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
Retrieves entitlements for a potential role in a role mining session
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlements-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementsPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **includeCommonAccess** | **bool** | Boolean determining whether common access entitlements will be included or not | [default to true]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingentitlement**](../models/roleminingentitlement)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    includeCommonAccess := true // bool | Boolean determining whether common access entitlements will be included or not (optional) (default to true) # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to true)
    sorters := `popularity` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
    filters := `applicationName sw "AD"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetEntitlementsPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetEntitlementsPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).IncludeCommonAccess(includeCommonAccess).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetEntitlementsPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementsPotentialRoleV1`: []Roleminingentitlement
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetEntitlementsPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-excluded-entitlements-potential-role-v1
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
Retrieves excluded entitlements for a potential role in a role mining session
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-excluded-entitlements-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExcludedEntitlementsPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingentitlement**](../models/roleminingentitlement)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `populariity` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
    filters := `applicationName sw "AD"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExcludedEntitlementsPotentialRoleV1`: []Roleminingentitlement
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identities-potential-role-v1
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
Retrieves identities for a potential role in a role mining session
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identities-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentitiesPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingidentity**](../models/roleminingidentity)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `filters_example` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetIdentitiesPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetIdentitiesPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetIdentitiesPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentitiesPotentialRoleV1`: []Roleminingidentity
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetIdentitiesPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-applications-v1
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
Retrieves the applications of a potential role for a role mining session
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-applications-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleApplicationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingpotentialroleapplication**](../models/roleminingpotentialroleapplication)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `62f28d91-7d9f-4d17-be15-666d5b41d77f` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `applicationName sw "test"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleApplicationsV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleApplicationsV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleApplicationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleApplicationsV1`: []Roleminingpotentialroleapplication
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleApplicationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-entitlements-v1
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
Retrieves the entitlements of a potential role for a role mining session
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-entitlements-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingpotentialroleentitlements**](../models/roleminingpotentialroleentitlements)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `62f28d91-7d9f-4d17-be15-666d5b41d77f` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `entitlementRef.name sw "test"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleEntitlementsV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleEntitlementsV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleEntitlementsV1`: []Roleminingpotentialroleentitlements
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-source-identity-usage-v1
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
Retrieves potential role source usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-source-identity-usage-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**potentialRoleId** | **string** | A potential role id | 
**sourceId** | **string** | A source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleSourceIdentityUsageV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingpotentialrolesourceusage**](../models/roleminingpotentialrolesourceusage)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    potentialRoleId := `e0cc5d7d-bf7f-4f81-b2af-8885b09d9923` // string | A potential role id # string | A potential role id
    sourceId := `2c9180877620c1460176267f336a106f` // string | A source id # string | A source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `-usageCount` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsageV1(context.Background(), potentialRoleId, sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsageV1(context.Background(), potentialRoleId, sourceId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsageV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleSourceIdentityUsageV1`: []Roleminingpotentialrolesourceusage
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsageV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-summaries-v1
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
Retrieves all potential role summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-summaries-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleSummariesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingpotentialrolesummary**](../models/roleminingpotentialrolesummary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `createdDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
    filters := `(createdByName co "int")and (createdById sw "2c9180907")and (type eq "COMMON")and ((name co "entt")or (saved eq true))` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleSummariesV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleSummariesV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleSummariesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleSummariesV1`: []Roleminingpotentialrolesummary
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleSummariesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-v1
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
Retrieves a specific potential role
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleV1`: Roleminingpotentialrole
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-potential-role-v1
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
Retrieves a specific potential role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**potentialRoleId** | **string** | A potential role id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id # string | A potential role id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningPotentialRoleV1(context.Background(), potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningPotentialRoleV1(context.Background(), potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningPotentialRoleV1`: Roleminingpotentialrole
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-session-status-v1
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
Get role mining session status state
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-session-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Roleminingsessionstatus**](../models/roleminingsessionstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningSessionStatusV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningSessionStatusV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSessionStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningSessionStatusV1`: Roleminingsessionstatus
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSessionStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-session-v1
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
Get a role mining session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-session-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Roleminingsessionresponse**](../models/roleminingsessionresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id to be retrieved. # string | The role mining session id to be retrieved.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningSessionV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningSessionV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSessionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningSessionV1`: Roleminingsessionresponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSessionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-sessions-v1
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
Retrieves all role mining sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-mining-sessions-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingsessiondto**](../models/roleminingsessiondto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `saved eq "true" and name sw "RM Session"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
    sorters := `createdBy,createdDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningSessionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetRoleMiningSessionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSessionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningSessionsV1`: []Roleminingsessiondto
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSessionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-saved-potential-roles-v1
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
Retrieves all saved potential roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-potential-roles-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSavedPotentialRolesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Roleminingsessiondraftroledto**](../models/roleminingsessiondraftroledto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.GetSavedPotentialRolesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.GetSavedPotentialRolesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetSavedPotentialRolesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSavedPotentialRolesV1`: []Roleminingsessiondraftroledto
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetSavedPotentialRolesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-potential-role-session-v1
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
Update a potential role session
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-potential-role-session-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | The potential role summary id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPotentialRoleSessionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonpatchoperationrolemining** | [**[]Jsonpatchoperationrolemining**](../models/jsonpatchoperationrolemining) |  | 

### Return type

**map[string]interface{}**

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The potential role summary id # string | The potential role summary id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationrolemining := []byte(`[{"op":"remove","path":"/description"},{"op":"replace","path":"/description","value":"Acct I - Potential Role"},{"op":"remove","path":"/saved"},{"op":"replace","path":"/saved","value":"false"},{"op":"remove","path":"/name"},{"op":"replace","path":"/name","value":"Potential Role Accounting"}]`) // []Jsonpatchoperationrolemining | 

    var jsonpatchoperationrolemining []v1.Jsonpatchoperationrolemining
    if err := json.Unmarshal(jsonpatchoperationrolemining, &jsonpatchoperationrolemining); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.PatchPotentialRoleSessionV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Jsonpatchoperationrolemining(jsonpatchoperationrolemining).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.PatchPotentialRoleSessionV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Jsonpatchoperationrolemining(jsonpatchoperationrolemining).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchPotentialRoleSessionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPotentialRoleSessionV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchPotentialRoleSessionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-potential-role-v1
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
Update a potential role
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | The potential role summary id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonpatchoperationrolemining** | [**[]Jsonpatchoperationrolemining**](../models/jsonpatchoperationrolemining) |  | 

### Return type

**map[string]interface{}**

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The potential role summary id # string | The potential role summary id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationrolemining := []byte(`[{"op":"remove","path":"/description"},{"op":"replace","path":"/description","value":"Acct I - Potential Role"},{"op":"remove","path":"/saved"},{"op":"replace","path":"/saved","value":"false"},{"op":"remove","path":"/name"},{"op":"replace","path":"/name","value":"Potential Role Accounting"}]`) // []Jsonpatchoperationrolemining | 

    var jsonpatchoperationrolemining []v1.Jsonpatchoperationrolemining
    if err := json.Unmarshal(jsonpatchoperationrolemining, &jsonpatchoperationrolemining); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.PatchPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Jsonpatchoperationrolemining(jsonpatchoperationrolemining).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.PatchPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Jsonpatchoperationrolemining(jsonpatchoperationrolemining).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPotentialRoleV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-role-mining-session-v1
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
Patch a role mining session
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-role-mining-session-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id to be patched | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchRoleMiningSessionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session. | 

### Return type

**map[string]interface{}**

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id to be patched # string | The role mining session id to be patched
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/pruneThreshold","value":"83"},{"op":"replace","path":"/minNumIdentitiesInPotentialRole","value":"10"},{"op":"replace","path":"/saved","value":"false"},{"op":"replace","path":"/name","value":"RM Session - 07/10/22"},{"op":"add","path":"/name","value":"RM Session - 07/10/22"}]`) // []Jsonpatchoperation | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.PatchRoleMiningSessionV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.PatchRoleMiningSessionV1(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchRoleMiningSessionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchRoleMiningSessionV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchRoleMiningSessionV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlements-potential-role-v1
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
Edit entitlements for a potential role to exclude some entitlements
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-entitlements-potential-role-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsPotentialRoleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **roleminingpotentialroleeditentitlements** | [**Roleminingpotentialroleeditentitlements**](../models/roleminingpotentialroleeditentitlements) | Role mining session parameters | 

### Return type

[**Roleminingpotentialrole**](../models/roleminingpotentialrole)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/iai_role_mining"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    roleminingpotentialroleeditentitlements := []byte(``) // Roleminingpotentialroleeditentitlements | Role mining session parameters

    var roleminingpotentialroleeditentitlements v1.Roleminingpotentialroleeditentitlements
    if err := json.Unmarshal(roleminingpotentialroleeditentitlements, &roleminingpotentialroleeditentitlements); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRoleMiningAPI.UpdateEntitlementsPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Roleminingpotentialroleeditentitlements(roleminingpotentialroleeditentitlements).Execute()
	  //resp, r, err := apiClient.IAIRoleMiningAPI.UpdateEntitlementsPotentialRoleV1(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Roleminingpotentialroleeditentitlements(roleminingpotentialroleeditentitlements).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.UpdateEntitlementsPotentialRoleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEntitlementsPotentialRoleV1`: Roleminingpotentialrole
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.UpdateEntitlementsPotentialRoleV1`: %v\n", resp)
}
```

[[Back to top]](#)

