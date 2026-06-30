---
id: v1-service-desk-integration
title: ServiceDeskIntegration
pagination_label: ServiceDeskIntegration
sidebar_label: ServiceDeskIntegration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceDeskIntegration', 'V1ServiceDeskIntegration'] 
slug: /tools/sdk/go/servicedeskintegration/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegration', 'V1ServiceDeskIntegration']
---

# ServiceDeskIntegrationAPI
  Use this API to build an integration between Identity Security Cloud and a service desk ITSM (IT service management) solution. 
Once an administrator builds this integration between Identity Security Cloud and a service desk, users can use Identity Security Cloud to raise and track tickets that are synchronized between Identity Security Cloud and the service desk. 

In Identity Security Cloud, administrators can create a service desk integration (sometimes also called an SDIM, or Service Desk Integration Module) by going to Admin &gt; Connections &gt; Service Desk and selecting &#39;Create.&#39;

To create a Generic Service Desk integration, for example, administrators must provide the required information on the General Settings page, the Connectivity and Authentication information, Ticket Creation information, Status Mapping information, and Requester Source information on the Configure page. 
Refer to [Integrating SailPoint with Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html) for more information about the process of setting up a Generic Service Desk in Identity Security Cloud.

Administrators can create various service desk integrations, all with their own nuances. 
The following service desk integrations are available: 

- [Atlassian Cloud Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_cloud/help/integrating_jira_cloud_sd/introduction.html)

- [Atlassian Server Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_server/help/integrating_jira_server_sd/introduction.html)

- [BMC Helix ITSM Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_ITSM_sd/help/integrating_bmc_helix_itsm_sd/intro.html)

- [BMC Helix Remedyforce Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_remedyforce_sd/help/integrating_bmc_helix_remedyforce_sd/intro.html)

- [Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html)

- [ServiceNow Service Desk](https://documentation.sailpoint.com/connectors/servicenow/sdim/help/integrating_servicenow_sdim/intro.html)

- [Zendesk Service Desk](https://documentation.sailpoint.com/connectors/zendesk/help/integrating_zendesk_sd/introduction.html)
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-service-desk-integration-v1**](#create-service-desk-integration-v1) | **Post** `/service-desk-integrations/v1` | Create new service desk integration
[**delete-service-desk-integration-v1**](#delete-service-desk-integration-v1) | **Delete** `/service-desk-integrations/v1/{id}` | Delete a service desk integration
[**get-service-desk-integration-template-v1**](#get-service-desk-integration-template-v1) | **Get** `/service-desk-integrations/v1/templates/{scriptName}` | Service desk integration template by scriptname
[**get-service-desk-integration-types-v1**](#get-service-desk-integration-types-v1) | **Get** `/service-desk-integrations/v1/types` | List service desk integration types
[**get-service-desk-integration-v1**](#get-service-desk-integration-v1) | **Get** `/service-desk-integrations/v1/{id}` | Get a service desk integration
[**get-service-desk-integrations-v1**](#get-service-desk-integrations-v1) | **Get** `/service-desk-integrations/v1` | List existing service desk integrations
[**get-status-check-details-v1**](#get-status-check-details-v1) | **Get** `/service-desk-integrations/v1/status-check-configuration` | Get the time check configuration
[**patch-service-desk-integration-v1**](#patch-service-desk-integration-v1) | **Patch** `/service-desk-integrations/v1/{id}` | Patch a service desk integration
[**put-service-desk-integration-v1**](#put-service-desk-integration-v1) | **Put** `/service-desk-integrations/v1/{id}` | Update a service desk integration
[**update-status-check-details-v1**](#update-status-check-details-v1) | **Put** `/service-desk-integrations/v1/status-check-configuration` | Update the time check configuration


## create-service-desk-integration-v1
Create new service desk integration
Create a new Service Desk integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-service-desk-integration-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateServiceDeskIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **servicedeskintegrationdto** | [**Servicedeskintegrationdto**](../models/servicedeskintegrationdto) | The specifics of a new integration to create | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    servicedeskintegrationdto := []byte(``) // Servicedeskintegrationdto | The specifics of a new integration to create

    var servicedeskintegrationdto v1.Servicedeskintegrationdto
    if err := json.Unmarshal(servicedeskintegrationdto, &servicedeskintegrationdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.CreateServiceDeskIntegrationV1(context.Background()).Servicedeskintegrationdto(servicedeskintegrationdto).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.CreateServiceDeskIntegrationV1(context.Background()).Servicedeskintegrationdto(servicedeskintegrationdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.CreateServiceDeskIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateServiceDeskIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.CreateServiceDeskIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-service-desk-integration-v1
Delete a service desk integration
Delete an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-service-desk-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of Service Desk integration to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteServiceDeskIntegrationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    id := `anId` // string | ID of Service Desk integration to delete # string | ID of Service Desk integration to delete

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ServiceDeskIntegrationAPI.DeleteServiceDeskIntegrationV1(context.Background(), id).Execute()
	  //r, err := apiClient.ServiceDeskIntegrationAPI.DeleteServiceDeskIntegrationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.DeleteServiceDeskIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-service-desk-integration-template-v1
Service desk integration template by scriptname
This API endpoint returns an existing Service Desk integration template by scriptName.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the Service Desk integration template to get | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Servicedeskintegrationtemplatedto**](../models/servicedeskintegrationtemplatedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the Service Desk integration template to get # string | The scriptName value of the Service Desk integration template to get

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplateV1(context.Background(), scriptName).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplateV1(context.Background(), scriptName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceDeskIntegrationTemplateV1`: Servicedeskintegrationtemplatedto
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-service-desk-integration-types-v1
List service desk integration types
This API endpoint returns the current list of supported Service Desk integration types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-types-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationTypesV1Request struct via the builder pattern


### Return type

[**[]Servicedeskintegrationtemplatetype**](../models/servicedeskintegrationtemplatetype)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypesV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceDeskIntegrationTypesV1`: []Servicedeskintegrationtemplatetype
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-service-desk-integration-v1
Get a service desk integration
Get an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Service Desk integration to get | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    id := `anId` // string | ID of the Service Desk integration to get # string | ID of the Service Desk integration to get

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceDeskIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-service-desk-integrations-v1
List existing service desk integrations
Get a list of Service Desk integration objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integrations-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `name eq "John Doe"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationsV1(context.Background()).Offset(offset).Limit(limit).Sorters(sorters).Filters(filters).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetServiceDeskIntegrationsV1`: []Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-status-check-details-v1
Get the time check configuration
Get the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-status-check-details-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatusCheckDetailsV1Request struct via the builder pattern


### Return type

[**Queuedcheckconfigdetails**](../models/queuedcheckconfigdetails)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetStatusCheckDetailsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.GetStatusCheckDetailsV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetStatusCheckDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStatusCheckDetailsV1`: Queuedcheckconfigdetails
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetStatusCheckDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-service-desk-integration-v1
Patch a service desk integration
Update an existing Service Desk integration by ID with a PATCH request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-service-desk-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Service Desk integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchServiceDeskIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed.  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    id := `anId` // string | ID of the Service Desk integration to update # string | ID of the Service Desk integration to update
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.PatchServiceDeskIntegrationV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.PatchServiceDeskIntegrationV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.PatchServiceDeskIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchServiceDeskIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.PatchServiceDeskIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-service-desk-integration-v1
Update a service desk integration
Update an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-service-desk-integration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Service Desk integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutServiceDeskIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **servicedeskintegrationdto** | [**Servicedeskintegrationdto**](../models/servicedeskintegrationdto) | The specifics of the integration to update | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    id := `anId` // string | ID of the Service Desk integration to update # string | ID of the Service Desk integration to update
    servicedeskintegrationdto := []byte(``) // Servicedeskintegrationdto | The specifics of the integration to update

    var servicedeskintegrationdto v1.Servicedeskintegrationdto
    if err := json.Unmarshal(servicedeskintegrationdto, &servicedeskintegrationdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.PutServiceDeskIntegrationV1(context.Background(), id).Servicedeskintegrationdto(servicedeskintegrationdto).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.PutServiceDeskIntegrationV1(context.Background(), id).Servicedeskintegrationdto(servicedeskintegrationdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.PutServiceDeskIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutServiceDeskIntegrationV1`: Servicedeskintegrationdto
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.PutServiceDeskIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-status-check-details-v1
Update the time check configuration
Update the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-status-check-details-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStatusCheckDetailsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queuedcheckconfigdetails** | [**Queuedcheckconfigdetails**](../models/queuedcheckconfigdetails) | The modified time check configuration | 

### Return type

[**Queuedcheckconfigdetails**](../models/queuedcheckconfigdetails)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/service_desk_integration"
)

func main() {
    queuedcheckconfigdetails := []byte(``) // Queuedcheckconfigdetails | The modified time check configuration

    var queuedcheckconfigdetails v1.Queuedcheckconfigdetails
    if err := json.Unmarshal(queuedcheckconfigdetails, &queuedcheckconfigdetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ServiceDeskIntegrationAPI.UpdateStatusCheckDetailsV1(context.Background()).Queuedcheckconfigdetails(queuedcheckconfigdetails).Execute()
	  //resp, r, err := apiClient.ServiceDeskIntegrationAPI.UpdateStatusCheckDetailsV1(context.Background()).Queuedcheckconfigdetails(queuedcheckconfigdetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.UpdateStatusCheckDetailsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateStatusCheckDetailsV1`: Queuedcheckconfigdetails
    fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.UpdateStatusCheckDetailsV1`: %v\n", resp)
}
```

[[Back to top]](#)

