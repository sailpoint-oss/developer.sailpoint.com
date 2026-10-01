# MachineIdentities

# MachineIdentitiesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity-v1**](#create-machine-identity-v1) | **Post** `/machine-identities/v1` | Create machine identity
[**create-machine-identity-v2**](#create-machine-identity-v2) | **Post** `/machine-identities/v2` | Create machine identity
[**delete-machine-identity-v1**](#delete-machine-identity-v1) | **Delete** `/machine-identities/v1/{id}` | Delete machine identity
[**delete-machine-identity-v2**](#delete-machine-identity-v2) | **Delete** `/machine-identities/v2/{id}` | Delete machine identity
[**delete-ownership-correlation-config-v1**](#delete-ownership-correlation-config-v1) | **Delete** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**get-machine-identity-v1**](#get-machine-identity-v1) | **Get** `/machine-identities/v1/{id}` | Get machine identity details
[**get-machine-identity-v2**](#get-machine-identity-v2) | **Get** `/machine-identities/v2/{id}` | Get machine identity details
[**get-ownership-correlation-config-v1**](#get-ownership-correlation-config-v1) | **Get** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**get-unsanctioned-anomaly-summary-v1**](#get-unsanctioned-anomaly-summary-v1) | **Get** `/machine-identities/v1/anomaly-summaries/unsanctioned` | Get unsanctioned application anomaly summary
[**list-machine-identities-v1**](#list-machine-identities-v1) | **Get** `/machine-identities/v1` | List machine identities
[**list-machine-identities-v2**](#list-machine-identities-v2) | **Get** `/machine-identities/v2` | List machine identities
[**list-machine-identity-anomalies-v1**](#list-machine-identity-anomalies-v1) | **Get** `/machine-identities/v1/{id}/anomalies` | List machine identity anomalies
[**list-machine-identity-user-entitlements-v1**](#list-machine-identity-user-entitlements-v1) | **Get** `/machine-identity-user-entitlements/v1` | List machine identity&#39;s user entitlements
[**list-ownership-correlation-configs-v1**](#list-ownership-correlation-configs-v1) | **Get** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**patch-ownership-correlation-config-v1**](#patch-ownership-correlation-config-v1) | **Patch** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**start-machine-identity-aggregation-v1**](#start-machine-identity-aggregation-v1) | **Post** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
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
          "resource" : {
            "features" : [ "PROVISIONING", "AUTHENTICATION" ],
            "name" : "nightly-batch-role",
            "id" : "8886e5e3-63d0-462f-a195-d98da885b8dc",
            "type" : "aws:iam-role"
          },
          "created" : "2015-05-28T14:07:17Z",
          "connectorAttributes" : {
            "objectguid" : "abc-123"
          },
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
          "nativeIdentity" : "abc:123:dddd",
          "effectiveSanctionedStatus" : "SANCTIONED",
          "environment" : "PRODUCTION",
          "subtype" : "AI_AGENT",
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
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "datasetId" : "8886e5e3-63d0-462f-a195-d98da885b8dc",
          "attributes" : {
            "privilegeLevel" : "HIGH",
            "region" : "APAC"
          },
          "risk" : {
            "severity" : "HIGH",
            "score" : 72.5
          },
          "id" : "id12345",
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
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
    sorters := `nativeIdentity` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

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
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return &#x60;400&#x60;. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return `400`. (optional)
    sorters := `nativeIdentity` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

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
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
    sorters := `-detectedAt` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

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
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
    filters := `machineIdentityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
    sorters := `machineIdentityName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

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
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

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

