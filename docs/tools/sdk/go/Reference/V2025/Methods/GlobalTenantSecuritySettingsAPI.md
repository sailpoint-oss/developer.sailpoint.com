---
id: global-tenant-security-settings
title: GlobalTenantSecuritySettings
pagination_label: GlobalTenantSecuritySettings
sidebar_label: GlobalTenantSecuritySettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GlobalTenantSecuritySettings', 'GlobalTenantSecuritySettings'] 
slug: /tools/sdk/go//methods/global-tenant-security-settings
tags: ['SDK', 'Software Development Kit', 'GlobalTenantSecuritySettings', 'GlobalTenantSecuritySettings']
---

# GlobalTenantSecuritySettingsAPI
  Use this API to implement and customize global tenant security settings.
With this functionality in place, administrators can manage the global security settings that a tenant/org has.
This API can be used to configure the networks and Geographies allowed to access Identity Security Cloud URLs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-auth-org-network-config**](#create-auth-org-network-config) | **Post** `/auth-org/network-config` | Create security network configuration.
[**get-auth-org-network-config**](#get-auth-org-network-config) | **Get** `/auth-org/network-config` | Get security network configuration.
[**patch-auth-org-network-config**](#patch-auth-org-network-config) | **Patch** `/auth-org/network-config` | Update security network configuration.


## create-auth-org-network-config
Create security network configuration.
This API returns the details of an org's network auth configuration. Requires security scope of: 'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api//create-auth-org-network-config)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    networkConfiguration := fmt.Sprintf(`{
          "range" : [ "1.3.7.2", "255.255.255.252/30" ],
          "whitelisted" : true,
          "geolocation" : [ "CA", "FR", "HT" ]
        }`) # NetworkConfiguration | Network configuration creation request body.   The following constraints ensure the request body conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig(context.Background()).NetworkConfiguration(networkConfiguration).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAuthOrgNetworkConfig`: NetworkConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.CreateAuthOrgNetworkConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-auth-org-network-config
Get security network configuration.
This API returns the details of an org's network auth configuration.

[API Spec](https://developer.sailpoint.com/docs/api//get-auth-org-network-config)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuthOrgNetworkConfig`: NetworkConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.GetAuthOrgNetworkConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-org-network-config
Update security network configuration.
This API updates an existing network configuration for an org using PATCH
 Requires security scope of:  'sp:auth-org:manage'

[API Spec](https://developer.sailpoint.com/docs/api//patch-auth-org-network-config)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/whitelisted, value=false,}, {op=add, path=/geolocation, value=[AF, HN, ES]}]`) # []JsonPatchOperation | A list of auth org network configuration update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Ensures that the patched Network Config conforms to certain logical guidelines, which are:   1. Each string element in the range array must be a valid ip address or ip subnet mask.   2. Each string element in the geolocation array must be 2 characters, and they can only be uppercase letters.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAuthOrgNetworkConfig`: NetworkConfiguration
	fmt.Fprintf(os.Stdout, "Response from `GlobalTenantSecuritySettingsAPI.PatchAuthOrgNetworkConfig`: %v\n", resp)
}
```

[[Back to top]](#)

