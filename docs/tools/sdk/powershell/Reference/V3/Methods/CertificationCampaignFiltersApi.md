---
id: certification-campaign-filters
title: CertificationCampaignFilters
pagination_label: CertificationCampaignFilters
sidebar_label: CertificationCampaignFilters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationCampaignFilters', 'CertificationCampaignFilters'] 
slug: /tools/sdk/powershell/v3/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'CertificationCampaignFilters', 'CertificationCampaignFilters']
---

# CertificationCampaignFilters
  Use this API to implement the certification campaign filter functionality. These filters can be used to create a certification campaign that includes a subset of your entitlements or users to certify.

For example, if for a certification campaign an organization wants to certify only specific users or entitlements, then those can be included/excluded on the basis of campaign filters.

For more information about creating a campaign filter, refer to [Creating a Campaign Filter](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#creating-a-campaign-filter)

You can create campaign filters using any of the following criteria types:

- Access Profile : This criteria type includes or excludes access profiles from a campaign.

- Account Attribute : This criteria type includes or excludes certification items that match a specified value in an account attribute.

- Entitlement : This criteria type includes or excludes entitlements from a campaign.

- Identity : This criteria type includes or excludes specific identities from your campaign.

- Identity Attribute : This criteria type includes or excludes identities based on whether they have an identity attribute that matches criteria you&#39;ve chosen.

- Role : This criteria type includes or excludes roles, as opposed to identities.

- Source : This criteria type includes or excludes entitlements from a source you select.

For more information about these criteria types, refer to [Types of Campaign Filters](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#types-of-campaign-filters)

Once the campaign filter is created, it can be linked while creating the campaign. The generated campaign will have the items to review as per the campaign filter.

For example, An inclusion campaign filter is created with a source of Source 1, an operation of Equals, and an entitlement of Entitlement 1. When this filter is selected, only users who have Entitlement 1 are included in the campaign, and only Entitlement 1 is shown in the certification.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-CampaignFilter**](#create-campaign-filter) | **POST** `/campaign-filters` | Create Campaign Filter
[**Remove-CampaignFilters**](#delete-campaign-filters) | **POST** `/campaign-filters/delete` | Deletes Campaign Filters
[**Get-CampaignFilterById**](#get-campaign-filter-by-id) | **GET** `/campaign-filters/{id}` | Get Campaign Filter by ID
[**Get-CampaignFilters**](#list-campaign-filters) | **GET** `/campaign-filters` | List Campaign Filters
[**Update-CampaignFilter**](#update-campaign-filter) | **POST** `/campaign-filters/{id}` | Updates a Campaign Filter


## create-campaign-filter
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-campaign-filter)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CampaignFilterDetails | [**CampaignFilterDetails**](../models/campaign-filter-details) | True  | 

### Return type
[**CampaignFilterDetails**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created successfully. | CampaignFilterDetails
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
$CampaignFilterDetails = @"{
  "owner" : "SailPoint Support",
  "mode" : "INCLUSION",
  "isSystemFilter" : false,
  "name" : "Identity Attribute Campaign Filter",
  "description" : "Campaign filter to certify data based on an identity attribute's specified property.",
  "id" : "5ec18cef39020d6fd7a60ad3970aba61",
  "criteriaList" : [ {
    "type" : "IDENTITY_ATTRIBUTE",
    "property" : "displayName",
    "value" : "support",
    "operation" : "CONTAINS",
    "negateResult" : false,
    "shortCircuit" : false,
    "recordChildMatches" : false,
    "suppressMatchedItems" : false
  } ]
}"@

# Create Campaign Filter

try {
    $Result = ConvertFrom-JsonToCampaignFilterDetails -Json $CampaignFilterDetails
    New-CampaignFilter -CampaignFilterDetails $Result 
    
    # Below is a request that includes all optional parameters
    # New-CampaignFilter -CampaignFilterDetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-CampaignFilter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-campaign-filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-campaign-filters)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | RequestBody | **[]String** | True  | A json list of IDs of campaign filters to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$RequestBody = "MyRequestBody" # String[] | A json list of IDs of campaign filters to delete.
 $RequestBody = @""@ # String[] | A json list of IDs of campaign filters to delete.
 

# Deletes Campaign Filters

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Remove-CampaignFilters -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-CampaignFilters -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-CampaignFilters"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-filter-by-id
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-campaign-filter-by-id)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the campaign filter to be retrieved.

### Return type
[**CampaignFilterDetails**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A campaign filter object. | CampaignFilterDetails
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
$Id = "e9f9a1397b842fd5a65842087040d3ac" # String | The ID of the campaign filter to be retrieved.

# Get Campaign Filter by ID

try {
    Get-CampaignFilterById -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-CampaignFilterById -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CampaignFilterById"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-campaign-filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-campaign-filters)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Start | **Int32** |   (optional) (default to 0) | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | IncludeSystemFilters | **Boolean** |   (optional) (default to $true) | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true. 

### Return type
[**ListCampaignFilters200Response**](../models/list-campaign-filters200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign filter objects. | ListCampaignFilters200Response
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
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Start = 0 # Int32 | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$IncludeSystemFilters = $true # Boolean | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to $true)

# List Campaign Filters

try {
    Get-CampaignFilters 
    
    # Below is a request that includes all optional parameters
    # Get-CampaignFilters -Limit $Limit -Start $Start -IncludeSystemFilters $IncludeSystemFilters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CampaignFilters"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-campaign-filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-campaign-filter)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FilterId | **String** | True  | The ID of the campaign filter being modified.
 Body  | CampaignFilterDetails | [**CampaignFilterDetails**](../models/campaign-filter-details) | True  | A campaign filter details with updated field values.

### Return type
[**CampaignFilterDetails**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created successfully. | CampaignFilterDetails
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
$FilterId = "e9f9a1397b842fd5a65842087040d3ac" # String | The ID of the campaign filter being modified.
$CampaignFilterDetails = @"{
  "owner" : "SailPoint Support",
  "mode" : "INCLUSION",
  "isSystemFilter" : false,
  "name" : "Identity Attribute Campaign Filter",
  "description" : "Campaign filter to certify data based on an identity attribute's specified property.",
  "id" : "5ec18cef39020d6fd7a60ad3970aba61",
  "criteriaList" : [ {
    "type" : "IDENTITY_ATTRIBUTE",
    "property" : "displayName",
    "value" : "support",
    "operation" : "CONTAINS",
    "negateResult" : false,
    "shortCircuit" : false,
    "recordChildMatches" : false,
    "suppressMatchedItems" : false
  } ]
}"@

# Updates a Campaign Filter

try {
    $Result = ConvertFrom-JsonToCampaignFilterDetails -Json $CampaignFilterDetails
    Update-CampaignFilter -FilterId $FilterId -CampaignFilterDetails $Result 
    
    # Below is a request that includes all optional parameters
    # Update-CampaignFilter -FilterId $FilterId -CampaignFilterDetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-CampaignFilter"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
