# Public_Identities

# sailpoint.public_identities.PublicIdentitiesApi
  Use this API in conjunction with [Public Identites Config](https://developer.sailpoint.com/docs/api/public-identities-config) to enable non-administrators to view identities&#39; publicly visible attributes. 
With this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public. 
This can be helpful for access approvers, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identities-v1**](#get-public-identities-v1) | **GET** `/public-identities/v1` | Get list of public identities
[**get-public-identities-visible-attributes-v2**](#get-public-identities-visible-attributes-v2) | **GET** `/public-identities/v2/visible-attributes` | Get public identity visible attributes
[**search-public-identities-v2**](#search-public-identities-v2) | **POST** `/public-identities/v2/search` | Search public identities


## get-public-identities-v1
Get list of public identities
Get a list of public identities.  Set `add-core-filters` to `true` to exclude incomplete identities and uncorrelated accounts.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.public_identities.api.public_identities_api import PublicIdentitiesApi
from sailpoint.public_identities.api_client import ApiClient
from sailpoint.public_identities.models.public_identity import PublicIdentity
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
        
        results = PublicIdentitiesApi(api_client).get_public_identities_v1()
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesApi(api_client).get_public_identities_v1(limit, offset, count, filters, add_core_filters, sorters)
        print("The response of PublicIdentitiesApi->get_public_identities_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesApi->get_public_identities_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-public-identities-visible-attributes-v2
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
Get public identity visible attributes
Returns the default and configured identity attribute keys (with display names) that are allowed for public-identity search and projection. Call this before POST /public-identities/v2/search to learn which field keys are valid in query fields and sort.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-visible-attributes-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**PublicIdentityVisibleAttributes**](../models/public-identity-visible-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | PublicIdentityVisibleAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.public_identities.api.public_identities_api import PublicIdentitiesApi
from sailpoint.public_identities.api_client import ApiClient
from sailpoint.public_identities.models.public_identity_visible_attributes import PublicIdentityVisibleAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get public identity visible attributes
        
        results = PublicIdentitiesApi(api_client).get_public_identities_visible_attributes_v2()
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesApi(api_client).get_public_identities_visible_attributes_v2(x_sail_point_experimental)
        print("The response of PublicIdentitiesApi->get_public_identities_visible_attributes_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesApi->get_public_identities_visible_attributes_v2: %s\n" % e)
```



[[Back to top]](#) 

## search-public-identities-v2
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
Search public identities
Search public identities using a composite query and return matching records.

The root query set combines criteria with AND and must include attributes.identityState.exact = ACTIVE. The field keys must come from GET /public-identities/v2/visible-attributes and may use the prefix "attributes." and/or the suffix ".exact". See the request examples for the required exact payload structure.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/search-public-identities-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | public_identities_search_request | [**PublicIdentitiesSearchRequest**](../models/public-identities-search-request) | True  | 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[PublicIdentityV2]**](../models/public-identity-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. Body is an array of PublicIdentityV2. When count&#x3D;true, X-Total-Count may be set with the total matching count (ignoring limit/offset). | List[PublicIdentityV2] |  * X-Total-Count - Total number of matching results when count=true.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPublicIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPublicIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.public_identities.api.public_identities_api import PublicIdentitiesApi
from sailpoint.public_identities.api_client import ApiClient
from sailpoint.public_identities.models.public_identities_search_request import PublicIdentitiesSearchRequest
from sailpoint.public_identities.models.public_identity_v2 import PublicIdentityV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    public_identities_search_request = '''{
          "indices" : [ "identities" ],
          "sort" : [ "name" ],
          "querySet" : {
            "entries" : [ {
              "queryType" : "TEXT",
              "textQuery" : {
                "fields" : [ "attributes.identityState.exact" ],
                "terms" : [ "ACTIVE" ],
                "matchAny" : false,
                "contains" : false,
                "strict" : true
              }
            } ],
            "matchAny" : false
          },
          "queryType" : "COMPOSITE",
          "includeNested" : false
        }''' # PublicIdentitiesSearchRequest | 
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Search public identities
        new_public_identities_search_request = PublicIdentitiesSearchRequest.from_json(public_identities_search_request)
        results = PublicIdentitiesApi(api_client).search_public_identities_v2(public_identities_search_request=new_public_identities_search_request)
        # Below is a request that includes all optional parameters
        # results = PublicIdentitiesApi(api_client).search_public_identities_v2(new_public_identities_search_request, limit, offset, count, x_sail_point_experimental)
        print("The response of PublicIdentitiesApi->search_public_identities_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicIdentitiesApi->search_public_identities_v2: %s\n" % e)
```



[[Back to top]](#) 



