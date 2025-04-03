---
id: application-discovery
title: Application_Discovery
pagination_label: Application_Discovery
sidebar_label: Application_Discovery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Application_Discovery', 'Application_Discovery'] 
slug: /tools/sdk/python/v3/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'Application_Discovery', 'Application_Discovery']
---

# sailpoint.v3.ApplicationDiscoveryApi
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-discovered-applications**](#get-discovered-applications) | **GET** `/discovered-applications` | Get Discovered Applications for Tenant
[**get-manual-discover-applications-csv-template**](#get-manual-discover-applications-csv-template) | **GET** `/manual-discover-applications-template` | Download CSV Template for Discovery
[**send-manual-discover-applications-csv-template**](#send-manual-discover-applications-csv-template) | **POST** `/manual-discover-applications` | Upload CSV to Discover Applications


## get-discovered-applications
Get Discovered Applications for Tenant
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-discovered-applications)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | detail | **str** |   (optional) | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior.
  Query | filter | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in* 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource**

### Return type
[**List[GetDiscoveredApplications200ResponseInner]**](../models/get-discovered-applications200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of discovered applications. By default, the API returns a list of SLIM discovered applications. | List[GetDiscoveredApplications200ResponseInner] |  -  |
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
from sailpoint.v3.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.get_discovered_applications200_response_inner import GetDiscoveredApplications200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    detail = 'FULL' # str | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional) # str | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
    filter = 'name eq \"Okta\" and description co \"Okta\" and discoverySource in (\"csv\", \"Okta Saas\")' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource** (optional)

    try:
        # Get Discovered Applications for Tenant
        
        results = ApplicationDiscoveryApi(api_client).get_discovered_applications()
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).get_discovered_applications(limit, offset, detail, filter, sorters)
        print("The response of ApplicationDiscoveryApi->get_discovered_applications:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_discovered_applications: %s\n" % e)
```



[[Back to top]](#) 

## get-manual-discover-applications-csv-template
Download CSV Template for Discovery
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-manual-discover-applications-csv-template)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ManualDiscoverApplicationsTemplate**](../models/manual-discover-applications-template)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A CSV file download was successful. | ManualDiscoverApplicationsTemplate |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.v3.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.manual_discover_applications_template import ManualDiscoverApplicationsTemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Download CSV Template for Discovery
        
        results = ApplicationDiscoveryApi(api_client).get_manual_discover_applications_csv_template()
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).get_manual_discover_applications_csv_template()
        print("The response of ApplicationDiscoveryApi->get_manual_discover_applications_csv_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_manual_discover_applications_csv_template: %s\n" % e)
```



[[Back to top]](#) 

## send-manual-discover-applications-csv-template
Upload CSV to Discover Applications
Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-manual-discover-applications-csv-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | file | **bytearray** | True  | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The CSV has been successfully processed. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    file = None # bytearray | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. # bytearray | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

    try:
        # Upload CSV to Discover Applications
        
        ApplicationDiscoveryApi(api_client).send_manual_discover_applications_csv_template(file=file)
        # Below is a request that includes all optional parameters
        # ApplicationDiscoveryApi(api_client).send_manual_discover_applications_csv_template(file)
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->send_manual_discover_applications_csv_template: %s\n" % e)
```



[[Back to top]](#) 



