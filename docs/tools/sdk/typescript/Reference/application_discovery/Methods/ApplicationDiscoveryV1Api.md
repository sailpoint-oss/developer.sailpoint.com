---
id: v1-application-discovery
title: ApplicationDiscovery
pagination_label: ApplicationDiscovery
sidebar_label: ApplicationDiscovery
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApplicationDiscovery', 'v1ApplicationDiscovery']
slug: /tools/sdk/typescript/application_discovery/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscovery', 'v1ApplicationDiscovery']
---

# ApplicationDiscoveryV1Api
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-discovered-applications-v1**](#get-discovered-applications-v1) | **GET** `/discovered-applications/v1` | Get discovered applications for tenant
[**get-manual-discover-applications-csv-template-v1**](#get-manual-discover-applications-csv-template-v1) | **GET** `/manual-discover-applications-template/v1` | Download csv template for discovery
[**send-manual-discover-applications-csv-template-v1**](#send-manual-discover-applications-csv-template-v1) | **POST** `/manual-discover-applications/v1` | Upload csv to discover applications
[**start-application-discovery-v1**](#start-application-discovery-v1) | **POST** `/sources/v1/{sourceId}/discover-applications` | Start Application Discovery


## get-discovered-applications-v1
Get discovered applications for tenant
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-discovered-applications-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**detail** | `'SLIM' | 'FULL'` | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. | [optional] [default to undefined]
**filter** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** | [optional] [default to undefined]

### Return type

`Array<GetDiscoveredApplicationsV1200ResponseInnerV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApplicationDiscoveryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationDiscoveryV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const detail: string = FULL; // Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
const filter: string = name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas"); // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional)
const result = await apiInstance.getDiscoveredApplicationsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-manual-discover-applications-csv-template-v1
Download csv template for discovery
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-manual-discover-applications-csv-template-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`ManualdiscoverapplicationstemplateV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { ApplicationDiscoveryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationDiscoveryV1Api(configuration);
const result = await apiInstance.getManualDiscoverApplicationsCsvTemplateV1({  });
console.log(result);
```

[[Back to top]](#)

## send-manual-discover-applications-csv-template-v1
Upload csv to discover applications
Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-manual-discover-applications-csv-template-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**file** | `File` | The CSV file to upload containing &#x60;application_name&#x60; and &#x60;description&#x60; columns. Each row represents an application to be discovered. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { ApplicationDiscoveryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationDiscoveryV1Api(configuration);
const file: File = BINARY_DATA_HERE; // The CSV file to upload containing &#x60;application_name&#x60; and &#x60;description&#x60; columns. Each row represents an application to be discovered.
const result = await apiInstance.sendManualDiscoverApplicationsCsvTemplateV1({ file: file });
console.log(result);
```

[[Back to top]](#)

## start-application-discovery-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Start Application Discovery
Use this API to discover applications.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-application-discovery-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The sourceId. |  [default to undefined]
**applicationdiscoveryrequestV1** | `ApplicationdiscoveryrequestV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`ApplicationdiscoveryresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApplicationDiscoveryV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApplicationDiscoveryV1Api(configuration);
const sourceId: string = sourceId_example; // The sourceId.
const applicationdiscoveryrequestV1: ApplicationdiscoveryrequestV1 = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startApplicationDiscoveryV1({ sourceId: sourceId, applicationdiscoveryrequestV1: applicationdiscoveryrequestV1 });
console.log(result);
```

[[Back to top]](#)

