---
id: certification-campaign-filters
title: CertificationCampaignFilters
pagination_label: CertificationCampaignFilters
sidebar_label: CertificationCampaignFilters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationCampaignFilters', 'CertificationCampaignFilters'] 
slug: /tools/sdk/powershell/certificationcampaignfilters/methods/certification-campaign-filters
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-CampaignFilterV1**](#create-campaign-filter-v1) | **POST** `/campaign-filters/v1` | Create campaign filter
[**Remove-CampaignFiltersV1**](#delete-campaign-filters-v1) | **POST** `/campaign-filters/v1/delete` | Deletes campaign filters
[**Get-CampaignFilterByIdV1**](#get-campaign-filter-by-id-v1) | **GET** `/campaign-filters/v1/{id}` | Get campaign filter by id
[**Get-CampaignFiltersV1**](#list-campaign-filters-v1) | **GET** `/campaign-filters/v1` | List campaign filters
[**Update-CampaignFilterV1**](#update-campaign-filter-v1) | **POST** `/campaign-filters/v1/{id}` | Updates a campaign filter


## create-campaign-filter-v1
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-filter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Campaignfilterdetails | [**Campaignfilterdetails**](../models/campaignfilterdetails) | True  | 

### Return type
[**Campaignfilterdetails**](../models/campaignfilterdetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created successfully. | Campaignfilterdetails
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Campaignfilterdetails = @""@

# Create campaign filter

try {
    $Result = ConvertFrom-JsonToCampaignfilterdetails -Json $Campaignfilterdetails
    New-CampaignFilterV1 -Campaignfilterdetails $Result 
    
    # Below is a request that includes all optional parameters
    # New-CampaignFilterV1 -Campaignfilterdetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-CampaignFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-campaign-filters-v1
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-filters-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$RequestBody = "MyRequestBody" # String[] | A json list of IDs of campaign filters to delete.
 $RequestBody = @""@ # String[] | A json list of IDs of campaign filters to delete.
 

# Deletes campaign filters

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Remove-CampaignFiltersV1 -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-CampaignFiltersV1 -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-CampaignFiltersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-campaign-filter-by-id-v1
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-filter-by-id-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the campaign filter to be retrieved.

### Return type
[**Campaignfilterdetails**](../models/campaignfilterdetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A campaign filter object. | Campaignfilterdetails
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "e9f9a1397b842fd5a65842087040d3ac" # String | The ID of the campaign filter to be retrieved.

# Get campaign filter by id

try {
    Get-CampaignFilterByIdV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-CampaignFilterByIdV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CampaignFilterByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-campaign-filters-v1
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-campaign-filters-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Start | **Int32** |   (optional) (default to 0) | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | IncludeSystemFilters | **Boolean** |   (optional) (default to $true) | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true. 

### Return type
[**ListCampaignFiltersV1200Response**](../models/list-campaign-filters-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign filter objects. | ListCampaignFiltersV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Start = 0 # Int32 | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$IncludeSystemFilters = $true # Boolean | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to $true)

# List campaign filters

try {
    Get-CampaignFiltersV1 
    
    # Below is a request that includes all optional parameters
    # Get-CampaignFiltersV1 -Limit $Limit -Start $Start -IncludeSystemFilters $IncludeSystemFilters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CampaignFiltersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-campaign-filter-v1
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-campaign-filter-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the campaign filter being modified.
 Body  | Campaignfilterdetails | [**Campaignfilterdetails**](../models/campaignfilterdetails) | True  | A campaign filter details with updated field values.

### Return type
[**Campaignfilterdetails**](../models/campaignfilterdetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created successfully. | Campaignfilterdetails
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCampaignFiltersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCampaignFiltersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "e9f9a1397b842fd5a65842087040d3ac" # String | The ID of the campaign filter being modified.
$Campaignfilterdetails = @""@

# Updates a campaign filter

try {
    $Result = ConvertFrom-JsonToCampaignfilterdetails -Json $Campaignfilterdetails
    Update-CampaignFilterV1 -Id $Id -Campaignfilterdetails $Result 
    
    # Below is a request that includes all optional parameters
    # Update-CampaignFilterV1 -Id $Id -Campaignfilterdetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-CampaignFilterV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
