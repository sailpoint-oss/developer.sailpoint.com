# TaggedObjects

# TaggedObjectsService
  Use this API to implement object tagging functionality. 
With object tagging functionality in place, any user in an organization can use tags as a way to group objects together and find them more quickly when the user searches Identity Security Cloud. 

In Identity Security Cloud, users can search their tenants for information and add tags objects they find.
Tagging an object provides users with a way of grouping objects together and makes it easier to find these objects in the future. 

For example, if a user is searching for an entitlement that grants a risky level of access to Active Directory, it&#39;s possible that the user may have to search through hundreds of entitlements to find the correct one. 
Once the user finds that entitlement, the user can add a tag to the entitlement, &quot;AD_RISKY&quot; to make it easier to find the entitlement again.
The user can add the same tag to multiple objects the user wants to group together for an easy future search, and the user can also do so in bulk.
When the user wants to find that tagged entitlement again, the user can search for &quot;tags:AD_RISKY&quot; to find all objects with that tag. 

With the API, you can tag even more different object types than you can in Identity Security Cloud (access profiles, entitlements, identities, and roles). 
You can use the API to tag all these objects:

- Access profiles 

- Applications 

- Certification campaigns

- Entitlements

- Identities 

- Roles 

- SOD (separation of duties) policies

- Sources 

You can also use the API to directly find, create, and manage tagged objects without using search queries. 

There are limits to tags: 

- You can have up to 500 different tags in your tenant.

- You can apply up to 30 tags to one object. 

- You can have up to 10,000 tag associations, pairings of 1 tag to 1 object, in your tenant. 

Because of these limits, it is recommended that you work with your governance experts and security teams to establish a list of tags that are most expressive of governance objects and access managed by Identity Security Cloud. 

These are the types of information often expressed in tags: 

- Affected departments

- Compliance and regulatory categories 

- Remediation urgency levels 

- Risk levels 

Refer to [Tagging Items in Search](https://documentation.sailpoint.com/saas/help/search/index.html?h&#x3D;tags#tagging-items-in-search) for more information about tagging objects in Identity Security Cloud. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-tagged-object-v1**](#delete-tagged-object-v1) | **DELETE** `/tagged-objects/v1/{type}/{id}` | Delete object tags
[**delete-tags-to-many-object-v1**](#delete-tags-to-many-object-v1) | **POST** `/tagged-objects/v1/bulk-remove` | Remove tags from multiple objects
[**get-tagged-object-v1**](#get-tagged-object-v1) | **GET** `/tagged-objects/v1/{type}/{id}` | Get tagged object
[**list-tagged-objects-by-type-v1**](#list-tagged-objects-by-type-v1) | **GET** `/tagged-objects/v1/{type}` | List tagged objects by type
[**list-tagged-objects-v1**](#list-tagged-objects-v1) | **GET** `/tagged-objects/v1` | List tagged objects
[**put-tagged-object-v1**](#put-tagged-object-v1) | **PUT** `/tagged-objects/v1/{type}/{id}` | Update tagged object
[**set-tag-to-object-v1**](#set-tag-to-object-v1) | **POST** `/tagged-objects/v1` | Add tag to object
[**set-tags-to-many-objects-v1**](#set-tags-to-many-objects-v1) | **POST** `/tagged-objects/v1/bulk-add` | Tag multiple objects


## delete-tagged-object-v1
Delete object tags
Delete all tags from a tagged object.

[API Spec](https://developer.sailpoint.com/docs/api/delete-tagged-object-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteTaggedObjectV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE'` | The type of object to delete tags from. |  [default to undefined]
**id** | `string` | The ID of the object to delete tags from. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  deleteTaggedObjectV1(): void {
    const type: string = ; // The type of object to delete tags from.
    const id: string = ; // The ID of the object to delete tags from.
    this.api.deleteTaggedObjectV1({ type: type, id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-tags-to-many-object-v1
Remove tags from multiple objects
This API removes tags from multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/delete-tags-to-many-object-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteTagsToManyObjectV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkRemoveTaggedObject** | `BulkRemoveTaggedObject` | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';
import { BulkRemoveTaggedObject } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  deleteTagsToManyObjectV1(): void {
    const bulkRemoveTaggedObject: BulkRemoveTaggedObject = ; // Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.
    this.api.deleteTagsToManyObjectV1({ bulkRemoveTaggedObject: bulkRemoveTaggedObject }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-tagged-object-v1
Get tagged object
This gets a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/get-tagged-object-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTaggedObjectV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE'` | The type of tagged object to retrieve. |  [default to undefined]
**id** | `string` | The ID of the object reference to retrieve. |  [default to undefined]

### Return type

`Observable<TaggedObject>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  getTaggedObjectV1(): void {
    const type: string = ; // The type of tagged object to retrieve.
    const id: string = ; // The ID of the object reference to retrieve.
    this.api.getTaggedObjectV1({ type: type, id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-tagged-objects-by-type-v1
List tagged objects by type
This API returns a list of all tagged objects by type.

[API Spec](https://developer.sailpoint.com/docs/api/list-tagged-objects-by-type-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListTaggedObjectsByTypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE'` | The type of tagged object to retrieve. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<TaggedObject>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  listTaggedObjectsByTypeV1(): void {
    const type: string = ; // The type of tagged object to retrieve.
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional)
    this.api.listTaggedObjectsByTypeV1({ type: type }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-tagged-objects-v1
List tagged objects
This API returns a list of all tagged objects.

[API Spec](https://developer.sailpoint.com/docs/api/list-tagged-objects-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListTaggedObjectsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* | [optional] [default to undefined]

### Return type

`Observable<Array<TaggedObject>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  listTaggedObjectsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional)
    this.api.listTaggedObjectsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-tagged-object-v1
Update tagged object
This updates a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/put-tagged-object-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutTaggedObjectV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `'ACCESS_PROFILE' | 'APPLICATION' | 'CAMPAIGN' | 'ENTITLEMENT' | 'IDENTITY' | 'ROLE' | 'SOD_POLICY' | 'SOURCE'` | The type of tagged object to update. |  [default to undefined]
**id** | `string` | The ID of the object reference to update. |  [default to undefined]
**taggedObject** | `TaggedObject` |  | 

### Return type

`Observable<TaggedObject>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';
import { TaggedObject } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  putTaggedObjectV1(): void {
    const type: string = ; // The type of tagged object to update.
    const id: string = ; // The ID of the object reference to update.
    const taggedObject: TaggedObject = ; // 
    this.api.putTaggedObjectV1({ type: type, id: id, taggedObject: taggedObject }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-tag-to-object-v1
Add tag to object
This adds a tag to an object.

[API Spec](https://developer.sailpoint.com/docs/api/set-tag-to-object-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetTagToObjectV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**taggedObject** | `TaggedObject` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';
import { TaggedObject } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  setTagToObjectV1(): void {
    const taggedObject: TaggedObject = ; // 
    this.api.setTagToObjectV1({ taggedObject: taggedObject }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-tags-to-many-objects-v1
Tag multiple objects
This API adds tags to multiple objects.

[API Spec](https://developer.sailpoint.com/docs/api/set-tags-to-many-objects-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetTagsToManyObjectsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkAddTaggedObject** | `BulkAddTaggedObject` | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE. | 

### Return type

`Observable<Array<BulkTaggedObjectResponse>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { TaggedObjectsService } from '@sailpoint/angular-sdk/tagged_objects';
import { BulkAddTaggedObject } from '@sailpoint/angular-sdk/tagged_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(TaggedObjectsService);

  setTagsToManyObjectsV1(): void {
    const bulkAddTaggedObject: BulkAddTaggedObject = ; // Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.
    this.api.setTagsToManyObjectsV1({ bulkAddTaggedObject: bulkAddTaggedObject }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

