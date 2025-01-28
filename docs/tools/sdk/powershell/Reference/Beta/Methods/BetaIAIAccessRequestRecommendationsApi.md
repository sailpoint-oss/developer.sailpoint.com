---
id: beta-iai-access-request-recommendations
title: IAIAccessRequestRecommendations
pagination_label: IAIAccessRequestRecommendations
sidebar_label: IAIAccessRequestRecommendations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIAccessRequestRecommendations', 'BetaIAIAccessRequestRecommendations'] 
slug: /tools/sdk/powershell/beta/methods/iai-access-request-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIAccessRequestRecommendations', 'BetaIAIAccessRequestRecommendations']
---


# IAIAccessRequestRecommendations

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Add-BetaAccessRequestRecommendationsIgnoredItem**](#add-access-request-recommendations-ignored-item) | **POST** `/ai-access-request-recommendations/ignored-items` | Notification of Ignored Access Request Recommendations
[**Add-BetaAccessRequestRecommendationsRequestedItem**](#add-access-request-recommendations-requested-item) | **POST** `/ai-access-request-recommendations/requested-items` | Notification of Requested Access Request Recommendations
[**Add-BetaAccessRequestRecommendationsViewedItem**](#add-access-request-recommendations-viewed-item) | **POST** `/ai-access-request-recommendations/viewed-items` | Notification of Viewed Access Request Recommendations
[**Add-BetaAccessRequestRecommendationsViewedItems**](#add-access-request-recommendations-viewed-items) | **POST** `/ai-access-request-recommendations/viewed-items/bulk-create` | Notification of Viewed Access Request Recommendations in Bulk
[**Get-BetaAccessRequestRecommendations**](#get-access-request-recommendations) | **GET** `/ai-access-request-recommendations` | Identity Access Request Recommendations
[**Get-BetaAccessRequestRecommendationsIgnoredItems**](#get-access-request-recommendations-ignored-items) | **GET** `/ai-access-request-recommendations/ignored-items` | List of Ignored Access Request Recommendations
[**Get-BetaAccessRequestRecommendationsRequestedItems**](#get-access-request-recommendations-requested-items) | **GET** `/ai-access-request-recommendations/requested-items` | List of Requested Access Request Recommendations
[**Get-BetaAccessRequestRecommendationsViewedItems**](#get-access-request-recommendations-viewed-items) | **GET** `/ai-access-request-recommendations/viewed-items` | List of Viewed Access Request Recommendations


## add-access-request-recommendations-ignored-item

This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessRequestRecommendationActionItemDto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item to ignore for an identity.

### Return type

[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Recommendation successfully stored as ignored. | AccessRequestRecommendationActionItemResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@
# Notification of Ignored Access Request Recommendations
try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-BetaAccessRequestRecommendationsIgnoredItem-BetaAccessRequestRecommendationActionItemDto $Result
    
    # Below is a request that includes all optional parameters
    # Add-BetaAccessRequestRecommendationsIgnoredItem -BetaAccessRequestRecommendationActionItemDto $AccessRequestRecommendationActionItemDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-BetaAccessRequestRecommendationsIgnoredItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## add-access-request-recommendations-requested-item

This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessRequestRecommendationActionItemDto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item that was requested for an identity.

### Return type

[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Notification successfully acknowledged. | AccessRequestRecommendationActionItemResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@
# Notification of Requested Access Request Recommendations
try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-BetaAccessRequestRecommendationsRequestedItem-BetaAccessRequestRecommendationActionItemDto $Result
    
    # Below is a request that includes all optional parameters
    # Add-BetaAccessRequestRecommendationsRequestedItem -BetaAccessRequestRecommendationActionItemDto $AccessRequestRecommendationActionItemDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-BetaAccessRequestRecommendationsRequestedItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## add-access-request-recommendations-viewed-item

This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessRequestRecommendationActionItemDto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access that was viewed for an identity.

### Return type

[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Recommendation successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@
# Notification of Viewed Access Request Recommendations
try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-BetaAccessRequestRecommendationsViewedItem-BetaAccessRequestRecommendationActionItemDto $Result
    
    # Below is a request that includes all optional parameters
    # Add-BetaAccessRequestRecommendationsViewedItem -BetaAccessRequestRecommendationActionItemDto $AccessRequestRecommendationActionItemDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-BetaAccessRequestRecommendationsViewedItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## add-access-request-recommendations-viewed-items

This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessRequestRecommendationActionItemDto | [**[]AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access items that were viewed for an identity.

### Return type

[**AccessRequestRecommendationActionItemResponseDto[]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Recommendations successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 # AccessRequestRecommendationActionItemDto[] | The recommended access items that were viewed for an identity.
 $AccessRequestRecommendationActionItemDto = @"{
  "access" : {
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE"
  },
  "identityId" : "2c91808570313110017040b06f344ec9"
}"@ 

# Notification of Viewed Access Request Recommendations in Bulk
try {
    $Result = ConvertFrom-JsonToAccessRequestRecommendationActionItemDto -Json $AccessRequestRecommendationActionItemDto
    Add-BetaAccessRequestRecommendationsViewedItems-BetaAccessRequestRecommendationActionItemDto $Result
    
    # Below is a request that includes all optional parameters
    # Add-BetaAccessRequestRecommendationsViewedItems -BetaAccessRequestRecommendationActionItemDto $AccessRequestRecommendationActionItemDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Add-BetaAccessRequestRecommendationsViewedItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-access-request-recommendations

This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "2c91808570313110017040b06f344ec9" # String | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to "me")
$Limit = 56 # Int32 | Max number of results to return. (optional) (default to 15)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$IncludeTranslationMessages = $false # Boolean | If *true* it will populate a list of translation messages in the response. (optional) (default to $false)
$Filters = 'access.name co "admin"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
$Sorters = "MySorters" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)
# Identity Access Request Recommendations
try {
    Get-BetaAccessRequestRecommendations
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestRecommendations -BetaIdentityId $IdentityId -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaIncludeTranslationMessages $IncludeTranslationMessages -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestRecommendations"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-access-request-recommendations-ignored-items

This API returns the list of ignored access request recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'identityId eq "2c9180846b0a0583016b299f210c1314"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
$Sorters = "access.id" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
# List of Ignored Access Request Recommendations
try {
    Get-BetaAccessRequestRecommendationsIgnoredItems
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestRecommendationsIgnoredItems -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestRecommendationsIgnoredItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-access-request-recommendations-requested-items

This API returns a list of requested access request recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'access.id eq "2c9180846b0a0583016b299f210c1314"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
$Sorters = "MySorters" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
# List of Requested Access Request Recommendations
try {
    Get-BetaAccessRequestRecommendationsRequestedItems
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestRecommendationsRequestedItems -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestRecommendationsRequestedItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-access-request-recommendations-viewed-items

This API returns the list of viewed access request recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'access.id eq "2c9180846b0a0583016b299f210c1314"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
$Sorters = "MySorters" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
# List of Viewed Access Request Recommendations
try {
    Get-BetaAccessRequestRecommendationsViewedItems
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestRecommendationsViewedItems -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestRecommendationsViewedItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


