# MachineIdentityLifecycleActions

# MachineIdentityLifecycleActions
  Use this API to implement machine identity lifecycle action functionality.
With this functionality in place, administrators and machine identity owners can activate or deactivate machine identities, track the approval and provisioning status of each request, and cancel requests before provisioning starts.

A lifecycle action is a request to change whether a machine identity is active.
For example, an administrator may deactivate an agent while a security review is in progress, and then activate it again once the review is complete.

Lifecycle actions are currently supported only for machine identities of type Agent.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-MachineIdentityLifecycleActionV1**](#cancel-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel machine identity lifecycle action
[**Get-MachineIdentityLifecycleActionV1**](#get-machine-identity-lifecycle-action-v1) | **GET** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get machine identity lifecycle action
[**Get-MachineIdentityLifecycleActionsV1**](#list-machine-identity-lifecycle-actions-v1) | **GET** `/machine-identities/v1/lifecycle-actions` | List machine identity lifecycle actions
[**Submit-MachineIdentityLifecycleActionV1**](#submit-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/{id}/lifecycle-actions` | Submit machine identity lifecycle action


## cancel-machine-identity-lifecycle-action-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Cancels a lifecycle action request that hasn't started provisioning yet. When the cancel is
accepted, the request moves to `CANCELING` status.

A request can't be canceled once provisioning has started, after it has finished, or while a cancel
is already in progress.

The request body is optional. Use it to add a comment explaining why the request was canceled.

You can always cancel requests that you submitted. To cancel a request that someone else submitted,
you need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the
machine identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin
for the machine identity's source, or the machine identity's owner.

If the cancel can't be completed, the API returns an error and the request stays in `CANCELING`
status.


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

# Cancel machine identity lifecycle action

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
Returns a single lifecycle action request, including its current status, approval details, and
provisioning progress. Use it to follow a request after you submit or cancel it.

You can always view requests that you submitted. To view a request that someone else submitted, you
need the `idn:machine-identity:lifecycle-action` right **and** admin or owner access to the machine
identity. Admin or owner access means you're an org admin, a source admin, a source sub-admin for the
machine identity's source, or the machine identity's owner.


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
200 | The lifecycle action request. | LifecycleActionRequest
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

# Get machine identity lifecycle action

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
Returns the lifecycle action requests that you submitted. Requests that other users submitted
aren't included, even if you're an admin. If the call isn't made on behalf of an identity, the list
is empty.

When `limit` is omitted, up to 50 results are returned.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The `resourceType` filter matches the `targetType` field in the response.
  Query | Sorters | **String** |   (optional) (default to "-created") | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first).
  Query | Limit | **Int32** |   (optional) (default to 50) | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**LifecycleActionRequest[]**](../models/lifecycle-action-request)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Lifecycle action requests that you submitted. | LifecycleActionRequest[]
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
$Filters = 'status in ("RECEIVED","COMPLETED")' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*  The `resourceType` filter matches the `targetType` field in the response. (optional)
$Sorters = "-created" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional) (default to "-created")
$Limit = 50 # Int32 | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List machine identity lifecycle actions

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
Submits a request to activate or deactivate a machine identity. Supported actions are `ACTIVATE`
and `DEACTIVATE`.

**Note:** Lifecycle actions are currently supported only for machine identities of type **Agent**.

The response includes a `requestId`. Use it to
[get the request](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1) or
[cancel it](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1).
To see all the requests you've submitted, use
[list machine identity lifecycle actions](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1).

Only one lifecycle action can be in progress for a machine identity at a time. If another action is
already in progress for the machine identity, the request is rejected.

To submit a lifecycle action, you need the `idn:machine-identity:lifecycle-action` right, or admin or
owner access to the machine identity. Admin or owner access means you're an org admin, a source admin,
a source sub-admin for the machine identity's source, or the machine identity's owner.


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
