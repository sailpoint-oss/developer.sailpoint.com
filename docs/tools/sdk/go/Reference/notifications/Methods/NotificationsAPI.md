---
id: v1-notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Notifications', 'V1Notifications'] 
slug: /tools/sdk/go/notifications/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'V1Notifications']
---

# NotificationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-domain-dkim-v1**](#create-domain-dkim-v1) | **Post** `/verified-domains/v1` | Verify domain address via dkim
[**create-notification-template-v1**](#create-notification-template-v1) | **Post** `/notification-templates/v1` | Create notification template
[**create-verified-from-address-v1**](#create-verified-from-address-v1) | **Post** `/verified-from-addresses/v1` | Create verified from address
[**delete-notification-templates-in-bulk-v1**](#delete-notification-templates-in-bulk-v1) | **Post** `/notification-templates/v1/bulk-delete` | Bulk delete notification templates
[**delete-verified-from-address-v1**](#delete-verified-from-address-v1) | **Delete** `/verified-from-addresses/v1/{id}` | Delete verified from address
[**get-dkim-attributes-v1**](#get-dkim-attributes-v1) | **Get** `/verified-domains/v1` | Get dkim attributes
[**get-mail-from-attributes-v1**](#get-mail-from-attributes-v1) | **Get** `/mail-from-attributes/v1/{identity}` | Get mail from attributes
[**get-notification-preferences-v1**](#get-notification-preferences-v1) | **Get** `/notification-preferences/v1/{key}` | List notification preferences for tenant.
[**get-notification-template-v1**](#get-notification-template-v1) | **Get** `/notification-templates/v1/{id}` | Get notification template by id
[**get-notification-template-variables-v1**](#get-notification-template-variables-v1) | **Get** `/notification-template-variables/v1/{key}/{medium}` | Get notification template variables
[**get-notifications-template-context-v1**](#get-notifications-template-context-v1) | **Get** `/notification-template-context/v1` | Get notification template context
[**list-from-addresses-v1**](#list-from-addresses-v1) | **Get** `/verified-from-addresses/v1` | List from addresses
[**list-notification-template-defaults-v1**](#list-notification-template-defaults-v1) | **Get** `/notification-template-defaults/v1` | List notification template defaults
[**list-notification-templates-v1**](#list-notification-templates-v1) | **Get** `/notification-templates/v1` | List notification templates
[**put-mail-from-attributes-v1**](#put-mail-from-attributes-v1) | **Put** `/mail-from-attributes/v1` | Change mail from domain
[**send-test-notification-v1**](#send-test-notification-v1) | **Post** `/send-test-notification/v1` | Send test notification


## create-domain-dkim-v1
Verify domain address via dkim
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-domain-dkim-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDomainDkimV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainaddress** | [**Domainaddress**](../models/domainaddress) |  | 

### Return type

[**Domainstatusdto**](../models/domainstatusdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/notifications"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    domainaddress := []byte(``) // Domainaddress | 

    var domainaddress v1.Domainaddress
    if err := json.Unmarshal(domainaddress, &domainaddress); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.CreateDomainDkimV1(context.Background()).Domainaddress(domainaddress).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.CreateDomainDkimV1(context.Background()).Domainaddress(domainaddress).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.CreateDomainDkimV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDomainDkimV1`: Domainstatusdto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.CreateDomainDkimV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-notification-template-v1
Create notification template
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-notification-template-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNotificationTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatedto** | [**Templatedto**](../models/templatedto) |  | 

### Return type

[**Templatedto**](../models/templatedto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/notifications"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    templatedto := []byte(``) // Templatedto | 

    var templatedto v1.Templatedto
    if err := json.Unmarshal(templatedto, &templatedto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.CreateNotificationTemplateV1(context.Background()).Templatedto(templatedto).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.CreateNotificationTemplateV1(context.Background()).Templatedto(templatedto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.CreateNotificationTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateNotificationTemplateV1`: Templatedto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.CreateNotificationTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-verified-from-address-v1
Create verified from address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-verified-from-address-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateVerifiedFromAddressV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailstatusdto** | [**Emailstatusdto**](../models/emailstatusdto) |  | 

### Return type

[**Emailstatusdto**](../models/emailstatusdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/notifications"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    emailstatusdto := []byte(`{"email":"sender@example.com"}`) // Emailstatusdto | 

    var emailstatusdto v1.Emailstatusdto
    if err := json.Unmarshal(emailstatusdto, &emailstatusdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.CreateVerifiedFromAddressV1(context.Background()).Emailstatusdto(emailstatusdto).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.CreateVerifiedFromAddressV1(context.Background()).Emailstatusdto(emailstatusdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.CreateVerifiedFromAddressV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateVerifiedFromAddressV1`: Emailstatusdto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.CreateVerifiedFromAddressV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-notification-templates-in-bulk-v1
Bulk delete notification templates
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-notification-templates-in-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNotificationTemplatesInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templatebulkdeletedto** | [**[]Templatebulkdeletedto**](../models/templatebulkdeletedto) |  | 

### Return type

 (empty response body)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/notifications"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    templatebulkdeletedto := []byte(``) // []Templatebulkdeletedto | 

    var templatebulkdeletedto []v1.Templatebulkdeletedto
    if err := json.Unmarshal(templatebulkdeletedto, &templatebulkdeletedto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NotificationsAPI.DeleteNotificationTemplatesInBulkV1(context.Background()).Templatebulkdeletedto(templatebulkdeletedto).Execute()
	  //r, err := apiClient.NotificationsAPI.DeleteNotificationTemplatesInBulkV1(context.Background()).Templatebulkdeletedto(templatebulkdeletedto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.DeleteNotificationTemplatesInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-verified-from-address-v1
Delete verified from address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-verified-from-address-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Unique identifier of the verified sender address to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteVerifiedFromAddressV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Unique identifier of the verified sender address to delete. # string | Unique identifier of the verified sender address to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NotificationsAPI.DeleteVerifiedFromAddressV1(context.Background(), id).Execute()
	  //r, err := apiClient.NotificationsAPI.DeleteVerifiedFromAddressV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.DeleteVerifiedFromAddressV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-dkim-attributes-v1
Get dkim attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-dkim-attributes-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDkimAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]Dkimattributes**](../models/dkimattributes)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.GetDkimAttributesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.GetDkimAttributesV1(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetDkimAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDkimAttributesV1`: []Dkimattributes
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetDkimAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mail-from-attributes-v1
Get mail from attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-mail-from-attributes-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identity** | **string** | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMailFromAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Mailfromattributes**](../models/mailfromattributes)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    identity := `bobsmith@sailpoint.com` // string | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status # string | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.GetMailFromAttributesV1(context.Background(), identity).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.GetMailFromAttributesV1(context.Background(), identity).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetMailFromAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMailFromAttributesV1`: Mailfromattributes
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetMailFromAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-notification-preferences-v1
List notification preferences for tenant.
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-preferences-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | The key. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNotificationPreferencesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Preferencesdto**](../models/preferencesdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    key := `key_example` // string | The key. # string | The key.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.GetNotificationPreferencesV1(context.Background(), key).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.GetNotificationPreferencesV1(context.Background(), key).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetNotificationPreferencesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNotificationPreferencesV1`: Preferencesdto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetNotificationPreferencesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-notification-template-v1
Get notification template by id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Notification Template | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNotificationTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Templatedto**](../models/templatedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    id := `c17bea3a-574d-453c-9e04-4365fbf5af0b` // string | Id of the Notification Template # string | Id of the Notification Template

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.GetNotificationTemplateV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.GetNotificationTemplateV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetNotificationTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNotificationTemplateV1`: Templatedto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetNotificationTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-notification-template-variables-v1
Get notification template variables
Returns global variables and template-specific variables for a given notification template key and medium.
Use these variable names in template content; they are replaced at send time with the corresponding values.
Variable lists can be sorted by key, type, or description via the sorters query parameter (default ascending by key).


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-template-variables-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation.  | 
**medium** | **string** | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation.  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNotificationTemplateVariablesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** | 

### Return type

[**Templatevariablesdto**](../models/templatevariablesdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    key := `approval_request_notification` // string | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation.  # string | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
    medium := `EMAIL` // string | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation.  # string | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
    sorters := `-description` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.GetNotificationTemplateVariablesV1(context.Background(), key, medium).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.GetNotificationTemplateVariablesV1(context.Background(), key, medium).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetNotificationTemplateVariablesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNotificationTemplateVariablesV1`: Templatevariablesdto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetNotificationTemplateVariablesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-notifications-template-context-v1
Get notification template context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notifications-template-context-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetNotificationsTemplateContextV1Request struct via the builder pattern


### Return type

[**Notificationtemplatecontext**](../models/notificationtemplatecontext)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.GetNotificationsTemplateContextV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.GetNotificationsTemplateContextV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetNotificationsTemplateContextV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNotificationsTemplateContextV1`: Notificationtemplatecontext
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetNotificationsTemplateContextV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-from-addresses-v1
List from addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-from-addresses-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFromAddressesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** | 

### Return type

[**[]Emailstatusdto**](../models/emailstatusdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `email eq "john.doe@company.com"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional)
    sorters := `email` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.ListFromAddressesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.ListFromAddressesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListFromAddressesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListFromAddressesV1`: []Emailstatusdto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListFromAddressesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-notification-template-defaults-v1
List notification template defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-notification-template-defaults-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNotificationTemplateDefaultsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | 

### Return type

[**[]Templatedtodefault**](../models/templatedtodefault)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `key eq "cloud_manual_work_item_summary"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.ListNotificationTemplateDefaultsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.ListNotificationTemplateDefaultsV1(context.Background()).Limit(limit).Offset(offset).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListNotificationTemplateDefaultsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListNotificationTemplateDefaultsV1`: []Templatedtodefault
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListNotificationTemplateDefaultsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-notification-templates-v1
List notification templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-notification-templates-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNotificationTemplatesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** | 

### Return type

[**[]Templatedto**](../models/templatedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := `medium eq "EMAIL"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
    sorters := `key, -name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.ListNotificationTemplatesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.ListNotificationTemplatesV1(context.Background()).Limit(limit).Offset(offset).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListNotificationTemplatesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListNotificationTemplatesV1`: []Templatedto
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListNotificationTemplatesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-mail-from-attributes-v1
Change mail from domain
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-mail-from-attributes-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutMailFromAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailfromattributesdto** | [**Mailfromattributesdto**](../models/mailfromattributesdto) |  | 

### Return type

[**Mailfromattributes**](../models/mailfromattributes)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/notifications"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    mailfromattributesdto := []byte(`{"identity":"BobSmith@sailpoint.com","mailFromDomain":"example.sailpoint.com"}`) // Mailfromattributesdto | 

    var mailfromattributesdto v1.Mailfromattributesdto
    if err := json.Unmarshal(mailfromattributesdto, &mailfromattributesdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsAPI.PutMailFromAttributesV1(context.Background()).Mailfromattributesdto(mailfromattributesdto).Execute()
	  //resp, r, err := apiClient.NotificationsAPI.PutMailFromAttributesV1(context.Background()).Mailfromattributesdto(mailfromattributesdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.PutMailFromAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutMailFromAttributesV1`: Mailfromattributes
    fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.PutMailFromAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## send-test-notification-v1
Send test notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-test-notification-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendTestNotificationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendtestnotificationrequestdto** | [**Sendtestnotificationrequestdto**](../models/sendtestnotificationrequestdto) |  | 

### Return type

 (empty response body)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/notifications"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/notifications"
)

func main() {
    sendtestnotificationrequestdto := []byte(`{"key":"cloud_manual_work_item_summary","medium":"EMAIL","context":{"numberOfPendingTasks":"4","ownerId":"201327fda1c44704ac01181e963d463c"}}`) // Sendtestnotificationrequestdto | 

    var sendtestnotificationrequestdto v1.Sendtestnotificationrequestdto
    if err := json.Unmarshal(sendtestnotificationrequestdto, &sendtestnotificationrequestdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.NotificationsAPI.SendTestNotificationV1(context.Background()).Sendtestnotificationrequestdto(sendtestnotificationrequestdto).Execute()
	  //r, err := apiClient.NotificationsAPI.SendTestNotificationV1(context.Background()).Sendtestnotificationrequestdto(sendtestnotificationrequestdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.SendTestNotificationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

