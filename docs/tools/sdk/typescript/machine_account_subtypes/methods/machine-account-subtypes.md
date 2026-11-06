# MachineAccountSubtypes

# MachineAccountSubtypesApi
  Use this API to get, update, and delete machine account subtype for sources.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype-override-v2**](#create-source-subtype-override-v2) | **POST** `/source-subtypes/v2/{id}/overrides` | Override source connector subtype
[**create-source-subtype-provisioning-policy-v2**](#create-source-subtype-provisioning-policy-v2) | **POST** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**create-source-subtype-v1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**create-source-subtype-v2**](#create-source-subtype-v2) | **POST** `/source-subtypes/v2` | Create subtype
[**delete-machine-account-subtype-v1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**delete-machine-account-subtype-v2**](#delete-machine-account-subtype-v2) | **DELETE** `/source-subtypes/v2/{id}` | Delete subtype by ID
[**delete-source-subtype-provisioning-policy-v2**](#delete-source-subtype-provisioning-policy-v2) | **DELETE** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**get-machine-account-subtype-approval-config-v1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id-v1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**get-source-subtype-by-id-v2**](#get-source-subtype-by-id-v2) | **GET** `/source-subtypes/v2/{id}` | Get subtype by ID
[**get-source-subtype-provisioning-policy-v2**](#get-source-subtype-provisioning-policy-v2) | **GET** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**list-source-subtype-targets-v2**](#list-source-subtype-targets-v2) | **GET** `/source-subtypes/v2/targets` | List subtype targets
[**list-source-subtypes-v1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**list-source-subtypes-v2**](#list-source-subtypes-v2) | **GET** `/source-subtypes/v2` | List subtypes
[**load-bulk-source-subtypes-v1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype-v1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**patch-machine-account-subtype-v2**](#patch-machine-account-subtype-v2) | **PATCH** `/source-subtypes/v2/{id}` | Patch subtype by ID
[**patch-source-subtype-provisioning-policy-v2**](#patch-source-subtype-provisioning-policy-v2) | **PATCH** `/source-subtypes/v2/{id}/provisioning-policy` | Patch subtype provisioning policy
[**update-machine-account-subtype-approval-config-v1**](#update-machine-account-subtype-approval-config-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-override-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the connector subtype to override. |  [default to undefined]
**sourceSubtypeOverrideRequest** | `SourceSubtypeOverrideRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeV2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SourceSubtypeOverrideRequest } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the connector subtype to override.
const sourceSubtypeOverrideRequest: SourceSubtypeOverrideRequest = {
  "sourceId" : "6d0458373bec4b4b80460992b76016da"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSourceSubtypeOverrideV2({ id: id, sourceSubtypeOverrideRequest: sourceSubtypeOverrideRequest });
console.log(result);
```

[[Back to top]](#)

## create-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**subtypeProvisioningPolicy** | `SubtypeProvisioningPolicy` |  | 
**useDefaultFields** | `boolean` | When &#x60;true&#x60; and the request body has no &#x60;fields&#x60;, a &#x60;CONNECTOR&#x60; subtype\&#39;s policy is created with the connector\&#39;s default account creation fields. Ignored for &#x60;SOURCE&#x60; subtypes. | [optional] [default to true]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SubtypeProvisioningPolicy`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SubtypeProvisioningPolicy } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const subtypeProvisioningPolicy: SubtypeProvisioningPolicy = {
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
}; // 
const useDefaultFields: boolean = true; // When &#x60;true&#x60; and the request body has no &#x60;fields&#x60;, a &#x60;CONNECTOR&#x60; subtype\&#39;s policy is created with the connector\&#39;s default account creation fields. Ignored for &#x60;SOURCE&#x60; subtypes. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSourceSubtypeProvisioningPolicyV2({ id: id, subtypeProvisioningPolicy: subtypeProvisioningPolicy });
console.log(result);
```

[[Back to top]](#)

## create-source-subtype-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create subtype
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createSourceSubtypeV1Request** | `CreateSourceSubtypeV1Request` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeWithSource`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CreateSourceSubtypeV1Request } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const createSourceSubtypeV1Request: CreateSourceSubtypeV1Request = {"sourceId":"6d0458373bec4b4b80460992b76016da","technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSourceSubtypeV1({ createSourceSubtypeV1Request: createSourceSubtypeV1Request });
console.log(result);
```

[[Back to top]](#)

## create-source-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createSourceSubtypeV2Request** | `CreateSourceSubtypeV2Request` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeV2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CreateSourceSubtypeV2Request } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const createSourceSubtypeV2Request: CreateSourceSubtypeV2Request = {
  "targetName" : "Active Directory",
  "targetId" : "active-directory",
  "displayName" : "Service Account",
  "description" : "Accounts used by automated services.",
  "targetType" : "CONNECTOR",
  "type" : "MACHINE",
  "classification" : "MACHINE",
  "technicalName" : "service-account"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createSourceSubtypeV2({ createSourceSubtypeV2Request: createSourceSubtypeV2Request });
console.log(result);
```

[[Back to top]](#)

## delete-machine-account-subtype-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete subtype by ID
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const subtypeId: string = 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa; // The ID of the subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteMachineAccountSubtypeV1({ subtypeId: subtypeId });
console.log(result);
```

[[Back to top]](#)

## delete-machine-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteMachineAccountSubtypeV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteSourceSubtypeProvisioningPolicyV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-machine-account-subtype-approval-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine Subtype Approval Config
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-approval-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**subtypeId** | `string` | machine subtype id. |  [default to undefined]

### Return type

`MachineAccountSubtypeConfigDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API.
const subtypeId: string = ef38f94347e94562b5bb8424a56498d8; // machine subtype id.
const result = await apiInstance.getMachineAccountSubtypeApprovalConfigV1({ xSailPointExperimental: xSailPointExperimental, subtypeId: subtypeId });
console.log(result);
```

[[Back to top]](#)

## get-source-subtype-by-id-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get subtype by ID
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeWithSource`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const subtypeId: string = 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa; // The ID of the subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceSubtypeByIdV1({ subtypeId: subtypeId });
console.log(result);
```

[[Back to top]](#)

## get-source-subtype-by-id-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get subtype by ID
Get a machine account subtype of any tier by subtype ID. The response may include `target.supportsProvisioning`.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeV2`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceSubtypeByIdV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get subtype provisioning policy
Get the machine account creation provisioning policy of a subtype of any tier. Returns `404` when the subtype has
no provisioning policy.

The caller needs the `idn:source-subtypes:read` right. A malformed ID returns `400`.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**sourceId** | `string` | ID of the source the subtype belongs to. Supply it for &#x60;SOURCE&#x60; subtypes so that a policy stored with the source can be found. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SubtypeProvisioningPolicy`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of the source the subtype belongs to. Supply it for &#x60;SOURCE&#x60; subtypes so that a policy stored with the source can be found. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getSourceSubtypeProvisioningPolicyV2({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-source-subtype-targets-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List subtype targets
List the targets that have machine account subtypes, with subtype and source counts for each.

A `targetType` filter is required. `targetType eq "CONNECTOR"` returns one item per connector type.
`targetType eq "SOURCE"` returns one item per source subtype. A missing or unsupported `targetType` filter returns
`400`.

The caller needs the `idn:source-subtypes:read` right.

This API returns `404` when Machine Identity Security or tiered subtype configuration is not enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A &#x60;targetType&#x60; filter with the value &#x60;CONNECTOR&#x60; or &#x60;SOURCE&#x60; is required. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<SubtypeTargetSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const filters: string = targetType eq "CONNECTOR"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*  A &#x60;targetType&#x60; filter with the value &#x60;CONNECTOR&#x60; or &#x60;SOURCE&#x60; is required.
const limit: number = 250; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const sorters: string = -subtypeCount; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Results are sorted by **targetName** ascending by default. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listSourceSubtypeTargetsV2({ filters: filters });
console.log(result);
```

[[Back to top]](#)

## list-source-subtypes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve all subtypes
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<SourceSubtypeWithSource>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const filters: string = displayName eq "sail"; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
const sorters: string = displayName; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listSourceSubtypesV1({  });
console.log(result);
```

[[Back to top]](#)

## list-source-subtypes-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. | [optional] [default to undefined]
**effectiveSet** | `boolean` | Controls what is returned for &#x60;sourceId&#x60;. When &#x60;true&#x60;, which is the default when &#x60;sourceId&#x60; is supplied, the API returns the source\&#39;s effective subtypes across both tiers. When &#x60;false&#x60;, the API returns only the subtypes defined for the source. Passing &#x60;effectiveSet&#x3D;true&#x60; explicitly without &#x60;sourceId&#x60; returns &#x60;400&#x60;. | [optional] [default to true]
**targetType** | `'SOURCE' | 'CONNECTOR'` | Returns only effective subtypes of this tier. Requires &#x60;sourceId&#x60;, and cannot be combined with &#x60;effectiveSet&#x3D;false&#x60;; otherwise the API returns &#x60;400&#x60;. | [optional] [default to undefined]
**includeConfigs** | `boolean` | When &#x60;true&#x60;, each item includes a summary of its machine account creation configuration in &#x60;config&#x60;. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with &#x60;sourceId&#x60; unless &#x60;effectiveSet&#x3D;false&#x60;; otherwise the API returns &#x60;400&#x60;. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<SourceSubtypeV2WithConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of a source. When supplied, the API returns subtypes for that source instead of the whole tenant. (optional)
const effectiveSet: boolean = true; // Controls what is returned for &#x60;sourceId&#x60;. When &#x60;true&#x60;, which is the default when &#x60;sourceId&#x60; is supplied, the API returns the source\&#39;s effective subtypes across both tiers. When &#x60;false&#x60;, the API returns only the subtypes defined for the source. Passing &#x60;effectiveSet&#x3D;true&#x60; explicitly without &#x60;sourceId&#x60; returns &#x60;400&#x60;. (optional)
const targetType: string = CONNECTOR; // Returns only effective subtypes of this tier. Requires &#x60;sourceId&#x60;, and cannot be combined with &#x60;effectiveSet&#x3D;false&#x60;; otherwise the API returns &#x60;400&#x60;. (optional)
const includeConfigs: boolean = false; // When &#x60;true&#x60;, each item includes a summary of its machine account creation configuration in &#x60;config&#x60;. (optional)
const limit: number = 250; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const filters: string = targetType eq "CONNECTOR"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, in*  **technicalName**: *eq, ne, in, sw, co*  **displayName**: *eq, ne, in, sw, co*  **source.id**: *eq, ne, in, sw, co*  **targetType**: *eq, ne, in, sw, co*  **targetId**: *eq, ne, in, sw, co*  **targetName**: *eq, ne, in, sw, co, isnull*  **classification**: *eq, ne, in, sw, co*  **type**: *eq, ne, in, sw, co*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be used with &#x60;sourceId&#x60; unless &#x60;effectiveSet&#x3D;false&#x60;; otherwise the API returns &#x60;400&#x60;. (optional)
const sorters: string = displayName; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, technicalName, displayName, source.id, targetType, targetId, targetName, classification, type, created, modified** (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listSourceSubtypesV2({  });
console.log(result);
```

[[Back to top]](#)

## load-bulk-source-subtypes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk Retrieve of Source Subtypes
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/load-bulk-source-subtypes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**requestBody** | `Array<string>` |  | 

### Return type

`Array<SourceSubtypeWithSource>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API.
const requestBody: Array<string> = ; // 
const result = await apiInstance.loadBulkSourceSubtypesV1({ xSailPointExperimental: xSailPointExperimental, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## patch-machine-account-subtype-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch subtype by ID
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the subtype. |  [default to undefined]
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeWithSource`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const subtypeId: string = 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa; // The ID of the subtype.
const requestBody: Array<object> = [{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchMachineAccountSubtypeV1({ subtypeId: subtypeId, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## patch-machine-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceSubtypeV2`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchMachineAccountSubtypeV2({ id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## patch-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SubtypeProvisioningPolicy`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const id: string = 43bdd144-4b17-4fce-a744-17c7fd3e717b; // The ID of the subtype.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchSourceSubtypeProvisioningPolicyV2({ id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-machine-account-subtype-approval-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine Subtype Approval Config
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-subtype-approval-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**subtypeId** | `string` | machine account subtype ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the object. | 

### Return type

`MachineAccountSubtypeConfigDto`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/machine_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountSubtypesApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API.
const subtypeId: string = 00eebcf881994e419d72e757fd30dc0e; // machine account subtype ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The JSONPatch payload used to update the object.
const result = await apiInstance.updateMachineAccountSubtypeApprovalConfigV1({ xSailPointExperimental: xSailPointExperimental, subtypeId: subtypeId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

