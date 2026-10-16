# WorkReassignment

# WorkReassignmentApi
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user&#39;s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reassignment-configuration-v1**](#create-reassignment-configuration-v1) | **POST** `/reassignment-configurations/v1` | Create a reassignment configuration
[**delete-reassignment-configuration-v1**](#delete-reassignment-configuration-v1) | **DELETE** `/reassignment-configurations/v1/{identityId}/{configType}` | Delete reassignment configuration
[**get-evaluate-reassignment-configuration-v1**](#get-evaluate-reassignment-configuration-v1) | **GET** `/reassignment-configurations/v1/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**get-reassignment-config-types-v1**](#get-reassignment-config-types-v1) | **GET** `/reassignment-configurations/v1/types` | List reassignment config types
[**get-reassignment-configuration-v1**](#get-reassignment-configuration-v1) | **GET** `/reassignment-configurations/v1/{identityId}` | Get reassignment configuration
[**get-tenant-config-configuration-v1**](#get-tenant-config-configuration-v1) | **GET** `/reassignment-configurations/v1/tenant-config` | Get tenant-wide reassignment configuration settings
[**list-reassignment-configurations-v1**](#list-reassignment-configurations-v1) | **GET** `/reassignment-configurations/v1` | List reassignment configurations
[**put-reassignment-config-v1**](#put-reassignment-config-v1) | **PUT** `/reassignment-configurations/v1/{identityId}` | Update reassignment configuration
[**put-tenant-configuration-v1**](#put-tenant-configuration-v1) | **PUT** `/reassignment-configurations/v1/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a reassignment configuration
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/create-reassignment-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**configurationItemRequest** | `ConfigurationItemRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ConfigurationItemResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ConfigurationItemRequest } from '@sailpoint/api-client/dist/work_reassignment/api';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const configurationItemRequest: ConfigurationItemRequest = {
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createReassignmentConfigurationV1({ configurationItemRequest: configurationItemRequest });
console.log(result);
```

[[Back to top]](#)

## delete-reassignment-configuration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete reassignment configuration
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/delete-reassignment-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | unique identity id |  [default to undefined]
**configType** | `ConfigTypeEnum` |  |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const identityId: string = 2c91808781a71ddb0181b9090b5c504e; // unique identity id
const configType: ConfigTypeEnum = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteReassignmentConfigurationV1({ identityId: identityId, configType: configType });
console.log(result);
```

[[Back to top]](#)

## get-evaluate-reassignment-configuration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Evaluate reassignment configuration
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/get-evaluate-reassignment-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | unique identity id |  [default to undefined]
**configType** | `ConfigTypeEnum` | Reassignment work type |  [default to undefined]
**exclusionFilters** | `Array<string>` | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - &#x60;SELF_REVIEW_DELEGATION&#x60;: This will exclude delegations of self-review reassignments | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<EvaluateResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const identityId: string = 2c91808781a71ddb0181b9090b5c504e; // unique identity id
const configType: ConfigTypeEnum = accessRequests; // Reassignment work type
const exclusionFilters: Array<string> = SELF_REVIEW_DELEGATION; // Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - &#x60;SELF_REVIEW_DELEGATION&#x60;: This will exclude delegations of self-review reassignments (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getEvaluateReassignmentConfigurationV1({ identityId: identityId, configType: configType });
console.log(result);
```

[[Back to top]](#)

## get-reassignment-config-types-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List reassignment config types
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-config-types-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<ConfigType>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getReassignmentConfigTypesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-reassignment-configuration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get reassignment configuration
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | unique identity id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ConfigurationResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const identityId: string = 2c91808781a71ddb0181b9090b5c504f; // unique identity id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getReassignmentConfigurationV1({ identityId: identityId });
console.log(result);
```

[[Back to top]](#)

## get-tenant-config-configuration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get tenant-wide reassignment configuration settings
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-config-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TenantConfigurationResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getTenantConfigConfigurationV1({  });
console.log(result);
```

[[Back to top]](#)

## list-reassignment-configurations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List reassignment configurations
Gets a paginated list of Reassignment configurations for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/list-reassignment-configurations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. | [optional] [default to 20]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<ConfigurationResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const limit: number = 20; // Max number of results to return. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listReassignmentConfigurationsV1({  });
console.log(result);
```

[[Back to top]](#)

## put-reassignment-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update reassignment configuration
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/put-reassignment-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | unique identity id |  [default to undefined]
**configurationItemRequest** | `ConfigurationItemRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ConfigurationItemResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ConfigurationItemRequest } from '@sailpoint/api-client/dist/work_reassignment/api';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const identityId: string = 2c91808781a71ddb0181b9090b5c504e; // unique identity id
const configurationItemRequest: ConfigurationItemRequest = {
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putReassignmentConfigV1({ identityId: identityId, configurationItemRequest: configurationItemRequest });
console.log(result);
```

[[Back to top]](#)

## put-tenant-configuration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update tenant-wide reassignment configuration settings
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/put-tenant-configuration-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tenantConfigurationRequest** | `TenantConfigurationRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TenantConfigurationResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { WorkReassignmentApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { TenantConfigurationRequest } from '@sailpoint/api-client/dist/work_reassignment/api';

const configuration = new Configuration();
const apiInstance = new WorkReassignmentApi(configuration);
const tenantConfigurationRequest: TenantConfigurationRequest = {
  "configDetails" : {
    "disabled" : true
  }
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putTenantConfigurationV1({ tenantConfigurationRequest: tenantConfigurationRequest });
console.log(result);
```

[[Back to top]](#)

