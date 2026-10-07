# Notifications

# NotificationsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

The service takes one object that holds every parameter. Its type is `CreateDomainDkimV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainAddress** | `DomainAddress` |  | 

### Return type

`Observable<DomainStatusDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { DomainAddress } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  createDomainDkimV1(): void {
    const domainAddress: DomainAddress = ; // 
    this.api.createDomainDkimV1({ domainAddress: domainAddress }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-notification-template-v1
Create notification template
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/docs/api/get-notification-template-v-1) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/create-notification-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateNotificationTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**templateDto** | `TemplateDto` |  | 

### Return type

`Observable<TemplateDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { TemplateDto } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  createNotificationTemplateV1(): void {
    const templateDto: TemplateDto = ; // 
    this.api.createNotificationTemplateV1({ templateDto: templateDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-verified-from-address-v1
Create verified from address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/create-verified-from-address-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateVerifiedFromAddressV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emailStatusDto** | `EmailStatusDto` |  | 

### Return type

`Observable<EmailStatusDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { EmailStatusDto } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  createVerifiedFromAddressV1(): void {
    const emailStatusDto: EmailStatusDto = ; // 
    this.api.createVerifiedFromAddressV1({ emailStatusDto: emailStatusDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-notification-templates-in-bulk-v1
Bulk delete notification templates
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/delete-notification-templates-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteNotificationTemplatesInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**templateBulkDeleteDto** | `Array<TemplateBulkDeleteDto>` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { TemplateBulkDeleteDto } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  deleteNotificationTemplatesInBulkV1(): void {
    const templateBulkDeleteDto: Array<TemplateBulkDeleteDto> = ; // 
    this.api.deleteNotificationTemplatesInBulkV1({ templateBulkDeleteDto: templateBulkDeleteDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-verified-from-address-v1
Delete verified from address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/delete-verified-from-address-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteVerifiedFromAddressV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Unique identifier of the verified sender address to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  deleteVerifiedFromAddressV1(): void {
    const id: string = ; // Unique identifier of the verified sender address to delete.
    this.api.deleteVerifiedFromAddressV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-dkim-attributes-v1
Get dkim attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/get-dkim-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDkimAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<DkimAttributes>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  getDkimAttributesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getDkimAttributesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-mail-from-attributes-v1
Get mail from attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-mail-from-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMailFromAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identity** | `string` | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status |  [default to undefined]

### Return type

`Observable<MailFromAttributes>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  getMailFromAttributesV1(): void {
    const identity: string = ; // Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
    this.api.getMailFromAttributesV1({ identity: identity }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-notification-preferences-v1
Get notification preferences by key
Returns the notification preferences for a specific notification key, including preferred mediums and optional CC/BCC email recipients. If no custom preferences exist, returns the default settings from the interest definition. If the key does not exist, a 404 is returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-preferences-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetNotificationPreferencesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | The notification key. |  [default to undefined]
**filterUnavailableMediums** | `boolean` | When &#x60;true&#x60;, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. | [optional] [default to false]

### Return type

`Observable<PreferencesDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  getNotificationPreferencesV1(): void {
    const key: string = ; // The notification key.
    const filterUnavailableMediums: boolean = ; // When &#x60;true&#x60;, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. (optional)
    this.api.getNotificationPreferencesV1({ key: key }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-notification-template-v1
Get notification template by id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetNotificationTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Id of the Notification Template |  [default to undefined]

### Return type

`Observable<TemplateDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  getNotificationTemplateV1(): void {
    const id: string = ; // Id of the Notification Template
    this.api.getNotificationTemplateV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-notification-template-variables-v1
Get notification template variables
Returns global variables and template-specific variables for a given notification template key and medium.
Use these variable names in template content; they are replaced at send time with the corresponding values.
Variable lists can be sorted by key, type, or description via the sorters query parameter (default ascending by key).


[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-variables-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetNotificationTemplateVariablesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation.  |  [default to undefined]
**medium** | `'EMAIL' | 'SLACK' | 'TEAMS'` | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation.  |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** | [optional] [default to undefined]

### Return type

`Observable<TemplateVariablesDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  getNotificationTemplateVariablesV1(): void {
    const key: string = ; // The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
    const medium: string = ; // The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional)
    this.api.getNotificationTemplateVariablesV1({ key: key, medium: medium }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-notifications-template-context-v1
Get notification template context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/get-notifications-template-context-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetNotificationsTemplateContextV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<NotificationTemplateContext>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  getNotificationsTemplateContextV1(): void {
    this.api.getNotificationsTemplateContextV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-from-addresses-v1
List from addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/list-from-addresses-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListFromAddressesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** | [optional] [default to undefined]

### Return type

`Observable<Array<EmailStatusDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  listFromAddressesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)
    this.api.listFromAddressesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-notification-preferences-v1
List notification preferences for tenant
Returns a list of notification preferences for the current tenant, including preferred mediums and optional CC/BCC email recipients for each notification key. Supports standard V3 filtering, sorting, and offset/limit pagination.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-preferences-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListNotificationPreferencesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** | [optional] [default to undefined]

### Return type

`Observable<Array<PreferencesDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  listNotificationPreferencesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** (optional)
    this.api.listNotificationPreferencesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-notification-template-defaults-v1
List notification template defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-template-defaults-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListNotificationTemplateDefaultsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | [optional] [default to undefined]

### Return type

`Observable<Array<TemplateDtoDefault>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  listNotificationTemplateDefaultsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
    this.api.listNotificationTemplateDefaultsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-notification-templates-v1
List notification templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-templates-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListNotificationTemplatesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** | [optional] [default to undefined]

### Return type

`Observable<Array<TemplateDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  listNotificationTemplatesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional)
    this.api.listNotificationTemplatesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-mail-from-attributes-v1
Change mail from domain
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/put-mail-from-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutMailFromAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mailFromAttributesDto** | `MailFromAttributesDto` |  | 

### Return type

`Observable<MailFromAttributes>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { MailFromAttributesDto } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  putMailFromAttributesV1(): void {
    const mailFromAttributesDto: MailFromAttributesDto = ; // 
    this.api.putMailFromAttributesV1({ mailFromAttributesDto: mailFromAttributesDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## send-test-notification-v1
Send test notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/send-test-notification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SendTestNotificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sendTestNotificationRequestDto** | `SendTestNotificationRequestDto` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { SendTestNotificationRequestDto } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  sendTestNotificationV1(): void {
    const sendTestNotificationRequestDto: SendTestNotificationRequestDto = ; // 
    this.api.sendTestNotificationV1({ sendTestNotificationRequestDto: sendTestNotificationRequestDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-notification-preferences-v1
Set notification preferences by key
Overwrites the notification preferences for a specific notification key. Controls which mediums are enabled and optional CC/BCC email recipients. The `key` property in the request body is optional; if provided, it must match the key in the path or a 400 is returned. Each of `ccList` and `bccList` supports a maximum of five entries, and the same recipient cannot appear in both lists. CC/BCC configuration requires EMAIL to be enabled in `mediums` and is only allowed for templates which support it (i.e., templates which contain sensitive data like reset tokens do not allow for carbon copy emails to be configured).

[API Spec](https://developer.sailpoint.com/docs/api/set-notification-preferences-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetNotificationPreferencesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | The notification key. |  [default to undefined]
**preferencesDto** | `PreferencesDto` |  | 

### Return type

`Observable<PreferencesDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { NotificationsService } from '@sailpoint/angular-sdk/notifications';
import { PreferencesDto } from '@sailpoint/angular-sdk/notifications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(NotificationsService);

  setNotificationPreferencesV1(): void {
    const key: string = ; // The notification key.
    const preferencesDto: PreferencesDto = ; // 
    this.api.setNotificationPreferencesV1({ key: key, preferencesDto: preferencesDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

