# Machine_Mapping_Metadata

# sailpoint.machine_mapping_metadata.MachineMappingMetadataApi
  Use this API to get the identity and account attributes you can use as targets when you map source attributes for machine account classification. The lists tell you which attribute names a mapping can write to before you configure it.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-machine-mapping-target-account-attributes-v1**](#get-machine-mapping-target-account-attributes-v1) | **GET** `/machine-mapping-metadata/v1/target-account-attributes` | List target account attributes
[**get-machine-mapping-target-identity-attributes-v1**](#get-machine-mapping-target-identity-attributes-v1) | **GET** `/machine-mapping-metadata/v1/target-identity-attributes` | List target identity attributes


## get-machine-mapping-target-account-attributes-v1
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
List target account attributes
This API returns the account attribute names that a machine mapping can target.


The list always includes **name** and **nativeIdentity**. When expanded mapping targets are enabled for the tenant,
the list also includes **description**, **environment**, **subtype**, and **businessApplication**.


The caller needs the **idn:account:read** right.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-account-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TargetAttributes**](../models/target-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Target account attributes. | TargetAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineMappingTargetIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineMappingTargetIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_mapping_metadata.api.machine_mapping_metadata_api import MachineMappingMetadataApi
from sailpoint.machine_mapping_metadata.api_client import ApiClient
from sailpoint.machine_mapping_metadata.models.target_attributes import TargetAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List target account attributes
        
        results = MachineMappingMetadataApi(api_client).get_machine_mapping_target_account_attributes_v1()
        # Below is a request that includes all optional parameters
        # results = MachineMappingMetadataApi(api_client).get_machine_mapping_target_account_attributes_v1(x_sail_point_experimental)
        print("The response of MachineMappingMetadataApi->get_machine_mapping_target_account_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineMappingMetadataApi->get_machine_mapping_target_account_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-mapping-target-identity-attributes-v1
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
List target identity attributes
This API returns the identity attribute names that a machine mapping can target.


The list always includes **name**, **alias**, **email**, and **uid**. When expanded mapping targets are enabled
for the tenant, the list also includes the tenant's searchable identity attributes.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-identity-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TargetAttributes**](../models/target-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Target identity attributes. | TargetAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineMappingTargetIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineMappingTargetIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_mapping_metadata.api.machine_mapping_metadata_api import MachineMappingMetadataApi
from sailpoint.machine_mapping_metadata.api_client import ApiClient
from sailpoint.machine_mapping_metadata.models.target_attributes import TargetAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List target identity attributes
        
        results = MachineMappingMetadataApi(api_client).get_machine_mapping_target_identity_attributes_v1()
        # Below is a request that includes all optional parameters
        # results = MachineMappingMetadataApi(api_client).get_machine_mapping_target_identity_attributes_v1(x_sail_point_experimental)
        print("The response of MachineMappingMetadataApi->get_machine_mapping_target_identity_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineMappingMetadataApi->get_machine_mapping_target_identity_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 



