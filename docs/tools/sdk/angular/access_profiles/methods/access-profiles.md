# AccessProfiles

# AccessProfilesService
  Use this API to implement and customize access profile functionality. 
With this functionality in place, administrators can create access profiles and configure them for use throughout Identity Security Cloud, enabling users to get the access they need quickly and securely.

Access profiles group entitlements, which represent access rights on sources. 

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

Identity Security Cloud uses access profiles in many features, including the following:

- Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles.

- Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements. 

- Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile.

- Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity&#39;s role. 

In Identity Security Cloud, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones. 
Administrators can enable and disable an access profile, and they can also make the following configurations: 

- Manage Entitlements: Manage the profile&#39;s access by adding and removing entitlements. 

- Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked. 
Do not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile.

- Multiple Account Options: Define the logic Identity Security Cloud uses to provision access to an identity with multiple accounts on the source. 

Refer to [Managing Access Profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) for more information about access profiles.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-profile-v1**](#create-access-profile-v1) | **POST** `/access-profiles/v1` | Create access profile
[**delete-access-profile-v1**](#delete-access-profile-v1) | **DELETE** `/access-profiles/v1/{id}` | Delete the specified access profile
[**delete-access-profiles-in-bulk-v1**](#delete-access-profiles-in-bulk-v1) | **POST** `/access-profiles/v1/bulk-delete` | Delete access profile(s)
[**delete-metadata-from-access-profile-by-key-and-value-v1**](#delete-metadata-from-access-profile-by-key-and-value-v1) | **DELETE** `/access-profiles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from access profile
[**get-access-profile-entitlements-v1**](#get-access-profile-entitlements-v1) | **GET** `/access-profiles/v1/{id}/entitlements` | List access profile\&#39;s entitlements
[**get-access-profile-v1**](#get-access-profile-v1) | **GET** `/access-profiles/v1/{id}` | Get an access profile
[**list-access-profiles-v1**](#list-access-profiles-v1) | **GET** `/access-profiles/v1` | List access profiles
[**patch-access-profile-v1**](#patch-access-profile-v1) | **PATCH** `/access-profiles/v1/{id}` | Patch a specified access profile
[**search-access-profiles-by-filter-v1**](#search-access-profiles-by-filter-v1) | **POST** `/access-profiles/v1/filter` | Filter access profiles by metadata
[**update-access-profiles-in-bulk-v1**](#update-access-profiles-in-bulk-v1) | **POST** `/access-profiles/v1/bulk-update-requestable` | Update access profile(s) requestable field.
[**update-access-profiles-metadata-by-filter-v1**](#update-access-profiles-metadata-by-filter-v1) | **POST** `/access-profiles/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**update-access-profiles-metadata-by-ids-v1**](#update-access-profiles-metadata-by-ids-v1) | **POST** `/access-profiles/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**update-access-profiles-metadata-by-query-v1**](#update-access-profiles-metadata-by-query-v1) | **POST** `/access-profiles/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query
[**update-attribute-key-and-value-to-access-profile-v1**](#update-attribute-key-and-value-to-access-profile-v1) | **POST** `/access-profiles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to access profile


## create-access-profile-v1
Create access profile
Create an access profile.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with access profile access requests.
A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateAccessProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfile** | `AccessProfile` |  | 

### Return type

`Observable<AccessProfile>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfile } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  createAccessProfileV1(): void {
    const accessProfile: AccessProfile = ; // 
    this.api.createAccessProfileV1({ accessProfile: accessProfile }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-access-profile-v1
Delete the specified access profile
This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteAccessProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Access Profile to delete |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  deleteAccessProfileV1(): void {
    const id: string = ; // ID of the Access Profile to delete
    this.api.deleteAccessProfileV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-access-profiles-in-bulk-v1
Delete access profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-profiles-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteAccessProfilesInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfileBulkDeleteRequest** | `AccessProfileBulkDeleteRequest` |  | 

### Return type

`Observable<AccessProfileBulkDeleteResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfileBulkDeleteRequest } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  deleteAccessProfilesInBulkV1(): void {
    const accessProfileBulkDeleteRequest: AccessProfileBulkDeleteRequest = ; // 
    this.api.deleteAccessProfilesInBulkV1({ accessProfileBulkDeleteRequest: accessProfileBulkDeleteRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-metadata-from-access-profile-by-key-and-value-v1
Remove metadata from access profile
This API removes a single Access Model Metadata value from an access profile by attribute key and attribute value.

[API Spec](https://developer.sailpoint.com/docs/api/delete-metadata-from-access-profile-by-key-and-value-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMetadataFromAccessProfileByKeyAndValueV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The access profile\&#39;s ID. |  [default to undefined]
**attributeKey** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValue** | `string` | Technical name of the Attribute Value. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  deleteMetadataFromAccessProfileByKeyAndValueV1(): void {
    const id: string = ; // The access profile\&#39;s ID.
    const attributeKey: string = ; // Technical name of the Attribute.
    const attributeValue: string = ; // Technical name of the Attribute Value.
    this.api.deleteMetadataFromAccessProfileByKeyAndValueV1({ id: id, attributeKey: attributeKey, attributeValue: attributeValue }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-profile-entitlements-v1
List access profile\'s entitlements
Use this API to get a list of an access profile's entitlements. 
A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-entitlements-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessProfileEntitlementsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the access profile containing the entitlements. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<Entitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  getAccessProfileEntitlementsV1(): void {
    const id: string = ; // ID of the access profile containing the entitlements.
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)
    this.api.getAccessProfileEntitlementsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-profile-v1
Get an access profile
This API returns an Access Profile by its ID.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with access profile access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Access Profile |  [default to undefined]

### Return type

`Observable<AccessProfile>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  getAccessProfileV1(): void {
    const id: string = ; // ID of the Access Profile
    this.api.getAccessProfileV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-access-profiles-v1
List access profiles
Get a list of access profiles.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/list-access-profiles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAccessProfilesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**forSubadmin** | `string` | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  If you specify an identity that isn\&#39;t a subadmin, the API returns a 400 Bad Request error. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
**forSegmentIds** | `string` | Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | [optional] [default to undefined]
**includeUnsegmented** | `boolean` | Indicates whether the response list should contain unsegmented access profiles. If &#x60;for-segment-ids&#x60; is absent or empty, specifying *include-unsegmented* as &#x60;false&#x60; results in an error. | [optional] [default to true]

### Return type

`Observable<Array<AccessProfile>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  listAccessProfilesV1(): void {
    const forSubadmin: string = ; // Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  If you specify an identity that isn\&#39;t a subadmin, the API returns a 400 Bad Request error. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    const forSegmentIds: string = ; // Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
    const includeUnsegmented: boolean = ; // Indicates whether the response list should contain unsegmented access profiles. If &#x60;for-segment-ids&#x60; is absent or empty, specifying *include-unsegmented* as &#x60;false&#x60; results in an error. (optional)
    this.api.listAccessProfilesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-access-profile-v1
Patch a specified access profile
This API updates an existing Access Profile. The following fields are patchable:

**name**

**description**

**enabled**

**owner**

**additionalOwners**

**requestable**

**accessRequestConfig**

**revokeRequestConfig**

**segments**

**entitlements**

**provisioningCriteria**

**source** (must be updated with entitlements belonging to new source in the same API call)

If you need to change the `source` of the access profile, you can do so only if you update the `entitlements` in the same API call.  The new entitlements can only come from the target source that you want to change to.  Look for the example "Replace Source" in the examples dropdown.

Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with access profile access requests.

A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

[API Spec](https://developer.sailpoint.com/docs/api/patch-access-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchAccessProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Access Profile to patch |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | 

### Return type

`Observable<AccessProfile>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  patchAccessProfileV1(): void {
    const id: string = ; // ID of the Access Profile to patch
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // 
    this.api.patchAccessProfileV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-access-profiles-by-filter-v1
Filter access profiles by metadata
Get a list of access profiles filtered by Access Model Metadata and by filter expression. Filtering is supported by filter expression, by metadata attribute key and values, or by both together.

[API Spec](https://developer.sailpoint.com/docs/api/search-access-profiles-by-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchAccessProfilesByFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfileListFilterDTO** | `AccessProfileListFilterDTO` |  | 
**forSubadmin** | `string` | Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  If you specify an identity that isn\&#39;t a subadmin, the API returns a 400 Bad Request error. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
**forSegmentIds** | `string` | Filters the returned list to those access profiles assigned to the specified segment IDs. | [optional] [default to undefined]
**includeUnsegmented** | `boolean` | Whether the returned list includes unsegmented access profiles. | [optional] [default to true]

### Return type

`Observable<Array<AccessProfile>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfileListFilterDTO } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  searchAccessProfilesByFilterV1(): void {
    const accessProfileListFilterDTO: AccessProfileListFilterDTO = ; // 
    const forSubadmin: string = ; // Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  If you specify an identity that isn\&#39;t a subadmin, the API returns a 400 Bad Request error. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    const forSegmentIds: string = ; // Filters the returned list to those access profiles assigned to the specified segment IDs. (optional)
    const includeUnsegmented: boolean = ; // Whether the returned list includes unsegmented access profiles. (optional)
    this.api.searchAccessProfilesByFilterV1({ accessProfileListFilterDTO: accessProfileListFilterDTO }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-profiles-in-bulk-v1
Update access profile(s) requestable field.
This API initiates a bulk update of field requestable for one or more Access Profiles.

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
 A SOURCE_SUBADMIN may only use this API to update Access Profiles which are associated with Sources they are able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessProfilesInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfileBulkUpdateRequestInner** | `Array<AccessProfileBulkUpdateRequestInner>` |  | 

### Return type

`Observable<Array<AccessProfileUpdateItem>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfileBulkUpdateRequestInner } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  updateAccessProfilesInBulkV1(): void {
    const accessProfileBulkUpdateRequestInner: Array<AccessProfileBulkUpdateRequestInner> = ; // 
    this.api.updateAccessProfilesInBulkV1({ accessProfileBulkUpdateRequestInner: accessProfileBulkUpdateRequestInner }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-profiles-metadata-by-filter-v1
Bulk-update metadata by filter
This API initiates a bulk update of Access Model Metadata for every access profile matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-filter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessProfilesMetadataByFilterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfileMetadataBulkUpdateByFilterRequest** | `AccessProfileMetadataBulkUpdateByFilterRequest` |  | 

### Return type

`Observable<AccessProfileMetadataBulkUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfileMetadataBulkUpdateByFilterRequest } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  updateAccessProfilesMetadataByFilterV1(): void {
    const accessProfileMetadataBulkUpdateByFilterRequest: AccessProfileMetadataBulkUpdateByFilterRequest = ; // 
    this.api.updateAccessProfilesMetadataByFilterV1({ accessProfileMetadataBulkUpdateByFilterRequest: accessProfileMetadataBulkUpdateByFilterRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-profiles-metadata-by-ids-v1
Bulk-update metadata by ids
This API initiates a bulk update of Access Model Metadata for one or more access profiles by a list of access profile IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum access profile count in a single request is 3000. A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-ids-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessProfilesMetadataByIdsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfileMetadataBulkUpdateByIdRequest** | `AccessProfileMetadataBulkUpdateByIdRequest` |  | 

### Return type

`Observable<AccessProfileMetadataBulkUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfileMetadataBulkUpdateByIdRequest } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  updateAccessProfilesMetadataByIdsV1(): void {
    const accessProfileMetadataBulkUpdateByIdRequest: AccessProfileMetadataBulkUpdateByIdRequest = ; // 
    this.api.updateAccessProfilesMetadataByIdsV1({ accessProfileMetadataBulkUpdateByIdRequest: accessProfileMetadataBulkUpdateByIdRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-access-profiles-metadata-by-query-v1
Bulk-update metadata by query
This API initiates a bulk update of Access Model Metadata for every access profile matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-profiles-metadata-by-query-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccessProfilesMetadataByQueryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessProfileMetadataBulkUpdateByQueryRequest** | `AccessProfileMetadataBulkUpdateByQueryRequest` |  | 

### Return type

`Observable<AccessProfileMetadataBulkUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';
import { AccessProfileMetadataBulkUpdateByQueryRequest } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  updateAccessProfilesMetadataByQueryV1(): void {
    const accessProfileMetadataBulkUpdateByQueryRequest: AccessProfileMetadataBulkUpdateByQueryRequest = ; // 
    this.api.updateAccessProfilesMetadataByQueryV1({ accessProfileMetadataBulkUpdateByQueryRequest: accessProfileMetadataBulkUpdateByQueryRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-attribute-key-and-value-to-access-profile-v1
Add metadata to access profile
This API adds a single Access Model Metadata value to an access profile by attribute key and attribute value. A single access profile cannot be assigned more than 25 metadata values. Adding custom metadata requires a suite license.

[API Spec](https://developer.sailpoint.com/docs/api/update-attribute-key-and-value-to-access-profile-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAttributeKeyAndValueToAccessProfileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The access profile\&#39;s ID. |  [default to undefined]
**attributeKey** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValue** | `string` | Technical name of the Attribute Value. |  [default to undefined]

### Return type

`Observable<AccessProfile>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessProfilesService } from '@sailpoint/angular-sdk/access_profiles';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessProfilesService);

  updateAttributeKeyAndValueToAccessProfileV1(): void {
    const id: string = ; // The access profile\&#39;s ID.
    const attributeKey: string = ; // Technical name of the Attribute.
    const attributeValue: string = ; // Technical name of the Attribute Value.
    this.api.updateAttributeKeyAndValueToAccessProfileV1({ id: id, attributeKey: attributeKey, attributeValue: attributeValue }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

