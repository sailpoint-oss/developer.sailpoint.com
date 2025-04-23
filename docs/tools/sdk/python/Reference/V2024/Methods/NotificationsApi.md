---
id: v2024-notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Notifications', 'V2024Notifications'] 
slug: /tools/sdk/python/v2024/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'V2024Notifications']
---

# sailpoint.v2024.NotificationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-domain-dkim**](#create-domain-dkim) | **POST** `/verified-domains` | Verify domain address via DKIM
[**create-notification-template**](#create-notification-template) | **POST** `/notification-templates` | Create Notification Template
[**create-verified-from-address**](#create-verified-from-address) | **POST** `/verified-from-addresses` | Create Verified From Address
[**delete-notification-templates-in-bulk**](#delete-notification-templates-in-bulk) | **POST** `/notification-templates/bulk-delete` | Bulk Delete Notification Templates
[**delete-verified-from-address**](#delete-verified-from-address) | **DELETE** `/verified-from-addresses/{id}` | Delete Verified From Address
[**get-dkim-attributes**](#get-dkim-attributes) | **GET** `/verified-domains` | Get DKIM Attributes
[**get-mail-from-attributes**](#get-mail-from-attributes) | **GET** `/mail-from-attributes/{identity}` | Get MAIL FROM Attributes
[**get-notification-template**](#get-notification-template) | **GET** `/notification-templates/{id}` | Get Notification Template By Id
[**get-notifications-template-context**](#get-notifications-template-context) | **GET** `/notification-template-context` | Get Notification Template Context
[**list-from-addresses**](#list-from-addresses) | **GET** `/verified-from-addresses` | List From Addresses
[**list-notification-preferences**](#list-notification-preferences) | **GET** `/notification-preferences/{key}` | List Notification Preferences for tenant.
[**list-notification-template-defaults**](#list-notification-template-defaults) | **GET** `/notification-template-defaults` | List Notification Template Defaults
[**list-notification-templates**](#list-notification-templates) | **GET** `/notification-templates` | List Notification Templates
[**put-mail-from-attributes**](#put-mail-from-attributes) | **PUT** `/mail-from-attributes` | Change MAIL FROM domain
[**send-test-notification**](#send-test-notification) | **POST** `/send-test-notification` | Send Test Notification


## create-domain-dkim
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
Verify domain address via DKIM
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-domain-dkim)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | domain_address | [**DomainAddress**](../models/domain-address) | True  | 

### Return type
[**DomainStatusDto**](../models/domain-status-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of DKIM tokens required for the verification process. | DomainStatusDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkim405Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.domain_address import DomainAddress
from sailpoint.v2024.models.domain_status_dto import DomainStatusDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    domain_address = '''{
          "domain" : "sailpoint.com"
        }''' # DomainAddress | 

    try:
        # Verify domain address via DKIM
        new_domain_address = DomainAddress.from_json(domain_address)
        results = NotificationsApi(api_client).create_domain_dkim(x_sail_point_experimental=x_sail_point_experimental, domain_address=new_domain_address)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_domain_dkim(x_sail_point_experimental, new_domain_address)
        print("The response of NotificationsApi->create_domain_dkim:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_domain_dkim: %s\n" % e)
```



[[Back to top]](#) 

## create-notification-template
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
Create Notification Template
This creates a template for your site. 

You can also use this endpoint to update a template.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.   Modify the fields you want to change and submit the POST request when ready.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-notification-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | template_dto | [**TemplateDto**](../models/template-dto) | True  | 

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A template object for your site | TemplateDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.template_dto import TemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    template_dto = '''{
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
        }''' # TemplateDto | 

    try:
        # Create Notification Template
        new_template_dto = TemplateDto.from_json(template_dto)
        results = NotificationsApi(api_client).create_notification_template(x_sail_point_experimental=x_sail_point_experimental, template_dto=new_template_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_notification_template(x_sail_point_experimental, new_template_dto)
        print("The response of NotificationsApi->create_notification_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_notification_template: %s\n" % e)
```



[[Back to top]](#) 

## create-verified-from-address
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
Create Verified From Address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-verified-from-address)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | email_status_dto | [**EmailStatusDto**](../models/email-status-dto) | True  | 

### Return type
[**EmailStatusDto**](../models/email-status-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | New Verified Email Status | EmailStatusDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.email_status_dto import EmailStatusDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    email_status_dto = '''{
          "isVerifiedByDomain" : false,
          "verificationStatus" : "PENDING",
          "id" : "id",
          "email" : "sender@example.com"
        }''' # EmailStatusDto | 

    try:
        # Create Verified From Address
        new_email_status_dto = EmailStatusDto.from_json(email_status_dto)
        results = NotificationsApi(api_client).create_verified_from_address(x_sail_point_experimental=x_sail_point_experimental, email_status_dto=new_email_status_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_verified_from_address(x_sail_point_experimental, new_email_status_dto)
        print("The response of NotificationsApi->create_verified_from_address:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_verified_from_address: %s\n" % e)
```



[[Back to top]](#) 

## delete-notification-templates-in-bulk
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
Bulk Delete Notification Templates
This lets you bulk delete templates that you previously created for your site. Since this is a beta feature, please contact support to enable usage.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-notification-templates-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | template_bulk_delete_dto | [**[]TemplateBulkDeleteDto**](../models/template-bulk-delete-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.template_bulk_delete_dto import TemplateBulkDeleteDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    template_bulk_delete_dto = '''[sailpoint.v2024.TemplateBulkDeleteDto()]''' # List[TemplateBulkDeleteDto] | 

    try:
        # Bulk Delete Notification Templates
        new_template_bulk_delete_dto = TemplateBulkDeleteDto.from_json(template_bulk_delete_dto)
        NotificationsApi(api_client).delete_notification_templates_in_bulk(x_sail_point_experimental=x_sail_point_experimental, template_bulk_delete_dto=new_template_bulk_delete_dto)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).delete_notification_templates_in_bulk(x_sail_point_experimental, new_template_bulk_delete_dto)
    except Exception as e:
        print("Exception when calling NotificationsApi->delete_notification_templates_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## delete-verified-from-address
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
Delete Verified From Address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-verified-from-address)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'id_example' # str |  # str | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete Verified From Address
        
        NotificationsApi(api_client).delete_verified_from_address(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).delete_verified_from_address(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling NotificationsApi->delete_verified_from_address: %s\n" % e)
```



[[Back to top]](#) 

## get-dkim-attributes
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
Get DKIM Attributes
Retrieve DKIM (DomainKeys Identified Mail) attributes for all your tenants' AWS SES identities. Limits retrieval to 100 identities per call.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-dkim-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[DkimAttributes]**](../models/dkim-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of DKIM Attributes | List[DkimAttributes] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.dkim_attributes import DkimAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get DKIM Attributes
        
        results = NotificationsApi(api_client).get_dkim_attributes(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_dkim_attributes(x_sail_point_experimental)
        print("The response of NotificationsApi->get_dkim_attributes:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_dkim_attributes: %s\n" % e)
```



[[Back to top]](#) 

## get-mail-from-attributes
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
Get MAIL FROM Attributes
Retrieve MAIL FROM attributes for a given AWS SES identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-mail-from-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | id | **str** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MAIL FROM Attributes object | MailFromAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.mail_from_attributes import MailFromAttributes
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'bobsmith@sailpoint.com' # str | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status # str | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get MAIL FROM Attributes
        
        results = NotificationsApi(api_client).get_mail_from_attributes(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_mail_from_attributes(id, x_sail_point_experimental)
        print("The response of NotificationsApi->get_mail_from_attributes:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_mail_from_attributes: %s\n" % e)
```



[[Back to top]](#) 

## get-notification-template
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
Get Notification Template By Id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-notification-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Notification Template
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TemplateDto**](../models/template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A template object for your site | TemplateDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.template_dto import TemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'c17bea3a-574d-453c-9e04-4365fbf5af0b' # str | Id of the Notification Template # str | Id of the Notification Template
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Notification Template By Id
        
        results = NotificationsApi(api_client).get_notification_template(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notification_template(id, x_sail_point_experimental)
        print("The response of NotificationsApi->get_notification_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_template: %s\n" % e)
```



[[Back to top]](#) 

## get-notifications-template-context
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
Get Notification Template Context
The notification service maintains metadata to construct the notification templates or supply any information during the event propagation. The data-store where this information is retrieved is called "Global Context" (a.k.a. notification template context). It defines a set of attributes
 that will be available per tenant (organization).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-notifications-template-context)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**NotificationTemplateContext**](../models/notification-template-context)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Notification template context attributes for a specific tenant. | NotificationTemplateContext |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.notification_template_context import NotificationTemplateContext
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Notification Template Context
        
        results = NotificationsApi(api_client).get_notifications_template_context(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notifications_template_context(x_sail_point_experimental)
        print("The response of NotificationsApi->get_notifications_template_context:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notifications_template_context: %s\n" % e)
```



[[Back to top]](#) 

## list-from-addresses
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
List From Addresses
Retrieve a list of sender email addresses and their verification statuses

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-from-addresses)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**

### Return type
[**List[EmailStatusDto]**](../models/email-status-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Email Status | List[EmailStatusDto] |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.email_status_dto import EmailStatusDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'email eq \"john.doe@company.com\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, sw* (optional)
    sorters = 'email' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email** (optional)

    try:
        # List From Addresses
        
        results = NotificationsApi(api_client).list_from_addresses(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_from_addresses(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of NotificationsApi->list_from_addresses:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_from_addresses: %s\n" % e)
```



[[Back to top]](#) 

## list-notification-preferences
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
List Notification Preferences for tenant.
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-notification-preferences)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**PreferencesDto**](../models/preferences-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Return preference for the given notification key. | PreferencesDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.preferences_dto import PreferencesDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # List Notification Preferences for tenant.
        
        results = NotificationsApi(api_client).list_notification_preferences(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_notification_preferences(x_sail_point_experimental)
        print("The response of NotificationsApi->list_notification_preferences:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notification_preferences: %s\n" % e)
```



[[Back to top]](#) 

## list-notification-template-defaults
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
List Notification Template Defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-notification-template-defaults)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.template_dto_default import TemplateDtoDefault
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'key eq \"cloud_manual_work_item_summary\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

    try:
        # List Notification Template Defaults
        
        results = NotificationsApi(api_client).list_notification_template_defaults(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_notification_template_defaults(x_sail_point_experimental, limit, offset, filters)
        print("The response of NotificationsApi->list_notification_template_defaults:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notification_template_defaults: %s\n" % e)
```



[[Back to top]](#) 

## list-notification-templates
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
List Notification Templates
This lists the templates that you have modified for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-notification-templates)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*

### Return type
[**List[TemplateDto]**](../models/template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of template objects for your site | List[TemplateDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.template_dto import TemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    filters = 'medium eq \"EMAIL\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw* (optional)

    try:
        # List Notification Templates
        
        results = NotificationsApi(api_client).list_notification_templates(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).list_notification_templates(x_sail_point_experimental, limit, offset, filters)
        print("The response of NotificationsApi->list_notification_templates:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->list_notification_templates: %s\n" % e)
```



[[Back to top]](#) 

## put-mail-from-attributes
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
Change MAIL FROM domain
Change the MAIL FROM domain of an AWS SES email identity and provide the MX and TXT records to be placed in the caller's DNS

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-mail-from-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | mail_from_attributes_dto | [**MailFromAttributesDto**](../models/mail-from-attributes-dto) | True  | 

### Return type
[**MailFromAttributes**](../models/mail-from-attributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MAIL FROM Attributes required to verify the change | MailFromAttributes |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.mail_from_attributes import MailFromAttributes
from sailpoint.v2024.models.mail_from_attributes_dto import MailFromAttributesDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    mail_from_attributes_dto = '''{
          "identity" : "BobSmith@sailpoint.com",
          "mailFromDomain" : "example.sailpoint.com"
        }''' # MailFromAttributesDto | 

    try:
        # Change MAIL FROM domain
        new_mail_from_attributes_dto = MailFromAttributesDto.from_json(mail_from_attributes_dto)
        results = NotificationsApi(api_client).put_mail_from_attributes(x_sail_point_experimental=x_sail_point_experimental, mail_from_attributes_dto=new_mail_from_attributes_dto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).put_mail_from_attributes(x_sail_point_experimental, new_mail_from_attributes_dto)
        print("The response of NotificationsApi->put_mail_from_attributes:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->put_mail_from_attributes: %s\n" % e)
```



[[Back to top]](#) 

## send-test-notification
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
Send Test Notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/v2024/send-test-notification)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | send_test_notification_request_dto | [**SendTestNotificationRequestDto**](../models/send-test-notification-request-dto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.notifications_api import NotificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.send_test_notification_request_dto import SendTestNotificationRequestDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    send_test_notification_request_dto = '''{
          "context" : "{}",
          "medium" : "EMAIL",
          "key" : "cloud_manual_work_item_summary"
        }''' # SendTestNotificationRequestDto | 

    try:
        # Send Test Notification
        new_send_test_notification_request_dto = SendTestNotificationRequestDto.from_json(send_test_notification_request_dto)
        NotificationsApi(api_client).send_test_notification(x_sail_point_experimental=x_sail_point_experimental, send_test_notification_request_dto=new_send_test_notification_request_dto)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).send_test_notification(x_sail_point_experimental, new_send_test_notification_request_dto)
    except Exception as e:
        print("Exception when calling NotificationsApi->send_test_notification: %s\n" % e)
```



[[Back to top]](#) 



