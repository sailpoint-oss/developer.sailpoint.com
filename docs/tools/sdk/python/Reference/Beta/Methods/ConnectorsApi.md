---
id: beta-connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectors', 'BetaConnectors'] 
slug: /tools/sdk/python/beta/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'BetaConnectors']
---

# sailpoint.beta.ConnectorsApi
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/managing_sources.html) for more information about using connectors in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-connector-list**](#get-connector-list) | **GET** `/connectors` | Get Connector List


## get-connector-list
Get Connector List
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-list)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **type**: *eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**List[V3ConnectorDto]**](../models/v3-connector-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | List[V3ConnectorDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connectors_api import ConnectorsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.v3_connector_dto import V3ConnectorDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'directConnect eq \"true\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **type**: *eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **type**: *eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca* (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Get Connector List
        
        results = ConnectorsApi(api_client).get_connector_list()
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_list(filters, limit, offset, count, locale)
        print("The response of ConnectorsApi->get_connector_list:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_list: %s\n" % e)
```



[[Back to top]](#) 



