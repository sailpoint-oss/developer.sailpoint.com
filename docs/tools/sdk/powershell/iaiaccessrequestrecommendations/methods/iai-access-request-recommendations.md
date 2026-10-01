# IAIAccessRequestRecommendations

# IAIAccessRequestRecommendations
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Add-AccessRequestRecommendationsIgnoredItemV1**](#add-access-request-recommendations-ignored-item-v1) | **POST** `/ai-access-request-recommendations/v1/ignored-items` | Ignore access request recommendation
[**Add-AccessRequestRecommendationsRequestedItemV1**](#add-access-request-recommendations-requested-item-v1) | **POST** `/ai-access-request-recommendations/v1/requested-items` | Accept access request recommendation
[**Add-AccessRequestRecommendationsViewedItemV1**](#add-access-request-recommendations-viewed-item-v1) | **POST** `/ai-access-request-recommendations/v1/viewed-items` | Mark viewed access request recommendations
[**Add-AccessRequestRecommendationsViewedItemsV1**](#add-access-request-recommendations-viewed-items-v1) | **POST** `/ai-access-request-recommendations/v1/viewed-items/bulk-create` | Bulk mark viewed access request recommendations
[**Get-AccessRequestRecommendationsConfigV1**](#get-access-request-recommendations-config-v1) | **GET** `/ai-access-request-recommendations/v1/config` | Get access request recommendations config
[**Get-AccessRequestRecommendationsIgnoredItemsV1**](#get-access-request-recommendations-ignored-items-v1) | **GET** `/ai-access-request-recommendations/v1/ignored-items` | List ignored access request recommendations
[**Get-AccessRequestRecommendationsRequestedItemsV1**](#get-access-request-recommendations-requested-items-v1) | **GET** `/ai-access-request-recommendations/v1/requested-items` | List accepted access request recommendations
[**Get-AccessRequestRecommendationsV1**](#get-access-request-recommendations-v1) | **GET** `/ai-access-request-recommendations/v1` | Identity access request recommendations
[**Get-AccessRequestRecommendationsViewedItemsV1**](#get-access-request-recommendations-viewed-items-v1) | **GET** `/ai-access-request-recommendations/v1/viewed-items` | List viewed access request recommendations
[**Set-AccessRequestRecommendationsConfigV1**](#set-access-request-recommendations-config-v1) | **PUT** `/ai-access-request-recommendations/v1/config` | Update access request recommendations config


## add-access-request-recommendations-ignored-item-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-ignored-item-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | AccessRequestRecommendationActionItemDto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item to ignore for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Recommendation successfully stored as ignored. | AccessRequestRecommendationActionItemResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@

# Ignore access request recommendation

try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-AccessRequestRecommendationsIgnoredItemV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result 
    
    # Below is a request that includes all optional parameters
    # Add-AccessRequestRecommendationsIgnoredItemV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-AccessRequestRecommendationsIgnoredItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## add-access-request-recommendations-requested-item-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-requested-item-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | AccessRequestRecommendationActionItemDto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item that was requested for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Notification successfully acknowledged. | AccessRequestRecommendationActionItemResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@

# Accept access request recommendation

try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-AccessRequestRecommendationsRequestedItemV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result 
    
    # Below is a request that includes all optional parameters
    # Add-AccessRequestRecommendationsRequestedItemV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-AccessRequestRecommendationsRequestedItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## add-access-request-recommendations-viewed-item-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-item-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | AccessRequestRecommendationActionItemDto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access that was viewed for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Recommendation successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@

# Mark viewed access request recommendations

try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-AccessRequestRecommendationsViewedItemV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result 
    
    # Below is a request that includes all optional parameters
    # Add-AccessRequestRecommendationsViewedItemV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-AccessRequestRecommendationsViewedItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## add-access-request-recommendations-viewed-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | AccessRequestRecommendationActionItemDto | [**[]AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access items that were viewed for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto[]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Recommendations successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@ # AccessRequestRecommendationActionItemDto[] | The recommended access items that were viewed for an identity.
 

# Bulk mark viewed access request recommendations

try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-AccessRequestRecommendationsViewedItemsV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result 
    
    # Below is a request that includes all optional parameters
    # Add-AccessRequestRecommendationsViewedItemsV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationActionItemDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-AccessRequestRecommendationsViewedItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-recommendations-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Configurations for Access Request Recommender for the tenant. | AccessRequestRecommendationConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get access request recommendations config

try {
    Get-AccessRequestRecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestRecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestRecommendationsConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-recommendations-ignored-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-ignored-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**AccessRequestRecommendationActionItemResponseDto[]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns list of ignored access request recommendations. | AccessRequestRecommendationActionItemResponseDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
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
$Filters = 'identityId eq "2c9180846b0a0583016b299f210c1314"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
$Sorters = "access.id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

# List ignored access request recommendations

try {
    Get-AccessRequestRecommendationsIgnoredItemsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestRecommendationsIgnoredItemsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestRecommendationsIgnoredItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-recommendations-requested-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-requested-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**AccessRequestRecommendationActionItemResponseDto[]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the list of requested access request recommendations. | AccessRequestRecommendationActionItemResponseDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
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
$Filters = 'access.id eq "2c9180846b0a0583016b299f210c1314"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
$Sorters = "access.id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

# List accepted access request recommendations

try {
    Get-AccessRequestRecommendationsRequestedItemsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestRecommendationsRequestedItemsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestRecommendationsRequestedItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | IdentityId | **String** |   (optional) (default to "me") | Get access request recommendations for an identityId. *me* indicates the current user.
  Query | Limit | **Int32** |   (optional) (default to 15) | Max number of results to return.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | IncludeTranslationMessages | **Boolean** |   (optional) (default to $false) | If *true* it will populate a list of translation messages in the response.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first.

### Return type
[**AccessRequestRecommendationItemDetail[]**](../models/access-request-recommendation-item-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of access request recommendations for the identityId | AccessRequestRecommendationItemDetail[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$IdentityId = "2c91808570313110017040b06f344ec9" # String | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to "me")
$Limit = 15 # Int32 | Max number of results to return. (optional) (default to 15)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$IncludeTranslationMessages = $false # Boolean | If *true* it will populate a list of translation messages in the response. (optional) (default to $false)
$Filters = 'access.name co "admin"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
$Sorters = "access.name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)

# Identity access request recommendations

try {
    Get-AccessRequestRecommendationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestRecommendationsV1 -XSailPointExperimental $XSailPointExperimental -IdentityId $IdentityId -Limit $Limit -Offset $Offset -Count $Count -IncludeTranslationMessages $IncludeTranslationMessages -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestRecommendationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-recommendations-viewed-items-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-viewed-items-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**AccessRequestRecommendationActionItemResponseDto[]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns list of viewed access request recommendations. | AccessRequestRecommendationActionItemResponseDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
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
$Filters = 'access.id eq "2c9180846b0a0583016b299f210c1314"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
$Sorters = "access.id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

# List viewed access request recommendations

try {
    Get-AccessRequestRecommendationsViewedItemsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestRecommendationsViewedItemsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestRecommendationsViewedItemsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-access-request-recommendations-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API updates the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/set-access-request-recommendations-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | AccessRequestRecommendationConfigDto | [**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto) | True  | The desired configurations for Access Request Recommender for the tenant.

### Return type
[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully updated configurations for Access Request Recommender for the tenant. | AccessRequestRecommendationConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AccessRequestRecommendationConfigDto = @"{
  "scoreThreshold" : 0.5,
  "startDateAttribute" : "startDate",
  "restrictionAttribute" : "location",
  "moverAttribute" : "isMover",
  "joinerAttribute" : "isJoiner",
  "useRestrictionAttribute" : true
}"@

# Update access request recommendations config

try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationConfigDto -Json $AccessRequestRecommendationConfigDto
    Set-AccessRequestRecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationConfigDto $Result 
    
    # Below is a request that includes all optional parameters
    # Set-AccessRequestRecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental -AccessRequestRecommendationConfigDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-AccessRequestRecommendationsConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
