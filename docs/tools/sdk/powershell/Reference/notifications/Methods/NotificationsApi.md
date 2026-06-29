---
id: notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Notifications', 'Notifications'] 
slug: /tools/sdk/powershell/notifications/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'Notifications']
---

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
[**Get-NotificationPreferencesV1**](#get-notification-preferences-v1) | **GET** `/notification-preferences/v1/{key}` | List notification preferences for tenant.
[**Get-NotificationTemplateV1**](#get-notification-template-v1) | **GET** `/notification-templates/v1/{id}` | Get notification template by id
[**Get-NotificationTemplateVariablesV1**](#get-notification-template-variables-v1) | **GET** `/notification-template-variables/v1/{key}/{medium}` | Get notification template variables
[**Get-NotificationsTemplateContextV1**](#get-notifications-template-context-v1) | **GET** `/notification-template-context/v1` | Get notification template context
[**Get-FromAddressesV1**](#list-from-addresses-v1) | **GET** `/verified-from-addresses/v1` | List from addresses
[**Get-NotificationTemplateDefaultsV1**](#list-notification-template-defaults-v1) | **GET** `/notification-template-defaults/v1` | List notification template defaults
[**Get-NotificationTemplatesV1**](#list-notification-templates-v1) | **GET** `/notification-templates/v1` | List notification templates
[**Send-MailFromAttributesV1**](#put-mail-from-attributes-v1) | **PUT** `/mail-from-attributes/v1` | Change mail from domain
[**Send-TestNotificationV1**](#send-test-notification-v1) | **POST** `/send-test-notification/v1` | Send test notification


## create-domain-dkim-v1
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-domain-dkim-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Domainaddress | [**Domainaddress**](../models/domainaddress) | True  | 

### Return type
[**Domainstatusdto**](../models/domainstatusdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM tokens required for the verification process. | Domainstatusdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkimV1405Response
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Domainaddress = @""@

# Verify domain address via dkim

try {
    $Result = ConvertFrom-JsonToDomainaddress -Json $Domainaddress
    New-DomainDkimV1 -Domainaddress $Result 
    
    # Below is a request that includes all optional parameters
    # New-DomainDkimV1 -Domainaddress $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-DomainDkimV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-notification-template-v1
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-notification-template-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Templatedto | [**Templatedto**](../models/templatedto) | True  | 

### Return type
[**Templatedto**](../models/templatedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | Templatedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Templatedto = @""@

# Create notification template

try {
    $Result = ConvertFrom-JsonToTemplatedto -Json $Templatedto
    New-NotificationTemplateV1 -Templatedto $Result 
    
    # Below is a request that includes all optional parameters
    # New-NotificationTemplateV1 -Templatedto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-NotificationTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-verified-from-address-v1
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-verified-from-address-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Emailstatusdto | [**Emailstatusdto**](../models/emailstatusdto) | True  | 

### Return type
[**Emailstatusdto**](../models/emailstatusdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | New Verified Email Status | Emailstatusdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Emailstatusdto = @"{"email":"sender@example.com"}"@

# Create verified from address

try {
    $Result = ConvertFrom-JsonToEmailstatusdto -Json $Emailstatusdto
    New-VerifiedFromAddressV1 -Emailstatusdto $Result 
    
    # Below is a request that includes all optional parameters
    # New-VerifiedFromAddressV1 -Emailstatusdto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-VerifiedFromAddressV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-notification-templates-in-bulk-v1
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-notification-templates-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Templatebulkdeletedto | [**[]Templatebulkdeletedto**](../models/templatebulkdeletedto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 $Templatebulkdeletedto = @""@ # Templatebulkdeletedto[] | 
 

# Bulk delete notification templates

try {
    $Result = ConvertFrom-JsonToTemplatebulkdeletedto -Json $Templatebulkdeletedto
    Remove-NotificationTemplatesInBulkV1 -Templatebulkdeletedto $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-NotificationTemplatesInBulkV1 -Templatebulkdeletedto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-NotificationTemplatesInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-verified-from-address-v1
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-verified-from-address-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-dkim-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Dkimattributes[]**](../models/dkimattributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of DKIM Attributes | Dkimattributes[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-mail-from-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Identity | **String** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

### Return type
[**Mailfromattributes**](../models/mailfromattributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes object | Mailfromattributes
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-preferences-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | The key.

### Return type
[**Preferencesdto**](../models/preferencesdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Return preference for the given notification key. | Preferencesdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Key = "MyKey" # String | The key.

# List notification preferences for tenant.

try {
    Get-NotificationPreferencesV1 -Key $Key 
    
    # Below is a request that includes all optional parameters
    # Get-NotificationPreferencesV1 -Key $Key  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-NotificationPreferencesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-notification-template-v1
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-template-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Id of the Notification Template

### Return type
[**Templatedto**](../models/templatedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A template object for your site | Templatedto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-template-variables-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Key | **String** | True  | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
Path   | Medium | **String** | True  | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description**

### Return type
[**Templatevariablesdto**](../models/templatevariablesdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Global and template-specific variables for the given key and medium. | Templatevariablesdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notifications-template-context-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Notificationtemplatecontext**](../models/notificationtemplatecontext)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Notification template context attributes for a specific tenant. | Notificationtemplatecontext
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-from-addresses-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**

### Return type
[**Emailstatusdto[]**](../models/emailstatusdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Email Status | Emailstatusdto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

## list-notification-template-defaults-v1
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-notification-template-defaults-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*

### Return type
[**Templatedtodefault[]**](../models/templatedtodefault)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of the default template objects | Templatedtodefault[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-notification-templates-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium**

### Return type
[**Templatedto[]**](../models/templatedto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of template objects for your site | Templatedto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-mail-from-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Mailfromattributesdto | [**Mailfromattributesdto**](../models/mailfromattributesdto) | True  | 

### Return type
[**Mailfromattributes**](../models/mailfromattributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MAIL FROM Attributes required to verify the change | Mailfromattributes
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Mailfromattributesdto = @"{"identity":"BobSmith@sailpoint.com","mailFromDomain":"example.sailpoint.com"}"@

# Change mail from domain

try {
    $Result = ConvertFrom-JsonToMailfromattributesdto -Json $Mailfromattributesdto
    Send-MailFromAttributesV1 -Mailfromattributesdto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-MailFromAttributesV1 -Mailfromattributesdto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-MailFromAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-test-notification-v1
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-test-notification-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Sendtestnotificationrequestdto | [**Sendtestnotificationrequestdto**](../models/sendtestnotificationrequestdto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Sendtestnotificationrequestdto = @"{"key":"cloud_manual_work_item_summary","medium":"EMAIL","context":{"numberOfPendingTasks":"4","ownerId":"201327fda1c44704ac01181e963d463c"}}"@

# Send test notification

try {
    $Result = ConvertFrom-JsonToSendtestnotificationrequestdto -Json $Sendtestnotificationrequestdto
    Send-TestNotificationV1 -Sendtestnotificationrequestdto $Result 
    
    # Below is a request that includes all optional parameters
    # Send-TestNotificationV1 -Sendtestnotificationrequestdto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-TestNotificationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
