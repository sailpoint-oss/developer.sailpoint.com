# GenericRequestApprovalConfig

# GenericRequestApprovalConfigService
  Use this API to view and update the approval settings for machine identity requests, such as requests to activate or deactivate an AI agent, at the resource, subtype, source, or tenant level. Each scope holds one setting per request action; an action with no setting inherits the organization-level approval configuration.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-generic-request-approval-config-v1**](#get-generic-request-approval-config-v1) | **GET** `/generic-request-approval-config/v1` | Get generic request approval config
[**update-generic-request-approval-config-v1**](#update-generic-request-approval-config-v1) | **PATCH** `/generic-request-approval-config/v1/{id}` | Patch generic request approval config


## get-generic-request-approval-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get generic request approval config
This API returns the approval configuration for one scope. The scope is identified by `targetType` and, depending
on the target type, `targetId` and `sourceId`.


The response holds one entry per action that the target type supports. An action with no stored setting is
returned as `{}`, which means it inherits the organization-level approval configuration. A scope that has never
been configured returns `200` with every action set to `{}`, and the response always carries the `id` to use with
the update API.


Actions by target type:


**RESOURCE**: *ACTIVATE, DEACTIVATE*


**SUBTYPE**: *CREATE, DELETE*


**SOURCE**: *DELETE*


**GLOBAL**: *ACTIVATE, DEACTIVATE*


Only resources of the AI agent type support resource-level approval settings; any other resource returns `400`.
An unknown source, resource, or subtype returns `400`.


When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
enabled for the tenant, it returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-generic-request-approval-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetGenericRequestApprovalConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**targetType** | `'RESOURCE' | 'SUBTYPE' | 'SOURCE' | 'GLOBAL'` | The kind of scope to read. |  [default to undefined]
**targetId** | `string` | The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the &#x60;sourceId&#x60;, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns &#x60;400&#x60;. | [optional] [default to undefined]
**sourceId** | `string` | The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<GenericRequestApprovalConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GenericRequestApprovalConfigService } from '@sailpoint/angular-sdk/generic_request_approval_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GenericRequestApprovalConfigService);

  getGenericRequestApprovalConfigV1(): void {
    const targetType: string = ; // The kind of scope to read.
    const targetId: string = ; // The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the &#x60;sourceId&#x60;, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns &#x60;400&#x60;. (optional)
    const sourceId: string = ; // The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getGenericRequestApprovalConfigV1({ targetType: targetType }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-generic-request-approval-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch generic request approval config
Use this API to update the approval configuration of one scope using a JSON Patch payload. Use the `id` returned
by the get API.


Patchable paths are `/approvalConfig`, which replaces every action at once, and `/approvalConfig/{ACTION}` for each
action the scope's target type supports. One request can update several actions. `id`, `targetType`, and
`targetId` identify the scope and can't be patched; a patch that targets any other path returns `400`.


To return an action to the organization-level approval configuration, `remove` it or `replace` it with `{}`.


Each configured action uses one scheme:


**APPROVAL**: requires `approvers` and `comments`. `approvers` is a comma-separated list of approver tokens:
`sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`,
`machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. For the
**SUBTYPE** **DELETE** action, `accountOwner` is also allowed. Tokens without an ID can appear at most once, and
IDs must be unique and must exist. `comments` is one of `ALL`, `APPROVAL`, `REJECTION`, or `OFF`.


**WORKFLOW**: requires `workflowId`, the UUID of a workflow. The same workflow can't be used for more than one
action. When workflow approvals are enabled for the tenant, the workflow must exist, be enabled, and use the
trigger for its action (`idn:machine-identity-activate` for ACTIVATE, `idn:machine-identity-deactivate` for
DEACTIVATE).


The **GLOBAL** scope only accepts the **WORKFLOW** scheme.


The ID must be a UUID; any other value returns `400`. When no approval configuration exists for the ID, this API
returns `404`.


When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
enabled for the tenant, it returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-generic-request-approval-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateGenericRequestApprovalConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval configuration ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<GenericRequestApprovalConfig>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GenericRequestApprovalConfigService } from '@sailpoint/angular-sdk/generic_request_approval_config';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/generic_request_approval_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GenericRequestApprovalConfigService);

  updateGenericRequestApprovalConfigV1(): void {
    const id: string = ; // Approval configuration ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateGenericRequestApprovalConfigV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

