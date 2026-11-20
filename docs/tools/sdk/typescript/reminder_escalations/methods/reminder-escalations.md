# ReminderEscalations

# ReminderEscalationsApi
  Use this API to manage the tenant-default reminder and escalation ruleset for a domain object type.
With this functionality in place, organization administrators can create, view, update, and delete the default rules applied when a reminder and escalation workflow is started without its own ruleset.
The tenant is taken from the authenticated request. It is not part of the URL or request body.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reminderescalationtenantconfigcreate** | `Reminderescalationtenantconfigcreate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Reminderescalationtenantconfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ReminderEscalationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Reminderescalationtenantconfigcreate } from '@sailpoint/api-client/dist/reminder_escalations/api';

const configuration = new Configuration();
const apiInstance = new ReminderEscalationsApi(configuration);
const reminderescalationtenantconfigcreate: Reminderescalationtenantconfigcreate = {
  "domainObjectType" : "CERTIFICATION",
  "rules" : {
    "reminders" : [ {
      "cron" : "0 9 * * *",
      "template" : "cert-reminder-daily",
      "maxFirings" : 5,
      "beforeDeadLine" : "P7D",
      "activeAfter" : "P14D"
    }, {
      "cron" : "0 9 * * *",
      "template" : "cert-reminder-daily",
      "maxFirings" : 5,
      "beforeDeadLine" : "P7D",
      "activeAfter" : "P14D"
    } ],
    "escalations" : [ {
      "template" : "cert-escalation-mgr",
      "trigger" : {
        "cron" : "0 9 * * 1",
        "delay" : "PT12H",
        "maxFirings" : 3,
        "beforeDeadLine" : "P7D",
        "count" : 3,
        "triggerType" : "AFTER_REMINDER_COUNT",
        "activeAfter" : "P14D"
      },
      "targets" : [ {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      }, {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      } ]
    }, {
      "template" : "cert-escalation-mgr",
      "trigger" : {
        "cron" : "0 9 * * 1",
        "delay" : "PT12H",
        "maxFirings" : 3,
        "beforeDeadLine" : "P7D",
        "count" : 3,
        "triggerType" : "AFTER_REMINDER_COUNT",
        "activeAfter" : "P14D"
      },
      "targets" : [ {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      }, {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      } ]
    } ],
    "fallback" : {
      "template" : "cert-escalation-fallback-admin",
      "targets" : [ {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      }, {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      } ]
    }
  }
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createReminderEscalationTenantConfigV1({ reminderescalationtenantconfigcreate: reminderescalationtenantconfigcreate });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainObjectType** | `'PERSONAL_ACCESS_TOKEN' | 'CERTIFICATION'` | Domain object type key. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ReminderEscalationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ReminderEscalationsApi(configuration);
const domainObjectType: string = CERTIFICATION; // Domain object type key.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteReminderEscalationTenantConfigV1({ domainObjectType: domainObjectType });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainObjectType** | `'PERSONAL_ACCESS_TOKEN' | 'CERTIFICATION'` | Domain object type key. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Reminderescalationtenantconfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ReminderEscalationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ReminderEscalationsApi(configuration);
const domainObjectType: string = CERTIFICATION; // Domain object type key.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getReminderEscalationTenantConfigV1({ domainObjectType: domainObjectType });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**domainObjectType** | `'PERSONAL_ACCESS_TOKEN' | 'CERTIFICATION'` | Domain object type key. |  [default to undefined]
**reminderescalationtenantconfigupdate** | `Reminderescalationtenantconfigupdate` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Reminderescalationtenantconfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ReminderEscalationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Reminderescalationtenantconfigupdate } from '@sailpoint/api-client/dist/reminder_escalations/api';

const configuration = new Configuration();
const apiInstance = new ReminderEscalationsApi(configuration);
const domainObjectType: string = CERTIFICATION; // Domain object type key.
const reminderescalationtenantconfigupdate: Reminderescalationtenantconfigupdate = {
  "rules" : {
    "reminders" : [ {
      "cron" : "0 9 * * *",
      "template" : "cert-reminder-daily",
      "maxFirings" : 5,
      "beforeDeadLine" : "P7D",
      "activeAfter" : "P14D"
    }, {
      "cron" : "0 9 * * *",
      "template" : "cert-reminder-daily",
      "maxFirings" : 5,
      "beforeDeadLine" : "P7D",
      "activeAfter" : "P14D"
    } ],
    "escalations" : [ {
      "template" : "cert-escalation-mgr",
      "trigger" : {
        "cron" : "0 9 * * 1",
        "delay" : "PT12H",
        "maxFirings" : 3,
        "beforeDeadLine" : "P7D",
        "count" : 3,
        "triggerType" : "AFTER_REMINDER_COUNT",
        "activeAfter" : "P14D"
      },
      "targets" : [ {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      }, {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      } ]
    }, {
      "template" : "cert-escalation-mgr",
      "trigger" : {
        "cron" : "0 9 * * 1",
        "delay" : "PT12H",
        "maxFirings" : 3,
        "beforeDeadLine" : "P7D",
        "count" : 3,
        "triggerType" : "AFTER_REMINDER_COUNT",
        "activeAfter" : "P14D"
      },
      "targets" : [ {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      }, {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      } ]
    } ],
    "fallback" : {
      "template" : "cert-escalation-fallback-admin",
      "targets" : [ {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      }, {
        "identityId" : "id-admin-99",
        "targetType" : "MANAGER_OF"
      } ]
    }
  },
  "revision" : 1
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.putReminderEscalationTenantConfigV1({ domainObjectType: domainObjectType, reminderescalationtenantconfigupdate: reminderescalationtenantconfigupdate });
console.log(result);
```

[[Back to top]](#)

