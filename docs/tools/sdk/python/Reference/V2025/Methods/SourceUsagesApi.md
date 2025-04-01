---
id: v2025-source-usages
title: Source_Usages
pagination_label: Source_Usages
sidebar_label: Source_Usages
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Source_Usages', 'V2025Source_Usages'] 
slug: /tools/sdk/python/v2025/methods/source-usages
tags: ['SDK', 'Software Development Kit', 'Source_Usages', 'V2025Source_Usages']
---

# sailpoint.v2025.SourceUsagesApi
  Use this API to implement source usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; sources are being used.
This allows organizations to get the information they need to start optimizing and securing source usage.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-status-by-source-id**](#get-status-by-source-id) | **GET** `/source-usages/{sourceId}/status` | Finds status of source usage
[**get-usages-by-source-id**](#get-usages-by-source-id) | **GET** `/source-usages/{sourceId}/summaries` | Returns source usage insights


## get-status-by-source-id
Finds status of source usage
This API returns the status of the source usage insights setup by IDN source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-status-by-source-id)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of IDN source

### Return type
[**SourceUsageStatus**](../models/source-usage-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the source usage insights setup by IDN source ID. | SourceUsageStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.source_usages_api import SourceUsagesApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_usage_status import SourceUsageStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | ID of IDN source # str | ID of IDN source

    try:
        # Finds status of source usage
        
        results = SourceUsagesApi(api_client).get_status_by_source_id(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourceUsagesApi(api_client).get_status_by_source_id(source_id)
        print("The response of SourceUsagesApi->get_status_by_source_id:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourceUsagesApi->get_status_by_source_id: %s\n" % e)
```



[[Back to top]](#) 

## get-usages-by-source-id
Returns source usage insights
This API returns a summary of source usage insights for past 12 months.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-usages-by-source-id)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | ID of IDN source
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date**

### Return type
[**List[SourceUsage]**](../models/source-usage)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Summary of source usage insights for past 12 months. | List[SourceUsage] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.source_usages_api import SourceUsagesApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_usage import SourceUsage
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | ID of IDN source # str | ID of IDN source
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = '-date' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional)

    try:
        # Returns source usage insights
        
        results = SourceUsagesApi(api_client).get_usages_by_source_id(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = SourceUsagesApi(api_client).get_usages_by_source_id(source_id, limit, offset, count, sorters)
        print("The response of SourceUsagesApi->get_usages_by_source_id:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SourceUsagesApi->get_usages_by_source_id: %s\n" % e)
```



[[Back to top]](#) 



