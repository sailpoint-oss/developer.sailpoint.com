# Credentials

# sailpoint.credentials.CredentialsApi
  Use this API to list, view, and update credentials. A credential is a secret, such as an API key or access key, that a machine identity uses to authenticate, discovered from a connected source. You can update a credential&#39;s owners, description, and environment; the values discovered from the source are read-only.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-credential-v1**](#get-credential-v1) | **GET** `/credentials/v1/{id}` | Get credential
[**list-credentials-v1**](#list-credentials-v1) | **GET** `/credentials/v1` | List credentials
[**update-credential-v1**](#update-credential-v1) | **PATCH** `/credentials/v1/{id}` | Partial update of credential


## get-credential-v1
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
Get credential
This API returns a single credential by its ID.


The ID must be a UUID; any other value returns `400`. When no credential exists for the ID, this API returns `404`.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the credentials API is
not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-credential-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Credential ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Credential**](../models/credential)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Credential object. | Credential |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCredentialsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCredentialsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.credentials.api.credentials_api import CredentialsApi
from sailpoint.credentials.api_client import ApiClient
from sailpoint.credentials.models.credential import Credential
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '3f8a2c1d-5b6e-4d7f-8a9b-0c1d2e3f4a5b' # str | Credential ID. # str | Credential ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get credential
        
        results = CredentialsApi(api_client).get_credential_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = CredentialsApi(api_client).get_credential_v1(id, x_sail_point_experimental)
        print("The response of CredentialsApi->get_credential_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CredentialsApi->get_credential_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-credentials-v1
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
List credentials
This API returns a list of credentials.


Source sub-admins only see credentials on the sources they manage.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the credentials API is
not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-credentials-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **type**: *eq, in*  **status**: *eq, in*  **resource.id**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  **expiresAt**: *gt, ge, lt, le*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, resource.id, source.name, owners.primary.id, owners.primary.name, owners.primaryIdentity.id, owners.primaryIdentity.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name**
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Credential]**](../models/credential)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of credentials. | List[Credential] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCredentialsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCredentialsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.credentials.api.credentials_api import CredentialsApi
from sailpoint.credentials.api_client import ApiClient
from sailpoint.credentials.models.credential import Credential
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'type eq \"ACCESS_KEY\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **type**: *eq, in*  **status**: *eq, in*  **resource.id**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  **expiresAt**: *gt, ge, lt, le* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **type**: *eq, in*  **status**: *eq, in*  **resource.id**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  **expiresAt**: *gt, ge, lt, le* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, resource.id, source.name, owners.primary.id, owners.primary.name, owners.primaryIdentity.id, owners.primaryIdentity.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, resource.id, source.name, owners.primary.id, owners.primary.name, owners.primaryIdentity.id, owners.primaryIdentity.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List credentials
        
        results = CredentialsApi(api_client).list_credentials_v1()
        # Below is a request that includes all optional parameters
        # results = CredentialsApi(api_client).list_credentials_v1(filters, sorters, count, limit, offset, x_sail_point_experimental)
        print("The response of CredentialsApi->list_credentials_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CredentialsApi->list_credentials_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-credential-v1
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
Partial update of credential
Use this API to update a credential using a JSON Patch payload.


Patchable fields are **description**, **environment**, and **owners**. A patch that targets any other field,
including the values discovered from the source, returns `400`.


`owners.primary` is a single IDENTITY reference. `owners.secondary` holds either up to ten IDENTITY references or
exactly one GOVERNANCE_GROUP reference, not both; any other combination returns `400`.


The ID must be a UUID; any other value returns `400`. When no credential exists for the ID, this API returns `404`.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the credentials API is
not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-credential-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Credential ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Credential**](../models/credential)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated credential object. | Credential |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListCredentialsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListCredentialsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.credentials.api.credentials_api import CredentialsApi
from sailpoint.credentials.api_client import ApiClient
from sailpoint.credentials.models.credential import Credential
from sailpoint.credentials.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '3f8a2c1d-5b6e-4d7f-8a9b-0c1d2e3f4a5b' # str | Credential ID. # str | Credential ID.
    json_patch_operation = '''[{"op":"replace","path":"/description","value":"Key used by the nightly export job"}]''' # List[JsonPatchOperation] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Partial update of credential
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = CredentialsApi(api_client).update_credential_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = CredentialsApi(api_client).update_credential_v1(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of CredentialsApi->update_credential_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CredentialsApi->update_credential_v1: %s\n" % e)
```



[[Back to top]](#) 



