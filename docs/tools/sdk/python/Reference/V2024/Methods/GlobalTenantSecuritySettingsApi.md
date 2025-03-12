---
id: v2024-global-tenant-security-settings
title: Global_Tenant_Security_Settings
pagination_label: Global_Tenant_Security_Settings
sidebar_label: Global_Tenant_Security_Settings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Global_Tenant_Security_Settings', 'V2024Global_Tenant_Security_Settings'] 
slug: /tools/sdk/python/v2024/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'Global_Tenant_Security_Settings', 'V2024Global_Tenant_Security_Settings']
---

# sailpoint.v2024.GlobalTenantSecuritySettingsApi
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config**](#create-auth-org-network-config) | **POST** `/auth-org/network-config` | Create security network configuration.
[**get-auth-org-network-config**](#get-auth-org-network-config) | **GET** `/auth-org/network-config` | Get security network configuration.
[**patch-auth-org-network-config**](#patch-auth-org-network-config) | **PATCH** `/auth-org/network-config` | Update security network configuration.


## create-auth-org-network-config
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-auth-org-network-config)

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
import sailpoint.v2024
from sailpoint.v2024.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.network_configuration import NetworkConfiguration
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    network_configuration = {
          "range" : [ "1.3.7.2", "255.255.255.252/30" ],
          "whitelisted" : true,
          "geolocation" : [ "CA", "FR", "HT" ]
        } # NetworkConfiguration | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    try:
        # Create security network configuration.
        new_network_configuration = NetworkConfiguration()
        new_network_configuration.from_json(network_configuration)
        results =GlobalTenantSecuritySettingsApi(api_client).create_auth_org_network_config(new_network_configuration)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).create_auth_org_network_config(new_network_configuration)
        print("The response of GlobalTenantSecuritySettingsApi->create_auth_org_network_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->create_auth_org_network_config: %s\n" % e)
```



[[Back to top]](#) 

## get-auth-org-network-config
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-auth-org-network-config)

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
import sailpoint.v2024
from sailpoint.v2024.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.network_configuration import NetworkConfiguration
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:

    try:
        # Get security network configuration.
        
        results =GlobalTenantSecuritySettingsApi(api_client).get_auth_org_network_config()
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).get_auth_org_network_config()
        print("The response of GlobalTenantSecuritySettingsApi->get_auth_org_network_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->get_auth_org_network_config: %s\n" % e)
```



[[Back to top]](#) 

## patch-auth-org-network-config
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-auth-org-network-config)

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
import sailpoint.v2024
from sailpoint.v2024.api.global_tenant_security_settings_api import GlobalTenantSecuritySettingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.v2024.models.network_configuration import NetworkConfiguration
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    [{op=replace, path=/whitelisted, value=false,}, {op=add, path=/geolocation, value=[AF, HN, ES]}] # List[JsonPatchOperation] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
     json_patch_operation = {
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        } # List[JsonPatchOperation] | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.
    

    try:
        # Update security network configuration.
        new_json_patch_operation = JsonPatchOperation()
        new_json_patch_operation.from_json(json_patch_operation)
        results =GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_network_config(new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = GlobalTenantSecuritySettingsApi(api_client).patch_auth_org_network_config(new_json_patch_operation)
        print("The response of GlobalTenantSecuritySettingsApi->patch_auth_org_network_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling GlobalTenantSecuritySettingsApi->patch_auth_org_network_config: %s\n" % e)
```



[[Back to top]](#) 



