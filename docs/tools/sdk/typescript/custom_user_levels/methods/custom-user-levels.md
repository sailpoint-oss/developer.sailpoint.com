# CustomUserLevels

# CustomUserLevelsApi
  Use this API to implement custom user level functionality.
With this functionality in place, administrators can create custom user levels and configure them for use throughout Identity Security Cloud.

Custom user levels allow administrators to create custom user levels that can be used to control access to Identity Security Cloud features and APIs.

Refer to [User Levels](https://documentation.sailpoint.com/saas/help/common/users/index.html) for more information about User Levels.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-user-level-v1**](#create-custom-user-level-v1) | **POST** `/authorization/v1/custom-user-levels` | Create a custom user level
[**delete-user-level-v1**](#delete-user-level-v1) | **DELETE** `/authorization/v1/custom-user-levels/{id}` | Delete a user level
[**get-user-level-v1**](#get-user-level-v1) | **GET** `/authorization/v1/custom-user-levels/{id}` | Retrieve a user level
[**list-all-authorization-right-sets-v1**](#list-all-authorization-right-sets-v1) | **GET** `/authorization/v1/authorization-assignable-right-sets` | List all uiAssignable right sets
[**list-user-level-identities-v1**](#list-user-level-identities-v1) | **GET** `/authorization/v1/user-levels/{id}/identities` | List user level identities
[**list-user-levels-v1**](#list-user-levels-v1) | **GET** `/authorization/v1/custom-user-levels` | List user levels
[**publish-custom-user-level-v1**](#publish-custom-user-level-v1) | **POST** `/authorization/v1/custom-user-levels/{id}/publish` | Publish a custom user level
[**show-user-level-counts-v1**](#show-user-level-counts-v1) | **POST** `/authorization/v1/user-levels/get-identity-count` | Count user levels identities
[**update-user-level-v1**](#update-user-level-v1) | **PATCH** `/authorization/v1/custom-user-levels/{id}` | Update a user level


## create-custom-user-level-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a custom user level
Creates a new custom user level for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-user-level-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**userLevelRequest** | `UserLevelRequest` | Payload containing the details of the user level to be created.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case.  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`UserLevelSummaryDTO`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { UserLevelRequest } from '@sailpoint/api-client/dist/custom_user_levels/api';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const userLevelRequest: UserLevelRequest = {
  "owner" : {
    "manager" : {
      "name" : "Thomas Edison",
      "id" : "2c9180a46faadee4016fb4e018c20639",
      "type" : "IDENTITY"
    },
    "name" : "Alison Ferguso",
    "alias" : "alison.ferguso",
    "attributes" : [ {
      "name" : "Country",
      "value" : "US",
      "key" : "country"
    }, {
      "name" : "Country",
      "value" : "US",
      "key" : "country"
    } ],
    "id" : "2c9180857182305e0171993735622948",
    "identityState" : "ACTIVE",
    "email" : "alison.ferguso@acme-solar.com",
    "status" : "Active"
  },
  "rightSets" : [ "idn:ui-right-set-list-read-example", "idn:ui-right-set-write-example" ],
  "name" : "Custom User Level Name",
  "description" : "This is a description of the custom user level."
}; // Payload containing the details of the user level to be created.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case. 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createCustomUserLevelV1({ userLevelRequest: userLevelRequest });
console.log(result);
```

[[Back to top]](#)

## delete-user-level-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a user level
Deletes a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-user-level-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the user level. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const id: string = 6e110911-5984-491b-be74-2707980a46a7; // The unique identifier of the user level.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteUserLevelV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-user-level-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve a user level
Fetches the details of a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-user-level-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the user level. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`UserLevelSummaryDTO`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const id: string = 6e110911-5984-491b-be74-2707980a46a7; // The unique identifier of the user level.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getUserLevelV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-all-authorization-right-sets-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List all uiAssignable right sets
Retrieves a list of authorization assignable right sets for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-all-authorization-right-sets-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<HierarchicalRightSet>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const filters: string = category eq "identity"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional)
const sorters: string = name, -id, -category; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listAllAuthorizationRightSetsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-user-level-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List user level identities
List of identities associated with a user level.

[API Spec](https://developer.sailpoint.com/docs/api/list-user-level-identities-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the user level. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<AuthUserSlimResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const id: string = idn:access-request-administrator; // The unique identifier of the user level.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const count: boolean = true; // If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. (optional)
const sorters: string = displayName; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listUserLevelIdentitiesV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-user-levels-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List user levels
Retrieves a list of user levels for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-user-levels-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**detailLevel** | `'FULL' | 'SLIM'` | Specifies the level of detail for the user levels. | [optional] [default to &#39;basic&#39;]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** | [optional] [default to undefined]
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<UserLevelSummaryDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const detailLevel: string = FULL; // Specifies the level of detail for the user levels. (optional)
const filters: string = name co "identity", owner co "john", status eq "active", description co "some description"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* (optional)
const sorters: string = name, -created, description, status, owner; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** (optional)
const limit: number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listUserLevelsV1({  });
console.log(result);
```

[[Back to top]](#)

## publish-custom-user-level-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Publish a custom user level
Publishes a custom user level for the tenant, making it active and available.

[API Spec](https://developer.sailpoint.com/docs/api/publish-custom-user-level-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the user level to publish. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`UserLevelPublishSummary`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const id: string = 6e110911-5984-491b-be74-2707980a46a7; // The unique identifier of the user level to publish.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.publishCustomUserLevelV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## show-user-level-counts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Count user levels identities
List of user levels along with the number of identities associated to it.

[API Spec](https://developer.sailpoint.com/docs/api/show-user-level-counts-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` | List of user level ids. Max 50 identifiers can be passed in a single request. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<AuthUserLevelsIdentityCount>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const requestBody: Array<string> = ; // List of user level ids. Max 50 identifiers can be passed in a single request.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.showUserLevelCountsV1({ requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## update-user-level-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a user level
Updates the details of a specific user level using JSON Patch.

[API Spec](https://developer.sailpoint.com/docs/api/update-user-level-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the user level. |  [default to undefined]
**jsonPatch** | `JsonPatch` | JSON Patch payload for updating the user level.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case.  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`UserLevelSummaryDTO`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { CustomUserLevelsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatch } from '@sailpoint/api-client/dist/custom_user_levels/api';

const configuration = new Configuration();
const apiInstance = new CustomUserLevelsApi(configuration);
const id: string = 6e110911-5984-491b-be74-2707980a46a7; // The unique identifier of the user level.
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
}; // JSON Patch payload for updating the user level.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case. 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateUserLevelV1({ id: id, jsonPatch: jsonPatch });
console.log(result);
```

[[Back to top]](#)

