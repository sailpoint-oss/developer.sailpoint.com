---
id: iai-peer-group-strategies
title: IAI_Peer_Group_Strategies
pagination_label: IAI_Peer_Group_Strategies
sidebar_label: IAI_Peer_Group_Strategies
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Peer_Group_Strategies', 'IAI_Peer_Group_Strategies'] 
slug: /tools/sdk/python/iai-peer-group-strategies/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAI_Peer_Group_Strategies', 'IAI_Peer_Group_Strategies']
---

# sailpoint.iai_peer_group_strategies.IAIPeerGroupStrategiesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-peer-group-outliers-v1**](#get-peer-group-outliers-v1) | **GET** `/peer-group-strategies/v1/{strategy}/identity-outliers` | Identity outliers list


## get-peer-group-outliers-v1
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
Identity outliers list
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-peer-group-outliers-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | strategy | **str** | True  | The strategy used to create peer groups. Currently, 'entitlement' is supported.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Peergroupmember]**](../models/peergroupmember)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identities that are not included in peer groups. | List[Peergroupmember] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPeerGroupOutliersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPeerGroupOutliersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.iai_peer_group_strategies.api.iai_peer_group_strategies_api import IAIPeerGroupStrategiesApi
from sailpoint.iai_peer_group_strategies.api_client import ApiClient
from sailpoint.iai_peer_group_strategies.models.peergroupmember import Peergroupmember
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    strategy = 'entitlement' # str | The strategy used to create peer groups. Currently, 'entitlement' is supported. # str | The strategy used to create peer groups. Currently, 'entitlement' is supported.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Identity outliers list
        
        results = IAIPeerGroupStrategiesApi(api_client).get_peer_group_outliers_v1(strategy=strategy)
        # Below is a request that includes all optional parameters
        # results = IAIPeerGroupStrategiesApi(api_client).get_peer_group_outliers_v1(strategy, limit, offset, count, x_sail_point_experimental)
        print("The response of IAIPeerGroupStrategiesApi->get_peer_group_outliers_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIPeerGroupStrategiesApi->get_peer_group_outliers_v1: %s\n" % e)
```



[[Back to top]](#) 



