# MachineIdentityMetadata

# MachineIdentityMetadataApi
  Use this API to get reference data about machine identities, such as the machine identity subtypes available in the tenant. Use these values to build filters and forms for machine identities.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-machine-identity-subtypes-v1**](#list-machine-identity-subtypes-v1) | **GET** `/machine-identity-metadata/v1/subtypes` | List machine identity subtypes


## list-machine-identity-subtypes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity subtypes
This API returns the machine identity subtypes available in the tenant.


The list includes **Application** and **Device**. When agentic identity governance is enabled for the tenant, the
list also includes **AI Agent**.


When Machine Identity Security is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-subtypes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineIdentityMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineIdentityMetadataApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listMachineIdentitySubtypesV1({  });
console.log(result);
```

[[Back to top]](#)

