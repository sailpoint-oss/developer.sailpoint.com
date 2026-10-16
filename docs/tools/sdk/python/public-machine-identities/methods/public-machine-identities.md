# Public_Machine_Identities

# sailpoint.public_machine_identities.PublicMachineIdentitiesApi
  Use this API to list machine identities with a reduced, public-safe payload for catalog and request workflows.
Responses always include &#x60;id&#x60;, &#x60;name&#x60;, and &#x60;description&#x60;. When your tenant returns enriched public machine identity data, responses also include &#x60;subtype&#x60; and the primary &#x60;owner&#x60; (&#x60;id&#x60;, &#x60;name&#x60;, and &#x60;email&#x60;). When those enriched fields are not enabled for your tenant, &#x60;subtype&#x60; and &#x60;owner&#x60; are omitted or null and requests that filter or sort on &#x60;subtype&#x60; or filter on &#x60;owner.id&#x60;/&#x60;owner&#x60; return &#x60;400 Bad Request&#x60;.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-public-machine-identities-v1**](#list-public-machine-identities-v1) | **GET** `/public-machine-identities/v1` | List public machine identities


## list-public-machine-identities-v1
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
List public machine identities
Get a list of machine identities with a reduced public payload (`id`, `name`, `description`, and optionally `subtype` and the primary `owner`). Any authenticated user with the default scope can call this endpoint; it does not require the `idn:mis-identity:read` scope.

[API Spec](https://developer.sailpoint.com/docs/api/list-public-machine-identities-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[PublicMachineIdentity]**](../models/public-machine-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of public machine identity objects. | List[PublicMachineIdentity] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPublicMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPublicMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.public_machine_identities.api.public_machine_identities_api import PublicMachineIdentitiesApi
from sailpoint.public_machine_identities.api_client import ApiClient
from sailpoint.public_machine_identities.models.public_machine_identity import PublicMachineIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Production API Agent\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering. (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering. (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List public machine identities
        
        results = PublicMachineIdentitiesApi(api_client).list_public_machine_identities_v1()
        # Below is a request that includes all optional parameters
        # results = PublicMachineIdentitiesApi(api_client).list_public_machine_identities_v1(limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of PublicMachineIdentitiesApi->list_public_machine_identities_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PublicMachineIdentitiesApi->list_public_machine_identities_v1: %s\n" % e)
```



[[Back to top]](#) 



