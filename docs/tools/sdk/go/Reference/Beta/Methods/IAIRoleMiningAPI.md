---
id: beta-iai-role-mining
title: IAIRoleMining
pagination_label: IAIRoleMining
sidebar_label: IAIRoleMining
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIRoleMining', 'BetaIAIRoleMining'] 
slug: /tools/sdk/go/beta/methods/iai-role-mining
tags: ['SDK', 'Software Development Kit', 'IAIRoleMining', 'BetaIAIRoleMining']
---

# IAIRoleMiningAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

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
[**get-potential-role**](#get-potential-role) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieve potential role in session
[**get-potential-role-applications**](#get-potential-role-applications) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**get-potential-role-entitlements**](#get-potential-role-entitlements) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**get-potential-role-source-identity-usage**](#get-potential-role-source-identity-usage) | **Get** `/role-mining-potential-roles/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**get-potential-role-summaries**](#get-potential-role-summaries) | **Get** `/role-mining-sessions/{sessionId}/potential-role-summaries` | Retrieve session&#39;s potential role summaries
[**get-role-mining-potential-role**](#get-role-mining-potential-role) | **Get** `/role-mining-potential-roles/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-session**](#get-role-mining-session) | **Get** `/role-mining-sessions/{sessionId}` | Get a role mining session
[**get-role-mining-session-status**](#get-role-mining-session-status) | **Get** `/role-mining-sessions/{sessionId}/status` | Get role mining session status state
[**get-role-mining-sessions**](#get-role-mining-sessions) | **Get** `/role-mining-sessions` | Retrieves all role mining sessions
[**get-saved-potential-roles**](#get-saved-potential-roles) | **Get** `/role-mining-potential-roles/saved` | Retrieves all saved potential roles
[**patch-potential-role**](#patch-potential-role) | **Patch** `/role-mining-sessions/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role in session
[**patch-role-mining-potential-role**](#patch-role-mining-potential-role) | **Patch** `/role-mining-potential-roles/{potentialRoleId}` | Update a potential role
[**patch-role-mining-session**](#patch-role-mining-session) | **Patch** `/role-mining-sessions/{sessionId}` | Patch a role mining session
[**update-entitlements-potential-role**](#update-entitlements-potential-role) | **Post** `/role-mining-sessions/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request
Create request to provision a potential role into an actual role.
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-potential-role-provision-request)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    minEntitlementPopularity := 56 # int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0) # int32 | Minimum popularity required for an entitlement to be included in the provisioned role. (optional) (default to 0)
    includeCommonAccess := true # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true) # bool | Boolean determining whether common access entitlements will be included in the provisioned role. (optional) (default to true)
    roleMiningPotentialRoleProvisionRequest := fmt.Sprintf(`{
          "includeIdentities" : true,
          "roleName" : "Finance - Accounting",
          "ownerId" : "2b568c65bc3c4c57a43bd97e3a8e41",
          "roleDescription" : "General access for accounting department",
          "directlyAssignedEntitlements" : false
        }`) # RoleMiningPotentialRoleProvisionRequest | Required information to create a new role (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.CreatePotentialRoleProvisionRequest(context.Background(), sessionId, potentialRoleId).MinEntitlementPopularity(minEntitlementPopularity).IncludeCommonAccess(includeCommonAccess).RoleMiningPotentialRoleProvisionRequest(roleMiningPotentialRoleProvisionRequest).Execute()
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
Create a role mining session
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-role-mining-sessions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleMiningSessionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    roleMiningSessionDto := fmt.Sprintf(`{
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
        }`) # RoleMiningSessionDto | Role mining session parameters

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.CreateRoleMiningSessions(context.Background()).RoleMiningSessionDto(roleMiningSessionDto).Execute()
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
Export (download) details for a potential role in a role mining session
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/download-role-mining-potential-role-zip)

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




### Return type

[***os.File**](../models/os-file)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 278359a6-04b7-4669-9468-924cf580964a # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    exportId := 4940ffd4-836f-48a3-b2b0-6d498c3fdf40 # string | The id of a previously run export job for this potential role # string | The id of a previously run export job for this potential role

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.DownloadRoleMiningPotentialRoleZip(context.Background(), sessionId, potentialRoleId, exportId).Execute()
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
Export (download) details for a potential role in a role mining session
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role)

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



### Return type

[***os.File**](../models/os-file)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.ExportRoleMiningPotentialRole(context.Background(), sessionId, potentialRoleId).Execute()
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
Asynchronously export details for a potential role in a role mining session and upload to S3
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role-async)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 278359a6-04b7-4669-9468-924cf580964a # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    roleMiningPotentialRoleExportRequest := fmt.Sprintf(`{
          "minEntitlementPopularity" : 0,
          "includeCommonAccess" : true
        }`) # RoleMiningPotentialRoleExportRequest |  (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleAsync(context.Background(), sessionId, potentialRoleId).RoleMiningPotentialRoleExportRequest(roleMiningPotentialRoleExportRequest).Execute()
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
Retrieve status of a potential role export job
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-role-mining-potential-role-status)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 278359a6-04b7-4669-9468-924cf580964a # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    exportId := 4940ffd4-836f-48a3-b2b0-6d498c3fdf40 # string | The id of a previously run export job for this potential role # string | The id of a previously run export job for this potential role

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.ExportRoleMiningPotentialRoleStatus(context.Background(), sessionId, potentialRoleId, exportId).Execute()
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
Retrieves all potential role summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-all-potential-role-summaries)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPotentialRoleSummariesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sorters := createdDate # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
    filters := (createdByName co "int") and (createdById sw "2c9180907") and (type eq "COMMON") and ((name co "entt") or (saved eq true)) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetAllPotentialRoleSummaries(context.Background()).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieves entitlement popularity distribution for a potential role in a role mining session
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-distribution-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    includeCommonAccess := true # bool | Boolean determining whether common access entitlements will be included or not (optional) # bool | Boolean determining whether common access entitlements will be included or not (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetEntitlementDistributionPotentialRole(context.Background(), sessionId, potentialRoleId).IncludeCommonAccess(includeCommonAccess).Execute()
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
Retrieves entitlements for a potential role in a role mining session
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlements-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    includeCommonAccess := true # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to true) # bool | Boolean determining whether common access entitlements will be included or not (optional) (default to true)
    sorters := popularity # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
    filters := applicationName sw "AD" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).IncludeCommonAccess(includeCommonAccess).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieves excluded entitlements for a potential role in a role mining session
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-excluded-entitlements-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    sorters := populariity # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
    filters := applicationName sw "AD" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetExcludedEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieves identities for a potential role in a role mining session
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identities-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    sorters := name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := filters_example # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetIdentitiesPotentialRole(context.Background(), sessionId, potentialRoleId).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieve potential role in session
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetPotentialRole(context.Background(), sessionId, potentialRoleId).Execute()
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
Retrieves the applications of a potential role for a role mining session
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-applications)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 62f28d91-7d9f-4d17-be15-666d5b41d77f # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    filters := applicationName sw "test" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetPotentialRoleApplications(context.Background(), sessionId, potentialRoleId).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieves the entitlements of a potential role for a role mining session
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-entitlements)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 62f28d91-7d9f-4d17-be15-666d5b41d77f # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    filters := entitlementRef.name sw "test" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetPotentialRoleEntitlements(context.Background(), sessionId, potentialRoleId).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieves potential role source usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-source-identity-usage)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    potentialRoleId := e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 # string | A potential role id # string | A potential role id
    sourceId := 2c9180877620c1460176267f336a106f # string | A source id # string | A source id
    sorters := -usageCount # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetPotentialRoleSourceIdentityUsage(context.Background(), potentialRoleId, sourceId).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieve session's potential role summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-potential-role-summaries)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPotentialRoleSummariesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    sorters := createdDate # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
    filters := (createdByName co "int")and (createdById sw "2c9180907")and (type eq "COMMON")and ((name co "entt")or (saved eq true)) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetPotentialRoleSummaries(context.Background(), sessionId).Sorters(sorters).Filters(filters).Offset(offset).Limit(limit).Count(count).Execute()
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
Retrieves a specific potential role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**potentialRoleId** | **string** | A potential role id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id # string | A potential role id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetRoleMiningPotentialRole(context.Background(), potentialRoleId).Execute()
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
Get a role mining session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-session)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id to be retrieved. # string | The role mining session id to be retrieved.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetRoleMiningSession(context.Background(), sessionId).Execute()
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
Get role mining session status state
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-session-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetRoleMiningSessionStatus(context.Background(), sessionId).Execute()
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
Retrieves all role mining sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-mining-sessions)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleMiningSessionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]RoleMiningSessionResponse**](../models/role-mining-session-response)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    filters := saved eq "true" and name sw "RM Session" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
    sorters := createdBy,createdDate # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetRoleMiningSessions(context.Background()).Filters(filters).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.GetRoleMiningSessions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleMiningSessions`: []RoleMiningSessionResponse
	fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.GetRoleMiningSessions`: %v\n", resp)
}
```

[[Back to top]](#)

## get-saved-potential-roles
Retrieves all saved potential roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-saved-potential-roles)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSavedPotentialRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sorters := modified # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.GetSavedPotentialRoles(context.Background()).Sorters(sorters).Offset(offset).Limit(limit).Count(count).Execute()
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
Update a potential role in session
This method updates an existing potential role using the role mining session id and the potential role summary id.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The potential role summary id # string | The potential role summary id
    patchPotentialRoleRequestInner := fmt.Sprintf(`[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]`) # []PatchPotentialRoleRequestInner | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.PatchPotentialRole(context.Background(), sessionId, potentialRoleId).PatchPotentialRoleRequestInner(patchPotentialRoleRequestInner).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchPotentialRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchPotentialRole`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-role-mining-potential-role
Update a potential role
This method updates an existing potential role.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role-mining-potential-role)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**potentialRoleId** | **string** | The potential role summary id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchRoleMiningPotentialRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The potential role summary id # string | The potential role summary id
    patchPotentialRoleRequestInner := fmt.Sprintf(`[{op=remove, path=/description}, {op=replace, path=/description, value=Acct I - Potential Role}, {op=remove, path=/saved}, {op=replace, path=/saved, value=false}, {op=remove, path=/name}, {op=replace, path=/name, value=Potential Role Accounting}]`) # []PatchPotentialRoleRequestInner | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.PatchRoleMiningPotentialRole(context.Background(), potentialRoleId).PatchPotentialRoleRequestInner(patchPotentialRoleRequestInner).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.PatchRoleMiningPotentialRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchRoleMiningPotentialRole`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.PatchRoleMiningPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-role-mining-session
Patch a role mining session
The  method updates an existing role mining session using PATCH. Supports op in {"replace"} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-role-mining-session)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sessionId** | **string** | The role mining session id to be patched | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchRoleMiningSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id to be patched # string | The role mining session id to be patched
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/pruneThreshold, value=83}, {op=replace, path=/minNumIdentitiesInPotentialRole, value=10}, {op=replace, path=/saved, value=false}, {op=replace, path=/name, value=RM Session - 07/10/22}, {op=add, path=/name, value=RM Session - 07/10/22}]`) # []JsonPatchOperation | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.PatchRoleMiningSession(context.Background(), sessionId).JsonPatchOperation(jsonPatchOperation).Execute()
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
Edit entitlements for a potential role to exclude some entitlements
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-entitlements-potential-role)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sessionId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role mining session id # string | The role mining session id
    potentialRoleId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | A potential role id in a role mining session # string | A potential role id in a role mining session
    roleMiningPotentialRoleEditEntitlements := fmt.Sprintf(`{
          "ids" : [ "entId1", "entId2" ],
          "exclude" : true
        }`) # RoleMiningPotentialRoleEditEntitlements | Role mining session parameters

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIRoleMiningAPI.UpdateEntitlementsPotentialRole(context.Background(), sessionId, potentialRoleId).RoleMiningPotentialRoleEditEntitlements(roleMiningPotentialRoleEditEntitlements).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIRoleMiningAPI.UpdateEntitlementsPotentialRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateEntitlementsPotentialRole`: RoleMiningPotentialRole
	fmt.Fprintf(os.Stdout, "Response from `IAIRoleMiningAPI.UpdateEntitlementsPotentialRole`: %v\n", resp)
}
```

[[Back to top]](#)

