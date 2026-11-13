# Reminder_Escalations

# sailpoint.reminder_escalations.ReminderEscalationsApi
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
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create Reminder Escalation Tenant Config
Creates the default reminder and escalation ruleset for a domain object type in the authenticated tenant.
A tenant has one default per domain object type. Creating the same type again returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/create-reminder-escalation-tenant-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | reminderescalationtenantconfigcreate | [**Reminderescalationtenantconfigcreate**](../models/reminderescalationtenantconfigcreate) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Tenant default created. | Reminderescalationtenantconfig |  * location - URL of the created tenant default.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.reminder_escalations.api.reminder_escalations_api import ReminderEscalationsApi
from sailpoint.reminder_escalations.api_client import ApiClient
from sailpoint.reminder_escalations.models.reminderescalationtenantconfig import Reminderescalationtenantconfig
from sailpoint.reminder_escalations.models.reminderescalationtenantconfigcreate import Reminderescalationtenantconfigcreate
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    reminderescalationtenantconfigcreate = '''{
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
        }''' # Reminderescalationtenantconfigcreate | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create Reminder Escalation Tenant Config
        new_reminderescalationtenantconfigcreate = Reminderescalationtenantconfigcreate.from_json(reminderescalationtenantconfigcreate)
        results = ReminderEscalationsApi(api_client).create_reminder_escalation_tenant_config_v1(reminderescalationtenantconfigcreate=new_reminderescalationtenantconfigcreate)
        # Below is a request that includes all optional parameters
        # results = ReminderEscalationsApi(api_client).create_reminder_escalation_tenant_config_v1(new_reminderescalationtenantconfigcreate, x_sail_point_experimental)
        print("The response of ReminderEscalationsApi->create_reminder_escalation_tenant_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ReminderEscalationsApi->create_reminder_escalation_tenant_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Reminder Escalation Tenant Config
Deletes the tenant-default ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-reminder-escalation-tenant-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | domain_object_type | **str** | True  | Domain object type key.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.reminder_escalations.api.reminder_escalations_api import ReminderEscalationsApi
from sailpoint.reminder_escalations.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    domain_object_type = 'CERTIFICATION' # str | Domain object type key. # str | Domain object type key.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete Reminder Escalation Tenant Config
        
        ReminderEscalationsApi(api_client).delete_reminder_escalation_tenant_config_v1(domain_object_type=domain_object_type)
        # Below is a request that includes all optional parameters
        # ReminderEscalationsApi(api_client).delete_reminder_escalation_tenant_config_v1(domain_object_type, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling ReminderEscalationsApi->delete_reminder_escalation_tenant_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Reminder Escalation Tenant Config
Returns the tenant-default reminder and escalation ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-reminder-escalation-tenant-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | domain_object_type | **str** | True  | Domain object type key.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant default. | Reminderescalationtenantconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.reminder_escalations.api.reminder_escalations_api import ReminderEscalationsApi
from sailpoint.reminder_escalations.api_client import ApiClient
from sailpoint.reminder_escalations.models.reminderescalationtenantconfig import Reminderescalationtenantconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    domain_object_type = 'CERTIFICATION' # str | Domain object type key. # str | Domain object type key.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get Reminder Escalation Tenant Config
        
        results = ReminderEscalationsApi(api_client).get_reminder_escalation_tenant_config_v1(domain_object_type=domain_object_type)
        # Below is a request that includes all optional parameters
        # results = ReminderEscalationsApi(api_client).get_reminder_escalation_tenant_config_v1(domain_object_type, x_sail_point_experimental)
        print("The response of ReminderEscalationsApi->get_reminder_escalation_tenant_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ReminderEscalationsApi->get_reminder_escalation_tenant_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Reminder Escalation Tenant Config
Replaces the tenant-default ruleset for a domain object type.
Send the `revision` from the latest read. A stale revision returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/put-reminder-escalation-tenant-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | domain_object_type | **str** | True  | Domain object type key.
 Body  | reminderescalationtenantconfigupdate | [**Reminderescalationtenantconfigupdate**](../models/reminderescalationtenantconfigupdate) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant default updated. | Reminderescalationtenantconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.reminder_escalations.api.reminder_escalations_api import ReminderEscalationsApi
from sailpoint.reminder_escalations.api_client import ApiClient
from sailpoint.reminder_escalations.models.reminderescalationtenantconfig import Reminderescalationtenantconfig
from sailpoint.reminder_escalations.models.reminderescalationtenantconfigupdate import Reminderescalationtenantconfigupdate
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    domain_object_type = 'CERTIFICATION' # str | Domain object type key. # str | Domain object type key.
    reminderescalationtenantconfigupdate = '''{
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
        }''' # Reminderescalationtenantconfigupdate | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update Reminder Escalation Tenant Config
        new_reminderescalationtenantconfigupdate = Reminderescalationtenantconfigupdate.from_json(reminderescalationtenantconfigupdate)
        results = ReminderEscalationsApi(api_client).put_reminder_escalation_tenant_config_v1(domain_object_type=domain_object_type, reminderescalationtenantconfigupdate=new_reminderescalationtenantconfigupdate)
        # Below is a request that includes all optional parameters
        # results = ReminderEscalationsApi(api_client).put_reminder_escalation_tenant_config_v1(domain_object_type, new_reminderescalationtenantconfigupdate, x_sail_point_experimental)
        print("The response of ReminderEscalationsApi->put_reminder_escalation_tenant_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ReminderEscalationsApi->put_reminder_escalation_tenant_config_v1: %s\n" % e)
```



[[Back to top]](#) 



