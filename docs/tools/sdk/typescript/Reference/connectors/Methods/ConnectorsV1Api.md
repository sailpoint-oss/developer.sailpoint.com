---
id: v1-connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Connectors', 'v1Connectors']
slug: /tools/sdk/typescript/connectors/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'v1Connectors']
---

# ConnectorsV1Api
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about using connectors in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-connector-v1**](#create-custom-connector-v1) | **POST** `/connectors/v1` | Create custom connector
[**delete-custom-connector-v1**](#delete-custom-connector-v1) | **DELETE** `/connectors/v1/{scriptName}` | Delete connector by script name
[**get-connector-correlation-config-v1**](#get-connector-correlation-config-v1) | **GET** `/connectors/v1/{scriptName}/correlation-config` | Get connector correlation configuration
[**get-connector-list-v1**](#get-connector-list-v1) | **GET** `/connectors/v1` | Get connector list
[**get-connector-source-config-v1**](#get-connector-source-config-v1) | **GET** `/connectors/v1/{scriptName}/source-config` | Get connector source configuration
[**get-connector-source-template-v1**](#get-connector-source-template-v1) | **GET** `/connectors/v1/{scriptName}/source-template` | Get connector source template
[**get-connector-translations-v1**](#get-connector-translations-v1) | **GET** `/connectors/v1/{scriptName}/translations/{locale}` | Get connector translations
[**get-connector-v1**](#get-connector-v1) | **GET** `/connectors/v1/{scriptName}` | Get connector by script name
[**put-connector-correlation-config-v1**](#put-connector-correlation-config-v1) | **PUT** `/connectors/v1/{scriptName}/correlation-config` | Update connector correlation configuration
[**put-connector-source-config-v1**](#put-connector-source-config-v1) | **PUT** `/connectors/v1/{scriptName}/source-config` | Update connector source configuration
[**put-connector-source-template-v1**](#put-connector-source-template-v1) | **PUT** `/connectors/v1/{scriptName}/source-template` | Update connector source template
[**put-connector-translations-v1**](#put-connector-translations-v1) | **PUT** `/connectors/v1/{scriptName}/translations/{locale}` | Update connector translations
[**update-connector-v1**](#update-connector-v1) | **PATCH** `/connectors/v1/{scriptName}` | Update connector by script name


## create-custom-connector-v1
Create custom connector
Create custom connector.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-connector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**v3createconnectordtoV1** | `V3createconnectordtoV1` |  | 

### Return type

`V3connectordtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const v3createconnectordtoV1: V3createconnectordtoV1 = ; // 
const result = await apiInstance.createCustomConnectorV1({ v3createconnectordtoV1: v3createconnectordtoV1 });
console.log(result);
```

[[Back to top]](#)

## delete-custom-connector-v1
Delete connector by script name
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-connector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const result = await apiInstance.deleteCustomConnectorV1({ scriptName: scriptName });
console.log(result);
```

[[Back to top]](#)

## get-connector-correlation-config-v1
Get connector correlation configuration
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-correlation-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]

### Return type

`string`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
const result = await apiInstance.getConnectorCorrelationConfigV1({ scriptName: scriptName });
console.log(result);
```

[[Back to top]](#)

## get-connector-list-v1
Get connector list
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-list-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

`Array<V3connectordtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const filters: string = directConnect eq "true"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const locale: string = de; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; (optional)
const result = await apiInstance.getConnectorListV1({  });
console.log(result);
```

[[Back to top]](#)

## get-connector-source-config-v1
Get connector source configuration
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]

### Return type

`string`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const result = await apiInstance.getConnectorSourceConfigV1({ scriptName: scriptName });
console.log(result);
```

[[Back to top]](#)

## get-connector-source-template-v1
Get connector source template
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-template-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]

### Return type

`string`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const result = await apiInstance.getConnectorSourceTemplateV1({ scriptName: scriptName });
console.log(result);
```

[[Back to top]](#)

## get-connector-translations-v1
Get connector translations
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-translations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; |  [default to undefined]

### Return type

`string`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
const locale: string = de; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot;
const result = await apiInstance.getConnectorTranslationsV1({ scriptName: scriptName, locale: locale });
console.log(result);
```

[[Back to top]](#)

## get-connector-v1
Get connector by script name
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

`ConnectordetailV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const locale: string = de; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; (optional)
const result = await apiInstance.getConnectorV1({ scriptName: scriptName });
console.log(result);
```

[[Back to top]](#)

## put-connector-correlation-config-v1
Update connector correlation configuration
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-correlation-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]
**file** | `File` | connector correlation config xml file |  [default to undefined]

### Return type

`UpdatedetailV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
const file: File = BINARY_DATA_HERE; // connector correlation config xml file
const result = await apiInstance.putConnectorCorrelationConfigV1({ scriptName: scriptName, file: file });
console.log(result);
```

[[Back to top]](#)

## put-connector-source-config-v1
Update connector source configuration
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**file** | `File` | connector source config xml file |  [default to undefined]

### Return type

`UpdatedetailV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const file: File = BINARY_DATA_HERE; // connector source config xml file
const result = await apiInstance.putConnectorSourceConfigV1({ scriptName: scriptName, file: file });
console.log(result);
```

[[Back to top]](#)

## put-connector-source-template-v1
Update connector source template
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-template-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**file** | `File` | connector source template xml file |  [default to undefined]

### Return type

`UpdatedetailV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const file: File = BINARY_DATA_HERE; // connector source template xml file
const result = await apiInstance.putConnectorSourceTemplateV1({ scriptName: scriptName, file: file });
console.log(result);
```

[[Back to top]](#)

## put-connector-translations-v1
Update connector translations
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-translations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; |  [default to undefined]

### Return type

`UpdatedetailV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
const locale: string = de; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot;
const result = await apiInstance.putConnectorTranslationsV1({ scriptName: scriptName, locale: locale });
console.log(result);
```

[[Back to top]](#)

## update-connector-v1
Update connector by script name
This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-connector-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of connector detail update operations  | 

### Return type

`ConnectordetailV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { ConnectorsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorsV1Api(configuration);
const scriptName: string = aScriptName; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = ; // A list of connector detail update operations 
const result = await apiInstance.updateConnectorV1({ scriptName: scriptName, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

