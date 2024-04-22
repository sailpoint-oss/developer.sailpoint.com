---
id: manual-discover-applications-template
title: ManualDiscoverApplicationsTemplate
pagination_label: ManualDiscoverApplicationsTemplate
sidebar_label: ManualDiscoverApplicationsTemplate
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ManualDiscoverApplicationsTemplate'] 
slug: /tools/sdk/powershell/beta/methods/manual-discover-applications-template
tags: ['SDK', 'Software Development Kit', 'ManualDiscoverApplicationsTemplate']
---


# ManualDiscoverApplicationsTemplate

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManualDiscoverApplicationsCsvTemplate**](#get-manual-discover-applications-csv-template) | **GET** /manual-discover-applications-template | CSV template download for discovery



## get-manual-discover-applications-csv-template


Allows the user to download an example CSV file with two columns `application_name` and `domain`. The CSV file contains a single row with the values 'Example Application' and 'Example Description'.


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

[[Back to top]](#) 

