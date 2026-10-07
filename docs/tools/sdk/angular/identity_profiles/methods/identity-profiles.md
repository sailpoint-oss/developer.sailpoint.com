# IdentityProfiles

# IdentityProfilesService
  Use this API to implement identity profile functionality. 
With this functionality in place, administrators can view identity profiles and their configurations. 

Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.  

In Identity Security Cloud, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles. 
This list shows some details about each identity profile, along with its status. 
They can select an identity profile to view its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings. 

Refer to [Creating Identity Profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html) for more information about identity profiles.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-profile-v1**](#create-identity-profile-v1) | **POST** `/identity-profiles/v1` | Create identity profile
[**delete-identity-profile-v1**](#delete-identity-profile-v1) | **DELETE** `/identity-profiles/v1/{identityProfileId}` | Delete identity profile
[**delete-identity-profiles-v1**](#delete-identity-profiles-v1) | **POST** `/identity-profiles/v1/bulk-delete` | Delete identity profiles
[**export-identity-profiles-v1**](#export-identity-profiles-v1) | **GET** `/identity-profiles/v1/export` | Export identity profiles
[**generate-identity-preview-v1**](#generate-identity-preview-v1) | **POST** `/identity-profiles/v1/identity-preview` | Generate identity profile preview
[**get-default-identity-attribute-config-v1**](#get-default-identity-attribute-config-v1) | **GET** `/identity-profiles/v1/{identityProfileId}/default-identity-attribute-config` | Get default identity attribute config
[**get-identity-profile-v1**](#get-identity-profile-v1) | **GET** `/identity-profiles/v1/{identityProfileId}` | Get identity profile
[**import-identity-profiles-v1**](#import-identity-profiles-v1) | **POST** `/identity-profiles/v1/import` | Import identity profiles
[**list-identity-profiles-v1**](#list-identity-profiles-v1) | **GET** `/identity-profiles/v1` | List identity profiles
[**sync-identity-profile-v1**](#sync-identity-profile-v1) | **POST** `/identity-profiles/v1/{identityProfileId}/process-identities` | Process identities under profile
[**update-identity-profile-v1**](#update-identity-profile-v1) | **PATCH** `/identity-profiles/v1/{identityProfileId}` | Update identity profile


## create-identity-profile-v1
Create identity profile
Creates an identity profile.    

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateIdentityProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfile** | `IdentityProfile` |  | 

### Return type

`Observable<IdentityProfile>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';
import { IdentityProfile } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  createIdentityProfileV1(): void {
    const identityProfile: IdentityProfile = ; // 
    this.api.createIdentityProfileV1({ identityProfile: identityProfile }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-identity-profile-v1
Delete identity profile
Delete an identity profile by ID.
On success, this endpoint will return a reference to the bulk delete task result.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteIdentityProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]

### Return type

`Observable<TaskResultSimplified>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  deleteIdentityProfileV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    this.api.deleteIdentityProfileV1({ identityProfileId: identityProfileId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-identity-profiles-v1
Delete identity profiles
This deletes multiple Identity Profiles via a list of supplied IDs.

On success, this endpoint will return a reference to the bulk delete task result.

The following rights are required to access this endpoint: idn:identity-profile:delete

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-profiles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteIdentityProfilesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` | Identity Profile bulk delete request body. | 

### Return type

`Observable<TaskResultSimplified>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  deleteIdentityProfilesV1(): void {
    const requestBody: Array<string> = ; // Identity Profile bulk delete request body.
    this.api.deleteIdentityProfilesV1({ requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## export-identity-profiles-v1
Export identity profiles
This exports existing identity profiles in the format specified by the sp-config service.

[API Spec](https://developer.sailpoint.com/docs/api/export-identity-profiles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportIdentityProfilesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** | [optional] [default to undefined]

### Return type

`Observable<Array<IdentityProfileExportedObject>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  exportIdentityProfilesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, ne*  **priority**: *eq, ne* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority** (optional)
    this.api.exportIdentityProfilesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## generate-identity-preview-v1
Generate identity profile preview
This generates a non-persisted IdentityDetails object that will represent as the preview of the identities attribute when the given policy''s attribute config is applied.

[API Spec](https://developer.sailpoint.com/docs/api/generate-identity-preview-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GenerateIdentityPreviewV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityPreviewRequest** | `IdentityPreviewRequest` | Identity Preview request body. | 

### Return type

`Observable<IdentityPreviewResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';
import { IdentityPreviewRequest } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  generateIdentityPreviewV1(): void {
    const identityPreviewRequest: IdentityPreviewRequest = ; // Identity Preview request body.
    this.api.generateIdentityPreviewV1({ identityPreviewRequest: identityPreviewRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-default-identity-attribute-config-v1
Get default identity attribute config
This returns the default identity attribute config.

[API Spec](https://developer.sailpoint.com/docs/api/get-default-identity-attribute-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDefaultIdentityAttributeConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | The Identity Profile ID. |  [default to undefined]

### Return type

`Observable<IdentityAttributeConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  getDefaultIdentityAttributeConfigV1(): void {
    const identityProfileId: string = ; // The Identity Profile ID.
    this.api.getDefaultIdentityAttributeConfigV1({ identityProfileId: identityProfileId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identity-profile-v1
Get identity profile
Get a single identity profile by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentityProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]

### Return type

`Observable<IdentityProfile>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  getIdentityProfileV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    this.api.getIdentityProfileV1({ identityProfileId: identityProfileId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## import-identity-profiles-v1
Import identity profiles
This imports previously exported identity profiles.

[API Spec](https://developer.sailpoint.com/docs/api/import-identity-profiles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ImportIdentityProfilesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileExportedObject** | `Array<IdentityProfileExportedObject>` | Previously exported Identity Profiles. | 

### Return type

`Observable<ObjectImportResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';
import { IdentityProfileExportedObject } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  importIdentityProfilesV1(): void {
    const identityProfileExportedObject: Array<IdentityProfileExportedObject> = ; // Previously exported Identity Profiles.
    this.api.importIdentityProfilesV1({ identityProfileExportedObject: identityProfileExportedObject }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-identity-profiles-v1
List identity profiles
Get a list of identity profiles, based on the specified query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-profiles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListIdentityProfilesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** | [optional] [default to undefined]

### Return type

`Observable<Array<IdentityProfile>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  listIdentityProfilesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne, ge, gt, in, le, sw*  **name**: *eq, ne, ge, gt, in, le, sw*  **priority**: *eq, ne* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, priority, created, modified, owner.id, owner.name** (optional)
    this.api.listIdentityProfilesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## sync-identity-profile-v1
Process identities under profile
Process identities under the profile
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 
This should only be run on identity profiles that have the `identityRefreshRequired` attribute set to `true`. If `identityRefreshRequired` is false, then there is no benefit to running this operation. Typically, this operation is performed when a change is made to the identity profile or its related lifecycle states that requires a refresh.
This operation will perform the following activities on all identities under the identity profile.
1. Updates identity attribute according to the identity profile mappings. 2. Determines the identity's correct manager through manager correlation. 3. Updates the identity's access according to their assigned lifecycle state. 4. Updates the identity's access based on role assignment criteria.

[API Spec](https://developer.sailpoint.com/docs/api/sync-identity-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SyncIdentityProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | The Identity Profile ID to be processed |  [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  syncIdentityProfileV1(): void {
    const identityProfileId: string = ; // The Identity Profile ID to be processed
    this.api.syncIdentityProfileV1({ identityProfileId: identityProfileId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-identity-profile-v1
Update identity profile
Update a specified identity profile with this PATCH request.
  
You cannot update these fields:
* id
* created
* modified
* identityCount
* identityRefreshRequired
* Authoritative Source and Identity Attribute Configuration cannot be modified at the same time.

[API Spec](https://developer.sailpoint.com/docs/api/update-identity-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateIdentityProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityProfileId** | `string` | Identity profile ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`Observable<IdentityProfile>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityProfilesService } from '@sailpoint/angular-sdk/identity_profiles';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/identity_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityProfilesService);

  updateIdentityProfileV1(): void {
    const identityProfileId: string = ; // Identity profile ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // List of identity profile update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    this.api.updateIdentityProfileV1({ identityProfileId: identityProfileId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

