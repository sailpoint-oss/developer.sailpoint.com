---
id: v2025-iai-outliers
title: IAIOutliers
pagination_label: IAIOutliers
sidebar_label: IAIOutliers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIOutliers', 'V2025IAIOutliers'] 
slug: /tools/sdk/powershell/v2025/methods/iai-outliers
tags: ['SDK', 'Software Development Kit', 'IAIOutliers', 'V2025IAIOutliers']
---

# IAIOutliers
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Export-V2025OutliersZip**](#export-outliers-zip) | **GET** `/outliers/export` | IAI Identity Outliers Export
[**Get-V2025IdentityOutlierSnapshots**](#get-identity-outlier-snapshots) | **GET** `/outlier-summaries` | IAI Identity Outliers Summary
[**Get-V2025IdentityOutliers**](#get-identity-outliers) | **GET** `/outliers` | IAI Get Identity Outliers
[**Get-V2025LatestIdentityOutlierSnapshots**](#get-latest-identity-outlier-snapshots) | **GET** `/outlier-summaries/latest` | IAI Identity Outliers Latest Summary
[**Get-V2025OutlierContributingFeatureSummary**](#get-outlier-contributing-feature-summary) | **GET** `/outlier-feature-summaries/{outlierFeatureId}` | Get identity outlier contibuting feature summary
[**Get-V2025PeerGroupOutliersContributingFeatures**](#get-peer-group-outliers-contributing-features) | **GET** `/outliers/{outlierId}/contributing-features` | Get identity outlier&#39;s contibuting features
[**Invoke-V2025IgnoreIdentityOutliers**](#ignore-identity-outliers) | **POST** `/outliers/ignore` | IAI Identity Outliers Ignore
[**Get-V2025OutliersContributingFeatureAccessItems**](#list-outliers-contributing-feature-access-items) | **GET** `/outliers/{outlierId}/feature-details/{contributingFeatureName}/access-items` | Gets a list of access items associated with each identity outlier contributing feature
[**Invoke-V2025UnIgnoreIdentityOutliers**](#un-ignore-identity-outliers) | **POST** `/outliers/unignore` | IAI Identity Outliers Unignore


## export-outliers-zip
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported.

Columns will include: identityId, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes).


[API Spec](https://developer.sailpoint.com/docs/api/v2025/export-outliers-zip)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Type | **String** |   (optional) | Type of the identity outliers snapshot to filter on

### Return type
**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns zip of two CSVs to download. One CSV for ignored outliers and the other for non-ignored outliers. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)

# IAI Identity Outliers Export

try {
    Export-V2025OutliersZip -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Export-V2025OutliersZip -XSailPointExperimental $XSailPointExperimental -Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-V2025OutliersZip"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-outlier-snapshots
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a summary containing the number of identities that customer has, the number of outliers, and the type of outlier.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-outlier-snapshots)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Type | **String** |   (optional) | Type of the identity outliers snapshot to filter on
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate**

### Return type
[**OutlierSummary[]**](../models/outlier-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns list of objects. Each object is a summary to give high level statistics/counts of outliers | OutlierSummary[]
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)
$Filters = 'snapshotDate ge "2022-02-07T20:13:29.356648026Z"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* (optional)
$Sorters = "snapshotDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** (optional)

# IAI Identity Outliers Summary

try {
    Get-V2025IdentityOutlierSnapshots -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025IdentityOutlierSnapshots -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Type $Type -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025IdentityOutlierSnapshots"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-identity-outliers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of outliers, containing data such as identity ID, outlier type, detection dates, identity attributes, if identity is ignored, and certification information.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-outliers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Type | **String** |   (optional) | Type of the identity outliers snapshot to filter on
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score**

### Return type
[**Outlier[]**](../models/outlier)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns list of objects. Each object contains information about outliers. | Outlier[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)
$Filters = 'attributes.displayName sw "John" and certStatus eq "false"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* (optional)
$Sorters = "attributes.displayName,firstDetectionDate,-score" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** (optional)

# IAI Get Identity Outliers

try {
    Get-V2025IdentityOutliers -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025IdentityOutliers -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Type $Type -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025IdentityOutliers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-latest-identity-outlier-snapshots
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a most recent snapshot of each outlier type, each containing the number of identities that customer has, the number of outliers, and the type of outlier.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-latest-identity-outlier-snapshots)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Type | **String** |   (optional) | Type of the identity outliers snapshot to filter on

### Return type
[**LatestOutlierSummary[]**](../models/latest-outlier-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns list of objects. Each object is a summary to give high level statistics/counts of outliers. | LatestOutlierSummary[]
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)

# IAI Identity Outliers Latest Summary

try {
    Get-V2025LatestIdentityOutlierSnapshots -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025LatestIdentityOutlierSnapshots -XSailPointExperimental $XSailPointExperimental -Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025LatestIdentityOutlierSnapshots"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-outlier-contributing-feature-summary
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a summary of a contributing feature for an identity outlier.

The object contains: contributing feature name (translated text or message key), identity outlier display name, feature values, feature definition and explanation (translated text or message key), peer display name and identityId, access item reference, translation messages object.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-outlier-contributing-feature-summary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OutlierFeatureId | **String** | True  | Contributing feature id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**OutlierFeatureSummary**](../models/outlier-feature-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns selected contributing feature summary for an outlier. | OutlierFeatureSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OutlierFeatureId = "04654b66-7561-4090-94f9-abee0722a1af" # String | Contributing feature id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get identity outlier contibuting feature summary

try {
    Get-V2025OutlierContributingFeatureSummary -OutlierFeatureId $OutlierFeatureId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025OutlierContributingFeatureSummary -OutlierFeatureId $OutlierFeatureId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025OutlierContributingFeatureSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-peer-group-outliers-contributing-features
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of contributing feature objects for a single outlier.

The object contains: feature name, feature value type, value, importance, display name (translated text or message key), description (translated text or message key), translation messages object.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-peer-group-outliers-contributing-features)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OutlierId | **String** | True  | The outlier id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | IncludeTranslationMessages | **String** |   (optional) | Whether or not to include translation messages object in returned response
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance**

### Return type
[**OutlierContributingFeature[]**](../models/outlier-contributing-feature)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns list of objects. Each object contains a feature and metadata about that feature. | OutlierContributingFeature[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OutlierId = "2c918085842e69ae018432d22ccb212f" # String | The outlier id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$IncludeTranslationMessages = "include-translation-messages=" # String | Whether or not to include translation messages object in returned response (optional)
$Sorters = "importance" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** (optional)

# Get identity outlier's contibuting features

try {
    Get-V2025PeerGroupOutliersContributingFeatures -OutlierId $OutlierId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025PeerGroupOutliersContributingFeatures -OutlierId $OutlierId -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -IncludeTranslationMessages $IncludeTranslationMessages -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025PeerGroupOutliersContributingFeatures"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## ignore-identity-outliers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API receives a list of identity IDs in the request, changes the outliers to be ignored.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/ignore-identity-outliers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "MyRequestBody" # String[] | 
 $RequestBody = @""@ # String[] | 
 

# IAI Identity Outliers Ignore

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Invoke-V2025IgnoreIdentityOutliers -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-V2025IgnoreIdentityOutliers -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-V2025IgnoreIdentityOutliers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-outliers-contributing-feature-access-items
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a list of the enriched access items associated with each feature filtered by the access item type.

The object contains: accessItemId, display name (translated text or message key), description (translated text or message key), accessType, sourceName, extremelyRare.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-outliers-contributing-feature-access-items)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OutlierId | **String** | True  | The outlier id
Path   | ContributingFeatureName | **String** | True  | The name of contributing feature
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | AccessType | **String** |   (optional) | The type of access item for the identity outlier contributing feature. If not provided, it returns all.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName**

### Return type
[**OutliersContributingFeatureAccessItems[]**](../models/outliers-contributing-feature-access-items)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of access items. | OutliersContributingFeatureAccessItems[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OutlierId = "2c918085842e69ae018432d22ccb212f" # String | The outlier id
$ContributingFeatureName = "radical_entitlement_count" # String | The name of contributing feature
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$AccessType = "ENTITLEMENT" # String | The type of access item for the identity outlier contributing feature. If not provided, it returns all. (optional)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)

# Gets a list of access items associated with each identity outlier contributing feature

try {
    Get-V2025OutliersContributingFeatureAccessItems -OutlierId $OutlierId -ContributingFeatureName $ContributingFeatureName -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025OutliersContributingFeatureAccessItems -OutlierId $OutlierId -ContributingFeatureName $ContributingFeatureName -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -AccessType $AccessType -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025OutliersContributingFeatureAccessItems"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## un-ignore-identity-outliers
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API receives a list of identity IDs in the request, changes the outliers to be un-ignored.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/un-ignore-identity-outliers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "MyRequestBody" # String[] | 
 $RequestBody = @""@ # String[] | 
 

# IAI Identity Outliers Unignore

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Invoke-V2025UnIgnoreIdentityOutliers -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-V2025UnIgnoreIdentityOutliers -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-V2025UnIgnoreIdentityOutliers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
