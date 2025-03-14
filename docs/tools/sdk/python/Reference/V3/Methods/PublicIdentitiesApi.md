---
id: public-identities
title: Public_Identities
pagination_label: Public_Identities
sidebar_label: Public_Identities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Public_Identities', 'Public_Identities'] 
slug: /tools/sdk/python/v3/methods/public-identities
tags: ['SDK', 'Software Development Kit', 'Public_Identities', 'Public_Identities']
---

# sailpoint.v3.PublicIdentitiesApi
  Use this API in conjunction with [Public Identites Config](https://developer.sailpoint.com/docs/api/v3/public-identities-config/) to enable non-administrators to view identities&#39; publicly visible attributes. 
With this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public. 
This can be helpful for access approvers, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identities**](#get-public-identities) | **GET** `/public-identities` | Get list of public identities


## get-public-identities
Get list of public identities
Get a list of public identities.  Set `add-core-filters` to `true` to exclude incomplete identities and uncorrelated accounts.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-public-identities)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*
  Query | add_core_filters | **bool** |   (optional) (default to False) | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \"spadmin\" or \"cloudadmin\".   - uid should not be null.   - lastname should not be null.   - email should not be null.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**

### Return type
[**List[PublicIdentity]**](../models/public-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of public identity objects. | List[PublicIdentity] |  -  |
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
from sailpoint.v3.api.public_identities_api import PublicIdentitiesApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.public_identity import PublicIdentity
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'firstname eq \"John\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* (optional)
    add_core_filters = False # bool | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \"spadmin\" or \"cloudadmin\".   - uid should not be null.   - lastname should not be null.   - email should not be null. (optional) (default to False) # bool | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \"spadmin\" or \"cloudadmin\".   - uid should not be null.   - lastname should not be null.   - email should not be null. (optional) (default to False)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)

    try:
        # Get list of public identities
        
        results = PublicIdentitiesApi(api_client).get_public_identities()
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesApi(api_client).get_public_identities(limit, offset, count, filters, add_core_filters, sorters)
        print("The response of PublicIdentitiesApi->get_public_identities:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling PublicIdentitiesApi->get_public_identities: %s\n" % e)
```



[[Back to top]](#) 



