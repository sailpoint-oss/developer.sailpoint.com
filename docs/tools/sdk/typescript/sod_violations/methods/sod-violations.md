# SODViolations

# SODViolationsApi
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-violation-v1**](#get-violation-v1) | **GET** `/violations/v1/{id}` | Get policy violation by ID
[**list-my-violations-v1**](#list-my-violations-v1) | **GET** `/my-violations/v1` | List My Policy Violations
[**list-violations-v1**](#list-violations-v1) | **GET** `/violations/v1` | List Policy Violations
[**move-violation-v1**](#move-violation-v1) | **POST** `/violations/v1/{id}/reassign` | Reassign policy violation
[**start-apply-control-v1**](#start-apply-control-v1) | **POST** `/violations/v1/{id}/controls` | Apply control to violation
[**start-predict-sod-violations-v1**](#start-predict-sod-violations-v1) | **POST** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**start-violation-check-v1**](#start-violation-check-v1) | **POST** `/sod-violations/v1/check` | Check sod violations


## get-violation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get policy violation by ID
Returns a single policy violation by ID for the current tenant. Access is allowed if the caller has the read scope (`idn:sod-violation:read`) or is an owner of the violation (direct or via governance group). Returns 403 Forbidden if the violation exists but the caller has neither the read scope nor ownership. Returns 404 Not Found if the violation does not exist for the tenant.
Embedded references (`owner`, `target`, `policy`, and references inside `appliedControls`) use `ReferenceResponse`: `id` and `type` are always present; `name` is included when display metadata resolves.


[API Spec](https://developer.sailpoint.com/docs/api/get-violation-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the policy violation to fetch |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Policyviolationresponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const id: string = 3e078865-55ed-43cf-b83c-85c58d2016e6; // The ID of the policy violation to fetch
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getViolationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-my-violations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List My Policy Violations
Returns a paged list of policy violations where the current user is the owner (directly assigned or via a governance group they belong to). No permission scope is required; caller identity is required.
Supports the same collection parameters as GET /violations (limit, offset, count, filters, sorters), including the same filter field whitelist and processing (normalization, pruning of not-yet-persisted name predicates). The owner filter is implicit (current user); **do not** use `ownerId` in filters for this endpoint.
Embedded references in each violation follow `ReferenceResponse` (`id`, `type`, and optional `name` when metadata resolves).


[API Spec](https://developer.sailpoint.com/docs/api/list-my-violations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). | [optional] [default to undefined]

### Return type

`Array<Policyviolationresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = status in ("Open","Mitigated") and level eq "High"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
const sorters: string = -level; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). (optional)
const result = await apiInstance.listMyViolationsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-violations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Policy Violations
Returns a paged list of policy violations for the current tenant. Requires the read scope (idn:sod-violation:read).
This endpoint uses the standard collection parameters defined in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/).
This endpoint supports standard V3 collection parameters: `limit`, `offset`, `count`, `filters`, and `sorters`.
Embedded references in each violation (`owner`, `target`, `policy`, and references inside `appliedControls`) follow the `ReferenceResponse` schema: `id` and `type` are always present; `name` is included when display metadata resolves.
Filters and sorters are validated against a fixed whitelist of fields to ensure safe queries and to align with underlying database indexes.


[API Spec](https://developer.sailpoint.com/docs/api/list-violations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. | [optional] [default to undefined]

### Return type

`Array<Policyviolationresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = status in ("Open","Mitigated") and level eq "High" and policyId eq "bc693f07-e7b6-4553-9626-c25954c58554" and ownerId eq "de305d54-75b4-431b-adb2-eb6b9e546014"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
const sorters: string = -level; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. (optional)
const result = await apiInstance.listViolationsV1({  });
console.log(result);
```

[[Back to top]](#)

## move-violation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reassign policy violation
Reassigns the specified policy violation to a new owner. Callers without the `idn:sod-violation:manage` scope may only reassign violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/move-violation-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the policy violation to fetch |  [default to undefined]
**violationreassigninput** | `Violationreassigninput` | Data needed to reassign a Policy Violation | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Policyviolationresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Violationreassigninput } from '@sailpoint/api-client/dist/sod_violations/api';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const id: string = 3e078865-55ed-43cf-b83c-85c58d2016e6; // The ID of the policy violation to fetch
const violationreassigninput: Violationreassigninput = {
  "comments" : "some comments about the reassignment",
  "reassignTo" : {
    "assigneeType" : "IDENTITY",
    "assigneeId" : "3e07886555ed43cfb83c85c58d2016e6"
  }
}; // Data needed to reassign a Policy Violation
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.moveViolationV1({ id: id, violationreassigninput: violationreassigninput });
console.log(result);
```

[[Back to top]](#)

## start-apply-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Apply control to violation
Applies a compensating control to the specified policy violation. Callers without the `idn:sod-violation:manage` scope may only apply a control to violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/start-apply-control-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the policy violation to fetch |  [default to undefined]
**appliedcontrolcreate** | `Appliedcontrolcreate` | Data needed to apply a control to a Policy Violation | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Appliedcontrol`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Appliedcontrolcreate } from '@sailpoint/api-client/dist/sod_violations/api';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const id: string = 3e078865-55ed-43cf-b83c-85c58d2016e6; // The ID of the policy violation to fetch
const appliedcontrolcreate: Appliedcontrolcreate = {
  "comments" : "Some comments about the applied control",
  "control" : "3e07886555ed43cfb83c85c58d2016e6"
}; // Data needed to apply a control to a Policy Violation
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startApplyControlV1({ id: id, appliedcontrolcreate: appliedcontrolcreate });
console.log(result);
```

[[Back to top]](#)

## start-predict-sod-violations-v1
Predict sod violations for identity.
This API is used to check if granting some additional accesses (entitlements, access profiles, or roles) would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/start-predict-sod-violations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityWithNewAccess** | `IdentityWithNewAccess` |  | 

### Return type

`ViolationPrediction`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { IdentityWithNewAccess } from '@sailpoint/api-client/dist/sod_violations/api';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const identityWithNewAccess: IdentityWithNewAccess = {
  "identityId" : "2c91808568c529c60168cca6f90c1313",
  "accessRefs" : [ {
    "type" : "ENTITLEMENT",
    "id" : "2c918087682f9a86016839c050861ab1"
  }, {
    "type" : "ACCESS_PROFILE",
    "id" : "2c918087682f9a86016839c0509c1ab2"
  }, {
    "type" : "ROLE",
    "id" : "2c918087682f9a86016839c050a01ab3"
  } ]
}; // 
const result = await apiInstance.startPredictSodViolationsV1({ identityWithNewAccess: identityWithNewAccess });
console.log(result);
```

[[Back to top]](#)

## start-violation-check-v1
Check sod violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/start-violation-check-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityWithNewAccess** | `IdentityWithNewAccess` |  | 

### Return type

`SodViolationCheck`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODViolationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { IdentityWithNewAccess } from '@sailpoint/api-client/dist/sod_violations/api';

const configuration = new Configuration();
const apiInstance = new SODViolationsApi(configuration);
const identityWithNewAccess: IdentityWithNewAccess = {
  "identityId" : "2c91808568c529c60168cca6f90c1313",
  "accessRefs" : [ {
    "type" : "ENTITLEMENT",
    "id" : "2c918087682f9a86016839c050861ab1"
  }, {
    "type" : "ACCESS_PROFILE",
    "id" : "2c918087682f9a86016839c0509c1ab2"
  }, {
    "type" : "ROLE",
    "id" : "2c918087682f9a86016839c050a01ab3"
  } ]
}; // 
const result = await apiInstance.startViolationCheckV1({ identityWithNewAccess: identityWithNewAccess });
console.log(result);
```

[[Back to top]](#)

