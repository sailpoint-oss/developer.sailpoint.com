# ReminderEscalations

# ReminderEscalationsAPI
  Use this API to manage the tenant-default reminder and escalation ruleset for a domain object type.
With this functionality in place, organization administrators can create, view, update, and delete the default rules applied when a reminder and escalation workflow is started without its own ruleset.
The tenant is taken from the authenticated request. It is not part of the URL or request body.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reminder-escalation-tenant-config-v1**](#create-reminder-escalation-tenant-config-v1) | **Post** `/reminder-escalations/v1/config/tenants` | Create Reminder Escalation Tenant Config
[**delete-reminder-escalation-tenant-config-v1**](#delete-reminder-escalation-tenant-config-v1) | **Delete** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Delete Reminder Escalation Tenant Config
[**get-reminder-escalation-tenant-config-v1**](#get-reminder-escalation-tenant-config-v1) | **Get** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Get Reminder Escalation Tenant Config
[**put-reminder-escalation-tenant-config-v1**](#put-reminder-escalation-tenant-config-v1) | **Put** `/reminder-escalations/v1/config/tenants/{domainObjectType}` | Update Reminder Escalation Tenant Config


## create-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create Reminder Escalation Tenant Config
Creates the default reminder and escalation ruleset for a domain object type in the authenticated tenant.
A tenant has one default per domain object type. Creating the same type again returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/create-reminder-escalation-tenant-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateReminderEscalationTenantConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **reminderescalationtenantconfigcreate** | [**Reminderescalationtenantconfigcreate**](../models/reminderescalationtenantconfigcreate) |  | 

### Return type

[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    reminder_escalations "github.com/sailpoint-oss/golang-sdk/v3/reminder_escalations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    reminderescalationtenantconfigcreateJson := []byte(`{
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
        }`) // Reminderescalationtenantconfigcreate | 

    var reminderescalationtenantconfigcreate reminder_escalations.Reminderescalationtenantconfigcreate
    if err := json.Unmarshal(reminderescalationtenantconfigcreateJson, &reminderescalationtenantconfigcreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ReminderEscalationsAPI.CreateReminderEscalationTenantConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Reminderescalationtenantconfigcreate(reminderescalationtenantconfigcreate).Execute()
	  //resp, r, err := apiClient.ReminderEscalationsAPI.CreateReminderEscalationTenantConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Reminderescalationtenantconfigcreate(reminderescalationtenantconfigcreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReminderEscalationsAPI.CreateReminderEscalationTenantConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateReminderEscalationTenantConfigV1`: Reminderescalationtenantconfig
    fmt.Fprintf(os.Stdout, "Response from `ReminderEscalationsAPI.CreateReminderEscalationTenantConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete Reminder Escalation Tenant Config
Deletes the tenant-default ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/delete-reminder-escalation-tenant-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**domainObjectType** | **string** | Domain object type key. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReminderEscalationTenantConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    domainObjectType := `CERTIFICATION` // string | Domain object type key. # string | Domain object type key.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ReminderEscalationsAPI.DeleteReminderEscalationTenantConfigV1(context.Background(), domainObjectType).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.ReminderEscalationsAPI.DeleteReminderEscalationTenantConfigV1(context.Background(), domainObjectType).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReminderEscalationsAPI.DeleteReminderEscalationTenantConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get Reminder Escalation Tenant Config
Returns the tenant-default reminder and escalation ruleset for a domain object type in the authenticated tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-reminder-escalation-tenant-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**domainObjectType** | **string** | Domain object type key. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReminderEscalationTenantConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    domainObjectType := `CERTIFICATION` // string | Domain object type key. # string | Domain object type key.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ReminderEscalationsAPI.GetReminderEscalationTenantConfigV1(context.Background(), domainObjectType).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.ReminderEscalationsAPI.GetReminderEscalationTenantConfigV1(context.Background(), domainObjectType).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReminderEscalationsAPI.GetReminderEscalationTenantConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReminderEscalationTenantConfigV1`: Reminderescalationtenantconfig
    fmt.Fprintf(os.Stdout, "Response from `ReminderEscalationsAPI.GetReminderEscalationTenantConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-reminder-escalation-tenant-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update Reminder Escalation Tenant Config
Replaces the tenant-default ruleset for a domain object type.
Send the `revision` from the latest read. A stale revision returns 409.

[API Spec](https://developer.sailpoint.com/docs/api/put-reminder-escalation-tenant-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**domainObjectType** | **string** | Domain object type key. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReminderEscalationTenantConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **reminderescalationtenantconfigupdate** | [**Reminderescalationtenantconfigupdate**](../models/reminderescalationtenantconfigupdate) |  | 

### Return type

[**Reminderescalationtenantconfig**](../models/reminderescalationtenantconfig)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    reminder_escalations "github.com/sailpoint-oss/golang-sdk/v3/reminder_escalations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    domainObjectType := `CERTIFICATION` // string | Domain object type key. # string | Domain object type key.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    reminderescalationtenantconfigupdateJson := []byte(`{
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
        }`) // Reminderescalationtenantconfigupdate | 

    var reminderescalationtenantconfigupdate reminder_escalations.Reminderescalationtenantconfigupdate
    if err := json.Unmarshal(reminderescalationtenantconfigupdateJson, &reminderescalationtenantconfigupdate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ReminderEscalationsAPI.PutReminderEscalationTenantConfigV1(context.Background(), domainObjectType).XSailPointExperimental(xSailPointExperimental).Reminderescalationtenantconfigupdate(reminderescalationtenantconfigupdate).Execute()
	  //resp, r, err := apiClient.ReminderEscalationsAPI.PutReminderEscalationTenantConfigV1(context.Background(), domainObjectType).XSailPointExperimental(xSailPointExperimental).Reminderescalationtenantconfigupdate(reminderescalationtenantconfigupdate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ReminderEscalationsAPI.PutReminderEscalationTenantConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReminderEscalationTenantConfigV1`: Reminderescalationtenantconfig
    fmt.Fprintf(os.Stdout, "Response from `ReminderEscalationsAPI.PutReminderEscalationTenantConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

