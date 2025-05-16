---
id: beta-sim-integrations
title: SIMIntegrations
pagination_label: SIMIntegrations
sidebar_label: SIMIntegrations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SIMIntegrations', 'BetaSIMIntegrations'] 
slug: /tools/sdk/go/beta/methods/sim-integrations
tags: ['SDK', 'Software Development Kit', 'SIMIntegrations', 'BetaSIMIntegrations']
---

# SIMIntegrationsAPI
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint’s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sim-integration**](#create-sim-integration) | **Post** `/sim-integrations` | Create new SIM integration
[**delete-sim-integration**](#delete-sim-integration) | **Delete** `/sim-integrations/{id}` | Delete a SIM integration
[**get-sim-integration**](#get-sim-integration) | **Get** `/sim-integrations/{id}` | Get a SIM integration details.
[**get-sim-integrations**](#get-sim-integrations) | **Get** `/sim-integrations` | List the existing SIM integrations.
[**patch-before-provisioning-rule**](#patch-before-provisioning-rule) | **Patch** `/sim-integrations/{id}/beforeProvisioningRule` | Patch a SIM beforeProvisioningRule attribute.
[**patch-sim-attributes**](#patch-sim-attributes) | **Patch** `/sim-integrations/{id}` | Patch a SIM attribute.
[**put-sim-integration**](#put-sim-integration) | **Put** `/sim-integrations/{id}` | Update an existing SIM integration


## create-sim-integration
Create new SIM integration
Create a new SIM Integrations.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-sim-integration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSIMIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simIntegrationDetails** | [**SimIntegrationDetails**](../models/sim-integration-details) | DTO containing the details of the SIM integration | 

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    simintegrationdetails := []byte(`{
          "cluster" : "xyzzy999",
          "statusMap" : "{closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued}",
          "request" : "{description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2023-01-03T21:16:22.432Z",
          "name" : "aName",
          "modified" : "2023-01-03T21:16:22.432Z",
          "description" : "Integration description",
          "attributes" : "{\"uid\":\"Walter White\",\"firstname\":\"walter\",\"cloudStatus\":\"UNREGISTERED\",\"displayName\":\"Walter White\",\"identificationNumber\":\"942\",\"lastSyncDate\":1470348809380,\"email\":\"walter@gmail.com\",\"lastname\":\"white\"}",
          "id" : "id12345",
          "type" : "ServiceNow Service Desk",
          "beforeProvisioningRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "IDENTITY"
          }
        }`) // SimIntegrationDetails | DTO containing the details of the SIM integration

    var simIntegrationDetails beta.SimIntegrationDetails
    if err := json.Unmarshal(simintegrationdetails, &simIntegrationDetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SIMIntegrationsAPI.CreateSIMIntegration(context.Background()).SimIntegrationDetails(simIntegrationDetails).Execute()
	  //resp, r, err := apiClient.Beta.SIMIntegrationsAPI.CreateSIMIntegration(context.Background()).SimIntegrationDetails(simIntegrationDetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.CreateSIMIntegration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSIMIntegration`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.CreateSIMIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-sim-integration
Delete a SIM integration
Get the details of a SIM integration. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-sim-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the integration to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSIMIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `12345` // string | The id of the integration to delete. # string | The id of the integration to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SIMIntegrationsAPI.DeleteSIMIntegration(context.Background(), id).Execute()
	  //r, err := apiClient.Beta.SIMIntegrationsAPI.DeleteSIMIntegration(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.DeleteSIMIntegration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-sim-integration
Get a SIM integration details.
Get the details of a SIM integration. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sim-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSIMIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `12345` // string | The id of the integration. # string | The id of the integration.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SIMIntegrationsAPI.GetSIMIntegration(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.SIMIntegrationsAPI.GetSIMIntegration(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.GetSIMIntegration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSIMIntegration`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.GetSIMIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sim-integrations
List the existing SIM integrations.
List the existing SIM integrations. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sim-integrations)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSIMIntegrationsRequest struct via the builder pattern


### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SIMIntegrationsAPI.GetSIMIntegrations(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.SIMIntegrationsAPI.GetSIMIntegrations(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.GetSIMIntegrations``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSIMIntegrations`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.GetSIMIntegrations`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-before-provisioning-rule
Patch a SIM beforeProvisioningRule attribute.
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-before-provisioning-rule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | SIM integration id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchBeforeProvisioningRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | The JsonPatch object that describes the changes of SIM beforeProvisioningRule. | 

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `12345` // string | SIM integration id # string | SIM integration id
    jsonpatch := []byte(`"[\n  {\n\t  \"op\": \"replace\",\n\t  \"path\": \"/description\",\n\t  \"value\": \"A new description\"\n  }\n]"`) // JsonPatch | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

    var jsonPatch beta.JsonPatch
    if err := json.Unmarshal(jsonpatch, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SIMIntegrationsAPI.PatchBeforeProvisioningRule(context.Background(), id).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.Beta.SIMIntegrationsAPI.PatchBeforeProvisioningRule(context.Background(), id).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PatchBeforeProvisioningRule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchBeforeProvisioningRule`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PatchBeforeProvisioningRule`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-sim-attributes
Patch a SIM attribute.
Patch a SIM attribute given a JsonPatch object. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-sim-attributes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | SIM integration id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSIMAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | The JsonPatch object that describes the changes of SIM | 

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `12345` // string | SIM integration id # string | SIM integration id
    jsonpatch := []byte(`"[\n  {\n\t  \"op\": \"replace\",\n\t  \"path\": \"/description\",\n\t  \"value\": \"A new description\"\n  }\n]"`) // JsonPatch | The JsonPatch object that describes the changes of SIM

    var jsonPatch beta.JsonPatch
    if err := json.Unmarshal(jsonpatch, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SIMIntegrationsAPI.PatchSIMAttributes(context.Background(), id).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.Beta.SIMIntegrationsAPI.PatchSIMAttributes(context.Background(), id).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PatchSIMAttributes``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSIMAttributes`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PatchSIMAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## put-sim-integration
Update an existing SIM integration
Update an existing SIM integration.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-sim-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSIMIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **simIntegrationDetails** | [**SimIntegrationDetails**](../models/sim-integration-details) | The full DTO of the integration containing the updated model | 

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `12345` // string | The id of the integration. # string | The id of the integration.
    simintegrationdetails := []byte(`{
          "cluster" : "xyzzy999",
          "statusMap" : "{closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued}",
          "request" : "{description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2023-01-03T21:16:22.432Z",
          "name" : "aName",
          "modified" : "2023-01-03T21:16:22.432Z",
          "description" : "Integration description",
          "attributes" : "{\"uid\":\"Walter White\",\"firstname\":\"walter\",\"cloudStatus\":\"UNREGISTERED\",\"displayName\":\"Walter White\",\"identificationNumber\":\"942\",\"lastSyncDate\":1470348809380,\"email\":\"walter@gmail.com\",\"lastname\":\"white\"}",
          "id" : "id12345",
          "type" : "ServiceNow Service Desk",
          "beforeProvisioningRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "IDENTITY"
          }
        }`) // SimIntegrationDetails | The full DTO of the integration containing the updated model

    var simIntegrationDetails beta.SimIntegrationDetails
    if err := json.Unmarshal(simintegrationdetails, &simIntegrationDetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SIMIntegrationsAPI.PutSIMIntegration(context.Background(), id).SimIntegrationDetails(simIntegrationDetails).Execute()
	  //resp, r, err := apiClient.Beta.SIMIntegrationsAPI.PutSIMIntegration(context.Background(), id).SimIntegrationDetails(simIntegrationDetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PutSIMIntegration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSIMIntegration`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PutSIMIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

