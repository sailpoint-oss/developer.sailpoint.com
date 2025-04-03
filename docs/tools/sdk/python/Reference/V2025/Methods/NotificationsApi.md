---
id: v2025-notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Notifications', 'V2025Notifications'] 
slug: /tools/sdk/go/v2025/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'V2025Notifications']
---

# NotificationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-domain-dkim**](#create-domain-dkim) | **Post** `/verified-domains` | Verify domain address via DKIM
[**create-notification-template**](#create-notification-template) | **Post** `/notification-templates` | Create Notification Template
[**create-verified-from-address**](#create-verified-from-address) | **Post** `/verified-from-addresses` | Create Verified From Address
[**delete-notification-templates-in-bulk**](#delete-notification-templates-in-bulk) | **Post** `/notification-templates/bulk-delete` | Bulk Delete Notification Templates
[**delete-verified-from-address**](#delete-verified-from-address) | **Delete** `/verified-from-addresses/{id}` | Delete Verified From Address
[**get-dkim-attributes**](#get-dkim-attributes) | **Get** `/verified-domains` | Get DKIM Attributes
[**get-mail-from-attributes**](#get-mail-from-attributes) | **Get** `/mail-from-attributes/{identity}` | Get MAIL FROM Attributes
[**get-notification-template**](#get-notification-template) | **Get** `/notification-templates/{id}` | Get Notification Template By Id
[**get-notifications-template-context**](#get-notifications-template-context) | **Get** `/notification-template-context` | Get Notification Template Context
[**list-from-addresses**](#list-from-addresses) | **Get** `/verified-from-addresses` | List From Addresses
[**list-notification-preferences**](#list-notification-preferences) | **Get** `/notification-preferences/{key}` | List Notification Preferences for tenant.
[**list-notification-template-defaults**](#list-notification-template-defaults) | **Get** `/notification-template-defaults` | List Notification Template Defaults
[**list-notification-templates**](#list-notification-templates) | **Get** `/notification-templates` | List Notification Templates
[**put-mail-from-attributes**](#put-mail-from-attributes) | **Put** `/mail-from-attributes` | Change MAIL FROM domain
[**send-test-notification**](#send-test-notification) | **Post** `/send-test-notification` | Send Test Notification


## create-domain-dkim
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Verify domain address via DKIM
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-domain-dkim)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDomainDkimRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **domainAddress** | [**DomainAddress**](../models/domain-address) |  | 

### Return type

[**DomainStatusDto**](../models/domain-status-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    domainAddress := fmt.Sprintf(`{
          "domain" : "sailpoint.com"
        }`) # DomainAddress | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.CreateDomainDkim(context.Background()).XSailPointExperimental(xSailPointExperimental).DomainAddress(domainAddress).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.CreateDomainDkim``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDomainDkim`: DomainStatusDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.CreateDomainDkim`: %v\n", resp)
}
```

[[Back to top]](#)

## create-notification-template
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create Notification Template
This creates a template for your site. 

You can also use this endpoint to update a template.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.   Modify the fields you want to change and submit the POST request when ready.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-notification-template)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNotificationTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **templateDto** | [**TemplateDto**](../models/template-dto) |  | 

### Return type

[**TemplateDto**](../models/template-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    templateDto := fmt.Sprintf(`{
          "slackTemplate" : "slackTemplate",
          "footer" : "footer",
          "teamsTemplate" : "teamsTemplate",
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
        }`) # TemplateDto | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.CreateNotificationTemplate(context.Background()).XSailPointExperimental(xSailPointExperimental).TemplateDto(templateDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.CreateNotificationTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNotificationTemplate`: TemplateDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.CreateNotificationTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## create-verified-from-address
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create Verified From Address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-verified-from-address)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateVerifiedFromAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **emailStatusDto** | [**EmailStatusDto**](../models/email-status-dto) |  | 

### Return type

[**EmailStatusDto**](../models/email-status-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    emailStatusDto := fmt.Sprintf(`{
          "isVerifiedByDomain" : false,
          "verificationStatus" : "PENDING",
          "id" : "id",
          "email" : "sender@example.com"
        }`) # EmailStatusDto | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.CreateVerifiedFromAddress(context.Background()).XSailPointExperimental(xSailPointExperimental).EmailStatusDto(emailStatusDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.CreateVerifiedFromAddress``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateVerifiedFromAddress`: EmailStatusDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.CreateVerifiedFromAddress`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-notification-templates-in-bulk
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Bulk Delete Notification Templates
This lets you bulk delete templates that you previously created for your site. Since this is a beta feature, please contact support to enable usage.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-notification-templates-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNotificationTemplatesInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **templateBulkDeleteDto** | [**[]TemplateBulkDeleteDto**](../models/template-bulk-delete-dto) |  | 

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    templateBulkDeleteDto := fmt.Sprintf(``) # []TemplateBulkDeleteDto | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.NotificationsAPI.DeleteNotificationTemplatesInBulk(context.Background()).XSailPointExperimental(xSailPointExperimental).TemplateBulkDeleteDto(templateBulkDeleteDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.DeleteNotificationTemplatesInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-verified-from-address
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Verified From Address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-verified-from-address)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteVerifiedFromAddressRequest struct via the builder pattern


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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := id_example # string |  # string | 
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.NotificationsAPI.DeleteVerifiedFromAddress(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.DeleteVerifiedFromAddress``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-dkim-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get DKIM Attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-dkim-attributes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDkimAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**[]DkimAttributes**](../models/dkim-attributes)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.GetDkimAttributes(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetDkimAttributes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDkimAttributes`: []DkimAttributes
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetDkimAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mail-from-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get MAIL FROM Attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-mail-from-attributes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMailFromAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**MailFromAttributes**](../models/mail-from-attributes)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := bobsmith@sailpoint.com # string | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status # string | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.GetMailFromAttributes(context.Background()).Id(id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetMailFromAttributes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMailFromAttributes`: MailFromAttributes
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetMailFromAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## get-notification-template
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Notification Template By Id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-notification-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id of the Notification Template | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNotificationTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TemplateDto**](../models/template-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := c17bea3a-574d-453c-9e04-4365fbf5af0b # string | Id of the Notification Template # string | Id of the Notification Template
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.GetNotificationTemplate(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetNotificationTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNotificationTemplate`: TemplateDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetNotificationTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## get-notifications-template-context
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Notification Template Context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-notifications-template-context)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNotificationsTemplateContextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**NotificationTemplateContext**](../models/notification-template-context)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.GetNotificationsTemplateContext(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.GetNotificationsTemplateContext``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNotificationsTemplateContext`: NotificationTemplateContext
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.GetNotificationsTemplateContext`: %v\n", resp)
}
```

[[Back to top]](#)

## list-from-addresses
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List From Addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-from-addresses)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFromAddressesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** | 

### Return type

[**[]EmailStatusDto**](../models/email-status-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := email eq "john.doe@company.com" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional)
    sorters := email # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.ListFromAddresses(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListFromAddresses``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFromAddresses`: []EmailStatusDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListFromAddresses`: %v\n", resp)
}
```

[[Back to top]](#)

## list-notification-preferences
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Notification Preferences for tenant.
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-notification-preferences)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNotificationPreferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**PreferencesDto**](../models/preferences-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.ListNotificationPreferences(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListNotificationPreferences``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNotificationPreferences`: PreferencesDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListNotificationPreferences`: %v\n", resp)
}
```

[[Back to top]](#)

## list-notification-template-defaults
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Notification Template Defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-notification-template-defaults)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNotificationTemplateDefaultsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | 

### Return type

[**[]TemplateDtoDefault**](../models/template-dto-default)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := key eq "cloud_manual_work_item_summary" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.ListNotificationTemplateDefaults(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListNotificationTemplateDefaults``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNotificationTemplateDefaults`: []TemplateDtoDefault
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListNotificationTemplateDefaults`: %v\n", resp)
}
```

[[Back to top]](#)

## list-notification-templates
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Notification Templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-notification-templates)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNotificationTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* | 

### Return type

[**[]TemplateDto**](../models/template-dto)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters := medium eq "EMAIL" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.ListNotificationTemplates(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.ListNotificationTemplates``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNotificationTemplates`: []TemplateDto
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.ListNotificationTemplates`: %v\n", resp)
}
```

[[Back to top]](#)

## put-mail-from-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Change MAIL FROM domain
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-mail-from-attributes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutMailFromAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **mailFromAttributesDto** | [**MailFromAttributesDto**](../models/mail-from-attributes-dto) |  | 

### Return type

[**MailFromAttributes**](../models/mail-from-attributes)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    mailFromAttributesDto := fmt.Sprintf(`{
          "identity" : "BobSmith@sailpoint.com",
          "mailFromDomain" : "example.sailpoint.com"
        }`) # MailFromAttributesDto | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.NotificationsAPI.PutMailFromAttributes(context.Background()).XSailPointExperimental(xSailPointExperimental).MailFromAttributesDto(mailFromAttributesDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.PutMailFromAttributes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutMailFromAttributes`: MailFromAttributes
	fmt.Fprintf(os.Stdout, "Response from `NotificationsAPI.PutMailFromAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## send-test-notification
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Send Test Notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-test-notification)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendTestNotificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **sendTestNotificationRequestDto** | [**SendTestNotificationRequestDto**](../models/send-test-notification-request-dto) |  | 

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sendTestNotificationRequestDto := fmt.Sprintf(`{
          "context" : "{}",
          "medium" : "EMAIL",
          "key" : "cloud_manual_work_item_summary"
        }`) # SendTestNotificationRequestDto | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.NotificationsAPI.SendTestNotification(context.Background()).XSailPointExperimental(xSailPointExperimental).SendTestNotificationRequestDto(sendTestNotificationRequestDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NotificationsAPI.SendTestNotification``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

