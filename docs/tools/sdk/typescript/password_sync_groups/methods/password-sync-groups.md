# PasswordSyncGroups

# PasswordSyncGroupsApi
  Use this API to implement password sync group functionality. 
With this functionality in place, administrators can group sources into password sync groups so that all their applications share the same password. 
This allows users to update the password for all the applications in a sync group if they want, rather than updating each password individually. 

A password sync group is a group of applications that shares a password. 
Administrators create these groups by grouping the applications&#39; sources. 
For example, an administrator can group the ActiveDirectory, GitHub, and G Suite sources together so that all those sources&#39; applications can also be grouped to share a password. 
A user can then update his or her password for ActiveDirectory, GitHub, Gmail, Google Drive, and Google Calendar all at once, rather then updating each one individually.

The following are required for administrators to create a password sync group in Identity Security Cloud: 

- At least two direct connect sources connected to Identity Security Cloud and configured for Password Management.

- Each authentication source in a sync group must have at least one application. Refer to [Adding and Resetting Application Passwords](https://documentation.sailpoint.com/saas/help/pwd/adv_config.html#adding-and-resetting-application-passwords) for more information about adding applications to sources.

- At least one password policy. Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/index.html) for more information about password policies. 

In the Admin panel in Identity Security Cloud, administrators can use the Password Mgmt dropdown menu to select Sync Groups. 
To create a sync group, administrators must provide a name, choose a password policy to be enforced across the sources in the sync group, and select the sources to include in the sync group. 

Administrators can also delete sync groups in Identity Security Cloud, but they should know the following before they do: 

- Passwords related to the associated sources will become independent, so changing one will not change the others anymore. 

- Passwords for the sources&#39; connected applications will also become independent. 

- Password policies assigned to the sync group are then assigned directly to the associated sources. 
To change the password policy for a source, administrators must edit it directly. 

Once the password sync group has been created, users can update the password for the group in Password Manager.

Refer to [Managing Password Sync Groups](https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html) for more information about password sync groups.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-sync-group-v1**](#create-password-sync-group-v1) | **POST** `/password-sync-groups/v1` | Create password sync group
[**delete-password-sync-group-v1**](#delete-password-sync-group-v1) | **DELETE** `/password-sync-groups/v1/{id}` | Delete password sync group by id
[**get-password-sync-group-v1**](#get-password-sync-group-v1) | **GET** `/password-sync-groups/v1/{id}` | Get password sync group by id
[**get-password-sync-groups-v1**](#get-password-sync-groups-v1) | **GET** `/password-sync-groups/v1` | Get password sync group list
[**update-password-sync-group-v1**](#update-password-sync-group-v1) | **PUT** `/password-sync-groups/v1/{id}` | Update password sync group by id


## create-password-sync-group-v1
Create password sync group
This API creates a password sync group based on the specifications provided.

[API Spec](https://developer.sailpoint.com/docs/api/create-password-sync-group-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordSyncGroup** | `PasswordSyncGroup` |  | 

### Return type

`PasswordSyncGroup`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordSyncGroupsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { PasswordSyncGroup } from '@sailpoint/api-client/dist/password_sync_groups/api';

const configuration = new Configuration();
const apiInstance = new PasswordSyncGroupsApi(configuration);
const passwordSyncGroup: PasswordSyncGroup = {
  "created" : "2023-03-16T04:00:00Z",
  "name" : "Password Sync Group 1",
  "modified" : "2023-03-16T04:00:00Z",
  "passwordPolicyId" : "2c91808d744ba0ce01746f93b6204501",
  "id" : "6881f631-3bd5-4213-9c75-8e05cc3e35dd",
  "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
}; // 
const result = await apiInstance.createPasswordSyncGroupV1({ passwordSyncGroup: passwordSyncGroup });
console.log(result);
```

[[Back to top]](#)

## delete-password-sync-group-v1
Delete password sync group by id
This API deletes the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/delete-password-sync-group-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of password sync group to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordSyncGroupsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new PasswordSyncGroupsApi(configuration);
const id: string = 6881f631-3bd5-4213-9c75-8e05cc3e35dd; // The ID of password sync group to delete.
const result = await apiInstance.deletePasswordSyncGroupV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-password-sync-group-v1
Get password sync group by id
This API returns the sync group for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-password-sync-group-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of password sync group to retrieve. |  [default to undefined]

### Return type

`PasswordSyncGroup`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordSyncGroupsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new PasswordSyncGroupsApi(configuration);
const id: string = 6881f631-3bd5-4213-9c75-8e05cc3e35dd; // The ID of password sync group to retrieve.
const result = await apiInstance.getPasswordSyncGroupV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-password-sync-groups-v1
Get password sync group list
This API returns a list of password sync groups.

[API Spec](https://developer.sailpoint.com/docs/api/get-password-sync-groups-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<PasswordSyncGroup>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordSyncGroupsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new PasswordSyncGroupsApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getPasswordSyncGroupsV1({  });
console.log(result);
```

[[Back to top]](#)

## update-password-sync-group-v1
Update password sync group by id
This API updates the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/update-password-sync-group-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of password sync group to update. |  [default to undefined]
**passwordSyncGroup** | `PasswordSyncGroup` |  | 

### Return type

`PasswordSyncGroup`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordSyncGroupsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { PasswordSyncGroup } from '@sailpoint/api-client/dist/password_sync_groups/api';

const configuration = new Configuration();
const apiInstance = new PasswordSyncGroupsApi(configuration);
const id: string = 6881f631-3bd5-4213-9c75-8e05cc3e35dd; // The ID of password sync group to update.
const passwordSyncGroup: PasswordSyncGroup = {
  "created" : "2023-03-16T04:00:00Z",
  "name" : "Password Sync Group 1",
  "modified" : "2023-03-16T04:00:00Z",
  "passwordPolicyId" : "2c91808d744ba0ce01746f93b6204501",
  "id" : "6881f631-3bd5-4213-9c75-8e05cc3e35dd",
  "sourceIds" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210500" ]
}; // 
const result = await apiInstance.updatePasswordSyncGroupV1({ id: id, passwordSyncGroup: passwordSyncGroup });
console.log(result);
```

[[Back to top]](#)

