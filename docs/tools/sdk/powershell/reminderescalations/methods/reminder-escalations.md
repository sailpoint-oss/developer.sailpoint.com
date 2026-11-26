# ReminderEscalations

# ReminderEscalations
  Use this API to manage the tenant-default reminder and escalation ruleset for a domain object type.
With this functionality in place, organization administrators can create, view, update, and delete the default rules applied when a reminder and escalation workflow is started without its own ruleset.
The tenant is taken from the authenticated request. It is not part of the URL or request body.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ReminderEscalationTenantConfigV1**](#create-reminder-escalation-tenant-config-v1) | **POST** `/reminder-escalations/v1/config/tenants` | Create Reminder Escalation Tenant Config
[**Remove-ReminderEscalationTenantConfigV1**](#delete-reminder-escalation-tenant-config-v1) | **DELETE** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Delete Reminder Escalation Tenant Config
[**Get-ReminderEscalationTenantConfigV1**](#get-reminder-escalation-tenant-config-v1) | **GET** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Get Reminder Escalation Tenant Config
[**Send-ReminderEscalationTenantConfigV1**](#put-reminder-escalation-tenant-config-v1) | **PUT** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Update Reminder Escalation Tenant Config


## create-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates the default reminder and escalation ruleset for a domain object type in the authenticated tenant.
A tenant has one default per domain object type. Creating the same type again returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/create-reminder-escalation-tenant-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Reminderescalationtenantconfigcreate | [**Reminderescalationtenantconfigcreate**](../models/reminderescalationtenantconfigcreate) | True  | 

### Return type
[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Tenant default created. | Reminderescalationtenantconfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Reminderescalationtenantconfigcreate = @"{
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
}"@

# Create Reminder Escalation Tenant Config

try {
    $Result = ConvertFrom-JsonToReminderescalationtenantconfigcreate -Json $Reminderescalationtenantconfigcreate
    New-ReminderEscalationTenantConfigV1 -XSailPointExperimental $XSailPointExperimental -Reminderescalationtenantconfigcreate $Result 
    
    # Below is a request that includes all optional parameters
    # New-ReminderEscalationTenantConfigV1 -XSailPointExperimental $XSailPointExperimental -Reminderescalationtenantconfigcreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ReminderEscalationTenantConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes the tenant-default ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-reminder-escalation-tenant-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | DomainObjectType | **String** | True  | Domain object type key.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$DomainObjectType = "PERSONAL_ACCESS_TOKEN" # String | Domain object type key.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete Reminder Escalation Tenant Config

try {
    Remove-ReminderEscalationTenantConfigV1 -DomainObjectType $DomainObjectType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-ReminderEscalationTenantConfigV1 -DomainObjectType $DomainObjectType -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ReminderEscalationTenantConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns the tenant-default reminder and escalation ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-reminder-escalation-tenant-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | DomainObjectType | **String** | True  | Domain object type key.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant default. | Reminderescalationtenantconfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$DomainObjectType = "PERSONAL_ACCESS_TOKEN" # String | Domain object type key.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get Reminder Escalation Tenant Config

try {
    Get-ReminderEscalationTenantConfigV1 -DomainObjectType $DomainObjectType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ReminderEscalationTenantConfigV1 -DomainObjectType $DomainObjectType -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReminderEscalationTenantConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Replaces the tenant-default ruleset for a domain object type.
Send the `revision` from the latest read. A stale revision returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/put-reminder-escalation-tenant-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | DomainObjectType | **String** | True  | Domain object type key.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Reminderescalationtenantconfigupdate | [**Reminderescalationtenantconfigupdate**](../models/reminderescalationtenantconfigupdate) | True  | 

### Return type
[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant default updated. | Reminderescalationtenantconfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | CreateReminderEscalationTenantConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Indicates that the request could not be processed because of conflict in the current state of the resource. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | CreateReminderEscalationTenantConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DomainObjectType = "PERSONAL_ACCESS_TOKEN" # String | Domain object type key.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Reminderescalationtenantconfigupdate = @"{
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
}"@

# Update Reminder Escalation Tenant Config

try {
    $Result = ConvertFrom-JsonToReminderescalationtenantconfigupdate -Json $Reminderescalationtenantconfigupdate
    Send-ReminderEscalationTenantConfigV1 -DomainObjectType $DomainObjectType -XSailPointExperimental $XSailPointExperimental -Reminderescalationtenantconfigupdate $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ReminderEscalationTenantConfigV1 -DomainObjectType $DomainObjectType -XSailPointExperimental $XSailPointExperimental -Reminderescalationtenantconfigupdate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ReminderEscalationTenantConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
