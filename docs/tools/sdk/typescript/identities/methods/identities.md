# Identities

# IdentitiesApi
  Use this API to implement identity functionality.
With this functionality in place, administrators can synchronize an identity&#39;s attributes with its various source attributes.

Identity Security Cloud uses identities as users&#39; authoritative accounts. Identities can own other accounts, entitlements, and attributes.

An identity has a variety of attributes, such as an account name, an email address, a job title, and more.
These identity attributes can be correlated with different attributes on different sources.
For example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and Identity Security Cloud knows they are the same person with the same access and attributes.

In Identity Security Cloud, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.
To manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.
They can then select the identity they want to manually synchronize and use the hamburger menu to select &#39;Synchronize Attributes.&#39;
Doing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity.

Refer to [Synchronizing Attributes](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html) for more information about synchronizing attributes.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-identity-v1**](#delete-identity-v1) | **DELETE** `/identities/v1/{id}` | Delete identity
[**get-identity-ownership-details-v1**](#get-identity-ownership-details-v1) | **GET** `/identities/v1/{identityId}/ownership` | Get ownership details
[**get-identity-v1**](#get-identity-v1) | **GET** `/identities/v1/{id}` | Identity details
[**get-role-assignment-v1**](#get-role-assignment-v1) | **GET** `/identities/v1/{identityId}/role-assignments/{assignmentId}` | Role assignment details
[**get-role-assignments-v1**](#get-role-assignments-v1) | **GET** `/identities/v1/{identityId}/role-assignments` | List role assignments
[**list-entitlements-by-identity-v1**](#list-entitlements-by-identity-v1) | **GET** `/entitlements/v1/identities/{id}/entitlements` | List of entitlements by identity.
[**list-identities-v1**](#list-identities-v1) | **GET** `/identities/v1` | List identities
[**reset-identity-v1**](#reset-identity-v1) | **POST** `/identities/v1/{id}/reset` | Reset an identity
[**send-identity-verification-account-token-v1**](#send-identity-verification-account-token-v1) | **POST** `/identities/v1/{id}/verification/account/send` | Send password reset email
[**start-identities-invite-v1**](#start-identities-invite-v1) | **POST** `/identities/v1/invite` | Invite identities to register
[**start-identity-processing-v1**](#start-identity-processing-v1) | **POST** `/identities/v1/process` | Process a list of identityids
[**synchronize-attributes-for-identity-v1**](#synchronize-attributes-for-identity-v1) | **POST** `/identities/v1/{identityId}/synchronize-attributes` | Attribute synchronization for single identity.


## delete-identity-v1
Delete identity
The API returns successful response if the requested identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity Id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity Id
const result = await apiInstance.deleteIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-identity-ownership-details-v1
Get ownership details
Use this API to return an identity's owned objects that will cause problems for deleting the identity. 
Use this API as a checklist of objects that you need to reassign to a different identity before you can delete the identity. 
For a full list of objects owned by an identity, use the [Search API](https://developer.sailpoint.com/docs/api/search-post-v-1).  When you search for identities, the returned identities have a property, `owns`, that contains a more comprehensive list of identity's owned objects.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-ownership-details-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | Identity ID. |  [default to undefined]

### Return type

`IdentityOwnershipAssociationDetails`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const identityId: string = ff8081814d2a8036014d701f3fbf53fa; // Identity ID.
const result = await apiInstance.getIdentityOwnershipDetailsV1({ identityId: identityId });
console.log(result);
```

[[Back to top]](#)

## get-identity-v1
Identity details
This API returns a single identity using the Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity Id |  [default to undefined]

### Return type

`Identity`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity Id
const result = await apiInstance.getIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-role-assignment-v1
Role assignment details


[API Spec](https://developer.sailpoint.com/docs/api/get-role-assignment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | Identity Id |  [default to undefined]
**assignmentId** | `string` | Assignment Id |  [default to undefined]

### Return type

`RoleAssignmentDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const identityId: string = ef38f94347e94562b5bb8424a56397d8; // Identity Id
const assignmentId: string = 1cbb0705b38c4226b1334eadd8874086; // Assignment Id
const result = await apiInstance.getRoleAssignmentV1({ identityId: identityId, assignmentId: assignmentId });
console.log(result);
```

[[Back to top]](#)

## get-role-assignments-v1
List role assignments
This returns either a list of Role Assignments when querying with either a Role Id or Role Name, or a list of Role Assignment References if querying with only identity Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-assignments-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | Identity Id to get the role assignments for |  [default to undefined]
**roleId** | `string` | Role Id to filter the role assignments with | [optional] [default to undefined]
**roleName** | `string` | Role name to filter the role assignments with | [optional] [default to undefined]

### Return type

`Array<GetRoleAssignmentsV1200ResponseInner>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const identityId: string = ef38f94347e94562b5bb8424a56397d8; // Identity Id to get the role assignments for
const roleId: string = e7697a1e96d04db1ac7b0f4544915d2c; // Role Id to filter the role assignments with (optional)
const roleName: string = Engineer; // Role name to filter the role assignments with (optional)
const result = await apiInstance.getRoleAssignmentsV1({ identityId: identityId });
console.log(result);
```

[[Back to top]](#)

## list-entitlements-by-identity-v1
List of entitlements by identity.
The API returns a list of all entitlements assigned to an identity, either directly or through the role or access profile. A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-by-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity Id |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IdentityEntitlements>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity Id
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listEntitlementsByIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-identities-v1
List identities
This API returns a list of identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-identities-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** | [optional] [default to undefined]
**defaultFilter** | `'CORRELATED_ONLY' | 'NONE'` | Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated&#x3D;true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. | [optional] [default to &#39;CORRELATED_ONLY&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<Identity>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const filters: string = id eq "6c9079b270a266a60170a2779fcb0006" or correlated eq false; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **alias**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw*  **email**: *eq, sw*  **cloudStatus**: *eq*  **processingState**: *eq*  **correlated**: *eq*  **protected**: *eq* (optional)
const sorters: string = name,-cloudStatus; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, alias, cloudStatus** (optional)
const defaultFilter: string = NONE; // Adds additional filter to filters query parameter.  CORRELATED_ONLY adds correlated&#x3D;true and returns only identities that are correlated.  NONE does not add any and returns all identities that satisfy filters query parameter. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listIdentitiesV1({  });
console.log(result);
```

[[Back to top]](#)

## reset-identity-v1
Reset an identity
Use this endpoint to reset a user's identity if they have forgotten their authentication information like their answers to knowledge-based questions. Resetting an identity de-registers the user and removes any elevated user levels they have.

[API Spec](https://developer.sailpoint.com/docs/api/reset-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity Id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity Id
const result = await apiInstance.resetIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## send-identity-verification-account-token-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Send password reset email
This API sends an email with the link to start Password Reset. After selecting the link an identity will be able to set up a new password. Emails expire after 2 hours.


[API Spec](https://developer.sailpoint.com/docs/api/send-identity-verification-account-token-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity ID |  [default to undefined]
**sendAccountVerificationRequest** | `SendAccountVerificationRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SendAccountVerificationRequest } from '@sailpoint/api-client/dist/identities/api';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity ID
const sendAccountVerificationRequest: SendAccountVerificationRequest = {
  "sourceName" : "Active Directory Source",
  "via" : "EMAIL_WORK"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.sendIdentityVerificationAccountTokenV1({ id: id, sendAccountVerificationRequest: sendAccountVerificationRequest });
console.log(result);
```

[[Back to top]](#)

## start-identities-invite-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Invite identities to register
This API submits a task for inviting given identities via email to complete registration. The invitation email will include the link. After selecting the link an identity will be able to set up password and log in into the system. Invitations expire after 7 days. By default invitations send to the work identity email. It can be changed in Admin > Identities > Identity Profiles by selecting corresponding profile and editing Invitation Options.

This task will send an invitation email only for unregistered identities.

The executed task status can be checked by Task Management > [Get task status by ID](https://developer.sailpoint.com/docs/api/get-task-status-v-1).


[API Spec](https://developer.sailpoint.com/docs/api/start-identities-invite-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**inviteIdentitiesRequest** | `InviteIdentitiesRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TaskStatus`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { InviteIdentitiesRequest } from '@sailpoint/api-client/dist/identities/api';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const inviteIdentitiesRequest: InviteIdentitiesRequest = {
  "ids" : [ "2b568c65bc3c4c57a43bd97e3a8e55", "2c9180867769897d01776ed5f125512f" ],
  "uninvited" : false
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startIdentitiesInviteV1({ inviteIdentitiesRequest: inviteIdentitiesRequest });
console.log(result);
```

[[Back to top]](#)

## start-identity-processing-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Process a list of identityids
This operation should not be used to schedule your own identity processing or to perform system wide identity refreshes. The system will use a combination of [event-based processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#event-based-processing) and [scheduled processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html?h=process#scheduled-processing) that runs every day at 8:00 AM and 8:00 PM in the tenant's timezone to keep your identities synchronized. 

This endpoint will perform the following tasks:
1. Calculate identity attributes, including applying or running any rules or transforms (e.g. calculate Lifecycle State at a point-in-time it's expected to change).
2. Evaluate role assignments, leading to assignment of new roles and removal of existing roles.
3. Enforce provisioning for any assigned accesses that haven't been fulfilled (e.g. failure due to source health).
4. Recalculate manager relationships.
5. Potentially clean-up identity processing errors, assuming the error has been resolved.

[API Spec](https://developer.sailpoint.com/docs/api/start-identity-processing-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**processIdentitiesRequest** | `ProcessIdentitiesRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`TaskResultResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ProcessIdentitiesRequest } from '@sailpoint/api-client/dist/identities/api';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const processIdentitiesRequest: ProcessIdentitiesRequest = {
  "identityIds" : [ "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8", "ef38f94347e94562b5bb8424a56397d8" ]
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.startIdentityProcessingV1({ processIdentitiesRequest: processIdentitiesRequest });
console.log(result);
```

[[Back to top]](#)

## synchronize-attributes-for-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Attribute synchronization for single identity.
This end-point performs attribute synchronization for a selected identity. The endpoint can be called once in 10 seconds per identity.

[API Spec](https://developer.sailpoint.com/docs/api/synchronize-attributes-for-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | The Identity id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`IdentitySyncJob`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentitiesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentitiesApi(configuration);
const identityId: string = identityId_example; // The Identity id
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.synchronizeAttributesForIdentityV1({ identityId: identityId });
console.log(result);
```

[[Back to top]](#)

