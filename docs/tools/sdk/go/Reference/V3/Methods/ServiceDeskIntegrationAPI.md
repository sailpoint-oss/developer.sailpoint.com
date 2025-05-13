---
id: service-desk-integration
title: ServiceDeskIntegration
pagination_label: ServiceDeskIntegration
sidebar_label: ServiceDeskIntegration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceDeskIntegration', 'ServiceDeskIntegration'] 
slug: /tools/sdk/go/v3/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegration', 'ServiceDeskIntegration']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-service-desk-integration**](#create-service-desk-integration) | **Post** `/service-desk-integrations` | Create new Service Desk integration
[**delete-service-desk-integration**](#delete-service-desk-integration) | **Delete** `/service-desk-integrations/{id}` | Delete a Service Desk integration
[**get-service-desk-integration**](#get-service-desk-integration) | **Get** `/service-desk-integrations/{id}` | Get a Service Desk integration
[**get-service-desk-integration-template**](#get-service-desk-integration-template) | **Get** `/service-desk-integrations/templates/{scriptName}` | Service Desk integration template by scriptName
[**get-service-desk-integration-types**](#get-service-desk-integration-types) | **Get** `/service-desk-integrations/types` | List Service Desk integration types
[**get-service-desk-integrations**](#get-service-desk-integrations) | **Get** `/service-desk-integrations` | List existing Service Desk integrations
[**get-status-check-details**](#get-status-check-details) | **Get** `/service-desk-integrations/status-check-configuration` | Get the time check configuration
[**patch-service-desk-integration**](#patch-service-desk-integration) | **Patch** `/service-desk-integrations/{id}` | Patch a Service Desk Integration
[**put-service-desk-integration**](#put-service-desk-integration) | **Put** `/service-desk-integrations/{id}` | Update a Service Desk integration
[**update-status-check-details**](#update-status-check-details) | **Put** `/service-desk-integrations/status-check-configuration` | Update the time check configuration


## create-service-desk-integration
Create new Service Desk integration
Create a new Service Desk integration.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-service-desk-integration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateServiceDeskIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceDeskIntegrationDto** | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | The specifics of a new integration to create | 

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "ownerRef" : "",
          "cluster" : "xyzzy999",
          "created" : "2024-01-17T18:45:25.994Z",
          "description" : "A very nice Service Desk integration",
          "clusterRef" : "",
          "type" : "ServiceNowSDIM",
          "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "provisioningConfig" : {
            "managedResourceRefs" : [ {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb051111",
              "name" : "My Source 1"
            }, {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb052222",
              "name" : "My Source 2"
            } ],
            "provisioningRequestExpiration" : 7,
            "noProvisioningRequests" : true,
            "universalManager" : true,
            "planInitializerScript" : {
              "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
            }
          },
          "name" : "Service Desk Integration Name",
          "modified" : "2024-02-18T18:45:25.994Z",
          "attributes" : {
            "property" : "value",
            "key" : "value"
          },
          "id" : "62945a496ef440189b1f03e3623411c8",
          "beforeProvisioningRule" : ""
        }`) // ServiceDeskIntegrationDto | The specifics of a new integration to create

  
   var serviceDeskIntegrationDto v3.ServiceDeskIntegrationDto
   if err := json.Unmarshal(data, &serviceDeskIntegrationDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.CreateServiceDeskIntegration(context.Background()).ServiceDeskIntegrationDto(serviceDeskIntegrationDto).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.CreateServiceDeskIntegration(context.Background()).ServiceDeskIntegrationDto(serviceDeskIntegrationDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.CreateServiceDeskIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateServiceDeskIntegration`: ServiceDeskIntegrationDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.CreateServiceDeskIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-service-desk-integration
Delete a Service Desk integration
Delete an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-service-desk-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of Service Desk integration to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteServiceDeskIntegrationRequest struct via the builder pattern


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
    id := `anId` // string | ID of Service Desk integration to delete # string | ID of Service Desk integration to delete

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.ServiceDeskIntegrationAPI.DeleteServiceDeskIntegration(context.Background(), id).Execute()
	//r, err := apiClient.V3.ServiceDeskIntegrationAPI.DeleteServiceDeskIntegration(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.DeleteServiceDeskIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-service-desk-integration
Get a Service Desk integration
Get an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-service-desk-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Service Desk integration to get | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationRequest struct via the builder pattern


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
    id := `anId` // string | ID of the Service Desk integration to get # string | ID of the Service Desk integration to get

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegration(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegration(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetServiceDeskIntegration`: ServiceDeskIntegrationDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## get-service-desk-integration-template
Service Desk integration template by scriptName
This API endpoint returns an existing Service Desk integration template by scriptName.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-service-desk-integration-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the Service Desk integration template to get | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServiceDeskIntegrationTemplateDto**](../models/service-desk-integration-template-dto)

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
    scriptName := `aScriptName` // string | The scriptName value of the Service Desk integration template to get # string | The scriptName value of the Service Desk integration template to get

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplate(context.Background(), scriptName).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplate(context.Background(), scriptName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetServiceDeskIntegrationTemplate`: ServiceDeskIntegrationTemplateDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## get-service-desk-integration-types
List Service Desk integration types
This API endpoint returns the current list of supported Service Desk integration types.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-service-desk-integration-types)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationTypesRequest struct via the builder pattern


### Return type

[**[]ServiceDeskIntegrationTemplateType**](../models/service-desk-integration-template-type)

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
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypes(context.Background()).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypes(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetServiceDeskIntegrationTypes`: []ServiceDeskIntegrationTemplateType
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrationTypes`: %v\n", resp)
}
```

[[Back to top]](#)

## get-service-desk-integrations
List existing Service Desk integrations
Get a list of Service Desk integration objects.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-service-desk-integrations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetServiceDeskIntegrationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `name eq "John Doe"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegrations(context.Background()).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetServiceDeskIntegrations(context.Background()).Offset(offset).Limit(limit).Sorters(sorters).Filters(filters).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetServiceDeskIntegrations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetServiceDeskIntegrations`: []ServiceDeskIntegrationDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetServiceDeskIntegrations`: %v\n", resp)
}
```

[[Back to top]](#)

## get-status-check-details
Get the time check configuration
Get the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-status-check-details)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatusCheckDetailsRequest struct via the builder pattern


### Return type

[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

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
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetStatusCheckDetails(context.Background()).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.GetStatusCheckDetails(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.GetStatusCheckDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStatusCheckDetails`: QueuedCheckConfigDetails
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.GetStatusCheckDetails`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-service-desk-integration
Patch a Service Desk Integration
Update an existing Service Desk integration by ID with a PATCH request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-service-desk-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Service Desk integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchServiceDeskIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed.  | 

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `anId` // string | ID of the Service Desk integration to update # string | ID of the Service Desk integration to update
    jsonPatchOperation := fmt.Sprintf(``) // []JsonPatchOperation | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

  
   var jsonPatchOperation v3.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.PatchServiceDeskIntegration(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.PatchServiceDeskIntegration(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.PatchServiceDeskIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchServiceDeskIntegration`: ServiceDeskIntegrationDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.PatchServiceDeskIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## put-service-desk-integration
Update a Service Desk integration
Update an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/put-service-desk-integration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Service Desk integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutServiceDeskIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **serviceDeskIntegrationDto** | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | The specifics of the integration to update | 

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `anId` // string | ID of the Service Desk integration to update # string | ID of the Service Desk integration to update
    data := []byte(`{
          "ownerRef" : "",
          "cluster" : "xyzzy999",
          "created" : "2024-01-17T18:45:25.994Z",
          "description" : "A very nice Service Desk integration",
          "clusterRef" : "",
          "type" : "ServiceNowSDIM",
          "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "provisioningConfig" : {
            "managedResourceRefs" : [ {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb051111",
              "name" : "My Source 1"
            }, {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb052222",
              "name" : "My Source 2"
            } ],
            "provisioningRequestExpiration" : 7,
            "noProvisioningRequests" : true,
            "universalManager" : true,
            "planInitializerScript" : {
              "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
            }
          },
          "name" : "Service Desk Integration Name",
          "modified" : "2024-02-18T18:45:25.994Z",
          "attributes" : {
            "property" : "value",
            "key" : "value"
          },
          "id" : "62945a496ef440189b1f03e3623411c8",
          "beforeProvisioningRule" : ""
        }`) // ServiceDeskIntegrationDto | The specifics of the integration to update

  
   var serviceDeskIntegrationDto v3.ServiceDeskIntegrationDto
   if err := json.Unmarshal(data, &serviceDeskIntegrationDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.PutServiceDeskIntegration(context.Background(), id).ServiceDeskIntegrationDto(serviceDeskIntegrationDto).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.PutServiceDeskIntegration(context.Background(), id).ServiceDeskIntegrationDto(serviceDeskIntegrationDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.PutServiceDeskIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutServiceDeskIntegration`: ServiceDeskIntegrationDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.PutServiceDeskIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## update-status-check-details
Update the time check configuration
Update the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-status-check-details)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStatusCheckDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queuedCheckConfigDetails** | [**QueuedCheckConfigDetails**](../models/queued-check-config-details) | The modified time check configuration | 

### Return type

[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "provisioningStatusCheckIntervalMinutes" : "30",
          "provisioningMaxStatusCheckDays" : "2"
        }`) // QueuedCheckConfigDetails | The modified time check configuration

  
   var queuedCheckConfigDetails v3.QueuedCheckConfigDetails
   if err := json.Unmarshal(data, &queuedCheckConfigDetails); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.UpdateStatusCheckDetails(context.Background()).QueuedCheckConfigDetails(queuedCheckConfigDetails).Execute()
	//resp, r, err := apiClient.V3.ServiceDeskIntegrationAPI.UpdateStatusCheckDetails(context.Background()).QueuedCheckConfigDetails(queuedCheckConfigDetails).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceDeskIntegrationAPI.UpdateStatusCheckDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateStatusCheckDetails`: QueuedCheckConfigDetails
	fmt.Fprintf(os.Stdout, "Response from `ServiceDeskIntegrationAPI.UpdateStatusCheckDetails`: %v\n", resp)
}
```

[[Back to top]](#)

