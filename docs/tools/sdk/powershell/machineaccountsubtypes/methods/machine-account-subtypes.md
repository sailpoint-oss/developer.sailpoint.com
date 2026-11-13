# MachineAccountSubtypes

# MachineAccountSubtypes
  Use this API to get, update, and delete machine account subtype for sources.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SourceSubtypeOverrideV2**](#create-source-subtype-override-v2) | **POST** `/source-subtypes/v2/{id}/overrides` | Override source connector subtype
[**New-SourceSubtypeProvisioningPolicyV2**](#create-source-subtype-provisioning-policy-v2) | **POST** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**New-SourceSubtypeV1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**New-SourceSubtypeV2**](#create-source-subtype-v2) | **POST** `/source-subtypes/v2` | Create subtype
[**Remove-MachineAccountSubtypeV1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**Remove-MachineAccountSubtypeV2**](#delete-machine-account-subtype-v2) | **DELETE** `/source-subtypes/v2/{id}` | Delete subtype by ID
[**Remove-SourceSubtypeProvisioningPolicyV2**](#delete-source-subtype-provisioning-policy-v2) | **DELETE** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**Get-MachineAccountSubtypeApprovalConfigV1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**Get-SourceSubtypeByIdV1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**Get-SourceSubtypeByIdV2**](#get-source-subtype-by-id-v2) | **GET** `/source-subtypes/v2/{id}` | Get subtype by ID
[**Get-SourceSubtypeProvisioningPolicyV2**](#get-source-subtype-provisioning-policy-v2) | **GET** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**Get-SourceSubtypeTargetsV2**](#list-source-subtype-targets-v2) | **GET** `/source-subtypes/v2/targets` | List subtype targets
[**Get-SourceSubtypesV1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**Get-SourceSubtypesV2**](#list-source-subtypes-v2) | **GET** `/source-subtypes/v2` | List subtypes
[**Invoke-LoadBulkSourceSubtypesV1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**Update-MachineAccountSubtypeV1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**Update-MachineAccountSubtypeV2**](#patch-machine-account-subtype-v2) | **PATCH** `/source-subtypes/v2/{id}` | Patch subtype by ID
[**Update-SourceSubtypeProvisioningPolicyV2**](#patch-source-subtype-provisioning-policy-v2) | **PATCH** `/source-subtypes/v2/{id}/provisioning-policy` | Patch subtype provisioning policy
[**Update-MachineAccountSubtypeApprovalConfigV1**](#update-machine-account-subtype-approval-config-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-override-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a source subtype that overrides a connector subtype on one source. The new source subtype copies the
connector subtype's machine account configuration and provisioning policy at the time of the request. Later
changes to the connector subtype are not applied to the override.

The subtype identified by `id` must be a `CONNECTOR` subtype (otherwise `400`) that is in the source's effective
subtypes. An unknown subtype or source returns `404`. The request is rejected if the tenant's subtype
configuration cannot be changed this way.

The caller needs the `idn:source-subtypes:create` right, held by org admins, source admins and source sub-admins.
A caller without it receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-override-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the connector subtype to override.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SourceSubtypeOverrideRequest | [**SourceSubtypeOverrideRequest**](../models/source-subtype-override-request) | True  | 

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created source subtype that overrides the connector subtype. | SourceSubtypeV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the connector subtype to override.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SourceSubtypeOverrideRequest = @"{
  "sourceId" : "6d0458373bec4b4b80460992b76016da"
}"@

# Override source connector subtype

try {
    $Result = ConvertFrom-JsonToSourceSubtypeOverrideRequest -Json $SourceSubtypeOverrideRequest
    New-SourceSubtypeOverrideV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -SourceSubtypeOverrideRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeOverrideV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -SourceSubtypeOverrideRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SourceSubtypeOverrideV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-source-subtype-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create the machine account creation provisioning policy of a subtype of any tier. A subtype has at most one
provisioning policy; the request is rejected if one already exists.

`id` and `subtypeId` must not be supplied (otherwise `400`). `usageType` must be `CREATE_MACHINE_ACCOUNT` or
omitted. `name` defaults to the subtype's display name.

Who can call this API depends on the tier of the subtype:

* `SOURCE`: requires the `idn:source-subtypes:update` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:update` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SubtypeProvisioningPolicy | [**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy) | True  | 
  Query | UseDefaultFields | **Boolean** |   (optional) (default to $true) | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes.

### Return type
[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created subtype provisioning policy. | SubtypeProvisioningPolicy
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SubtypeProvisioningPolicy = @"{
  "name" : "Service Account",
  "description" : "Fields collected when creating a service account.",
  "id" : "d7ae9ea3-507f-4d00-9d4f-b4464b344b88",
  "subtypeId" : "43bdd144-4b17-4fce-a744-17c7fd3e717b",
  "fields" : [ {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "{firstname}.{lastname}{uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  }, {
    "isRequired" : false,
    "transform" : {
      "type" : "rule",
      "attributes" : {
        "name" : "Create Unique LDAP Attribute"
      }
    },
    "isMultiValued" : false,
    "name" : "userName",
    "attributes" : {
      "template" : "{firstname}.{lastname}{uniqueCounter}",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE_MACHINE_ACCOUNT"
}"@
$UseDefaultFields = $true # Boolean | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes. (optional) (default to $true)

# Create subtype provisioning policy

try {
    $Result = ConvertFrom-JsonToSubtypeProvisioningPolicy -Json $SubtypeProvisioningPolicy
    New-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -SubtypeProvisioningPolicy $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -SubtypeProvisioningPolicy $Result -UseDefaultFields $UseDefaultFields  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SourceSubtypeProvisioningPolicyV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-source-subtype-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CreateSourceSubtypeV1Request | [**CreateSourceSubtypeV1Request**](../models/create-source-subtype-v1-request) | True  | 

### Return type
[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created machine account subtype. | SourceSubtypeWithSource
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CreateSourceSubtypeV1Request = @"{"sourceId":"6d0458373bec4b4b80460992b76016da","technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}"@

# Create subtype

try {
    $Result = ConvertFrom-JsonToCreateSourceSubtypeV1Request -Json $CreateSourceSubtypeV1Request
    New-SourceSubtypeV1 -XSailPointExperimental $XSailPointExperimental -CreateSourceSubtypeV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeV1 -XSailPointExperimental $XSailPointExperimental -CreateSourceSubtypeV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SourceSubtypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-source-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a machine account subtype at the source tier or the connector tier.

A `SOURCE` subtype applies to the one source identified by `targetId`. A `CONNECTOR` subtype applies to every
source of the connector type identified by `targetId`, which must be a registered connector type. `targetType`
defaults to `SOURCE`. `CONNECTOR_VARIANT` is not supported and returns `400`. `technicalName`, `displayName` and
`description` are required, and the technical name and display name must be unique within the tier's scope.

Who can call this API depends on the requested tier:

* `SOURCE` (or omitted): requires the `idn:source-subtypes:create` right, held by org admins, source admins and
source sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:create` right, held by org admins.

A caller without the right for the requested tier receives `404`, not `403`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CreateSourceSubtypeV2Request | [**CreateSourceSubtypeV2Request**](../models/create-source-subtype-v2-request) | True  | 

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created machine account subtype. | SourceSubtypeV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CreateSourceSubtypeV2Request = @"{
  "targetName" : "Active Directory",
  "targetId" : "active-directory",
  "displayName" : "Service Account",
  "description" : "Accounts used by automated services.",
  "targetType" : "CONNECTOR",
  "type" : "MACHINE",
  "classification" : "MACHINE",
  "technicalName" : "service-account"
}"@

# Create subtype

try {
    $Result = ConvertFrom-JsonToCreateSourceSubtypeV2Request -Json $CreateSourceSubtypeV2Request
    New-SourceSubtypeV2 -XSailPointExperimental $XSailPointExperimental -CreateSourceSubtypeV2Request $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeV2 -XSailPointExperimental $XSailPointExperimental -CreateSourceSubtypeV2Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SourceSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-account-subtype-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Subtype deleted successfully. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete subtype by ID

try {
    Remove-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineAccountSubtypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-account-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a machine account subtype of any tier by subtype ID. System-managed subtypes, and subtypes still assigned
to accounts, cannot be deleted and the request is rejected.

Who can call this API depends on the tier of the stored subtype:

* `SOURCE`: requires the `idn:source-subtypes:delete` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:delete` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Subtype deleted successfully. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete subtype by ID

try {
    Remove-MachineAccountSubtypeV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineAccountSubtypeV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineAccountSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-source-subtype-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete the machine account creation provisioning policy of a subtype of any tier. Returns `404` when the subtype
has no provisioning policy.

Who can call this API depends on the tier of the subtype:

* `SOURCE`: requires the `idn:source-subtypes:delete` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:delete` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Provisioning policy deleted successfully. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete subtype provisioning policy

try {
    Remove-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SourceSubtypeProvisioningPolicyV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-account-subtype-approval-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-approval-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | SubtypeId | **String** | True  | machine subtype id.

### Return type
[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a MachineAccountSubtypeConfigDto for machine account creation and deletion approval config by subtypeId. | MachineAccountSubtypeConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SubtypeId = "ef38f94347e94562b5bb8424a56498d8" # String | machine subtype id.

# Machine Subtype Approval Config

try {
    Get-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId 
    
    # Below is a request that includes all optional parameters
    # Get-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineAccountSubtypeApprovalConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-subtype-by-id-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine account subtype object. | SourceSubtypeWithSource
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get subtype by ID

try {
    Get-SourceSubtypeByIdV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypeByIdV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypeByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-subtype-by-id-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a machine account subtype of any tier by subtype ID. The response may include `target.supportsProvisioning`.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine account subtype. | SourceSubtypeV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get subtype by ID

try {
    Get-SourceSubtypeByIdV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypeByIdV2 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypeByIdV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-subtype-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the machine account creation provisioning policy of a subtype of any tier. Returns `404` when the subtype has
no provisioning policy.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | SourceId | **String** |   (optional) | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found.

### Return type
[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Subtype provisioning policy. | SubtypeProvisioningPolicy
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional)

# Get subtype provisioning policy

try {
    Get-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypeProvisioningPolicyV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-source-subtype-targets-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List the targets that have machine account subtypes, with subtype and source counts for each.

A `targetType` filter is required. `targetType eq "CONNECTOR"` returns one item per connector type.
`targetType eq "SOURCE"` returns one item per source subtype. A missing or unsupported `targetType` filter returns
`400`.

The caller needs the `idn:source-subtypes:read` right.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default.

### Return type
[**SubtypeTargetSummary[]**](../models/subtype-target-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of subtype targets. The &#x60;X-Total-Count&#x60; header is returned when &#x60;count&#x3D;true&#x60;. | SubtypeTargetSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'targetType eq "CONNECTOR"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "-subtypeCount" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. (optional)

# List subtype targets

try {
    Get-SourceSubtypeTargetsV2 -Filters $Filters -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypeTargetsV2 -Filters $Filters -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypeTargetsV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-source-subtypes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName**
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**SourceSubtypeWithSource[]**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine account subtypes. | SourceSubtypeWithSource[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'displayName eq "sail"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Retrieve all subtypes

try {
    Get-SourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-source-subtypes-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine account subtypes defined at the source tier and the connector tier.

Without `sourceId`, the API lists every subtype in the tenant, and `filters` and `sorters` apply.

With `sourceId`, the API returns the source's effective subtypes: the subtypes defined for the source plus the
subtypes defined for the source's connector type. When a source subtype has the same technical name as a connector
subtype, only the source subtype is returned and its `origin` is `CONNECTOR`. `filters` cannot be used in this mode.
Use `targetType` to return only one tier of the effective set. An unknown `sourceId` returns `404`.

With `sourceId` and `effectiveSet=false`, the API returns only the subtypes defined for that source, and `filters`
apply.

The caller needs the `idn:source-subtypes:read` right.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | SourceId | **String** |   (optional) | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant.
  Query | EffectiveSet | **Boolean** |   (optional) (default to $true) | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`.
  Query | TargetType | **String** |   (optional) | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`.
  Query | IncludeConfigs | **Boolean** |   (optional) (default to $false) | When `true`, each item includes a summary of its machine account creation configuration in `config`.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified**

### Return type
[**SourceSubtypeV2WithConfig[]**](../models/source-subtype-v2-with-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine account subtypes. Items include &#x60;config&#x60; when &#x60;includeConfigs&#x3D;true&#x60;. The &#x60;X-Total-Count&#x60; header is returned when &#x60;count&#x3D;true&#x60;. | SourceSubtypeV2WithConfig[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. (optional)
$EffectiveSet = $true # Boolean | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`. (optional) (default to $true)
$TargetType = "SOURCE" # String | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`. (optional)
$IncludeConfigs = $false # Boolean | When `true`, each item includes a summary of its machine account creation configuration in `config`. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'targetType eq "CONNECTOR"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`. (optional)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** (optional)

# List subtypes

try {
    Get-SourceSubtypesV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypesV2 -XSailPointExperimental $XSailPointExperimental -SourceId $SourceId -EffectiveSet $EffectiveSet -TargetType $TargetType -IncludeConfigs $IncludeConfigs -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## load-bulk-source-subtypes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/load-bulk-source-subtypes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | 

### Return type
[**SourceSubtypeWithSource[]**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of source subtypes. | SourceSubtypeWithSource[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "38453251-6be2-5f8f-df93-5ce19e295838" # String[] | 
 $RequestBody = @""@ # String[] | 
 

# Bulk Retrieve of Source Subtypes

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Invoke-LoadBulkSourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-LoadBulkSourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-LoadBulkSourceSubtypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-machine-account-subtype-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated machine account subtype. | SourceSubtypeWithSource
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody =  # SystemCollectionsHashtable[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $RequestBody = @"[{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]"@ # SystemCollectionsHashtable[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch subtype by ID

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineAccountSubtypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-machine-account-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a machine account subtype of any tier by subtype ID, using the [JSON
Patch](https://tools.ietf.org/html/rfc6902) standard.

Only `displayName` and `description` are patchable, and both must remain present. Changing `targetType`,
`targetId`, `profile`, `classification`, `type` or `technicalName` returns `400`; to move a subtype to another
tier or target, delete it and create a new one.

Who can call this API depends on the tier of the stored subtype:

* `SOURCE`: requires the `idn:source-subtypes:update` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:update` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated machine account subtype. | SourceSubtypeV2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch subtype by ID

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-MachineAccountSubtypeV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineAccountSubtypeV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineAccountSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-source-subtype-provisioning-policy-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update the machine account creation provisioning policy of a subtype of any tier, using the [JSON
Patch](https://tools.ietf.org/html/rfc6902) standard. Only `name`, `description` and `fields` are patchable.
Returns `404` when the subtype has no provisioning policy.

Who can call this API depends on the tier of the subtype:

* `SOURCE`: requires the `idn:source-subtypes:update` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:update` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/patch-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated subtype provisioning policy. | SubtypeProvisioningPolicy
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch subtype provisioning policy

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SourceSubtypeProvisioningPolicyV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-machine-account-subtype-approval-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-subtype-approval-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | SubtypeId | **String** | True  | machine account subtype ID.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the object.

### Return type
[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates the PATCH operation succeeded and the API returns the updated MachineAccountSubtypeConfigDto object. | MachineAccountSubtypeConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SubtypeId = "00eebcf881994e419d72e757fd30dc0e" # String | machine account subtype ID.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | The JSONPatch payload used to update the object.
 

# Machine Subtype Approval Config

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineAccountSubtypeApprovalConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
