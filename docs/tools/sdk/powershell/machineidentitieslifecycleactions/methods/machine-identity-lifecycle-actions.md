# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActions
  Experimental APIs for machine identity lifecycle requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;), including
approval and provisioning status. Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Read and cancel by &#x60;requestId&#x60; return **403** for authorization denials
(&#x60;FORBIDDEN.lifecycle-request-access-denied&#x60;) and non-&#x60;AI_AGENT&#x60; rows
(&#x60;FORBIDDEN.unsupported-type&#x60;). Unknown ids and target-type mismatches return **404**
(&#x60;NOT_FOUND.detailed&#x60;).
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-MachineIdentityLifecycleActionV1**](#cancel-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel lifecycle action
[**Get-MachineIdentityLifecycleActionV1**](#get-machine-identity-lifecycle-action-v1) | **GET** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get lifecycle action by requestId
[**Get-MachineIdentityLifecycleActionsV1**](#list-machine-identity-lifecycle-actions-v1) | **GET** `/machine-identities/v1/lifecycle-actions` | List lifecycle actions
[**Submit-MachineIdentityLifecycleActionV1**](#submit-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/{id}/lifecycle-actions` | Submit machine identity lifecycle action


## cancel-machine-identity-lifecycle-action-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Attempts to cancel a lifecycle request before provisioning starts.

The path `requestId` is authoritative for lookup and authorization. The request body is
optional and may carry cancel metadata such as `comment`. Any `requestId` value in the body is
ignored.

Workflow cancel signaling is attempted before the request is persisted as `CANCELING`. If
signaling fails, the service returns **503** (`DOWNSTREAM_SERVICE_UNAVAILABLE`, cause
`workflow-signal-failed`) and the lifecycle request status is unchanged.

Invalid cancel states are returned as **400** (`INVALID_REQUEST_IN_CURRENT_STATE` variants).

Cancel authorization matches https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1:
the original submitter is always allowed; otherwise callers must have the
`idn:machine-identity-lifecycle-action:manage` scope **and** target role-context access.

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context.
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`.

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType`/target-identity subtype
  mismatch.


[API Spec](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RequestId | **String** | True  | Lifecycle request identifier.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CancelLifecycleActionRequest | [**CancelLifecycleActionRequest**](../models/cancel-lifecycle-action-request) |   (optional) | 

### Return type
[**CancelLifecycleActionResponse**](../models/cancel-lifecycle-action-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The lifecycle request cancel was accepted. | CancelLifecycleActionResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$RequestId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890" # String | Lifecycle request identifier.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CancelLifecycleActionRequest = @"{
  "comment" : "Cancelling - will resubmit after maintenance window"
}"@

# Cancel lifecycle action

try {
    Suspend-MachineIdentityLifecycleActionV1 -RequestId $RequestId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Suspend-MachineIdentityLifecycleActionV1 -RequestId $RequestId -XSailPointExperimental $XSailPointExperimental -CancelLifecycleActionRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-MachineIdentityLifecycleActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-identity-lifecycle-action-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns one lifecycle request snapshot by `requestId`. Used for request-level inspection,
including cancel acceptance and subsequent status changes.

The original requester is always allowed to read their request. Otherwise, callers must have
the `idn:machine-identity-lifecycle-action:manage` scope **and** role-context access to the target
machine identity (organization admin, source admin, scoped source sub-admin, or effective owner).

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context (response includes `requestId` as a parameter).
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`
  (`targetType` on read-by-request-id paths).

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType` does not match the
  target machine identity's subtype-to-resource-type mapping.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | RequestId | **String** | True  | Lifecycle request identifier.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**LifecycleActionRequest**](../models/lifecycle-action-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Lifecycle action request snapshot. | LifecycleActionRequest
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$RequestId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890" # String | Lifecycle request identifier.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get lifecycle action by requestId

try {
    Get-MachineIdentityLifecycleActionV1 -RequestId $RequestId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityLifecycleActionV1 -RequestId $RequestId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityLifecycleActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-identity-lifecycle-actions-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Lists lifecycle requests visible to the requester identity in the current request context.

Results are automatically scoped to the calling identity. If requester identity context is
missing, an empty list is returned.

When `limit` is omitted, this endpoint applies a default limit of 50.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first).
  Query | Limit | **Int32** |   (optional) (default to 50) | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**LifecycleActionRequest[]**](../models/lifecycle-action-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of lifecycle action requests for the requester. | LifecycleActionRequest[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'status in ("RECEIVED","COMPLETED")' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional)
$Sorters = "-created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional)
$Limit = 50 # Int32 | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List lifecycle actions

try {
    Get-MachineIdentityLifecycleActionsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentityLifecycleActionsV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentityLifecycleActionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## submit-machine-identity-lifecycle-action-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a lifecycle request for the target machine identity and returns the created lifecycle
snapshot.

The response includes the generated `requestId`, which is used by
https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1,
https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1, and
https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1

Authorization is enforced in the service layer. Callers must have the
`idn:machine-identity-lifecycle-action:manage` scope or role-context access to the target machine
identity (organization admin, source admin, scoped source sub-admin, or effective owner).

Supported actions are `DEACTIVATE`, `ACTIVATE`.


[API Spec](https://developer.sailpoint.com/docs/api/submit-machine-identity-lifecycle-action-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Machine identity ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | LifecycleActionSubmitRequest | [**LifecycleActionSubmitRequest**](../models/lifecycle-action-submit-request) | True  | 

### Return type
[**LifecycleActionSubmitResponse**](../models/lifecycle-action-submit-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The lifecycle request was created. | LifecycleActionSubmitResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0" # String | Machine identity ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$LifecycleActionSubmitRequest = @"{
  "comments" : [ {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  }, {
    "comment" : "Suspending agent until security review completes"
  } ],
  "action" : "DEACTIVATE"
}"@

# Submit machine identity lifecycle action

try {
    $Result = ConvertFrom-JsonToLifecycleActionSubmitRequest -Json $LifecycleActionSubmitRequest
    Submit-MachineIdentityLifecycleActionV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -LifecycleActionSubmitRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Submit-MachineIdentityLifecycleActionV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -LifecycleActionSubmitRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Submit-MachineIdentityLifecycleActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
