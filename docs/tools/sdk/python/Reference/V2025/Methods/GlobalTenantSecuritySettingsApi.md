---
id: v2025-global-tenant-security-settings
title: Global_Tenant_Security_Settings
pagination_label: Global_Tenant_Security_Settings
sidebar_label: Global_Tenant_Security_Settings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Global_Tenant_Security_Settings', 'V2025Global_Tenant_Security_Settings'] 
slug: /tools/sdk/python/v2025/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'Global_Tenant_Security_Settings', 'V2025Global_Tenant_Security_Settings']
---

# sailpoint.v2025.GlobalTenantSecuritySettingsApi
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config**](#create-auth-org-network-config) | **POST** `/auth-org/network-config` | Create security network configuration.
[**get-auth-org-lockout-config**](#get-auth-org-lockout-config) | **GET** `/auth-org/lockout-config` | Get auth org lockout configuration.
[**get-auth-org-network-config**](#get-auth-org-network-config) | **GET** `/auth-org/network-config` | Get security network configuration.
[**get-auth-org-service-provider-config**](#get-auth-org-service-provider-config) | **GET** `/auth-org/service-provider-config` | Get service provider configuration.
[**get-auth-org-session-config**](#get-auth-org-session-config) | **GET** `/auth-org/session-config` | Get auth org session configuration.
[**patch-auth-org-lockout-config**](#patch-auth-org-lockout-config) | **PATCH** `/auth-org/lockout-config` | Update auth org lockout configuration
[**patch-auth-org-network-config**](#patch-auth-org-network-config) | **PATCH** `/auth-org/network-config` | Update security network configuration.
[**patch-auth-org-service-provider-config**](#patch-auth-org-service-provider-config) | **PATCH** `/auth-org/service-provider-config` | Update service provider configuration
[**patch-auth-org-session-config**](#patch-auth-org-session-config) | **PATCH** `/auth-org/session-config` | Update auth org session configuration


## create-auth-org-network-config
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-auth-org-network-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | network_configuration | [**NetworkConfiguration**](../models/network-configuration) | True  | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type
[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Network configuration for the tenant. | NetworkConfiguration |  -  |
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
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.network_configuration import NetworkConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    network_configuration = '''{
          "range" : [ "1.3.7.2", "255.255.255.252/30" ],
          "whitelisted" : true,
          "geolocation" : [ "CA", "FR", "HT" ]
        }''' # NetworkConfiguration | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    try:
        # Create security network configuration.
        new_network_configuration = NetworkConfiguration.from_json(network_configuration)
        results = GlobalTenantSecuritySettingsApi(api_client).create_auth_org_network_config(network_configuration=new_network_configuration)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).create_auth_org_network_config(new_network_configuration)
        print("The response of GlobalTenantSecuritySettingsApi->create_auth_org_network_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->create_auth_org_network_config: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-lockout-config
Get auth org lockout configuration.
This API returns the details of an org's lockout auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-lockout-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**LockoutConfiguration**](../models/lockout-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Lockout configuration for the tenant&#39;s auth org. | LockoutConfiguration |  -  |
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
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.lockout_configuration import LockoutConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get auth org lockout configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_lockout_config()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_lockout_config()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_lockout_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_lockout_config: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-network-config
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-network-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Network configuration for the tenant&#39;s auth org. | NetworkConfiguration |  -  |
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
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.network_configuration import NetworkConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get security network configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_network_config()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_network_config()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_network_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_network_config: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-service-provider-config
Get service provider configuration.
This API returns the details of an org's service provider auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-service-provider-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ServiceProviderConfiguration**](../models/service-provider-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Service provider configuration for the tenant. | ServiceProviderConfiguration |  -  |
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
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.service_provider_configuration import ServiceProviderConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get service provider configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_service_provider_config()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_service_provider_config()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_service_provider_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_service_provider_config: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-session-config
Get auth org session configuration.
This API returns the details of an org's session auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-session-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**SessionConfiguration**](../models/session-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Session configuration for the tenant&#39;s auth org. | SessionConfiguration |  -  |
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
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.session_configuration import SessionConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get auth org session configuration.
        
        results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_session_config()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_session_config()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_session_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_session_config: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-lockout-config
Update auth org lockout configuration
This API updates an existing lockout configuration for an org using PATCH


[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-lockout-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

### Return type
[**LockoutConfiguration**](../models/lockout-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Auth Org lockout configuration. | LockoutConfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2025.models.lockout_configuration import LockoutConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    json_patch_operation = '''[{op=replace, path=/maximumAttempts, value=7,}, {op=add, path=/lockoutDuration, value=35}]''' # List[JsonPatchOperation] | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

    try:
        # Update auth org lockout configuration
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_lockout_config(json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_lockout_config(new_json_patch_operation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_lockout_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_lockout_config: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-network-config
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-network-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

### Return type
[**NetworkConfiguration**](../models/network-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Auth Org network configuration. | NetworkConfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2025.models.network_configuration import NetworkConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    json_patch_operation = '''[{op=replace, path=/whitelisted, value=false,}, {op=add, path=/geolocation, value=[AF, HN, ES]}]''' # List[JsonPatchOperation] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    try:
        # Update security network configuration.
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_network_config(json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_network_config(new_json_patch_operation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_network_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_network_config: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-service-provider-config
Update service provider configuration
This API updates an existing service provider configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-service-provider-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

### Return type
[**ServiceProviderConfiguration**](../models/service-provider-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Auth Org Service Provider configuration updated. | ServiceProviderConfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2025.models.service_provider_configuration import ServiceProviderConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    json_patch_operation = '''[{op=replace, path=/enabled, value=true,}, {op=add, path=/federationProtocolDetails/0/jitConfiguration, value={enabled=true, sourceId=2c9180857377ed2901739c12a2da5ac8, sourceAttributeMappings={firstName=okta.firstName, lastName=okta.lastName, email=okta.email, employeeNumber=okta.employeeNumber}}}]''' # List[JsonPatchOperation] | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

    try:
        # Update service provider configuration
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_service_provider_config(json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_service_provider_config(new_json_patch_operation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_service_provider_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_service_provider_config: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-session-config
Update auth org session configuration
This API updates an existing session configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-session-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

### Return type
[**SessionConfiguration**](../models/session-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Auth Org session configuration. | SessionConfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2025.models.session_configuration import SessionConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    json_patch_operation = '''[{op=replace, path=/rememberMe, value=true,}, {op=add, path=/maxSessionTime, value=480}]''' # List[JsonPatchOperation] | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

    try:
        # Update auth org session configuration
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_session_config(json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_session_config(new_json_patch_operation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_session_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_session_config: %s\n" % e)
```



[[Back to top]](#) 



