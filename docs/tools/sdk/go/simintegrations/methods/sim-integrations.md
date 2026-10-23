# SIMIntegrations

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

[API Spec](https://developer.sailpoint.com/docs/api/create-sim-integration-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSIMIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    sim_integrations "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    simintegrationdetailsJson := []byte(`{
          "cluster" : "xyzzy999",
          "statusMap" : "{\"closed_cancelled\":\"Failed\",\"closed_complete\":\"Committed\",\"closed_incomplete\":\"Failed\",\"closed_rejected\":\"Failed\",\"in_process\":\"Queued\",\"requested\":\"Queued\"}",
          "request" : "{\"description\":\"SailPoint Access Request,\",\"req_description\":\"The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,\",\"req_short_description\":\"SailPoint New Access Request Created from IdentityNow,\",\"short_description\":\"SailPoint Access Request $!plan.arguments.identityRequestId\"}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2015-05-28T14:07:17Z",
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
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

    var simIntegrationDetails sim_integrations.SimIntegrationDetails
    if err := json.Unmarshal(simintegrationdetailsJson, &simIntegrationDetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.CreateSIMIntegrationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).SimIntegrationDetails(simIntegrationDetails).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.CreateSIMIntegrationV1(context.Background()).XSailPointExperimental(xSailPointExperimental).SimIntegrationDetails(simIntegrationDetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.CreateSIMIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSIMIntegrationV1`: ServiceDeskIntegrationDto
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

[API Spec](https://developer.sailpoint.com/docs/api/delete-sim-integration-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integration-v-1)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    // response from `GetSIMIntegrationV1`: ServiceDeskIntegrationDto
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

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integrations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSIMIntegrationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

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
    resp, r, err := apiClient.SIMIntegrationsAPI.GetSIMIntegrationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.GetSIMIntegrationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.GetSIMIntegrationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSIMIntegrationsV1`: []ServiceDeskIntegrationDto
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

[API Spec](https://developer.sailpoint.com/docs/api/patch-before-provisioning-rule-v-1)

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
    sim_integrations "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `12345` // string | SIM integration id # string | SIM integration id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchJson := []byte(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) // JsonPatch | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

    var jsonPatch sim_integrations.JsonPatch
    if err := json.Unmarshal(jsonpatchJson, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PatchBeforeProvisioningRuleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchBeforeProvisioningRuleV1`: ServiceDeskIntegrationDto
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

[API Spec](https://developer.sailpoint.com/docs/api/patch-sim-attributes-v-1)

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
    sim_integrations "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `12345` // string | SIM integration id # string | SIM integration id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchJson := []byte(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) // JsonPatch | The JsonPatch object that describes the changes of SIM

    var jsonPatch sim_integrations.JsonPatch
    if err := json.Unmarshal(jsonpatchJson, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.PatchSIMAttributesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.PatchSIMAttributesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PatchSIMAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSIMAttributesV1`: ServiceDeskIntegrationDto
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

[API Spec](https://developer.sailpoint.com/docs/api/put-sim-integration-v-1)

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
    sim_integrations "github.com/sailpoint-oss/golang-sdk/v3/sim_integrations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `12345` // string | The id of the integration. # string | The id of the integration.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    simintegrationdetailsJson := []byte(`{
          "cluster" : "xyzzy999",
          "statusMap" : "{\"closed_cancelled\":\"Failed\",\"closed_complete\":\"Committed\",\"closed_incomplete\":\"Failed\",\"closed_rejected\":\"Failed\",\"in_process\":\"Queued\",\"requested\":\"Queued\"}",
          "request" : "{\"description\":\"SailPoint Access Request,\",\"req_description\":\"The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,\",\"req_short_description\":\"SailPoint New Access Request Created from IdentityNow,\",\"short_description\":\"SailPoint Access Request $!plan.arguments.identityRequestId\"}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2015-05-28T14:07:17Z",
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
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

    var simIntegrationDetails sim_integrations.SimIntegrationDetails
    if err := json.Unmarshal(simintegrationdetailsJson, &simIntegrationDetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SIMIntegrationsAPI.PutSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SimIntegrationDetails(simIntegrationDetails).Execute()
	  //resp, r, err := apiClient.SIMIntegrationsAPI.PutSIMIntegrationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).SimIntegrationDetails(simIntegrationDetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SIMIntegrationsAPI.PutSIMIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSIMIntegrationV1`: ServiceDeskIntegrationDto
    fmt.Fprintf(os.Stdout, "Response from `SIMIntegrationsAPI.PutSIMIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

