# PublicIdentities

# PublicIdentities
  Use this API in conjunction with [Public Identites Config](https://developer.sailpoint.com/docs/api/public-identities-config) to enable non-administrators to view identities&#39; publicly visible attributes. 
With this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public. 
This can be helpful for access approvers, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-PublicIdentitiesV1**](#get-public-identities-v1) | **GET** `/public-identities/v1` | Get list of public identities
[**Get-PublicIdentitiesVisibleAttributesV2**](#get-public-identities-visible-attributes-v2) | **GET** `/public-identities/v2/visible-attributes` | Get public identity visible attributes
[**Search-PublicIdentitiesV2**](#search-public-identities-v2) | **POST** `/public-identities/v2/search` | Search public identities


## get-public-identities-v1
Get a list of public identities.  Set `add-core-filters` to `true` to exclude incomplete identities and uncorrelated accounts.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*
  Query | AddCoreFilters | **Boolean** |   (optional) (default to $false) | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be ""spadmin"" or ""cloudadmin"".   - uid should not be null.   - lastname should not be null.   - email should not be null.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**

### Return type
[**PublicIdentity[]**](../models/public-identity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of public identity objects. | PublicIdentity[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'firstname eq "John"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* (optional)
$AddCoreFilters = $false # Boolean | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be ""spadmin"" or ""cloudadmin"".   - uid should not be null.   - lastname should not be null.   - email should not be null. (optional) (default to $false)
$Sorters = "name" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)

# Get list of public identities

try {
    Get-PublicIdentitiesV1 
    
    # Below is a request that includes all optional parameters
    # Get-PublicIdentitiesV1 -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -AddCoreFilters $AddCoreFilters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PublicIdentitiesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-public-identities-visible-attributes-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns the default and configured identity attribute keys (with display names) that are allowed for public-identity search and projection. Call this before POST /public-identities/v2/search to learn which field keys are valid in query fields and sort.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-visible-attributes-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**PublicIdentityVisibleAttributes**](../models/public-identity-visible-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | PublicIdentityVisibleAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get public identity visible attributes

try {
    Get-PublicIdentitiesVisibleAttributesV2 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-PublicIdentitiesVisibleAttributesV2 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PublicIdentitiesVisibleAttributesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## search-public-identities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Search public identities using a composite query and return matching records.

The root query set combines criteria with AND and must include attributes.identityState.exact = ACTIVE. The field keys must come from GET /public-identities/v2/visible-attributes and may use the prefix "attributes." and/or the suffix ".exact". See the request examples for the required exact payload structure.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/search-public-identities-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | PublicIdentitiesSearchRequest | [**PublicIdentitiesSearchRequest**](../models/public-identities-search-request) | True  | 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**PublicIdentityV2[]**](../models/public-identity-v2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. Body is an array of PublicIdentityV2. When count&#x3D;true, X-Total-Count may be set with the total matching count (ignoring limit/offset). | PublicIdentityV2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentitiesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentitiesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$PublicIdentitiesSearchRequest = @"{
  "indices" : [ "identities" ],
  "sort" : [ "name" ],
  "querySet" : {
    "entries" : [ {
      "queryType" : "TEXT",
      "textQuery" : {
        "fields" : [ "attributes.identityState.exact" ],
        "terms" : [ "ACTIVE" ],
        "matchAny" : false,
        "contains" : false,
        "strict" : true
      }
    } ],
    "matchAny" : false
  },
  "queryType" : "COMPOSITE",
  "includeNested" : false
}"@
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Search public identities

try {
    $Result = ConvertFrom-JsonToPublicIdentitiesSearchRequest -Json $PublicIdentitiesSearchRequest
    Search-PublicIdentitiesV2 -XSailPointExperimental $XSailPointExperimental -PublicIdentitiesSearchRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Search-PublicIdentitiesV2 -XSailPointExperimental $XSailPointExperimental -PublicIdentitiesSearchRequest $Result -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-PublicIdentitiesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
