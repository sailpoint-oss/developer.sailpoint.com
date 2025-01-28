---
id: application-discovery
title: ApplicationDiscovery
pagination_label: ApplicationDiscovery
sidebar_label: ApplicationDiscovery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApplicationDiscovery'] 
slug: /tools/sdk/powershell/v3/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscovery']
---


# ApplicationDiscovery

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-DiscoveredApplications**](#get-discovered-applications) | **GET** `/discovered-applications` | Get Discovered Applications for Tenant
[**Get-ManualDiscoverApplicationsCsvTemplate**](#get-manual-discover-applications-csv-template) | **GET** `/manual-discover-applications-template` | Download CSV Template for Discovery
[**Send-ManualDiscoverApplicationsCsvTemplate**](#send-manual-discover-applications-csv-template) | **POST** `/manual-discover-applications` | Upload CSV to Discover Applications


## get-discovered-applications

Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Detail | **String** |   (optional) | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior.
  Query | Filter | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in* 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource**

### Return type

[**GetDiscoveredApplications200ResponseInner[]**](../models/get-discovered-applications200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of discovered applications. By default, the API returns a list of SLIM discovered applications. | GetDiscoveredApplications200ResponseInner[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Detail = "SLIM" # String | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
$Filter = "name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas")" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource** (optional)
# Get Discovered Applications for Tenant
try {
    Get-DiscoveredApplications
    
    # Below is a request that includes all optional parameters
    # Get-DiscoveredApplications -Limit $Limit -Offset $Offset -Detail $Detail -Filter $Filter -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DiscoveredApplications"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-manual-discover-applications-csv-template

Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**ManualDiscoverApplicationsTemplate**](../models/manual-discover-applications-template)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A CSV file download was successful. | ManualDiscoverApplicationsTemplate
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell
# Download CSV Template for Discovery
try {
    Get-ManualDiscoverApplicationsCsvTemplate
    
    # Below is a request that includes all optional parameters
    # Get-ManualDiscoverApplicationsCsvTemplate  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManualDiscoverApplicationsCsvTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## send-manual-discover-applications-csv-template

Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | File | **System.IO.FileInfo** | True  | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The CSV has been successfully processed. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$File =  # System.IO.FileInfo | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.
# Upload CSV to Discover Applications
try {
    Send-ManualDiscoverApplicationsCsvTemplate-File $File 
    
    # Below is a request that includes all optional parameters
    # Send-ManualDiscoverApplicationsCsvTemplate -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ManualDiscoverApplicationsCsvTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


