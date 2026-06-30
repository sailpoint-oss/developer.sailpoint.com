---
id: v1-service-desk-integration
title: ServiceDeskIntegration
pagination_label: ServiceDeskIntegration
sidebar_label: ServiceDeskIntegration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ServiceDeskIntegration', 'v1ServiceDeskIntegration']
slug: /tools/sdk/typescript/service_desk_integration/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegration', 'v1ServiceDeskIntegration']
---

# ServiceDeskIntegrationV1Api
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
[**create-service-desk-integration-v1**](#create-service-desk-integration-v1) | **POST** `/service-desk-integrations/v1` | Create new service desk integration
[**delete-service-desk-integration-v1**](#delete-service-desk-integration-v1) | **DELETE** `/service-desk-integrations/v1/{id}` | Delete a service desk integration
[**get-service-desk-integration-template-v1**](#get-service-desk-integration-template-v1) | **GET** `/service-desk-integrations/v1/templates/{scriptName}` | Service desk integration template by scriptname
[**get-service-desk-integration-types-v1**](#get-service-desk-integration-types-v1) | **GET** `/service-desk-integrations/v1/types` | List service desk integration types
[**get-service-desk-integration-v1**](#get-service-desk-integration-v1) | **GET** `/service-desk-integrations/v1/{id}` | Get a service desk integration
[**get-service-desk-integrations-v1**](#get-service-desk-integrations-v1) | **GET** `/service-desk-integrations/v1` | List existing service desk integrations
[**get-status-check-details-v1**](#get-status-check-details-v1) | **GET** `/service-desk-integrations/v1/status-check-configuration` | Get the time check configuration
[**patch-service-desk-integration-v1**](#patch-service-desk-integration-v1) | **PATCH** `/service-desk-integrations/v1/{id}` | Patch a service desk integration
[**put-service-desk-integration-v1**](#put-service-desk-integration-v1) | **PUT** `/service-desk-integrations/v1/{id}` | Update a service desk integration
[**update-status-check-details-v1**](#update-status-check-details-v1) | **PUT** `/service-desk-integrations/v1/status-check-configuration` | Update the time check configuration


## create-service-desk-integration-v1
Create new service desk integration
Create a new Service Desk integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-service-desk-integration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**servicedeskintegrationdtoV1** | `ServicedeskintegrationdtoV1` | The specifics of a new integration to create | 

### Return type

`ServicedeskintegrationdtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const servicedeskintegrationdtoV1: ServicedeskintegrationdtoV1 = ; // The specifics of a new integration to create
const result = await apiInstance.createServiceDeskIntegrationV1({ servicedeskintegrationdtoV1: servicedeskintegrationdtoV1 });
console.log(result);
```

[[Back to top]](#)

## delete-service-desk-integration-v1
Delete a service desk integration
Delete an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-service-desk-integration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of Service Desk integration to delete |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const id: string = anId; // ID of Service Desk integration to delete
const result = await apiInstance.deleteServiceDeskIntegrationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-service-desk-integration-template-v1
Service desk integration template by scriptname
This API endpoint returns an existing Service Desk integration template by scriptName.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-template-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the Service Desk integration template to get |  [default to undefined]

### Return type

`ServicedeskintegrationtemplatedtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the Service Desk integration template to get
const result = await apiInstance.getServiceDeskIntegrationTemplateV1({ scriptName: scriptName });
console.log(result);
```

[[Back to top]](#)

## get-service-desk-integration-types-v1
List service desk integration types
This API endpoint returns the current list of supported Service Desk integration types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-types-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<ServicedeskintegrationtemplatetypeV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const result = await apiInstance.getServiceDeskIntegrationTypesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-service-desk-integration-v1
Get a service desk integration
Get an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk integration to get |  [default to undefined]

### Return type

`ServicedeskintegrationdtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const id: string = anId; // ID of the Service Desk integration to get
const result = await apiInstance.getServiceDeskIntegrationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-service-desk-integrations-v1
List existing service desk integrations
Get a list of Service Desk integration objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integrations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<ServicedeskintegrationdtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
const filters: string = name eq "John Doe"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getServiceDeskIntegrationsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-status-check-details-v1
Get the time check configuration
Get the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-status-check-details-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`QueuedcheckconfigdetailsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const result = await apiInstance.getStatusCheckDetailsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-service-desk-integration-v1
Patch a service desk integration
Update an existing Service Desk integration by ID with a PATCH request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-service-desk-integration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk integration to update |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed.  | 

### Return type

`ServicedeskintegrationdtoV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const id: string = anId; // ID of the Service Desk integration to update
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = ; // A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 
const result = await apiInstance.patchServiceDeskIntegrationV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## put-service-desk-integration-v1
Update a service desk integration
Update an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-service-desk-integration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk integration to update |  [default to undefined]
**servicedeskintegrationdtoV1** | `ServicedeskintegrationdtoV1` | The specifics of the integration to update | 

### Return type

`ServicedeskintegrationdtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const id: string = anId; // ID of the Service Desk integration to update
const servicedeskintegrationdtoV1: ServicedeskintegrationdtoV1 = ; // The specifics of the integration to update
const result = await apiInstance.putServiceDeskIntegrationV1({ id: id, servicedeskintegrationdtoV1: servicedeskintegrationdtoV1 });
console.log(result);
```

[[Back to top]](#)

## update-status-check-details-v1
Update the time check configuration
Update the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-status-check-details-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**queuedcheckconfigdetailsV1** | `QueuedcheckconfigdetailsV1` | The modified time check configuration | 

### Return type

`QueuedcheckconfigdetailsV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ServiceDeskIntegrationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ServiceDeskIntegrationV1Api(configuration);
const queuedcheckconfigdetailsV1: QueuedcheckconfigdetailsV1 = ; // The modified time check configuration
const result = await apiInstance.updateStatusCheckDetailsV1({ queuedcheckconfigdetailsV1: queuedcheckconfigdetailsV1 });
console.log(result);
```

[[Back to top]](#)

