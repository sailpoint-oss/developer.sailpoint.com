# MachineAccountSubtypes

# MachineAccountSubtypesAPI
  Use this API to get, update, and delete machine account subtype for sources.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype-override-v2**](#create-source-subtype-override-v2) | **Post** `/source-subtypes/v2/{id}/overrides` | Override source connector subtype
[**create-source-subtype-provisioning-policy-v2**](#create-source-subtype-provisioning-policy-v2) | **Post** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**create-source-subtype-v1**](#create-source-subtype-v1) | **Post** `/source-subtypes/v1` | Create subtype
[**create-source-subtype-v2**](#create-source-subtype-v2) | **Post** `/source-subtypes/v2` | Create subtype
[**delete-machine-account-subtype-v1**](#delete-machine-account-subtype-v1) | **Delete** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**delete-machine-account-subtype-v2**](#delete-machine-account-subtype-v2) | **Delete** `/source-subtypes/v2/{id}` | Delete subtype by ID
[**delete-source-subtype-provisioning-policy-v2**](#delete-source-subtype-provisioning-policy-v2) | **Delete** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**get-machine-account-subtype-approval-config-v1**](#get-machine-account-subtype-approval-config-v1) | **Get** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id-v1**](#get-source-subtype-by-id-v1) | **Get** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**get-source-subtype-by-id-v2**](#get-source-subtype-by-id-v2) | **Get** `/source-subtypes/v2/{id}` | Get subtype by ID
[**get-source-subtype-provisioning-policy-v2**](#get-source-subtype-provisioning-policy-v2) | **Get** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**list-source-subtype-targets-v2**](#list-source-subtype-targets-v2) | **Get** `/source-subtypes/v2/targets` | List subtype targets
[**list-source-subtypes-v1**](#list-source-subtypes-v1) | **Get** `/source-subtypes/v1` | Retrieve all subtypes
[**list-source-subtypes-v2**](#list-source-subtypes-v2) | **Get** `/source-subtypes/v2` | List subtypes
[**load-bulk-source-subtypes-v1**](#load-bulk-source-subtypes-v1) | **Post** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype-v1**](#patch-machine-account-subtype-v1) | **Patch** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**patch-machine-account-subtype-v2**](#patch-machine-account-subtype-v2) | **Patch** `/source-subtypes/v2/{id}` | Patch subtype by ID
[**patch-source-subtype-provisioning-policy-v2**](#patch-source-subtype-provisioning-policy-v2) | **Patch** `/source-subtypes/v2/{id}/provisioning-policy` | Patch subtype provisioning policy
[**update-machine-account-subtype-approval-config-v1**](#update-machine-account-subtype-approval-config-v1) | **Patch** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-override-v2
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the connector subtype to override. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeOverrideV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceSubtypeOverrideRequest** | [**SourceSubtypeOverrideRequest**](../models/source-subtype-override-request) |  | 

### Return type

[**SourceSubtypeV2**](../models/source-subtype-v2)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the connector subtype to override. # string | The ID of the connector subtype to override.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourcesubtypeoverriderequestJson := []byte(`{
          "sourceId" : "6d0458373bec4b4b80460992b76016da"
        }`) // SourceSubtypeOverrideRequest | 

    var sourceSubtypeOverrideRequest machine_account_subtypes.SourceSubtypeOverrideRequest
    if err := json.Unmarshal(sourcesubtypeoverriderequestJson, &sourceSubtypeOverrideRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeOverrideV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SourceSubtypeOverrideRequest(sourceSubtypeOverrideRequest).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeOverrideV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SourceSubtypeOverrideRequest(sourceSubtypeOverrideRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtypeOverrideV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtypeOverrideV2`: SourceSubtypeV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.CreateSourceSubtypeOverrideV2`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-subtype-provisioning-policy-v2
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **subtypeProvisioningPolicy** | [**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy) |  | 
 **useDefaultFields** | **bool** | When &#x60;true&#x60; and the request body has no &#x60;fields&#x60;, a &#x60;CONNECTOR&#x60; subtype&#39;s policy is created with the connector&#39;s default account creation fields. Ignored for &#x60;SOURCE&#x60; subtypes. | [default to true]

### Return type

[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    subtypeprovisioningpolicyJson := []byte(`{
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
        }`) // SubtypeProvisioningPolicy | 
    useDefaultFields := true // bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes. (optional) (default to true) # bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account creation fields. Ignored for `SOURCE` subtypes. (optional) (default to true)

    var subtypeProvisioningPolicy machine_account_subtypes.SubtypeProvisioningPolicy
    if err := json.Unmarshal(subtypeprovisioningpolicyJson, &subtypeProvisioningPolicy); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SubtypeProvisioningPolicy(subtypeProvisioningPolicy).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SubtypeProvisioningPolicy(subtypeProvisioningPolicy).UseDefaultFields(useDefaultFields).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtypeProvisioningPolicyV2`: SubtypeProvisioningPolicy
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-subtype-v1
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
Create subtype
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **createSourceSubtypeV1Request** | [**CreateSourceSubtypeV1Request**](../models/create-source-subtype-v1-request) |  | 

### Return type

[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    createsourcesubtypev1requestJson := []byte(`{"sourceId":"6d0458373bec4b4b80460992b76016da","technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}`) // CreateSourceSubtypeV1Request | 

    var createSourceSubtypeV1Request machine_account_subtypes.CreateSourceSubtypeV1Request
    if err := json.Unmarshal(createsourcesubtypev1requestJson, &createSourceSubtypeV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateSourceSubtypeV1Request(createSourceSubtypeV1Request).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateSourceSubtypeV1Request(createSourceSubtypeV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtypeV1`: SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.CreateSourceSubtypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-source-subtype-v2
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **createSourceSubtypeV2Request** | [**CreateSourceSubtypeV2Request**](../models/create-source-subtype-v2-request) |  | 

### Return type

[**SourceSubtypeV2**](../models/source-subtype-v2)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    createsourcesubtypev2requestJson := []byte(`{
          "targetName" : "Active Directory",
          "targetId" : "active-directory",
          "displayName" : "Service Account",
          "description" : "Accounts used by automated services.",
          "targetType" : "CONNECTOR",
          "type" : "MACHINE",
          "classification" : "MACHINE",
          "technicalName" : "service-account"
        }`) // CreateSourceSubtypeV2Request | 

    var createSourceSubtypeV2Request machine_account_subtypes.CreateSourceSubtypeV2Request
    if err := json.Unmarshal(createsourcesubtypev2requestJson, &createSourceSubtypeV2Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeV2(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateSourceSubtypeV2Request(createSourceSubtypeV2Request).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeV2(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateSourceSubtypeV2Request(createSourceSubtypeV2Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtypeV2`: SourceSubtypeV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.CreateSourceSubtypeV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-account-subtype-v1
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
Delete subtype by ID
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountSubtypeV1Request struct via the builder pattern


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
    subtypeId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineAccountSubtypesAPI.DeleteMachineAccountSubtypeV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineAccountSubtypesAPI.DeleteMachineAccountSubtypeV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.DeleteMachineAccountSubtypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-machine-account-subtype-v2
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountSubtypeV2Request struct via the builder pattern


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
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineAccountSubtypesAPI.DeleteMachineAccountSubtypeV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineAccountSubtypesAPI.DeleteMachineAccountSubtypeV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.DeleteMachineAccountSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-source-subtype-provisioning-policy-v2
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSourceSubtypeProvisioningPolicyV2Request struct via the builder pattern


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
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MachineAccountSubtypesAPI.DeleteSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.MachineAccountSubtypesAPI.DeleteSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.DeleteSourceSubtypeProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-machine-account-subtype-approval-config-v1
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
Machine Subtype Approval Config
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | machine subtype id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountSubtypeApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

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
    subtypeId := `ef38f94347e94562b5bb8424a56498d8` // string | machine subtype id. # string | machine subtype id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfigV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfigV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountSubtypeApprovalConfigV1`: MachineAccountSubtypeConfigDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.GetMachineAccountSubtypeApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-subtype-by-id-v1
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
Get subtype by ID
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSubtypeByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    subtypeId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeByIdV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeByIdV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetSourceSubtypeByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSubtypeByIdV1`: SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.GetSourceSubtypeByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-subtype-by-id-v2
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
Get subtype by ID
Get a machine account subtype of any tier by subtype ID. The response may include `target.supportsProvisioning`.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSubtypeByIdV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**SourceSubtypeV2**](../models/source-subtype-v2)

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
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeByIdV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeByIdV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetSourceSubtypeByIdV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSubtypeByIdV2`: SourceSubtypeV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.GetSourceSubtypeByIdV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-source-subtype-provisioning-policy-v2
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
Get subtype provisioning policy
Get the machine account creation provisioning policy of a subtype of any tier. Returns `404` when the subtype has
no provisioning policy.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceSubtypeProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceId** | **string** | ID of the source the subtype belongs to. Supply it for &#x60;SOURCE&#x60; subtypes so that a policy stored with the source can be found. | 

### Return type

[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

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
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) # string | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SourceId(sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSubtypeProvisioningPolicyV2`: SubtypeProvisioningPolicy
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-source-subtype-targets-v2
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
List subtype targets
List the targets that have machine account subtypes, with subtype and source counts for each.

A `targetType` filter is required. `targetType eq "CONNECTOR"` returns one item per connector type.
`targetType eq "SOURCE"` returns one item per source subtype. A missing or unsupported `targetType` filter returns
`400`.

The caller needs the `idn:source-subtypes:read` right.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourceSubtypeTargetsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A &#x60;targetType&#x60; filter with the value &#x60;CONNECTOR&#x60; or &#x60;SOURCE&#x60; is required. | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. | 

### Return type

[**[]SubtypeTargetSummary**](../models/subtype-target-summary)

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
    filters := `targetType eq "CONNECTOR"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required. # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A `targetType` filter with the value `CONNECTOR` or `SOURCE` is required.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `-subtypeCount` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypeTargetsV2(context.Background()).Filters(filters).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypeTargetsV2(context.Background()).Filters(filters).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.ListSourceSubtypeTargetsV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSourceSubtypeTargetsV2`: []SubtypeTargetSummary
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.ListSourceSubtypeTargetsV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-source-subtypes-v1
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
Retrieve all subtypes
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourceSubtypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    filters := `displayName eq "sail"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
    sorters := `displayName` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional) # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.ListSourceSubtypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSourceSubtypesV1`: []SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.ListSourceSubtypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-source-subtypes-v2
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourceSubtypesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceId** | **string** | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. | 
 **effectiveSet** | **bool** | Controls what is returned for &#x60;sourceId&#x60;. When &#x60;true&#x60;, which is the default when &#x60;sourceId&#x60; is supplied, the API returns the source&#39;s effective subtypes across both tiers. When &#x60;false&#x60;, the API returns only the subtypes defined for the source. Passing &#x60;effectiveSet&#x3D;true&#x60; explicitly without &#x60;sourceId&#x60; returns &#x60;400&#x60;. | [default to true]
 **targetType** | **string** | Returns only effective subtypes of this tier. Requires &#x60;sourceId&#x60;, and cannot be combined with &#x60;effectiveSet&#x3D;false&#x60;; otherwise the API returns &#x60;400&#x60;. | 
 **includeConfigs** | **bool** | When &#x60;true&#x60;, each item includes a summary of its machine account creation configuration in &#x60;config&#x60;. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with &#x60;sourceId&#x60; unless &#x60;effectiveSet&#x3D;false&#x60;; otherwise the API returns &#x60;400&#x60;. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** | 

### Return type

[**[]SourceSubtypeV2WithConfig**](../models/source-subtype-v2-with-config)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. (optional) # string | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. (optional)
    effectiveSet := true // bool | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`. (optional) (default to true) # bool | Controls what is returned for `sourceId`. When `true`, which is the default when `sourceId` is supplied, the API returns the source's effective subtypes across both tiers. When `false`, the API returns only the subtypes defined for the source. Passing `effectiveSet=true` explicitly without `sourceId` returns `400`. (optional) (default to true)
    targetType := `CONNECTOR` // string | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`. (optional) # string | Returns only effective subtypes of this tier. Requires `sourceId`, and cannot be combined with `effectiveSet=false`; otherwise the API returns `400`. (optional)
    includeConfigs := false // bool | When `true`, each item includes a summary of its machine account creation configuration in `config`. (optional) (default to false) # bool | When `true`, each item includes a summary of its machine account creation configuration in `config`. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `targetType eq "CONNECTOR"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with `sourceId` unless `effectiveSet=false`; otherwise the API returns `400`. (optional)
    sorters := `displayName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).SourceId(sourceId).EffectiveSet(effectiveSet).TargetType(targetType).IncludeConfigs(includeConfigs).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.ListSourceSubtypesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSourceSubtypesV2`: []SourceSubtypeV2WithConfig
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.ListSourceSubtypesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## load-bulk-source-subtypes-v1
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
Bulk Retrieve of Source Subtypes
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/load-bulk-source-subtypes-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLoadBulkSourceSubtypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** |  | 

### Return type

[**[]SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | 

    var requestBody []machine_account_subtypes.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.LoadBulkSourceSubtypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.LoadBulkSourceSubtypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.LoadBulkSourceSubtypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LoadBulkSourceSubtypesV1`: []SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.LoadBulkSourceSubtypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-machine-account-subtype-v1
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
Patch subtype by ID
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchMachineAccountSubtypeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]map[string]interface\{\}** | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**SourceSubtypeWithSource**](../models/source-subtype-with-source)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    subtypeId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(`[{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]`) // []map[string]interface{} | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []machine_account_subtypes.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchMachineAccountSubtypeV1`: SourceSubtypeWithSource
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-machine-account-subtype-v2
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchMachineAccountSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**SourceSubtypeV2**](../models/source-subtype-v2)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/displayName","value":"Service Account"},{"op":"replace","path":"/description","value":"Accounts used by automated services."}]`) // []JsonPatchOperation | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []machine_account_subtypes.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchMachineAccountSubtypeV2`: SourceSubtypeV2
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.PatchMachineAccountSubtypeV2`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-source-subtype-provisioning-policy-v2
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSourceSubtypeProvisioningPolicyV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**SubtypeProvisioningPolicy**](../models/subtype-provisioning-policy)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | The ID of the subtype. # string | The ID of the subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/description","value":"Fields collected when creating a service account."}]`) // []JsonPatchOperation | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []machine_account_subtypes.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.PatchSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.PatchSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.PatchSourceSubtypeProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSourceSubtypeProvisioningPolicyV2`: SubtypeProvisioningPolicy
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.PatchSourceSubtypeProvisioningPolicyV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-machine-account-subtype-approval-config-v1
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
Machine Subtype Approval Config
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-subtype-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | machine account subtype ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMachineAccountSubtypeApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | The JSONPatch payload used to update the object. | 

### Return type

[**MachineAccountSubtypeConfigDto**](../models/machine-account-subtype-config-dto)

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
    machine_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/machine_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    subtypeId := `00eebcf881994e419d72e757fd30dc0e` // string | machine account subtype ID. # string | machine account subtype ID.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | The JSONPatch payload used to update the object.

    var jsonPatchOperation []machine_account_subtypes.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfigV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfigV1(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateMachineAccountSubtypeApprovalConfigV1`: MachineAccountSubtypeConfigDto
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountSubtypesAPI.UpdateMachineAccountSubtypeApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

