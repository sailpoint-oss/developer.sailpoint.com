# MachineAccountCreationRequest

# MachineAccountCreationRequestApi
  Use this API to submit and retrieve machine account creation requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-request-v1**](#create-machine-account-request-v1) | **POST** `/account-requests/v1/machine-account-create` | Submit Machine Account Creation Request
[**create-machine-account-request-v2**](#create-machine-account-request-v2) | **POST** `/account-requests/v2/machine-account-create` | Submit Machine Account Creation Request
[**create-machine-account-v2**](#create-machine-account-v2) | **POST** `/machine-accounts/v2/machine-account-create` | Create Machine Account V2
[**get-create-machine-account-request-v1**](#get-create-machine-account-request-v1) | **GET** `/account-requests/v1/machine-account-create/{accountRequestId}` | Get Machine Account Creation Request
[**get-machine-account-create-access-info-v1**](#get-machine-account-create-access-info-v1) | **GET** `/source-subtypes/v1/machine-account-create-access` | Machine Account Create Access


## create-machine-account-request-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit Machine Account Creation Request
Initiates machine account creation request for the specified subtype.
This method validates the input data, processes the machine account creation request,
and generates an asynchronous result containing a tracking ID. 

>**NOTE: You can only request a machine accounts on subtype for which you have a create machine account entitlement provisioned.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountCreateRequestInput** | `MachineAccountCreateRequestInput` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`AccountRequestAsyncResult`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountCreationRequestApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MachineAccountCreateRequestInput } from '@sailpoint/api-client/dist/machine_account_creation_request/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountCreationRequestApi(configuration);
const machineAccountCreateRequestInput: MachineAccountCreateRequestInput = {
  "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
  "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
  "environment" : "Dev",
  "description" : "Requesting machine account for tracking the inventory.",
  "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
  "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
  "userInput" : {
    "target" : "AD Source",
    "description" : "Inventory tracking"
  },
  "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createMachineAccountRequestV1({ machineAccountCreateRequestInput: machineAccountCreateRequestInput });
console.log(result);
```

[[Back to top]](#)

## create-machine-account-request-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Submit Machine Account Creation Request
Submits a machine account creation request on the account-requests API.
This operation accepts the same request and runs the same creation process as [Create Machine Account](https://developer.sailpoint.com/docs/api/create-machine-account-v-2). Use this operation when the integration already calls the account-requests APIs. New integrations should call [Create Machine Account](https://developer.sailpoint.com/docs/api/create-machine-account-v-2).

This method validates the input data, processes the machine account creation request, and returns an asynchronous result containing a tracking ID.

Compared with v1, this version:
- Accepts a `sourceId` so you can choose the source to create the account on. When subtypes can be configured per source for the tenant, `sourceId` is required and the subtype must be available on that source.
- Accepts `entitlements`, which lets you add a comment, start date, and remove date to each requested entitlement.
- Supports subtypes that are not tied to a single source. Version 1 rejects those subtypes.

There is no v2 status endpoint. Use the returned `accountRequestId` with [Get Machine Account Creation Request](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1) to track the request.

This API returns `403` when machine identity creation is not included in the tenant's plan. When machine account creation is not enabled for the tenant, this API returns `404`.

>**NOTE: You can only request a machine account on a subtype for which you have a create machine account entitlement provisioned. Otherwise, this API returns `403`.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountCreateRequestInputV2** | `MachineAccountCreateRequestInputV2` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`AccountRequestAsyncResult`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountCreationRequestApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MachineAccountCreateRequestInputV2 } from '@sailpoint/api-client/dist/machine_account_creation_request/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountCreationRequestApi(configuration);
const machineAccountCreateRequestInputV2: MachineAccountCreateRequestInputV2 = {
  "sourceId" : "2c9180835d191a86015d28455b4a2329",
  "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
  "entitlements" : [ {
    "id" : "2c91808a7624751a01762f19d67c220e",
    "comment" : "Needed to read the inventory share.",
    "startDate" : "2026-11-01T00:00:00Z",
    "removeDate" : "2027-11-01T00:00:00Z"
  } ],
  "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
  "environment" : "Dev",
  "description" : "Requesting machine account for tracking the inventory.",
  "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
  "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
  "userInput" : {
    "target" : "AD Source",
    "description" : "Inventory tracking"
  },
  "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createMachineAccountRequestV2({ machineAccountCreateRequestInputV2: machineAccountCreateRequestInputV2 });
console.log(result);
```

[[Back to top]](#)

## create-machine-account-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create Machine Account V2
Submits a machine account creation request. New integrations should use this operation.
This operation accepts the same request and runs the same creation process as [Submit Machine Account Creation Request](https://developer.sailpoint.com/docs/api/create-machine-account-request-v-2). That operation stays on the account-requests API for integrations that already call it. When version 1 cannot create the account because the subtype is not tied to a single source, the error directs the caller here.
This method validates the input data, processes the machine account creation request, and returns an asynchronous result containing a tracking ID.

Compared with v1, this version:
- Accepts a `sourceId` so you can choose the source to create the account on. When subtypes can be configured per source for the tenant, `sourceId` is required and the subtype must be available on that source.
- Accepts `entitlements`, which lets you add a comment, start date, and remove date to each requested entitlement.
- Supports subtypes that are not tied to a single source. Version 1 rejects those subtypes.

There is no v2 status endpoint. Use the returned `accountRequestId` with [Get Machine Account Creation Request](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1) to track the request.

This API returns `403` when machine identity creation is not included in the tenant's plan. When machine account creation is not enabled for the tenant, this API returns `404`.

>**NOTE: You can only request a machine account on a subtype for which you have a create machine account entitlement provisioned. Otherwise, this API returns `403`.**


[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineAccountCreateRequestInputV2** | `MachineAccountCreateRequestInputV2` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`AccountRequestAsyncResult`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountCreationRequestApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MachineAccountCreateRequestInputV2 } from '@sailpoint/api-client/dist/machine_account_creation_request/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountCreationRequestApi(configuration);
const machineAccountCreateRequestInputV2: MachineAccountCreateRequestInputV2 = {
  "sourceId" : "2c9180835d191a86015d28455b4a2329",
  "formId" : "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
  "entitlements" : [ {
    "id" : "2c91808a7624751a01762f19d67c220e",
    "comment" : "Needed to read the inventory share.",
    "startDate" : "2026-11-01T00:00:00Z",
    "removeDate" : "2027-11-01T00:00:00Z"
  } ],
  "entitlementIds" : [ "6d28b7c1620c49c6b6d5cbf81eb4b5fa", "2c91808a7624751a01762f19d67c220e" ],
  "environment" : "Dev",
  "description" : "Requesting machine account for tracking the inventory.",
  "machineIdentityId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa",
  "ownerIdentityId" : "18104e7e499b4e23882d6323344ab6bc",
  "userInput" : {
    "target" : "AD Source",
    "description" : "Inventory tracking"
  },
  "subtypeId" : "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createMachineAccountV2({ machineAccountCreateRequestInputV2: machineAccountCreateRequestInputV2 });
console.log(result);
```

[[Back to top]](#)

## get-create-machine-account-request-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Machine Account Creation Request
Retrieves a account request details for machine account creation. This allows the user to view all details for given account request.

[API Spec](https://developer.sailpoint.com/docs/api/get-create-machine-account-request-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**accountRequestId** | `string` | Account Request ID |  [default to undefined]

### Return type

`AccountRequestDetailsDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountCreationRequestApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountCreationRequestApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API.
const accountRequestId: string = gt38f94347e94562b5bb8424a56498d8; // Account Request ID
const result = await apiInstance.getCreateMachineAccountRequestV1({ xSailPointExperimental: xSailPointExperimental, accountRequestId: accountRequestId });
console.log(result);
```

[[Back to top]](#)

## get-machine-account-create-access-info-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine Account Create Access
This endpoint retrieves the list of sources and subtypes for which logged in user has the entitlement to create a machine account.
The response includes a list of object detailing the source, subtype and entitlement details which enables the clients to understand if they can submit the request to create a machine account for the given subtype.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-create-access-info-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]

### Return type

`Array<MachineAccountCreateAccessDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountCreationRequestApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountCreationRequestApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API.
const offset: number = 0; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
const limit: number = 250; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
const result = await apiInstance.getMachineAccountCreateAccessInfoV1({ xSailPointExperimental: xSailPointExperimental });
console.log(result);
```

[[Back to top]](#)

