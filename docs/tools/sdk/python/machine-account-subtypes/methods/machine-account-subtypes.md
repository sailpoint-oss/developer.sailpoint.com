# Machine_Account_Subtypes

# sailpoint.machine_account_subtypes.MachineAccountSubtypesApi
  Use this API to get, update, and delete machine account subtypes. V2 paths are experimental
and require the &#x60;X-SailPoint-Experimental&#x60; header.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype-override-v2**](#create-source-subtype-override-v2) | **POST** `/source-subtypes/v2/{id}/overrides` | Create a source-tier override
[**create-source-subtype-provisioning-policy-v2**](#create-source-subtype-provisioning-policy-v2) | **POST** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**create-source-subtype-v1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**create-source-subtype-v2**](#create-source-subtype-v2) | **POST** `/source-subtypes/v2` | Create a tiered subtype
[**delete-machine-account-subtype-v1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**delete-machine-account-subtype-v2**](#delete-machine-account-subtype-v2) | **DELETE** `/source-subtypes/v2/{id}` | Delete tiered subtype by ID
[**delete-source-subtype-provisioning-policy-v2**](#delete-source-subtype-provisioning-policy-v2) | **DELETE** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**get-machine-account-subtype-approval-config-v1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id-v1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**get-source-subtype-by-id-v2**](#get-source-subtype-by-id-v2) | **GET** `/source-subtypes/v2/{id}` | Get tiered subtype by ID
[**get-source-subtype-provisioning-policy-v2**](#get-source-subtype-provisioning-policy-v2) | **GET** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**list-source-subtype-targets-v2**](#list-source-subtype-targets-v2) | **GET** `/source-subtypes/v2/targets` | List subtype targets
[**list-source-subtypes-v1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**list-source-subtypes-v2**](#list-source-subtypes-v2) | **GET** `/source-subtypes/v2` | Retrieve all tiered subtypes
[**load-bulk-source-subtypes-v1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype-v1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**patch-machine-account-subtype-v2**](#patch-machine-account-subtype-v2) | **PATCH** `/source-subtypes/v2/{id}` | Patch tiered subtype by ID
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
Create a source-tier override
Creates a SOURCE-tier snapshot of a CONNECTOR-tier subtype for one source. The snapshot copies
the parent display data, machine-account config, and authored provisioning policy. It does not
add the connector's default account-creation fields, and later connector-tier edits do not
propagate.

`subtypeId` must be a CONNECTOR-tier subtype UUID that is in the source effective set. The
created row is an ordinary SOURCE subtype (`targetType=SOURCE`, new `id`, `origin=null`) and
can be patched or deleted with the existing v2 subtype routes.

Requires `idn:source-subtypes:create`. A missing right, an unknown parent, or an unknown source
returns **404**. A parent that is not CONNECTOR, a blank `sourceId`, a parent that is not
effective on the source, a name collision, or a subtype cap returns **400**. A malformed `subtypeId` returns **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-override-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | CONNECTOR-tier subtype to snapshot onto the source.
 Body  | source_subtype_override_request | [**SourceSubtypeOverrideRequest**](../models/source-subtype-override-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeWithTarget**](../models/subtype-with-target)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created SOURCE-tier override. | SubtypeWithTarget |  * location - URL of the stored provisioning policy.  |
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
from sailpoint.machine_account_subtypes.models.subtype_with_target import SubtypeWithTarget
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | CONNECTOR-tier subtype to snapshot onto the source. # str | CONNECTOR-tier subtype to snapshot onto the source.
    source_subtype_override_request = '''{
          "sourceId" : "6d0458373bec4b4b80460992b76016da"
        }''' # SourceSubtypeOverrideRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a source-tier override
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
Creates the machine account creation provisioning policy for a subtype. A subtype has at most
one policy; the request is rejected if one already exists.

When `useDefaultFields` is `true` and the body has no `fields`, a `CONNECTOR` subtype's policy
is created with the connector's default account-creation fields. `SOURCE` subtypes ignore
`useDefaultFields`.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. A missing subtype or a missing right returns **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
 Body  | provisioning_policy_dto | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) | True  | 
  Query | use_default_fields | **bool** |   (optional) (default to True) | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Stored CREATE_MACHINE_ACCOUNT provisioning policy. | ProvisioningPolicyDto |  * location - URL of the stored provisioning policy.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Conflict - a provisioning policy is already stored for the subtype. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    provisioning_policy_dto = '''{
          "name" : "Create Machine Account",
          "description" : "Fields used when creating a machine account for this subtype",
          "id" : "54f626b4-c9d8-4f7e-b768-046c20583abb",
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
              "template" : "firstname.lastname.uniqueCounter",
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
              "template" : "firstname.lastname.uniqueCounter",
              "cloudMaxUniqueChecks" : "50",
              "cloudMaxSize" : "20",
              "cloudRequired" : "true"
            },
            "type" : "string"
          } ],
          "usageType" : "CREATE_MACHINE_ACCOUNT"
        }''' # ProvisioningPolicyDto | 
    use_default_fields = True # bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes. (optional) (default to True) # bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes. (optional) (default to True)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create subtype provisioning policy
        new_provisioning_policy_dto = ProvisioningPolicyDto.from_json(provisioning_policy_dto)
        results = MachineAccountSubtypesApi(api_client).create_source_subtype_provisioning_policy_v2(id=id, provisioning_policy_dto=new_provisioning_policy_dto)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).create_source_subtype_provisioning_policy_v2(id, new_provisioning_policy_dto, use_default_fields, x_sail_point_experimental)
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
Create a tiered subtype
Creates a machine account subtype at the tier declared on the request body.

`targetId` is required at every tier. `targetType` defaults to `SOURCE` when omitted. Do not
supply `id` or `profile`; those fields are response-only. `systemManaged`, `created`,
`modified`, and `origin` are ignored on input. CONNECTOR `targetName` is optional and is filled
from the connector's display name.

SOURCE-tier create requires `idn:source-subtypes:create`. CONNECTOR-tier create requires
`idn:connector-subtypes:create`. A missing right is returned as **404**, not **403**.
`CONNECTOR_VARIANT` is not available and returns **400**.

Duplicate technical name or display name in the same tier scope returns **400**. Exceeding the
organization subtype limit returns **400**. The create also stores a `CREATE_MACHINE_ACCOUNT`
provisioning policy from the connector's default account-creation fields.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | source_subtype_v2 | [**SourceSubtypeV2**](../models/source-subtype-v2) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeWithTarget**](../models/subtype-with-target)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created tiered machine account subtype. | SubtypeWithTarget |  * location - URL of the stored provisioning policy.  |
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
from sailpoint.machine_account_subtypes.models.source_subtype_v2 import SourceSubtypeV2
from sailpoint.machine_account_subtypes.models.subtype_with_target import SubtypeWithTarget
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_subtype_v2 = '''{
          "targetName" : "JDBC",
          "targetId" : "JDBC",
          "displayName" : "Non Personal",
          "created" : "2026-08-18T12:00:00Z",
          "origin" : "CONNECTOR",
          "profile" : {
            "connectorType" : "JDBC",
            "variant" : "MySql",
            "id" : "65de7634-d315-482c-aad4-7fdbd1e42056"
          },
          "systemManaged" : false,
          "description" : "Machine accounts for JDBC connectors",
          "targetType" : "CONNECTOR",
          "type" : "MACHINE",
          "classification" : "MACHINE",
          "technicalName" : "nonPersonal",
          "modified" : "2026-08-18T12:00:00Z",
          "id" : "43bdd144-4b17-4fce-a744-17c7fd3e717b"
        }''' # SourceSubtypeV2 | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a tiered subtype
        new_source_subtype_v2 = SourceSubtypeV2.from_json(source_subtype_v2)
        results = MachineAccountSubtypesApi(api_client).create_source_subtype_v2(source_subtype_v2=new_source_subtype_v2)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).create_source_subtype_v2(new_source_subtype_v2, x_sail_point_experimental)
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
Delete tiered subtype by ID
Deletes a tiered subtype by id.

System-managed subtypes return **400**. A subtype that is still assigned to accounts returns
**400**. A connector-tier response includes how many accounts and sources still use it.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Unknown id and a denied tier are both returned as **404**. A
malformed UUID returns **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


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
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
        # Delete tiered subtype by ID
        
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
Deletes the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Missing subtype and missing right both return **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


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
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
Get tiered subtype by ID
Returns one machine account subtype by id, including whether its target can provision accounts.

Unknown id returns **404**. A caller without the required right also receives **404**. If
provisioning support cannot be determined, the API returns **503**. When the experimental
header is missing, or when tiered subtype configuration is not enabled, the endpoint returns
**404**.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeWithTargetProvisioning**](../models/subtype-with-target-provisioning)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tiered machine account subtype, including &#x60;target.supportsProvisioning&#x60;. | SubtypeWithTargetProvisioning |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |
503 | Connector catalogue timeout, HTTP error, or unparseable payload while resolving &#x60;supportsProvisioning&#x60; for a CONNECTOR target. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_subtypes.api.machine_account_subtypes_api import MachineAccountSubtypesApi
from sailpoint.machine_account_subtypes.api_client import ApiClient
from sailpoint.machine_account_subtypes.models.subtype_with_target_provisioning import SubtypeWithTargetProvisioning
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get tiered subtype by ID
        
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
Returns the machine account creation provisioning policy for a subtype of any tier. Returns
**404** when the subtype has no provisioning policy.

For a `SOURCE` subtype, pass `sourceId` so a policy stored on that source can be found.

The caller needs `idn:source-subtypes:read`. A malformed id returns **400**. When the
experimental header is missing, or when tiered subtype configuration is not enabled, the
endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
  Query | source_id | **str** |   (optional) (default to '') | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | CREATE_MACHINE_ACCOUNT provisioning policy for the subtype. | ProvisioningPolicyDto |  -  |
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
from sailpoint.machine_account_subtypes.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    source_id = '' # str | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) (default to '') # str | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) (default to '')
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
Lists per-target subtype counts. Connector-tier rows are grouped by connector type.
Source-tier rows are returned 1:1 with each source-tier subtype.

`filters` must include `targetType eq "CONNECTOR"` or `targetType eq "SOURCE"`. Missing or
blank `targetType` returns **400**. `CONNECTOR_VARIANT` and unknown values return **400**.
Filter and sort fields are independent of the subtype list API. Default sort is `targetName`
ascending. `lastModified` is response-only and is not filterable or sortable.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** | True  | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*
  Query | sorters | **str** |   (optional) (default to 'targetName') | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[SubtypeTargetSummary]**](../models/subtype-target-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of subtype target summaries. | List[SubtypeTargetSummary] |  -  |
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
    filters = 'targetType eq \"CONNECTOR\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw* # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*
    sorters = 'targetName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. (optional) (default to 'targetName') # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. (optional) (default to 'targetName')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List subtype targets
        
        results = MachineAccountSubtypesApi(api_client).list_source_subtype_targets_v2(filters=filters)
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).list_source_subtype_targets_v2(filters, sorters, count, limit, offset, x_sail_point_experimental)
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
Retrieve all tiered subtypes
Lists machine account subtypes across SOURCE and CONNECTOR tiers.

`targetId` is the scope key at every tier (source id for `SOURCE`, connector type for
`CONNECTOR`). Responses include a resolved `target` reference and do not include `sourceId`.
List responses do not include `target.supportsProvisioning`.

With `sourceId`, omitted `effectiveSet` defaults to `true` and returns the effective set for
that source (SOURCE overrides CONNECTOR by technical name). `effectiveSet=false` returns only
that source's raw SOURCE-tier rows. `effectiveSet=true` without `sourceId` returns **400**.
Combining `filters` with effective-set resolution returns **400**. Unknown `sourceId` returns
**404**. Limit, offset, and `count` apply on both paths. There is no default sort.

Optional `targetType` applies only on the effective-set path. `CONNECTOR` keeps inherited
connector winners. `SOURCE` keeps source-only winners and SOURCE overrides. Omitting it keeps
the full winner set. A blank, unknown, or `CONNECTOR_VARIANT` value, or any `targetType` when
`effectiveSet` is `false` or `sourceId` is omitted, returns **400**.

On the effective set, `origin` is `CONNECTOR` only when a SOURCE winner overrides a CONNECTOR
parent of the same technical name. Connector-only and source-only winners have `origin=null`.

`includeConfigs` defaults to `false`. When `true`, each `MACHINE` subtype that has a stored
machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`.
A `MACHINE` row with no create config, and every non-`MACHINE` row, omits `config`. The list
does not return the full machine-config document.

This API requires the Machine Identity Security product. When the experimental header is
missing, or when the tiered subtype configuration is not enabled for the tenant, the endpoint
returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400.
  Query | sorters | **str** |   (optional) (default to '') | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified.
  Query | source_id | **str** |   (optional) (default to '') | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted.
  Query | effective_set | **bool** |   (optional) (default to True) | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**.
  Query | target_type | **str** |   (optional) | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted.
  Query | include_configs | **bool** |   (optional) (default to False) | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[SubtypeWithTargetAndConfig]**](../models/subtype-with-target-and-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of tiered machine account subtypes. | List[SubtypeWithTargetAndConfig] |  -  |
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
from sailpoint.machine_account_subtypes.models.subtype_with_target_and_config import SubtypeWithTargetAndConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'targetType eq \"CONNECTOR\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. (optional)
    sorters = '' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. (optional) (default to '') # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. (optional) (default to '')
    source_id = '' # str | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted. (optional) (default to '') # str | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted. (optional) (default to '')
    effective_set = True # bool | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**. (optional) (default to True) # bool | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**. (optional) (default to True)
    target_type = 'SOURCE' # str | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted. (optional) # str | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted. (optional)
    include_configs = False # bool | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`. (optional) (default to False) # bool | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`. (optional) (default to False)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Retrieve all tiered subtypes
        
        results = MachineAccountSubtypesApi(api_client).list_source_subtypes_v2()
        # Below is a request that includes all optional parameters
        # results = MachineAccountSubtypesApi(api_client).list_source_subtypes_v2(filters, sorters, source_id, effective_set, target_type, include_configs, count, limit, offset, x_sail_point_experimental)
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
Patch tiered subtype by ID
Applies an RFC 6902 JSON Patch to a tiered subtype.

Patchable fields are `displayName` and `description` only. Tier and identity fields
(`technicalName`, `targetType`, `targetId`, `profile`, `classification`, `type`) are immutable;
change them by deleting and recreating the subtype.

SOURCE-tier update requires `idn:source-subtypes:update`. CONNECTOR-tier update requires
`idn:connector-subtypes:update`. Unknown id and a denied tier are both returned as **404**. A
malformed UUID returns **400**. System-managed rows and a duplicate display name in the same
tier scope return **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SubtypeWithTarget**](../models/subtype-with-target)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated tiered machine account subtype. | SubtypeWithTarget |  -  |
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
from sailpoint.machine_account_subtypes.models.subtype_with_target import SubtypeWithTarget
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    json_patch_operation = '''[{"op":"replace","path":"/displayName","value":"Non-personal accounts"},{"op":"replace","path":"/description","value":"Accounts used by automated services."}]''' # List[JsonPatchOperation] | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch tiered subtype by ID
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
Patches the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype using RFC 6902
JSON Patch.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. Missing subtype, missing policy, and missing right all return
**404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-source-subtype-provisioning-policy-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the subtype.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated CREATE_MACHINE_ACCOUNT provisioning policy. | ProvisioningPolicyDto |  -  |
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
from sailpoint.machine_account_subtypes.models.provisioning_policy_dto import ProvisioningPolicyDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the subtype. # str | The ID of the subtype.
    json_patch_operation = '''[{"op":"replace","path":"/description","value":"Updated machine account create fields"}]''' # List[JsonPatchOperation] | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
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



