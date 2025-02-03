---
id: beta-iai-outliers
title: IAIOutliers
pagination_label: IAIOutliers
sidebar_label: IAIOutliers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIOutliers', 'BetaIAIOutliers'] 
slug: /tools/sdk/powershell/beta/methods/iai-outliers
tags: ['SDK', 'Software Development Kit', 'IAIOutliers', 'BetaIAIOutliers']
---


# IAIOutliers
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Export-BetaOutliersZip**](#export-outliers-zip) | **GET** `/outliers/export` | IAI Identity Outliers Export
[**Get-BetaIdentityOutlierSnapshots**](#get-identity-outlier-snapshots) | **GET** `/outlier-summaries` | IAI Identity Outliers Summary
[**Get-BetaIdentityOutliers**](#get-identity-outliers) | **GET** `/outliers` | IAI Get Identity Outliers
[**Get-BetaLatestIdentityOutlierSnapshots**](#get-latest-identity-outlier-snapshots) | **GET** `/outlier-summaries/latest` | IAI Identity Outliers Latest Summary
[**Get-BetaOutlierContributingFeatureSummary**](#get-outlier-contributing-feature-summary) | **GET** `/outlier-feature-summaries/{outlierFeatureId}` | Get identity outlier contibuting feature summary
[**Get-BetaPeerGroupOutliersContributingFeatures**](#get-peer-group-outliers-contributing-features) | **GET** `/outliers/{outlierId}/contributing-features` | Get identity outlier&#39;s contibuting features
[**Invoke-BetaIgnoreIdentityOutliers**](#ignore-identity-outliers) | **POST** `/outliers/ignore` | IAI Identity Outliers Ignore
[**Get-BetaOutliersContributingFeatureAccessItems**](#list-outliers-contributing-feature-access-items) | **GET** `/outliers/{outlierId}/feature-details/{contributingFeatureName}/access-items` | Gets a list of access items associated with each identity outlier contributing feature
[**Invoke-BetaUnIgnoreIdentityOutliers**](#un-ignore-identity-outliers) | **POST** `/outliers/unignore` | IAI Identity Outliers Unignore


## export-outliers-zip

This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported.

Columns will include: identityId, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes).


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Type | **String** |   (optional) | Type of the identity outliers snapshot to filter on

### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns zip of two CSVs to download. One CSV for ignored outliers and the other for non-ignored outliers. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example
```powershell
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)
# IAI Identity Outliers Export
try {
    Export-BetaOutliersZip
    
    # Below is a request that includes all optional parameters
    # Export-BetaOutliersZip -BetaType $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaOutliersZip"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-outlier-snapshots

This API returns a summary containing the number of identities that customer has, the number of outliers, and the type of outlier.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
200 | Succeeded. Returns list of objects. Each object is a summary to give high level statistics/counts of outliers. | OutlierSummary[]
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)
$Filters = 'snapshotDate ge "2022-02-07T20:13:29.356648026Z"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* (optional)
$Sorters = "snapshotDate" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** (optional)
# IAI Identity Outliers Summary
try {
    Get-BetaIdentityOutlierSnapshots
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityOutlierSnapshots -BetaLimit $Limit -BetaOffset $Offset -BetaType $Type -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityOutlierSnapshots"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-identity-outliers

This API returns a list of outliers, containing data such as identity ID, outlier type, detection dates, identity attributes, if identity is ignored, and certification information.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)
$Filters = 'attributes.displayName sw "John" and certStatus eq "false"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* (optional)
$Sorters = "attributes.displayName,firstDetectionDate,-score" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** (optional)
# IAI Get Identity Outliers
try {
    Get-BetaIdentityOutliers
    
    # Below is a request that includes all optional parameters
    # Get-BetaIdentityOutliers -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaType $Type -BetaFilters $Filters -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaIdentityOutliers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-latest-identity-outlier-snapshots

This API returns a most recent snapshot of each outlier type, each containing the number of identities that customer has, the number of outliers, and the type of outlier.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Type | **String** |   (optional) | Type of the identity outliers snapshot to filter on

### Return type

[**LatestOutlierSummary[]**](../models/latest-outlier-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns list of objects. Each object is a summary to give high level statistics/counts of outliers. | LatestOutlierSummary[]
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
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
$Type = "LOW_SIMILARITY" # String | Type of the identity outliers snapshot to filter on (optional)
# IAI Identity Outliers Latest Summary
try {
    Get-BetaLatestIdentityOutlierSnapshots
    
    # Below is a request that includes all optional parameters
    # Get-BetaLatestIdentityOutlierSnapshots -BetaType $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaLatestIdentityOutlierSnapshots"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-outlier-contributing-feature-summary

This API returns a summary of a contributing feature for an identity outlier.

The object contains: contributing feature name (translated text or message key), identity outlier display name, feature values, feature definition and explanation (translated text or message key), peer display name and identityId, access item reference, translation messages object.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OutlierFeatureId | **String** | True  | Contributing feature id

### Return type

[**OutlierFeatureSummary**](../models/outlier-feature-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Succeeded. Returns selected contributing feature summary for an outlier. | OutlierFeatureSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OutlierFeatureId = "04654b66-7561-4090-94f9-abee0722a1af" # String | Contributing feature id
# Get identity outlier contibuting feature summary
try {
    Get-BetaOutlierContributingFeatureSummary-BetaOutlierFeatureId $OutlierFeatureId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaOutlierContributingFeatureSummary -BetaOutlierFeatureId $OutlierFeatureId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaOutlierContributingFeatureSummary"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-peer-group-outliers-contributing-features

This API returns a list of contributing feature objects for a single outlier.

The object contains: feature name, feature value type, value, importance, display name (translated text or message key), description (translated text or message key), translation messages object.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OutlierId | **String** | True  | The outlier id
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OutlierId = "2c918085842e69ae018432d22ccb212f" # String | The outlier id
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$IncludeTranslationMessages = "include-translation-messages=" # String | Whether or not to include translation messages object in returned response (optional)
$Sorters = "importance" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** (optional)
# Get identity outlier's contibuting features
try {
    Get-BetaPeerGroupOutliersContributingFeatures-BetaOutlierId $OutlierId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPeerGroupOutliersContributingFeatures -BetaOutlierId $OutlierId -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaIncludeTranslationMessages $IncludeTranslationMessages -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPeerGroupOutliersContributingFeatures"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## ignore-identity-outliers

This API receives a list of identity IDs in the request, changes the outliers to be ignored.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RequestBody | **[]String** | True  | 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$RequestBody = "MyRequestBody" # String[] | 
 $RequestBody = @""@ 

# IAI Identity Outliers Ignore
try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Invoke-BetaIgnoreIdentityOutliers-BetaRequestBody $Result
    
    # Below is a request that includes all optional parameters
    # Invoke-BetaIgnoreIdentityOutliers -BetaRequestBody $RequestBody  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-BetaIgnoreIdentityOutliers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-outliers-contributing-feature-access-items

This API returns a list of the enriched access items associated with each feature filtered by the access item type.

The object contains: accessItemId, display name (translated text or message key), description (translated text or message key), accessType, sourceName, extremelyRare.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | OutlierId | **String** | True  | The outlier id
Path   | ContributingFeatureName | **String** | True  | The name of contributing feature
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OutlierId = "2c918085842e69ae018432d22ccb212f" # String | The outlier id
$ContributingFeatureName = "radical_entitlement_count" # String | The name of contributing feature
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$AccessType = "ENTITLEMENT" # String | The type of access item for the identity outlier contributing feature. If not provided, it returns all. (optional)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)
# Gets a list of access items associated with each identity outlier contributing feature
try {
    Get-BetaOutliersContributingFeatureAccessItems-BetaOutlierId $OutlierId -BetaContributingFeatureName $ContributingFeatureName 
    
    # Below is a request that includes all optional parameters
    # Get-BetaOutliersContributingFeatureAccessItems -BetaOutlierId $OutlierId -BetaContributingFeatureName $ContributingFeatureName -BetaLimit $Limit -BetaOffset $Offset -BetaCount $Count -BetaAccessType $AccessType -BetaSorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaOutliersContributingFeatureAccessItems"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## un-ignore-identity-outliers

This API receives a list of identity IDs in the request, changes the outliers to be un-ignored.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RequestBody | **[]String** | True  | 

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$RequestBody = "MyRequestBody" # String[] | 
 $RequestBody = @""@ 

# IAI Identity Outliers Unignore
try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Invoke-BetaUnIgnoreIdentityOutliers-BetaRequestBody $Result
    
    # Below is a request that includes all optional parameters
    # Invoke-BetaUnIgnoreIdentityOutliers -BetaRequestBody $RequestBody  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-BetaUnIgnoreIdentityOutliers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


