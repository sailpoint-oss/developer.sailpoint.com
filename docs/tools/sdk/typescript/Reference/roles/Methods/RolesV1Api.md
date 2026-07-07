---
id: v1-roles
title: Roles
pagination_label: Roles
sidebar_label: Roles
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Roles', 'v1Roles']
slug: /tools/sdk/typescript/roles/methods/roles
tags: ['SDK', 'Software Development Kit', 'Roles', 'v1Roles']
---

# RolesV1Api
  Use this API to implement and customize role functionality.
With this functionality in place, administrators can create roles and configure them for use throughout Identity Security Cloud. 
Identity Security Cloud can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks.

Entitlements represent the most granular level of access in Identity Security Cloud. 
Access profiles represent the next level and often group entitlements. 
Roles represent the broadest level of access and often group access profiles. 

For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, &#39;Employees,&#39; may represent the access all employees have at the organization, and a second, &#39;Developers,&#39; may represent the access all developers have at the organization.

An administrator can then create a broader set of access in the form of an access profile, &#39;AD Developers&#39; grouping the &#39;Employees&#39; entitlement with the &#39;Developers&#39; entitlement.

An administrator can then create an even broader set of access in the form of a role grouping the &#39;AD Developers&#39; access profile with another profile, &#39;GitHub Developers,&#39; grouping entitlements for the GitHub source.

When users only need Active Directory employee access, they can request access to the &#39;Employees&#39; entitlement.

When users need both Active Directory employee and developer access, they can request access to the &#39;AD Developers&#39; access profile.

When users need both the &#39;AD Developers&#39; access profile and the &#39;GitHub Developers&#39; access profile, they can request access to the role grouping both. 

Roles often represent positions within organizations. 
For example, an organization&#39;s accountant can access all the tools the organization&#39;s accountants need with the &#39;Accountant&#39; role. 
If the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant&#39;s &#39;Accountant&#39; access and grant access to the &#39;Engineer&#39; role instead, granting access to all the tools the organization&#39;s engineers need.

In Identity Security Cloud, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones. 
Administrators can enable and disable the role, and they can also make the following configurations: 

- Manage Access: Manage the role&#39;s access by adding or removing access profiles.

- Define Assignment: Define the criteria Identity Security Cloud uses to assign the role to identities. 
Use the first option, &#39;Standard Criteria,&#39; to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes. 
Use the second, &#39;Identity List,&#39; to specify the identities for assignment.

- Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked. 
Do not configure a role to be requestable without establishing a secure access request approval process for that role first. 

Refer to [Working with Roles](https://documentation.sailpoint.com/saas/help/access/roles.html) for more information about roles.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role-v1**](#create-role-v1) | **POST** `/roles/v1` | Create a role
[**delete-bulk-roles-v1**](#delete-bulk-roles-v1) | **POST** `/roles/v1/bulk-delete` | Delete role(s)
[**delete-metadata-from-role-by-key-and-value-v1**](#delete-metadata-from-role-by-key-and-value-v1) | **DELETE** `/roles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove a metadata from role.
[**delete-role-v1**](#delete-role-v1) | **DELETE** `/roles/v1/{id}` | Delete a role
[**get-bulk-update-status-by-id-v1**](#get-bulk-update-status-by-id-v1) | **GET** `/roles/v1/access-model-metadata/bulk-update/id` | Get bulk-update status by id
[**get-bulk-update-status-v1**](#get-bulk-update-status-v1) | **GET** `/roles/v1/access-model-metadata/bulk-update` | Get bulk-update statuses
[**get-role-assigned-identities-v1**](#get-role-assigned-identities-v1) | **GET** `/roles/v1/{id}/assigned-identities` | List identities assigned a role
[**get-role-entitlements-v1**](#get-role-entitlements-v1) | **GET** `/roles/v1/{id}/entitlements` | List role\&#39;s entitlements
[**get-role-v1**](#get-role-v1) | **GET** `/roles/v1/{id}` | Get a role
[**list-roles-v1**](#list-roles-v1) | **GET** `/roles/v1` | List roles
[**patch-role-v1**](#patch-role-v1) | **PATCH** `/roles/v1/{id}` | Patch a specified role
[**search-roles-by-filter-v1**](#search-roles-by-filter-v1) | **POST** `/roles/v1/filter` | Filter roles by metadata
[**update-attribute-key-and-value-to-role-v1**](#update-attribute-key-and-value-to-role-v1) | **POST** `/roles/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add a metadata to role.
[**update-roles-metadata-by-filter-v1**](#update-roles-metadata-by-filter-v1) | **POST** `/roles/v1/access-model-metadata/bulk-update/filter` | Bulk-update roles\&#39; metadata by filters
[**update-roles-metadata-by-ids-v1**](#update-roles-metadata-by-ids-v1) | **POST** `/roles/v1/access-model-metadata/bulk-update/ids` | Bulk-update roles\&#39; metadata by id
[**update-roles-metadata-by-query-v1**](#update-roles-metadata-by-query-v1) | **POST** `/roles/v1/access-model-metadata/bulk-update/query` | Bulk-update roles\&#39; metadata by query


## create-role-v1
Create a role
This API creates a role.

You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 

In addition, a ROLE_SUBADMIN may not create a role including an access profile if that access profile is associated with a source the ROLE_SUBADMIN is not associated with themselves. 

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles. However, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-role-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**roleV1** | `RoleV1` |  | 

### Return type

`RoleV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const roleV1: RoleV1 = ; // 
const result = await apiInstance.createRoleV1({ roleV1: roleV1 });
console.log(result);
```

[[Back to top]](#)

## delete-bulk-roles-v1
Delete role(s)
This endpoint initiates a bulk deletion of one or more roles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A user with ROLE_SUBADMIN authority can only call this endpoint if all roles included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-bulk-roles-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolebulkdeleterequestV1** | `RolebulkdeleterequestV1` |  | 

### Return type

`TaskresultdtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const rolebulkdeleterequestV1: RolebulkdeleterequestV1 = {"roleIds":["2c91808876438bb2017668b91919ecca","2c91808876438ba801766e129f151816"]}; // 
const result = await apiInstance.deleteBulkRolesV1({ rolebulkdeleterequestV1: rolebulkdeleterequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-metadata-from-role-by-key-and-value-v1
Remove a metadata from role.
This API initialize a request to remove a single Access Model Metadata from a role by attribute key and value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-metadata-from-role-by-key-and-value-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The role\&#39;s id. |  [default to undefined]
**attributeKey** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValue** | `string` | Technical name of the Attribute Value. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = 2c91808c74ff913f0175097daa9d59cd; // The role\&#39;s id.
const attributeKey: string = iscPrivacy; // Technical name of the Attribute.
const attributeValue: string = public; // Technical name of the Attribute Value.
const result = await apiInstance.deleteMetadataFromRoleByKeyAndValueV1({ id: id, attributeKey: attributeKey, attributeValue: attributeValue });
console.log(result);
```

[[Back to top]](#)

## delete-role-v1
Delete a role
This API deletes a Role by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-role-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Role |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = 2c91808a7813090a017814121e121518; // ID of the Role
const result = await apiInstance.deleteRoleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-bulk-update-status-by-id-v1
Get bulk-update status by id

This API initial a request for one bulk update's status by bulk update Id returns the status of the bulk update process.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-bulk-update-status-by-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Id of the bulk update task. |  [default to undefined]

### Return type

`RolebulkupdateresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = c24359c389374d0fb8585698a2189e3d; // The Id of the bulk update task.
const result = await apiInstance.getBulkUpdateStatusByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-bulk-update-status-v1
Get bulk-update statuses
This API returns a list of all unfinished bulk update process status of the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-bulk-update-status-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<RolegetallbulkupdateresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const result = await apiInstance.getBulkUpdateStatusV1({  });
console.log(result);
```

[[Back to top]](#)

## get-role-assigned-identities-v1
List identities assigned a role


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-assigned-identities-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Role for which the assigned Identities are to be listed |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** | [optional] [default to undefined]

### Return type

`Array<RoleidentityV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = 2c91808a7813090a017814121e121518; // ID of the Role for which the assigned Identities are to be listed
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = name sw Joe; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **aliasName**: *eq, sw*  **email**: *eq, sw*  **name**: *eq, sw, co* (optional)
const sorters: string = aliasName,name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, aliasName, email** (optional)
const result = await apiInstance.getRoleAssignedIdentitiesV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-role-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List role\'s entitlements
Get a list of entitlements associated with a specified role.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-entitlements-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Containing role\&#39;s ID. |  [default to undefined]
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<EntitlementV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // Containing role\&#39;s ID.
const limit: number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = attribute eq "memberOf"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
const sorters: string = name,-modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRoleEntitlementsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-role-v1
Get a role
This API returns a Role by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-role-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Role |  [default to undefined]

### Return type

`RoleV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = 2c91808a7813090a017814121e121518; // ID of the Role
const result = await apiInstance.getRoleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-roles-v1
List roles
This API returns a list of Roles.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-roles-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**forSubadmin** | `string` | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [optional] [default to undefined]
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
**forSegmentIds** | `string` | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. | [optional] [default to undefined]
**includeUnsegmented** | `boolean` | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [optional] [default to true]

### Return type

`Array<RoleV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const forSubadmin: string = 5168015d32f890ca15812c9180835d2e; // If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
const limit: number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = requestable eq false; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq* (optional)
const sorters: string = name,-modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
const forSegmentIds: string = 0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d; // If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs.  If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
const includeUnsegmented: boolean = false; // Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional)
const result = await apiInstance.listRolesV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-role-v1
Patch a specified role
This API updates an existing role using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:

* name
* description
* enabled
* owner
* additionalOwners
* accessProfiles
* entitlements
* membership
* requestable
* accessRequestConfig
* revokeRequestConfig
* segments
* accessModelMetadata   
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles included in the role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing roles, however, any new roles as well as any updates to existing descriptions will be limited to 2000 characters.

When you use this API to modify a role's membership identities, you can only modify up to a limit of 500 membership identities at a time.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-role-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Role to patch |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` |  | 

### Return type

`RoleV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = 2c91808a7813090a017814121e121518; // ID of the Role to patch
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/requestable","value":true},{"op":"replace","path":"/enabled","value":true}]; // 
const result = await apiInstance.patchRoleV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## search-roles-by-filter-v1
Filter roles by metadata
This API returns a list of Role that filter by metadata and filter, it support filter by  both path parameter and attribute key and values.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, HELPDESK, CERT_ADMIN, REPORT_ADMIN or SOURCE_ADMIN  authority is required to call this API. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-roles-by-filter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**forSubadmin** | `string` | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** | [optional] [default to undefined]
**forSegmentIds** | `string` | If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. | [optional] [default to undefined]
**includeUnsegmented** | `boolean` | Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. | [optional] [default to true]
**rolelistfilterdtoV1** | `RolelistfilterdtoV1` |  | [optional]

### Return type

`Array<RoleV1>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const forSubadmin: string = 5168015d32f890ca15812c9180835d2e; // If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
const limit: number = 50; // Max number of results to return See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // Boolean indicating whether a total count is returned, factoring in any filter parameters, in the X-Total-Count response header. The value is the total size of the collection that would be returned if limit and offset were ignored.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = name,-modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
const forSegmentIds: string = 0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d; // If present and not empty, additionally filters Roles to those which are assigned to the Segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
const includeUnsegmented: boolean = false; // Whether or not the response list should contain unsegmented Roles. If *for-segment-ids* is absent or empty, specifying *include-unsegmented* as false results in an error. (optional)
const rolelistfilterdtoV1: RolelistfilterdtoV1 = {"filters":"dimensional eq false","ammKeyValues":[{"attribute":"iscFederalClassifications","values":["secret"]}]}; //  (optional)
const result = await apiInstance.searchRolesByFilterV1({  });
console.log(result);
```

[[Back to top]](#)

## update-attribute-key-and-value-to-role-v1
Add a metadata to role.
This API initialize a request to add a single Access Model Metadata to a role by attribute key and attribute value. A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API. The maximum number of attributes in one role is 25. Custom metadata update, including ADD and REPLACE need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-attribute-key-and-value-to-role-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Id of a role |  [default to undefined]
**attributeKey** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValue** | `string` | Technical name of the Attribute Value. |  [default to undefined]

### Return type

`RoleV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const id: string = c24359c389374d0fb8585698a2189e3d; // The Id of a role
const attributeKey: string = iscPrivacy; // Technical name of the Attribute.
const attributeValue: string = public; // Technical name of the Attribute Value.
const result = await apiInstance.updateAttributeKeyAndValueToRoleV1({ id: id, attributeKey: attributeKey, attributeValue: attributeValue });
console.log(result);
```

[[Back to top]](#)

## update-roles-metadata-by-filter-v1
Bulk-update roles\' metadata by filters
This API initiates a bulk update of metadata for one or more Roles by filter.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-roles-metadata-by-filter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolemetadatabulkupdatebyfilterrequestV1** | `RolemetadatabulkupdatebyfilterrequestV1` |  | 

### Return type

`RolebulkupdateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const rolemetadatabulkupdatebyfilterrequestV1: RolemetadatabulkupdatebyfilterrequestV1 = {"operation":"ADD","replaceScope":"ALL","filters":"requestable eq false","values":[{"attribute":"iscFederalClassifications","values":["topSecret"]}]}; // 
const result = await apiInstance.updateRolesMetadataByFilterV1({ rolemetadatabulkupdatebyfilterrequestV1: rolemetadatabulkupdatebyfilterrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-roles-metadata-by-ids-v1
Bulk-update roles\' metadata by id
This API initiates a bulk update of metadata for one or more Roles by a list of Role Ids.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum role count in a single update request is 3000. The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-roles-metadata-by-ids-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolemetadatabulkupdatebyidrequestV1** | `RolemetadatabulkupdatebyidrequestV1` |  | 

### Return type

`RolebulkupdateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const rolemetadatabulkupdatebyidrequestV1: RolemetadatabulkupdatebyidrequestV1 = ; // 
const result = await apiInstance.updateRolesMetadataByIdsV1({ rolemetadatabulkupdatebyidrequestV1: rolemetadatabulkupdatebyidrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-roles-metadata-by-query-v1
Bulk-update roles\' metadata by query
This API initiates a bulk update of metadata for one or more Roles by query.
A token with ORG_ADMIN, ROLE_ADMIN ROLE_SUBADMIN authority is required to call this API.
The maximum metadata value count for a single role is 25.
Custom metadata update, including add, replace need suit licensed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-roles-metadata-by-query-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rolemetadatabulkupdatebyqueryrequestV1** | `RolemetadatabulkupdatebyqueryrequestV1` |  | 

### Return type

`RolebulkupdateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { RolesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new RolesV1Api(configuration);
const rolemetadatabulkupdatebyqueryrequestV1: RolemetadatabulkupdatebyqueryrequestV1 = {"example of a success update":{"query":{"indices":["roles"],"queryType":"TEXT","textQuery":{"terms":["test123"],"fields":["id"],"matchAny":false,"contains":true},"includeNested":false},"operation":"REPLACE","replaceScope":"ALL","values":[{"attribute":"iscFederalClassifications","values":["secret"]}]}}; // 
const result = await apiInstance.updateRolesMetadataByQueryV1({ rolemetadatabulkupdatebyqueryrequestV1: rolemetadatabulkupdatebyqueryrequestV1 });
console.log(result);
```

[[Back to top]](#)

