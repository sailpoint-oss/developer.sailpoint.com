---
id: v1-sim-integrations
title: SIMIntegrations
pagination_label: SIMIntegrations
sidebar_label: SIMIntegrations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SIMIntegrations', 'V1SIMIntegrations'] 
slug: /tools/sdk/go/simintegrations/methods/sim-integrations
tags: ['SDK', 'Software Development Kit', 'SIMIntegrations', 'V1SIMIntegrations']
---

# SIMIntegrationsAPI
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint&#39;s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sim-integration-v1**](#create-sim-integration-v1) | **Post** `/sim-integrations/v1` | Create new sim integration
[**delete-sim-integration-v1**](#delete-sim-integration-v1) | **Delete** `/sim-integrations/v1/{id}` | Delete a sim integration
[**get-sim-integration-v1**](#get-sim-integration-v1) | **Get** `/sim-integrations/v1/{id}` | Get a sim integration details.
[**get-sim-integrations-v1**](#get-sim-integrations-v1) | **Get** `/sim-integrations/v1` | List the existing sim integrations.
[**patch-before-provisioning-rule-v1**](#patch-before-provisioning-rule-v1) | **Patch** `/sim-integrations/v1/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**patch-sim-attributes-v1**](#patch-sim-attributes-v1) | **Patch** `/sim-integrations/v1/{id}` | Patch a sim attribute.
[**put-sim-integration-v1**](#put-sim-integration-v1) | **Put** `/sim-integrations/v1/{id}` | Update an existing sim integration


## create-sim-integration-v1
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
Create new sim integration
Create a new SIM Integrations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sim-integration-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSIMIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **simintegrationdetails** | [**Simintegrationdetails**](../models/simintegrationdetails) | DTO containing the details of the SIM integration | 

### Return type

[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    simintegrationdetails := []byte(``) // Simintegrationdetails | DTO containing the details of the SIM integration

    var simintegrationdetails v1.Simintegrationdetails
    if err := json.Unmarshal(simintegrationdetails, &simintegrationdetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.CreateSIMIntegrationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Simintegrationdetails(simintegrationdetails).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.CreateSIMIntegrationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Simintegrationdetails(simintegrationdetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.CreateSIMIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSIMIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.CreateSIMIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-sim-integration-v1
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
Delete a sim integration
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-sim-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the integration to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSIMIntegrationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    id := `12345` // string | The id of the integration to delete. # string | The id of the integration to delete.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SIMIntegrationsAPI.DeleteSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.SIMIntegrationsAPI.DeleteSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.DeleteSIMIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-sim-integration-v1
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
Get a sim integration details.
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sim-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSIMIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    id := `12345` // string | The id of the integration. # string | The id of the integration.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.GetSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.GetSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.GetSIMIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSIMIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.GetSIMIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sim-integrations-v1
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
List the existing sim integrations.
List the existing SIM integrations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sim-integrations-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSIMIntegrationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.GetSIMIntegrationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.GetSIMIntegrationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.GetSIMIntegrationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSIMIntegrationsV1`: []Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.GetSIMIntegrationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-before-provisioning-rule-v1
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
Patch a sim beforeprovisioningrule attribute.
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-before-provisioning-rule-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | SIM integration id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchBeforeProvisioningRuleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonpatch** | [**Jsonpatch**](../models/jsonpatch) | The JsonPatch object that describes the changes of SIM beforeProvisioningRule. | 

### Return type

[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    id := `12345` // string | SIM integration id # string | SIM integration id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatch := []byte(``) // Jsonpatch | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

    var jsonpatch v1.Jsonpatch
    if err := json.Unmarshal(jsonpatch, &jsonpatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Jsonpatch(jsonpatch).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Jsonpatch(jsonpatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchBeforeProvisioningRuleV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-sim-attributes-v1
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
Patch a sim attribute.
Patch a SIM attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-sim-attributes-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | SIM integration id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSIMAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonpatch** | [**Jsonpatch**](../models/jsonpatch) | The JsonPatch object that describes the changes of SIM | 

### Return type

[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    id := `12345` // string | SIM integration id # string | SIM integration id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatch := []byte(``) // Jsonpatch | The JsonPatch object that describes the changes of SIM

    var jsonpatch v1.Jsonpatch
    if err := json.Unmarshal(jsonpatch, &jsonpatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.PatchSIMAttributesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Jsonpatch(jsonpatch).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.PatchSIMAttributesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Jsonpatch(jsonpatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PatchSIMAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSIMAttributesV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PatchSIMAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-sim-integration-v1
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
Update an existing sim integration
Update an existing SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-sim-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSIMIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **simintegrationdetails** | [**Simintegrationdetails**](../models/simintegrationdetails) | The full DTO of the integration containing the updated model | 

### Return type

[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
)

func main() {
    id := `12345` // string | The id of the integration. # string | The id of the integration.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    simintegrationdetails := []byte(``) // Simintegrationdetails | The full DTO of the integration containing the updated model

    var simintegrationdetails v1.Simintegrationdetails
    if err := json.Unmarshal(simintegrationdetails, &simintegrationdetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.PutSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Simintegrationdetails(simintegrationdetails).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.PutSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Simintegrationdetails(simintegrationdetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PutSIMIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSIMIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PutSIMIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

