# Intelligence

# Intelligence
  HTTP API that returns the Intelligence (identity context) for SecOps enrichment
use cases (SIEM/SOAR connectors, MCP, browser extension), and accepts asynchronous
response actions for remediation. Identity reads are backed by Atlas internal-REST
calls to MICE, Shelby List Accounts, SDS Search, IDA-outliers, and identity-history.

## License-based segmentation

- **&#x60;idn:response-and-remediation&#x60;** (required): enforced on all &#x60;/intelligence/*&#x60; routes.
- **&#x60;IDA-outliers&#x60;** (optional): governs the Human &#x60;outliers.rareAccess&#x60; slice only. When the
  tenant lacks this license, the &#x60;outliers&#x60; key is omitted.
- **&#x60;idg:base&#x60;** (optional): governs the root-level &#x60;identityGraph&#x60; deep link on aggregate
  responses. When the tenant lacks this license, &#x60;identityGraph&#x60; is omitted.
- **&#x60;idn:machine-identity-security&#x60;** (optional): governs the Human &#x60;nonHumanIdentityOwnership&#x60;
  slice. When the tenant lacks this license, &#x60;nonHumanIdentityOwnership&#x60; is omitted on the
  aggregate GET and the &#x60;/non-human-identity-ownership/\{category\}&#x60; child route returns
  **403 Forbidden**.

## Pagination

The aggregated Human GET embeds the first page of each paged slice. Each upstream paged call
sends &#x60;count&#x3D;true&#x60; and reads &#x60;X-Total-Count&#x60;. Parent slices expose &#x60;totalCount&#x60; when &#x60;items&#x60; is
non-empty and set &#x60;next&#x60; when &#x60;totalCount &gt; offset + len(items)&#x60; (aggregate offset is always 0).
Empty slices render as &#x60;items: []&#x60; with no &#x60;totalCount&#x60;. &#x60;privilegedAccess&#x60; is never paged and
carries no &#x60;totalCount&#x60;. When licensed, &#x60;nonHumanIdentityOwnership&#x60; pages each
&#x60;primaryOwned&#x60; / &#x60;secondaryOwned&#x60; bucket independently under &#x60;agents&#x60; and &#x60;applications&#x60;.
Non-human identity aggregate &#x60;accounts&#x60; includes &#x60;totalCount&#x60; and &#x60;next&#x60;; continue with
&#x60;GET .../accounts?isNHI&#x3D;true&#x60; (bare array response).

Human child routes (&#x60;/accounts&#x60;, &#x60;/outliers/rare-access&#x60;, &#x60;/access-history/*&#x60;,
&#x60;/non-human-identity-ownership/\{category\}&#x60;) follow the SailPoint V3 pattern: pass &#x60;count&#x3D;true&#x60;
to receive &#x60;X-Total-Count&#x60; (including &#x60;0&#x60; on empty pages). When &#x60;count&#x60; is omitted, upstream
count work is skipped and the header is omitted.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ResponseActionV1**](#create-response-action-v1) | **POST** `/intelligence/v1/response-actions` | Create a response action
[**Get-IdentityIntelligenceV1**](#get-identity-intelligence-v1) | **GET** `/intelligence/v1/identities` | Get identity by filter
[**Get-IntelIdentityAccessItemHistoryV1**](#get-intel-identity-access-item-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/access-items` | List identity access item history
[**Get-IntelIdentityAccountsV1**](#get-intel-identity-accounts-v1) | **GET** `/intelligence/v1/identities/{id}/accounts` | List identity accounts
[**Get-IntelIdentityCertificationHistoryV1**](#get-intel-identity-certification-history-v1) | **GET** `/intelligence/v1/identities/{id}/access-history/certifications` | List identity certification history
[**Get-IntelIdentityNonHumanIdentityOwnershipV1**](#get-intel-identity-non-human-identity-ownership-v1) | **GET** `/intelligence/v1/identities/{id}/non-human-identity-ownership/{category}` | List owned NHI identities
[**Get-IntelIdentityRareAccessV1**](#get-intel-identity-rare-access-v1) | **GET** `/intelligence/v1/identities/{id}/outliers/rare-access` | List identity rare access
[**Get-ResponseActionStatusV1**](#get-response-action-status-v1) | **GET** `/intelligence/v1/response-actions/{id}/status` | Get response action status


## create-response-action-v1
Requires tenant license idn:response-and-remediation.

Creates a response action: the request is validated, a requestId (the correlation id) is
minted, the action is recorded as SUBMITTED, and an event is published that triggers the
correlated workflow(s).

Returns HTTP 202 with the requestId, an initial SUBMITTED status, and a statusUrl. Poll
GET /intelligence/v1/response-actions/\{requestId\}/status for progress.


[API Spec](https://developer.sailpoint.com/docs/api/create-response-action-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Responseactioncreaterequest | [**Responseactioncreaterequest**](../models/responseactioncreaterequest) | True  | 

### Return type
[**Responseactionaccepted**](../models/responseactionaccepted)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | The response action was accepted and is being processed asynchronously. | Responseactionaccepted
400 | Missing or invalid request body. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Responseactioncreaterequest = @"{
  "actionType" : "DISABLE_ACCOUNT",
  "identityType" : "HUMAN",
  "identityId" : "2c918085842e69ae018428c919680149",
  "accountIds" : [ "2c918085abc000000000000000000001" ],
  "context" : {
    "reason" : "Contain compromised account",
    "externalAlertId" : "CS-FALCON-12345",
    "source" : "CROWDSTRIKE",
    "operator" : "soc-analyst@customer.com"
  }
}"@

# Create a response action

try {
    $Result = ConvertFrom-JsonToResponseactioncreaterequest -Json $Responseactioncreaterequest
    New-ResponseActionV1 -Responseactioncreaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ResponseActionV1 -Responseactioncreaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ResponseActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-intelligence-v1
Requires tenant license idn:response-and-remediation.

**Caution:** When Data Segmentation is enabled, generic API Management API keys are not tied to
a user identity and may fail or return incomplete data. Use a [personal access token](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token)
or other user-scoped OAuth token. See [API keys](https://documentation.sailpoint.com/saas/help/common/api_keys.html)
and [Data Segmentation](https://documentation.sailpoint.com/saas/help/segmentation/index.html).

Resolves exactly one identity using a single SCIM-style filters expression. Returns an enriched
Human or non-human identity (NHI) envelope. Single-clause filters only; unsupported fields or
operators return HTTP 400.


[API Spec](https://developer.sailpoint.com/docs/api/get-identity-intelligence-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq*

### Return type
[**Intelidentityenvelope**](../models/intelidentityenvelope)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Exactly one identity matched. | Intelidentityenvelope
400 | Invalid filters or unsupported filter field or operator. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Unauthorized access | ErrorResponseDto
404 | No identity matched the filter (detailCode IDC_IDENTITY_NOT_FOUND). | IntelIdentityNotFoundBody
409 | Multiple identities matched the filter (detailCode IDC_IDENTITY_AMBIGUOUS). | Intelidentityambiguousbody
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'id eq "ef38f94347e94562b5bb8424a56397d8"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **email**: *eq*  **opaqueIdentifier**: *eq*

# Get identity by filter

try {
    Get-IdentityIntelligenceV1 -Filters $Filters 
    
    # Below is a request that includes all optional parameters
    # Get-IdentityIntelligenceV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IdentityIntelligenceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-intel-identity-access-item-history-v1
Continuation endpoint for the parent response's `accessHistory.accessItems.next` link.
Returns one page of access-item history events for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Unsupported event types and per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.

Not applicable to non-human identities.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-access-item-history-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | Limit | **Int32** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | Offset | **Int32** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**IntelAccessItemHistoryEvent[]**](../models/intel-access-item-history-event)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | One page of access-item history events. | IntelAccessItemHistoryEvent[]
400 | Invalid path or query parameters. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Unauthorized access | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-empty identity id path segment for Intelligence sub-resources.
$Limit = 250 # Int32 | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
$Offset = 0 # Int32 | Zero-based page offset. Defaults to 0. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List identity access item history

try {
    Get-IntelIdentityAccessItemHistoryV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-IntelIdentityAccessItemHistoryV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IntelIdentityAccessItemHistoryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-intel-identity-accounts-v1
Continuation endpoint for `accounts.next`. Pass `count=true` for `X-Total-Count`.

- Human (default): omit `isNHI` or set it to `false`. Slice object (`items`).
- Non-human identity (NHI): set `isNHI=true` (required for NHI aggregate `accounts.next` links). Bare JSON array.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-accounts-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | Limit | **Int32** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | Offset | **Int32** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | IsNHI | **Boolean** |   (optional) (default to $false) | NHI accounts when `true` (bare array). Human accounts when omitted or `false` (slice object). 

### Return type
[**GetIntelIdentityAccountsV1200Response**](../models/get-intel-identity-accounts-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Human path returns an accounts slice object. NHI path (&#x60;isNHI&#x3D;true&#x60;) returns a bare array. | GetIntelIdentityAccountsV1200Response
400 | Invalid path or query parameters. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Unauthorized access | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-empty identity id path segment for Intelligence sub-resources.
$Limit = 250 # Int32 | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
$Offset = 0 # Int32 | Zero-based page offset. Defaults to 0. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$IsNHI = $false # Boolean | NHI accounts when `true` (bare array). Human accounts when omitted or `false` (slice object).  (optional) (default to $false)

# List identity accounts

try {
    Get-IntelIdentityAccountsV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-IntelIdentityAccountsV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count -IsNHI $IsNHI  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IntelIdentityAccountsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-intel-identity-certification-history-v1
Continuation endpoint for the parent response's `accessHistory.certifications.next` link.
Returns one page of certification history events for the supplied limit and offset values.
Pass `count=true` to receive `X-Total-Count` (including `0` on empty pages).
Per-record decode failures are dropped server-side.
Requires tenant license idn:response-and-remediation.

Not applicable to non-human identities.


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-certification-history-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | Limit | **Int32** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | Offset | **Int32** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**IntelCertificationHistoryEvent[]**](../models/intel-certification-history-event)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | One page of certification history events. | IntelCertificationHistoryEvent[]
400 | Invalid path or query parameters. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Unauthorized access | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-empty identity id path segment for Intelligence sub-resources.
$Limit = 250 # Int32 | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
$Offset = 0 # Int32 | Zero-based page offset. Defaults to 0. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List identity certification history

try {
    Get-IntelIdentityCertificationHistoryV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-IntelIdentityCertificationHistoryV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IntelIdentityCertificationHistoryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-intel-identity-non-human-identity-ownership-v1
Continuation endpoint for a human parent's
`nonHumanIdentityOwnership.{category}.primaryOwned.next` or
`nonHumanIdentityOwnership.{category}.secondaryOwned.next` link. Returns a bare JSON array of
owned non-human identity summary rows for the given `category`, optional `ownershipRole`,
`limit`, and `offset`. Wire items match the aggregate ownership item shape
(`{ id, displayName, source? }`).

When `ownershipRole` is omitted, the request defaults to `primary`. Pass `count=true` to
receive `X-Total-Count` (including `0` on empty pages). The `filters` query parameter is not
supported on this route (HTTP 400).

Requires tenant licenses `idn:response-and-remediation` and `idn:machine-identity-security`.
Tenants without `idn:machine-identity-security` receive HTTP 403.

Not applicable to non-human identities (no ownership slice on the NHI envelope).


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-non-human-identity-ownership-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-empty identity id path segment for Intelligence sub-resources.
Path   | Category | **String** | True  | Non-human identity ownership category. Use `agents` for AI Agent subtypes and `applications` for Application subtypes. 
  Query | OwnershipRole | **String** |   (optional) (default to "primary") | Optional ownership role discriminator. When set to `primary` or `secondary`, returns one paged role bucket. When omitted, defaults to `primary`. 
  Query | Limit | **Int32** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | Offset | **Int32** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Intelnonhumanidentityownershipitem[]**](../models/intelnonhumanidentityownershipitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | One page of owned non-human identities for the requested category and role. | Intelnonhumanidentityownershipitem[]
400 | Invalid path or query parameters, including invalid &#x60;category&#x60;, invalid &#x60;ownershipRole&#x60;, unsupported &#x60;filters&#x60;, or invalid &#x60;limit&#x60;/&#x60;offset&#x60;/&#x60;count&#x60;.  | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Unauthorized access, or tenant lacks the &#x60;idn:machine-identity-security&#x60; license required for this route.  | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-empty identity id path segment for Intelligence sub-resources.
$Category = "agents" # String | Non-human identity ownership category. Use `agents` for AI Agent subtypes and `applications` for Application subtypes. 
$OwnershipRole = "primary" # String | Optional ownership role discriminator. When set to `primary` or `secondary`, returns one paged role bucket. When omitted, defaults to `primary`.  (optional) (default to "primary")
$Limit = 250 # Int32 | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
$Offset = 0 # Int32 | Zero-based page offset. Defaults to 0. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List owned NHI identities

try {
    Get-IntelIdentityNonHumanIdentityOwnershipV1 -Id $Id -Category $Category 
    
    # Below is a request that includes all optional parameters
    # Get-IntelIdentityNonHumanIdentityOwnershipV1 -Id $Id -Category $Category -OwnershipRole $OwnershipRole -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IntelIdentityNonHumanIdentityOwnershipV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-intel-identity-rare-access-v1
Continuation endpoint for the parent response's `outliers.rareAccess.next` link.
Resolves the identity's first outlier, then returns one page of rare access
items for the supplied limit and offset values. Pass `count=true` to receive
`X-Total-Count` (including `0` on empty pages). An identity with no outlier
returns an empty array with `X-Total-Count: 0` when `count=true`. Requires
tenant license idn:response-and-remediation and the IDA-outliers license.

Not applicable to non-human identities (no outliers slice on the NHI envelope).


[API Spec](https://developer.sailpoint.com/docs/api/get-intel-identity-rare-access-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Non-empty identity id path segment for Intelligence sub-resources.
  Query | Limit | **Int32** |   (optional) (default to 250) | Page size. Defaults to 250; values above 250 are rejected with 400.
  Query | Offset | **Int32** |   (optional) (default to 0) | Zero-based page offset. Defaults to 0.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**IntelOutlierAccessItem[]**](../models/intel-outlier-access-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | One page of rare access items. | IntelOutlierAccessItem[]
400 | Invalid path or query parameters. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Unauthorized access | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Non-empty identity id path segment for Intelligence sub-resources.
$Limit = 250 # Int32 | Page size. Defaults to 250; values above 250 are rejected with 400. (optional) (default to 250)
$Offset = 0 # Int32 | Zero-based page offset. Defaults to 0. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List identity rare access

try {
    Get-IntelIdentityRareAccessV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-IntelIdentityRareAccessV1 -Id $Id -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-IntelIdentityRareAccessV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-response-action-status-v1
Requires tenant license idn:response-and-remediation.

Returns the current aggregate status of a previously submitted response action, identified by
the requestId returned from POST /intelligence/v1/response-actions.

Supported actionType values: DISABLE_IDENTITY, DISABLE_ACCOUNT.


[API Spec](https://developer.sailpoint.com/docs/api/get-response-action-status-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The requestId of the response action to look up.

### Return type
[**Responseactionstatus**](../models/responseactionstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The current status of the response action. | Responseactionstatus
400 | Invalid path parameter. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetIdentityIntelligenceV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | No response action exists for the supplied requestId. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetIdentityIntelligenceV1429Response
500 | Internal or upstream server failure. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b" # String | The requestId of the response action to look up.

# Get response action status

try {
    Get-ResponseActionStatusV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ResponseActionStatusV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ResponseActionStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
