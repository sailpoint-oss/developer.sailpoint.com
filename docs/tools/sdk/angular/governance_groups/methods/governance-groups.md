# GovernanceGroups

# GovernanceGroupsService
  Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud.

A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user.

Refer to [Creating and Managing Governance Groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-workgroup-v1**](#create-workgroup-v1) | **POST** `/workgroups/v1` | Create a new governance group.
[**delete-workgroup-members-v1**](#delete-workgroup-members-v1) | **POST** `/workgroups/v1/{workgroupId}/members/bulk-delete` | Remove members from governance group
[**delete-workgroup-v1**](#delete-workgroup-v1) | **DELETE** `/workgroups/v1/{id}` | Delete a governance group
[**delete-workgroups-in-bulk-v1**](#delete-workgroups-in-bulk-v1) | **POST** `/workgroups/v1/bulk-delete` | Delete governance group(s)
[**get-workgroup-v1**](#get-workgroup-v1) | **GET** `/workgroups/v1/{id}` | Get governance group by id
[**list-connections-v1**](#list-connections-v1) | **GET** `/workgroups/v1/{workgroupId}/connections` | List connections for governance group
[**list-workgroup-members-v1**](#list-workgroup-members-v1) | **GET** `/workgroups/v1/{workgroupId}/members` | List governance group members
[**list-workgroups-v1**](#list-workgroups-v1) | **GET** `/workgroups/v1` | List governance groups
[**patch-workgroup-v1**](#patch-workgroup-v1) | **PATCH** `/workgroups/v1/{id}` | Patch a governance group
[**update-workgroup-members-v1**](#update-workgroup-members-v1) | **POST** `/workgroups/v1/{workgroupId}/members/bulk-add` | Add members to governance group


## create-workgroup-v1
Create a new governance group.
This API creates a new Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/create-workgroup-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateWorkgroupV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**workgroupDto** | `WorkgroupDto` |  | 

### Return type

`Observable<WorkgroupDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';
import { WorkgroupDto } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  createWorkgroupV1(): void {
    const workgroupDto: WorkgroupDto = ; // 
    this.api.createWorkgroupV1({ workgroupDto: workgroupDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-workgroup-members-v1
Remove members from governance group
This API removes one or more  members from a Governance Group.  A
>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroup-members-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteWorkgroupMembersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**workgroupId** | `string` | ID of the Governance Group. |  [default to undefined]
**bulkWorkgroupMembersRequestInner** | `Array<BulkWorkgroupMembersRequestInner>` | List of identities to be removed from  a Governance Group members list. | 

### Return type

`Observable<Array<WorkgroupMemberDeleteItem>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';
import { BulkWorkgroupMembersRequestInner } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  deleteWorkgroupMembersV1(): void {
    const workgroupId: string = ; // ID of the Governance Group.
    const bulkWorkgroupMembersRequestInner: Array<BulkWorkgroupMembersRequestInner> = ; // List of identities to be removed from  a Governance Group members list.
    this.api.deleteWorkgroupMembersV1({ workgroupId: workgroupId, bulkWorkgroupMembersRequestInner: bulkWorkgroupMembersRequestInner }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-workgroup-v1
Delete a governance group
This API deletes a Governance Group by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroup-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteWorkgroupV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Governance Group |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  deleteWorkgroupV1(): void {
    const id: string = ; // ID of the Governance Group
    this.api.deleteWorkgroupV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-workgroups-in-bulk-v1
Delete governance group(s)

This API initiates a bulk deletion of one or more Governance Groups.

>  If any of the indicated Governance Groups have one or more connections associated with it,then those Governance Groups will be added in  **inUse** list of the response. Governance Group(s) marked as **inUse** can not be deleted.

>  If any of the indicated Governance Groups is not does not exists in Organization,then those Governance Groups will be added in **notFound** list of the response. Governance Groups marked as **notFound** will not be deleted.

>  If any of the indicated Governance Groups does not have any connections associated with it,then those Governance Groups will be added in **deleted** list of the response. A Governance Group marked as **deleted** will be deleted from current Organization.

>  If the request contains any **inUse** or **notFound** Governance Group IDs then it skips only these Governance Groups for deletion and deletes the rest of Governance Groups which have no connections associated with it. 

>  **This API has limit number of Governance Groups can be deleted at one time. If the request contains more then 100 Governance Groups IDs to be deleted then the API will throw an exception.**

[API Spec](https://developer.sailpoint.com/docs/api/delete-workgroups-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteWorkgroupsInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**workgroupBulkDeleteRequest** | `WorkgroupBulkDeleteRequest` |  | 

### Return type

`Observable<Array<WorkgroupDeleteItem>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';
import { WorkgroupBulkDeleteRequest } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  deleteWorkgroupsInBulkV1(): void {
    const workgroupBulkDeleteRequest: WorkgroupBulkDeleteRequest = ; // 
    this.api.deleteWorkgroupsInBulkV1({ workgroupBulkDeleteRequest: workgroupBulkDeleteRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-workgroup-v1
Get governance group by id
This API returns a Governance Groups by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-workgroup-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetWorkgroupV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Governance Group |  [default to undefined]

### Return type

`Observable<WorkgroupDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  getWorkgroupV1(): void {
    const id: string = ; // ID of the Governance Group
    this.api.getWorkgroupV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-connections-v1
List connections for governance group
This API returns list of connections associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/list-connections-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListConnectionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**workgroupId** | `string` | ID of the Governance Group. |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<WorkgroupConnectionDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  listConnectionsV1(): void {
    const workgroupId: string = ; // ID of the Governance Group.
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    this.api.listConnectionsV1({ workgroupId: workgroupId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-workgroup-members-v1
List governance group members
This API returns list of members associated with a Governance Group.

[API Spec](https://developer.sailpoint.com/docs/api/list-workgroup-members-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkgroupMembersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**workgroupId** | `string` | ID of the Governance Group. |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<ListWorkgroupMembersV1200ResponseInner>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  listWorkgroupMembersV1(): void {
    const workgroupId: string = ; // ID of the Governance Group.
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
    this.api.listWorkgroupMembersV1({ workgroupId: workgroupId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-workgroups-v1
List governance groups
This API returns list of Governance Groups

[API Spec](https://developer.sailpoint.com/docs/api/list-workgroups-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListWorkgroupsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** | [optional] [default to undefined]

### Return type

`Observable<Array<WorkgroupDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  listWorkgroupsV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, sw, in*  **memberships.identityId**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified, id, description** (optional)
    this.api.listWorkgroupsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-workgroup-v1
Patch a governance group
This API updates an existing governance group by ID. The following fields and objects are patchable:
* name
* description
* owner

[API Spec](https://developer.sailpoint.com/docs/api/patch-workgroup-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchWorkgroupV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Governance Group |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | [optional]

### Return type

`Observable<WorkgroupDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  patchWorkgroupV1(): void {
    const id: string = ; // ID of the Governance Group
    const jsonPatchOperation: Array<JsonPatchOperation> = ; //  (optional)
    this.api.patchWorkgroupV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-workgroup-members-v1
Add members to governance group
This API adds one or more members to a Governance Group.  A token with API, ORG_ADMIN authority is required to call this API.

>  **Following field of Identity is an optional field in the request.**

>  **name**

[API Spec](https://developer.sailpoint.com/docs/api/update-workgroup-members-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateWorkgroupMembersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**workgroupId** | `string` | ID of the Governance Group. |  [default to undefined]
**bulkWorkgroupMembersRequestInner** | `Array<BulkWorkgroupMembersRequestInner>` | List of identities to be added to a Governance Group members list. | 

### Return type

`Observable<Array<WorkgroupMemberAddItem>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { GovernanceGroupsService } from '@sailpoint/angular-sdk/governance_groups';
import { BulkWorkgroupMembersRequestInner } from '@sailpoint/angular-sdk/governance_groups';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(GovernanceGroupsService);

  updateWorkgroupMembersV1(): void {
    const workgroupId: string = ; // ID of the Governance Group.
    const bulkWorkgroupMembersRequestInner: Array<BulkWorkgroupMembersRequestInner> = ; // List of identities to be added to a Governance Group members list.
    this.api.updateWorkgroupMembersV1({ workgroupId: workgroupId, bulkWorkgroupMembersRequestInner: bulkWorkgroupMembersRequestInner }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

