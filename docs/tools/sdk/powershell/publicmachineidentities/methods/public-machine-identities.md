# PublicMachineIdentities

# PublicMachineIdentities
  Use this API to list machine identities with a reduced, public-safe payload for catalog and request workflows.
Responses always include &#x60;id&#x60;, &#x60;name&#x60;, and &#x60;description&#x60;. When your tenant returns enriched public machine identity data, responses also include &#x60;subtype&#x60; and the primary &#x60;owner&#x60; (&#x60;id&#x60;, &#x60;name&#x60;, and &#x60;email&#x60;). When those enriched fields are not enabled for your tenant, &#x60;subtype&#x60; and &#x60;owner&#x60; are omitted or null and requests that filter or sort on &#x60;subtype&#x60; or filter on &#x60;owner.id&#x60;/&#x60;owner&#x60; return &#x60;400 Bad Request&#x60;.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-PublicMachineIdentitiesV1**](#list-public-machine-identities-v1) | **GET** `/public-machine-identities/v1` | List public machine identities


## list-public-machine-identities-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a list of machine identities with a reduced public payload (`id`, `name`, `description`, and optionally `subtype` and the primary `owner`). Any authenticated user with the default scope can call this endpoint; it does not require the `idn:mis-identity:read` scope.

[API Spec](https://developer.sailpoint.com/docs/api/list-public-machine-identities-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`.

### Return type
[**PublicMachineIdentity[]**](../models/public-machine-identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of public machine identity objects. | PublicMachineIdentity[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPublicMachineIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPublicMachineIdentitiesV1429Response
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
$Filters = 'name eq "Production API Agent"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering. (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`. (optional)

# List public machine identities

try {
    Get-PublicMachineIdentitiesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PublicMachineIdentitiesV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PublicMachineIdentitiesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
