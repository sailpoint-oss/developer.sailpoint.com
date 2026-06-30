---
id: requestable-objects
title: Requestable_Objects
pagination_label: Requestable_Objects
sidebar_label: Requestable_Objects
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestable_Objects', 'Requestable_Objects'] 
slug: /tools/sdk/python/requestable-objects/methods/requestable-objects
tags: ['SDK', 'Software Development Kit', 'Requestable_Objects', 'Requestable_Objects']
---

# sailpoint.requestable_objects.RequestableObjectsApi
  Use this API to implement requestable object functionality. 
With this functionality in place, administrators can determine which access items can be requested with the [Access Request APIs](https://developer.sailpoint.com/docs/api/v2025/access-requests/), along with their statuses. 
This can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-requestable-objects-v1**](#list-requestable-objects-v1) | **GET** `/requestable-objects/v1` | Requestable objects list


## list-requestable-objects-v1
Requestable objects list
Get a list of acccess items that can be requested through the [Access Request endpoints](https://developer.sailpoint.com/docs/api/v2024/access-requests). Access items are marked with `AVAILABLE`, `PENDING` or `ASSIGNED` with respect to the identity provided using `identity-id` query parameter.
This endpoint only lists roles and access profiles. For gathering requestable entitlements, the [Entitlements List API](https://developer.sailpoint.com/docs/api/v2025/list-entitlements) can be used with the segmented-for-identity parameter.
Any authenticated token can call this endpoint to see their requestable access items.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-requestable-objects-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | identity_id | **str** |   (optional) | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result.
  Query | types | **[]str** |   (optional) | Filters the results to the specified type/types, where each type is one of `ROLE` or `ACCESS_PROFILE`. If absent, all types are returned. SailPoint may add support for additional types in the future without notice.
  Query | term | **str** |   (optional) | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter.
  Query | statuses | [**[]Requestableobjectrequeststatus**](../models/requestableobjectrequeststatus) |   (optional) | Filters the result to the specified status/statuses, where each status is one of `AVAILABLE`, `ASSIGNED`, or `PENDING`. Specifying this parameter without also specifying an `identity-id` parameter results in an error.  SailPoint may add additional statuses in the future without notice.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** 

### Return type
[**List[Requestableobject]**](../models/requestableobject)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requestable objects | List[Requestableobject] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListRequestableObjectsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListRequestableObjectsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.requestable_objects.api.requestable_objects_api import RequestableObjectsApi
from sailpoint.requestable_objects.api_client import ApiClient
from sailpoint.requestable_objects.models.requestableobject import Requestableobject
from sailpoint.requestable_objects.models.requestableobjectrequeststatus import Requestableobjectrequeststatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'e7eab60924f64aa284175b9fa3309599' # str | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. (optional) # str | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. (optional)
    types = '''['ACCESS_PROFILE,ROLE']''' # List[str] | Filters the results to the specified type/types, where each type is one of `ROLE` or `ACCESS_PROFILE`. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. (optional)
    term = 'Finance Role' # str | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter. (optional) # str | Allows searching requestable access items with a partial match on the name or description. If `term` is provided, then the API will ignore the `filter` query parameter. (optional)
    statuses = '''[sailpoint.requestable_objects.Requestableobjectrequeststatus()]''' # List[Requestableobjectrequeststatus] | Filters the result to the specified status/statuses, where each status is one of `AVAILABLE`, `ASSIGNED`, or `PENDING`. Specifying this parameter without also specifying an `identity-id` parameter results in an error.  SailPoint may add additional statuses in the future without notice. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name sw \"bob\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  (optional)

    try:
        # Requestable objects list
        
        results = RequestableObjectsApi(api_client).list_requestable_objects_v1()
        # Below is a request that includes all optional parameters
        # results = RequestableObjectsApi(api_client).list_requestable_objects_v1(identity_id, types, term, statuses, limit, offset, count, filters, sorters)
        print("The response of RequestableObjectsApi->list_requestable_objects_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling RequestableObjectsApi->list_requestable_objects_v1: %s\n" % e)
```



[[Back to top]](#) 



