# Certifications

# CertificationsService
  Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users&#39; access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations&#39; data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other Identity Security Cloud users as certification reviewers. 
Those reviewers can select the &#39;Certifications&#39; tab to view any of the certifications they either need to review or have already reviewed under the &#39;Active&#39; and &#39;Completed&#39; tabs, respectively. 

When a certification campaign is in progress, certification reviewers will see certifications listed under &#39;Active,&#39; where they can review the involved identities. 
Under the &#39;Decision&#39; column on the right, next to each access item, reviewers can select the checkmark to approve access, select the &#39;X&#39; to revoke access, or they can toggle the &#39;More Options&#39; menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. 

Once a reviewer has made decisions on all the certification&#39;s involved access items, he or she must select &#39;Sign Off&#39; to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer&#39;s list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities&#39; entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-certification-task-v1**](#get-certification-task-v1) | **GET** `/certification-tasks/v1/{id}` | Certification task by id
[**get-identity-certification-item-permissions-v1**](#get-identity-certification-item-permissions-v1) | **GET** `/certifications/v1/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for entitlement certification item
[**get-identity-certification-v1**](#get-identity-certification-v1) | **GET** `/certifications/v1/{id}` | Identity certification by id
[**get-pending-certification-tasks-v1**](#get-pending-certification-tasks-v1) | **GET** `/certification-tasks/v1` | List of pending certification tasks
[**list-certification-reviewers-v1**](#list-certification-reviewers-v1) | **GET** `/certifications/v1/{id}/reviewers` | List of reviewers for certification
[**list-identity-access-review-items-v1**](#list-identity-access-review-items-v1) | **GET** `/certifications/v1/{id}/access-review-items` | List of access review items
[**list-identity-certifications-v1**](#list-identity-certifications-v1) | **GET** `/certifications/v1` | List identity campaign certifications
[**make-identity-decision-v1**](#make-identity-decision-v1) | **POST** `/certifications/v1/{id}/decide` | Decide on a certification item
[**reassign-identity-certifications-v1**](#reassign-identity-certifications-v1) | **POST** `/certifications/v1/{id}/reassign` | Reassign identities or items
[**sign-off-identity-certification-v1**](#sign-off-identity-certification-v1) | **POST** `/certifications/v1/{id}/sign-off` | Finalize identity certification decisions
[**submit-reassign-certs-async-v1**](#submit-reassign-certs-async-v1) | **POST** `/certifications/v1/{id}/reassign-async` | Reassign certifications asynchronously


## get-certification-task-v1
Certification task by id
This API returns the certification task for the specified ID. Reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-certification-task-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetCertificationTaskV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The task ID |  [default to undefined]

### Return type

`Observable<CertificationTask>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  getCertificationTaskV1(): void {
    const id: string = ; // The task ID
    this.api.getCertificationTaskV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identity-certification-item-permissions-v1
Permissions for entitlement certification item
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-certification-item-permissions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentityCertificationItemPermissionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**itemId** | `string` | The certification item ID |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: 1?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<PermissionDTO>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  getIdentityCertificationItemPermissionsV1(): void {
    const certificationId: string = ; // The certification ID
    const itemId: string = ; // The certification item ID
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: 1?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getIdentityCertificationItemPermissionsV1({ certificationId: certificationId, itemId: itemId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identity-certification-v1
Identity certification by id
This API returns a single identity campaign certification by its ID. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-certification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentityCertificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The certification id |  [default to undefined]

### Return type

`Observable<IdentityCertificationDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  getIdentityCertificationV1(): void {
    const id: string = ; // The certification id
    this.api.getIdentityCertificationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-pending-certification-tasks-v1
List of pending certification tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification tasks. Any authenticated token can call this API, but only certification tasks you are authorized to review will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-pending-certification-tasks-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPendingCertificationTasksV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reviewerIdentity** | `string` | The ID of reviewer identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* | [optional] [default to undefined]

### Return type

`Observable<Array<CertificationTask>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  getPendingCertificationTasksV1(): void {
    const reviewerIdentity: string = ; // The ID of reviewer identity. *me* indicates the current user. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)
    this.api.getPendingCertificationTasksV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-certification-reviewers-v1
List of reviewers for certification
This API returns a list of reviewers for the certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-certification-reviewers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCertificationReviewersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The certification ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** | [optional] [default to undefined]

### Return type

`Observable<Array<IdentityReferenceWithNameAndEmail>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  listCertificationReviewersV1(): void {
    const id: string = ; // The certification ID
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)
    this.api.listCertificationReviewersV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-identity-access-review-items-v1
List of access review items
This API returns a list of access review items for an identity campaign certification. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-access-review-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListIdentityAccessReviewItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** | [optional] [default to undefined]
**entitlements** | `string` | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. | [optional] [default to undefined]
**accessProfiles** | `string` | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. | [optional] [default to undefined]
**roles** | `string` | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. | [optional] [default to undefined]

### Return type

`Observable<Array<AccessReviewItem>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  listIdentityAccessReviewItemsV1(): void {
    const id: string = ; // The identity campaign certification ID
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** (optional)
    const entitlements: string = ; // Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. (optional)
    const accessProfiles: string = ; // Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. (optional)
    const roles: string = ; // Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. (optional)
    this.api.listIdentityAccessReviewItemsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-identity-certifications-v1
List identity campaign certifications
Use this API to get a list of identity campaign certifications for the specified query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. This API does not support requests for certifications assigned to governance groups.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-certifications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListIdentityCertificationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reviewerIdentity** | `string` | Reviewer\&#39;s identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** | [optional] [default to undefined]

### Return type

`Observable<Array<IdentityCertificationDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  listIdentityCertificationsV1(): void {
    const reviewerIdentity: string = ; // Reviewer\&#39;s identity. *me* indicates the current user. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional)
    this.api.listIdentityCertificationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## make-identity-decision-v1
Decide on a certification item
The API makes a decision to approve or revoke one or more identity campaign certification items. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/make-identity-decision-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `MakeIdentityDecisionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the identity campaign certification on which to make decisions |  [default to undefined]
**reviewDecision** | `Array<ReviewDecision>` | A non-empty array of decisions to be made. | 

### Return type

`Observable<IdentityCertificationDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';
import { ReviewDecision } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  makeIdentityDecisionV1(): void {
    const id: string = ; // The ID of the identity campaign certification on which to make decisions
    const reviewDecision: Array<ReviewDecision> = ; // A non-empty array of decisions to be made.
    this.api.makeIdentityDecisionV1({ id: id, reviewDecision: reviewDecision }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reassign-identity-certifications-v1
Reassign identities or items
This API reassigns up to 50 identities or items in an identity campaign certification to another reviewer. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/reassign-identity-certifications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ReassignIdentityCertificationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**reviewReassign** | `ReviewReassign` |  | 

### Return type

`Observable<IdentityCertificationDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';
import { ReviewReassign } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  reassignIdentityCertificationsV1(): void {
    const id: string = ; // The identity campaign certification ID
    const reviewReassign: ReviewReassign = ; // 
    this.api.reassignIdentityCertificationsV1({ id: id, reviewReassign: reviewReassign }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## sign-off-identity-certification-v1
Finalize identity certification decisions
This API finalizes all decisions made on an identity campaign certification and initiates any remediations required. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/sign-off-identity-certification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SignOffIdentityCertificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]

### Return type

`Observable<IdentityCertificationDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  signOffIdentityCertificationV1(): void {
    const id: string = ; // The identity campaign certification ID
    this.api.signOffIdentityCertificationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## submit-reassign-certs-async-v1
Reassign certifications asynchronously
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another
reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the
reassignment is complete. 

Reviewers for this certification can also call this API.


[API Spec](https://developer.sailpoint.com/docs/api/submit-reassign-certs-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SubmitReassignCertsAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**reviewReassign** | `ReviewReassign` |  | 

### Return type

`Observable<CertificationTask>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CertificationsService } from '@sailpoint/angular-sdk/certifications';
import { ReviewReassign } from '@sailpoint/angular-sdk/certifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CertificationsService);

  submitReassignCertsAsyncV1(): void {
    const id: string = ; // The identity campaign certification ID
    const reviewReassign: ReviewReassign = ; // 
    this.api.submitReassignCertsAsyncV1({ id: id, reviewReassign: reviewReassign }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

