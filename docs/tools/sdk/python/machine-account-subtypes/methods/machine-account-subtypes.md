# Machine_Account_Subtypes

# sailpoint.machine_account_subtypes.MachineAccountSubtypesApi
  Use this API to get, update, and delete machine account subtype for sources.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype-override-v2**](#create-source-subtype-override-v2) | **POST** `/source-subtypes/v2/{id}/overrides` | Override source connector subtype
[**create-source-subtype-provisioning-policy-v2**](#create-source-subtype-provisioning-policy-v2) | **POST** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**create-source-subtype-v1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**create-source-subtype-v2**](#create-source-subtype-v2) | **POST** `/source-subtypes/v2` | Create subtype
[**delete-machine-account-subtype-v1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**delete-machine-account-subtype-v2**](#delete-machine-account-subtype-v2) | **DELETE** `/source-subtypes/v2/{id}` | Delete subtype by ID
[**delete-source-subtype-provisioning-policy-v2**](#delete-source-subtype-provisioning-policy-v2) | **DELETE** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**get-machine-account-subtype-approval-config-v1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id-v1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**get-source-subtype-by-id-v2**](#get-source-subtype-by-id-v2) | **GET** `/source-subtypes/v2/{id}` | Get subtype by ID
[**get-source-subtype-provisioning-policy-v2**](#get-source-subtype-provisioning-policy-v2) | **GET** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**list-source-subtype-targets-v2**](#list-source-subtype-targets-v2) | **GET** `/source-subtypes/v2/targets` | List subtype targets
[**list-source-subtypes-v1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**list-source-subtypes-v2**](#list-source-subtypes-v2) | **GET** `/source-subtypes/v2` | List subtypes
[**load-bulk-source-subtypes-v1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype-v1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**patch-machine-account-subtype-v2**](#patch-machine-account-subtype-v2) | **PATCH** `/source-subtypes/v2/{id}` | Patch subtype by ID
[**patch-source-subtype-provisioning-policy-v2**](#patch-source-subtype-provisioning-policy-v2) | **PATCH** `/source-subtypes/v2/{id}/provisioning-policy` | Patch subtype provisioning policy
[**update-machine-account-subtype-approval-config-v1**](#update-machine-account-subtype-approval-config-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-override-v2
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
Override source connector subtype
Create a source subtype that overrides a connector subtype on one source. The new source subtype copies the
connector subtype's machine account configuration and provisioning policy at the time of the request. Later
changes to the connector subtype are not applied to the override.

The subtype identified by `id` must be a `CONNECTOR` subtype (otherwise `400`) that is in the source's effective
subtypes. An unknown subtype or source returns `404`. The request is rejected if the tenant's subtype
configuration cannot be changed this way.

The caller needs the `idn:source-subtypes:create` right, held by org admins, source admins and source sub-admins.
A caller without it receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-override-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the connector subtype to override.
 Body  | source_subtype_override_request | [**SourceSubtypeOverrideRequest**](../models/source-subtype-override-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created source subtype that overrides the connector subtype. | SourceSubtypeV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_override_request import SourceSubtypeOverrideRequest
from sailpoint.machine_account_subtypes.models.source_subtype_v2 import SourceSubtypeV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the connector subtype to override. # str | The ID of the connector subtype to override.
    source_subtype_override_request = '''{
          "sourceId" : "6d0458373bec4b4b80460992b76016da"
        }''' # SourceSubtypeOverrideRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Override source connector subtype
        new_source_subtype_override_request = SourceSubtypeOverrideRequest.from_json(source_subtype_override_request)
        results = MachineAccountSubtypesApi(api_client).create_source_subtype_override_v2(id=id, source_subtype_override_request=new_source_subtype_override_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).create_source_subtype_override_v2(id, new_source_subtype_override_request, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->create_source_subtype_override_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->create_source_subtype_override_v2: %s\n" % e)
```



[[Back to top]](#) 

## create-source-subtype-provisioning-policy-v2
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
Create subtype provisioning policy
Create the machine account creation provisioning policy of a subtype of any tier. A subtype has at most one
provisioning policy; the request is rejected if one already exists.

`id` and `subtypeId` must not be supplied (otherwise `400`). `usageType` must be `CREATE_MACHINE_ACCOUNT` or
omitted. `name` defaults to the subtype's display name.

Who can call this API depends on the tier of the subtype:

* `SOURCE`: requires the `idn:source-subtypes:update` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:update` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
 Body  | subtype_provisioning_policy | [**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy) | True  | 
  Query | use_default_fields | **bool** |   (optional) (default to True) | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created subtype provisioning policy. | SubtypeProvisioningPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.subtype_provisioning_policy import SubtypeProvisioningPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    subtype_provisioning_policy = '''{
          "name" : "Service Account",
          "description" : "Fields collected when creating a service account.",
          "id" : "d7ae9ea3-507f-4d00-9d4f-b4464b344b88",
          "subtypeId" : "43bdd144-4b17-4fce-a744-17c7fd3e717b",
          "fields" : [ {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "{firstname}.{lastname}{uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          }, {
            "isRequired" : false,
            "transform" : {
              "type" : "rule",
              "attributes" : {
                "name" : "Create Unique LDAP Attribute"
              }
            },
            "isMultiValued" : false,
            "name" : "userName",
            "attributes" : {
              "template" : "{firstname}.{lastname}{uniqueCounter}",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE_MACHINE_ACCOUNT"
        }''' # SubtypeProvisioningPolicy | 
    use_default_fields = True # bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes. (optional) (default to True) # bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes. (optional) (default to True)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create subtype provisioning policy
        new_subtype_provisioning_policy = SubtypeProvisioningPolicy.from_json(subtype_provisioning_policy)
        results = MachineAccountSubtypesApi(api_client).create_source_subtype_provisioning_policy_v2(id=id, subtype_provisioning_policy=new_subtype_provisioning_policy)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).create_source_subtype_provisioning_policy_v2(id, new_subtype_provisioning_policy, use_default_fields, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->create_source_subtype_provisioning_policy_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->create_source_subtype_provisioning_policy_v2: %s\n" % e)
```



[[Back to top]](#) 

## create-source-subtype-v1
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
Create subtype
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_source_subtype_v1_request | [**CreateSourceSubtypeV1Request**](../models/create-source-subtype-v1-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created machine account subtype. | SourceSubtypeWithSource |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.create_source_subtype_v1_request import CreateSourceSubtypeV1Request
from sailpoint.machine_account_subtypes.models.source_subtype_with_source import SourceSubtypeWithSource
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    create_source_subtype_v1_request = '''{"sourceId":"6d0458373bec4b4b80460992b76016da","technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}''' # CreateSourceSubtypeV1Request | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create subtype
        new_create_source_subtype_v1_request = CreateSourceSubtypeV1Request.from_json(create_source_subtype_v1_request)
        results = MachineAccountSubtypesApi(api_client).create_source_subtype_v1(create_source_subtype_v1_request=new_create_source_subtype_v1_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).create_source_subtype_v1(new_create_source_subtype_v1_request, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->create_source_subtype_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->create_source_subtype_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-source-subtype-v2
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
Create subtype
Create a machine account subtype at the source tier or the connector tier.

A `SOURCE` subtype applies to the one source identified by `targetId`. A `CONNECTOR` subtype applies to every
source of the connector type identified by `targetId`, which must be a registered connector type. `targetType`
defaults to `SOURCE`. `CONNECTOR_VARIANT` is not supported and returns `400`. `technicalName`, `displayName` and
`description` are required, and the technical name and display name must be unique within the tier's scope.

Who can call this API depends on the requested tier:

* `SOURCE` (or omitted): requires the `idn:source-subtypes:create` right, held by org admins, source admins and
source sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:create` right, held by org admins.

A caller without the right for the requested tier receives `404`, not `403`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_source_subtype_v2_request | [**CreateSourceSubtypeV2Request**](../models/create-source-subtype-v2-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created machine account subtype. | SourceSubtypeV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.create_source_subtype_v2_request import CreateSourceSubtypeV2Request
from sailpoint.machine_account_subtypes.models.source_subtype_v2 import SourceSubtypeV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    create_source_subtype_v2_request = '''{
          "targetName" : "Active Directory",
          "targetId" : "active-directory",
          "displayName" : "Service Account",
          "description" : "Accounts used by automated services.",
          "targetType" : "CONNECTOR",
          "type" : "MACHINE",
          "classification" : "MACHINE",
          "technicalName" : "service-account"
        }''' # CreateSourceSubtypeV2Request | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create subtype
        new_create_source_subtype_v2_request = CreateSourceSubtypeV2Request.from_json(create_source_subtype_v2_request)
        results = MachineAccountSubtypesApi(api_client).create_source_subtype_v2(create_source_subtype_v2_request=new_create_source_subtype_v2_request)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).create_source_subtype_v2(new_create_source_subtype_v2_request, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->create_source_subtype_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->create_source_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-subtype-v1
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
Delete subtype by ID
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Subtype deleted successfully. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa' # str | The ID of the subtype. # str | The ID of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete subtype by ID
        
        MachineAccountSubtypesApi(api_client).delete_machine_account_subtype_v1(subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # MachineAccountSubtypesApi(api_client).delete_machine_account_subtype_v1(subtype_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->delete_machine_account_subtype_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-subtype-v2
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
Delete subtype by ID
Delete a machine account subtype of any tier by subtype ID. System-managed subtypes, and subtypes still assigned
to accounts, cannot be deleted and the request is rejected.

Who can call this API depends on the tier of the stored subtype:

* `SOURCE`: requires the `idn:source-subtypes:delete` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:delete` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Subtype deleted successfully. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete subtype by ID
        
        MachineAccountSubtypesApi(api_client).delete_machine_account_subtype_v2(id=id)
        # Below is a request that includes all optional parameters
        # MachineAccountSubtypesApi(api_client).delete_machine_account_subtype_v2(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->delete_machine_account_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-source-subtype-provisioning-policy-v2
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
Delete subtype provisioning policy
Delete the machine account creation provisioning policy of a subtype of any tier. Returns `404` when the subtype
has no provisioning policy.

Who can call this API depends on the tier of the subtype:

* `SOURCE`: requires the `idn:source-subtypes:delete` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:delete` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Provisioning policy deleted successfully. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete subtype provisioning policy
        
        MachineAccountSubtypesApi(api_client).delete_source_subtype_provisioning_policy_v2(id=id)
        # Below is a request that includes all optional parameters
        # MachineAccountSubtypesApi(api_client).delete_source_subtype_provisioning_policy_v2(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->delete_source_subtype_provisioning_policy_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-subtype-approval-config-v1
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
Machine Subtype Approval Config
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-approval-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | subtype_id | **str** | True  | machine subtype id.

### Return type
[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a MachineAccountSubtypeConfigDto for machine account creation and deletion approval config by subtypeId. | MachineAccountSubtypeConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.machine_account_subtype_config_dto import MachineAccountSubtypeConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    subtype_id = 'ef38f94347e94562b5bb8424a56498d8' # str | machine subtype id. # str | machine subtype id.

    try:
        # Machine Subtype Approval Config
        
        results = MachineAccountSubtypesApi(api_client).get_machine_account_subtype_approval_config_v1(x_sail_point_experimental=x_sail_point_experimental, subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).get_machine_account_subtype_approval_config_v1(x_sail_point_experimental, subtype_id)
        print("The response of MachineAccountSubtypesApi->get_machine_account_subtype_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->get_machine_account_subtype_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-subtype-by-id-v1
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
Get subtype by ID
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account subtype object. | SourceSubtypeWithSource |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_with_source import SourceSubtypeWithSource
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa' # str | The ID of the subtype. # str | The ID of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get subtype by ID
        
        results = MachineAccountSubtypesApi(api_client).get_source_subtype_by_id_v1(subtype_id=subtype_id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).get_source_subtype_by_id_v1(subtype_id, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->get_source_subtype_by_id_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->get_source_subtype_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-source-subtype-by-id-v2
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
Get subtype by ID
Get a machine account subtype of any tier by subtype ID. The response may include `target.supportsProvisioning`.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account subtype. | SourceSubtypeV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_v2 import SourceSubtypeV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get subtype by ID
        
        results = MachineAccountSubtypesApi(api_client).get_source_subtype_by_id_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).get_source_subtype_by_id_v2(id, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->get_source_subtype_by_id_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->get_source_subtype_by_id_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-source-subtype-provisioning-policy-v2
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
Get subtype provisioning policy
Get the machine account creation provisioning policy of a subtype of any tier. Returns `404` when the subtype has
no provisioning policy.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
  Query | source_id | **str** |   (optional) | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Subtype provisioning policy. | SubtypeProvisioningPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.subtype_provisioning_policy import SubtypeProvisioningPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) # str | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get subtype provisioning policy
        
        results = MachineAccountSubtypesApi(api_client).get_source_subtype_provisioning_policy_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).get_source_subtype_provisioning_policy_v2(id, source_id, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->get_source_subtype_provisioning_policy_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->get_source_subtype_provisioning_policy_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-source-subtype-targets-v2
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
List subtype targets
List the targets that have machine account subtypes, with subtype and source counts for each.

A `targetType` filter is required. `targetType eq "CONNECTOR"` returns one item per connector type.
`targetType eq "SOURCE"` returns one item per source subtype. A missing or unsupported `targetType` filter returns
`400`.

The caller needs the `idn:source-subtypes:read` right.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[SubtypeTargetSummary]**](../models/subtype-target-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of subtype targets. The &#x60;X-Total-Count&#x60; header is returned when &#x60;count&#x3D;true&#x60;. | List[SubtypeTargetSummary] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.subtype_target_summary import SubtypeTargetSummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'targetType eq \"CONNECTOR\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required. # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required.
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    sorters = '-subtypeCount' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List subtype targets
        
        results = MachineAccountSubtypesApi(api_client).list_source_subtype_targets_v2(filters=filters)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).list_source_subtype_targets_v2(filters, limit, offset, count, sorters, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->list_source_subtype_targets_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->list_source_subtype_targets_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-source-subtypes-v1
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
Retrieve all subtypes
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[SourceSubtypeWithSource]**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine account subtypes. | List[SourceSubtypeWithSource] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_with_source import SourceSubtypeWithSource
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'displayName eq \"sail\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
    sorters = 'displayName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Retrieve all subtypes
        
        results = MachineAccountSubtypesApi(api_client).list_source_subtypes_v1()
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).list_source_subtypes_v1(filters, sorters, x_sail_point_experimental, count, limit, offset)
        print("The response of MachineAccountSubtypesApi->list_source_subtypes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->list_source_subtypes_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-source-subtypes-v2
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
List subtypes
List machine account subtypes defined at the source tier and the connector tier.

Without `sourceId`, the API lists every subtype in the tenant, and `filters` and `sorters` apply.

With `sourceId`, the API returns the source's effective subtypes: the subtypes defined for the source plus the
subtypes defined for the source's connector type. When a source subtype has the same technical name as a connector
subtype, only the source subtype is returned and its `origin` is `CONNECTOR`. `filters` cannot be used in this mode.
Use `targetType` to return only one tier of the effective set. An unknown `sourceId` returns `404`.

With `sourceId` and `effectiveSet=false`, the API returns only the subtypes defined for that source, and `filters`
apply.

The caller needs the `idn:source-subtypes:read` right.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | source_id | **str** |   (optional) | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant.
  Query | effective_set | **bool** |   (optional) (default to True) | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`.
  Query | target_type | **str** |   (optional) | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`.
  Query | include_configs | **bool** |   (optional) (default to False) | When `true`, each item includes a summary of its machine account creation configuration in `config`.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[SourceSubtypeV2WithConfig]**](../models/source-subtype-v2-with-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine account subtypes. Items include &#x60;config&#x60; when &#x60;includeConfigs&#x3D;true&#x60;. The &#x60;X-Total-Count&#x60; header is returned when &#x60;count&#x3D;true&#x60;. | List[SourceSubtypeV2WithConfig] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_v2_with_config import SourceSubtypeV2WithConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. (optional) # str | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. (optional)
    effective_set = True # bool | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`. (optional) (default to True) # bool | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`. (optional) (default to True)
    target_type = 'CONNECTOR' # str | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`. (optional) # str | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`. (optional)
    include_configs = False # bool | When `true`, each item includes a summary of its machine account creation configuration in `config`. (optional) (default to False) # bool | When `true`, each item includes a summary of its machine account creation configuration in `config`. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'targetType eq \"CONNECTOR\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`. (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`. (optional)
    sorters = 'displayName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List subtypes
        
        results = MachineAccountSubtypesApi(api_client).list_source_subtypes_v2()
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).list_source_subtypes_v2(source_id, effective_set, target_type, include_configs, limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->list_source_subtypes_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->list_source_subtypes_v2: %s\n" % e)
```



[[Back to top]](#) 

## load-bulk-source-subtypes-v1
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
Bulk Retrieve of Source Subtypes
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/load-bulk-source-subtypes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | request_body | **[]str** | True  | 

### Return type
[**List[SourceSubtypeWithSource]**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of source subtypes. | List[SourceSubtypeWithSource] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_with_source import SourceSubtypeWithSource
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    request_body = '''['request_body_example']''' # List[str] | 

    try:
        # Bulk Retrieve of Source Subtypes
        new_request_body = RequestBody.from_json(request_body)
        results = MachineAccountSubtypesApi(api_client).load_bulk_source_subtypes_v1(x_sail_point_experimental=x_sail_point_experimental, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).load_bulk_source_subtypes_v1(x_sail_point_experimental, new_request_body)
        print("The response of MachineAccountSubtypesApi->load_bulk_source_subtypes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->load_bulk_source_subtypes_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-machine-account-subtype-v1
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
Patch subtype by ID
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the subtype.
 Body  | request_body | **[]object** | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated machine account subtype. | SourceSubtypeWithSource |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.source_subtype_with_source import SourceSubtypeWithSource
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa' # str | The ID of the subtype. # str | The ID of the subtype.
    request_body = '''[{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]''' # List[object] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch subtype by ID
        new_request_body = RequestBody.from_json(request_body)
        results = MachineAccountSubtypesApi(api_client).patch_machine_account_subtype_v1(subtype_id=subtype_id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).patch_machine_account_subtype_v1(subtype_id, new_request_body, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->patch_machine_account_subtype_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->patch_machine_account_subtype_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-machine-account-subtype-v2
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
Patch subtype by ID
Update a machine account subtype of any tier by subtype ID, using the [JSON
Patch](https://tools.ietf.org/html/rfc6902) standard.

Only `displayName` and `description` are patchable, and both must remain present. Changing `targetType`,
`targetId`, `profile`, `classification`, `type` or `technicalName` returns `400`; to move a subtype to another
tier or target, delete it and create a new one.

Who can call this API depends on the tier of the stored subtype:

* `SOURCE`: requires the `idn:source-subtypes:update` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:update` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtypeV2**](../models/source-subtype-v2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated machine account subtype. | SourceSubtypeV2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.json_patch_operation import JsonPatchOperation
from sailpoint.machine_account_subtypes.models.source_subtype_v2 import SourceSubtypeV2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    json_patch_operation = '''[{"op":"replace","path":"/displayName","value":"Service Account"},{"op":"replace","path":"/description","value":"Accounts used by automated services."}]''' # List[JsonPatchOperation] | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch subtype by ID
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = MachineAccountSubtypesApi(api_client).patch_machine_account_subtype_v2(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).patch_machine_account_subtype_v2(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->patch_machine_account_subtype_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->patch_machine_account_subtype_v2: %s\n" % e)
```



[[Back to top]](#) 

## patch-source-subtype-provisioning-policy-v2
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
Patch subtype provisioning policy
Update the machine account creation provisioning policy of a subtype of any tier, using the [JSON
Patch](https://tools.ietf.org/html/rfc6902) standard. Only `name`, `description` and `fields` are patchable.
Returns `404` when the subtype has no provisioning policy.

Who can call this API depends on the tier of the subtype:

* `SOURCE`: requires the `idn:source-subtypes:update` right, held by org admins, source admins and source
sub-admins.

* `CONNECTOR`: requires the `idn:connector-subtypes:update` right, held by org admins.

A caller without the right for the subtype's tier receives `404`, not `403`. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/patch-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated subtype provisioning policy. | SubtypeProvisioningPolicy |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.json_patch_operation import JsonPatchOperation
from sailpoint.machine_account_subtypes.models.subtype_provisioning_policy import SubtypeProvisioningPolicy
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    json_patch_operation = '''[{"op":"replace","path":"/description","value":"Fields collected when creating a service account."}]''' # List[JsonPatchOperation] | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch subtype provisioning policy
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = MachineAccountSubtypesApi(api_client).patch_source_subtype_provisioning_policy_v2(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).patch_source_subtype_provisioning_policy_v2(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of MachineAccountSubtypesApi->patch_source_subtype_provisioning_policy_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->patch_source_subtype_provisioning_policy_v2: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-account-subtype-approval-config-v1
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
Machine Subtype Approval Config
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-subtype-approval-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
Path   | subtype_id | **str** | True  | machine account subtype ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the object.

### Return type
[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | This response indicates the PATCH operation succeeded and the API returns the updated MachineAccountSubtypeConfigDto object. | MachineAccountSubtypeConfigDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.json_patch_operation import JsonPatchOperation
from sailpoint.machine_account_subtypes.models.machine_account_subtype_config_dto import MachineAccountSubtypeConfigDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    subtype_id = '00eebcf881994e419d72e757fd30dc0e' # str | machine account subtype ID. # str | machine account subtype ID.
    json_patch_operation = '''[sailpoint.machine_account_subtypes.JsonPatchOperation()]''' # List[JsonPatchOperation] | The JSONPatch payload used to update the object.

    try:
        # Machine Subtype Approval Config
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = MachineAccountSubtypesApi(api_client).update_machine_account_subtype_approval_config_v1(x_sail_point_experimental=x_sail_point_experimental, subtype_id=subtype_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).update_machine_account_subtype_approval_config_v1(x_sail_point_experimental, subtype_id, new_json_patch_operation)
        print("The response of MachineAccountSubtypesApi->update_machine_account_subtype_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountSubtypesApi->update_machine_account_subtype_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 



