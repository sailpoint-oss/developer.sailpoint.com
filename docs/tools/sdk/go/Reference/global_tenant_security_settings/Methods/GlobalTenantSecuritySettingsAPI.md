---
id: v1-global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GlobalTenantSecuritySettings', 'V1GlobalTenantSecuritySettings'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings', 'V1GlobalTenantSecuritySettings']
---

# GlobalTenantSecuritySettingsAPI
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config-v1**](#create-auth-org-network-config-v1) | **Post** `/auth-org/v1/network-config` | Create security network configuration.
[**get-auth-org-lockout-config-v1**](#get-auth-org-lockout-config-v1) | **Get** `/auth-org/v1/lockout-config` | Get auth org lockout configuration.
[**get-auth-org-network-config-v1**](#get-auth-org-network-config-v1) | **Get** `/auth-org/v1/network-config` | Get security network configuration.
[**get-auth-org-service-provider-config-v1**](#get-auth-org-service-provider-config-v1) | **Get** `/auth-org/v1/service-provider-config` | Get service provider configuration.
[**get-auth-org-session-config-v1**](#get-auth-org-session-config-v1) | **Get** `/auth-org/v1/session-config` | Get auth org session configuration.
[**patch-auth-org-lockout-config-v1**](#patch-auth-org-lockout-config-v1) | **Patch** `/auth-org/v1/lockout-config` | Update auth org lockout configuration
[**patch-auth-org-network-config-v1**](#patch-auth-org-network-config-v1) | **Patch** `/auth-org/v1/network-config` | Update security network configuration.
[**patch-auth-org-service-provider-config-v1**](#patch-auth-org-service-provider-config-v1) | **Patch** `/auth-org/v1/service-provider-config` | Update service provider configuration
[**patch-auth-org-session-config-v1**](#patch-auth-org-session-config-v1) | **Patch** `/auth-org/v1/session-config` | Update auth org session configuration


## create-auth-org-network-config-v1
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-auth-org-network-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAuthOrgNetworkConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkconfiguration** | [**Networkconfiguration**](../models/networkconfiguration) | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters. | 

### Return type

[**Networkconfiguration**](../models/networkconfiguration)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {
    networkconfiguration := []byte(``) // Networkconfiguration | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    var networkconfiguration v1.Networkconfiguration
    if err := json.Unmarshal(networkconfiguration, &networkconfiguration); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfigV1(context.Background()).Networkconfiguration(networkconfiguration).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfigV1(context.Background()).Networkconfiguration(networkconfiguration).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAuthOrgNetworkConfigV1`: Networkconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-lockout-config-v1
Get auth org lockout configuration.
This API returns the details of an org's lockout auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-lockout-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgLockoutConfigV1Request struct via the builder pattern


### Return type

[**Lockoutconfiguration**](../models/lockoutconfiguration)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthOrgLockoutConfigV1`: Lockoutconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-network-config-v1
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-network-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgNetworkConfigV1Request struct via the builder pattern


### Return type

[**Networkconfiguration**](../models/networkconfiguration)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthOrgNetworkConfigV1`: Networkconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-service-provider-config-v1
Get service provider configuration.
This API returns the details of an org's service provider auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-service-provider-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgServiceProviderConfigV1Request struct via the builder pattern


### Return type

[**Serviceproviderconfiguration**](../models/serviceproviderconfiguration)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthOrgServiceProviderConfigV1`: Serviceproviderconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-session-config-v1
Get auth org session configuration.
This API returns the details of an org's session auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-org-session-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgSessionConfigV1Request struct via the builder pattern


### Return type

[**Sessionconfiguration**](../models/sessionconfiguration)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthOrgSessionConfigV1`: Sessionconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-lockout-config-v1
Update auth org lockout configuration
This API updates an existing lockout configuration for an org using PATCH


[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-lockout-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgLockoutConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   &#x60;1. maximumAttempts &gt;&#x3D; 1 &amp;&amp; maximumAttempts &lt;&#x3D; 15   2. lockoutDuration &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60   3. lockoutWindow &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60&#x60; | 

### Return type

[**Lockoutconfiguration**](../models/lockoutconfiguration)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/maximumAttempts","value":"7,"},{"op":"add","path":"/lockoutDuration","value":35}]`) // []Jsonpatchoperation | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAuthOrgLockoutConfigV1`: Lockoutconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-network-config-v1
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-network-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgNetworkConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters. | 

### Return type

[**Networkconfiguration**](../models/networkconfiguration)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/whitelisted","value":"false,"},{"op":"add","path":"/geolocation","value":["AF","HN","ES"]}]`) // []Jsonpatchoperation | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAuthOrgNetworkConfigV1`: Networkconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-service-provider-config-v1
Update service provider configuration
This API updates an existing service provider configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-service-provider-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgServiceProviderConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email) | 

### Return type

[**Serviceproviderconfiguration**](../models/serviceproviderconfiguration)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/enabled","value":"true,"},{"op":"add","path":"/federationProtocolDetails/0/jitConfiguration","value":{"enabled":true,"sourceId":"2c9180857377ed2901739c12a2da5ac8","sourceAttributeMappings":{"firstName":"okta.firstName","lastName":"okta.lastName","email":"okta.email","employeeNumber":"okta.employeeNumber"}}}]`) // []Jsonpatchoperation | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAuthOrgServiceProviderConfigV1`: Serviceproviderconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-session-config-v1
Update auth org session configuration
This API updates an existing session configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-org-session-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgSessionConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   &#x60;1. maxSessionTime &gt;&#x3D; 1 &amp;&amp; maxSessionTime &lt;&#x3D; 10080 (1 week)   2. maxIdleTime &gt;&#x3D; 1 &amp;&amp; maxIdleTime &lt;&#x3D; 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.&#x60;  | 

### Return type

[**Sessionconfiguration**](../models/sessionconfiguration)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/global_tenant_security_settings"
)

func main() {
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/rememberMe","value":"true,"},{"op":"add","path":"/maxSessionTime","value":480}]`) // []Jsonpatchoperation | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfigV1(context.Background()).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAuthOrgSessionConfigV1`: Sessionconfiguration
    fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

