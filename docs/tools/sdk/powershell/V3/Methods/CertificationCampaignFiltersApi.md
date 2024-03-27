---
id: certification-campaign-filters
title: CertificationCampaignFilters
pagination_label: CertificationCampaignFilters
sidebar_label: CertificationCampaignFilters
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CertificationCampaignFilters'] 
slug: /tools/sdk/powershell/v3/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'CertificationCampaignFilters']
---


# CertificationCampaignFilters

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaignFilter**](#create-campaign-filter) | **POST** /campaign-filters | Create a Campaign Filter
[**deleteCampaignFilters**](#delete-campaign-filters) | **POST** /campaign-filters/delete | Deletes Campaign Filters
[**getCampaignFilterById**](#get-campaign-filter-by-id) | **GET** /campaign-filters/{id} | Get Campaign Filter by ID
[**listCampaignFilters**](#list-campaign-filters) | **GET** /campaign-filters | List Campaign Filters
[**updateCampaignFilter**](#update-campaign-filter) | **POST** /campaign-filters/{id} | Updates a Campaign Filter



## create-campaign-filter


Create a campaign Filter based on filter details and criteria.

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

[[Back to top]](#) 


## delete-campaign-filters


Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

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

[[Back to top]](#) 


## get-campaign-filter-by-id


Retrieves information for an existing campaign filter using the filter's ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | FilterId | **String** | True  | The ID of the campaign filter to be retrieved.

	
### Return type

[**CampaignFilterDetails[]**](../models/campaign-filter-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A campaign filter object. | CampaignFilterDetails[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-campaign-filters


Lists all Campaign Filters. Scope can be reduced via standard V3 query params.

All Campaign Filters matching the query params

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Start | **Int32** |   (optional) (default to 0) | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | IncludeSystemFilters | **Boolean** |   (optional) (default to $true) | If true, include system filters in the count and results, exclude them otherwise. If not provided any value for it then by default it is true.

	
### Return type

[**ListCampaignFilters200Response**](../models/list-campaign-filters200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of campaign filter objects | ListCampaignFilters200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## update-campaign-filter


Updates an existing campaign filter using the filter's ID.

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

[[Back to top]](#) 

