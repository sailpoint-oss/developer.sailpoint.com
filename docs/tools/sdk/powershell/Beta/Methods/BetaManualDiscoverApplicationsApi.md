---
id: manual-discover-applications
title: ManualDiscoverApplications
pagination_label: ManualDiscoverApplications
sidebar_label: ManualDiscoverApplications
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ManualDiscoverApplications'] 
slug: /tools/sdk/powershell/beta/methods/manual-discover-applications
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplications']
---


# ManualDiscoverApplications

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendManualDiscoverApplicationsCsvTemplate**](#send-manual-discover-applications-csv-template) | **POST** /manual-discover-applications | CSV Upload to discover applications



## send-manual-discover-applications-csv-template


This API allows for the upload of a CSV file containing application data to be manually correlated to potential IDN connector(s).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | CsvFile | **System.IO.FileInfo** | True  | 

	
### Return type

[**ManualDiscoverApplications**](../models/manual-discover-applications)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The CSV has been successfully processed. | ManualDiscoverApplications
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: multipart/form-data, application/json

[[Back to top]](#) 

