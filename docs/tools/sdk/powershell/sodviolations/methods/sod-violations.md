# SODViolations

# SODViolations
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-ViolationV1**](#get-violation-v1) | **GET** `/violations/v1/{id}` | Get policy violation by ID
[**Get-MyViolationsV1**](#list-my-violations-v1) | **GET** `/my-violations/v1` | List My Policy Violations
[**Get-ViolationsV1**](#list-violations-v1) | **GET** `/violations/v1` | List Policy Violations
[**Move-ViolationV1**](#move-violation-v1) | **POST** `/violations/v1/{id}/reassign` | Reassign policy violation
[**Start-ApplyControlV1**](#start-apply-control-v1) | **POST** `/violations/v1/{id}/controls` | Apply control to violation
[**Start-PredictSodViolationsV1**](#start-predict-sod-violations-v1) | **POST** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**Start-ViolationCheckV1**](#start-violation-check-v1) | **POST** `/sod-violations/v1/check` | Check sod violations


## get-violation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a single policy violation by ID for the current tenant. Access is allowed if the caller has the read scope (`idn:sod-violation:read`) or is an owner of the violation (direct or via governance group). Returns 403 Forbidden if the violation exists but the caller has neither the read scope nor ownership. Returns 404 Not Found if the violation does not exist for the tenant.
Embedded references (`owner`, `target`, `policy`, and references inside `appliedControls`) use `ReferenceResponse`: `id` and `type` are always present; `name` is included when display metadata resolves.


[API Spec](https://developer.sailpoint.com/docs/api/get-violation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the policy violation to fetch

### Return type
[**Policyviolationresponse**](../models/policyviolationresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The policy violation | Policyviolationresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "3e078865-55ed-43cf-b83c-85c58d2016e6" # String | The ID of the policy violation to fetch

# Get policy violation by ID

try {
    Get-ViolationV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ViolationV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ViolationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-my-violations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a paged list of policy violations where the current user is the owner (directly assigned or via a governance group they belong to). No permission scope is required; caller identity is required.
Supports the same collection parameters as GET /violations (limit, offset, count, filters, sorters), including the same filter field whitelist and processing (normalization, pruning of not-yet-persisted name predicates). The owner filter is implicit (current user); **do not** use `ownerId` in filters for this endpoint.
Embedded references in each violation follow `ReferenceResponse` (`id`, `type`, and optional `name` when metadata resolves).


[API Spec](https://developer.sailpoint.com/docs/api/list-my-violations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending).

### Return type
[**Policyviolationresponse[]**](../models/policyviolationresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of policy violations owned by the caller | Policyviolationresponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
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
$Filters = 'status in ("Open","Mitigated") and level eq "High"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
$Sorters = "-level" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). (optional)

# List My Policy Violations

try {
    Get-MyViolationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MyViolationsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MyViolationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-violations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a paged list of policy violations for the current tenant. Requires the read scope (idn:sod-violation:read).
This endpoint uses the standard collection parameters defined in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/).
This endpoint supports standard V3 collection parameters: `limit`, `offset`, `count`, `filters`, and `sorters`.
Embedded references in each violation (`owner`, `target`, `policy`, and references inside `appliedControls`) follow the `ReferenceResponse` schema: `id` and `type` are always present; `name` is included when display metadata resolves.
Filters and sorters are validated against a fixed whitelist of fields to ensure safe queries and to align with underlying database indexes.


[API Spec](https://developer.sailpoint.com/docs/api/list-violations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending.

### Return type
[**Policyviolationresponse[]**](../models/policyviolationresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of policy violations | Policyviolationresponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
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
$Filters = 'status in ("Open","Mitigated") and level eq "High" and policyId eq "bc693f07-e7b6-4553-9626-c25954c58554" and ownerId eq "de305d54-75b4-431b-adb2-eb6b9e546014"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
$Sorters = "-level" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. (optional)

# List Policy Violations

try {
    Get-ViolationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ViolationsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ViolationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move-violation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reassigns the specified policy violation to a new owner. Callers without the `idn:sod-violation:manage` scope may only reassign violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/move-violation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the policy violation to fetch
 Body  | Violationreassigninput | [**Violationreassigninput**](../models/violationreassigninput) | True  | Data needed to reassign a Policy Violation

### Return type
[**Policyviolationresponse**](../models/policyviolationresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The violation was reassigned to the new owner; returns the updated violation. | Policyviolationresponse
204 | The requested assignee was already the owner of the violation, so no change was made. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "3e078865-55ed-43cf-b83c-85c58d2016e6" # String | The ID of the policy violation to fetch
$Violationreassigninput = @"{
  "comments" : "some comments about the reassignment",
  "reassignTo" : {
    "assigneeType" : "IDENTITY",
    "assigneeId" : "3e07886555ed43cfb83c85c58d2016e6"
  }
}"@

# Reassign policy violation

try {
    $Result = ConvertFrom-JsonToViolationreassigninput -Json $Violationreassigninput
    Move-ViolationV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Violationreassigninput $Result 
    
    # Below is a request that includes all optional parameters
    # Move-ViolationV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Violationreassigninput $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-ViolationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-apply-control-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Applies a compensating control to the specified policy violation. Callers without the `idn:sod-violation:manage` scope may only apply a control to violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/start-apply-control-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the policy violation to fetch
 Body  | Appliedcontrolcreate | [**Appliedcontrolcreate**](../models/appliedcontrolcreate) | True  | Data needed to apply a control to a Policy Violation

### Return type
[**Appliedcontrol**](../models/appliedcontrol)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Control successfully applied to Policy Violation | Appliedcontrol
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "3e078865-55ed-43cf-b83c-85c58d2016e6" # String | The ID of the policy violation to fetch
$Appliedcontrolcreate = @"{
  "comments" : "Some comments about the applied control",
  "control" : "3e07886555ed43cfb83c85c58d2016e6"
}"@

# Apply control to violation

try {
    $Result = ConvertFrom-JsonToAppliedcontrolcreate -Json $Appliedcontrolcreate
    Start-ApplyControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Appliedcontrolcreate $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ApplyControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Appliedcontrolcreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ApplyControlV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-predict-sod-violations-v1
This API is used to check if granting some additional accesses (entitlements, access profiles, or roles) would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/start-predict-sod-violations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityWithNewAccess | [**IdentityWithNewAccess**](../models/identity-with-new-access) | True  | 

### Return type
[**ViolationPrediction**](../models/violation-prediction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Violation Contexts | ViolationPrediction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityWithNewAccess = @"{
  "identityId" : "2c91808568c529c60168cca6f90c1313",
  "accessRefs" : [ {
    "type" : "ENTITLEMENT",
    "id" : "2c918087682f9a86016839c050861ab1"
  }, {
    "type" : "ACCESS_PROFILE",
    "id" : "2c918087682f9a86016839c0509c1ab2"
  }, {
    "type" : "ROLE",
    "id" : "2c918087682f9a86016839c050a01ab3"
  } ]
}"@

# Predict sod violations for identity.

try {
    $Result = ConvertFrom-JsonToIdentityWithNewAccess -Json $IdentityWithNewAccess
    Start-PredictSodViolationsV1 -IdentityWithNewAccess $Result 
    
    # Below is a request that includes all optional parameters
    # Start-PredictSodViolationsV1 -IdentityWithNewAccess $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-PredictSodViolationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-violation-check-v1
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/start-violation-check-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityWithNewAccess | [**IdentityWithNewAccess**](../models/identity-with-new-access) | True  | 

### Return type
[**SodViolationCheck**](../models/sod-violation-check)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Request ID with a timestamp. | SodViolationCheck
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartPredictSodViolationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartPredictSodViolationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityWithNewAccess = @"{
  "identityId" : "2c91808568c529c60168cca6f90c1313",
  "accessRefs" : [ {
    "type" : "ENTITLEMENT",
    "id" : "2c918087682f9a86016839c050861ab1"
  }, {
    "type" : "ACCESS_PROFILE",
    "id" : "2c918087682f9a86016839c0509c1ab2"
  }, {
    "type" : "ROLE",
    "id" : "2c918087682f9a86016839c050a01ab3"
  } ]
}"@

# Check sod violations

try {
    $Result = ConvertFrom-JsonToIdentityWithNewAccess -Json $IdentityWithNewAccess
    Start-ViolationCheckV1 -IdentityWithNewAccess $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ViolationCheckV1 -IdentityWithNewAccess $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ViolationCheckV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
