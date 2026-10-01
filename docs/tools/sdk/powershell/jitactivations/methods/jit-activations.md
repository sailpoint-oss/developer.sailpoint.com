# JITActivations

# JITActivations
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections,
and to search activation history.

OAuth scopes: **idn:jit-activation-workflow:*** (activate, extend, deactivate, manage) for workflow APIs.
**idn:jit-activation-history:read** (admin history view) and **idn:jit-activation-history-self:read** (self history view).
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-JitActivationHistoryForCurrentIdentityV1**](#list-jit-activation-history-for-current-identity-v1) | **GET** `/jit-activation-history/v1/current-identity` | List JIT activation history (self)
[**Get-JitActivationHistoryV1**](#list-jit-activation-history-v1) | **GET** `/jit-activation-history/v1` | List JIT activation history (admin)
[**Start-ActivateWorkflowV1**](#start-activate-workflow-v1) | **POST** `/jit-activations/v1/activate` | Start JIT activation workflow
[**Start-DeactivateWorkflowV1**](#start-deactivate-workflow-v1) | **POST** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**Start-ExtendWorkflowV1**](#start-extend-workflow-v1) | **POST** `/jit-activations/v1/extend` | Extend JIT activation workflow


## list-jit-activation-history-for-current-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns JIT activation history records for the authenticated identity only.

This is the self-service view - results are automatically scoped to the calling identity.
Requires `idn:jit-activation-history-self:read`.

Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.


[API Spec](https://developer.sailpoint.com/docs/api/list-jit-activation-history-for-current-identity-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first).
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in*

### Return type
[**Jitactivationhistorydocument[]**](../models/jitactivationhistorydocument)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of JIT activation history records for the authenticated identity. | Jitactivationhistorydocument[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "-activationInitiated" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional)
$SearchAfter = "2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3" # String | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id (optional)
$Filters = 'status eq "PROVISIONED"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional)

# List JIT activation history (self)

try {
    Get-JitActivationHistoryForCurrentIdentityV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-JitActivationHistoryForCurrentIdentityV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -SearchAfter $SearchAfter -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-JitActivationHistoryForCurrentIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-jit-activation-history-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns JIT activation history records for the tenant.

This is the admin/operator view - it returns activations across all identities in the tenant.
Requires `idn:jit-activation-history:read`.

Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.


[API Spec](https://developer.sailpoint.com/docs/api/list-jit-activation-history-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first).
  Query | SearchAfter | **String** |   (optional) | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in*

### Return type
[**Jitactivationhistorydocument[]**](../models/jitactivationhistorydocument)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of JIT activation history records matching the request. | Jitactivationhistorydocument[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "-activationInitiated" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional)
$SearchAfter = "2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3" # String | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter=2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&sorters=activationInitiated,id (optional)
$Filters = 'status eq "PROVISIONED"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional)

# List JIT activation history (admin)

try {
    Get-JitActivationHistoryV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-JitActivationHistoryV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters -SearchAfter $SearchAfter -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-JitActivationHistoryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-activate-workflow-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-activate-workflow-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JitActivationActivateRequest | [**JitActivationActivateRequest**](../models/jit-activation-activate-request) | True  | 

### Return type
[**JitActivationActivateResponse**](../models/jit-activation-activate-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The activation workflow was accepted and is running.  | JitActivationActivateResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$JitActivationActivateRequest = @"{
  "metaData" : {
    "threadId" : "1699887766.123456",
    "slackUserId" : "U123",
    "messageId" : "1699887770.654321",
    "type" : "slack",
    "commandText" : "/jit activate",
    "channelId" : "C456",
    "workspaceId" : "T789"
  },
  "activationPeriodMins" : 120,
  "requestOrigin" : "slack",
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
}"@

# Start JIT activation workflow

try {
    $Result = ConvertFrom-JsonToJitActivationActivateRequest -Json $JitActivationActivateRequest
    Start-ActivateWorkflowV1 -XSailPointExperimental $XSailPointExperimental -JitActivationActivateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ActivateWorkflowV1 -XSailPointExperimental $XSailPointExperimental -JitActivationActivateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ActivateWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-deactivate-workflow-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-deactivate-workflow-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JitActivationDeactivateRequest | [**JitActivationDeactivateRequest**](../models/jit-activation-deactivate-request) | True  | 

### Return type
[**JitActivationDeactivateResponse**](../models/jit-activation-deactivate-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The deactivation signal was sent to the workflow.  | JitActivationDeactivateResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$JitActivationDeactivateRequest = @"{
  "metaData" : {
    "threadId" : "1699887766.123456",
    "slackUserId" : "U123",
    "messageId" : "1699887770.654321",
    "type" : "slack",
    "commandText" : "/jit activate",
    "channelId" : "C456",
    "workspaceId" : "T789"
  },
  "requestOrigin" : "slack",
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
}"@

# Deactivate JIT activation workflow

try {
    $Result = ConvertFrom-JsonToJitActivationDeactivateRequest -Json $JitActivationDeactivateRequest
    Start-DeactivateWorkflowV1 -XSailPointExperimental $XSailPointExperimental -JitActivationDeactivateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-DeactivateWorkflowV1 -XSailPointExperimental $XSailPointExperimental -JitActivationDeactivateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-DeactivateWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-extend-workflow-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-extend-workflow-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JitActivationExtendRequest | [**JitActivationExtendRequest**](../models/jit-activation-extend-request) | True  | 

### Return type
[**JitActivationExtendResponse**](../models/jit-activation-extend-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The extend signal was sent to the workflow.  | JitActivationExtendResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartActivateWorkflowV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartActivateWorkflowV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$JitActivationExtendRequest = @"{
  "metaData" : {
    "threadId" : "1699887766.123456",
    "slackUserId" : "U123",
    "messageId" : "1699887770.654321",
    "type" : "slack",
    "commandText" : "/jit activate",
    "channelId" : "C456",
    "workspaceId" : "T789"
  },
  "activationPeriodExtensionMins" : 120,
  "requestOrigin" : "slack",
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3"
}"@

# Extend JIT activation workflow

try {
    $Result = ConvertFrom-JsonToJitActivationExtendRequest -Json $JitActivationExtendRequest
    Start-ExtendWorkflowV1 -XSailPointExperimental $XSailPointExperimental -JitActivationExtendRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ExtendWorkflowV1 -XSailPointExperimental $XSailPointExperimental -JitActivationExtendRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ExtendWorkflowV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
