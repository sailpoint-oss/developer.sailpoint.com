# Notifications

# sailpoint.notifications.NotificationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-domain-dkim-v1**](#create-domain-dkim-v1) | **POST** `/verified-domains/v1` | Verify domain address via dkim
[**create-notification-template-v1**](#create-notification-template-v1) | **POST** `/notification-templates/v1` | Create notification template
[**create-verified-from-address-v1**](#create-verified-from-address-v1) | **POST** `/verified-from-addresses/v1` | Create verified from address
[**delete-notification-templates-in-bulk-v1**](#delete-notification-templates-in-bulk-v1) | **POST** `/notification-templates/v1/bulk-delete` | Bulk delete notification templates
[**delete-verified-from-address-v1**](#delete-verified-from-address-v1) | **DELETE** `/verified-from-addresses/v1/{id}` | Delete verified from address
[**get-dkim-attributes-v1**](#get-dkim-attributes-v1) | **GET** `/verified-domains/v1` | Get dkim attributes
[**get-mail-from-attributes-v1**](#get-mail-from-attributes-v1) | **GET** `/mail-from-attributes/v1/{identity}` | Get mail from attributes
[**get-notification-preferences-v1**](#get-notification-preferences-v1) | **GET** `/notification-preferences/v1/{key}` | Get notification preferences by key
[**get-notification-template-v1**](#get-notification-template-v1) | **GET** `/notification-templates/v1/{id}` | Get notification template by id
[**get-notification-template-variables-v1**](#get-notification-template-variables-v1) | **GET** `/notification-template-variables/v1/{key}/{medium}` | Get notification template variables
[**get-notifications-template-context-v1**](#get-notifications-template-context-v1) | **GET** `/notification-template-context/v1` | Get notification template context
[**list-from-addresses-v1**](#list-from-addresses-v1) | **GET** `/verified-from-addresses/v1` | List from addresses
[**list-notification-preferences-v1**](#list-notification-preferences-v1) | **GET** `/notification-preferences/v1` | List notification preferences for tenant
[**list-notification-template-defaults-v1**](#list-notification-template-defaults-v1) | **GET** `/notification-template-defaults/v1` | List notification template defaults
[**list-notification-templates-v1**](#list-notification-templates-v1) | **GET** `/notification-templates/v1` | List notification templates
[**put-mail-from-attributes-v1**](#put-mail-from-attributes-v1) | **PUT** `/mail-from-attributes/v1` | Change mail from domain
[**send-test-notification-v1**](#send-test-notification-v1) | **POST** `/send-test-notification/v1` | Send test notification
[**set-notification-preferences-v1**](#set-notification-preferences-v1) | **PUT** `/notification-preferences/v1/{key}` | Set notification preferences by key


## create-domain-dkim-v1
Verify domain address via dkim
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/create-domain-dkim-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | domain_address | [**DomainAddress**](../models/domain-address) | True  | 

### Return type
[**DomainStatusDto**](../models/domain-status-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of DKIM tokens required for the verification process. | DomainStatusDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkimV1405Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.domain_address import DomainAddress
from sailpoint.notifications.models.domain_status_dto import DomainStatusDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    domain_address = '''{
          "domain" : "sailpoint.com"
        }''' # DomainAddress | 

    try:
        # Verify domain address via dkim
        new_domain_address = DomainAddress.from_json(domain_address)
        results = NotificationsApi(api_client).create_domain_dkim_v1(domain_address=new_domain_address)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_domain_dkim_v1(new_domain_address)
        print("The response of NotificationsApi->create_domain_dkim_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_domain_dkim_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-notification-template-v1
Create notification template
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/docs/api/get-notification-template-v-1) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/create-notification-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | template_dto | [**TemplateDto**](../models/template-dto) | True  | 

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A template object for your site | TemplateDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.template_dto import TemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    template_dto = '''{
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
        }''' # TemplateDto | 

    try:
        # Create notification template
        new_template_dto = TemplateDto.from_json(template_dto)
        results = NotificationsApi(api_client).create_notification_template_v1(template_dto=new_template_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_notification_template_v1(new_template_dto)
        print("The response of NotificationsApi->create_notification_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_notification_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-verified-from-address-v1
Create verified from address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/create-verified-from-address-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | email_status_dto | [**EmailStatusDto**](../models/email-status-dto) | True  | 

### Return type
[**EmailStatusDto**](../models/email-status-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | New Verified Email Status | EmailStatusDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.email_status_dto import EmailStatusDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    email_status_dto = '''{
          "isVerifiedByDomain" : false,
          "verificationStatus" : "SUCCESS",
          "id" : "id",
          "region" : "us-east-1",
          "email" : "sender@example.com"
        }''' # EmailStatusDto | 

    try:
        # Create verified from address
        new_email_status_dto = EmailStatusDto.from_json(email_status_dto)
        results = NotificationsApi(api_client).create_verified_from_address_v1(email_status_dto=new_email_status_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_verified_from_address_v1(new_email_status_dto)
        print("The response of NotificationsApi->create_verified_from_address_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_verified_from_address_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-notification-templates-in-bulk-v1
Bulk delete notification templates
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/delete-notification-templates-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | template_bulk_delete_dto | [**[]TemplateBulkDeleteDto**](../models/template-bulk-delete-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.template_bulk_delete_dto import TemplateBulkDeleteDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    template_bulk_delete_dto = '''[sailpoint.notifications.TemplateBulkDeleteDto()]''' # List[TemplateBulkDeleteDto] | 

    try:
        # Bulk delete notification templates
        new_template_bulk_delete_dto = TemplateBulkDeleteDto.from_json(template_bulk_delete_dto)
        NotificationsApi(api_client).delete_notification_templates_in_bulk_v1(template_bulk_delete_dto=new_template_bulk_delete_dto)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).delete_notification_templates_in_bulk_v1(new_template_bulk_delete_dto)
    except Exception as e:
        print("Exception when calling NotificationsApi->delete_notification_templates_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-verified-from-address-v1
Delete verified from address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/delete-verified-from-address-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Unique identifier of the verified sender address to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Unique identifier of the verified sender address to delete. # str | Unique identifier of the verified sender address to delete.

    try:
        # Delete verified from address
        
        NotificationsApi(api_client).delete_verified_from_address_v1(id=id)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).delete_verified_from_address_v1(id)
    except Exception as e:
        print("Exception when calling NotificationsApi->delete_verified_from_address_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-dkim-attributes-v1
Get dkim attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/get-dkim-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[DkimAttributes]**](../models/dkim-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of DKIM Attributes | List[DkimAttributes] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.dkim_attributes import DkimAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Get dkim attributes
        
        results = NotificationsApi(api_client).get_dkim_attributes_v1()
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_dkim_attributes_v1(limit, offset)
        print("The response of NotificationsApi->get_dkim_attributes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_dkim_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-mail-from-attributes-v1
Get mail from attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-mail-from-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity | **str** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MAIL FROM Attributes object | MailFromAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.mail_from_attributes import MailFromAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity = 'bobsmith@sailpoint.com' # str | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status # str | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

    try:
        # Get mail from attributes
        
        results = NotificationsApi(api_client).get_mail_from_attributes_v1(identity=identity)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_mail_from_attributes_v1(identity)
        print("The response of NotificationsApi->get_mail_from_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_mail_from_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-notification-preferences-v1
Get notification preferences by key
Returns the notification preferences for a specific notification key, including preferred mediums and optional CC/BCC email recipients. If no custom preferences exist, returns the default settings from the interest definition. If the key does not exist, a 404 is returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-preferences-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | The notification key.
  Query | filter_unavailable_mediums | **bool** |   (optional) (default to False) | When `true`, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant.

### Return type
[**PreferencesDto**](../models/preferences-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Notification preferences for the given key. | PreferencesDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.preferences_dto import PreferencesDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'approval_completed_notification' # str | The notification key. # str | The notification key.
    filter_unavailable_mediums = False # bool | When `true`, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. (optional) (default to False) # bool | When `true`, excludes SLACK and TEAMS from the returned mediums if they are not configured for the tenant. (optional) (default to False)

    try:
        # Get notification preferences by key
        
        results = NotificationsApi(api_client).get_notification_preferences_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notification_preferences_v1(key, filter_unavailable_mediums)
        print("The response of NotificationsApi->get_notification_preferences_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_preferences_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-notification-template-v1
Get notification template by id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Notification Template

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A template object for your site | TemplateDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.template_dto import TemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Notification Template # str | Id of the Notification Template

    try:
        # Get notification template by id
        
        results = NotificationsApi(api_client).get_notification_template_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notification_template_v1(id)
        print("The response of NotificationsApi->get_notification_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-notification-template-variables-v1
Get notification template variables
Returns global variables and template-specific variables for a given notification template key and medium.
Use these variable names in template content; they are replaced at send time with the corresponding values.
Variable lists can be sorted by key, type, or description via the sorters query parameter (default ascending by key).


[API Spec](https://developer.sailpoint.com/docs/api/get-notification-template-variables-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
Path   | medium | **str** | True  | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description**

### Return type
[**TemplateVariablesDto**](../models/template-variables-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Global and template-specific variables for the given key and medium. | TemplateVariablesDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.template_variables_dto import TemplateVariablesDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'approval_request_notification' # str | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation.  # str | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
    medium = 'EMAIL' # str | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation.  # str | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
    sorters = '-description' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description** (optional)

    try:
        # Get notification template variables
        
        results = NotificationsApi(api_client).get_notification_template_variables_v1(key=key, medium=medium)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notification_template_variables_v1(key, medium, sorters)
        print("The response of NotificationsApi->get_notification_template_variables_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_template_variables_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-notifications-template-context-v1
Get notification template context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/get-notifications-template-context-v-1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**NotificationTemplateContext**](../models/notification-template-context)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Notification template context attributes for a specific tenant. | NotificationTemplateContext |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.notification_template_context import NotificationTemplateContext
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get notification template context
        
        results = NotificationsApi(api_client).get_notifications_template_context_v1()
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notifications_template_context_v1()
        print("The response of NotificationsApi->get_notifications_template_context_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notifications_template_context_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-from-addresses-v1
List from addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/list-from-addresses-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**

### Return type
[**List[EmailStatusDto]**](../models/email-status-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Email Status | List[EmailStatusDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.email_status_dto import EmailStatusDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'email eq \"john.doe@company.com\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt* (optional)
    sorters = 'email' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

    try:
        # List from addresses
        
        results = NotificationsApi(api_client).list_from_addresses_v1()
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_from_addresses_v1(limit, offset, count, filters, sorters)
        print("The response of NotificationsApi->list_from_addresses_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_from_addresses_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-notification-preferences-v1
List notification preferences for tenant
Returns a list of notification preferences for the current tenant, including preferred mediums and optional CC/BCC email recipients for each notification key. Supports standard V3 filtering, sorting, and offset/limit pagination.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-preferences-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key**

### Return type
[**List[PreferencesDto]**](../models/preferences-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of notification preferences for the tenant. | List[PreferencesDto] |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.preferences_dto import PreferencesDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'key eq \"approval_completed_notification\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in* (optional)
    sorters = 'key' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key** (optional)

    try:
        # List notification preferences for tenant
        
        results = NotificationsApi(api_client).list_notification_preferences_v1()
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_notification_preferences_v1(limit, offset, count, filters, sorters)
        print("The response of NotificationsApi->list_notification_preferences_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notification_preferences_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-notification-template-defaults-v1
List notification template defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-template-defaults-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*

### Return type
[**List[TemplateDtoDefault]**](../models/template-dto-default)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of the default template objects | List[TemplateDtoDefault] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.template_dto_default import TemplateDtoDefault
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'key eq \"cloud_manual_work_item_summary\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

    try:
        # List notification template defaults
        
        results = NotificationsApi(api_client).list_notification_template_defaults_v1()
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_notification_template_defaults_v1(limit, offset, filters)
        print("The response of NotificationsApi->list_notification_template_defaults_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notification_template_defaults_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-notification-templates-v1
List notification templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/list-notification-templates-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium**

### Return type
[**List[TemplateDto]**](../models/template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of template objects for your site | List[TemplateDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.template_dto import TemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'medium eq \"EMAIL\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)
    sorters = 'key, -name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium** (optional)

    try:
        # List notification templates
        
        results = NotificationsApi(api_client).list_notification_templates_v1()
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_notification_templates_v1(limit, offset, filters, sorters)
        print("The response of NotificationsApi->list_notification_templates_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notification_templates_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-mail-from-attributes-v1
Change mail from domain
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/put-mail-from-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | mail_from_attributes_dto | [**MailFromAttributesDto**](../models/mail-from-attributes-dto) | True  | 

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MAIL FROM Attributes required to verify the change | MailFromAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.mail_from_attributes import MailFromAttributes
from sailpoint.notifications.models.mail_from_attributes_dto import MailFromAttributesDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    mail_from_attributes_dto = '''{
          "identity" : "BobSmith@sailpoint.com",
          "mailFromDomain" : "example.sailpoint.com"
        }''' # MailFromAttributesDto | 

    try:
        # Change mail from domain
        new_mail_from_attributes_dto = MailFromAttributesDto.from_json(mail_from_attributes_dto)
        results = NotificationsApi(api_client).put_mail_from_attributes_v1(mail_from_attributes_dto=new_mail_from_attributes_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).put_mail_from_attributes_v1(new_mail_from_attributes_dto)
        print("The response of NotificationsApi->put_mail_from_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->put_mail_from_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## send-test-notification-v1
Send test notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/send-test-notification-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | send_test_notification_request_dto | [**SendTestNotificationRequestDto**](../models/send-test-notification-request-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.send_test_notification_request_dto import SendTestNotificationRequestDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    send_test_notification_request_dto = '''{
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
        }''' # SendTestNotificationRequestDto | 

    try:
        # Send test notification
        new_send_test_notification_request_dto = SendTestNotificationRequestDto.from_json(send_test_notification_request_dto)
        NotificationsApi(api_client).send_test_notification_v1(send_test_notification_request_dto=new_send_test_notification_request_dto)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).send_test_notification_v1(new_send_test_notification_request_dto)
    except Exception as e:
        print("Exception when calling NotificationsApi->send_test_notification_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-notification-preferences-v1
Set notification preferences by key
Overwrites the notification preferences for a specific notification key. Controls which mediums are enabled and optional CC/BCC email recipients. The `key` property in the request body is optional; if provided, it must match the key in the path or a 400 is returned. Each of `ccList` and `bccList` supports a maximum of five entries, and the same recipient cannot appear in both lists. CC/BCC configuration requires EMAIL to be enabled in `mediums` and is only allowed for templates which support it (i.e., templates which contain sensitive data like reset tokens do not allow for carbon copy emails to be configured).

[API Spec](https://developer.sailpoint.com/docs/api/set-notification-preferences-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | The notification key.
 Body  | preferences_dto | [**PreferencesDto**](../models/preferences-dto) | True  | 

### Return type
[**PreferencesDto**](../models/preferences-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Preferences updated successfully. An echo of the saved preferences is returned. | PreferencesDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.preferences_dto import PreferencesDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'approval_completed_notification' # str | The notification key. # str | The notification key.
    preferences_dto = '''{
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
        }''' # PreferencesDto | 

    try:
        # Set notification preferences by key
        new_preferences_dto = PreferencesDto.from_json(preferences_dto)
        results = NotificationsApi(api_client).set_notification_preferences_v1(key=key, preferences_dto=new_preferences_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).set_notification_preferences_v1(key, new_preferences_dto)
        print("The response of NotificationsApi->set_notification_preferences_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->set_notification_preferences_v1: %s\n" % e)
```



[[Back to top]](#) 



