---
id: beta-application-discovery
title: Application_Discovery
pagination_label: Application_Discovery
sidebar_label: Application_Discovery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Application_Discovery', 'BetaApplication_Discovery'] 
slug: /tools/sdk/python/beta/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'Application_Discovery', 'BetaApplication_Discovery']
---

# sailpoint.beta.ApplicationDiscoveryApi
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-discovered-application-by-id**](#get-discovered-application-by-id) | **GET** `/discovered-applications/{id}` | Get Discovered Application by ID
[**get-discovered-applications**](#get-discovered-applications) | **GET** `/discovered-applications` | Retrieve discovered applications for tenant
[**get-manual-discover-applications-csv-template**](#get-manual-discover-applications-csv-template) | **GET** `/manual-discover-applications-template` | Download CSV Template for Discovery
[**patch-discovered-application-by-id**](#patch-discovered-application-by-id) | **PATCH** `/discovered-applications/{id}` | Patch Discovered Application by ID
[**send-manual-discover-applications-csv-template**](#send-manual-discover-applications-csv-template) | **POST** `/manual-discover-applications` | Upload CSV to Discover Applications


## get-discovered-application-by-id
Get Discovered Application by ID
Get the discovered application, along with with its associated sources, based on the provided ID.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-discovered-application-by-id)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Discovered application's ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the discovered application, along with its associated sources. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.beta.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '123e4567-e89b-12d3-a456-426655440000' # str | Discovered application's ID. # str | Discovered application's ID.

    try:
        # Get Discovered Application by ID
        
        ApplicationDiscoveryApi(api_client).get_discovered_application_by_id(id)
        # Below is a request that includes all optional parameters
        # ApplicationDiscoveryApi(api_client).get_discovered_application_by_id(id)
        except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_discovered_application_by_id: %s\n" % e)
```



[[Back to top]](#) 

## get-discovered-applications
Retrieve discovered applications for tenant
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-discovered-applications)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.get_discovered_applications200_response_inner import GetDiscoveredApplications200ResponseInner
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    detail = 'FULL' # str | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional) # str | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
    filter = 'name eq \"Okta\" and description co \"Okta\" and discoverySource in (\"csv\", \"Okta Saas\")' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)       Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource** (optional)

    try:
        # Retrieve discovered applications for tenant
        
        results =ApplicationDiscoveryApi(api_client).get_discovered_applications()
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).get_discovered_applications(limit, offset, detail, filter, sorters)
        print("The response of ApplicationDiscoveryApi->get_discovered_applications:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_discovered_applications: %s\n" % e)
```



[[Back to top]](#) 

## get-manual-discover-applications-csv-template
Download CSV Template for Discovery
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/beta/get-manual-discover-applications-csv-template)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ManualDiscoverApplicationsTemplate**](../models/manual-discover-applications-template)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A CSV file download was successful. | ManualDiscoverApplicationsTemplate |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.manual_discover_applications_template import ManualDiscoverApplicationsTemplate
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:

    try:
        # Download CSV Template for Discovery
        
        results =ApplicationDiscoveryApi(api_client).get_manual_discover_applications_csv_template()
        # Below is a request that includes all optional parameters
        # results = ApplicationDiscoveryApi(api_client).get_manual_discover_applications_csv_template()
        print("The response of ApplicationDiscoveryApi->get_manual_discover_applications_csv_template:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->get_manual_discover_applications_csv_template: %s\n" % e)
```



[[Back to top]](#) 

## patch-discovered-application-by-id
Patch Discovered Application by ID
Update an existing discovered application by using a limited version of the [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
You can patch these fields: - **associatedSources** - **dismissed**

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-discovered-application-by-id)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Discovered application's ID.
 Body  | json_patch_operations | [**[]JsonPatchOperations**](../models/json-patch-operations) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the single patched discovered application. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch_operations import JsonPatchOperations
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '123e4567-e89b-12d3-a456-426655440000' # str | Discovered application's ID. # str | Discovered application's ID.
    [{op=replace, path=/dismissed, value=true}] # List[JsonPatchOperations] |  (optional)
     json_patch_operations = {
          "op" : "replace",
          "path" : "/dismissed",
          "value" : true
        } # List[JsonPatchOperations] |  (optional)
    

    try:
        # Patch Discovered Application by ID
        
        ApplicationDiscoveryApi(api_client).patch_discovered_application_by_id(id, )
        # Below is a request that includes all optional parameters
        # ApplicationDiscoveryApi(api_client).patch_discovered_application_by_id(id, new_json_patch_operations)
        except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->patch_discovered_application_by_id: %s\n" % e)
```



[[Back to top]](#) 

## send-manual-discover-applications-csv-template
Upload CSV to Discover Applications
Upload a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/beta/send-manual-discover-applications-csv-template)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.application_discovery_api import ApplicationDiscoveryApi
from sailpoint.beta.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    file = None # bytearray | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. # bytearray | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

    try:
        # Upload CSV to Discover Applications
        
        ApplicationDiscoveryApi(api_client).send_manual_discover_applications_csv_template(file)
        # Below is a request that includes all optional parameters
        # ApplicationDiscoveryApi(api_client).send_manual_discover_applications_csv_template(file)
        except Exception as e:
        print("Exception when calling ApplicationDiscoveryApi->send_manual_discover_applications_csv_template: %s\n" % e)
```



[[Back to top]](#) 



