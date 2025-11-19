---
id: v2024-requestable-objects
title: RequestableObjects
pagination_label: RequestableObjects
sidebar_label: RequestableObjects
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestableObjects', 'V2024RequestableObjects'] 
slug: /tools/sdk/powershell/v2024/methods/requestable-objects
tags: ['SDK', 'Software Development Kit', 'RequestableObjects', 'V2024RequestableObjects']
---

# RequestableObjects
  Use this API to implement requestable object functionality. 
With this functionality in place, administrators can determine which access items can be requested with the [Access Request APIs](https://developer.sailpoint.com/docs/api/v2024/access-requests/), along with their statuses. 
This can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024RequestableObjects**](#list-requestable-objects) | **GET** `/requestable-objects` | Requestable objects list


## list-requestable-objects
Get a list of acccess items that can be requested through the [Access Request endpoints](https://developer.sailpoint.com/docs/api/v2024/access-requests). Access items are marked with `AVAILABLE`, `PENDING` or `ASSIGNED` with respect to the identity provided using `identity-id` query parameter.
This endpoint only lists roles and access profiles. For gathering requestable entitlements, the [Entitlements List API](https://developer.sailpoint.com/docs/api/v2025/list-entitlements) can be used with the segmented-for-identity parameter.
Any authenticated token can call this endpoint to see their requestable access items.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-requestable-objects)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | IdentityId | **String** |   (optional) | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result.
  Query | Types | **[]String** |   (optional) | Filters the results to the specified type/types, where each type is one of `ROLE` or `ACCESS_PROFILE`. If absent, all types are returned. SailPoint may add support for additional types in the future without notice.
  Query | Term | **String** |   (optional) | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter.
  Query | Statuses | [**[]RequestableObjectRequestStatus**](../models/requestable-object-request-status) |   (optional) | Filters the result to the specified status/statuses, where each status is one of `AVAILABLE`, `ASSIGNED`, or `PENDING`. Specifying this parameter without also specifying an `identity-id` parameter results in an error.  SailPoint may add additional statuses in the future without notice.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** 

### Return type
[**RequestableObject[]**](../models/requestable-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requestable objects | RequestableObject[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "e7eab60924f64aa284175b9fa3309599" # String | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. (optional)
$Types = "ACCESS_PROFILE" # String[] | Filters the results to the specified type/types, where each type is one of `ROLE` or `ACCESS_PROFILE`. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. (optional)

$Types = @"ACCESS_PROFILE,ROLE"@ # String[] | Filters the results to the specified type/types, where each type is one of `ROLE` or `ACCESS_PROFILE`. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. (optional) 
$Term = "Finance Role" # String | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter. (optional)
$Statuses = "AVAILABLE" # RequestableObjectRequestStatus[] | Filters the result to the specified status/statuses, where each status is one of `AVAILABLE`, `ASSIGNED`, or `PENDING`. Specifying this parameter without also specifying an `identity-id` parameter results in an error.  SailPoint may add additional statuses in the future without notice. (optional)

$Statuses = @"[ASSIGNED, PENDING]"@ # RequestableObjectRequestStatus[] | Filters the result to the specified status/statuses, where each status is one of `AVAILABLE`, `ASSIGNED`, or `PENDING`. Specifying this parameter without also specifying an `identity-id` parameter results in an error.  SailPoint may add additional statuses in the future without notice. (optional) 
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name sw "bob"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  (optional)

# Requestable objects list

try {
    Get-V2024RequestableObjects 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RequestableObjects -IdentityId $IdentityId -Types $Types -Term $Term -Statuses $Statuses -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RequestableObjects"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
