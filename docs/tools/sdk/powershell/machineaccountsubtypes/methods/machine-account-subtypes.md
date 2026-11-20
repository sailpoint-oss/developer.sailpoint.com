# MachineAccountSubtypes

# MachineAccountSubtypes
  Use this API to get, update, and delete machine account subtypes. V2 paths are experimental
and require the &#x60;X-SailPoint-Experimental&#x60; header.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SourceSubtypeOverrideV2**](#create-source-subtype-override-v2) | **POST** `/source-subtypes/v2/{id}/overrides` | Create a source-tier override
[**New-SourceSubtypeProvisioningPolicyV2**](#create-source-subtype-provisioning-policy-v2) | **POST** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**New-SourceSubtypeV1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**New-SourceSubtypeV2**](#create-source-subtype-v2) | **POST** `/source-subtypes/v2` | Create a tiered subtype
[**Remove-MachineAccountSubtypeV1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**Remove-MachineAccountSubtypeV2**](#delete-machine-account-subtype-v2) | **DELETE** `/source-subtypes/v2/{id}` | Delete tiered subtype by ID
[**Remove-SourceSubtypeProvisioningPolicyV2**](#delete-source-subtype-provisioning-policy-v2) | **DELETE** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**Get-MachineAccountSubtypeApprovalConfigV1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**Get-SourceSubtypeByIdV1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**Get-SourceSubtypeByIdV2**](#get-source-subtype-by-id-v2) | **GET** `/source-subtypes/v2/{id}` | Get tiered subtype by ID
[**Get-SourceSubtypeProvisioningPolicyV2**](#get-source-subtype-provisioning-policy-v2) | **GET** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**Get-SourceSubtypeTargetsV2**](#list-source-subtype-targets-v2) | **GET** `/source-subtypes/v2/targets` | List subtype targets
[**Get-SourceSubtypesV1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**Get-SourceSubtypesV2**](#list-source-subtypes-v2) | **GET** `/source-subtypes/v2` | Retrieve all tiered subtypes
[**Invoke-LoadBulkSourceSubtypesV1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**Update-MachineAccountSubtypeV1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**Update-MachineAccountSubtypeV2**](#patch-machine-account-subtype-v2) | **PATCH** `/source-subtypes/v2/{id}` | Patch tiered subtype by ID
[**Update-SourceSubtypeProvisioningPolicyV2**](#patch-source-subtype-provisioning-policy-v2) | **PATCH** `/source-subtypes/v2/{id}/provisioning-policy` | Patch subtype provisioning policy
[**Update-MachineAccountSubtypeApprovalConfigV1**](#update-machine-account-subtype-approval-config-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-override-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a SOURCE-tier snapshot of a CONNECTOR-tier subtype for one source. The snapshot copies
the parent display data, machine-account config, and authored provisioning policy. It does not
add the connector's default account-creation fields, and later connector-tier edits do not
propagate.

`subtypeId` must be a CONNECTOR-tier subtype UUID that is in the source effective set. The
created row is an ordinary SOURCE subtype (`targetType=SOURCE`, new `id`, `origin=null`) and
can be patched or deleted with the existing v2 subtype routes.

Requires `idn:source-subtypes:create`. A missing right, an unknown parent, or an unknown source
returns **404**. A parent that is not CONNECTOR, a blank `sourceId`, a parent that is not
effective on the source, a name collision, or a subtype cap returns **400**. A malformed `subtypeId` returns **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-override-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | CONNECTOR-tier subtype to snapshot onto the source.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SourceSubtypeOverrideRequest | [**SourceSubtypeOverrideRequest**](../models/source-subtype-override-request) | True  | 

### Return type
[**SubtypeWithTarget**](../models/subtype-with-target)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created SOURCE-tier override. | SubtypeWithTarget
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
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | CONNECTOR-tier subtype to snapshot onto the source.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SourceSubtypeOverrideRequest = @"{
  "sourceId" : "6d0458373bec4b4b80460992b76016da"
}"@

# Create a source-tier override

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
Creates the machine account creation provisioning policy for a subtype. A subtype has at most
one policy; the request is rejected if one already exists.

When `useDefaultFields` is `true` and the body has no `fields`, a `CONNECTOR` subtype's policy
is created with the connector's default account-creation fields. `SOURCE` subtypes ignore
`useDefaultFields`.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. A missing subtype or a missing right returns **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ProvisioningPolicyDto | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 
  Query | UseDefaultFields | **Boolean** |   (optional) (default to $true) | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Stored CREATE_MACHINE_ACCOUNT provisioning policy. | ProvisioningPolicyDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - a provisioning policy is already stored for the subtype. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ProvisioningPolicyDto = @"{
  "name" : "Create Machine Account",
  "description" : "Fields used when creating a machine account for this subtype",
  "id" : "54f626b4-c9d8-4f7e-b768-046c20583abb",
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
      "template" : "firstname.lastname.uniqueCounter",
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
      "template" : "firstname.lastname.uniqueCounter",
      "cloudMaxUniqueChecks" : "50",
      "cloudMaxSize" : "20",
      "cloudRequired" : "true"
    },
    "type" : "string"
  } ],
  "usageType" : "CREATE_MACHINE_ACCOUNT"
}"@
$UseDefaultFields = $true # Boolean | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes. (optional) (default to $true)

# Create subtype provisioning policy

try {
    $Result = ConvertFrom-JsonToProvisioningPolicyDto -Json $ProvisioningPolicyDto
    New-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -ProvisioningPolicyDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeProvisioningPolicyV2 -Id $Id -XSailPointExperimental $XSailPointExperimental -ProvisioningPolicyDto $Result -UseDefaultFields $UseDefaultFields  
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
Creates a machine account subtype at the tier declared on the request body.

`targetId` is required at every tier. `targetType` defaults to `SOURCE` when omitted. Do not
supply `id` or `profile`; those fields are response-only. `systemManaged`, `created`,
`modified`, and `origin` are ignored on input. CONNECTOR `targetName` is optional and is filled
from the connector's display name.

SOURCE-tier create requires `idn:source-subtypes:create`. CONNECTOR-tier create requires
`idn:connector-subtypes:create`. A missing right is returned as **404**, not **403**.
`CONNECTOR_VARIANT` is not available and returns **400**.

Duplicate technical name or display name in the same tier scope returns **400**. Exceeding the
organization subtype limit returns **400**. The create also stores a `CREATE_MACHINE_ACCOUNT`
provisioning policy from the connector's default account-creation fields.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SourceSubtypeV2 | [**SourceSubtypeV2**](../models/source-subtype-v2) | True  | 

### Return type
[**SubtypeWithTarget**](../models/subtype-with-target)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created tiered machine account subtype. | SubtypeWithTarget
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
$SourceSubtypeV2 = @"{
  "targetName" : "JDBC",
  "targetId" : "JDBC",
  "displayName" : "Non Personal",
  "created" : "2026-08-18T12:00:00Z",
  "origin" : "CONNECTOR",
  "profile" : {
    "connectorType" : "JDBC",
    "variant" : "MySql",
    "id" : "65de7634-d315-482c-aad4-7fdbd1e42056"
  },
  "systemManaged" : false,
  "description" : "Machine accounts for JDBC connectors",
  "targetType" : "CONNECTOR",
  "type" : "MACHINE",
  "classification" : "MACHINE",
  "technicalName" : "nonPersonal",
  "modified" : "2026-08-18T12:00:00Z",
  "id" : "43bdd144-4b17-4fce-a744-17c7fd3e717b"
}"@

# Create a tiered subtype

try {
    $Result = ConvertFrom-JsonToSourceSubtypeV2 -Json $SourceSubtypeV2
    New-SourceSubtypeV2 -XSailPointExperimental $XSailPointExperimental -SourceSubtypeV2 $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeV2 -XSailPointExperimental $XSailPointExperimental -SourceSubtypeV2 $Result  
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
Deletes a tiered subtype by id.

System-managed subtypes return **400**. A subtype that is still assigned to accounts returns
**400**. A connector-tier response includes how many accounts and sources still use it.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Unknown id and a denied tier are both returned as **404**. A
malformed UUID returns **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


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
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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

# Delete tiered subtype by ID

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
Deletes the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Missing subtype and missing right both return **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


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
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
Returns one machine account subtype by id, including whether its target can provision accounts.

Unknown id returns **404**. A caller without the required right also receives **404**. If
provisioning support cannot be determined, the API returns **503**. When the experimental
header is missing, or when tiered subtype configuration is not enabled, the endpoint returns
**404**.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SubtypeWithTargetProvisioning**](../models/subtype-with-target-provisioning)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tiered machine account subtype, including &#x60;target.supportsProvisioning&#x60;. | SubtypeWithTargetProvisioning
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto
503 | Connector catalogue timeout, HTTP error, or unparseable payload while resolving &#x60;supportsProvisioning&#x60; for a CONNECTOR target. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "43bdd144-4b17-4fce-a744-17c7fd3e717b" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get tiered subtype by ID

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
Returns the machine account creation provisioning policy for a subtype of any tier. Returns
**404** when the subtype has no provisioning policy.

For a `SOURCE` subtype, pass `sourceId` so a policy stored on that source can be found.

The caller needs `idn:source-subtypes:read`. A malformed id returns **400**. When the
experimental header is missing, or when tiered subtype configuration is not enabled, the
endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | SourceId | **String** |   (optional) (default to "") | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | CREATE_MACHINE_ACCOUNT provisioning policy for the subtype. | ProvisioningPolicyDto
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
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) (default to "")

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
Lists per-target subtype counts. Connector-tier rows are grouped by connector type.
Source-tier rows are returned 1:1 with each source-tier subtype.

`filters` must include `targetType eq "CONNECTOR"` or `targetType eq "SOURCE"`. Missing or
blank `targetType` returns **400**. `CONNECTOR_VARIANT` and unknown values return **400**.
Filter and sort fields are independent of the subtype list API. Default sort is `targetName`
ascending. `lastModified` is response-only and is not filterable or sortable.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Sorters | **String** |   (optional) (default to "targetName") | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**SubtypeTargetSummary[]**](../models/subtype-target-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of subtype target summaries. | SubtypeTargetSummary[]
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
$Filters = 'targetType eq "CONNECTOR"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sorters = "targetName" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. (optional) (default to "targetName")
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List subtype targets

try {
    Get-SourceSubtypeTargetsV2 -Filters $Filters -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypeTargetsV2 -Filters $Filters -XSailPointExperimental $XSailPointExperimental -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
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
Lists machine account subtypes across SOURCE and CONNECTOR tiers.

`targetId` is the scope key at every tier (source id for `SOURCE`, connector type for
`CONNECTOR`). Responses include a resolved `target` reference and do not include `sourceId`.
List responses do not include `target.supportsProvisioning`.

With `sourceId`, omitted `effectiveSet` defaults to `true` and returns the effective set for
that source (SOURCE overrides CONNECTOR by technical name). `effectiveSet=false` returns only
that source's raw SOURCE-tier rows. `effectiveSet=true` without `sourceId` returns **400**.
Combining `filters` with effective-set resolution returns **400**. Unknown `sourceId` returns
**404**. Limit, offset, and `count` apply on both paths. There is no default sort.

Optional `targetType` applies only on the effective-set path. `CONNECTOR` keeps inherited
connector winners. `SOURCE` keeps source-only winners and SOURCE overrides. Omitting it keeps
the full winner set. A blank, unknown, or `CONNECTOR_VARIANT` value, or any `targetType` when
`effectiveSet` is `false` or `sourceId` is omitted, returns **400**.

On the effective set, `origin` is `CONNECTOR` only when a SOURCE winner overrides a CONNECTOR
parent of the same technical name. Connector-only and source-only winners have `origin=null`.

`includeConfigs` defaults to `false`. When `true`, each `MACHINE` subtype that has a stored
machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`.
A `MACHINE` row with no create config, and every non-`MACHINE` row, omits `config`. The list
does not return the full machine-config document.

This API requires the Machine Identity Security product. When the experimental header is
missing, or when the tiered subtype configuration is not enabled for the tenant, the endpoint
returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400.
  Query | Sorters | **String** |   (optional) (default to "") | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified.
  Query | SourceId | **String** |   (optional) (default to "") | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted.
  Query | EffectiveSet | **Boolean** |   (optional) (default to $true) | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**.
  Query | TargetType | **String** |   (optional) | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted.
  Query | IncludeConfigs | **Boolean** |   (optional) (default to $false) | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**SubtypeWithTargetAndConfig[]**](../models/subtype-with-target-and-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of tiered machine account subtypes. | SubtypeWithTargetAndConfig[]
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
$Filters = 'targetType eq "CONNECTOR"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. (optional)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. (optional) (default to "")
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted. (optional) (default to "")
$EffectiveSet = $true # Boolean | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**. (optional) (default to $true)
$TargetType = "SOURCE" # String | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted. (optional)
$IncludeConfigs = $false # Boolean | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`. (optional) (default to $false)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Retrieve all tiered subtypes

try {
    Get-SourceSubtypesV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypesV2 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -SourceId $SourceId -EffectiveSet $EffectiveSet -TargetType $TargetType -IncludeConfigs $IncludeConfigs -Count $Count -Limit $Limit -Offset $Offset  
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
Applies an RFC 6902 JSON Patch to a tiered subtype.

Patchable fields are `displayName` and `description` only. Tier and identity fields
(`technicalName`, `targetType`, `targetId`, `profile`, `classification`, `type`) are immutable;
change them by deleting and recreating the subtype.

SOURCE-tier update requires `idn:source-subtypes:update`. CONNECTOR-tier update requires
`idn:connector-subtypes:update`. Unknown id and a denied tier are both returned as **404**. A
malformed UUID returns **400**. System-managed rows and a duplicate display name in the same
tier scope return **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**SubtypeWithTarget**](../models/subtype-with-target)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated tiered machine account subtype. | SubtypeWithTarget
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
 

# Patch tiered subtype by ID

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
Patches the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype using RFC 6902
JSON Patch.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. Missing subtype, missing policy, and missing right all return
**404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-source-subtype-provisioning-policy-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated CREATE_MACHINE_ACCOUNT provisioning policy. | ProvisioningPolicyDto
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
