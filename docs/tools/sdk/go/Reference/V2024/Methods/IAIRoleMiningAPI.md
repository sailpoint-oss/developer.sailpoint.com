---
id: v2024-iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIRoleMining', 'V2024IAIRoleMining'] 
slug: /tools/sdk/go/v2024/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining', 'V2024IAIRoleMining']
---

# IAIRoleMiningAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-potential-role-provision-request**](#create-potential-role-provision-request) | **Post** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**create-role-mining-sessions**](#create-role-mining-sessions) | **Post** `/role-mining-sessions` | Create a role mining session
[**download-role-mining-potential-role-zip**](#download-role-mining-potential-role-zip) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role**](#export-role-mining-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role-async**](#export-role-mining-potential-role-async) | **Post** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**export-role-mining-potential-role-status**](#export-role-mining-potential-role-status) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**get-all-potential-role-summaries**](#get-all-potential-role-summaries) | **Get** `/role-mining-potential-roles` | Retrieves all potential role summaries
[**get-entitlement-distribution-potential-role**](#get-entitlement-distribution-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**get-entitlements-potential-role**](#get-entitlements-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**get-excluded-entitlements-potential-role**](#get-excluded-entitlements-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**get-identities-potential-role**](#get-identities-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**get-potential-role**](#get-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieves a specific potential role
[**get-potential-role-applications**](#get-potential-role-applications) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**get-potential-role-entitlements**](#get-potential-role-entitlements) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**get-potential-role-source-identity-usage**](#get-potential-role-source-identity-usage) | **Get** `/role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**get-potential-role-summaries**](#get-potential-role-summaries) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries` | Retrieves all potential role summaries
[**get-role-mining-potential-role**](#get-role-mining-potential-role) | **Get** `/role-mining-potential-roles/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-session**](#get-role-mining-session) | **Get** `/role-mining-sessions/{sessionId}` | Get a role mining session
[**get-role-mining-session-status**](#get-role-mining-session-status) | **Get** `/role-mining-sessions/{sessionId}/status` | Get role mining session status state
[**get-role-mining-sessions**](#get-role-mining-sessions) | **Get** `/role-mining-sessions` | Retrieves all role mining sessions
[**get-saved-potential-roles**](#get-saved-potential-roles) | **Get** `/role-mining-potential-roles/saved` | Retrieves all saved potential roles
[**patch-potential-role**](#patch-potential-role) | **Patch** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role
[**patch-potential-role-0**](#patch-potential-role-0) | **Patch** `/role-mining-potential-roles/{potentialRoleId}` | Update a potential role
[**patch-role-mining-session**](#patch-role-mining-session) | **Patch** `/role-mining-sessions/{sessionId}` | Patch a role mining session
[**update-entitlements-potential-role**](#update-entitlements-potential-role) | **Post** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request
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
Create request to provision a potential role into an actual role.
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-potential-role-provision-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreatePotentialRoleProvisionRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **minEntitlementPopularity** | **int32** | Minimum popularity required for an entitlement to be included in the provisioned role. | [default to 0]
 **includeCommonAccess** | **bool** | Boolean determining whether common access entitlements will be included in the provisioned role. | [default to true]
 **roleMiningPotentialRoleProvisionRequest** | [**RoleMiningPotentialRoleProvisionRequest**](../models/role-mining-potential-role-provision-request) | Required information to create a new role | 

### Return type

[**RoleMiningPotentialRoleSummary**](../models/role-mining-potential-role-summary)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    minEntitlementPopularity := 56 // int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0) # int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
    includeCommonAccess := true // bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true) # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true)
    roleminingpotentialroleprovisionrequest := []byte(`{
          "includeIdentities" : true,
          "roleName" : "Finance - Accounting",
          "ownerId" : "2b568c65bc3c4c57a43bd97e3a8e41",
          "roleDescription" : "General access for accounting department",
          "directlyAssignedEntitlements" : false
        }`) // RoleMiningPotentialRoleProvisionRequest | Required information to create a new role (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.CreatePotentialRoleProvisionRequest(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.CreatePotentialRoleProvisionRequest(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).MinEntitlementPopularity(minEntitlementPopularity).IncludeCommonAccess(includeCommonAccess).RoleMiningPotentialRoleProvisionRequest(roleMiningPotentialRoleProvisionRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.CreatePotentialRoleProvisionRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePotentialRoleProvisionRequest`: RoleMiningPotentialRoleSummary
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.CreatePotentialRoleProvisionRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## create-role-mining-sessions
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
Create a role mining session
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-role-mining-sessions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleMiningSessionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **roleMiningSessionDto** | [**RoleMiningSessionDto**](../models/role-mining-session-dto) | Role mining session parameters | 

### Return type

[**RoleMiningSessionResponse**](../models/role-mining-session-response)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    roleminingsessiondto := []byte(`{
          "emailRecipientId" : "2c918090761a5aac0176215c46a62d58",
          "prescribedPruneThreshold" : 10,
          "pruneThreshold" : 50,
          "saved" : true,
          "potentialRolesReadyCount" : 0,
          "scope" : {
            "identityIds" : [ "2c918090761a5aac0176215c46a62d58", "2c918090761a5aac01722015c46a62d42" ],
            "attributeFilterCriteria" : {
              "displayName" : {
                "untranslated" : "Location: Miami"
              },
              "ariaLabel" : {
                "untranslated" : "Location: Miami"
              },
              "data" : {
                "displayName" : {
                  "translateKey" : "IDN.IDENTITY_ATTRIBUTES.LOCATION"
                },
                "name" : "location",
                "operator" : "EQUALS",
                "values" : [ "Miami" ]
              }
            },
            "criteria" : "source.name:DataScienceDataset"
          },
          "potentialRoleCount" : 0,
          "name" : "Saved RM Session - 07/10",
          "minNumIdentitiesInPotentialRole" : 20,
          "identityCount" : 0,
          "type" : "SPECIALIZED"
        }`) // RoleMiningSessionDto | Role mining session parameters

    var roleMiningSessionDto v2024.RoleMiningSessionDto
    if err := json.Unmarshal(roleminingsessiondto, &roleMiningSessionDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.CreateRoleMiningSessions(context.Background()).XSailPointExperimental(xSailPointExperimental).RoleMiningSessionDto(roleMiningSessionDto).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.CreateRoleMiningSessions(context.Background()).XSailPointExperimental(xSailPointExperimental).RoleMiningSessionDto(roleMiningSessionDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.CreateRoleMiningSessions``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateRoleMiningSessions`: RoleMiningSessionResponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.CreateRoleMiningSessions`: %v\n", resp)
}
```

[[Back to top]](#)

## download-role-mining-potential-role-zip
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
Export (download) details for a potential role in a role mining session
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/download-role-mining-potential-role-zip)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 
**exportId** | **string** | The id of a previously run export job for this potential role | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadRoleMiningPotentialRoleZipRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `278359a6-04b7-4669-9468-924cf580964a` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    exportId := `4940ffd4-836f-48a3-b2b0-6d498c3fdf40` // string | The id of a previously run export job for this potential role # string | The id of a previously run export job for this potential role
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZip(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZip(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZip``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DownloadRoleMiningPotentialRoleZip`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZip`: %v\n", resp)
}
```

[[Back to top]](#)

## export-role-mining-potential-role
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
Export (download) details for a potential role in a role mining session
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-role-mining-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportRoleMiningPotentialRoleRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.ExportRoleMiningPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.ExportRoleMiningPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.ExportRoleMiningPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportRoleMiningPotentialRole`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.ExportRoleMiningPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## export-role-mining-potential-role-async
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
Asynchronously export details for a potential role in a role mining session and upload to S3
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-role-mining-potential-role-async)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportRoleMiningPotentialRoleAsyncRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **roleMiningPotentialRoleExportRequest** | [**RoleMiningPotentialRoleExportRequest**](../models/role-mining-potential-role-export-request) |  | 

### Return type

[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `278359a6-04b7-4669-9468-924cf580964a` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    roleminingpotentialroleexportrequest := []byte(`{
          "minEntitlementPopularity" : 0,
          "includeCommonAccess" : true
        }`) // RoleMiningPotentialRoleExportRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsync(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsync(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).RoleMiningPotentialRoleExportRequest(roleMiningPotentialRoleExportRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsync``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportRoleMiningPotentialRoleAsync`: RoleMiningPotentialRoleExportResponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsync`: %v\n", resp)
}
```

[[Back to top]](#)

## export-role-mining-potential-role-status
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
Retrieve status of a potential role export job
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-role-mining-potential-role-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 
**exportId** | **string** | The id of a previously run export job for this potential role | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportRoleMiningPotentialRoleStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RoleMiningPotentialRoleExportResponse**](../models/role-mining-potential-role-export-response)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `278359a6-04b7-4669-9468-924cf580964a` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    exportId := `4940ffd4-836f-48a3-b2b0-6d498c3fdf40` // string | The id of a previously run export job for this potential role # string | The id of a previously run export job for this potential role
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatus(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatus(context.Background(), sessionId, potentialRoleId, exportId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportRoleMiningPotentialRoleStatus`: RoleMiningPotentialRoleExportResponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-all-potential-role-summaries
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
Retrieves all potential role summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-all-potential-role-summaries)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPotentialRoleSummariesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningPotentialRoleSummary**](../models/role-mining-potential-role-summary)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `createdDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
    filters := `(createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true))` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetAllPotentialRoleSummaries(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetAllPotentialRoleSummaries(context.Background()).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetAllPotentialRoleSummaries``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAllPotentialRoleSummaries`: []RoleMiningPotentialRoleSummary
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetAllPotentialRoleSummaries`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-distribution-potential-role
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
Retrieves entitlement popularity distribution for a potential role in a role mining session
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-entitlement-distribution-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementDistributionPotentialRoleRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    includeCommonAccess := true // bool | Boolean determining whether common access entitlements will be included or not (optional) # bool | Boolean determining whether common access entitlements will be included or not (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetEntitlementDistributionPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetEntitlementDistributionPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).IncludeCommonAccess(includeCommonAccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetEntitlementDistributionPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementDistributionPotentialRole`: map[string]int32
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetEntitlementDistributionPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlements-potential-role
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
Retrieves entitlements for a potential role in a role mining session
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-entitlements-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementsPotentialRoleRequest struct via the builder pattern


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

[**[]RoleMiningEntitlement**](../models/role-mining-entitlement)

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
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).IncludeCommonAccess(includeCommonAccess).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetEntitlementsPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementsPotentialRole`: []RoleMiningEntitlement
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetEntitlementsPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-excluded-entitlements-potential-role
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
Retrieves excluded entitlements for a potential role in a role mining session
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-excluded-entitlements-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExcludedEntitlementsPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningEntitlement**](../models/role-mining-entitlement)

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
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExcludedEntitlementsPotentialRole`: []RoleMiningEntitlement
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identities-potential-role
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
Retrieves identities for a potential role in a role mining session
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identities-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentitiesPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningIdentity**](../models/role-mining-identity)

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
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetIdentitiesPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetIdentitiesPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetIdentitiesPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentitiesPotentialRole`: []RoleMiningIdentity
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetIdentitiesPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role
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
Retrieves a specific potential role
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRole`: RoleMiningPotentialRole
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-applications
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
Retrieves the applications of a potential role for a role mining session
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-potential-role-applications)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleApplicationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningPotentialRoleApplication**](../models/role-mining-potential-role-application)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `62f28d91-7d9f-4d17-be15-666d5b41d77f` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `applicationName sw "test"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleApplications(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleApplications(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleApplications``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleApplications`: []RoleMiningPotentialRoleApplication
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleApplications`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-entitlements
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
Retrieves the entitlements of a potential role for a role mining session
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-potential-role-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningPotentialRoleEntitlements**](../models/role-mining-potential-role-entitlements)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `62f28d91-7d9f-4d17-be15-666d5b41d77f` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `entitlementRef.name sw "test"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleEntitlements(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleEntitlements(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleEntitlements``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleEntitlements`: []RoleMiningPotentialRoleEntitlements
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-source-identity-usage
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
Retrieves potential role source usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-potential-role-source-identity-usage)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**potentialRoleId** | **string** | A potential role id | 
**sourceId** | **string** | A source id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleSourceIdentityUsageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningPotentialRoleSourceUsage**](../models/role-mining-potential-role-source-usage)

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
    potentialRoleId := `e0cc5d7d-bf7f-4f81-b2af-8885b09d9923` // string | A potential role id # string | A potential role id
    sourceId := `2c9180877620c1460176267f336a106f` // string | A source id # string | A source id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `-usageCount` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsage(context.Background(), potentialRoleId, sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsage(context.Background(), potentialRoleId, sourceId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsage``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleSourceIdentityUsage`: []RoleMiningPotentialRoleSourceUsage
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsage`: %v\n", resp)
}
```

[[Back to top]](#)

## get-potential-role-summaries
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
Retrieves all potential role summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-potential-role-summaries)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleSummariesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningPotentialRoleSummary**](../models/role-mining-potential-role-summary)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `createdDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
    filters := `(createdByName co "int")and (createdById sw "2c9180907")and (type eq "COMMON")and ((name co "entt")or (saved eq true))` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleSummaries(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetPotentialRoleSummaries(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetPotentialRoleSummaries``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPotentialRoleSummaries`: []RoleMiningPotentialRoleSummary
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetPotentialRoleSummaries`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-potential-role
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
Retrieves a specific potential role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-mining-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**potentialRoleId** | **string** | A potential role id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

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
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id # string | A potential role id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningPotentialRole(context.Background(), potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningPotentialRole(context.Background(), potentialRoleId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningPotentialRole`: RoleMiningPotentialRole
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-session
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
Get a role mining session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-mining-session)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RoleMiningSessionResponse**](../models/role-mining-session-response)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id to be retrieved. # string | The role mining session id to be retrieved.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningSession(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningSession(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSession``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningSession`: RoleMiningSessionResponse
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSession`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-session-status
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
Get role mining session status state
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-mining-session-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RoleMiningSessionStatus**](../models/role-mining-session-status)

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
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningSessionStatus(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningSessionStatus(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSessionStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningSessionStatus`: RoleMiningSessionStatus
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSessionStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-mining-sessions
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
Retrieves all role mining sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-mining-sessions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningSessionDto**](../models/role-mining-session-dto)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `saved eq "true" and name sw "RM Session"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
    sorters := `createdBy,createdDate` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningSessions(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetRoleMiningSessions(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSessions``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleMiningSessions`: []RoleMiningSessionDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSessions`: %v\n", resp)
}
```

[[Back to top]](#)

## get-saved-potential-roles
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
Retrieves all saved potential roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-saved-potential-roles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSavedPotentialRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningSessionDraftRoleDto**](../models/role-mining-session-draft-role-dto)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetSavedPotentialRoles(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.GetSavedPotentialRoles(context.Background()).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetSavedPotentialRoles``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSavedPotentialRoles`: []RoleMiningSessionDraftRoleDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetSavedPotentialRoles`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-potential-role
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
Update a potential role
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | The potential role summary id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **patchPotentialRoleRequestInner** | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) |  | 

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The potential role summary id # string | The potential role summary id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    patchpotentialrolerequestinner := []byte(`[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]`) // []PatchPotentialRoleRequestInner | 

    var patchPotentialRoleRequestInner []v2024.PatchPotentialRoleRequestInner
    if err := json.Unmarshal(patchpotentialrolerequestinner, &patchPotentialRoleRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.PatchPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).PatchPotentialRoleRequestInner(patchPotentialRoleRequestInner).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.PatchPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).PatchPotentialRoleRequestInner(patchPotentialRoleRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPotentialRole`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-potential-role-0
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
Update a potential role
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-potential-role-0)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | The potential role summary id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPotentialRole_1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **patchPotentialRoleRequestInner** | [**[]PatchPotentialRoleRequestInner**](../models/patch-potential-role-request-inner) |  | 

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The potential role summary id # string | The potential role summary id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    patchpotentialrolerequestinner := []byte(`[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]`) // []PatchPotentialRoleRequestInner | 

    var patchPotentialRoleRequestInner []v2024.PatchPotentialRoleRequestInner
    if err := json.Unmarshal(patchpotentialrolerequestinner, &patchPotentialRoleRequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.PatchPotentialRole_0(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).PatchPotentialRoleRequestInner(patchPotentialRoleRequestInner).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.PatchPotentialRole_0(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).PatchPotentialRoleRequestInner(patchPotentialRoleRequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchPotentialRole_0``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPotentialRole_0`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchPotentialRole_0`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-role-mining-session
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
Patch a role mining session
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-role-mining-session)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id to be patched | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchRoleMiningSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session. | 

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id to be patched # string | The role mining session id to be patched
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperation := []byte(`[{op=replace, path=/pruneThreshold, value=83}, {op=replace, path=/minNumIdentitiesInPotentialRole, value=10}, {op=replace, path=/saved, value=false}, {op=replace, path=/name, value=RM Session - 07/10/22}, {op=add, path=/name, value=RM Session - 07/10/22}]`) // []JsonPatchOperation | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

    var jsonPatchOperation []v2024.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.PatchRoleMiningSession(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.PatchRoleMiningSession(context.Background(), sessionId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchRoleMiningSession``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchRoleMiningSession`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchRoleMiningSession`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlements-potential-role
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
Edit entitlements for a potential role to exclude some entitlements
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-entitlements-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 
**potentialRoleId** | **string** | A potential role id in a role mining session | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **roleMiningPotentialRoleEditEntitlements** | [**RoleMiningPotentialRoleEditEntitlements**](../models/role-mining-potential-role-edit-entitlements) | Role mining session parameters | 

### Return type

[**RoleMiningPotentialRole**](../models/role-mining-potential-role)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role mining session id # string | The role mining session id
    potentialRoleId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | A potential role id in a role mining session # string | A potential role id in a role mining session
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    roleminingpotentialroleeditentitlements := []byte(`{
          "ids" : [ "entId1", "entId2" ],
          "exclude" : true
        }`) // RoleMiningPotentialRoleEditEntitlements | Role mining session parameters

    var roleMiningPotentialRoleEditEntitlements v2024.RoleMiningPotentialRoleEditEntitlements
    if err := json.Unmarshal(roleminingpotentialroleeditentitlements, &roleMiningPotentialRoleEditEntitlements); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRoleMiningAPI.UpdateEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).RoleMiningPotentialRoleEditEntitlements(roleMiningPotentialRoleEditEntitlements).Execute()
	  //resp, r, err := apiClient.V2024.IAIRoleMiningAPI.UpdateEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).XSailPointExperimental(xSailPointExperimental).RoleMiningPotentialRoleEditEntitlements(roleMiningPotentialRoleEditEntitlements).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.UpdateEntitlementsPotentialRole``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEntitlementsPotentialRole`: RoleMiningPotentialRole
    fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.UpdateEntitlementsPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

