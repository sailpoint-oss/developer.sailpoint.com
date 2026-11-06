# Tenant

# TenantApi
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-v1**](#get-tenant-v1) | **GET** `/tenant/v1` | Get tenant information.


## get-tenant-v1
Get tenant information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Tenant`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TenantApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);
const result = await apiInstance.getTenantV1({  });
console.log(result);
```

[[Back to top]](#)

