# JITActivationConvert

# JITActivationConvertApi
  Use this API to convert the assignment type of an entitlement connection between
STANDING and JIT (Just-In-Time Privileged).

OAuth scope required: **idn:jit-assignment-type-conversion:manage**
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-entitlement-connection-conversion-v1**](#start-entitlement-connection-conversion-v1) | **POST** `/convert-entitlement-connection/v1` | Convert entitlement connection assignment type


## start-entitlement-connection-conversion-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Convert entitlement connection assignment type
Initiates an asynchronous workflow to convert the assignment type of an entitlement connection
between `STANDING` and `JIT` (Just-In-Time Privileged).

The response is returned with HTTP 202 Accepted while the conversion workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-entitlement-connection-conversion-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**convertEntitlementConnectionRequest** | `ConvertEntitlementConnectionRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ConvertEntitlementConnectionResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { JITActivationConvertApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ConvertEntitlementConnectionRequest } from '@sailpoint/api-client/dist/jit_activation_convert/api';

const configuration = new Configuration();
const apiInstance = new JITActivationConvertApi(configuration);
const convertEntitlementConnectionRequest: ConvertEntitlementConnectionRequest = {
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3",
  "targetType" : "JIT"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startEntitlementConnectionConversionV1({ convertEntitlementConnectionRequest: convertEntitlementConnectionRequest });
console.log(result);
```

[[Back to top]](#)

