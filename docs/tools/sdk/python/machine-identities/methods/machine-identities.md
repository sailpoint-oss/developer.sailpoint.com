# Machine_Identities

# sailpoint.machine_identities.MachineIdentitiesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity-v1**](#create-machine-identity-v1) | **POST** `/machine-identities/v1` | Create machine identity
[**create-machine-identity-v2**](#create-machine-identity-v2) | **POST** `/machine-identities/v2` | Create machine identity
[**delete-machine-identities-in-bulk-v2**](#delete-machine-identities-in-bulk-v2) | **POST** `/machine-identities/v2/bulk-delete` | Bulk delete machine identities
[**delete-machine-identity-async-v1**](#delete-machine-identity-async-v1) | **DELETE** `/machine-identities/v1/{id}/delete-async` | Delete AI agent asynchronously
[**delete-machine-identity-async-v2**](#delete-machine-identity-async-v2) | **DELETE** `/machine-identities/v2/{id}/delete-async` | Delete AI agent asynchronously
[**delete-machine-identity-v1**](#delete-machine-identity-v1) | **DELETE** `/machine-identities/v1/{id}` | Delete machine identity
[**delete-machine-identity-v2**](#delete-machine-identity-v2) | **DELETE** `/machine-identities/v2/{id}` | Delete machine identity
[**delete-ownership-correlation-config-v1**](#delete-ownership-correlation-config-v1) | **DELETE** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**get-machine-identity-agent-counts-v1**](#get-machine-identity-agent-counts-v1) | **GET** `/machine-identities/v1/agent-counts` | Get AI agent counts
[**get-machine-identity-agent-counts-v2**](#get-machine-identity-agent-counts-v2) | **GET** `/machine-identities/v2/agent-counts` | Get AI agent counts
[**get-machine-identity-all-counts-v1**](#get-machine-identity-all-counts-v1) | **GET** `/machine-identities/v1/all-counts` | Get owner machine identity counts
[**get-machine-identity-application-counts-v1**](#get-machine-identity-application-counts-v1) | **GET** `/machine-identities/v1/application-counts` | Get application counts
[**get-machine-identity-application-counts-v2**](#get-machine-identity-application-counts-v2) | **GET** `/machine-identities/v2/application-counts` | Get application counts
[**get-machine-identity-daily-counts-v1**](#get-machine-identity-daily-counts-v1) | **GET** `/machine-identities/v1/counts/daily` | Get daily non-human entity counts
[**get-machine-identity-v1**](#get-machine-identity-v1) | **GET** `/machine-identities/v1/{id}` | Get machine identity details
[**get-machine-identity-v2**](#get-machine-identity-v2) | **GET** `/machine-identities/v2/{id}` | Get machine identity details
[**get-ownership-correlation-config-v1**](#get-ownership-correlation-config-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**get-unsanctioned-anomaly-summary-v1**](#get-unsanctioned-anomaly-summary-v1) | **GET** `/machine-identities/v1/anomaly-summaries/unsanctioned` | Get unsanctioned application anomaly summary
[**list-machine-identities-v1**](#list-machine-identities-v1) | **GET** `/machine-identities/v1` | List machine identities
[**list-machine-identities-v2**](#list-machine-identities-v2) | **GET** `/machine-identities/v2` | List machine identities
[**list-machine-identity-accounts-v2**](#list-machine-identity-accounts-v2) | **GET** `/machine-identities/v2/{id}/accounts` | List linked machine accounts
[**list-machine-identity-anomalies-v1**](#list-machine-identity-anomalies-v1) | **GET** `/machine-identities/v1/{id}/anomalies` | List machine identity anomalies
[**list-machine-identity-capabilities-v2**](#list-machine-identity-capabilities-v2) | **GET** `/machine-identities/v2/{id}/capabilities` | List machine identity capabilities
[**list-machine-identity-entitlements-v2**](#list-machine-identity-entitlements-v2) | **GET** `/machine-identities/v2/{id}/entitlements` | List machine identity entitlements
[**list-machine-identity-hostnames-v2**](#list-machine-identity-hostnames-v2) | **GET** `/machine-identities/v2/hostnames` | List AI agent hostnames
[**list-machine-identity-user-entitlements-v1**](#list-machine-identity-user-entitlements-v1) | **GET** `/machine-identity-user-entitlements/v1` | List machine identity&#39;s user entitlements
[**list-ownership-correlation-configs-v1**](#list-ownership-correlation-configs-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**patch-ownership-correlation-config-v1**](#patch-ownership-correlation-config-v1) | **PATCH** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**start-machine-identity-aggregation-v1**](#start-machine-identity-aggregation-v1) | **POST** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
[**update-machine-identities-in-bulk-v2**](#update-machine-identities-in-bulk-v2) | **POST** `/machine-identities/v2/bulk-update` | Bulk update machine identities
[**update-machine-identity-v1**](#update-machine-identity-v1) | **PATCH** `/machine-identities/v1/{id}` | Update machine identity details
[**update-machine-identity-v2**](#update-machine-identity-v2) | **PATCH** `/machine-identities/v2/{id}` | Partial update of machine identity


## create-machine-identity-v1
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
Create machine identity
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_identity_request | [**MachineIdentityRequest**](../models/machine-identity-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityResponse**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine Identity created. | MachineIdentityResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_request import MachineIdentityRequest
from sailpoint.machine_identities.models.machine_identity_response import MachineIdentityResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_identity_request = '''{
          "sourceId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "subtype" : "Application",
          "created" : "2015-05-28T14:07:17Z",
          "userEntitlements" : [ {
            "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
            "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
          }, {
            "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
            "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
          } ],
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "description" : "",
          "attributes" : "{\"Region\":\"EU\"}",
          "owners" : {
            "primaryIdentity" : "{}",
            "secondaryIdentities" : [ {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            }, {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            } ]
          },
          "id" : "id12345",
          "uuid" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "nativeIdentity" : "abc:123:dddd"
        }''' # MachineIdentityRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create machine identity
        new_machine_identity_request = MachineIdentityRequest.from_json(machine_identity_request)
        results = MachineIdentitiesApi(api_client).create_machine_identity_v1(machine_identity_request=new_machine_identity_request)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).create_machine_identity_v1(new_machine_identity_request, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->create_machine_identity_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->create_machine_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-machine-identity-v2
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
Create machine identity
Use this API to create a machine identity. Additional owners may be either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. The maximum supported length for the description field is 2000 characters.

When Business Applications is enabled for the tenant, callers may optionally include a single `businessApplicationRefs` entry (`type`=`BUSINESS_APPLICATION`, `id`=BA UUID). The assignment is stored as a `MANUAL` correlation. `correlationType` may be omitted or `MANUAL`; `AUTOMATIC` is rejected (`400`). Unknown BA id returns `404`. More than one ref returns `400`. When Business Applications is not enabled, supplying `businessApplicationRefs` returns `400`. `sanctionedStatus` and `effectiveSanctionedStatus` are read-only and ignored on input.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machineidentityv2 | [**Machineidentityv2**](../models/machineidentityv2) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Machineidentityv2**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Machine identity created (same schema family as v2 GET/PATCH). | Machineidentityv2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machineidentityv2 import Machineidentityv2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machineidentityv2 = '''{
          "sourceId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
          "entroId" : "117923dfeaaf4a1ab09b6252ea369e44",
          "description" : "Service account for nightly batch jobs",
          "owners" : {
            "secondary" : [ {
              "id" : "2c9180858082150f0180893dbaf44202",
              "name" : "Jane Doe",
              "type" : "IDENTITY"
            } ],
            "primary" : {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            }
          },
          "source" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "uuid" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
          "suspiciousSessionCount" : 22,
          "subtype" : "AI_AGENT",
          "sessionCount" : 152,
          "businessApplicationRefs" : [ {
            "name" : "Cursor",
            "correlationType" : "MANUAL",
            "id" : "2ee5e239-e68c-4d69-93fb-6c7ce4576190",
            "type" : "BUSINESS_APPLICATION",
            "sanctionedStatus" : "SANCTIONED"
          } ],
          "userEntitlements" : [ {
            "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
            "displayName" : "Entitlement Name",
            "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
            "source" : {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            }
          }, {
            "sourceId" : "5898b7c1-620c-49c6-cccc-cbf81eb4bddd",
            "displayName" : "Entitlement Name",
            "entitlementId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
            "source" : {
              "name" : "William Wilson",
              "id" : "2c91808568c529c60168cca6f90c1313",
              "type" : "IDENTITY"
            }
          } ],
          "modified" : "2015-05-28T14:07:17Z",
          "datasetId" : "8886e5e3-63d0-462f-a195-d98da885b8dc",
          "id" : "id12345",
          "resource" : {
            "features" : [ "PROVISIONING", "AUTHENTICATION" ],
            "name" : "nightly-batch-role",
            "id" : "8886e5e3-63d0-462f-a195-d98da885b8dc",
            "type" : "aws:iam-role"
          },
          "insights" : [ "Sanctioned Service Access" ],
          "created" : "2015-05-28T14:07:17Z",
          "connectorAttributes" : {
            "objectguid" : "abc-123"
          },
          "nativeIdentity" : "abc:123:dddd",
          "effectiveSanctionedStatus" : "SANCTIONED",
          "environment" : "PRODUCTION",
          "name" : "aName",
          "attributes" : {
            "privilegeLevel" : "HIGH",
            "region" : "APAC"
          },
          "risk" : {
            "severity" : "HIGH",
            "score" : 72.5
          },
          "manuallyEdited" : true,
          "manuallyCreated" : true,
          "existsOnSource" : "TRUE",
          "status" : "ACTIVE"
        }''' # Machineidentityv2 | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create machine identity
        new_machineidentityv2 = Machineidentityv2.from_json(machineidentityv2)
        results = MachineIdentitiesApi(api_client).create_machine_identity_v2(machineidentityv2=new_machineidentityv2)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).create_machine_identity_v2(new_machineidentityv2, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->create_machine_identity_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->create_machine_identity_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-identities-in-bulk-v2
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
Bulk delete machine identities
This API deletes up to 100 machine identities and returns a result for each requested ID.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was deleted.

A caller who owns a machine identity can delete it. Other callers need the **idn:mis-identity:delete** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identities-in-bulk-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_identity_bulk_request | [**MachineIdentityBulkRequest**](../models/machine-identity-bulk-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineIdentityBulkResult]**](../models/machine-identity-bulk-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | A result for each requested machine identity ID. | List[MachineIdentityBulkResult] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_bulk_request import MachineIdentityBulkRequest
from sailpoint.machine_identities.models.machine_identity_bulk_result import MachineIdentityBulkResult
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_identity_bulk_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180858082150f0180893dbaf44201" ]
        }''' # MachineIdentityBulkRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Bulk delete machine identities
        new_machine_identity_bulk_request = MachineIdentityBulkRequest.from_json(machine_identity_bulk_request)
        results = MachineIdentitiesApi(api_client).delete_machine_identities_in_bulk_v2(machine_identity_bulk_request=new_machine_identity_bulk_request)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).delete_machine_identities_in_bulk_v2(new_machine_identity_bulk_request, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->delete_machine_identities_in_bulk_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_machine_identities_in_bulk_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-identity-async-v1
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
Delete AI agent asynchronously
This API deletes an AI agent machine identity. It applies only to AI agents. Application machine identities return
`400`; delete them with the delete machine identity API instead.

When the AI agent was aggregated from a source and still exists on that source, the API starts a deletion task on
the source and returns the task status. When the AI agent was created manually or no longer exists on the source,
the API deletes it immediately and returns `200` with an empty body.

The API returns `400` when the AI agent is still assigned to machine accounts, or when its source does not support
deleting it. It returns `404` when the machine identity or its source is not found.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-async-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the deletion task. The body is empty when the AI agent was deleted immediately. | TaskStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.task_status import TaskStatus
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete AI agent asynchronously
        
        results = MachineIdentitiesApi(api_client).delete_machine_identity_async_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).delete_machine_identity_async_v1(id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->delete_machine_identity_async_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_machine_identity_async_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-identity-async-v2
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
Delete AI agent asynchronously
This API deletes an AI agent machine identity. It applies only to AI agents. Application machine identities return
`400`; delete them with the delete machine identity API instead.

When the AI agent was aggregated from a source and still exists on that source, the API starts a deletion task on
the source and returns the task status. When the AI agent was created manually or no longer exists on the source,
the API deletes it immediately and returns `200` with an empty body.

The API returns `400` when the AI agent is still assigned to machine accounts, or when its source does not support
deleting it. It returns `404` when the machine identity or its source is not found.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-async-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TaskStatus**](../models/task-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the deletion task. The body is empty when the AI agent was deleted immediately. | TaskStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.task_status import TaskStatus
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete AI agent asynchronously
        
        results = MachineIdentitiesApi(api_client).delete_machine_identity_async_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).delete_machine_identity_async_v2(id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->delete_machine_identity_async_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_machine_identity_async_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-identity-v1
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
Delete machine identity
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID # str | Machine Identity ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete machine identity
        
        MachineIdentitiesApi(api_client).delete_machine_identity_v1(id=id)
        # Below is a request that includes all optional parameters
        # MachineIdentitiesApi(api_client).delete_machine_identity_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_machine_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-identity-v2
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
Delete machine identity
The API returns a successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete machine identity
        
        MachineIdentitiesApi(api_client).delete_machine_identity_v2(id=id)
        # Below is a request that includes all optional parameters
        # MachineIdentitiesApi(api_client).delete_machine_identity_v2(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_machine_identity_v2: %s\n" % e)
```



[[Back to top]](#) 

## delete-ownership-correlation-config-v1
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
Delete ownership correlation config
Deletes the ownership correlation config with the specified ID for the given source resource.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ownership-correlation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | resource_id | **str** | True  | The source resource ID (for example, account or aws:iam-role).
Path   | config_id | **str** | True  | The correlation config ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    resource_id = 'aws:iam-role' # str | The source resource ID (for example, account or aws:iam-role). # str | The source resource ID (for example, account or aws:iam-role).
    config_id = 'f5dd23fe-3414-42b7-bb1c-869400ad7a10' # str | The correlation config ID. # str | The correlation config ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete ownership correlation config
        
        MachineIdentitiesApi(api_client).delete_ownership_correlation_config_v1(source_id=source_id, resource_id=resource_id, config_id=config_id)
        # Below is a request that includes all optional parameters
        # MachineIdentitiesApi(api_client).delete_ownership_correlation_config_v1(source_id, resource_id, config_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_ownership_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-agent-counts-v1
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
Get AI agent counts
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts AI
agents that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAgentCounts**](../models/machine-identity-agent-counts)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | AI agent summary counts. | MachineIdentityAgentCounts |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_agent_counts import MachineIdentityAgentCounts
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get AI agent counts
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_agent_counts_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_agent_counts_v1(x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_agent_counts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_agent_counts_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-agent-counts-v2
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
Get AI agent counts
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAgentCounts**](../models/machine-identity-agent-counts)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | AI agent summary counts. | MachineIdentityAgentCounts |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_agent_counts import MachineIdentityAgentCounts
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get AI agent counts
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_agent_counts_v2()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_agent_counts_v2(x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_agent_counts_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_agent_counts_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-all-counts-v1
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
Get owner machine identity counts
This API returns the number of application machine identities, AI agent machine identities, and machine accounts
owned by one identity, plus their total. Identify the owner with an `ownerId` filter. Use `ownerId eq "me"` for
the caller's own counts. Requests without an `ownerId` filter return `400`.

A caller who owns the machine identities and machine accounts can view their own counts. Other callers need the
**idn:mis-identity:read** or **idn:mis-account:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-all-counts-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAllCounts**](../models/machine-identity-all-counts)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine identity and machine account counts for the owner. | MachineIdentityAllCounts |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_all_counts import MachineIdentityAllCounts
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'ownerId eq \"me\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller. # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get owner machine identity counts
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_all_counts_v1(filters=filters)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_all_counts_v1(filters, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_all_counts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_all_counts_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-application-counts-v1
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
Get application counts
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts
applications that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityApplicationCounts**](../models/machine-identity-application-counts)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Application summary counts. | MachineIdentityApplicationCounts |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_application_counts import MachineIdentityApplicationCounts
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get application counts
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_application_counts_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_application_counts_v1(x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_application_counts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_application_counts_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-application-counts-v2
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
Get application counts
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityApplicationCounts**](../models/machine-identity-application-counts)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Application summary counts. | MachineIdentityApplicationCounts |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_application_counts import MachineIdentityApplicationCounts
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get application counts
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_application_counts_v2()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_application_counts_v2(x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_application_counts_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_application_counts_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-daily-counts-v1
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
Get daily non-human entity counts
This API returns daily counts of machine identities, machine accounts, capabilities, and credentials for the tenant.
The window ends on the day before the current UTC date and covers the number of days set by `days`. The response
contains one entry per day. Days with no recorded counts have an empty `metrics` array.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-daily-counts-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | days | **int** |   (optional) (default to 30) | Number of days in the window. Values outside 1 to 90 return `400`.
  Query | entity_type | **str** |   (optional) | Return counts for this entity type only. Other values return `400`.
  Query | sub_type | **str** |   (optional) | Return counts for this subtype only. The value must exactly match a recorded subtype.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityDailyCounts**](../models/machine-identity-daily-counts)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Daily counts for the window. | MachineIdentityDailyCounts |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_daily_counts import MachineIdentityDailyCounts
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    days = 30 # int | Number of days in the window. Values outside 1 to 90 return `400`. (optional) (default to 30) # int | Number of days in the window. Values outside 1 to 90 return `400`. (optional) (default to 30)
    entity_type = 'machine_identity' # str | Return counts for this entity type only. Other values return `400`. (optional) # str | Return counts for this entity type only. Other values return `400`. (optional)
    sub_type = 'AI Agent' # str | Return counts for this subtype only. The value must exactly match a recorded subtype. (optional) # str | Return counts for this subtype only. The value must exactly match a recorded subtype. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get daily non-human entity counts
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_daily_counts_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_daily_counts_v1(days, entity_type, sub_type, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_daily_counts_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_daily_counts_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-v1
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
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityResponse**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A machine identity object | MachineIdentityResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_response import MachineIdentityResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID # str | Machine Identity ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get machine identity details
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_v1(id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-v2
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
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Machineidentityv2**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A machine identity object. | Machineidentityv2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machineidentityv2 import Machineidentityv2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get machine identity details
        
        results = MachineIdentitiesApi(api_client).get_machine_identity_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity_v2(id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-ownership-correlation-config-v1
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
Get ownership correlation config
This end-point retrieves a single ownership correlation config by ID for the specified source resource.

[API Spec](https://developer.sailpoint.com/docs/api/get-ownership-correlation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | resource_id | **str** | True  | The source resource ID (for example, account or aws:iam-role).
Path   | config_id | **str** | True  | The correlation config ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested correlation config. | CorrelationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.correlation_config import CorrelationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    resource_id = 'aws:iam-role' # str | The source resource ID (for example, account or aws:iam-role). # str | The source resource ID (for example, account or aws:iam-role).
    config_id = 'f5dd23fe-3414-42b7-bb1c-869400ad7a10' # str | The correlation config ID. # str | The correlation config ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get ownership correlation config
        
        results = MachineIdentitiesApi(api_client).get_ownership_correlation_config_v1(source_id=source_id, resource_id=resource_id, config_id=config_id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_ownership_correlation_config_v1(source_id, resource_id, config_id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_ownership_correlation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_ownership_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-unsanctioned-anomaly-summary-v1
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
Get unsanctioned application anomaly summary
Returns aggregate counts (distinct agents, distinct owners, and total events) for anomalies of type **unsanctioned_app** across the tenant. Powers the Unsanctioned Agents card on the Agent Registry page.

[API Spec](https://developer.sailpoint.com/docs/api/get-unsanctioned-anomaly-summary-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**UnsanctionedApplicationAnomalySummary**](../models/unsanctioned-application-anomaly-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Unsanctioned application anomaly summary. | UnsanctionedApplicationAnomalySummary |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.unsanctioned_application_anomaly_summary import UnsanctionedApplicationAnomalySummary
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get unsanctioned application anomaly summary
        
        results = MachineIdentitiesApi(api_client).get_unsanctioned_anomaly_summary_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_unsanctioned_anomaly_summary_v1(x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_unsanctioned_anomaly_summary_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_unsanctioned_anomaly_summary_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identities-v1
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
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[MachineIdentityResponse]**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine identities. | List[MachineIdentityResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_response import MachineIdentityResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'identityId eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
    sorters = 'nativeIdentity' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List machine identities
        
        results = MachineIdentitiesApi(api_client).list_machine_identities_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identities_v1(filters, sorters, x_sail_point_experimental, count, limit, offset)
        print("The response of MachineIdentitiesApi->list_machine_identities_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identities_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identities-v2
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
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Machineidentityv2]**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine identities. | List[Machineidentityv2] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machineidentityv2 import Machineidentityv2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'identityId eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count. (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count. (optional)
    sorters = 'nativeIdentity' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`. (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`. (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine identities
        
        results = MachineIdentitiesApi(api_client).list_machine_identities_v2()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identities_v2(filters, sorters, count, limit, offset, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->list_machine_identities_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identities_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-accounts-v2
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
List linked machine accounts
This API returns the machine accounts that are linked to a machine identity. It supports the same filters and
sorters as the list machine accounts API, applied to the linked accounts only.

A caller who owns the machine identity can view its linked accounts. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-accounts-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineAccount]**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine accounts linked to the machine identity. | List[MachineAccount] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'hasEntitlements eq true' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List linked machine accounts
        
        results = MachineIdentitiesApi(api_client).list_machine_identity_accounts_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identity_accounts_v2(id, limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->list_machine_identity_accounts_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identity_accounts_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-anomalies-v1
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
List machine identity anomalies
Returns a paginated list of anomalies detected for the specified machine identity (agent).

Set **count=true** to populate the *X-Total-Count* response header with the total number of anomalies for the agent. Combine **limit=0** with **count=true** to retrieve only the count with an empty result body.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-anomalies-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine identity (agent) ID.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first).
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[Anomaly]**](../models/anomaly)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of anomalies for the machine identity. | List[Anomaly] |  * X-Total-Count - Total number of anomalies for the agent. Only returned when **count=true** is specified on the request.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.anomaly import Anomaly
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine identity (agent) ID. # str | Machine identity (agent) ID.
    sorters = '-detectedAt' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List machine identity anomalies
        
        results = MachineIdentitiesApi(api_client).list_machine_identity_anomalies_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identity_anomalies_v1(id, sorters, x_sail_point_experimental, count, limit, offset)
        print("The response of MachineIdentitiesApi->list_machine_identity_anomalies_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identity_anomalies_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-capabilities-v2
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
List machine identity capabilities
This API returns all capabilities, such as MCP servers and tools, that are linked to a machine identity. The list
is not paginated.

A caller who owns the machine identity can view its linked capabilities. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-capabilities-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Machineidentitycapability]**](../models/machineidentitycapability)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of capabilities linked to the machine identity. | List[Machineidentitycapability] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machineidentitycapability import Machineidentitycapability
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine identity capabilities
        
        results = MachineIdentitiesApi(api_client).list_machine_identity_capabilities_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identity_capabilities_v2(id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->list_machine_identity_capabilities_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identity_capabilities_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-entitlements-v2
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
List machine identity entitlements
This API returns the entitlements held by the machine accounts that are linked to a machine identity.

A caller who owns the machine identity can view its entitlements. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-entitlements-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Machineidentityentitlement]**](../models/machineidentityentitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of entitlements of the machine identity. | List[Machineidentityentitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machineidentityentitlement import Machineidentityentitlement
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'entitlementName sw \"Finance\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`. (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`. (optional)
    sorters = 'entitlementName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List machine identity entitlements
        
        results = MachineIdentitiesApi(api_client).list_machine_identity_entitlements_v2(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identity_entitlements_v2(id, limit, offset, count, filters, sorters, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->list_machine_identity_entitlements_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identity_entitlements_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-hostnames-v2
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
List AI agent hostnames
This API returns the distinct hostnames of AI agent machine identities, in ascending order. Hostnames are returned
in lowercase with accents removed.

The API pages with a cursor instead of an offset. To get the next page, pass the last hostname of the current page
as `cursor`. A page with fewer hostnames than `limit` is the last page.

A caller who owns AI agents can list the hostnames of those agents. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-hostnames-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | prefix | **str** |   (optional) | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored.
  Query | limit | **int** |   (optional) (default to 50) | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`.
  Query | cursor | **str** |   (optional) | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**List[str]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A page of AI agent hostnames. | List[str] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    prefix = 'prod-' # str | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. (optional) # str | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. (optional)
    limit = 50 # int | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`. (optional) (default to 50) # int | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`. (optional) (default to 50)
    cursor = 'prod-agent-07.example.com' # str | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`. (optional) # str | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`. (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List AI agent hostnames
        
        results = MachineIdentitiesApi(api_client).list_machine_identity_hostnames_v2()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identity_hostnames_v2(prefix, limit, cursor, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->list_machine_identity_hostnames_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identity_hostnames_v2: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-user-entitlements-v1
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
List machine identity's user entitlements
This API returns a list of user entitlements associated with machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-user-entitlements-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name**
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**List[MachineIdentityUserEntitlementResponse]**](../models/machine-identity-user-entitlement-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine identity user entitlements. | List[MachineIdentityUserEntitlementResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_user_entitlement_response import MachineIdentityUserEntitlementResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'machineIdentityId eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
    sorters = 'machineIdentityName' # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional) # str | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List machine identity's user entitlements
        
        results = MachineIdentitiesApi(api_client).list_machine_identity_user_entitlements_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identity_user_entitlements_v1(filters, sorters, x_sail_point_experimental, count, limit, offset)
        print("The response of MachineIdentitiesApi->list_machine_identity_user_entitlements_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identity_user_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-ownership-correlation-configs-v1
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
List ownership correlation configs
Returns the OWNER_PRIMARY and OWNER_SECONDARY correlation configs for the specified source resource, creating default rows if they are missing. Use the optional type query parameter to return a single matching config.

[API Spec](https://developer.sailpoint.com/docs/api/list-ownership-correlation-configs-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | resource_id | **str** | True  | The source resource ID (for example, account or aws:iam-role).
  Query | type | **str** |   (optional) | When set, filters to the given config type.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[CorrelationConfig]**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of correlation configs. | List[CorrelationConfig] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.correlation_config import CorrelationConfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    resource_id = 'aws:iam-role' # str | The source resource ID (for example, account or aws:iam-role). # str | The source resource ID (for example, account or aws:iam-role).
    type = 'OWNER_PRIMARY' # str | When set, filters to the given config type. (optional) # str | When set, filters to the given config type. (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List ownership correlation configs
        
        results = MachineIdentitiesApi(api_client).list_ownership_correlation_configs_v1(source_id=source_id, resource_id=resource_id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_ownership_correlation_configs_v1(source_id, resource_id, type, count, limit, offset, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->list_ownership_correlation_configs_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_ownership_correlation_configs_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-ownership-correlation-config-v1
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
Patch ownership correlation config
Selectively updates an ownership correlation config using an RFC 6902 JSONPatch payload. Only replace on /attributes (full object) and replace on /rules (full array; merge by stable rule id, remove rules omitted from the array) are allowed.

[API Spec](https://developer.sailpoint.com/docs/api/patch-ownership-correlation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The Source ID.
Path   | resource_id | **str** | True  | The source resource ID (for example, account or aws:iam-role).
Path   | config_id | **str** | True  | The correlation config ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | The JSONPatch payload used to update the correlation config.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CorrelationConfig**](../models/correlation-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated correlation config. | CorrelationConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.correlation_config import CorrelationConfig
from sailpoint.machine_identities.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '2c9180835d191a86015d28455b4a2329' # str | The Source ID. # str | The Source ID.
    resource_id = 'aws:iam-role' # str | The source resource ID (for example, account or aws:iam-role). # str | The source resource ID (for example, account or aws:iam-role).
    config_id = 'f5dd23fe-3414-42b7-bb1c-869400ad7a10' # str | The correlation config ID. # str | The correlation config ID.
    json_patch_operation = '''[{"op":"replace","path":"/attributes","value":{"syncPrimaryToMachineAccounts":true}}]''' # List[JsonPatchOperation] | The JSONPatch payload used to update the correlation config.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch ownership correlation config
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = MachineIdentitiesApi(api_client).patch_ownership_correlation_config_v1(source_id=source_id, resource_id=resource_id, config_id=config_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).patch_ownership_correlation_config_v1(source_id, resource_id, config_id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->patch_ownership_correlation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->patch_ownership_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-machine-identity-aggregation-v1
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
Start machine identity aggregation
Starts a machine identity (AI Agents) aggregation on the specified source.

[API Spec](https://developer.sailpoint.com/docs/api/start-machine-identity-aggregation-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | machine_identity_aggregation_request | [**MachineIdentityAggregationRequest**](../models/machine-identity-aggregation-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityAggregationResponse**](../models/machine-identity-aggregation-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine Identity Aggregation was started successfully. | MachineIdentityAggregationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_aggregation_request import MachineIdentityAggregationRequest
from sailpoint.machine_identities.models.machine_identity_aggregation_response import MachineIdentityAggregationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    machine_identity_aggregation_request = '''{
          "datasetIds" : [ "source:datasetId12345", "source:datasetId12345" ],
          "disableOptimization" : false
        }''' # MachineIdentityAggregationRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Start machine identity aggregation
        new_machine_identity_aggregation_request = MachineIdentityAggregationRequest.from_json(machine_identity_aggregation_request)
        results = MachineIdentitiesApi(api_client).start_machine_identity_aggregation_v1(source_id=source_id, machine_identity_aggregation_request=new_machine_identity_aggregation_request)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).start_machine_identity_aggregation_v1(source_id, new_machine_identity_aggregation_request, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->start_machine_identity_aggregation_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->start_machine_identity_aggregation_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-identities-in-bulk-v2
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
Bulk update machine identities
This API applies the same JSON Patch operations to up to 100 machine identities and returns a result for each
requested ID. Only `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary` can
be patched. Patching any other path returns `400`. When access requests for non-human identities are not enabled
for the tenant, a patch that changes `/userEntitlements` returns `403`.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was updated.

A caller who owns a machine identity can update it. Other callers need the **idn:mis-identity:update** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identities-in-bulk-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | machine_identity_bulk_update_request | [**MachineIdentityBulkUpdateRequest**](../models/machine-identity-bulk-update-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[MachineIdentityBulkResult]**](../models/machine-identity-bulk-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
207 | A result for each requested machine identity ID. | List[MachineIdentityBulkResult] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_bulk_result import MachineIdentityBulkResult
from sailpoint.machine_identities.models.machine_identity_bulk_update_request import MachineIdentityBulkUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    machine_identity_bulk_update_request = '''{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180858082150f0180893dbaf44201" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "Agent used by the finance team"
          } ]
        }''' # MachineIdentityBulkUpdateRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Bulk update machine identities
        new_machine_identity_bulk_update_request = MachineIdentityBulkUpdateRequest.from_json(machine_identity_bulk_update_request)
        results = MachineIdentitiesApi(api_client).update_machine_identities_in_bulk_v2(machine_identity_bulk_update_request=new_machine_identity_bulk_update_request)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).update_machine_identities_in_bulk_v2(new_machine_identity_bulk_update_request, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->update_machine_identities_in_bulk_v2:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->update_machine_identities_in_bulk_v2: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-identity-v1
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
Update machine identity details
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
 Body  | request_body | **[]object** | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentityResponse**](../models/machine-identity-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Identity object. | MachineIdentityResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.machine_identity_response import MachineIdentityResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    request_body = '''[{"op":"add","path":"/attributes/securityRisk","value":"medium"}]''' # List[object] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update machine identity details
        new_request_body = RequestBody.from_json(request_body)
        results = MachineIdentitiesApi(api_client).update_machine_identity_v1(id=id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).update_machine_identity_v1(id, new_request_body, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->update_machine_identity_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->update_machine_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-identity-v2
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
Partial update of machine identity
Use this API to selectively update machine identity details using a JSONPatch payload.

Patchable fields include **name**, **description**, **nativeIdentity**, **subtype**, **environment**, **attributes**, **owners**, **userEntitlements**, **manuallyEdited**, and **businessApplicationRefs** (when Business Applications is enabled for the tenant).


When Business Applications is enabled for the tenant, `/businessApplicationRefs` may be replaced with at most one MANUAL Business Application
reference, or cleared with an empty array. Patching `/businessApplicationRefs` when Business Applications is not enabled returns `400`.
Existing `AUTOMATIC` correlations cannot be overridden (`400` / `ILLEGAL_UPDATE_ATTEMPT`). Unknown BA id returns `404`.


`entroId`, `insights`, `sessionCount`, and `suspiciousSessionCount` are read-only. A patch that targets them is rejected
with `400`; aggregation is the only writer. `entroRiskBand`, `agentSource`, and `integrationType` are not response fields.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Machineidentityv2**](../models/machineidentityv2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated machine identity object. | Machineidentityv2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitiesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitiesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.machine_identities.api_client import ApiClient
from sailpoint.machine_identities.models.json_patch_operation import JsonPatchOperation
from sailpoint.machine_identities.models.machineidentityv2 import Machineidentityv2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    json_patch_operation = '''[{"op":"add","path":"/attributes/securityRisk","value":"medium"}]''' # List[JsonPatchOperation] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Partial update of machine identity
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = MachineIdentitiesApi(api_client).update_machine_identity_v2(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).update_machine_identity_v2(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->update_machine_identity_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->update_machine_identity_v2: %s\n" % e)
```



[[Back to top]](#) 



