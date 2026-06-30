---
id: notifications
title: Notifications
pagination_label: Notifications
sidebar_label: Notifications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Notifications', 'Notifications'] 
slug: /tools/sdk/python/notifications/methods/notifications
tags: ['SDK', 'Software Development Kit', 'Notifications', 'Notifications']
---

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
[**get-notification-preferences-v1**](#get-notification-preferences-v1) | **GET** `/notification-preferences/v1/{key}` | List notification preferences for tenant.
[**get-notification-template-v1**](#get-notification-template-v1) | **GET** `/notification-templates/v1/{id}` | Get notification template by id
[**get-notification-template-variables-v1**](#get-notification-template-variables-v1) | **GET** `/notification-template-variables/v1/{key}/{medium}` | Get notification template variables
[**get-notifications-template-context-v1**](#get-notifications-template-context-v1) | **GET** `/notification-template-context/v1` | Get notification template context
[**list-from-addresses-v1**](#list-from-addresses-v1) | **GET** `/verified-from-addresses/v1` | List from addresses
[**list-notification-template-defaults-v1**](#list-notification-template-defaults-v1) | **GET** `/notification-template-defaults/v1` | List notification template defaults
[**list-notification-templates-v1**](#list-notification-templates-v1) | **GET** `/notification-templates/v1` | List notification templates
[**put-mail-from-attributes-v1**](#put-mail-from-attributes-v1) | **PUT** `/mail-from-attributes/v1` | Change mail from domain
[**send-test-notification-v1**](#send-test-notification-v1) | **POST** `/send-test-notification/v1` | Send test notification


## create-domain-dkim-v1
Verify domain address via dkim
Create a domain to be verified via DKIM (DomainKeys Identified Mail)

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-domain-dkim-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | domainaddress | [**Domainaddress**](../models/domainaddress) | True  | 

### Return type
[**Domainstatusdto**](../models/domainstatusdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of DKIM tokens required for the verification process. | Domainstatusdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
405 | Method Not Allowed - indicates that the server knows the request method, but the target resource doesn&#39;t support this method. | CreateDomainDkimV1405Response |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.domainaddress import Domainaddress
from sailpoint.notifications.models.domainstatusdto import Domainstatusdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    domainaddress = '''sailpoint.notifications.Domainaddress()''' # Domainaddress | 

    try:
        # Verify domain address via dkim
        new_domainaddress = Domainaddress.from_json(domainaddress)
        results = NotificationsApi(api_client).create_domain_dkim_v1(domainaddress=new_domainaddress)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_domain_dkim_v1(new_domainaddress)
        print("The response of NotificationsApi->create_domain_dkim_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_domain_dkim_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-notification-template-v1
Create notification template
This will update notification templates that are available in your tenant. 
Note that you cannot create new templates in your tenant, but you can use this to create custom notifications from existing templates.  First, copy the response body from the [get notification template endpoint](https://developer.sailpoint.com/idn/api/beta/get-notification-template) for a template you wish to update and paste it into the request body for this endpoint.  
Modify the fields you want to change and submit the POST request when ready.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-notification-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | templatedto | [**Templatedto**](../models/templatedto) | True  | 

### Return type
[**Templatedto**](../models/templatedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A template object for your site | Templatedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.templatedto import Templatedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    templatedto = '''sailpoint.notifications.Templatedto()''' # Templatedto | 

    try:
        # Create notification template
        new_templatedto = Templatedto.from_json(templatedto)
        results = NotificationsApi(api_client).create_notification_template_v1(templatedto=new_templatedto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_notification_template_v1(new_templatedto)
        print("The response of NotificationsApi->create_notification_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_notification_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-verified-from-address-v1
Create verified from address
Create a new sender email address and initiate verification process.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-verified-from-address-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | emailstatusdto | [**Emailstatusdto**](../models/emailstatusdto) | True  | 

### Return type
[**Emailstatusdto**](../models/emailstatusdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | New Verified Email Status | Emailstatusdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.emailstatusdto import Emailstatusdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    emailstatusdto = '''{"email":"sender@example.com"}''' # Emailstatusdto | 

    try:
        # Create verified from address
        new_emailstatusdto = Emailstatusdto.from_json(emailstatusdto)
        results = NotificationsApi(api_client).create_verified_from_address_v1(emailstatusdto=new_emailstatusdto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).create_verified_from_address_v1(new_emailstatusdto)
        print("The response of NotificationsApi->create_verified_from_address_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->create_verified_from_address_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-notification-templates-in-bulk-v1
Bulk delete notification templates
This lets you bulk delete templates that you previously created for your site.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-notification-templates-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | templatebulkdeletedto | [**[]Templatebulkdeletedto**](../models/templatebulkdeletedto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.templatebulkdeletedto import Templatebulkdeletedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    templatebulkdeletedto = '''[sailpoint.notifications.Templatebulkdeletedto()]''' # List[Templatebulkdeletedto] | 

    try:
        # Bulk delete notification templates
        new_templatebulkdeletedto = Templatebulkdeletedto.from_json(templatebulkdeletedto)
        NotificationsApi(api_client).delete_notification_templates_in_bulk_v1(templatebulkdeletedto=new_templatebulkdeletedto)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).delete_notification_templates_in_bulk_v1(new_templatebulkdeletedto)
    except Exception as e:
        print("Exception when calling NotificationsApi->delete_notification_templates_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-verified-from-address-v1
Delete verified from address
Delete a verified sender email address

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-verified-from-address-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-dkim-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Dkimattributes]**](../models/dkimattributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of DKIM Attributes | List[Dkimattributes] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.dkimattributes import Dkimattributes
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-mail-from-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity | **str** | True  | Returns the MX and TXT record to be put in your DNS, as well as the MAIL FROM domain status

### Return type
[**Mailfromattributes**](../models/mailfromattributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MAIL FROM Attributes object | Mailfromattributes |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.mailfromattributes import Mailfromattributes
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
List notification preferences for tenant.
Returns a list of notification preferences for tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-preferences-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | The key.

### Return type
[**Preferencesdto**](../models/preferencesdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Return preference for the given notification key. | Preferencesdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.preferencesdto import Preferencesdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    key = 'key_example' # str | The key. # str | The key.

    try:
        # List notification preferences for tenant.
        
        results = NotificationsApi(api_client).get_notification_preferences_v1(key=key)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).get_notification_preferences_v1(key)
        print("The response of NotificationsApi->get_notification_preferences_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->get_notification_preferences_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-notification-template-v1
Get notification template by id
This gets a template that you have modified for your site by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Id of the Notification Template

### Return type
[**Templatedto**](../models/templatedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A template object for your site | Templatedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.templatedto import Templatedto
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notification-template-variables-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | key | **str** | True  | The notification template key. Valid keys (and key/medium pairs) are available from the list notification templates operation. 
Path   | medium | **str** | True  | The notification template medium (e.g. EMAIL, SLACK, TEAMS). Valid key/medium pairs are available from the list notification templates operation. 
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, type, description**

### Return type
[**Templatevariablesdto**](../models/templatevariablesdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Global and template-specific variables for the given key and medium. | Templatevariablesdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.templatevariablesdto import Templatevariablesdto
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-notifications-template-context-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Notificationtemplatecontext**](../models/notificationtemplatecontext)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Notification template context attributes for a specific tenant. | Notificationtemplatecontext |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.notificationtemplatecontext import Notificationtemplatecontext
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-from-addresses-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **email**: *eq, ge, le, gt, lt*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **email**

### Return type
[**List[Emailstatusdto]**](../models/emailstatusdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Email Status | List[Emailstatusdto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.emailstatusdto import Emailstatusdto
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

## list-notification-template-defaults-v1
List notification template defaults
This lists the default templates used for notifications, such as emails from IdentityNow.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-notification-template-defaults-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*

### Return type
[**List[Templatedtodefault]**](../models/templatedtodefault)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of the default template objects | List[Templatedtodefault] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.templatedtodefault import Templatedtodefault
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-notification-templates-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, in, sw*  **medium**: *eq, sw*  **locale**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, medium**

### Return type
[**List[Templatedto]**](../models/templatedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of template objects for your site | List[Templatedto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.templatedto import Templatedto
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-mail-from-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | mailfromattributesdto | [**Mailfromattributesdto**](../models/mailfromattributesdto) | True  | 

### Return type
[**Mailfromattributes**](../models/mailfromattributes)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MAIL FROM Attributes required to verify the change | Mailfromattributes |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.mailfromattributes import Mailfromattributes
from sailpoint.notifications.models.mailfromattributesdto import Mailfromattributesdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    mailfromattributesdto = '''{"identity":"BobSmith@sailpoint.com","mailFromDomain":"example.sailpoint.com"}''' # Mailfromattributesdto | 

    try:
        # Change mail from domain
        new_mailfromattributesdto = Mailfromattributesdto.from_json(mailfromattributesdto)
        results = NotificationsApi(api_client).put_mail_from_attributes_v1(mailfromattributesdto=new_mailfromattributesdto)
        # Below is a request that includes all optional parameters
        # results = NotificationsApi(api_client).put_mail_from_attributes_v1(new_mailfromattributesdto)
        print("The response of NotificationsApi->put_mail_from_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling NotificationsApi->put_mail_from_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## send-test-notification-v1
Send test notification
Send a Test Notification

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-test-notification-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sendtestnotificationrequestdto | [**Sendtestnotificationrequestdto**](../models/sendtestnotificationrequestdto) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetNotificationTemplateVariablesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetNotificationTemplateVariablesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.notifications.api.notifications_api import NotificationsApi
from sailpoint.notifications.api_client import ApiClient
from sailpoint.notifications.models.sendtestnotificationrequestdto import Sendtestnotificationrequestdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sendtestnotificationrequestdto = '''{"key":"cloud_manual_work_item_summary","medium":"EMAIL","context":{"numberOfPendingTasks":"4","ownerId":"201327fda1c44704ac01181e963d463c"}}''' # Sendtestnotificationrequestdto | 

    try:
        # Send test notification
        new_sendtestnotificationrequestdto = Sendtestnotificationrequestdto.from_json(sendtestnotificationrequestdto)
        NotificationsApi(api_client).send_test_notification_v1(sendtestnotificationrequestdto=new_sendtestnotificationrequestdto)
        # Below is a request that includes all optional parameters
        # NotificationsApi(api_client).send_test_notification_v1(new_sendtestnotificationrequestdto)
    except Exception as e:
        print("Exception when calling NotificationsApi->send_test_notification_v1: %s\n" % e)
```



[[Back to top]](#) 



