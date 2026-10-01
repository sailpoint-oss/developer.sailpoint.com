# IAICommonAccess

# IAICommonAccessApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-common-access-v1**](#create-common-access-v1) | **POST** `/common-access/v1` | Create common access items
[**get-common-access-v1**](#get-common-access-v1) | **GET** `/common-access/v1` | Get a paginated list of common access
[**update-common-access-status-in-bulk-v1**](#update-common-access-status-in-bulk-v1) | **POST** `/common-access/v1/update-status` | Bulk update common access status


## create-common-access-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create common access items
This API is used to add roles/access profiles to the list of common access for a customer. Requires authorization scope of iai:access-modeling:create

[API Spec](https://developer.sailpoint.com/docs/api/create-common-access-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**commonAccessItemRequest** | `CommonAccessItemRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`CommonAccessItemResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IAICommonAccessApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CommonAccessItemRequest } from '@sailpoint/api-client/dist/iai_common_access/api';

const configuration = new Configuration();
const apiInstance = new IAICommonAccessApi(configuration);
const commonAccessItemRequest: CommonAccessItemRequest = {
  "access" : {
    "ownerName" : "ownerName",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "type" : "ACCESS_PROFILE",
    "ownerId" : "ownerId"
  },
  "status" : "CONFIRMED"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createCommonAccessV1({ commonAccessItemRequest: commonAccessItemRequest });
console.log(result);
```

[[Back to top]](#)

## get-common-access-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a paginated list of common access
This endpoint returns the current common access for a customer. The returned items can be filtered and sorted. Requires authorization scope of iai:access-modeling:read

[API Spec](https://developer.sailpoint.com/docs/api/get-common-access-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<CommonAccessResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IAICommonAccessApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IAICommonAccessApi(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = access.type eq "ROLE"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* (optional)
const sorters: string = access.name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getCommonAccessV1({  });
console.log(result);
```

[[Back to top]](#)

## update-common-access-status-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk update common access status
This submits an update request to the common access application. At this time there are no parameters. Requires authorization scope of iai:access-modeling:update

[API Spec](https://developer.sailpoint.com/docs/api/update-common-access-status-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**commonAccessIDStatus** | `Array<CommonAccessIDStatus>` | Confirm or deny in bulk the common access ids that are (or aren\&#39;t) common access | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IAICommonAccessApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CommonAccessIDStatus } from '@sailpoint/api-client/dist/iai_common_access/api';

const configuration = new Configuration();
const apiInstance = new IAICommonAccessApi(configuration);
const commonAccessIDStatus: Array<CommonAccessIDStatus> = {
  "confirmedIds" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91", "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ],
  "deniedIds" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91", "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
}; // Confirm or deny in bulk the common access ids that are (or aren\&#39;t) common access
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateCommonAccessStatusInBulkV1({ commonAccessIDStatus: commonAccessIDStatus });
console.log(result);
```

[[Back to top]](#)

