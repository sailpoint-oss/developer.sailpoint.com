# Business_Applications

# sailpoint.business_applications.BusinessApplicationsApi
  A Business Application groups machine identities (for example AI agents or applications) under a common owner and sanctioned status. Business Applications can be defined out-of-the-box, discovered from a source, or created by an administrator. Signatures on a Business Application drive automatic correlation of machine identities to it; sanctioned status is independent metadata that machine identities inherit once linked. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-business-application-v1**](#create-business-application-v1) | **POST** `/business-applications/v1` | Create Business Application
[**get-business-application-v1**](#get-business-application-v1) | **GET** `/business-applications/v1/{id}` | Get Business Application
[**list-business-applications-v1**](#list-business-applications-v1) | **GET** `/business-applications/v1` | List Business Applications
[**update-business-application-v1**](#update-business-application-v1) | **PATCH** `/business-applications/v1/{id}` | Update Business Application


## create-business-application-v1
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
Create Business Application
Creates a custom Business Application. Requires the `idn:business-application:create` right, the Machine Identity Security product to be enabled, and the custom Business Application feature to be enabled for the tenant. The `name` must be unique within the tenant, and any provided `signatures` must not already be assigned to another Business Application.

[API Spec](https://developer.sailpoint.com/docs/api/create-business-application-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | business_application | [**BusinessApplication**](../models/business-application) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**BusinessApplication**](../models/business-application)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created Business Application. | BusinessApplication |  -  |
400 | Client Error - Returned if the request body is invalid, for example a missing or blank &#x60;name&#x60;, an unrecognized signature &#x60;type&#x60;, or a duplicate &#x60;(type, name)&#x60; signature pair within the request. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
409 | Conflict - Returned if the &#x60;name&#x60; is already in use by another Business Application in the tenant, or if a requested signature is already assigned to another Business Application. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.business_applications.api.business_applications_api import BusinessApplicationsApi
from sailpoint.business_applications.api_client import ApiClient
from sailpoint.business_applications.models.business_application import BusinessApplication
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    business_application = '''{
          "owner" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "vendor" : "Cursor",
          "created" : "2026-01-15T13:45:12.312Z",
          "origin" : "",
          "name" : "Cursor",
          "description" : "AI coding assistant used by the platform engineering team.",
          "modified" : "2026-02-20T09:31:47.882Z",
          "id" : "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          "source" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "signatures" : [ {
            "name" : "cursor",
            "type" : "AI Agent"
          }, {
            "name" : "cursor",
            "type" : "AI Agent"
          } ],
          "additionalOwners" : [ {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "sanctionedStatus" : ""
        }''' # BusinessApplication | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create Business Application
        new_business_application = BusinessApplication.from_json(business_application)
        results = BusinessApplicationsApi(api_client).create_business_application_v1(business_application=new_business_application)
        # Below is a request that includes all optional parameters
        # results = BusinessApplicationsApi(api_client).create_business_application_v1(new_business_application, x_sail_point_experimental)
        print("The response of BusinessApplicationsApi->create_business_application_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BusinessApplicationsApi->create_business_application_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-business-application-v1
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
Get Business Application
Returns a single Business Application by ID for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled.

[API Spec](https://developer.sailpoint.com/docs/api/get-business-application-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Business Application ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**BusinessApplication**](../models/business-application)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Business Application object. | BusinessApplication |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - Returned if no Business Application exists for the given ID. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.business_applications.api.business_applications_api import BusinessApplicationsApi
from sailpoint.business_applications.api_client import ApiClient
from sailpoint.business_applications.models.business_application import BusinessApplication
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' # str | Business Application ID. # str | Business Application ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get Business Application
        
        results = BusinessApplicationsApi(api_client).get_business_application_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = BusinessApplicationsApi(api_client).get_business_application_v1(id, x_sail_point_experimental)
        print("The response of BusinessApplicationsApi->get_business_application_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BusinessApplicationsApi->get_business_application_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-business-applications-v1
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
List Business Applications
Returns the list of Business Applications defined for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-business-applications-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus**
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[BusinessApplication]**](../models/business-application)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of Business Application objects. | List[BusinessApplication] |  * X-Total-Count - Included when `count=true`.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.business_applications.api.business_applications_api import BusinessApplicationsApi
from sailpoint.business_applications.api_client import ApiClient
from sailpoint.business_applications.models.business_application import BusinessApplication
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'sanctionedStatus eq \"SANCTIONED\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus** (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List Business Applications
        
        results = BusinessApplicationsApi(api_client).list_business_applications_v1()
        # Below is a request that includes all optional parameters
        # results = BusinessApplicationsApi(api_client).list_business_applications_v1(filters, sorters, count, limit, offset, x_sail_point_experimental)
        print("The response of BusinessApplicationsApi->list_business_applications_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BusinessApplicationsApi->list_business_applications_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-business-application-v1
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
Update Business Application
Updates a Business Application using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Requires the `idn:business-application:update` right and the Machine Identity Security product to be enabled. Patchable fields: `name`, `description`, `owner`, `additionalOwners`, `sanctionedStatus`, and `signatures`. Modifying `signatures` additionally requires the custom Business Application feature to be enabled.

[API Spec](https://developer.sailpoint.com/docs/api/update-business-application-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Business Application ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON array of patch operations per RFC 6902.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**BusinessApplication**](../models/business-application)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated Business Application. | BusinessApplication |  -  |
400 | Client Error - Returned if the patch is malformed, targets a non-patchable field, clears the required &#x60;name&#x60;, or specifies an invalid signature. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - Returned if no Business Application exists for the given ID. | ErrorResponseDto |  -  |
409 | Conflict - Returned if the new &#x60;name&#x60; is already in use by another Business Application in the tenant, or if a requested signature is already assigned to another Business Application. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json, application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.business_applications.api.business_applications_api import BusinessApplicationsApi
from sailpoint.business_applications.api_client import ApiClient
from sailpoint.business_applications.models.business_application import BusinessApplication
from sailpoint.business_applications.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' # str | Business Application ID. # str | Business Application ID.
    json_patch_operation = '''[{"op":"replace","path":"/sanctionedStatus","value":"SANCTIONED"}]''' # List[JsonPatchOperation] | A JSON array of patch operations per RFC 6902.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update Business Application
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = BusinessApplicationsApi(api_client).update_business_application_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = BusinessApplicationsApi(api_client).update_business_application_v1(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of BusinessApplicationsApi->update_business_application_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BusinessApplicationsApi->update_business_application_v1: %s\n" % e)
```



[[Back to top]](#) 



