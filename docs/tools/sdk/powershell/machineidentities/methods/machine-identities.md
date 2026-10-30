# MachineIdentities

# MachineIdentities
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-MachineIdentityV1**](#create-machine-identity-v1) | **POST** `/machine-identities/v1` | Create machine identity
[**New-MachineIdentityV2**](#create-machine-identity-v2) | **POST** `/machine-identities/v2` | Create machine identity
[**Remove-MachineIdentitiesInBulkV2**](#delete-machine-identities-in-bulk-v2) | **POST** `/machine-identities/v2/bulk-delete` | Bulk delete machine identities
[**Remove-MachineIdentityAsyncV1**](#delete-machine-identity-async-v1) | **DELETE** `/machine-identities/v1/{id}/delete-async` | Delete AI agent asynchronously
[**Remove-MachineIdentityAsyncV2**](#delete-machine-identity-async-v2) | **DELETE** `/machine-identities/v2/{id}/delete-async` | Delete AI agent asynchronously
[**Remove-MachineIdentityV1**](#delete-machine-identity-v1) | **DELETE** `/machine-identities/v1/{id}` | Delete machine identity
[**Remove-MachineIdentityV2**](#delete-machine-identity-v2) | **DELETE** `/machine-identities/v2/{id}` | Delete machine identity
[**Remove-OwnershipCorrelationConfigV1**](#delete-ownership-correlation-config-v1) | **DELETE** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**Get-MachineIdentityAgentCountsV1**](#get-machine-identity-agent-counts-v1) | **GET** `/machine-identities/v1/agent-counts` | Get AI agent counts
[**Get-MachineIdentityAgentCountsV2**](#get-machine-identity-agent-counts-v2) | **GET** `/machine-identities/v2/agent-counts` | Get AI agent counts
[**Get-MachineIdentityAllCountsV1**](#get-machine-identity-all-counts-v1) | **GET** `/machine-identities/v1/all-counts` | Get owner machine identity counts
[**Get-MachineIdentityApplicationCountsV1**](#get-machine-identity-application-counts-v1) | **GET** `/machine-identities/v1/application-counts` | Get application counts
[**Get-MachineIdentityApplicationCountsV2**](#get-machine-identity-application-counts-v2) | **GET** `/machine-identities/v2/application-counts` | Get application counts
[**Get-MachineIdentityDailyCountsV1**](#get-machine-identity-daily-counts-v1) | **GET** `/machine-identities/v1/counts/daily` | Get daily non-human entity counts
[**Get-MachineIdentityV1**](#get-machine-identity-v1) | **GET** `/machine-identities/v1/{id}` | Get machine identity details
[**Get-MachineIdentityV2**](#get-machine-identity-v2) | **GET** `/machine-identities/v2/{id}` | Get machine identity details
[**Get-OwnershipCorrelationConfigV1**](#get-ownership-correlation-config-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**Get-UnsanctionedAnomalySummaryV1**](#get-unsanctioned-anomaly-summary-v1) | **GET** `/machine-identities/v1/anomaly-summaries/unsanctioned` | Get unsanctioned application anomaly summary
[**Get-MachineIdentitiesV1**](#list-machine-identities-v1) | **GET** `/machine-identities/v1` | List machine identities
[**Get-MachineIdentitiesV2**](#list-machine-identities-v2) | **GET** `/machine-identities/v2` | List machine identities
[**Get-MachineIdentityAccountsV2**](#list-machine-identity-accounts-v2) | **GET** `/machine-identities/v2/{id}/accounts` | List linked machine accounts
[**Get-MachineIdentityAnomaliesV1**](#list-machine-identity-anomalies-v1) | **GET** `/machine-identities/v1/{id}/anomalies` | List machine identity anomalies
[**Get-MachineIdentityCapabilitiesV2**](#list-machine-identity-capabilities-v2) | **GET** `/machine-identities/v2/{id}/capabilities` | List machine identity capabilities
[**Get-MachineIdentityEntitlementsV2**](#list-machine-identity-entitlements-v2) | **GET** `/machine-identities/v2/{id}/entitlements` | List machine identity entitlements
[**Get-MachineIdentityHostnamesV2**](#list-machine-identity-hostnames-v2) | **GET** `/machine-identities/v2/hostnames` | List AI agent hostnames
[**Get-MachineIdentityUserEntitlementsV1**](#list-machine-identity-user-entitlements-v1) | **GET** `/machine-identity-user-entitlements/v1` | List machine identity&#39;s user entitlements
[**Get-OwnershipCorrelationConfigsV1**](#list-ownership-correlation-configs-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**Update-OwnershipCorrelationConfigV1**](#patch-ownership-correlation-config-v1) | **PATCH** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**Start-MachineIdentityAggregationV1**](#start-machine-identity-aggregation-v1) | **POST** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
[**Update-MachineIdentitiesInBulkV2**](#update-machine-identities-in-bulk-v2) | **POST** `/machine-identities/v2/bulk-update` | Bulk update machine identities
[**Update-MachineIdentityV1**](#update-machine-identity-v1) | **PATCH** `/machine-identities/v1/{id}` | Update machine identity details
[**Update-MachineIdentityV2**](#update-machine-identity-v2) | **PATCH** `/machine-identities/v2/{id}` | Partial update of machine identity


## create-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | MachineIdentityRequest | [**MachineIdentityRequest**](../models/machine-identity-request) | True  | 

### Return type
[**MachineIdentityResponse**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine Identity created. | MachineIdentityResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MachineIdentityRequest = @"{
  "sourceId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
  "subtype" : "Application",
  "created" : "2015-05-28T14:07:17Z",
  "userEntitlements" : [ {
    "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
    "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
  }, {
    "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
    "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
  } ],
  "name" : "aName",
  "modified" : "2015-05-28T14:07:17Z",
  "description" : "",
  "attributes" : "{\"Region\":\"EU\"}",
  "owners" : {
    "primaryIdentity" : "{}",
    "secondaryIdentities" : [ {
      "name" : "William Wilson",
      "id" : "2c91808568c529c60168cca6f90c1313",
      "type" : "IDENTITY"
    }, {
      "name" : "William Wilson",
      "id" : "2c91808568c529c60168cca6f90c1313",
      "type" : "IDENTITY"
    } ]
  },
  "id" : "id12345",
  "uuid" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
  "nativeIdentity" : "abc:123:dddd"
}"@

# Create machine identity

try {
    $Result = ConvertFrom-JsonToMachineIdentityRequest -Json $MachineIdentityRequest
    New-MachineIdentityV1 -XSailPointExperimental $XSailPointExperimental -MachineIdentityRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-MachineIdentityV1 -XSailPointExperimental $XSailPointExperimental -MachineIdentityRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-MachineIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to create a machine identity. Additional owners may be either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. The maximum supported length for the description field is 2000 characters.

When Business Applications is enabled for the tenant, callers may optionally include a single `businessApplicationRefs` entry (`type`=`BUSINESS_APPLICATION`, `id`=BA UUID). The assignment is stored as a `MANUAL` correlation. `correlationType` may be omitted or `MANUAL`; `AUTOMATIC` is rejected (`400`). Unknown BA id returns `404`. More than one ref returns `400`. When Business Applications is not enabled, supplying `businessApplicationRefs` returns `400`. `sanctionedStatus` and `effectiveSanctionedStatus` are read-only and ignored on input.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Machineidentityv2 | [**Machineidentityv2**](../models/machineidentityv2) | True  | 

### Return type
[**Machineidentityv2**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Machine identity created (same schema family as v2 GET/PATCH). | Machineidentityv2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Machineidentityv2 = @"{
  "sourceId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
  "entroId" : "117923dfeaaf4a1ab09b6252ea369e44",
  "description" : "Service account for nightly batch jobs",
  "owners" : {
    "secondary" : [ {
      "id" : "2c9180858082150f0180893dbaf44202",
      "name" : "Jane Doe",
      "type" : "IDENTITY"
    } ],
    "primary" : {
      "name" : "William Wilson",
      "id" : "2c91808568c529c60168cca6f90c1313",
      "type" : "IDENTITY"
    }
  },
  "source" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "uuid" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
  "suspiciousSessionCount" : 22,
  "subtype" : "AI_AGENT",
  "sessionCount" : 152,
  "businessApplicationRefs" : [ {
    "name" : "Cursor",
    "correlationType" : "MANUAL",
    "id" : "2ee5e239-e68c-4d69-93fb-6c7ce4576190",
    "type" : "BUSINESS_APPLICATION",
    "sanctionedStatus" : "SANCTIONED"
  } ],
  "userEntitlements" : [ {
    "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
    "displayName" : "Entitlement Name",
    "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
    "source" : {
      "name" : "William Wilson",
      "id" : "2c91808568c529c60168cca6f90c1313",
      "type" : "IDENTITY"
    }
  }, {
    "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
    "displayName" : "Entitlement Name",
    "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
    "source" : {
      "name" : "William Wilson",
      "id" : "2c91808568c529c60168cca6f90c1313",
      "type" : "IDENTITY"
    }
  } ],
  "modified" : "2015-05-28T14:07:17Z",
  "datasetId" : "8886e5e3-63d0-462f-a195-d98da885b8dc",
  "id" : "id12345",
  "resource" : {
    "features" : [ "PROVISIONING", "AUTHENTICATION" ],
    "name" : "nightly-batch-role",
    "id" : "8886e5e3-63d0-462f-a195-d98da885b8dc",
    "type" : "aws:iam-role"
  },
  "insights" : [ "Sanctioned Service Access" ],
  "created" : "2015-05-28T14:07:17Z",
  "connectorAttributes" : {
    "objectguid" : "abc-123"
  },
  "nativeIdentity" : "abc:123:dddd",
  "effectiveSanctionedStatus" : "SANCTIONED",
  "environment" : "PRODUCTION",
  "name" : "aName",
  "attributes" : {
    "privilegeLevel" : "HIGH",
    "region" : "APAC"
  },
  "risk" : {
    "severity" : "HIGH",
    "score" : 72.5
  },
  "manuallyEdited" : true,
  "manuallyCreated" : true,
  "existsOnSource" : "TRUE",
  "status" : "ACTIVE"
}"@

# Create machine identity

try {
    $Result = ConvertFrom-JsonToMachineidentityv2 -Json $Machineidentityv2
    New-MachineIdentityV2 -XSailPointExperimental $XSailPointExperimental -Machineidentityv2 $Result 
    
    # Below is a request that includes all optional parameters
    # New-MachineIdentityV2 -XSailPointExperimental $XSailPointExperimental -Machineidentityv2 $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-MachineIdentityV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-identities-in-bulk-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API deletes up to 100 machine identities and returns a result for each requested ID.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was deleted.

A caller who owns a machine identity can delete it. Other callers need the **idn:mis-identity:delete** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identities-in-bulk-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | MachineIdentityBulkRequest | [**MachineIdentityBulkRequest**](../models/machine-identity-bulk-request) | True  | 

### Return type
[**MachineIdentityBulkResult[]**](../models/machine-identity-bulk-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | A result for each requested machine identity ID. | MachineIdentityBulkResult[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MachineIdentityBulkRequest = @"{
  "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180858082150f0180893dbaf44201" ]
}"@

# Bulk delete machine identities

try {
    $Result = ConvertFrom-JsonToMachineIdentityBulkRequest -Json $MachineIdentityBulkRequest
    Remove-MachineIdentitiesInBulkV2 -XSailPointExperimental $XSailPointExperimental -MachineIdentityBulkRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineIdentitiesInBulkV2 -XSailPointExperimental $XSailPointExperimental -MachineIdentityBulkRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineIdentitiesInBulkV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-identity-async-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API deletes an AI agent machine identity. It applies only to AI agents. Application machine identities return
`400`; delete them with the delete machine identity API instead.

When the AI agent was aggregated from a source and still exists on that source, the API starts a deletion task on
the source and returns the task status. When the AI agent was created manually or no longer exists on the source,
the API deletes it immediately and returns `200` with an empty body.

The API returns `400` when the AI agent is still assigned to machine accounts, or when its source does not support
deleting it. It returns `404` when the machine identity or its source is not found.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-async-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the deletion task. The body is empty when the AI agent was deleted immediately. | TaskStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete AI agent asynchronously

try {
    Remove-MachineIdentityAsyncV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineIdentityAsyncV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineIdentityAsyncV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-identity-async-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API deletes an AI agent machine identity. It applies only to AI agents. Application machine identities return
`400`; delete them with the delete machine identity API instead.

When the AI agent was aggregated from a source and still exists on that source, the API starts a deletion task on
the source and returns the task status. When the AI agent was created manually or no longer exists on the source,
the API deletes it immediately and returns `200` with an empty body.

The API returns `400` when the AI agent is still assigned to machine accounts, or when its source does not support
deleting it. It returns `404` when the machine identity or its source is not found.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-async-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the deletion task. The body is empty when the AI agent was deleted immediately. | TaskStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete AI agent asynchronously

try {
    Remove-MachineIdentityAsyncV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineIdentityAsyncV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineIdentityAsyncV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete machine identity

try {
    Remove-MachineIdentityV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineIdentityV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The API returns a successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete machine identity

try {
    Remove-MachineIdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineIdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineIdentityV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-ownership-correlation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes the ownership correlation config with the specified ID for the given source resource.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ownership-correlation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | ResourceId | **String** | True  | The source resource ID (for example, account or aws:iam-role).
Path   | ConfigId | **String** | True  | The correlation config ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$ResourceId = "aws:iam-role" # String | The source resource ID (for example, account or aws:iam-role).
$ConfigId = "f5dd23fe-3414-42b7-bb1c-869400ad7a10" # String | The correlation config ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete ownership correlation config

try {
    Remove-OwnershipCorrelationConfigV1 -SourceId $SourceId -ResourceId $ResourceId -ConfigId $ConfigId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-OwnershipCorrelationConfigV1 -SourceId $SourceId -ResourceId $ResourceId -ConfigId $ConfigId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-OwnershipCorrelationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-agent-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts AI
agents that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAgentCounts**](../models/machine-identity-agent-counts)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | AI agent summary counts. | MachineIdentityAgentCounts
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get AI agent counts

try {
    Get-MachineIdentityAgentCountsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityAgentCountsV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityAgentCountsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-agent-counts-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAgentCounts**](../models/machine-identity-agent-counts)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | AI agent summary counts. | MachineIdentityAgentCounts
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get AI agent counts

try {
    Get-MachineIdentityAgentCountsV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityAgentCountsV2 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityAgentCountsV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-all-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the number of application machine identities, AI agent machine identities, and machine accounts
owned by one identity, plus their total. Identify the owner with an `ownerId` filter. Use `ownerId eq "me"` for
the caller's own counts. Requests without an `ownerId` filter return `400`.

A caller who owns the machine identities and machine accounts can view their own counts. Other callers need the
**idn:mis-identity:read** or **idn:mis-account:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-all-counts-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAllCounts**](../models/machine-identity-all-counts)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine identity and machine account counts for the owner. | MachineIdentityAllCounts
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'ownerId eq "me"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get owner machine identity counts

try {
    Get-MachineIdentityAllCountsV1 -Filters $Filters -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityAllCountsV1 -Filters $Filters -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityAllCountsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-application-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts
applications that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineIdentityApplicationCounts**](../models/machine-identity-application-counts)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Application summary counts. | MachineIdentityApplicationCounts
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get application counts

try {
    Get-MachineIdentityApplicationCountsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityApplicationCountsV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityApplicationCountsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-application-counts-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineIdentityApplicationCounts**](../models/machine-identity-application-counts)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Application summary counts. | MachineIdentityApplicationCounts
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get application counts

try {
    Get-MachineIdentityApplicationCountsV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityApplicationCountsV2 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityApplicationCountsV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-daily-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns daily counts of machine identities, machine accounts, capabilities, and credentials for the tenant.
The window ends on the day before the current UTC date and covers the number of days set by `days`. The response
contains one entry per day. Days with no recorded counts have an empty `metrics` array.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-daily-counts-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Days | **Int32** |   (optional) (default to 30) | Number of days in the window. Values outside 1 to 90 return `400`.
  Query | EntityType | **String** |   (optional) | Return counts for this entity type only. Other values return `400`.
  Query | SubType | **String** |   (optional) | Return counts for this subtype only. The value must exactly match a recorded subtype.

### Return type
[**MachineIdentityDailyCounts**](../models/machine-identity-daily-counts)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Daily counts for the window. | MachineIdentityDailyCounts
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Days = 30 # Int32 | Number of days in the window. Values outside 1 to 90 return `400`. (optional) (default to 30)
$EntityType = "machine_identity" # String | Return counts for this entity type only. Other values return `400`. (optional)
$SubType = "AI Agent" # String | Return counts for this subtype only. The value must exactly match a recorded subtype. (optional)

# Get daily non-human entity counts

try {
    Get-MachineIdentityDailyCountsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityDailyCountsV1 -XSailPointExperimental $XSailPointExperimental -Days $Days -EntityType $EntityType -SubType $SubType  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityDailyCountsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineIdentityResponse**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A machine identity object | MachineIdentityResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get machine identity details

try {
    Get-MachineIdentityV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Machineidentityv2**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A machine identity object. | Machineidentityv2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get machine identity details

try {
    Get-MachineIdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-ownership-correlation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This end-point retrieves a single ownership correlation config by ID for the specified source resource.

[API Spec](https://developer.sailpoint.com/docs/api/get-ownership-correlation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | ResourceId | **String** | True  | The source resource ID (for example, account or aws:iam-role).
Path   | ConfigId | **String** | True  | The correlation config ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested correlation config. | CorrelationConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$ResourceId = "aws:iam-role" # String | The source resource ID (for example, account or aws:iam-role).
$ConfigId = "f5dd23fe-3414-42b7-bb1c-869400ad7a10" # String | The correlation config ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get ownership correlation config

try {
    Get-OwnershipCorrelationConfigV1 -SourceId $SourceId -ResourceId $ResourceId -ConfigId $ConfigId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-OwnershipCorrelationConfigV1 -SourceId $SourceId -ResourceId $ResourceId -ConfigId $ConfigId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-OwnershipCorrelationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-unsanctioned-anomaly-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns aggregate counts (distinct agents, distinct owners, and total events) for anomalies of type **unsanctioned_app** across the tenant. Powers the Unsanctioned Agents card on the Agent Registry page.

[API Spec](https://developer.sailpoint.com/docs/api/get-unsanctioned-anomaly-summary-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**UnsanctionedApplicationAnomalySummary**](../models/unsanctioned-application-anomaly-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Unsanctioned application anomaly summary. | UnsanctionedApplicationAnomalySummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get unsanctioned application anomaly summary

try {
    Get-UnsanctionedAnomalySummaryV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-UnsanctionedAnomalySummaryV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UnsanctionedAnomalySummaryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identities-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified**
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**MachineIdentityResponse[]**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine identities. | MachineIdentityResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'identityId eq "2c9180858082150f0180893dbaf44201"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
$Sorters = "nativeIdentity" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List machine identities

try {
    Get-MachineIdentitiesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentitiesV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentitiesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**Machineidentityv2[]**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine identities. | Machineidentityv2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'identityId eq "2c9180858082150f0180893dbaf44201"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count. (optional)
$Sorters = "nativeIdentity" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`. (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List machine identities

try {
    Get-MachineIdentitiesV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentitiesV2 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentitiesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-accounts-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the machine accounts that are linked to a machine identity. It supports the same filters and
sorters as the list machine accounts API, applied to the linked accounts only.

A caller who owns the machine identity can view its linked accounts. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-accounts-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq ""UNKNOWN""`.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable.

### Return type
[**MachineAccount[]**](../models/machine-account)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine accounts linked to the machine identity. | MachineAccount[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'hasEntitlements eq true" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq ""UNKNOWN"'`. (optional)
$Sorters = "id,name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional)

# List linked machine accounts

try {
    Get-MachineIdentityAccountsV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityAccountsV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityAccountsV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-anomalies-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a paginated list of anomalies detected for the specified machine identity (agent).

Set **count=true** to populate the *X-Total-Count* response header with the total number of anomalies for the agent. Combine **limit=0** with **count=true** to retrieve only the count with an empty result body.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-anomalies-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine identity (agent) ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first).
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**Anomaly[]**](../models/anomaly)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of anomalies for the machine identity. | Anomaly[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine identity (agent) ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "-detectedAt" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List machine identity anomalies

try {
    Get-MachineIdentityAnomaliesV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityAnomaliesV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityAnomaliesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-capabilities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns all capabilities, such as MCP servers and tools, that are linked to a machine identity. The list
is not paginated.

A caller who owns the machine identity can view its linked capabilities. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-capabilities-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Machineidentitycapability[]**](../models/machineidentitycapability)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of capabilities linked to the machine identity. | Machineidentitycapability[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List machine identity capabilities

try {
    Get-MachineIdentityCapabilitiesV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityCapabilitiesV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityCapabilitiesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-entitlements-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the entitlements held by the machine accounts that are linked to a machine identity.

A caller who owns the machine identity can view its entitlements. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-entitlements-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName**

### Return type
[**Machineidentityentitlement[]**](../models/machineidentityentitlement)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of entitlements of the machine identity. | Machineidentityentitlement[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'entitlementName sw "Finance"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`. (optional)
$Sorters = "entitlementName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** (optional)

# List machine identity entitlements

try {
    Get-MachineIdentityEntitlementsV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityEntitlementsV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityEntitlementsV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-hostnames-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the distinct hostnames of AI agent machine identities, in ascending order. Hostnames are returned
in lowercase with accents removed.

The API pages with a cursor instead of an offset. To get the next page, pass the last hostname of the current page
as `cursor`. A page with fewer hostnames than `limit` is the last page.

A caller who owns AI agents can list the hostnames of those agents. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-hostnames-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Prefix | **String** |   (optional) | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored.
  Query | Limit | **Int32** |   (optional) (default to 50) | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`.
  Query | Cursor | **String** |   (optional) | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`.

### Return type
**String[]**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A page of AI agent hostnames. | String[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Prefix = "prod-" # String | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. (optional)
$Limit = 50 # Int32 | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`. (optional) (default to 50)
$Cursor = "prod-agent-07.example.com" # String | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`. (optional)

# List AI agent hostnames

try {
    Get-MachineIdentityHostnamesV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityHostnamesV2 -XSailPointExperimental $XSailPointExperimental -Prefix $Prefix -Limit $Limit -Cursor $Cursor  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityHostnamesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-user-entitlements-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of user entitlements associated with machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-user-entitlements-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name**
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**MachineIdentityUserEntitlementResponse[]**](../models/machine-identity-user-entitlement-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine identity user entitlements. | MachineIdentityUserEntitlementResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'machineIdentityId eq "2c9180858082150f0180893dbaf44201"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
$Sorters = "machineIdentityName" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List machine identity's user entitlements

try {
    Get-MachineIdentityUserEntitlementsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityUserEntitlementsV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityUserEntitlementsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-ownership-correlation-configs-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns the OWNER_PRIMARY and OWNER_SECONDARY correlation configs for the specified source resource, creating default rows if they are missing. Use the optional type query parameter to return a single matching config.

[API Spec](https://developer.sailpoint.com/docs/api/list-ownership-correlation-configs-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | ResourceId | **String** | True  | The source resource ID (for example, account or aws:iam-role).
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Type | **String** |   (optional) | When set, filters to the given config type.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**CorrelationConfig[]**](../models/correlation-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of correlation configs. | CorrelationConfig[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$ResourceId = "aws:iam-role" # String | The source resource ID (for example, account or aws:iam-role).
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Type = "OWNER_PRIMARY" # String | When set, filters to the given config type. (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List ownership correlation configs

try {
    Get-OwnershipCorrelationConfigsV1 -SourceId $SourceId -ResourceId $ResourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-OwnershipCorrelationConfigsV1 -SourceId $SourceId -ResourceId $ResourceId -XSailPointExperimental $XSailPointExperimental -Type $Type -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-OwnershipCorrelationConfigsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-ownership-correlation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Selectively updates an ownership correlation config using an RFC 6902 JSONPatch payload. Only replace on /attributes (full object) and replace on /rules (full array; merge by stable rule id, remove rules omitted from the array) are allowed.

[API Spec](https://developer.sailpoint.com/docs/api/patch-ownership-correlation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | The Source ID.
Path   | ResourceId | **String** | True  | The source resource ID (for example, account or aws:iam-role).
Path   | ConfigId | **String** | True  | The correlation config ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the correlation config.

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated correlation config. | CorrelationConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | The Source ID.
$ResourceId = "aws:iam-role" # String | The source resource ID (for example, account or aws:iam-role).
$ConfigId = "f5dd23fe-3414-42b7-bb1c-869400ad7a10" # String | The correlation config ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | The JSONPatch payload used to update the correlation config.
 

# Patch ownership correlation config

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-OwnershipCorrelationConfigV1 -SourceId $SourceId -ResourceId $ResourceId -ConfigId $ConfigId -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-OwnershipCorrelationConfigV1 -SourceId $SourceId -ResourceId $ResourceId -ConfigId $ConfigId -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-OwnershipCorrelationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-machine-identity-aggregation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Starts a machine identity (AI Agents) aggregation on the specified source.

[API Spec](https://developer.sailpoint.com/docs/api/start-machine-identity-aggregation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | MachineIdentityAggregationRequest | [**MachineIdentityAggregationRequest**](../models/machine-identity-aggregation-request) | True  | 

### Return type
[**MachineIdentityAggregationResponse**](../models/machine-identity-aggregation-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine Identity Aggregation was started successfully. | MachineIdentityAggregationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MachineIdentityAggregationRequest = @"{
  "datasetIds" : [ "source:datasetId12345", "source:datasetId12345" ],
  "disableOptimization" : false
}"@

# Start machine identity aggregation

try {
    $Result = ConvertFrom-JsonToMachineIdentityAggregationRequest -Json $MachineIdentityAggregationRequest
    Start-MachineIdentityAggregationV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -MachineIdentityAggregationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-MachineIdentityAggregationV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -MachineIdentityAggregationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-MachineIdentityAggregationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-machine-identities-in-bulk-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API applies the same JSON Patch operations to up to 100 machine identities and returns a result for each
requested ID. Only `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary` can
be patched. Patching any other path returns `400`. When access requests for non-human identities are not enabled
for the tenant, a patch that changes `/userEntitlements` returns `403`.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was updated.

A caller who owns a machine identity can update it. Other callers need the **idn:mis-identity:update** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identities-in-bulk-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | MachineIdentityBulkUpdateRequest | [**MachineIdentityBulkUpdateRequest**](../models/machine-identity-bulk-update-request) | True  | 

### Return type
[**MachineIdentityBulkResult[]**](../models/machine-identity-bulk-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
207 | A result for each requested machine identity ID. | MachineIdentityBulkResult[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MachineIdentityBulkUpdateRequest = @"{
  "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180858082150f0180893dbaf44201" ],
  "jsonPatch" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "Agent used by the finance team"
  } ]
}"@

# Bulk update machine identities

try {
    $Result = ConvertFrom-JsonToMachineIdentityBulkUpdateRequest -Json $MachineIdentityBulkUpdateRequest
    Update-MachineIdentitiesInBulkV2 -XSailPointExperimental $XSailPointExperimental -MachineIdentityBulkUpdateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineIdentitiesInBulkV2 -XSailPointExperimental $XSailPointExperimental -MachineIdentityBulkUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineIdentitiesInBulkV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**MachineIdentityResponse**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Machine Identity object. | MachineIdentityResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody =  # SystemCollectionsHashtable[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $RequestBody = @"[{"op":"add","path":"/attributes/securityRisk","value":"medium"}]"@ # SystemCollectionsHashtable[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Update machine identity details

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-MachineIdentityV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineIdentityV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to selectively update machine identity details using a JSONPatch payload.

Patchable fields include **name**, **description**, **nativeIdentity**, **subtype**, **environment**, **attributes**, **owners**, **userEntitlements**, **manuallyEdited**, and **businessApplicationRefs** (when Business Applications is enabled for the tenant).


When Business Applications is enabled for the tenant, `/businessApplicationRefs` may be replaced with at most one MANUAL Business Application
reference, or cleared with an empty array. Patching `/businessApplicationRefs` when Business Applications is not enabled returns `400`.
Existing `AUTOMATIC` correlations cannot be overridden (`400` / `ILLEGAL_UPDATE_ATTEMPT`). Unknown BA id returns `404`.


`entroId`, `insights`, `sessionCount`, and `suspiciousSessionCount` are read-only. A patch that targets them is rejected
with `400`; aggregation is the only writer. `entroRiskBand`, `agentSource`, and `integrationType` are not response fields.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine Identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Machineidentityv2**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated machine identity object. | Machineidentityv2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Machine Identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Partial update of machine identity

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-MachineIdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineIdentityV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineIdentityV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
