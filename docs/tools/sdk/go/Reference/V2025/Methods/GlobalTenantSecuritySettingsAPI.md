---
id: v2025-global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GlobalTenantSecuritySettings', 'V2025GlobalTenantSecuritySettings'] 
slug: /tools/sdk/go/v2025/methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings', 'V2025GlobalTenantSecuritySettings']
---

# GlobalTenantSecuritySettingsAPI
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config**](#create-auth-org-network-config) | **Post** `/auth-org/network-config` | Create security network configuration.
[**get-auth-org-lockout-config**](#get-auth-org-lockout-config) | **Get** `/auth-org/lockout-config` | Get Auth Org Lockout Configuration.
[**get-auth-org-network-config**](#get-auth-org-network-config) | **Get** `/auth-org/network-config` | Get security network configuration.
[**get-auth-org-service-provider-config**](#get-auth-org-service-provider-config) | **Get** `/auth-org/service-provider-config` | Get Service Provider Configuration.
[**get-auth-org-session-config**](#get-auth-org-session-config) | **Get** `/auth-org/session-config` | Get Auth Org Session Configuration.
[**patch-auth-org-lockout-config**](#patch-auth-org-lockout-config) | **Patch** `/auth-org/lockout-config` | Update Auth Org Lockout Configuration
[**patch-auth-org-network-config**](#patch-auth-org-network-config) | **Patch** `/auth-org/network-config` | Update security network configuration.
[**patch-auth-org-service-provider-config**](#patch-auth-org-service-provider-config) | **Patch** `/auth-org/service-provider-config` | Update Service Provider Configuration
[**patch-auth-org-session-config**](#patch-auth-org-session-config) | **Patch** `/auth-org/session-config` | Update Auth Org Session Configuration


## create-auth-org-network-config
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-auth-org-network-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAuthOrgNetworkConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkConfiguration** | [**NetworkConfiguration**](../models/network-configuration) | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters. | 

### Return type

[**NetworkConfiguration**](../models/network-configuration)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "range" : [ "1.3.7.2", "255.255.255.252/30" ],
          "whitelisted" : true,
          "geolocation" : [ "CA", "FR", "HT" ]
        }`) // NetworkConfiguration | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

  
   var networkConfiguration v2025.NetworkConfiguration
   if err := json.Unmarshal(data, &networkConfiguration); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig(context.Background()).NetworkConfiguration(networkConfiguration).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig(context.Background()).NetworkConfiguration(networkConfiguration).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAuthOrgNetworkConfig`: NetworkConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-lockout-config
Get Auth Org Lockout Configuration.
This API returns the details of an org's lockout auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-lockout-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgLockoutConfigRequest struct via the builder pattern


### Return type

[**LockoutConfiguration**](../models/lockout-configuration)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfig(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuthOrgLockoutConfig`: LockoutConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgLockoutConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-network-config
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-network-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgNetworkConfigRequest struct via the builder pattern


### Return type

[**NetworkConfiguration**](../models/network-configuration)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuthOrgNetworkConfig`: NetworkConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-service-provider-config
Get Service Provider Configuration.
This API returns the details of an org's service provider auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-service-provider-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgServiceProviderConfigRequest struct via the builder pattern


### Return type

[**ServiceProviderConfiguration**](../models/service-provider-configuration)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfig(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuthOrgServiceProviderConfig`: ServiceProviderConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgServiceProviderConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-session-config
Get Auth Org Session Configuration.
This API returns the details of an org's session auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-auth-org-session-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthOrgSessionConfigRequest struct via the builder pattern


### Return type

[**SessionConfiguration**](../models/session-configuration)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfig(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuthOrgSessionConfig`: SessionConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgSessionConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-lockout-config
Update Auth Org Lockout Configuration
This API updates an existing lockout configuration for an org using PATCH


[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-lockout-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgLockoutConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   &#x60;1. maximumAttempts &gt;&#x3D; 1 &amp;&amp; maximumAttempts &lt;&#x3D; 15   2. lockoutDuration &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60   3. lockoutWindow &gt;&#x3D; 5 &amp;&amp; lockoutDuration &lt;&#x3D; 60&#x60; | 

### Return type

[**LockoutConfiguration**](../models/lockout-configuration)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/maximumAttempts, value=7,}, {op=add, path=/lockoutDuration, value=35}]`) // []JsonPatchOperation | A list of auth org lockout configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Lockout Config conforms to certain logical guidelines, which are:   `1. maximumAttempts >= 1 && maximumAttempts <= 15   2. lockoutDuration >= 5 && lockoutDuration <= 60   3. lockoutWindow >= 5 && lockoutDuration <= 60`

  
   var jsonPatchOperation v2025.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAuthOrgLockoutConfig`: LockoutConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgLockoutConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-network-config
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-network-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgNetworkConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters. | 

### Return type

[**NetworkConfiguration**](../models/network-configuration)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/whitelisted, value=false,}, {op=add, path=/geolocation, value=[AF, HN, ES]}]`) // []JsonPatchOperation | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

  
   var jsonPatchOperation v2025.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAuthOrgNetworkConfig`: NetworkConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-service-provider-config
Update Service Provider Configuration
This API updates an existing service provider configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-service-provider-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgServiceProviderConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email) | 

### Return type

[**ServiceProviderConfiguration**](../models/service-provider-configuration)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/enabled, value=true,}, {op=add, path=/federationProtocolDetails/0/jitConfiguration, value={enabled=true, sourceId=2c9180857377ed2901739c12a2da5ac8, sourceAttributeMappings={firstName=okta.firstName, lastName=okta.lastName, email=okta.email, employeeNumber=okta.employeeNumber}}}]`) // []JsonPatchOperation | A list of auth org service provider configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Note: /federationProtocolDetails/0 is IdpDetails /federationProtocolDetails/1 is SpDetails Ensures that the patched ServiceProviderConfig conforms to certain logical guidelines, which are:   1. Do not add or remove any elements in the federation protocol details in the service provider configuration.   2. Do not modify, add, or delete the service provider details element in the federation protocol details.   3. If this is the first time the patched ServiceProviderConfig enables Remote IDP sign-in, it must also include IDPDetails.   4. If the patch enables Remote IDP sign in, the entityID in the IDPDetails cannot be null. IDPDetails must include an entityID.   5. Any JIT configuration update must be valid.  Just in time configuration update must be valid when enabled. This includes:   - A Source ID   - Source attribute mappings   - Source attribute maps have all the required key values (firstName, lastName, email)

  
   var jsonPatchOperation v2025.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAuthOrgServiceProviderConfig`: ServiceProviderConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgServiceProviderConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-session-config
Update Auth Org Session Configuration
This API updates an existing session configuration for an org using PATCH.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-auth-org-session-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthOrgSessionConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   &#x60;1. maxSessionTime &gt;&#x3D; 1 &amp;&amp; maxSessionTime &lt;&#x3D; 10080 (1 week)   2. maxIdleTime &gt;&#x3D; 1 &amp;&amp; maxIdleTime &lt;&#x3D; 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.&#x60;  | 

### Return type

[**SessionConfiguration**](../models/session-configuration)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/rememberMe, value=true,}, {op=add, path=/maxSessionTime, value=480}]`) // []JsonPatchOperation | A list of auth org session configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Ensures that the patched Session Config conforms to certain logical guidelines, which are:   `1. maxSessionTime >= 1 && maxSessionTime <= 10080 (1 week)   2. maxIdleTime >= 1 && maxIdleTime <= 1440 (1 day)   3. maxSessionTime must have a greater duration than maxIdleTime.` 

  
   var jsonPatchOperation v2025.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2025.GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAuthOrgSessionConfig`: SessionConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgSessionConfig`: %v\n", resp)
}
```

[[Back to top]](#)

