# Tags

# TagsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-tag-v1**](#create-tag-v1) | **POST** `/tags/v1` | Create tag
[**delete-tag-by-id-v1**](#delete-tag-by-id-v1) | **DELETE** `/tags/v1/{id}` | Delete tag
[**get-tag-by-id-v1**](#get-tag-by-id-v1) | **GET** `/tags/v1/{id}` | Get tag by id
[**list-tags-v1**](#list-tags-v1) | **GET** `/tags/v1` | List tags


## create-tag-v1
Create tag
This API creates new tag.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/create-tag-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateTagV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tag2** | `Tag2` |  | 

### Return type

`Observable<Tag2>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TagsService } from '@sailpoint/angular-sdk/tags';
import { Tag2 } from '@sailpoint/angular-sdk/tags';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TagsService);

  createTagV1(): void {
    const tag2: Tag2 = ; // 
    this.api.createTagV1({ tag2: tag2 }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-tag-by-id-v1
Delete tag
This API deletes a tag by specified id.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-tag-by-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteTagByIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the object reference to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TagsService } from '@sailpoint/angular-sdk/tags';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TagsService);

  deleteTagByIdV1(): void {
    const id: string = ; // The ID of the object reference to delete.
    this.api.deleteTagByIdV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-tag-by-id-v1
Get tag by id
Returns a tag by its id.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-tag-by-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTagByIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the object reference to retrieve. |  [default to undefined]

### Return type

`Observable<Tag2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TagsService } from '@sailpoint/angular-sdk/tags';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TagsService);

  getTagByIdV1(): void {
    const id: string = ; // The ID of the object reference to retrieve.
    this.api.getTagByIdV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-tags-v1
List tags
This API returns a list of tags.

A token with API, ORG_ADMIN, CERT_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-tags-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListTagsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<Tag2>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TagsService } from '@sailpoint/angular-sdk/tags';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TagsService);

  listTagsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified** (optional)
    this.api.listTagsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

