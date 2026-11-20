# MachineAccountSubtypes

# MachineAccountSubtypesAPI
  Use this API to get, update, and delete machine account subtypes. V2 paths are experimental
and require the &#x60;X-SailPoint-Experimental&#x60; header.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype-override-v2**](#create-source-subtype-override-v2) | **Post** `/source-subtypes/v2/{id}/overrides` | Create a source-tier override
[**create-source-subtype-provisioning-policy-v2**](#create-source-subtype-provisioning-policy-v2) | **Post** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**create-source-subtype-v1**](#create-source-subtype-v1) | **Post** `/source-subtypes/v1` | Create subtype
[**create-source-subtype-v2**](#create-source-subtype-v2) | **Post** `/source-subtypes/v2` | Create a tiered subtype
[**delete-machine-account-subtype-v1**](#delete-machine-account-subtype-v1) | **Delete** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**delete-machine-account-subtype-v2**](#delete-machine-account-subtype-v2) | **Delete** `/source-subtypes/v2/{id}` | Delete tiered subtype by ID
[**delete-source-subtype-provisioning-policy-v2**](#delete-source-subtype-provisioning-policy-v2) | **Delete** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**get-machine-account-subtype-approval-config-v1**](#get-machine-account-subtype-approval-config-v1) | **Get** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id-v1**](#get-source-subtype-by-id-v1) | **Get** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**get-source-subtype-by-id-v2**](#get-source-subtype-by-id-v2) | **Get** `/source-subtypes/v2/{id}` | Get tiered subtype by ID
[**get-source-subtype-provisioning-policy-v2**](#get-source-subtype-provisioning-policy-v2) | **Get** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**list-source-subtype-targets-v2**](#list-source-subtype-targets-v2) | **Get** `/source-subtypes/v2/targets` | List subtype targets
[**list-source-subtypes-v1**](#list-source-subtypes-v1) | **Get** `/source-subtypes/v1` | Retrieve all subtypes
[**list-source-subtypes-v2**](#list-source-subtypes-v2) | **Get** `/source-subtypes/v2` | Retrieve all tiered subtypes
[**load-bulk-source-subtypes-v1**](#load-bulk-source-subtypes-v1) | **Post** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype-v1**](#patch-machine-account-subtype-v1) | **Patch** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**patch-machine-account-subtype-v2**](#patch-machine-account-subtype-v2) | **Patch** `/source-subtypes/v2/{id}` | Patch tiered subtype by ID
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

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | CONNECTOR-tier subtype to snapshot onto the source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeOverrideV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceSubtypeOverrideRequest** | [**SourceSubtypeOverrideRequest**](../models/source-subtype-override-request) |  | 

### Return type

[**SubtypeWithTarget**](../models/subtype-with-target)

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
    id := `43bdd144-4b17-4fce-a744-17c7fd3e717b` // string | CONNECTOR-tier subtype to snapshot onto the source. # string | CONNECTOR-tier subtype to snapshot onto the source.
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
    // response from `CreateSourceSubtypeOverrideV2`: SubtypeWithTarget
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
 **provisioningPolicyDto** | [**ProvisioningPolicyDto**](../models/provisioning-policy-dto) |  | 
 **useDefaultFields** | **bool** | When &#x60;true&#x60; and the request body has no &#x60;fields&#x60;, a &#x60;CONNECTOR&#x60; subtype&#39;s policy is created with the connector&#39;s default account-creation fields. Ignored for &#x60;SOURCE&#x60; subtypes. | [default to true]

### Return type

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

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
    provisioningpolicydtoJson := []byte(`{
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
        }`) // ProvisioningPolicyDto | 
    useDefaultFields := true // bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes. (optional) (default to true) # bool | When `true` and the request body has no `fields`, a `CONNECTOR` subtype's policy is created with the connector's default account-creation fields. Ignored for `SOURCE` subtypes. (optional) (default to true)

    var provisioningPolicyDto machine_account_subtypes.ProvisioningPolicyDto
    if err := json.Unmarshal(provisioningpolicydtoJson, &provisioningPolicyDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).ProvisioningPolicyDto(provisioningPolicyDto).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).ProvisioningPolicyDto(provisioningPolicyDto).UseDefaultFields(useDefaultFields).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtypeProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtypeProvisioningPolicyV2`: ProvisioningPolicyDto
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourceSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sourceSubtypeV2** | [**SourceSubtypeV2**](../models/source-subtype-v2) |  | 

### Return type

[**SubtypeWithTarget**](../models/subtype-with-target)

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
    sourcesubtypev2Json := []byte(`{
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
        }`) // SourceSubtypeV2 | 

    var sourceSubtypeV2 machine_account_subtypes.SourceSubtypeV2
    if err := json.Unmarshal(sourcesubtypev2Json, &sourceSubtypeV2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeV2(context.Background()).XSailPointExperimental(xSailPointExperimental).SourceSubtypeV2(sourceSubtypeV2).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.CreateSourceSubtypeV2(context.Background()).XSailPointExperimental(xSailPointExperimental).SourceSubtypeV2(sourceSubtypeV2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.CreateSourceSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSourceSubtypeV2`: SubtypeWithTarget
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
Deletes the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Missing subtype and missing right both return **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


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
Get tiered subtype by ID
Returns one machine account subtype by id, including whether its target can provision accounts.

Unknown id returns **404**. A caller without the required right also receives **404**. If
provisioning support cannot be determined, the API returns **503**. When the experimental
header is missing, or when tiered subtype configuration is not enabled, the endpoint returns
**404**.


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

[**SubtypeWithTargetProvisioning**](../models/subtype-with-target-provisioning)

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
    // response from `GetSourceSubtypeByIdV2`: SubtypeWithTargetProvisioning
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
Returns the machine account creation provisioning policy for a subtype of any tier. Returns
**404** when the subtype has no provisioning policy.

For a `SOURCE` subtype, pass `sourceId` so a policy stored on that source can be found.

The caller needs `idn:source-subtypes:read`. A malformed id returns **400**. When the
experimental header is missing, or when tiered subtype configuration is not enabled, the
endpoint returns **404**.


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
 **sourceId** | **string** | ID of the source the subtype belongs to. Supply it for &#x60;SOURCE&#x60; subtypes so that a policy stored with the source can be found. | [default to &quot;&quot;]

### Return type

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) (default to "") # string | ID of the source the subtype belongs to. Supply it for `SOURCE` subtypes so that a policy stored with the source can be found. (optional) (default to "")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SourceId(sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.GetSourceSubtypeProvisioningPolicyV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourceSubtypeProvisioningPolicyV2`: ProvisioningPolicyDto
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
Lists per-target subtype counts. Connector-tier rows are grouped by connector type.
Source-tier rows are returned 1:1 with each source-tier subtype.

`filters` must include `targetType eq "CONNECTOR"` or `targetType eq "SOURCE"`. Missing or
blank `targetType` returns **400**. `CONNECTOR_VARIANT` and unknown values return **400**.
Filter and sort fields are independent of the subtype list API. Default sort is `targetName`
ascending. `lastModified` is response-only and is not filterable or sortable.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourceSubtypeTargetsV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw* | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. | [default to &quot;targetName&quot;]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

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
    filters := `targetType eq "CONNECTOR"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw* # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `targetName` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. (optional) (default to "targetName") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. (optional) (default to "targetName")
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypeTargetsV2(context.Background()).Filters(filters).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypeTargetsV2(context.Background()).Filters(filters).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Count(count).Limit(limit).Offset(offset).Execute()
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSourceSubtypesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. | 
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. | [default to &quot;&quot;]
 **sourceId** | **string** | Source scope. When supplied, omitted &#x60;effectiveSet&#x60; defaults to &#x60;true&#x60;. Unknown source returns **404**. Empty means the parameter was omitted. | [default to &quot;&quot;]
 **effectiveSet** | **bool** | When &#x60;true&#x60; with &#x60;sourceId&#x60;, return the effective subtype set for that source. When &#x60;false&#x60; with &#x60;sourceId&#x60;, return only that source&#39;s raw SOURCE-tier rows. &#x60;true&#x60; without &#x60;sourceId&#x60; returns **400**. Combining with &#x60;filters&#x60; returns **400**. | [default to true]
 **targetType** | **string** | Winner-tier cut on the effective set only. &#x60;CONNECTOR&#x60; returns inherited connector winners. &#x60;SOURCE&#x60; returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when &#x60;effectiveSet&#x60; is &#x60;false&#x60; or &#x60;sourceId&#x60; is omitted. | 
 **includeConfigs** | **bool** | When &#x60;true&#x60;, each &#x60;MACHINE&#x60; subtype with a stored machine-account-create config includes slim &#x60;config.machineAccountCreate.accountCreateEnabled&#x60;. Default &#x60;false&#x60; omits &#x60;config&#x60;. | [default to false]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]SubtypeWithTargetAndConfig**](../models/subtype-with-target-and-config)

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
    filters := `targetType eq "CONNECTOR"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. (optional)
    sorters := `displayName` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. (optional) (default to "") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. (optional) (default to "")
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted. (optional) (default to "") # string | Source scope. When supplied, omitted `effectiveSet` defaults to `true`. Unknown source returns **404**. Empty means the parameter was omitted. (optional) (default to "")
    effectiveSet := true // bool | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**. (optional) (default to true) # bool | When `true` with `sourceId`, return the effective subtype set for that source. When `false` with `sourceId`, return only that source's raw SOURCE-tier rows. `true` without `sourceId` returns **400**. Combining with `filters` returns **400**. (optional) (default to true)
    targetType := `SOURCE` // string | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted. (optional) # string | Winner-tier cut on the effective set only. `CONNECTOR` returns inherited connector winners. `SOURCE` returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when `effectiveSet` is `false` or `sourceId` is omitted. (optional)
    includeConfigs := false // bool | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`. (optional) (default to false) # bool | When `true`, each `MACHINE` subtype with a stored machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`. Default `false` omits `config`. (optional) (default to false)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountSubtypesAPI.ListSourceSubtypesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).SourceId(sourceId).EffectiveSet(effectiveSet).TargetType(targetType).IncludeConfigs(includeConfigs).Count(count).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountSubtypesAPI.ListSourceSubtypesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSourceSubtypesV2`: []SubtypeWithTargetAndConfig
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

[**SubtypeWithTarget**](../models/subtype-with-target)

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
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/displayName","value":"Non-personal accounts"},{"op":"replace","path":"/description","value":"Accounts used by automated services."}]`) // []JsonPatchOperation | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

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
    // response from `PatchMachineAccountSubtypeV2`: SubtypeWithTarget
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
Patches the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype using RFC 6902
JSON Patch.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. Missing subtype, missing policy, and missing right all return
**404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


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

[**ProvisioningPolicyDto**](../models/provisioning-policy-dto)

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
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/description","value":"Updated machine account create fields"}]`) // []JsonPatchOperation | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

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
    // response from `PatchSourceSubtypeProvisioningPolicyV2`: ProvisioningPolicyDto
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

