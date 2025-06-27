---
id: v2024-notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Notifications', 'V2024Notifications'] 
slug: /tools/sdk/powershell/v2024/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'V2024Notifications']
---

# Notifications
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024DomainDkim**](#create-domain-dkim) | **POST** `/verified-domains` | Verify domain address via dkim
[**New-V2024NotificationTemplate**](#create-notification-template) | **POST** `/notification-templates` | Create notification template
[**New-V2024VerifiedFromAddress**](#create-verified-from-address) | **POST** `/verified-from-addresses` | Create verified from address
[**Remove-V2024NotificationTemplatesInBulk**](#delete-notification-templates-in-bulk) | **POST** `/notification-templates/bulk-delete` | Bulk delete notification templates
[**Remove-V2024VerifiedFromAddress**](#delete-verified-from-address) | **DELETE** `/verified-from-addresses/{id}` | Delete verified from address
[**Get-V2024DkimAttributes**](#get-dkim-attributes) | **GET** `/verified-domains` | Get dkim attributes
[**Get-V2024MailFromAttributes**](#get-mail-from-attributes) | **GET** `/mail-from-attributes/{identity}` | Get mail from attributes
[**Get-V2024NotificationTemplate**](#get-notification-template) | **GET** `/notification-templates/{id}` | Get notification template by id
[**Get-V2024NotificationsTemplateContext**](#get-notifications-template-context) | **GET** `/notification-template-context` | Get notification template context
[**Get-V2024FromAddresses**](#list-from-addresses) | **GET** `/verified-from-addresses` | List from addresses
[**Get-V2024NotificationPreferences**](#list-notification-preferences) | **GET** `/notification-preferences/{key}` | List notification preferences for tenant.
[**Get-V2024NotificationTemplateDefaults**](#list-notification-template-defaults) | **GET** `/notification-template-defaults` | List notification template defaults
[**Get-V2024NotificationTemplates**](#list-notification-templates) | **GET** `/notification-templates` | List notification templates
[**Send-V2024MailFromAttributes**](#put-mail-from-attributes) | **PUT** `/mail-from-attributes` | Change mail from domain
[**Send-V2024TestNotification**](#send-test-notification) | **POST** `/send-test-notification` | Send test notification


## create-domain-dkim
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-domain-dkim)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | DomainAddress | [**DomainAddress**](../models/domain-address) | True  | 

### Return type
[**DomainStatusDto**](../models/domain-status-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM tokens required for the verification process. | DomainStatusDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$DomainAddress = @"{
  "domain" : "sailpoint.com"
}"@

# Verify domain address via dkim

try {
    $Result = ConvertFrom-JsonToDomainAddress -Json $DomainAddress
    New-V2024DomainDkim -XSailPointExperimental $XSailPointExperimental -DomainAddress $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024DomainDkim -XSailPointExperimental $XSailPointExperimental -DomainAddress $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024DomainDkim"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-notification-template
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This creates a template for your site. 

You can also use this endpoint to update a template.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.   Modify the fields you want to change and submit the POST request when ready.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-notification-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | TemplateDto | [**TemplateDto**](../models/template-dto) | True  | 

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | TemplateDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$TemplateDto = @"{
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
}"@

# Create notification template

try {
    $Result = ConvertFrom-JsonToTemplateDto -Json $TemplateDto
    New-V2024NotificationTemplate -XSailPointExperimental $XSailPointExperimental -TemplateDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024NotificationTemplate -XSailPointExperimental $XSailPointExperimental -TemplateDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024NotificationTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-verified-from-address
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-verified-from-address)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | EmailStatusDto | [**EmailStatusDto**](../models/email-status-dto) | True  | 

### Return type
[**EmailStatusDto**](../models/email-status-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | New Verified Email Status | EmailStatusDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$EmailStatusDto = @"{
  "isVerifiedByDomain" : false,
  "verificationStatus" : "PENDING",
  "id" : "id",
  "email" : "sender@example.com"
}"@

# Create verified from address

try {
    $Result = ConvertFrom-JsonToEmailStatusDto -Json $EmailStatusDto
    New-V2024VerifiedFromAddress -XSailPointExperimental $XSailPointExperimental -EmailStatusDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024VerifiedFromAddress -XSailPointExperimental $XSailPointExperimental -EmailStatusDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024VerifiedFromAddress"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-notification-templates-in-bulk
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This lets you bulk delete templates that you previously created for your site. Since this is a beta feature, please contact support to enable usage.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-notification-templates-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | TemplateBulkDeleteDto | [**[]TemplateBulkDeleteDto**](../models/template-bulk-delete-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $TemplateBulkDeleteDto = @"{
  "medium" : "EMAIL",
  "locale" : "en",
  "key" : "cloud_manual_work_item_summary"
}"@ # TemplateBulkDeleteDto[] | 
 

# Bulk delete notification templates

try {
    $Result = ConvertFrom-JsonToTemplateBulkDeleteDto -Json $TemplateBulkDeleteDto
    Remove-V2024NotificationTemplatesInBulk -XSailPointExperimental $XSailPointExperimental -TemplateBulkDeleteDto $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024NotificationTemplatesInBulk -XSailPointExperimental $XSailPointExperimental -TemplateBulkDeleteDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024NotificationTemplatesInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-verified-from-address
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-verified-from-address)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "MyId" # String | 
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete verified from address

try {
    Remove-V2024VerifiedFromAddress -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024VerifiedFromAddress -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024VerifiedFromAddress"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-dkim-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-dkim-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**DkimAttributes[]**](../models/dkim-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM Attributes | DkimAttributes[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get dkim attributes

try {
    Get-V2024DkimAttributes -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024DkimAttributes -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024DkimAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mail-from-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-mail-from-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Id | **String** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes object | MailFromAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "bobsmith@sailpoint.com" # String | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get mail from attributes

try {
    Get-V2024MailFromAttributes -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024MailFromAttributes -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024MailFromAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notification-template
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-notification-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Notification Template
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | TemplateDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Notification Template
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get notification template by id

try {
    Get-V2024NotificationTemplate -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024NotificationTemplate -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024NotificationTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notifications-template-context
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-notifications-template-context)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**NotificationTemplateContext**](../models/notification-template-context)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Notification template context attributes for a specific tenant. | NotificationTemplateContext
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get notification template context

try {
    Get-V2024NotificationsTemplateContext -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024NotificationsTemplateContext -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024NotificationsTemplateContext"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-from-addresses
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-from-addresses)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**

### Return type
[**EmailStatusDto[]**](../models/email-status-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Email Status | EmailStatusDto[]
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'email eq "john.doe@company.com"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional)
$Sorters = "email" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

# List from addresses

try {
    Get-V2024FromAddresses -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024FromAddresses -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024FromAddresses"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-preferences
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-notification-preferences)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**PreferencesDto**](../models/preferences-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return preference for the given notification key. | PreferencesDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List notification preferences for tenant.

try {
    Get-V2024NotificationPreferences -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024NotificationPreferences -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024NotificationPreferences"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-template-defaults
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-notification-template-defaults)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*

### Return type
[**TemplateDtoDefault[]**](../models/template-dto-default)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of the default template objects | TemplateDtoDefault[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'key eq "cloud_manual_work_item_summary"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

# List notification template defaults

try {
    Get-V2024NotificationTemplateDefaults -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024NotificationTemplateDefaults -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024NotificationTemplateDefaults"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-templates
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-notification-templates)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*

### Return type
[**TemplateDto[]**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of template objects for your site | TemplateDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'medium eq "EMAIL"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

# List notification templates

try {
    Get-V2024NotificationTemplates -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024NotificationTemplates -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024NotificationTemplates"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-mail-from-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-mail-from-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | MailFromAttributesDto | [**MailFromAttributesDto**](../models/mail-from-attributes-dto) | True  | 

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes required to verify the change | MailFromAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MailFromAttributesDto = @"{
  "identity" : "BobSmith@sailpoint.com",
  "mailFromDomain" : "example.sailpoint.com"
}"@

# Change mail from domain

try {
    $Result = ConvertFrom-JsonToMailFromAttributesDto -Json $MailFromAttributesDto
    Send-V2024MailFromAttributes -XSailPointExperimental $XSailPointExperimental -MailFromAttributesDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2024MailFromAttributes -XSailPointExperimental $XSailPointExperimental -MailFromAttributesDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024MailFromAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-test-notification
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/v2024/send-test-notification)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SendTestNotificationRequestDto | [**SendTestNotificationRequestDto**](../models/send-test-notification-request-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SendTestNotificationRequestDto = @"{
  "context" : "{}",
  "medium" : "EMAIL",
  "key" : "cloud_manual_work_item_summary"
}"@

# Send test notification

try {
    $Result = ConvertFrom-JsonToSendTestNotificationRequestDto -Json $SendTestNotificationRequestDto
    Send-V2024TestNotification -XSailPointExperimental $XSailPointExperimental -SendTestNotificationRequestDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2024TestNotification -XSailPointExperimental $XSailPointExperimental -SendTestNotificationRequestDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024TestNotification"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
