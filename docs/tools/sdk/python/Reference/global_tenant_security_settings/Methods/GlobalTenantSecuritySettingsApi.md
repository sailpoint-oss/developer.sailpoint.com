---
id: global-tenant-security-settings
title: Global_Tenant_Security_Settings
pagination_label: Global_Tenant_Security_Settings
sidebar_label: Global_Tenant_Security_Settings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Global_Tenant_Security_Settings', 'Global_Tenant_Security_Settings'] 
slug: /tools/sdk/python/global-tenant-security-settings/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'Global_Tenant_Security_Settings', 'Global_Tenant_Security_Settings']
---

# sailpoint.global_tenant_security_settings.GlobalTenantSecuritySettingsApi
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config-v1**](#create-auth-org-network-config-v1) | **POST** `/auth-org/v1/network-config` | Create security network configuration.
[**get-auth-org-lockout-config-v1**](#get-auth-org-lockout-config-v1) | **GET** `/auth-org/v1/lockout-config` | Get auth org lockout configuration.
[**get-auth-org-network-config-v1**](#get-auth-org-network-config-v1) | **GET** `/auth-org/v1/network-config` | Get security network configuration.
[**get-auth-org-service-provider-config-v1**](#get-auth-org-service-provider-config-v1) | **GET** `/auth-org/v1/service-provider-config` | Get service provider configuration.
[**get-auth-org-session-config-v1**](#get-auth-org-session-config-v1) | **GET** `/auth-org/v1/session-config` | Get auth org session configuration.
[**patch-auth-org-lockout-config-v1**](#patch-auth-org-lockout-config-v1) | **PATCH** `/auth-org/v1/lockout-config` | Update auth org lockout configuration
[**patch-auth-org-network-config-v1**](#patch-auth-org-network-config-v1) | **PATCH** `/auth-org/v1/network-config` | Update security network configuration.
[**patch-auth-org-service-provider-config-v1**](#patch-auth-org-service-provider-config-v1) | **PATCH** `/auth-org/v1/service-provider-config` | Update service provider configuration
[**patch-auth-org-session-config-v1**](#patch-auth-org-session-config-v1) | **PATCH** `/auth-org/v1/session-config` | Update auth org session configuration


## create-auth-org-network-config-v1
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-auth-org-network-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | networkconfiguration | [**Networkconfiguration**](../models/networkconfiguration) | True  | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type
[**Networkconfiguration**](../models/networkconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Network configuration for the tenant. | Networkconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.networkconfiguration import Networkconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    networkconfiguration = '''sailpoint.global_tenant_security_settings.Networkconfiguration()''' # Networkconfiguration | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    try:
        # Create security network configuration.
        new_networkconfiguration = Networkconfiguration.from_json(networkconfiguration)
        results = GlobalTenantSecuritySettingsApi(api_client).create_auth_org_network_config_v1(networkconfiguration=new_networkconfiguration)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).create_auth_org_network_config_v1(new_networkconfiguration)
        print("The response of GlobalTenantSecuritySettingsApi->create_auth_org_network_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->create_auth_org_network_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-lockout-config-v1
Get auth org lockout configuration.
This API returns the details of an org's lockout auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-lockout-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Lockoutconfiguration**](../models/lockoutconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Lockout configuration for the tenant&#39;s auth org. | Lockoutconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.lockoutconfiguration import Lockoutconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get auth org lockout configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_lockout_config_v1()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_lockout_config_v1()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_lockout_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_lockout_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-network-config-v1
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-network-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Networkconfiguration**](../models/networkconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Network configuration for the tenant&#39;s auth org. | Networkconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.networkconfiguration import Networkconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get security network configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_network_config_v1()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_network_config_v1()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_network_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_network_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-service-provider-config-v1
Get service provider configuration.
This API returns the details of an org's service provider auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-service-provider-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Serviceproviderconfiguration**](../models/serviceproviderconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Service provider configuration for the tenant. | Serviceproviderconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.serviceproviderconfiguration import Serviceproviderconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get service provider configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_service_provider_config_v1()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_service_provider_config_v1()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_service_provider_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_service_provider_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-session-config-v1
Get auth org session configuration.
This API returns the details of an org's session auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-session-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Sessionconfiguration**](../models/sessionconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Session configuration for the tenant&#39;s auth org. | Sessionconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.sessionconfiguration import Sessionconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get auth org session configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_session_config_v1()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_session_config_v1()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_session_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_session_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-lockout-config-v1
Update auth org lockout configuration
This API updates an existing lockout configuration for an org using PATCH


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-lockout-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

### Return type
[**Lockoutconfiguration**](../models/lockoutconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Auth Org lockout configuration. | Lockoutconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.global_tenant_security_settings.models.lockoutconfiguration import Lockoutconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jsonpatchoperation = '''[{"op":"replace","path":"/maximumAttempts","value":"7,"},{"op":"add","path":"/lockoutDuration","value":35}]''' # List[Jsonpatchoperation] | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

    try:
        # Update auth org lockout configuration
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_lockout_config_v1(jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_lockout_config_v1(new_jsonpatchoperation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_lockout_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_lockout_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-network-config-v1
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-network-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type
[**Networkconfiguration**](../models/networkconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Auth Org network configuration. | Networkconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.global_tenant_security_settings.models.networkconfiguration import Networkconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jsonpatchoperation = '''[{"op":"replace","path":"/whitelisted","value":"false,"},{"op":"add","path":"/geolocation","value":["AF","HN","ES"]}]''' # List[Jsonpatchoperation] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    try:
        # Update security network configuration.
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_network_config_v1(jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_network_config_v1(new_jsonpatchoperation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_network_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_network_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-service-provider-config-v1
Update service provider configuration
This API updates an existing service provider configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-service-provider-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

### Return type
[**Serviceproviderconfiguration**](../models/serviceproviderconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Auth Org Service Provider configuration updated. | Serviceproviderconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.global_tenant_security_settings.models.serviceproviderconfiguration import Serviceproviderconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jsonpatchoperation = '''[{"op":"replace","path":"/enabled","value":"true,"},{"op":"add","path":"/federationProtocolDetails/0/jitConfiguration","value":{"enabled":true,"sourceId":"2c9180857377ed2901739c12a2da5ac8","sourceAttributeMappings":{"firstName":"okta.firstName","lastName":"okta.lastName","email":"okta.email","employeeNumber":"okta.employeeNumber"}}}]''' # List[Jsonpatchoperation] | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

    try:
        # Update service provider configuration
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_service_provider_config_v1(jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_service_provider_config_v1(new_jsonpatchoperation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_service_provider_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_service_provider_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-session-config-v1
Update auth org session configuration
This API updates an existing session configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-session-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

### Return type
[**Sessionconfiguration**](../models/sessionconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Auth Org session configuration. | Sessionconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAuthOrgNetworkConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAuthOrgNetworkConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.global_tenant_security_settings.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.global_tenant_security_settings.api_client import ApiClient
from sailpoint.global_tenant_security_settings.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.global_tenant_security_settings.models.sessionconfiguration import Sessionconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    jsonpatchoperation = '''[{"op":"replace","path":"/rememberMe","value":"true,"},{"op":"add","path":"/maxSessionTime","value":480}]''' # List[Jsonpatchoperation] | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

    try:
        # Update auth org session configuration
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_session_config_v1(jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_session_config_v1(new_jsonpatchoperation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_session_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_session_config_v1: %s\n" % e)
```



[[Back to top]](#) 



