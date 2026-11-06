# SIMIntegrations

# SIMIntegrationsApi
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint&#39;s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sim-integration-v1**](#create-sim-integration-v1) | **POST** `/sim-integrations/v1` | Create new sim integration
[**delete-sim-integration-v1**](#delete-sim-integration-v1) | **DELETE** `/sim-integrations/v1/{id}` | Delete a sim integration
[**get-sim-integration-v1**](#get-sim-integration-v1) | **GET** `/sim-integrations/v1/{id}` | Get a sim integration details.
[**get-sim-integrations-v1**](#get-sim-integrations-v1) | **GET** `/sim-integrations/v1` | List the existing sim integrations.
[**patch-before-provisioning-rule-v1**](#patch-before-provisioning-rule-v1) | **PATCH** `/sim-integrations/v1/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**patch-sim-attributes-v1**](#patch-sim-attributes-v1) | **PATCH** `/sim-integrations/v1/{id}` | Patch a sim attribute.
[**put-sim-integration-v1**](#put-sim-integration-v1) | **PUT** `/sim-integrations/v1/{id}` | Update an existing sim integration


## create-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create new sim integration
Create a new SIM Integrations.

[API Spec](https://developer.sailpoint.com/docs/api/create-sim-integration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**simIntegrationDetails** | `SimIntegrationDetails` | DTO containing the details of the SIM integration | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ServiceDeskIntegrationDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SimIntegrationDetails } from '@sailpoint/api-client/dist/sim_integrations/api';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const simIntegrationDetails: SimIntegrationDetails = {
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
}; // DTO containing the details of the SIM integration
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSIMIntegrationV1({ simIntegrationDetails: simIntegrationDetails });
console.log(result);
```

[[Back to top]](#)

## delete-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a sim integration
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sim-integration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the integration to delete. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const id: string = 12345; // The id of the integration to delete.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteSIMIntegrationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a sim integration details.
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the integration. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ServiceDeskIntegrationDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const id: string = 12345; // The id of the integration.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSIMIntegrationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sim-integrations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List the existing sim integrations.
List the existing SIM integrations.

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integrations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSIMIntegrationsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-before-provisioning-rule-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a sim beforeprovisioningrule attribute.
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/patch-before-provisioning-rule-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | SIM integration id |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JsonPatch object that describes the changes of SIM beforeProvisioningRule. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ServiceDeskIntegrationDto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatch } from '@sailpoint/api-client/dist/sim_integrations/api';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const id: string = 12345; // SIM integration id
const jsonPatch: JsonPatch = {
  "operations" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  }, {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  } ]
}; // The JsonPatch object that describes the changes of SIM beforeProvisioningRule.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchBeforeProvisioningRuleV1({ id: id, jsonPatch: jsonPatch });
console.log(result);
```

[[Back to top]](#)

## patch-sim-attributes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a sim attribute.
Patch a SIM attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/patch-sim-attributes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | SIM integration id |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JsonPatch object that describes the changes of SIM | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ServiceDeskIntegrationDto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatch } from '@sailpoint/api-client/dist/sim_integrations/api';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const id: string = 12345; // SIM integration id
const jsonPatch: JsonPatch = {
  "operations" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  }, {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  } ]
}; // The JsonPatch object that describes the changes of SIM
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchSIMAttributesV1({ id: id, jsonPatch: jsonPatch });
console.log(result);
```

[[Back to top]](#)

## put-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an existing sim integration
Update an existing SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/put-sim-integration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the integration. |  [default to undefined]
**simIntegrationDetails** | `SimIntegrationDetails` | The full DTO of the integration containing the updated model | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ServiceDeskIntegrationDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SIMIntegrationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SimIntegrationDetails } from '@sailpoint/api-client/dist/sim_integrations/api';

const configuration = new Configuration();
const apiInstance = new SIMIntegrationsApi(configuration);
const id: string = 12345; // The id of the integration.
const simIntegrationDetails: SimIntegrationDetails = {
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
}; // The full DTO of the integration containing the updated model
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putSIMIntegrationV1({ id: id, simIntegrationDetails: simIntegrationDetails });
console.log(result);
```

[[Back to top]](#)

