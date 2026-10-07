# MachineClassificationConfig

# MachineClassificationConfigApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source\&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source\&#39;s classification config


## delete-machine-classification-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete source\'s classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-classification-config-v-1)

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
import { MachineClassificationConfigApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineClassificationConfigApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteMachineClassificationConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## get-machine-classification-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-classification-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`MachineClassificationConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineClassificationConfigApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineClassificationConfigApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getMachineClassificationConfigV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## set-machine-classification-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source\'s classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-classification-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**machineClassificationConfig** | `MachineClassificationConfig` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`MachineClassificationConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineClassificationConfigApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MachineClassificationConfig } from '@sailpoint/api-client/dist/machine_classification_config/api';

const configuration = new Configuration();
const apiInstance = new MachineClassificationConfigApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const machineClassificationConfig: MachineClassificationConfig = {
  "criteria" : {
    "children" : [ {
      "children" : [ {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      }, {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      } ],
      "caseSensitive" : false,
      "dataType" : "dataType",
      "attribute" : "employeeType",
      "operation" : "EQUALS",
      "value" : "SERVICE"
    }, {
      "children" : [ {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      }, {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      } ],
      "caseSensitive" : false,
      "dataType" : "dataType",
      "attribute" : "employeeType",
      "operation" : "EQUALS",
      "value" : "SERVICE"
    } ],
    "caseSensitive" : false,
    "dataType" : "dataType",
    "attribute" : "distinguishedName",
    "operation" : "EQUALS",
    "value" : "OU=Service Accounts"
  },
  "created" : "2017-07-11T18:45:37.098Z",
  "modified" : "2018-06-25T20:22:28.104Z",
  "classificationMethod" : "SOURCE",
  "enabled" : true
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.setMachineClassificationConfigV1({ sourceId: sourceId, machineClassificationConfig: machineClassificationConfig });
console.log(result);
```

[[Back to top]](#)

