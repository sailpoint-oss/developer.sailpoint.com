---
id: beta-notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Notifications', 'BetaNotifications'] 
slug: /tools/sdk/powershell/beta/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'BetaNotifications']
---

# Notifications
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaDomainDkim**](#create-domain-dkim) | **POST** `/verified-domains` | Verify domain address via DKIM
[**New-BetaNotificationTemplate**](#create-notification-template) | **POST** `/notification-templates` | Create Notification Template
[**New-BetaVerifiedFromAddress**](#create-verified-from-address) | **POST** `/verified-from-addresses` | Create Verified From Address
[**Remove-BetaNotificationTemplatesInBulk**](#delete-notification-templates-in-bulk) | **POST** `/notification-templates/bulk-delete` | Bulk Delete Notification Templates
[**Remove-BetaVerifiedFromAddress**](#delete-verified-from-address) | **DELETE** `/verified-from-addresses/{id}` | Delete Verified From Address
[**Get-BetaDkimAttributes**](#get-dkim-attributes) | **GET** `/verified-domains` | Get DKIM Attributes
[**Get-BetaMailFromAttributes**](#get-mail-from-attributes) | **GET** `/mail-from-attributes/{identityId}` | Get MAIL FROM Attributes
[**Get-BetaNotificationTemplate**](#get-notification-template) | **GET** `/notification-templates/{id}` | Get Notification Template By Id
[**Get-BetaNotificationsTemplateContext**](#get-notifications-template-context) | **GET** `/notification-template-context` | Get Notification Template Context
[**Get-BetaFromAddresses**](#list-from-addresses) | **GET** `/verified-from-addresses` | List From Addresses
[**Get-BetaNotificationPreferences**](#list-notification-preferences) | **GET** `/notification-preferences/{key}` | List Notification Preferences for tenant.
[**Get-BetaNotificationTemplateDefaults**](#list-notification-template-defaults) | **GET** `/notification-template-defaults` | List Notification Template Defaults
[**Get-BetaNotificationTemplates**](#list-notification-templates) | **GET** `/notification-templates` | List Notification Templates
[**Send-BetaMailFromAttributes**](#put-mail-from-attributes) | **PUT** `/mail-from-attributes` | Change MAIL FROM domain
[**Send-BetaTestNotification**](#send-test-notification) | **POST** `/send-test-notification` | Send Test Notification


## create-domain-dkim
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-domain-dkim)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DomainAddress | [**DomainAddress**](../models/domain-address) | True  | 

### Return type
[**DomainStatusDto**](../models/domain-status-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM tokens required for the verification process. | DomainStatusDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DomainAddress = @"{
  "domain" : "sailpoint.com"
}"@

# Verify domain address via DKIM

try {
    $Result = ConvertFrom-JsonToDomainAddress -Json $DomainAddress
    New-BetaDomainDkim -DomainAddress $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaDomainDkim -DomainAddress $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaDomainDkim"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-notification-template
This creates a template for your site. 

You can also use this endpoint to update a template.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.   Modify the fields you want to change and submit the POST request when ready.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-notification-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TemplateDto | [**TemplateDto**](../models/template-dto) | True  | 

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | TemplateDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
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

# Create Notification Template

try {
    $Result = ConvertFrom-JsonToTemplateDto -Json $TemplateDto
    New-BetaNotificationTemplate -TemplateDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaNotificationTemplate -TemplateDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaNotificationTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-verified-from-address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-verified-from-address)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | EmailStatusDto | [**EmailStatusDto**](../models/email-status-dto) | True  | 

### Return type
[**EmailStatusDto**](../models/email-status-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | New Verified Email Status | EmailStatusDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$EmailStatusDto = @"{
  "isVerifiedByDomain" : false,
  "verificationStatus" : "PENDING",
  "id" : "id",
  "email" : "sender@example.com"
}"@

# Create Verified From Address

try {
    $Result = ConvertFrom-JsonToEmailStatusDto -Json $EmailStatusDto
    New-BetaVerifiedFromAddress -EmailStatusDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaVerifiedFromAddress -EmailStatusDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaVerifiedFromAddress"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-notification-templates-in-bulk
This lets you bulk delete templates that you previously created for your site. Since this is a beta feature, please contact support to enable usage.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-notification-templates-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TemplateBulkDeleteDto | [**[]TemplateBulkDeleteDto**](../models/template-bulk-delete-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 $TemplateBulkDeleteDto = @"{
  "medium" : "EMAIL",
  "locale" : "en",
  "key" : "cloud_manual_work_item_summary"
}"@ # TemplateBulkDeleteDto[] | 
 

# Bulk Delete Notification Templates

try {
    $Result = ConvertFrom-JsonToTemplateBulkDeleteDto -Json $TemplateBulkDeleteDto
    Remove-BetaNotificationTemplatesInBulk -TemplateBulkDeleteDto $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaNotificationTemplatesInBulk -TemplateBulkDeleteDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaNotificationTemplatesInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-verified-from-address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-verified-from-address)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "MyId" # String | 

# Delete Verified From Address

try {
    Remove-BetaVerifiedFromAddress -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaVerifiedFromAddress -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaVerifiedFromAddress"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-dkim-attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-dkim-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**DkimAttributes[]**](../models/dkim-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM Attributes | DkimAttributes[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get DKIM Attributes

try {
    Get-BetaDkimAttributes 
    
    # Below is a request that includes all optional parameters
    # Get-BetaDkimAttributes  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaDkimAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mail-from-attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mail-from-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes object | MailFromAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "bobsmith@sailpoint.com" # String | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

# Get MAIL FROM Attributes

try {
    Get-BetaMailFromAttributes -IdentityId $IdentityId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaMailFromAttributes -IdentityId $IdentityId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMailFromAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notification-template
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-notification-template)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Notification Template

### Return type
[**TemplateDto[]**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | TemplateDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Notification Template

# Get Notification Template By Id

try {
    Get-BetaNotificationTemplate -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNotificationTemplate -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNotificationTemplate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notifications-template-context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-notifications-template-context)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**NotificationTemplateContext**](../models/notification-template-context)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Notification template context attributes for a specific tenant. | NotificationTemplateContext
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get Notification Template Context

try {
    Get-BetaNotificationsTemplateContext 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNotificationsTemplateContext  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNotificationsTemplateContext"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-from-addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-from-addresses)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'email eq "john.doe@company.com"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional)
$Sorters = "email" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

# List From Addresses

try {
    Get-BetaFromAddresses 
    
    # Below is a request that includes all optional parameters
    # Get-BetaFromAddresses -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaFromAddresses"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-preferences
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-notification-preferences)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | The notification key.

### Return type
[**PreferencesDto[]**](../models/preferences-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return preference for the given notification key. | PreferencesDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "cloud_manual_work_item_summary" # String | The notification key.

# List Notification Preferences for tenant.

try {
    Get-BetaNotificationPreferences -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNotificationPreferences -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNotificationPreferences"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-template-defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-notification-template-defaults)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'key eq "cloud_manual_work_item_summary"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

# List Notification Template Defaults

try {
    Get-BetaNotificationTemplateDefaults 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNotificationTemplateDefaults -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNotificationTemplateDefaults"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-notification-templates)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'medium eq "EMAIL"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

# List Notification Templates

try {
    Get-BetaNotificationTemplates 
    
    # Below is a request that includes all optional parameters
    # Get-BetaNotificationTemplates -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaNotificationTemplates"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-mail-from-attributes
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-mail-from-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | MailFromAttributesDto | [**MailFromAttributesDto**](../models/mail-from-attributes-dto) | True  | 

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes required to verify the change | MailFromAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$MailFromAttributesDto = @"{
  "identity" : "BobSmith@sailpoint.com",
  "mailFromDomain" : "example.sailpoint.com"
}"@

# Change MAIL FROM domain

try {
    $Result = ConvertFrom-JsonToMailFromAttributesDto -Json $MailFromAttributesDto
    Send-BetaMailFromAttributes -MailFromAttributesDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaMailFromAttributes -MailFromAttributesDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaMailFromAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-test-notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/beta/send-test-notification)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | SendTestNotificationRequestDto | [**SendTestNotificationRequestDto**](../models/send-test-notification-request-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SendTestNotificationRequestDto = @"{
  "context" : "{}",
  "medium" : "EMAIL",
  "key" : "cloud_manual_work_item_summary"
}"@

# Send Test Notification

try {
    $Result = ConvertFrom-JsonToSendTestNotificationRequestDto -Json $SendTestNotificationRequestDto
    Send-BetaTestNotification -SendTestNotificationRequestDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-BetaTestNotification -SendTestNotificationRequestDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaTestNotification"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
