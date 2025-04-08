---
id: beta-iai-peer-group-strategies
title: IAI_Peer_Group_Strategies
pagination_label: IAI_Peer_Group_Strategies
sidebar_label: IAI_Peer_Group_Strategies
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Peer_Group_Strategies', 'BetaIAI_Peer_Group_Strategies'] 
slug: /tools/sdk/python/beta/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAI_Peer_Group_Strategies', 'BetaIAI_Peer_Group_Strategies']
---

# sailpoint.beta.IAIPeerGroupStrategiesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-peer-group-outliers**](#get-peer-group-outliers) | **GET** `/peer-group-strategies/{strategy}/identity-outliers` | Identity Outliers List


## get-peer-group-outliers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Identity Outliers List
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-peer-group-outliers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | strategy | **str** | True  | The strategy used to create peer groups. Currently, 'entitlement' is supported.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[PeerGroupMember]**](../models/peer-group-member)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identities that are not included in peer groups. | List[PeerGroupMember] |  -  |
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
from sailpoint.beta.api.iai_peer_group_strategies_api import IAIPeerGroupStrategiesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.peer_group_member import PeerGroupMember
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    strategy = 'entitlement' # str | The strategy used to create peer groups. Currently, 'entitlement' is supported. # str | The strategy used to create peer groups. Currently, 'entitlement' is supported.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Identity Outliers List
        
        results = IAIPeerGroupStrategiesApi(api_client).get_peer_group_outliers(strategy=strategy)
        # Below is a request that includes all optional parameters
        # results = IAIPeerGroupStrategiesApi(api_client).get_peer_group_outliers(strategy, limit, offset, count)
        print("The response of IAIPeerGroupStrategiesApi->get_peer_group_outliers:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIPeerGroupStrategiesApi->get_peer_group_outliers: %s\n" % e)
```



[[Back to top]](#) 



