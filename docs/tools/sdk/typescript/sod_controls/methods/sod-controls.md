# SODControls

# SODControlsApi
  Use this API to create, list, retrieve, update, and delete compensating controls associated with separation-of-duties policies. Requires policy violation management license.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-control-v1**](#create-control-v1) | **POST** `/controls/v1` | Create Compensating Control
[**delete-control-v1**](#delete-control-v1) | **DELETE** `/controls/v1/{id}` | Delete compensating control by ID
[**get-control-v1**](#get-control-v1) | **GET** `/controls/v1/{id}` | Get compensating control by ID
[**list-controls-v1**](#list-controls-v1) | **GET** `/controls/v1` | List Compensating Controls
[**put-control-v1**](#put-control-v1) | **PUT** `/controls/v1/{id}` | Put Compensating Control


## create-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create Compensating Control
Creates a compensating control associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/create-control-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**compensatingcontrolcreate** | `Compensatingcontrolcreate` | Data needed to create a Compensating Control | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Compensatingcontrolresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODControlsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Compensatingcontrolcreate } from '@sailpoint/api-client/dist/sod_controls/api';

const configuration = new Configuration();
const apiInstance = new SODControlsApi(configuration);
const compensatingcontrolcreate: Compensatingcontrolcreate = {
  "owner" : {
    "id" : "3e07886555ed43cfb83c85c58d2016e6",
    "type" : "IDENTITY"
  },
  "name" : "a name",
  "description" : "a description",
  "secondaryOwners" : [ {
    "id" : "943a7c57da334d07ba2454bf7fcf144f",
    "type" : "GOVERNANCE_GROUP"
  } ],
  "action" : "Workflow",
  "expiration" : "20d",
  "type" : "Mitigation",
  "justificationRequired" : true,
  "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
}; // Data needed to create a Compensating Control
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createControlV1({ compensatingcontrolcreate: compensatingcontrolcreate });
console.log(result);
```

[[Back to top]](#)

## delete-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete compensating control by ID
Deletes the specified compensating control from the data store.

[API Spec](https://developer.sailpoint.com/docs/api/delete-control-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | the ID (UUID) of the compensating control to delete. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODControlsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SODControlsApi(configuration);
const id: string = 3e078865-55ed-43cf-b83c-85c58d2016e6; // the ID (UUID) of the compensating control to delete.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteControlV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get compensating control by ID
Returns a single compensating control by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-control-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the compensating control to fetch |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Compensatingcontrolresponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODControlsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SODControlsApi(configuration);
const id: string = 3e078865-55ed-43cf-b83c-85c58d2016e6; // The ID of the compensating control to fetch
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getControlV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-controls-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Compensating Controls
Returns a list of compensating controls associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/list-controls-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* | [optional] [default to undefined]
**sort** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. | [optional] [default to undefined]

### Return type

`Array<Compensatingcontrolresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODControlsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SODControlsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = type eq "Mitigation" and name co "payroll"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional)
const sort: string = -name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional)
const result = await apiInstance.listControlsV1({  });
console.log(result);
```

[[Back to top]](#)

## put-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Put Compensating Control
Updates the specified compensating control.

[API Spec](https://developer.sailpoint.com/docs/api/put-control-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the Compensating Control to be updated. |  [default to undefined]
**compensatingcontrolupdate** | `Compensatingcontrolupdate` | Data needed to put a Compensating Control | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Compensatingcontrolresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODControlsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Compensatingcontrolupdate } from '@sailpoint/api-client/dist/sod_controls/api';

const configuration = new Configuration();
const apiInstance = new SODControlsApi(configuration);
const id: string = 3e078865-55ed-43cf-b83c-85c58d2016e6; // The unique identifier of the Compensating Control to be updated.
const compensatingcontrolupdate: Compensatingcontrolupdate = {
  "owner" : {
    "id" : "3e07886555ed43cfb83c85c58d2016e6",
    "type" : "IDENTITY"
  },
  "name" : "a name",
  "description" : "a description",
  "secondaryOwners" : [ {
    "id" : "943a7c57da334d07ba2454bf7fcf144f",
    "type" : "GOVERNANCE_GROUP"
  } ],
  "action" : "Workflow",
  "expiration" : "20d",
  "type" : "Mitigation",
  "justificationRequired" : true,
  "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
}; // Data needed to put a Compensating Control
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putControlV1({ id: id, compensatingcontrolupdate: compensatingcontrolupdate });
console.log(result);
```

[[Back to top]](#)

