---
id: v2024-role-insights
title: Role_Insights
pagination_label: Role_Insights
sidebar_label: Role_Insights
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Role_Insights', 'V2024Role_Insights'] 
slug: /tools/sdk/python/v2024/methods/role-insights
tags: ['SDK', 'Software Development Kit', 'Role_Insights', 'V2024Role_Insights']
---

# sailpoint.v2024.RoleInsightsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role-insight-requests**](#create-role-insight-requests) | **POST** `/role-insights/requests` | Generate insights for roles
[**download-role-insights-entitlements-changes**](#download-role-insights-entitlements-changes) | **GET** `/role-insights/{insightId}/entitlement-changes/download` | Download entitlement insights for a role
[**get-entitlement-changes-identities**](#get-entitlement-changes-identities) | **GET** `/role-insights/{insightId}/entitlement-changes/{entitlementId}/identities` | Get identities for a suggested entitlement (for a role)
[**get-role-insight**](#get-role-insight) | **GET** `/role-insights/{insightId}` | Get a single role insight
[**get-role-insights**](#get-role-insights) | **GET** `/role-insights` | Get role insights
[**get-role-insights-current-entitlements**](#get-role-insights-current-entitlements) | **GET** `/role-insights/{insightId}/current-entitlements` | Get current entitlement for a role
[**get-role-insights-entitlements-changes**](#get-role-insights-entitlements-changes) | **GET** `/role-insights/{insightId}/entitlement-changes` | Get entitlement insights for a role
[**get-role-insights-requests**](#get-role-insights-requests) | **GET** `/role-insights/requests/{id}` | Returns metadata from prior request.
[**get-role-insights-summary**](#get-role-insights-summary) | **GET** `/role-insights/summary` | Get role insights summary information


## create-role-insight-requests
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Generate insights for roles
Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-role-insight-requests)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RoleInsightsResponse**](../models/role-insights-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Submitted a role insights generation request | RoleInsightsResponse |  -  |
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
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insights_response import RoleInsightsResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Generate insights for roles
        
        results = RoleInsightsApi(api_client).create_role_insight_requests(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).create_role_insight_requests(x_sail_point_experimental)
        print("The response of RoleInsightsApi->create_role_insight_requests:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->create_role_insight_requests: %s\n" % e)
```



[[Back to top]](#) 

## download-role-insights-entitlements-changes
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
Download entitlement insights for a role
This endpoint returns the entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/download-role-insights-entitlements-changes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | insight_id | **str** | True  | The role insight id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a csv file containing a list of entitlements to be added for a role. | str |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    insight_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role insight id # str | The role insight id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    sorters = 'identitiesWithAccess' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional)
    filters = 'name sw \"r\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

    try:
        # Download entitlement insights for a role
        
        results = RoleInsightsApi(api_client).download_role_insights_entitlements_changes(insight_id=insight_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).download_role_insights_entitlements_changes(insight_id, x_sail_point_experimental, sorters, filters)
        print("The response of RoleInsightsApi->download_role_insights_entitlements_changes:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->download_role_insights_entitlements_changes: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-changes-identities
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
Get identities for a suggested entitlement (for a role)
Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-entitlement-changes-identities)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | insight_id | **str** | True  | The role insight id
Path   | entitlement_id | **str** | True  | The entitlement id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | has_entitlement | **bool** |   (optional) (default to False) | Identity has this entitlement or not
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*

### Return type
[**List[RoleInsightsIdentities]**](../models/role-insights-identities)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of identities with or without the entitlement. | List[RoleInsightsIdentities] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insights_identities import RoleInsightsIdentities
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    insight_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role insight id # str | The role insight id
    entitlement_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The entitlement id # str | The entitlement id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    has_entitlement = False # bool | Identity has this entitlement or not (optional) (default to False) # bool | Identity has this entitlement or not (optional) (default to False)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'name sw \"Jan\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)

    try:
        # Get identities for a suggested entitlement (for a role)
        
        results = RoleInsightsApi(api_client).get_entitlement_changes_identities(insight_id=insight_id, entitlement_id=entitlement_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_entitlement_changes_identities(insight_id, entitlement_id, x_sail_point_experimental, has_entitlement, offset, limit, count, sorters, filters)
        print("The response of RoleInsightsApi->get_entitlement_changes_identities:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_entitlement_changes_identities: %s\n" % e)
```



[[Back to top]](#) 

## get-role-insight
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
Get a single role insight
This endpoint gets role insights information for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insight)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | insight_id | **str** | True  | The role insight id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RoleInsight**](../models/role-insight)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns information about insights for a single role. | RoleInsight |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insight import RoleInsight
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    insight_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role insight id # str | The role insight id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get a single role insight
        
        results = RoleInsightsApi(api_client).get_role_insight(insight_id=insight_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_role_insight(insight_id, x_sail_point_experimental)
        print("The response of RoleInsightsApi->get_role_insight:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_role_insight: %s\n" % e)
```



[[Back to top]](#) 

## get-role-insights
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
Get role insights
This method returns detailed role insights for each role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw*

### Return type
[**List[RoleInsight]**](../models/role-insight)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of roles with information about insights for each role. | List[RoleInsight] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insight import RoleInsight
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = 'numberOfUpdates' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional)
    filters = 'name sw \"John\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional)

    try:
        # Get role insights
        
        results = RoleInsightsApi(api_client).get_role_insights(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_role_insights(x_sail_point_experimental, offset, limit, count, sorters, filters)
        print("The response of RoleInsightsApi->get_role_insights:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_role_insights: %s\n" % e)
```



[[Back to top]](#) 

## get-role-insights-current-entitlements
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
Get current entitlement for a role
This endpoint gets the entitlements for a role. The term "current" is to distinguish from the entitlement(s) an insight might recommend adding.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-current-entitlements)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | insight_id | **str** | True  | The role insight id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*

### Return type
[**List[RoleInsightsEntitlement]**](../models/role-insights-entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of current or pre-existing entitlements for a role. | List[RoleInsightsEntitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insights_entitlement import RoleInsightsEntitlement
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    insight_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role insight id # str | The role insight id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    filters = 'name sw \"r\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

    try:
        # Get current entitlement for a role
        
        results = RoleInsightsApi(api_client).get_role_insights_current_entitlements(insight_id=insight_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_role_insights_current_entitlements(insight_id, x_sail_point_experimental, filters)
        print("The response of RoleInsightsApi->get_role_insights_current_entitlements:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_role_insights_current_entitlements: %s\n" % e)
```



[[Back to top]](#) 

## get-role-insights-entitlements-changes
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
Get entitlement insights for a role
This endpoint returns entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-entitlements-changes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | insight_id | **str** | True  | The role insight id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw*

### Return type
[**List[RoleInsightsEntitlementChanges]**](../models/role-insights-entitlement-changes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns a list of entitlements to be added for a role. | List[RoleInsightsEntitlementChanges] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insights_entitlement_changes import RoleInsightsEntitlementChanges
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    insight_id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role insight id # str | The role insight id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    sorters = 'sorters_example' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional)
    filters = 'name sw \"Admin\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

    try:
        # Get entitlement insights for a role
        
        results = RoleInsightsApi(api_client).get_role_insights_entitlements_changes(insight_id=insight_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_role_insights_entitlements_changes(insight_id, x_sail_point_experimental, sorters, filters)
        print("The response of RoleInsightsApi->get_role_insights_entitlements_changes:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_role_insights_entitlements_changes: %s\n" % e)
```



[[Back to top]](#) 

## get-role-insights-requests
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Returns metadata from prior request.
This endpoint returns details of a prior role insights request. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-requests)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The role insights request id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RoleInsightsResponse**](../models/role-insights-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns details of an earlier role insights request. | RoleInsightsResponse |  -  |
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
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insights_response import RoleInsightsResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = '8c190e67-87aa-4ed9-a90b-d9d5344523fb' # str | The role insights request id # str | The role insights request id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Returns metadata from prior request.
        
        results = RoleInsightsApi(api_client).get_role_insights_requests(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_role_insights_requests(id, x_sail_point_experimental)
        print("The response of RoleInsightsApi->get_role_insights_requests:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_role_insights_requests: %s\n" % e)
```



[[Back to top]](#) 

## get-role-insights-summary
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
Get role insights summary information
This method returns high level summary information for role insights for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**RoleInsightsSummary**](../models/role-insights-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Succeeded. Returns high level counts. | RoleInsightsSummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.role_insights_api import RoleInsightsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.role_insights_summary import RoleInsightsSummary
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get role insights summary information
        
        results = RoleInsightsApi(api_client).get_role_insights_summary(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = RoleInsightsApi(api_client).get_role_insights_summary(x_sail_point_experimental)
        print("The response of RoleInsightsApi->get_role_insights_summary:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling RoleInsightsApi->get_role_insights_summary: %s\n" % e)
```



[[Back to top]](#) 



