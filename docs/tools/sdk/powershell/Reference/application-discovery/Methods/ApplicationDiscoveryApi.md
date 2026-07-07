---
id: application-discovery
title: ApplicationDiscovery
pagination_label: ApplicationDiscovery
sidebar_label: ApplicationDiscovery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApplicationDiscovery', 'ApplicationDiscovery'] 
slug: /tools/sdk/powershell/applicationdiscovery/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscovery', 'ApplicationDiscovery']
---

# ApplicationDiscovery
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-DiscoveredApplicationsV1**](#get-discovered-applications-v1) | **GET** `/discovered-applications/v1` | Get discovered applications for tenant
[**Get-ManualDiscoverApplicationsCsvTemplateV1**](#get-manual-discover-applications-csv-template-v1) | **GET** `/manual-discover-applications-template/v1` | Download csv template for discovery
[**Send-ManualDiscoverApplicationsCsvTemplateV1**](#send-manual-discover-applications-csv-template-v1) | **POST** `/manual-discover-applications/v1` | Upload csv to discover applications
[**Start-ApplicationDiscoveryV1**](#start-application-discovery-v1) | **POST** `/sources/v1/{sourceId}/discover-applications` | Start Application Discovery


## get-discovered-applications-v1
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-discovered-applications-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Detail | **String** |   (optional) | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior.
  Query | Filter | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in* 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory**

### Return type
[**GetDiscoveredApplicationsV1200ResponseInner[]**](../models/get-discovered-applications-v1200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of discovered applications. By default, the API returns a list of SLIM discovered applications. | GetDiscoveredApplicationsV1200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Detail = "SLIM" # String | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
$Filter = "name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas")" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional)

# Get discovered applications for tenant

try {
    Get-DiscoveredApplicationsV1 
    
    # Below is a request that includes all optional parameters
    # Get-DiscoveredApplicationsV1 -Limit $Limit -Offset $Offset -Detail $Detail -Filter $Filter -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DiscoveredApplicationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-manual-discover-applications-csv-template-v1
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-manual-discover-applications-csv-template-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Manualdiscoverapplicationstemplate**](../models/manualdiscoverapplicationstemplate)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A CSV file download was successful. | Manualdiscoverapplicationstemplate
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example
```powershell

# Download csv template for discovery

try {
    Get-ManualDiscoverApplicationsCsvTemplateV1 
    
    # Below is a request that includes all optional parameters
    # Get-ManualDiscoverApplicationsCsvTemplateV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ManualDiscoverApplicationsCsvTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-manual-discover-applications-csv-template-v1
Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-manual-discover-applications-csv-template-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$File =  # System.IO.FileInfo | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

# Upload csv to discover applications

try {
    Send-ManualDiscoverApplicationsCsvTemplateV1 -File $File 
    
    # Below is a request that includes all optional parameters
    # Send-ManualDiscoverApplicationsCsvTemplateV1 -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ManualDiscoverApplicationsCsvTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-application-discovery-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to discover applications.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-application-discovery-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | SourceId | **String** | True  | The sourceId.
 Body  | Applicationdiscoveryrequest | [**Applicationdiscoveryrequest**](../models/applicationdiscoveryrequest) | True  | 

### Return type
[**Applicationdiscoveryresponse**](../models/applicationdiscoveryresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Application Discovery task was started successfully. | Applicationdiscoveryresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response
403 | Forbidden. Returned when the user doesn&#39;t have access to this endpoint, or when the quota of allowed invocations for the day has been exceeded.  | StartApplicationDiscoveryV1403Response
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SourceId = "MySourceId" # String | The sourceId.
$Applicationdiscoveryrequest = @""@

# Start Application Discovery

try {
    $Result = ConvertFrom-JsonToApplicationdiscoveryrequest -Json $Applicationdiscoveryrequest
    Start-ApplicationDiscoveryV1 -XSailPointExperimental $XSailPointExperimental -SourceId $SourceId -Applicationdiscoveryrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ApplicationDiscoveryV1 -XSailPointExperimental $XSailPointExperimental -SourceId $SourceId -Applicationdiscoveryrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ApplicationDiscoveryV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
