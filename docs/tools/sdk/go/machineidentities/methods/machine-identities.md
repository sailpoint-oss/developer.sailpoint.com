# MachineIdentities

# MachineIdentitiesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity-v1**](#create-machine-identity-v1) | **Post** `/machine-identities/v1` | Create machine identity
[**create-machine-identity-v2**](#create-machine-identity-v2) | **Post** `/machine-identities/v2` | Create machine identity
[**delete-machine-identities-in-bulk-v2**](#delete-machine-identities-in-bulk-v2) | **Post** `/machine-identities/v2/bulk-delete` | Bulk delete machine identities
[**delete-machine-identity-async-v1**](#delete-machine-identity-async-v1) | **Delete** `/machine-identities/v1/{id}/delete-async` | Delete AI agent asynchronously
[**delete-machine-identity-async-v2**](#delete-machine-identity-async-v2) | **Delete** `/machine-identities/v2/{id}/delete-async` | Delete AI agent asynchronously
[**delete-machine-identity-v1**](#delete-machine-identity-v1) | **Delete** `/machine-identities/v1/{id}` | Delete machine identity
[**delete-machine-identity-v2**](#delete-machine-identity-v2) | **Delete** `/machine-identities/v2/{id}` | Delete machine identity
[**delete-ownership-correlation-config-v1**](#delete-ownership-correlation-config-v1) | **Delete** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**get-machine-identity-agent-counts-v1**](#get-machine-identity-agent-counts-v1) | **Get** `/machine-identities/v1/agent-counts` | Get AI agent counts
[**get-machine-identity-agent-counts-v2**](#get-machine-identity-agent-counts-v2) | **Get** `/machine-identities/v2/agent-counts` | Get AI agent counts
[**get-machine-identity-all-counts-v1**](#get-machine-identity-all-counts-v1) | **Get** `/machine-identities/v1/all-counts` | Get owner machine identity counts
[**get-machine-identity-application-counts-v1**](#get-machine-identity-application-counts-v1) | **Get** `/machine-identities/v1/application-counts` | Get application counts
[**get-machine-identity-application-counts-v2**](#get-machine-identity-application-counts-v2) | **Get** `/machine-identities/v2/application-counts` | Get application counts
[**get-machine-identity-daily-counts-v1**](#get-machine-identity-daily-counts-v1) | **Get** `/machine-identities/v1/counts/daily` | Get daily non-human entity counts
[**get-machine-identity-v1**](#get-machine-identity-v1) | **Get** `/machine-identities/v1/{id}` | Get machine identity details
[**get-machine-identity-v2**](#get-machine-identity-v2) | **Get** `/machine-identities/v2/{id}` | Get machine identity details
[**get-ownership-correlation-config-v1**](#get-ownership-correlation-config-v1) | **Get** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**get-unsanctioned-anomaly-summary-v1**](#get-unsanctioned-anomaly-summary-v1) | **Get** `/machine-identities/v1/anomaly-summaries/unsanctioned` | Get unsanctioned application anomaly summary
[**list-machine-identities-v1**](#list-machine-identities-v1) | **Get** `/machine-identities/v1` | List machine identities
[**list-machine-identities-v2**](#list-machine-identities-v2) | **Get** `/machine-identities/v2` | List machine identities
[**list-machine-identity-accounts-v2**](#list-machine-identity-accounts-v2) | **Get** `/machine-identities/v2/{id}/accounts` | List linked machine accounts
[**list-machine-identity-anomalies-v1**](#list-machine-identity-anomalies-v1) | **Get** `/machine-identities/v1/{id}/anomalies` | List machine identity anomalies
[**list-machine-identity-capabilities-v2**](#list-machine-identity-capabilities-v2) | **Get** `/machine-identities/v2/{id}/capabilities` | List machine identity capabilities
[**list-machine-identity-entitlements-v2**](#list-machine-identity-entitlements-v2) | **Get** `/machine-identities/v2/{id}/entitlements` | List machine identity entitlements
[**list-machine-identity-hostnames-v2**](#list-machine-identity-hostnames-v2) | **Get** `/machine-identities/v2/hostnames` | List AI agent hostnames
[**list-machine-identity-user-entitlements-v1**](#list-machine-identity-user-entitlements-v1) | **Get** `/machine-identity-user-entitlements/v1` | List machine identity&#39;s user entitlements
[**list-ownership-correlation-configs-v1**](#list-ownership-correlation-configs-v1) | **Get** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**patch-ownership-correlation-config-v1**](#patch-ownership-correlation-config-v1) | **Patch** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**start-machine-identity-aggregation-v1**](#start-machine-identity-aggregation-v1) | **Post** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
[**update-machine-identities-in-bulk-v2**](#update-machine-identities-in-bulk-v2) | **Post** `/machine-identities/v2/bulk-update` | Bulk update machine identities
[**update-machine-identity-v1**](#update-machine-identity-v1) | **Patch** `/machine-identities/v1/{id}` | Update machine identity details
[**update-machine-identity-v2**](#update-machine-identity-v2) | **Patch** `/machine-identities/v2/{id}` | Partial update of machine identity


## create-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create machine identity
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentityRequest** | [**MachineIdentityRequest**](../models/machine-identity-request) |  | 

### Return type

[**MachineIdentityResponse**](../models/machine-identity-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentityrequestJson := []byte(`{
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
        }`) // MachineIdentityRequest | 

    var machineIdentityRequest machine_identities.MachineIdentityRequest
    if err := json.Unmarshal(machineidentityrequestJson, &machineIdentityRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.CreateMachineIdentityV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityRequest(machineIdentityRequest).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.CreateMachineIdentityV1(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityRequest(machineIdentityRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.CreateMachineIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineIdentityV1`: MachineIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.CreateMachineIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create machine identity
Use this API to create a machine identity. Additional owners may be either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. The maximum supported length for the description field is 2000 characters.

When Business Applications is enabled for the tenant, callers may optionally include a single `businessApplicationRefs` entry (`type`=`BUSINESS_APPLICATION`, `id`=BA UUID). The assignment is stored as a `MANUAL` correlation. `correlationType` may be omitted or `MANUAL`; `AUTOMATIC` is rejected (`400`). Unknown BA id returns `404`. More than one ref returns `400`. When Business Applications is not enabled, supplying `businessApplicationRefs` returns `400`. `sanctionedStatus` and `effectiveSanctionedStatus` are read-only and ignored on input.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineIdentityV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineidentityv2** | [**Machineidentityv2**](../models/machineidentityv2) |  | 

### Return type

[**Machineidentityv2**](../models/machineidentityv2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentityv2Json := []byte(`{
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
        }`) // Machineidentityv2 | 

    var machineidentityv2 machine_identities.Machineidentityv2
    if err := json.Unmarshal(machineidentityv2Json, &machineidentityv2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.CreateMachineIdentityV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Machineidentityv2(machineidentityv2).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.CreateMachineIdentityV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Machineidentityv2(machineidentityv2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.CreateMachineIdentityV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMachineIdentityV2`: Machineidentityv2
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.CreateMachineIdentityV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-identities-in-bulk-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Bulk delete machine identities
This API deletes up to 100 machine identities and returns a result for each requested ID.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was deleted.

A caller who owns a machine identity can delete it. Other callers need the **idn:mis-identity:delete** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identities-in-bulk-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineIdentitiesInBulkV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentityBulkRequest** | [**MachineIdentityBulkRequest**](../models/machine-identity-bulk-request) |  | 

### Return type

[**[]MachineIdentityBulkResult**](../models/machine-identity-bulk-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentitybulkrequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180858082150f0180893dbaf44201" ]
        }`) // MachineIdentityBulkRequest | 

    var machineIdentityBulkRequest machine_identities.MachineIdentityBulkRequest
    if err := json.Unmarshal(machineidentitybulkrequestJson, &machineIdentityBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentitiesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityBulkRequest(machineIdentityBulkRequest).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentitiesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityBulkRequest(machineIdentityBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteMachineIdentitiesInBulkV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMachineIdentitiesInBulkV2`: []MachineIdentityBulkResult
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.DeleteMachineIdentitiesInBulkV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-identity-async-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineIdentityAsyncV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TaskStatus**](../models/task-status)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityAsyncV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityAsyncV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteMachineIdentityAsyncV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMachineIdentityAsyncV1`: TaskStatus
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.DeleteMachineIdentityAsyncV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-identity-async-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineIdentityAsyncV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TaskStatus**](../models/task-status)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityAsyncV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityAsyncV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteMachineIdentityAsyncV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMachineIdentityAsyncV2`: TaskStatus
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.DeleteMachineIdentityAsyncV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete machine identity
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID # string | Machine Identity ID
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteMachineIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete machine identity
The API returns a successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineIdentityV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineIdentitiesAPI.DeleteMachineIdentityV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteMachineIdentityV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-ownership-correlation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete ownership correlation config
Deletes the ownership correlation config with the specified ID for the given source resource.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ownership-correlation-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**resourceId** | **string** | The source resource ID (for example, account or aws:iam-role). | 
**configId** | **string** | The correlation config ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOwnershipCorrelationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    resourceId := `aws:iam-role` // string | The source resource ID (for example, account or aws:iam-role). # string | The source resource ID (for example, account or aws:iam-role).
    configId := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The correlation config ID. # string | The correlation config ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineIdentitiesAPI.DeleteOwnershipCorrelationConfigV1(context.Background(), sourceId, resourceId, configId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineIdentitiesAPI.DeleteOwnershipCorrelationConfigV1(context.Background(), sourceId, resourceId, configId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.DeleteOwnershipCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-identity-agent-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get AI agent counts
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts AI
agents that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityAgentCountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentityAgentCounts**](../models/machine-identity-agent-counts)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityAgentCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityAgentCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityAgentCountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityAgentCountsV1`: MachineIdentityAgentCounts
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityAgentCountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-agent-counts-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get AI agent counts
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityAgentCountsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentityAgentCounts**](../models/machine-identity-agent-counts)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityAgentCountsV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityAgentCountsV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityAgentCountsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityAgentCountsV2`: MachineIdentityAgentCounts
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityAgentCountsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-all-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get owner machine identity counts
This API returns the number of application machine identities, AI agent machine identities, and machine accounts
owned by one identity, plus their total. Identify the owner with an `ownerId` filter. Use `ownerId eq "me"` for
the caller's own counts. Requests without an `ownerId` filter return `400`.

A caller who owns the machine identities and machine accounts can view their own counts. Other callers need the
**idn:mis-identity:read** or **idn:mis-account:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-all-counts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityAllCountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  &#x60;ownerId&#x60; is required. Use the identity ID of the owner, or &#x60;me&#x60; for the caller. | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentityAllCounts**](../models/machine-identity-all-counts)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    filters := `ownerId eq "me"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller. # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  `ownerId` is required. Use the identity ID of the owner, or `me` for the caller.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityAllCountsV1(context.Background()).Filters(filters).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityAllCountsV1(context.Background()).Filters(filters).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityAllCountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityAllCountsV1`: MachineIdentityAllCounts
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityAllCountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-application-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get application counts
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts
applications that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityApplicationCountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentityApplicationCounts**](../models/machine-identity-application-counts)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityApplicationCountsV1`: MachineIdentityApplicationCounts
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-application-counts-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get application counts
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityApplicationCountsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentityApplicationCounts**](../models/machine-identity-application-counts)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityApplicationCountsV2`: MachineIdentityApplicationCounts
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityApplicationCountsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-daily-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get daily non-human entity counts
This API returns daily counts of machine identities, machine accounts, capabilities, and credentials for the tenant.
The window ends on the day before the current UTC date and covers the number of days set by `days`. The response
contains one entry per day. Days with no recorded counts have an empty `metrics` array.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-daily-counts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityDailyCountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **days** | **int32** | Number of days in the window. Values outside 1 to 90 return &#x60;400&#x60;. | [default to 30]
 **entityType** | **string** | Return counts for this entity type only. Other values return &#x60;400&#x60;. | 
 **subType** | **string** | Return counts for this subtype only. The value must exactly match a recorded subtype. | 

### Return type

[**MachineIdentityDailyCounts**](../models/machine-identity-daily-counts)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    days := 30 // int32 | Number of days in the window. Values outside 1 to 90 return `400`. (optional) (default to 30) # int32 | Number of days in the window. Values outside 1 to 90 return `400`. (optional) (default to 30)
    entityType := `machine_identity` // string | Return counts for this entity type only. Other values return `400`. (optional) # string | Return counts for this entity type only. Other values return `400`. (optional)
    subType := `AI Agent` // string | Return counts for this subtype only. The value must exactly match a recorded subtype. (optional) # string | Return counts for this subtype only. The value must exactly match a recorded subtype. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityDailyCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityDailyCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Days(days).EntityType(entityType).SubType(subType).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityDailyCountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityDailyCountsV1`: MachineIdentityDailyCounts
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityDailyCountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MachineIdentityResponse**](../models/machine-identity-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID # string | Machine Identity ID
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityV1`: MachineIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineIdentityV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Machineidentityv2**](../models/machineidentityv2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetMachineIdentityV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetMachineIdentityV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineIdentityV2`: Machineidentityv2
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetMachineIdentityV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-ownership-correlation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get ownership correlation config
This end-point retrieves a single ownership correlation config by ID for the specified source resource.

[API Spec](https://developer.sailpoint.com/docs/api/get-ownership-correlation-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**resourceId** | **string** | The source resource ID (for example, account or aws:iam-role). | 
**configId** | **string** | The correlation config ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOwnershipCorrelationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**CorrelationConfig**](../models/correlation-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    resourceId := `aws:iam-role` // string | The source resource ID (for example, account or aws:iam-role). # string | The source resource ID (for example, account or aws:iam-role).
    configId := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The correlation config ID. # string | The correlation config ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetOwnershipCorrelationConfigV1(context.Background(), sourceId, resourceId, configId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetOwnershipCorrelationConfigV1(context.Background(), sourceId, resourceId, configId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetOwnershipCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOwnershipCorrelationConfigV1`: CorrelationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetOwnershipCorrelationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-unsanctioned-anomaly-summary-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get unsanctioned application anomaly summary
Returns aggregate counts (distinct agents, distinct owners, and total events) for anomalies of type **unsanctioned_app** across the tenant. Powers the Unsanctioned Agents card on the Agent Registry page.

[API Spec](https://developer.sailpoint.com/docs/api/get-unsanctioned-anomaly-summary-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUnsanctionedAnomalySummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**UnsanctionedApplicationAnomalySummary**](../models/unsanctioned-application-anomaly-summary)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.GetUnsanctionedAnomalySummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.GetUnsanctionedAnomalySummaryV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.GetUnsanctionedAnomalySummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUnsanctionedAnomalySummaryV1`: UnsanctionedApplicationAnomalySummary
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.GetUnsanctionedAnomalySummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identities-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]MachineIdentityResponse**](../models/machine-identity-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
    sorters := `nativeIdentity` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentitiesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentitiesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentitiesV1`: []MachineIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentitiesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return &#x60;400&#x60;.  &#x60;sessionCount&#x60;, &#x60;suspiciousSessionCount&#x60;, &#x60;entroId&#x60;, and &#x60;insights&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;entroId&#x60; is an exact, case-sensitive match. &#x60;insights&#x60; matches one whole array element and does not match a substring. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; treat null as not enriched; &#x60;0&#x60; is a real count. | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  &#x60;entroId&#x60; and &#x60;insights&#x60; are not sortable. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. Null counts sort as not enriched, distinct from &#x60;0&#x60;. | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]Machineidentityv2**](../models/machineidentityv2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count. (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`.  `sessionCount`, `suspiciousSessionCount`, `entroId`, and `insights` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `entroId` is an exact, case-sensitive match. `insights` matches one whole array element and does not match a substring. `sessionCount` and `suspiciousSessionCount` treat null as not enriched; `0` is a real count. (optional)
    sorters := `nativeIdentity` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`. (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  `entroId` and `insights` are not sortable. `sessionCount` and `suspiciousSessionCount` require Entro enrichment to be enabled; otherwise those sorters return `400`. Null counts sort as not enriched, distinct from `0`. (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentitiesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentitiesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentitiesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentitiesV2`: []Machineidentityv2
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentitiesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-accounts-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List linked machine accounts
This API returns the machine accounts that are linked to a machine identity. It supports the same filters and
sorters as the list machine accounts API, applied to the linked accounts only.

A caller who owns the machine identity can view its linked accounts. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-accounts-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityAccountsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;compliance&#x60; and &#x60;complianceViolationsCount&#x60; are not filter fields. With unknown-severity enabled, a null stored severity matches &#x60;risk.severity eq \&quot;UNKNOWN\&quot;&#x60;. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. &#x60;compliance&#x60; is not sortable. | 

### Return type

[**[]MachineAccount**](../models/machine-account)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `hasEntitlements eq true` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled for the tenant. When it is not, those filters return `400`. `compliance` and `complianceViolationsCount` are not filter fields. With unknown-severity enabled, a null stored severity matches `risk.severity eq \"UNKNOWN\"`. (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  `risk.severity`, `permissionLevel`, and `lastUsedAt` require Entro enrichment to be enabled; otherwise those sorters return `400`. `risk.severity` sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. `compliance` is not sortable. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityAccountsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityAccountsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityAccountsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityAccountsV2`: []MachineAccount
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityAccountsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-anomalies-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List machine identity anomalies
Returns a paginated list of anomalies detected for the specified machine identity (agent).

Set **count=true** to populate the *X-Total-Count* response header with the total number of anomalies for the agent. Combine **limit=0** with **count=true** to retrieve only the count with an empty result body.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-anomalies-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine identity (agent) ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityAnomaliesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]Anomaly**](../models/anomaly)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine identity (agent) ID. # string | Machine identity (agent) ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `-detectedAt` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityAnomaliesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityAnomaliesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityAnomaliesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityAnomaliesV1`: []Anomaly
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityAnomaliesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-capabilities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List machine identity capabilities
This API returns all capabilities, such as MCP servers and tools, that are linked to a machine identity. The list
is not paginated.

A caller who owns the machine identity can view its linked capabilities. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-capabilities-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityCapabilitiesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]Machineidentitycapability**](../models/machineidentitycapability)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityCapabilitiesV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityCapabilitiesV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityCapabilitiesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityCapabilitiesV2`: []Machineidentitycapability
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityCapabilitiesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-entitlements-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List machine identity entitlements
This API returns the entitlements held by the machine accounts that are linked to a machine identity.

A caller who owns the machine identity can view its entitlements. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-entitlements-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityEntitlementsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  &#x60;sw&#x60; and &#x60;co&#x60; both match the value anywhere in the entitlement name. Combine filters with &#x60;and&#x60; and &#x60;or&#x60;. &#x60;not&#x60; is not supported and returns &#x60;400&#x60;. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** | 

### Return type

[**[]Machineidentityentitlement**](../models/machineidentityentitlement)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `entitlementName sw "Finance"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  `sw` and `co` both match the value anywhere in the entitlement name. Combine filters with `and` and `or`. `not` is not supported and returns `400`. (optional)
    sorters := `entitlementName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityEntitlementsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityEntitlementsV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityEntitlementsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityEntitlementsV2`: []Machineidentityentitlement
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityEntitlementsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-hostnames-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityHostnamesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **prefix** | **string** | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. | 
 **limit** | **int32** | Maximum number of hostnames to return. Values of &#x60;0&#x60; or more than &#x60;250&#x60; return &#x60;400&#x60;. | [default to 50]
 **cursor** | **string** | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns &#x60;400&#x60;. | 

### Return type

**[]string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    prefix := `prod-` // string | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. (optional) # string | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. (optional)
    limit := 50 // int32 | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`. (optional) (default to 50) # int32 | Maximum number of hostnames to return. Values of `0` or more than `250` return `400`. (optional) (default to 50)
    cursor := `prod-agent-07.example.com` // string | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`. (optional) # string | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns `400`. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityHostnamesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityHostnamesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Prefix(prefix).Limit(limit).Cursor(cursor).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityHostnamesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityHostnamesV2`: []string
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityHostnamesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-identity-user-entitlements-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List machine identity's user entitlements
This API returns a list of user entitlements associated with machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-user-entitlements-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentityUserEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]MachineIdentityUserEntitlementResponse**](../models/machine-identity-user-entitlement-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `machineIdentityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
    sorters := `machineIdentityName` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityUserEntitlementsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListMachineIdentityUserEntitlementsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListMachineIdentityUserEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentityUserEntitlementsV1`: []MachineIdentityUserEntitlementResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListMachineIdentityUserEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-ownership-correlation-configs-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List ownership correlation configs
Returns the OWNER_PRIMARY and OWNER_SECONDARY correlation configs for the specified source resource, creating default rows if they are missing. Use the optional type query parameter to return a single matching config.

[API Spec](https://developer.sailpoint.com/docs/api/list-ownership-correlation-configs-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**resourceId** | **string** | The source resource ID (for example, account or aws:iam-role). | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOwnershipCorrelationConfigsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **type_** | **string** | When set, filters to the given config type. | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]CorrelationConfig**](../models/correlation-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    resourceId := `aws:iam-role` // string | The source resource ID (for example, account or aws:iam-role). # string | The source resource ID (for example, account or aws:iam-role).
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    type_ := `OWNER_PRIMARY` // string | When set, filters to the given config type. (optional) # string | When set, filters to the given config type. (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.ListOwnershipCorrelationConfigsV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.ListOwnershipCorrelationConfigsV1(context.Background(), sourceId, resourceId).XSailPointExperimental(xSailPointExperimental).Type_(type_).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.ListOwnershipCorrelationConfigsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListOwnershipCorrelationConfigsV1`: []CorrelationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.ListOwnershipCorrelationConfigsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-ownership-correlation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Patch ownership correlation config
Selectively updates an ownership correlation config using an RFC 6902 JSONPatch payload. Only replace on /attributes (full object) and replace on /rules (full array; merge by stable rule id, remove rules omitted from the array) are allowed.

[API Spec](https://developer.sailpoint.com/docs/api/patch-ownership-correlation-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The Source ID. | 
**resourceId** | **string** | The source resource ID (for example, account or aws:iam-role). | 
**configId** | **string** | The correlation config ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchOwnershipCorrelationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the correlation config. | 

### Return type

[**CorrelationConfig**](../models/correlation-config)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `2c9180835d191a86015d28455b4a2329` // string | The Source ID. # string | The Source ID.
    resourceId := `aws:iam-role` // string | The source resource ID (for example, account or aws:iam-role). # string | The source resource ID (for example, account or aws:iam-role).
    configId := `f5dd23fe-3414-42b7-bb1c-869400ad7a10` // string | The correlation config ID. # string | The correlation config ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/attributes","value":{"syncPrimaryToMachineAccounts":true}}]`) // []JsonPatchOperation | The JSONPatch payload used to update the correlation config.

    var jsonPatchOperation []machine_identities.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.PatchOwnershipCorrelationConfigV1(context.Background(), sourceId, resourceId, configId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.PatchOwnershipCorrelationConfigV1(context.Background(), sourceId, resourceId, configId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.PatchOwnershipCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchOwnershipCorrelationConfigV1`: CorrelationConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.PatchOwnershipCorrelationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-machine-identity-aggregation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Start machine identity aggregation
Starts a machine identity (AI Agents) aggregation on the specified source.

[API Spec](https://developer.sailpoint.com/docs/api/start-machine-identity-aggregation-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartMachineIdentityAggregationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentityAggregationRequest** | [**MachineIdentityAggregationRequest**](../models/machine-identity-aggregation-request) |  | 

### Return type

[**MachineIdentityAggregationResponse**](../models/machine-identity-aggregation-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentityaggregationrequestJson := []byte(`{
          "datasetIds" : [ "source:datasetId12345", "source:datasetId12345" ],
          "disableOptimization" : false
        }`) // MachineIdentityAggregationRequest | 

    var machineIdentityAggregationRequest machine_identities.MachineIdentityAggregationRequest
    if err := json.Unmarshal(machineidentityaggregationrequestJson, &machineIdentityAggregationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.StartMachineIdentityAggregationV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).MachineIdentityAggregationRequest(machineIdentityAggregationRequest).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.StartMachineIdentityAggregationV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).MachineIdentityAggregationRequest(machineIdentityAggregationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.StartMachineIdentityAggregationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartMachineIdentityAggregationV1`: MachineIdentityAggregationResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.StartMachineIdentityAggregationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-identities-in-bulk-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineIdentitiesInBulkV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **machineIdentityBulkUpdateRequest** | [**MachineIdentityBulkUpdateRequest**](../models/machine-identity-bulk-update-request) |  | 

### Return type

[**[]MachineIdentityBulkResult**](../models/machine-identity-bulk-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    machineidentitybulkupdaterequestJson := []byte(`{
          "ids" : [ "ef38f94347e94562b5bb8424a56397d8", "2c9180858082150f0180893dbaf44201" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "Agent used by the finance team"
          } ]
        }`) // MachineIdentityBulkUpdateRequest | 

    var machineIdentityBulkUpdateRequest machine_identities.MachineIdentityBulkUpdateRequest
    if err := json.Unmarshal(machineidentitybulkupdaterequestJson, &machineIdentityBulkUpdateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.UpdateMachineIdentitiesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityBulkUpdateRequest(machineIdentityBulkUpdateRequest).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.UpdateMachineIdentitiesInBulkV2(context.Background()).XSailPointExperimental(xSailPointExperimental).MachineIdentityBulkUpdateRequest(machineIdentityBulkUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.UpdateMachineIdentitiesInBulkV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineIdentitiesInBulkV2`: []MachineIdentityBulkResult
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.UpdateMachineIdentitiesInBulkV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-identity-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update machine identity details
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface\{\}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**MachineIdentityResponse**](../models/machine-identity-response)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{"op":"add","path":"/attributes/securityRisk","value":"medium"}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []machine_identities.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.UpdateMachineIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.UpdateMachineIdentityV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.UpdateMachineIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineIdentityV1`: MachineIdentityResponse
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.UpdateMachineIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-identity-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Machine Identity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineIdentityV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**Machineidentityv2**](../models/machineidentityv2)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    machine_identities "github.com/sailpoint-oss/golang-sdk/v3/machine_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Machine Identity ID. # string | Machine Identity ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/attributes/securityRisk","value":"medium"}]`) // []JsonPatchOperation | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []machine_identities.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentitiesAPI.UpdateMachineIdentityV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.MachineIdentitiesAPI.UpdateMachineIdentityV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentitiesAPI.UpdateMachineIdentityV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineIdentityV2`: Machineidentityv2
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentitiesAPI.UpdateMachineIdentityV2`: %v\n", resp)
}
```

[[Back to top]](#)

