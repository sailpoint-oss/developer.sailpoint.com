# UIMetadata

# UIMetadataApi
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata-v1**](#get-tenant-ui-metadata-v1) | **GET** `/ui-metadata/v1/tenant` | Get a tenant ui metadata
[**set-tenant-ui-metadata-v1**](#set-tenant-ui-metadata-v1) | **PUT** `/ui-metadata/v1/tenant` | Update tenant ui metadata


## get-tenant-ui-metadata-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a tenant ui metadata
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-ui-metadata-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TenantUiMetadataItemResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { UIMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new UIMetadataApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getTenantUiMetadataV1({  });
console.log(result);
```

[[Back to top]](#)

## set-tenant-ui-metadata-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update tenant ui metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/set-tenant-ui-metadata-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tenantUiMetadataItemUpdateRequest** | `TenantUiMetadataItemUpdateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TenantUiMetadataItemResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { UIMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { TenantUiMetadataItemUpdateRequest } from '@sailpoint/api-client/dist/ui_metadata/api';

const configuration = new Configuration();
const apiInstance = new UIMetadataApi(configuration);
const tenantUiMetadataItemUpdateRequest: TenantUiMetadataItemUpdateRequest = {
  "usernameEmptyText" : "Please provide your work email address...",
  "usernameLabel" : "Email",
  "iframeWhiteList" : "http://example.com http://example2.com",
  "instanceBadgeVisible" : true,
  "instanceBadgeDisplayName" : "Sandbox",
  "instanceBadgeColor" : "FFAA00"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.setTenantUiMetadataV1({ tenantUiMetadataItemUpdateRequest: tenantUiMetadataItemUpdateRequest });
console.log(result);
```

[[Back to top]](#)

