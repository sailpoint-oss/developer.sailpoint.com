# GenericRequestApprovalConfig

# GenericRequestApprovalConfig
  Use this API to view and update the approval settings for machine identity requests, such as requests to activate or deactivate an AI agent, at the resource, subtype, source, or tenant level. Each scope holds one setting per request action; an action with no setting inherits the organization-level approval configuration.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-GenericRequestApprovalConfigV1**](#get-generic-request-approval-config-v1) | **GET** `/generic-request-approval-config/v1` | Get generic request approval config
[**Update-GenericRequestApprovalConfigV1**](#update-generic-request-approval-config-v1) | **PATCH** `/generic-request-approval-config/v1/{id}` | Patch generic request approval config


## get-generic-request-approval-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the approval configuration for one scope. The scope is identified by `targetType` and, depending
on the target type, `targetId` and `sourceId`.


The response holds one entry per action that the target type supports. An action with no stored setting is
returned as `{}`, which means it inherits the organization-level approval configuration. A scope that has never
been configured returns `200` with every action set to `{}`, and the response always carries the `id` to use with
the update API.


Actions by target type:


**RESOURCE**: *ACTIVATE, DEACTIVATE*


**SUBTYPE**: *CREATE, DELETE*


**SOURCE**: *DELETE*


**GLOBAL**: *ACTIVATE, DEACTIVATE*


Only resources of the AI agent type support resource-level approval settings; any other resource returns `400`.
An unknown source, resource, or subtype returns `400`.


When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
enabled for the tenant, it returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-generic-request-approval-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | TargetType | **String** | True  | The kind of scope to read.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | TargetId | **String** |   (optional) | The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the `sourceId`, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns `400`.
  Query | SourceId | **String** |   (optional) | The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**.

### Return type
[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval configuration for the scope. | GenericRequestApprovalConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetGenericRequestApprovalConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetGenericRequestApprovalConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$TargetType = "RESOURCE" # String | The kind of scope to read.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$TargetId = "aws:bedrock-agent-alias-version" # String | The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the `sourceId`, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns `400`. (optional)
$SourceId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**. (optional)

# Get generic request approval config

try {
    Get-GenericRequestApprovalConfigV1 -TargetType $TargetType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-GenericRequestApprovalConfigV1 -TargetType $TargetType -XSailPointExperimental $XSailPointExperimental -TargetId $TargetId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-GenericRequestApprovalConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-generic-request-approval-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to update the approval configuration of one scope using a JSON Patch payload. Use the `id` returned
by the get API.


Patchable paths are `/approvalConfig`, which replaces every action at once, and `/approvalConfig/{ACTION}` for each
action the scope's target type supports. One request can update several actions. `id`, `targetType`, and
`targetId` identify the scope and can't be patched; a patch that targets any other path returns `400`.


To return an action to the organization-level approval configuration, `remove` it or `replace` it with `{}`.


Each configured action uses one scheme:


**APPROVAL**: requires `approvers` and `comments`. `approvers` is a comma-separated list of approver tokens:
`sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`,
`machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. For the
**SUBTYPE** **DELETE** action, `accountOwner` is also allowed. Tokens without an ID can appear at most once, and
IDs must be unique and must exist. `comments` is one of `ALL`, `APPROVAL`, `REJECTION`, or `OFF`.


**WORKFLOW**: requires `workflowId`, the UUID of a workflow. The same workflow can't be used for more than one
action. When workflow approvals are enabled for the tenant, the workflow must exist, be enabled, and use the
trigger for its action (`idn:machine-identity-activate` for ACTIVATE, `idn:machine-identity-deactivate` for
DEACTIVATE).


The **GLOBAL** scope only accepts the **WORKFLOW** scheme.


The ID must be a UUID; any other value returns `400`. When no approval configuration exists for the ID, this API
returns `404`.


When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
enabled for the tenant, it returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-generic-request-approval-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval configuration ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated approval configuration for the scope. | GenericRequestApprovalConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetGenericRequestApprovalConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetGenericRequestApprovalConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "0f2c7a9e-3b4d-4e5f-8a6b-7c8d9e0f1a2b" # String | Approval configuration ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch generic request approval config

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-GenericRequestApprovalConfigV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-GenericRequestApprovalConfigV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-GenericRequestApprovalConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
