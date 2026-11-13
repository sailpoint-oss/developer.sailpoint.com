# MachineAccountRecommendation

# MachineAccountRecommendationApi
  Use this API to review machine account discovery results. Machine account discovery analyzes accounts and recommends whether each account belongs to a machine rather than a person.

You can get the recommendation for an account, including the reasons behind it, and you can list the reasons that machine account discovery reports, with a readable message for each reason.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-machine-account-recommendation-v1**](#get-machine-account-recommendation-v1) | **GET** `/accounts/v1/{id}/recommendation` | Get machine account recommendation
[**list-machine-account-discovery-reasons-v1**](#list-machine-account-discovery-reasons-v1) | **GET** `/ai-recommendations/v1/reasons/machine-account-discovery` | List machine account discovery reasons


## get-machine-account-recommendation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine account recommendation
This API returns the machine account discovery recommendation for an account. The recommendation states whether
the account is likely a machine account and lists the reasons that contributed to it.


When no recommendation exists for the account, this API returns `200` with an empty response body.


When machine account discovery is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-recommendation-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`MachineAccountRecommendation`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountRecommendationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountRecommendationApi(configuration);
const id: string = 2c9180835d2e5168015d32f890ca1581; // Account ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getMachineAccountRecommendationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-machine-account-discovery-reasons-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine account discovery reasons
This API returns the reasons that machine account discovery can report for a recommendation. Each reason has an
ID and a readable message. Use this list to show a message for each reason in a machine account recommendation.


Messages are localized. Send the `Accept-Language` header to choose a language. When the requested language is not
available, messages are returned in the default language.


The reasons are returned in the order defined by the catalog. When the catalog does not define an order, the
reasons are sorted by ID.


When machine account discovery is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-discovery-reasons-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**acceptLanguage** | `string` | Preferred language for the reason messages. | [optional] [default to &#39;en&#39;]

### Return type

`Array<MachineAccountDiscoveryReason>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountRecommendationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountRecommendationApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const acceptLanguage: string = en-US; // Preferred language for the reason messages. (optional)
const result = await apiInstance.listMachineAccountDiscoveryReasonsV1({  });
console.log(result);
```

[[Back to top]](#)

