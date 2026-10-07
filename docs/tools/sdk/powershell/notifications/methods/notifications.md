# Notifications

# Notifications
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-DomainDkimV1**](#create-domain-dkim-v1) | **POST** `/verified-domains/v1` | Verify domain address via dkim
[**New-NotificationTemplateV1**](#create-notification-template-v1) | **POST** `/notification-templates/v1` | Create notification template
[**New-VerifiedFromAddressV1**](#create-verified-from-address-v1) | **POST** `/verified-from-addresses/v1` | Create verified from address
[**Remove-NotificationTemplatesInBulkV1**](#delete-notification-templates-in-bulk-v1) | **POST** `/notification-templates/v1/bulk-delete` | Bulk delete notification templates
[**Remove-VerifiedFromAddressV1**](#delete-verified-from-address-v1) | **DELETE** `/verified-from-addresses/v1/{id}` | Delete verified from address
[**Get-DkimAttributesV1**](#get-dkim-attributes-v1) | **GET** `/verified-domains/v1` | Get dkim attributes
[**Get-MailFromAttributesV1**](#get-mail-from-attributes-v1) | **GET** `/mail-from-attributes/v1/{identity}` | Get mail from attributes
[**Get-NotificationPreferencesV1**](#get-notification-preferences-v1) | **GET** `/notification-preferences/v1/{key}` | Get notification preferences by key
[**Get-NotificationTemplateV1**](#get-notification-template-v1) | **GET** `/notification-templates/v1/{id}` | Get notification template by id
[**Get-NotificationTemplateVariablesV1**](#get-notification-template-variables-v1) | **GET** `/notification-template-variables/v1/{key}/{medium}` | Get notification template variables
[**Get-NotificationsTemplateContextV1**](#get-notifications-template-context-v1) | **GET** `/notification-template-context/v1` | Get notification template context
[**Get-FromAddressesV1**](#list-from-addresses-v1) | **GET** `/verified-from-addresses/v1` | List from addresses
[**Get-NotificationPreferencesV1**](#list-notification-preferences-v1) | **GET** `/notification-preferences/v1` | List notification preferences for tenant
[**Get-NotificationTemplateDefaultsV1**](#list-notification-template-defaults-v1) | **GET** `/notification-template-defaults/v1` | List notification template defaults
[**Get-NotificationTemplatesV1**](#list-notification-templates-v1) | **GET** `/notification-templates/v1` | List notification templates
[**Send-MailFromAttributesV1**](#put-mail-from-attributes-v1) | **PUT** `/mail-from-attributes/v1` | Change mail from domain
[**Send-TestNotificationV1**](#send-test-notification-v1) | **POST** `/send-test-notification/v1` | Send test notification
[**Set-NotificationPreferencesV1**](#set-notification-preferences-v1) | **PUT** `/notification-preferences/v1/{key}` | Set notification preferences by key


## create-domain-dkim-v1
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/create-domain-dkim-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkimV1405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DomainAddress = @"{
  "domain" : "sailpoint.com"
}"@

# Verify domain address via dkim

try {
    $Result = ConvertFrom-JsonToDomainAddress -Json $DomainAddress
    New-DomainDkimV1 -DomainAddress $Result 
    
    # Below is a request that includes all optional parameters
    # New-DomainDkimV1 -DomainAddress $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-DomainDkimV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-notification-template-v1
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/docs/api/get-notification-template-v-1) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/create-notification-template-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$TemplateDto = @"{
  "slackTemplate" : {
    "isSubscription" : false,
    "attachments" : "[]",
    "blocks" : "blocks",
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "You have a new approval request",
    "notificationType" : "notificationType",
    "key" : "key"
  },
  "footer" : "footer",
  "teamsTemplate" : {
    "isSubscription" : false,
    "requestId" : "requestId",
    "autoApprovalData" : {
      "itemId" : "itemId",
      "itemType" : "itemType",
      "autoApprovalMessageJSON" : "autoApprovalMessageJSON",
      "isAutoApproved" : "isAutoApproved",
      "autoApprovalTitle" : "autoApprovalTitle"
    },
    "customFields" : {
      "requestType" : "requestType",
      "campaignId" : "campaignId",
      "campaignStatus" : "campaignStatus",
      "containsDeny" : "containsDeny"
    },
    "requestedById" : "requestedById",
    "approvalId" : "approvalId",
    "text" : "You have a new approval request",
    "notificationType" : "notificationType",
    "title" : "title",
    "key" : "key",
    "messageJSON" : "messageJSON"
  },
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
    New-NotificationTemplateV1 -TemplateDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-NotificationTemplateV1 -TemplateDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-NotificationTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-verified-from-address-v1
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/create-verified-from-address-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$EmailStatusDto = @"{
  "isVerifiedByDomain" : false,
  "verificationStatus" : "SUCCESS",
  "id" : "id",
  "region" : "us-east-1",
  "email" : "sender@example.com"
}"@

# Create verified from address

try {
    $Result = ConvertFrom-JsonToEmailStatusDto -Json $EmailStatusDto
    New-VerifiedFromAddressV1 -EmailStatusDto $Result 
    
    # Below is a request that includes all optional parameters
    # New-VerifiedFromAddressV1 -EmailStatusDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-VerifiedFromAddressV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-notification-templates-in-bulk-v1
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/delete-notification-templates-in-bulk-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
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
 

# Bulk delete notification templates

try {
    $Result = ConvertFrom-JsonToTemplateBulkDeleteDto -Json $TemplateBulkDeleteDto
    Remove-NotificationTemplatesInBulkV1 -TemplateBulkDeleteDto $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-NotificationTemplatesInBulkV1 -TemplateBulkDeleteDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NotificationTemplatesInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-verified-from-address-v1
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/delete-verified-from-address-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Unique identifier of the verified sender address to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Unique identifier of the verified sender address to delete.

# Delete verified from address

try {
    Remove-VerifiedFromAddressV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-VerifiedFromAddressV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-VerifiedFromAddressV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-dkim-attributes-v1
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/get-dkim-attributes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**DkimAttributes[]**](../models/dkim-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM Attributes | DkimAttributes[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Get dkim attributes

try {
    Get-DkimAttributesV1 
    
    # Below is a request that includes all optional parameters
    # Get-DkimAttributesV1 -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DkimAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mail-from-attributes-v1
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-mail-from-attributes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Identity | **String** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes object | MailFromAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Identity = "bobsmith@sailpoint.com" # String | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

# Get mail from attributes

try {
    Get-MailFromAttributesV1 -Identity $Identity 
    
    # Below is a request that includes all optional parameters
    # Get-MailFromAttributesV1 -Identity $Identity  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MailFromAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notification-preferences-v1
Returns the notification preferences for a specific notification key, including preferred mediums and optional CC/BCC email recipients. If no custom preferences exist, returns the default settings from the interest definition. If the key does not exist, a 404 is returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-preferences-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | The notification key.
  Query | FilterUnavailableMediums | **Boolean** |   (optional) (default to $false) | When `true`, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant.

### Return type
[**PreferencesDto**](../models/preferences-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Notification preferences for the given key. | PreferencesDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "approval_completed_notification" # String | The notification key.
$FilterUnavailableMediums = $true # Boolean | When `true`, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. (optional) (default to $false)

# Get notification preferences by key

try {
    Get-NotificationPreferencesV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationPreferencesV1 -Key $Key -FilterUnavailableMediums $FilterUnavailableMediums  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationPreferencesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notification-template-v1
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Notification Template

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | TemplateDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "c17bea3a-574d-453c-9e04-4365fbf5af0b" # String | Id of the Notification Template

# Get notification template by id

try {
    Get-NotificationTemplateV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationTemplateV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notification-template-variables-v1
Returns global variables and template-specific variables for a given notification template key and medium.
Use these variable names in template content; they are replaced at send time with the corresponding values.
Variable lists can be sorted by key, type, or description via the sorters query parameter (default ascending by key).


[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-variables-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
Path   | Medium | **String** | True  | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description**

### Return type
[**TemplateVariablesDto**](../models/template-variables-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Global and template-specific variables for the given key and medium. | TemplateVariablesDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "approval_request_notification" # String | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
$Medium = "EMAIL" # String | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
$Sorters = "-description" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional)

# Get notification template variables

try {
    Get-NotificationTemplateVariablesV1 -Key $Key -Medium $Medium 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationTemplateVariablesV1 -Key $Key -Medium $Medium -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationTemplateVariablesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notifications-template-context-v1
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/get-notifications-template-context-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get notification template context

try {
    Get-NotificationsTemplateContextV1 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationsTemplateContextV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationsTemplateContextV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-from-addresses-v1
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/list-from-addresses-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**

### Return type
[**EmailStatusDto[]**](../models/email-status-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Email Status | EmailStatusDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'email eq "john.doe@company.com"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional)
$Sorters = "email" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

# List from addresses

try {
    Get-FromAddressesV1 
    
    # Below is a request that includes all optional parameters
    # Get-FromAddressesV1 -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-FromAddressesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-preferences-v1
Returns a list of notification preferences for the current tenant, including preferred mediums and optional CC/BCC email recipients for each notification key. Supports standard V3 filtering, sorting, and offset/limit pagination.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-preferences-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key**

### Return type
[**PreferencesDto[]**](../models/preferences-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of notification preferences for the tenant. | PreferencesDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'key eq "approval_completed_notification"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* (optional)
$Sorters = "key" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** (optional)

# List notification preferences for tenant

try {
    Get-NotificationPreferencesV1 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationPreferencesV1 -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationPreferencesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-template-defaults-v1
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-template-defaults-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'key eq "cloud_manual_work_item_summary"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

# List notification template defaults

try {
    Get-NotificationTemplateDefaultsV1 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationTemplateDefaultsV1 -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationTemplateDefaultsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-notification-templates-v1
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-templates-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium**

### Return type
[**TemplateDto[]**](../models/template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of template objects for your site | TemplateDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'medium eq "EMAIL"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
$Sorters = "key, -name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional)

# List notification templates

try {
    Get-NotificationTemplatesV1 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationTemplatesV1 -Limit $Limit -Offset $Offset -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationTemplatesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-mail-from-attributes-v1
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/put-mail-from-attributes-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
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

# Change mail from domain

try {
    $Result = ConvertFrom-JsonToMailFromAttributesDto -Json $MailFromAttributesDto
    Send-MailFromAttributesV1 -MailFromAttributesDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-MailFromAttributesV1 -MailFromAttributesDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-MailFromAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-test-notification-v1
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/send-test-notification-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SendTestNotificationRequestDto = @"{
  "carbonCopy" : [ "cc@example.com" ],
  "context" : {
    "numberOfPendingTasks" : "4",
    "taskTasks" : "tasks"
  },
  "blindCarbonCopy" : [ "bcc@example.com" ],
  "medium" : "EMAIL",
  "locale" : "en",
  "recipientEmailList" : [ "test@example.com" ],
  "key" : "cloud_manual_work_item_summary"
}"@

# Send test notification

try {
    $Result = ConvertFrom-JsonToSendTestNotificationRequestDto -Json $SendTestNotificationRequestDto
    Send-TestNotificationV1 -SendTestNotificationRequestDto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-TestNotificationV1 -SendTestNotificationRequestDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-TestNotificationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-notification-preferences-v1
Overwrites the notification preferences for a specific notification key. Controls which mediums are enabled and optional CC/BCC email recipients. The `key` property in the request body is optional; if provided, it must match the key in the path or a 400 is returned. Each of `ccList` and `bccList` supports a maximum of five entries, and the same recipient cannot appear in both lists. CC/BCC configuration requires EMAIL to be enabled in `mediums` and is only allowed for templates which support it (i.e., templates which contain sensitive data like reset tokens do not allow for carbon copy emails to be configured).

[API Spec](https://developer.sailpoint.com/docs/api/set-notification-preferences-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | The notification key.
 Body  | PreferencesDto | [**PreferencesDto**](../models/preferences-dto) | True  | 

### Return type
[**PreferencesDto**](../models/preferences-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Preferences updated successfully. An echo of the saved preferences is returned. | PreferencesDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Key = "approval_completed_notification" # String | The notification key.
$PreferencesDto = @"{
  "modified" : "2020-05-15T14:37:06.909Z",
  "ccList" : [ {
    "type" : "IDENTITY",
    "id" : "6b0b8e47cc1f4c3fa961a38fc718e989"
  }, {
    "type" : "STATIC_EMAIL",
    "email" : "cc-recipient@example.com"
  } ],
  "bccList" : [ {
    "type" : "MANAGER_OF"
  }, {
    "type" : "ORG_ADMINS"
  } ],
  "mediums" : [ "EMAIL" ],
  "key" : "cloud_manual_work_item_summary"
}"@

# Set notification preferences by key

try {
    $Result = ConvertFrom-JsonToPreferencesDto -Json $PreferencesDto
    Set-NotificationPreferencesV1 -Key $Key -PreferencesDto $Result 
    
    # Below is a request that includes all optional parameters
    # Set-NotificationPreferencesV1 -Key $Key -PreferencesDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-NotificationPreferencesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
