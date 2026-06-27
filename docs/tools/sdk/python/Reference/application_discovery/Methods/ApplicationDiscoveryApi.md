---
id: application-discovery
title: Application_Discovery
pagination_label: Application_Discovery
sidebar_label: Application_Discovery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Application_Discovery', 'Application_Discovery'] 
slug: /tools/sdk/python/application-discovery/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'Application_Discovery', 'Application_Discovery']
---

# sailpoint.application_discovery.ApplicationDiscoveryApi
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-discovered-applications-v1**](#get-discovered-applications-v1) | **GET** `/discovered-applications/v1` | Get discovered applications for tenant
[**get-manual-discover-applications-csv-template-v1**](#get-manual-discover-applications-csv-template-v1) | **GET** `/manual-discover-applications-template/v1` | Download csv template for discovery
[**send-manual-discover-applications-csv-template-v1**](#send-manual-discover-applications-csv-template-v1) | **POST** `/manual-discover-applications/v1` | Upload csv to discover applications
[**start-application-discovery-v1**](#start-application-discovery-v1) | **POST** `/sources/v1/{sourceId}/discover-applications` | Start Application Discovery


## get-discovered-applications-v1
Get discovered applications for tenant
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-discovered-applications-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | detail | **str** |   (optional) | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior.
  Query | filter | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in* 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory**

### Return type
[**List[GetDiscoveredApplicationsV1200ResponseInner]**](../models/get-discovered-applications-v1200-response-inner)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of discovered applications. By default, the API returns a list of SLIM discovered applications. | List[GetDiscoveredApplicationsV1200ResponseInner] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.application_discovery.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.application_discovery.api_client import ApiClient
from sailpoint.application_discovery.models.get_discovered_applications_v1200_response_inner import GetDiscoveredApplicationsV1200ResponseInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    detail = 'FULL' # str | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional) # str | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
    filter = 'name eq \"Okta\" and description co \"Okta\" and discoverySource in (\"csv\", \"Okta Saas\")' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional)

    try:
        # Get discovered applications for tenant
        
        results = ApplicationDiscoveryApi(api_client).get_discovered_applications_v1()
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).get_discovered_applications_v1(limit, offset, detail, filter, sorters)
        print("The response of ApplicationDiscoveryApi->get_discovered_applications_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_discovered_applications_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-manual-discover-applications-csv-template-v1
Download csv template for discovery
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-manual-discover-applications-csv-template-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Manualdiscoverapplicationstemplate**](../models/manualdiscoverapplicationstemplate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A CSV file download was successful. | Manualdiscoverapplicationstemplate |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.application_discovery.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.application_discovery.api_client import ApiClient
from sailpoint.application_discovery.models.manualdiscoverapplicationstemplate import Manualdiscoverapplicationstemplate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Download csv template for discovery
        
        results = ApplicationDiscoveryApi(api_client).get_manual_discover_applications_csv_template_v1()
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).get_manual_discover_applications_csv_template_v1()
        print("The response of ApplicationDiscoveryApi->get_manual_discover_applications_csv_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_manual_discover_applications_csv_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## send-manual-discover-applications-csv-template-v1
Upload csv to discover applications
Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-manual-discover-applications-csv-template-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.application_discovery.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.application_discovery.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    file = None # bytearray | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. # bytearray | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

    try:
        # Upload csv to discover applications
        
        ApplicationDiscoveryApi(api_client).send_manual_discover_applications_csv_template_v1(file=file)
        # Below is a request that includes all optional parameters
        # ApplicationDiscoveryApi(api_client).send_manual_discover_applications_csv_template_v1(file)
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->send_manual_discover_applications_csv_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-application-discovery-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Start Application Discovery
Use this API to discover applications.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-application-discovery-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The sourceId.
 Body  | applicationdiscoveryrequest | [**Applicationdiscoveryrequest**](../models/applicationdiscoveryrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Applicationdiscoveryresponse**](../models/applicationdiscoveryresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Application Discovery task was started successfully. | Applicationdiscoveryresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartApplicationDiscoveryV1401Response |  -  |
403 | Forbidden. Returned when the user doesn&#39;t have access to this endpoint, or when the quota of allowed invocations for the day has been exceeded.  | StartApplicationDiscoveryV1403Response |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartApplicationDiscoveryV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.application_discovery.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.application_discovery.api_client import ApiClient
from sailpoint.application_discovery.models.applicationdiscoveryrequest import Applicationdiscoveryrequest
from sailpoint.application_discovery.models.applicationdiscoveryresponse import Applicationdiscoveryresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'source_id_example' # str | The sourceId. # str | The sourceId.
    applicationdiscoveryrequest = '''sailpoint.application_discovery.Applicationdiscoveryrequest()''' # Applicationdiscoveryrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Start Application Discovery
        new_applicationdiscoveryrequest = Applicationdiscoveryrequest.from_json(applicationdiscoveryrequest)
        results = ApplicationDiscoveryApi(api_client).start_application_discovery_v1(source_id=source_id, applicationdiscoveryrequest=new_applicationdiscoveryrequest)
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).start_application_discovery_v1(source_id, new_applicationdiscoveryrequest, x_sail_point_experimental)
        print("The response of ApplicationDiscoveryApi->start_application_discovery_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->start_application_discovery_v1: %s\n" % e)
```



[[Back to top]](#) 



