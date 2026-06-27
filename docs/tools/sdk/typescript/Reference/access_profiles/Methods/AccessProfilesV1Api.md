---
id: v1-access-profiles
title: AccessProfiles
pagination_label: AccessProfiles
sidebar_label: AccessProfiles
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessProfiles', 'v1AccessProfiles']
slug: /tools/sdk/typescript/access_profiles/methods/access-profiles
tags: ['SDK', 'Software Development Kit', 'AccessProfiles', 'v1AccessProfiles']
---

# AccessProfilesV1Api
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-profile-v1**](#create-access-profile-v1) | **POST** `/access-profiles/v1` | Create access profile
[**delete-access-profile-v1**](#delete-access-profile-v1) | **DELETE** `/access-profiles/v1/{id}` | Delete the specified access profile
[**delete-access-profiles-in-bulk-v1**](#delete-access-profiles-in-bulk-v1) | **POST** `/access-profiles/v1/bulk-delete` | Delete access profile(s)
[**get-access-profile-entitlements-v1**](#get-access-profile-entitlements-v1) | **GET** `/access-profiles/v1/{id}/entitlements` | List access profile\&#39;s entitlements
[**get-access-profile-v1**](#get-access-profile-v1) | **GET** `/access-profiles/v1/{id}` | Get an access profile
[**list-access-profiles-v1**](#list-access-profiles-v1) | **GET** `/access-profiles/v1` | List access profiles
[**patch-access-profile-v1**](#patch-access-profile-v1) | **PATCH** `/access-profiles/v1/{id}` | Patch a specified access profile
[**update-access-profiles-in-bulk-v1**](#update-access-profiles-in-bulk-v1) | **POST** `/access-profiles/v1/bulk-update-requestable` | Update access profile(s) requestable field.


## create-access-profile-v1
Create access profile
Create an access profile.
A user with `ROLE_SUBADMIN` or `SOURCE_SUBADMIN` authority must be associated with the access profile's source.
The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles. However, any new access profiles as well as any updates to existing descriptions are limited to 2000 characters.
>**Note:** To use this endpoint, you need all the listed scopes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-profile-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessprofileV1** | `AccessprofileV1` |  | 

### Return type

`AccessprofileV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const accessprofileV1: AccessprofileV1 = ; // 
const result = await apiInstance.createAccessProfileV1({ accessprofileV1: accessprofileV1 });
console.log(result);
```

[[Back to top]](#)

## delete-access-profile-v1
Delete the specified access profile
This API deletes an existing Access Profile.

The Access Profile must not be in use, for example, Access Profile can not be deleted if they belong to an Application, Life Cycle State or a Role. If it is, a 400 error is returned.

A user with SOURCE_SUBADMIN must be able to administer the Source associated with the Access Profile.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-access-profile-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Access Profile to delete |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // ID of the Access Profile to delete
const result = await apiInstance.deleteAccessProfileV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-access-profiles-in-bulk-v1
Delete access profile(s)
This endpoint initiates a bulk deletion of one or more access profiles.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 access profiles per request. 
By default, if any of the indicated access profiles are in use, no deletions will be performed and the **inUse** field of the response indicates the usages that must be removed first. If the request field **bestEffortOnly** is **true**, however, usages are reported in the **inUse** response field but all other indicated access profiles will be deleted.
A SOURCE_SUBADMIN user can only use this endpoint to delete access profiles associated with sources they're able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-access-profiles-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessprofilebulkdeleterequestV1** | `AccessprofilebulkdeleterequestV1` |  | 

### Return type

`AccessprofilebulkdeleteresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const accessprofilebulkdeleterequestV1: AccessprofilebulkdeleterequestV1 = {"bestEffortOnly":true,"accessProfileIds":["2c91808876438bb2017668b91919ecca","2c91808876438ba801766e129f151816"]}; // 
const result = await apiInstance.deleteAccessProfilesInBulkV1({ accessprofilebulkdeleterequestV1: accessprofilebulkdeleterequestV1 });
console.log(result);
```

[[Back to top]](#)

## get-access-profile-entitlements-v1
List access profile\'s entitlements
Use this API to get a list of an access profile's entitlements. 
A SOURCE_SUBADMIN user must have access to the source associated with the specified access profile.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-profile-entitlements-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the access profile containing the entitlements. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** | [optional] [default to undefined]

### Return type

`Array<EntitlementV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // ID of the access profile containing the entitlements.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = attribute eq "memberOf"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  (optional)
const sorters: string = name,-modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)
const result = await apiInstance.getAccessProfileEntitlementsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-access-profile-v1
Get an access profile
This API returns an Access Profile by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-profile-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Access Profile |  [default to undefined]

### Return type

`AccessprofileV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const id: string = 2c9180837ca6693d017ca8d097500149; // ID of the Access Profile
const result = await apiInstance.getAccessProfileV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-access-profiles-v1
List access profiles
Get a list of access profiles.
>**Note:** When you filter for access profiles that have the '+' symbol in their names, the response is blank. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-profiles-v1)

### Parameters


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

`Array<AccessprofileV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const forSubadmin: string = 8c190e6787aa4ed9a90bd9d5344523fb; // Filters the returned list according to what is visible to the indicated ROLE_SUBADMIN or SOURCE_SUBADMIN identity. The value of the parameter is either an identity ID or the special value **me**, which is shorthand for the calling identity\&#39;s ID.  If you specify an identity that isn\&#39;t a subadmin, the API returns a 400 Bad Request error. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = name eq "SailPoint Support"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or*  Filtering is not supported for access profiles and entitlements that have the \&#39;+\&#39; symbol in their names.  (optional)
const sorters: string = name,-modified; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)
const forSegmentIds: string = 0b5c9f25-83c6-4762-9073-e38f7bb2ae26,2e8d8180-24bc-4d21-91c6-7affdb473b0d; // Filters access profiles to only those assigned to the segment(s) with the specified IDs. If segmentation is currently unavailable, specifying this parameter results in an error. (optional)
const includeUnsegmented: boolean = false; // Indicates whether the response list should contain unsegmented access profiles. If &#x60;for-segment-ids&#x60; is absent or empty, specifying *include-unsegmented* as &#x60;false&#x60; results in an error. (optional)
const result = await apiInstance.listAccessProfilesV1({  });
console.log(result);
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

A user with SOURCE_SUBADMIN may only use this API to patch Access Profiles which are associated with Sources they are able to administer.
>  The maximum supported length for the description field is 2000 characters. Longer descriptions will be preserved for existing access profiles, however, any new access profiles as well as any updates to existing descriptions will be limited to 2000 characters.

> You can only add or replace **entitlements** that exist on the source that the access profile is attached to. You can use the **list entitlements** endpoint with the **filters** query parameter to get a list of available entitlements on the access profile's source.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-access-profile-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Access Profile to patch |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` |  | 

### Return type

`AccessprofileV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // ID of the Access Profile to patch
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"add","path":"/entitlements","value":[{"id":"2c9180857725c14301772a93bb77242d","type":"ENTITLEMENT","name":"AD User Group"}]}]; // 
const result = await apiInstance.patchAccessProfileV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## update-access-profiles-in-bulk-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update access profile(s) requestable field.
This API initiates a bulk update of field requestable for one or more Access Profiles.

>  If any of the indicated Access Profiles is exists in Organization,then those Access Profiles will be added in **updated**
    list of the response.Requestable field of these Access Profiles marked as **true** or **false**.

>  If any of the indicated Access Profiles is not does not exists in Organization,then those Access Profiles will be added in **notFound** list of the response. Access Profiles marked as **notFound** will not be updated.
 A SOURCE_SUBADMIN may only use this API to update Access Profiles which are associated with Sources they are able to administer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-profiles-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessprofilebulkupdaterequestInnerV1** | `Array<AccessprofilebulkupdaterequestInnerV1>` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<AccessprofileupdateitemV1>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessProfilesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccessProfilesV1Api(configuration);
const accessprofilebulkupdaterequestInnerV1: Array&lt;AccessprofilebulkupdaterequestInnerV1&gt; = [{"id":"464ae7bf-791e-49fd-b746-06a2e4a89635","requestable":false}]; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateAccessProfilesInBulkV1({ accessprofilebulkupdaterequestInnerV1: accessprofilebulkupdaterequestInnerV1 });
console.log(result);
```

[[Back to top]](#)

