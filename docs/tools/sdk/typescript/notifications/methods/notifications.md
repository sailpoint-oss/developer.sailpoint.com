# Notifications

# NotificationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-domain-dkim-v1**](#create-domain-dkim-v1) | **POST** `/verified-domains/v1` | Verify domain address via dkim
[**create-notification-template-v1**](#create-notification-template-v1) | **POST** `/notification-templates/v1` | Create notification template
[**create-verified-from-address-v1**](#create-verified-from-address-v1) | **POST** `/verified-from-addresses/v1` | Create verified from address
[**delete-notification-templates-in-bulk-v1**](#delete-notification-templates-in-bulk-v1) | **POST** `/notification-templates/v1/bulk-delete` | Bulk delete notification templates
[**delete-verified-from-address-v1**](#delete-verified-from-address-v1) | **DELETE** `/verified-from-addresses/v1/{id}` | Delete verified from address
[**get-dkim-attributes-v1**](#get-dkim-attributes-v1) | **GET** `/verified-domains/v1` | Get dkim attributes
[**get-mail-from-attributes-v1**](#get-mail-from-attributes-v1) | **GET** `/mail-from-attributes/v1/{identity}` | Get mail from attributes
[**get-notification-preferences-v1**](#get-notification-preferences-v1) | **GET** `/notification-preferences/v1/{key}` | Get notification preferences by key
[**get-notification-template-v1**](#get-notification-template-v1) | **GET** `/notification-templates/v1/{id}` | Get notification template by id
[**get-notification-template-variables-v1**](#get-notification-template-variables-v1) | **GET** `/notification-template-variables/v1/{key}/{medium}` | Get notification template variables
[**get-notifications-template-context-v1**](#get-notifications-template-context-v1) | **GET** `/notification-template-context/v1` | Get notification template context
[**list-from-addresses-v1**](#list-from-addresses-v1) | **GET** `/verified-from-addresses/v1` | List from addresses
[**list-notification-preferences-v1**](#list-notification-preferences-v1) | **GET** `/notification-preferences/v1` | List notification preferences for tenant
[**list-notification-template-defaults-v1**](#list-notification-template-defaults-v1) | **GET** `/notification-template-defaults/v1` | List notification template defaults
[**list-notification-templates-v1**](#list-notification-templates-v1) | **GET** `/notification-templates/v1` | List notification templates
[**put-mail-from-attributes-v1**](#put-mail-from-attributes-v1) | **PUT** `/mail-from-attributes/v1` | Change mail from domain
[**send-test-notification-v1**](#send-test-notification-v1) | **POST** `/send-test-notification/v1` | Send test notification
[**set-notification-preferences-v1**](#set-notification-preferences-v1) | **PUT** `/notification-preferences/v1/{key}` | Set notification preferences by key


## create-domain-dkim-v1
Verify domain address via dkim
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/create-domain-dkim-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainAddress** | `DomainAddress` |  | 

### Return type

`DomainStatusDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { DomainAddress } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const domainAddress: DomainAddress = {
  "domain" : "sailpoint.com"
}; // 
const result = await apiInstance.createDomainDkimV1({ domainAddress: domainAddress });
console.log(result);
```

[[Back to top]](#)

## create-notification-template-v1
Create notification template
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/docs/api/get-notification-template-v-1) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/create-notification-template-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**templateDto** | `TemplateDto` |  | 

### Return type

`TemplateDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { TemplateDto } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const templateDto: TemplateDto = {
  "slackTemplate" : {
    "isSubscription" : false,
    "attachments" : "[]",
    "blocks" : "blocks",
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "You have a new approval request",
    "notificationType" : "notificationType",
    "key" : "key"
  },
  "footer" : "footer",
  "teamsTemplate" : {
    "isSubscription" : false,
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "You have a new approval request",
    "notificationType" : "notificationType",
    "title" : "title",
    "key" : "key",
    "messageJSON" : "messageJSON"
  },
  "subject" : "You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.",
  "created" : "2020-01-01T00:00:00Z",
  "description" : "Daily digest - sent if number of outstanding tasks for task owner > 0",
  "medium" : "EMAIL",
  "locale" : "en",
  "body" : "Please go to the task manager",
  "name" : "Task Manager Subscription",
  "replyTo" : "$__global.emailFromAddress",
  "header" : "header",
  "modified" : "2020-01-01T00:00:00Z",
  "from" : "$__global.emailFromAddress",
  "id" : "c17bea3a-574d-453c-9e04-4365fbf5af0b",
  "key" : "cloud_manual_work_item_summary"
}; // 
const result = await apiInstance.createNotificationTemplateV1({ templateDto: templateDto });
console.log(result);
```

[[Back to top]](#)

## create-verified-from-address-v1
Create verified from address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/create-verified-from-address-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emailStatusDto** | `EmailStatusDto` |  | 

### Return type

`EmailStatusDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EmailStatusDto } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const emailStatusDto: EmailStatusDto = {
  "isVerifiedByDomain" : false,
  "verificationStatus" : "SUCCESS",
  "id" : "id",
  "region" : "us-east-1",
  "email" : "sender@example.com"
}; // 
const result = await apiInstance.createVerifiedFromAddressV1({ emailStatusDto: emailStatusDto });
console.log(result);
```

[[Back to top]](#)

## delete-notification-templates-in-bulk-v1
Bulk delete notification templates
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/delete-notification-templates-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**templateBulkDeleteDto** | `Array<TemplateBulkDeleteDto>` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { TemplateBulkDeleteDto } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const templateBulkDeleteDto: Array<TemplateBulkDeleteDto> = {
  "medium" : "EMAIL",
  "locale" : "en",
  "key" : "cloud_manual_work_item_summary"
}; // 
const result = await apiInstance.deleteNotificationTemplatesInBulkV1({ templateBulkDeleteDto: templateBulkDeleteDto });
console.log(result);
```

[[Back to top]](#)

## delete-verified-from-address-v1
Delete verified from address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/delete-verified-from-address-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Unique identifier of the verified sender address to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Unique identifier of the verified sender address to delete.
const result = await apiInstance.deleteVerifiedFromAddressV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-dkim-attributes-v1
Get dkim attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/get-dkim-attributes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<DkimAttributes>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getDkimAttributesV1({  });
console.log(result);
```

[[Back to top]](#)

## get-mail-from-attributes-v1
Get mail from attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-mail-from-attributes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identity** | `string` | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status |  [default to undefined]

### Return type

`MailFromAttributes`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const identity: string = bobsmith@sailpoint.com; // Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
const result = await apiInstance.getMailFromAttributesV1({ identity: identity });
console.log(result);
```

[[Back to top]](#)

## get-notification-preferences-v1
Get notification preferences by key
Returns the notification preferences for a specific notification key, including preferred mediums and optional CC/BCC email recipients. If no custom preferences exist, returns the default settings from the interest definition. If the key does not exist, a 404 is returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-preferences-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | The notification key. |  [default to undefined]
**filterUnavailableMediums** | `boolean` | When &#x60;true&#x60;, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. | [optional] [default to false]

### Return type

`PreferencesDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const key: string = approval_completed_notification; // The notification key.
const filterUnavailableMediums: boolean = true; // When &#x60;true&#x60;, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. (optional)
const result = await apiInstance.getNotificationPreferencesV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## get-notification-template-v1
Get notification template by id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Notification Template |  [default to undefined]

### Return type

`TemplateDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const id: string = c17bea3a-574d-453c-9e04-4365fbf5af0b; // Id of the Notification Template
const result = await apiInstance.getNotificationTemplateV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-notification-template-variables-v1
Get notification template variables
Returns global variables and template-specific variables for a given notification template key and medium.
Use these variable names in template content; they are replaced at send time with the corresponding values.
Variable lists can be sorted by key, type, or description via the sorters query parameter (default ascending by key).


[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-variables-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation.  |  [default to undefined]
**medium** | `'EMAIL' | 'SLACK' | 'TEAMS'` | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation.  |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** | [optional] [default to undefined]

### Return type

`TemplateVariablesDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const key: string = approval_request_notification; // The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
const medium: string = EMAIL; // The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
const sorters: string = -description; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional)
const result = await apiInstance.getNotificationTemplateVariablesV1({ key: key, medium: medium });
console.log(result);
```

[[Back to top]](#)

## get-notifications-template-context-v1
Get notification template context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/get-notifications-template-context-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`NotificationTemplateContext`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const result = await apiInstance.getNotificationsTemplateContextV1({  });
console.log(result);
```

[[Back to top]](#)

## list-from-addresses-v1
List from addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/list-from-addresses-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** | [optional] [default to undefined]

### Return type

`Array<EmailStatusDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = email eq "john.doe@company.com"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional)
const sorters: string = email; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)
const result = await apiInstance.listFromAddressesV1({  });
console.log(result);
```

[[Back to top]](#)

## list-notification-preferences-v1
List notification preferences for tenant
Returns a list of notification preferences for the current tenant, including preferred mediums and optional CC/BCC email recipients for each notification key. Supports standard V3 filtering, sorting, and offset/limit pagination.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-preferences-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** | [optional] [default to undefined]

### Return type

`Array<PreferencesDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = key eq "approval_completed_notification"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* (optional)
const sorters: string = key; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** (optional)
const result = await apiInstance.listNotificationPreferencesV1({  });
console.log(result);
```

[[Back to top]](#)

## list-notification-template-defaults-v1
List notification template defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-template-defaults-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | [optional] [default to undefined]

### Return type

`Array<TemplateDtoDefault>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = key eq "cloud_manual_work_item_summary"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
const result = await apiInstance.listNotificationTemplateDefaultsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-notification-templates-v1
List notification templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-templates-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** | [optional] [default to undefined]

### Return type

`Array<TemplateDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = medium eq "EMAIL"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
const sorters: string = key, -name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional)
const result = await apiInstance.listNotificationTemplatesV1({  });
console.log(result);
```

[[Back to top]](#)

## put-mail-from-attributes-v1
Change mail from domain
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/put-mail-from-attributes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mailFromAttributesDto** | `MailFromAttributesDto` |  | 

### Return type

`MailFromAttributes`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MailFromAttributesDto } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const mailFromAttributesDto: MailFromAttributesDto = {
  "identity" : "BobSmith@sailpoint.com",
  "mailFromDomain" : "example.sailpoint.com"
}; // 
const result = await apiInstance.putMailFromAttributesV1({ mailFromAttributesDto: mailFromAttributesDto });
console.log(result);
```

[[Back to top]](#)

## send-test-notification-v1
Send test notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/send-test-notification-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sendTestNotificationRequestDto** | `SendTestNotificationRequestDto` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SendTestNotificationRequestDto } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const sendTestNotificationRequestDto: SendTestNotificationRequestDto = {
  "carbonCopy" : [ "cc@example.com" ],
  "context" : {
    "numberOfPendingTasks" : "4",
    "taskTasks" : "tasks"
  },
  "blindCarbonCopy" : [ "bcc@example.com" ],
  "medium" : "EMAIL",
  "locale" : "en",
  "recipientEmailList" : [ "test@example.com" ],
  "key" : "cloud_manual_work_item_summary"
}; // 
const result = await apiInstance.sendTestNotificationV1({ sendTestNotificationRequestDto: sendTestNotificationRequestDto });
console.log(result);
```

[[Back to top]](#)

## set-notification-preferences-v1
Set notification preferences by key
Overwrites the notification preferences for a specific notification key. Controls which mediums are enabled and optional CC/BCC email recipients. The `key` property in the request body is optional; if provided, it must match the key in the path or a 400 is returned. Each of `ccList` and `bccList` supports a maximum of five entries, and the same recipient cannot appear in both lists. CC/BCC configuration requires EMAIL to be enabled in `mediums` and is only allowed for templates which support it (i.e., templates which contain sensitive data like reset tokens do not allow for carbon copy emails to be configured).

[API Spec](https://developer.sailpoint.com/docs/api/set-notification-preferences-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | The notification key. |  [default to undefined]
**preferencesDto** | `PreferencesDto` |  | 

### Return type

`PreferencesDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { NotificationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { PreferencesDto } from '@sailpoint/api-client/dist/notifications/api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);
const key: string = approval_completed_notification; // The notification key.
const preferencesDto: PreferencesDto = {
  "modified" : "2020-05-15T14:37:06.909Z",
  "ccList" : [ {
    "type" : "IDENTITY",
    "id" : "6b0b8e47cc1f4c3fa961a38fc718e989"
  }, {
    "type" : "STATIC_EMAIL",
    "email" : "cc-recipient@example.com"
  } ],
  "bccList" : [ {
    "type" : "MANAGER_OF"
  }, {
    "type" : "ORG_ADMINS"
  } ],
  "mediums" : [ "EMAIL" ],
  "key" : "cloud_manual_work_item_summary"
}; // 
const result = await apiInstance.setNotificationPreferencesV1({ key: key, preferencesDto: preferencesDto });
console.log(result);
```

[[Back to top]](#)

