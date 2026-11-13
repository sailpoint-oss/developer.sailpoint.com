# ReminderEscalations

# ReminderEscalationsService
  Use this API to manage the tenant-default reminder and escalation ruleset for a domain object type.
With this functionality in place, organization administrators can create, view, update, and delete the default rules applied when a reminder and escalation workflow is started without its own ruleset.
The tenant is taken from the authenticated request. It is not part of the URL or request body.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reminder-escalation-tenant-config-v1**](#create-reminder-escalation-tenant-config-v1) | **POST** `/reminder-escalations/v1/config/tenants` | Create Reminder Escalation Tenant Config
[**delete-reminder-escalation-tenant-config-v1**](#delete-reminder-escalation-tenant-config-v1) | **DELETE** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Delete Reminder Escalation Tenant Config
[**get-reminder-escalation-tenant-config-v1**](#get-reminder-escalation-tenant-config-v1) | **GET** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Get Reminder Escalation Tenant Config
[**put-reminder-escalation-tenant-config-v1**](#put-reminder-escalation-tenant-config-v1) | **PUT** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Update Reminder Escalation Tenant Config


## create-reminder-escalation-tenant-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create Reminder Escalation Tenant Config
Creates the default reminder and escalation ruleset for a domain object type in the authenticated tenant.
A tenant has one default per domain object type. Creating the same type again returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/create-reminder-escalation-tenant-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateReminderEscalationTenantConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reminderescalationtenantconfigcreate** | `Reminderescalationtenantconfigcreate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Reminderescalationtenantconfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReminderEscalationsService } from '@sailpoint/angular-sdk/reminder_escalations';
import { Reminderescalationtenantconfigcreate } from '@sailpoint/angular-sdk/reminder_escalations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReminderEscalationsService);

  createReminderEscalationTenantConfigV1(): void {
    const reminderescalationtenantconfigcreate: Reminderescalationtenantconfigcreate = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createReminderEscalationTenantConfigV1({ reminderescalationtenantconfigcreate: reminderescalationtenantconfigcreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-reminder-escalation-tenant-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete Reminder Escalation Tenant Config
Deletes the tenant-default ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-reminder-escalation-tenant-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteReminderEscalationTenantConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainObjectType** | `'PERSONAL_ACCESS_TOKEN' | 'CERTIFICATION'` | Domain object type key. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReminderEscalationsService } from '@sailpoint/angular-sdk/reminder_escalations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReminderEscalationsService);

  deleteReminderEscalationTenantConfigV1(): void {
    const domainObjectType: string = ; // Domain object type key.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteReminderEscalationTenantConfigV1({ domainObjectType: domainObjectType }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-reminder-escalation-tenant-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Reminder Escalation Tenant Config
Returns the tenant-default reminder and escalation ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-reminder-escalation-tenant-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetReminderEscalationTenantConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainObjectType** | `'PERSONAL_ACCESS_TOKEN' | 'CERTIFICATION'` | Domain object type key. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Reminderescalationtenantconfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReminderEscalationsService } from '@sailpoint/angular-sdk/reminder_escalations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReminderEscalationsService);

  getReminderEscalationTenantConfigV1(): void {
    const domainObjectType: string = ; // Domain object type key.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getReminderEscalationTenantConfigV1({ domainObjectType: domainObjectType }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-reminder-escalation-tenant-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Reminder Escalation Tenant Config
Replaces the tenant-default ruleset for a domain object type.
Send the `revision` from the latest read. A stale revision returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/put-reminder-escalation-tenant-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutReminderEscalationTenantConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainObjectType** | `'PERSONAL_ACCESS_TOKEN' | 'CERTIFICATION'` | Domain object type key. |  [default to undefined]
**reminderescalationtenantconfigupdate** | `Reminderescalationtenantconfigupdate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Reminderescalationtenantconfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ReminderEscalationsService } from '@sailpoint/angular-sdk/reminder_escalations';
import { Reminderescalationtenantconfigupdate } from '@sailpoint/angular-sdk/reminder_escalations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ReminderEscalationsService);

  putReminderEscalationTenantConfigV1(): void {
    const domainObjectType: string = ; // Domain object type key.
    const reminderescalationtenantconfigupdate: Reminderescalationtenantconfigupdate = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.putReminderEscalationTenantConfigV1({ domainObjectType: domainObjectType, reminderescalationtenantconfigupdate: reminderescalationtenantconfigupdate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

