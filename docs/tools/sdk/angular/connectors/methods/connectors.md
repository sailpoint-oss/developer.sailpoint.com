# Connectors

# ConnectorsService
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about using connectors in Identity Security Cloud.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-connector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateCustomConnectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**v3CreateConnectorDto** | `V3CreateConnectorDto` |  | 

### Return type

`Observable<V3ConnectorDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';
import { V3CreateConnectorDto } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  createCustomConnectorV1(): void {
    const v3CreateConnectorDto: V3CreateConnectorDto = ; // 
    this.api.createCustomConnectorV1({ v3CreateConnectorDto: v3CreateConnectorDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-custom-connector-v1
Delete connector by script name
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-connector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteCustomConnectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  deleteCustomConnectorV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    this.api.deleteCustomConnectorV1({ scriptName: scriptName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-correlation-config-v1
Get connector correlation configuration
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-correlation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorCorrelationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]

### Return type

`Observable<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  getConnectorCorrelationConfigV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    this.api.getConnectorCorrelationConfigV1({ scriptName: scriptName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-list-v1
Get connector list
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-list-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorListV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

`Observable<Array<V3ConnectorDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  getConnectorListV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const locale: string = ; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; (optional)
    this.api.getConnectorListV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-source-config-v1
Get connector source configuration
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-source-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorSourceConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]

### Return type

`Observable<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  getConnectorSourceConfigV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    this.api.getConnectorSourceConfigV1({ scriptName: scriptName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-source-template-v1
Get connector source template
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-source-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorSourceTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]

### Return type

`Observable<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  getConnectorSourceTemplateV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    this.api.getConnectorSourceTemplateV1({ scriptName: scriptName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-translations-v1
Get connector translations
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-translations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorTranslationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; |  [default to undefined]

### Return type

`Observable<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  getConnectorTranslationsV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    const locale: string = ; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot;
    this.api.getConnectorTranslationsV1({ scriptName: scriptName, locale: locale }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-v1
Get connector by script name
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | [optional] [default to undefined]

### Return type

`Observable<ConnectorDetail>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  getConnectorV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    const locale: string = ; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; (optional)
    this.api.getConnectorV1({ scriptName: scriptName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-connector-correlation-config-v1
Update connector correlation configuration
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-correlation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutConnectorCorrelationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]
**file** | `Blob` | connector correlation config xml file |  [default to undefined]

### Return type

`Observable<UpdateDetail>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  putConnectorCorrelationConfigV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    const file: Blob = ; // connector correlation config xml file
    this.api.putConnectorCorrelationConfigV1({ scriptName: scriptName, file: file }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-connector-source-config-v1
Update connector source configuration
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-source-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutConnectorSourceConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**file** | `Blob` | connector source config xml file |  [default to undefined]

### Return type

`Observable<UpdateDetail>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  putConnectorSourceConfigV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    const file: Blob = ; // connector source config xml file
    this.api.putConnectorSourceConfigV1({ scriptName: scriptName, file: file }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-connector-source-template-v1
Update connector source template
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-source-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutConnectorSourceTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**file** | `Blob` | connector source template xml file |  [default to undefined]

### Return type

`Observable<UpdateDetail>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  putConnectorSourceTemplateV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    const file: Blob = ; // connector source template xml file
    this.api.putConnectorSourceTemplateV1({ scriptName: scriptName, file: file }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-connector-translations-v1
Update connector translations
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-translations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutConnectorTranslationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. |  [default to undefined]
**locale** | `'de' | 'no' | 'fi' | 'sv' | 'ru' | 'pt' | 'ko' | 'zh-TW' | 'en' | 'it' | 'fr' | 'zh-CN' | 'hu' | 'es' | 'cs' | 'ja' | 'pl' | 'da' | 'nl'` | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; |  [default to undefined]

### Return type

`Observable<UpdateDetail>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  putConnectorTranslationsV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    const locale: string = ; // The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot;
    this.api.putConnectorTranslationsV1({ scriptName: scriptName, locale: locale }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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


[API Spec](https://developer.sailpoint.com/docs/api/update-connector-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateConnectorV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of connector detail update operations  | 

### Return type

`Observable<ConnectorDetail>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorsService } from '@sailpoint/angular-sdk/connectors';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/connectors';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorsService);

  updateConnectorV1(): void {
    const scriptName: string = ; // The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of connector detail update operations 
    this.api.updateConnectorV1({ scriptName: scriptName, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

