# Machine_Identity_Metadata

# sailpoint.machine_identity_metadata.MachineIdentityMetadataApi
  Use this API to get reference data about machine identities, such as the machine identity subtypes available in the tenant. Use these values to build filters and forms for machine identities.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-machine-identity-subtypes-v1**](#list-machine-identity-subtypes-v1) | **GET** `/machine-identity-metadata/v1/subtypes` | List machine identity subtypes


## list-machine-identity-subtypes-v1
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
List machine identity subtypes
This API returns the machine identity subtypes available in the tenant.


The list includes **Application** and **Device**. When agentic identity governance is enabled for the tenant, the
list also includes **AI Agent**.


When Machine Identity Security is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-subtypes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**List[str]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine identity subtypes. | List[str] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitySubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitySubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identity_metadata.api.machine_identity_metadata_api import MachineIdentityMetadataApi
from sailpoint.machine_identity_metadata.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine identity subtypes
        
        results = MachineIdentityMetadataApi(api_client).list_machine_identity_subtypes_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentityMetadataApi(api_client).list_machine_identity_subtypes_v1(x_sail_point_experimental)
        print("The response of MachineIdentityMetadataApi->list_machine_identity_subtypes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentityMetadataApi->list_machine_identity_subtypes_v1: %s\n" % e)
```



[[Back to top]](#) 



