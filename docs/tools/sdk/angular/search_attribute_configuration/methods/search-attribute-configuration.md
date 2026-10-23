# SearchAttributeConfiguration

# SearchAttributeConfigurationService
  Use this API to implement search attribute configuration functionality, along with [Search](https://developer.sailpoint.com/docs/api/search).
With this functionality in place, administrators can create custom search attributes that and run extended searches based on those attributes to further narrow down their searches and get the information and insights they want. 

Identity Security Cloud (ISC) enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using ISC&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Search Attribute Configuration](https://developer.sailpoint.com/docs/extensibility/rules/rule-utility/#configuration-of-search-attributes-within-identity-security-cloud) for more information about ISC&#39;s search and its different possibilities. 

With Search Attribute Configuration, administrators can create, manage, and run searches based on the attributes they want to search. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-search-attribute-config-v1**](#create-search-attribute-config-v1) | **POST** `/accounts/v1/search-attribute-config` | Create extended search attributes
[**delete-search-attribute-config-v1**](#delete-search-attribute-config-v1) | **DELETE** `/accounts/v1/search-attribute-config/{name}` | Delete extended search attribute
[**get-search-attribute-config-v1**](#get-search-attribute-config-v1) | **GET** `/accounts/v1/search-attribute-config` | List extended search attributes
[**get-single-search-attribute-config-v1**](#get-single-search-attribute-config-v1) | **GET** `/accounts/v1/search-attribute-config/{name}` | Get extended search attribute
[**patch-search-attribute-config-v1**](#patch-search-attribute-config-v1) | **PATCH** `/accounts/v1/search-attribute-config/{name}` | Update extended search attribute


## create-search-attribute-config-v1
Create extended search attributes
Create and configure extended search attributes.  This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig.
>**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes' `applicationAttributes`.**

[API Spec](https://developer.sailpoint.com/docs/api/create-search-attribute-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSearchAttributeConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchAttributeConfig** | `SearchAttributeConfig` |  | 

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchAttributeConfigurationService } from '@sailpoint/angular-sdk/search_attribute_configuration';
import { SearchAttributeConfig } from '@sailpoint/angular-sdk/search_attribute_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchAttributeConfigurationService);

  createSearchAttributeConfigV1(): void {
    const searchAttributeConfig: SearchAttributeConfig = ; // 
    this.api.createSearchAttributeConfigV1({ searchAttributeConfig: searchAttributeConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-search-attribute-config-v1
Delete extended search attribute
Delete an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/delete-search-attribute-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteSearchAttributeConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | Name of the extended search attribute configuration to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchAttributeConfigurationService } from '@sailpoint/angular-sdk/search_attribute_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchAttributeConfigurationService);

  deleteSearchAttributeConfigV1(): void {
    const name: string = ; // Name of the extended search attribute configuration to delete.
    this.api.deleteSearchAttributeConfigV1({ name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-search-attribute-config-v1
List extended search attributes
Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/get-search-attribute-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSearchAttributeConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<SearchAttributeConfig>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchAttributeConfigurationService } from '@sailpoint/angular-sdk/search_attribute_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchAttributeConfigurationService);

  getSearchAttributeConfigV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getSearchAttributeConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-single-search-attribute-config-v1
Get extended search attribute
Get an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/get-single-search-attribute-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSingleSearchAttributeConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | Name of the extended search attribute configuration to get. |  [default to undefined]

### Return type

`Observable<SearchAttributeConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchAttributeConfigurationService } from '@sailpoint/angular-sdk/search_attribute_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchAttributeConfigurationService);

  getSingleSearchAttributeConfigV1(): void {
    const name: string = ; // Name of the extended search attribute configuration to get.
    this.api.getSingleSearchAttributeConfigV1({ name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-search-attribute-config-v1
Update extended search attribute
Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

[API Spec](https://developer.sailpoint.com/docs/api/patch-search-attribute-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchSearchAttributeConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | Name of the search attribute configuration to patch. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | 

### Return type

`Observable<SearchAttributeConfig>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchAttributeConfigurationService } from '@sailpoint/angular-sdk/search_attribute_configuration';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/search_attribute_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchAttributeConfigurationService);

  patchSearchAttributeConfigV1(): void {
    const name: string = ; // Name of the search attribute configuration to patch.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // 
    this.api.patchSearchAttributeConfigV1({ name: name, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

