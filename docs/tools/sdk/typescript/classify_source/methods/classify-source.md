# ClassifySource

# ClassifySourceApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-classify-machine-account-from-source-v1**](#delete-classify-machine-account-from-source-v1) | **DELETE** `/sources/v1/{sourceId}/classify` | Cancel classify source\&#39;s accounts process
[**get-classify-machine-account-from-source-status-v1**](#get-classify-machine-account-from-source-status-v1) | **GET** `/sources/v1/{sourceId}/classify` | Source accounts classification status
[**send-classify-machine-account-from-source-v1**](#send-classify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/classify` | Classify source\&#39;s all accounts


## delete-classify-machine-account-from-source-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Cancel classify source\'s accounts process
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-classify-machine-account-from-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ClassifySourceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ClassifySourceApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteClassifyMachineAccountFromSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-classify-machine-account-from-source-status-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Source accounts classification status
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-classify-machine-account-from-source-status-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SourceClassificationStatus`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ClassifySourceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ClassifySourceApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getClassifyMachineAccountFromSourceStatusV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## send-classify-machine-account-from-source-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Classify source\'s all accounts
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-from-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SendClassifyMachineAccountFromSourceV1200Response`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ClassifySourceApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ClassifySourceApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.sendClassifyMachineAccountFromSourceV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

